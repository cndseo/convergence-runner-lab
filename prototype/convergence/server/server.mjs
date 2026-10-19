import http from 'node:http';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { utcChallengeDate, validChallengeDate, computeDailyScore } from '../src/dailyChallenge.mjs';

export const PRODUCTS = Object.freeze({
 colors:{sku:'colors',name:'CONVERGENCE — Couleurs de la mobilisation',cents:199,description:'Apparences et accessoires cosmétiques'},
 scenes:{sku:'scenes',name:'CONVERGENCE — Ambiances spéciales',cents:399,description:'Thèmes visuels sans avantage tactique'},
 supporter:{sku:'supporter',name:'CONVERGENCE — Soutien',cents:599,description:'Apparence de soutien cosmétique'}
});
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const json=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data));};
const validDay=(day,today)=>validChallengeDate(day)&&
  (Date.parse(today+'T00:00:00Z')-Date.parse(day+'T00:00:00Z'))/86400000>=0 &&
  (Date.parse(today+'T00:00:00Z')-Date.parse(day+'T00:00:00Z'))/86400000<=7;
const safeName=(s,id)=>typeof s==='string'&&/^[\p{L}\p{N} _-]{2,18}$/u.test(s.trim())?s.trim():'Joueur-'+id.slice(0,4);

function database(file){
 if(file!==':memory:')mkdirSync(dirname(file),{recursive:true});
 const db=new DatabaseSync(file);
 db.exec(`PRAGMA journal_mode=WAL;PRAGMA foreign_keys=ON;
 CREATE TABLE IF NOT EXISTS players(id TEXT PRIMARY KEY,token_hash TEXT UNIQUE NOT NULL,created TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS scores(day TEXT NOT NULL,player_id TEXT NOT NULL REFERENCES players(id),
 name TEXT NOT NULL,survivors INTEGER NOT NULL CHECK(survivors BETWEEN 1 AND 72),route TEXT NOT NULL,created TEXT NOT NULL,
 PRIMARY KEY(day,player_id));
 CREATE INDEX IF NOT EXISTS scores_ranking ON scores(day,survivors DESC,created ASC);
 CREATE TABLE IF NOT EXISTS orders(session_id TEXT PRIMARY KEY,player_id TEXT NOT NULL REFERENCES players(id),sku TEXT NOT NULL,created TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS inventory(player_id TEXT NOT NULL REFERENCES players(id),sku TEXT NOT NULL,created TEXT NOT NULL,PRIMARY KEY(player_id,sku));`);
 return db;
}
function auth(db,req){
 const bearer=req.headers.authorization||'';
 if(!/^Bearer [\w-]{43}$/.test(bearer))return null;
 return db.prepare('SELECT id FROM players WHERE token_hash=?').get(sha(bearer.slice(7)))||null;
}
async function readBody(req){
 const parts=[];let length=0;
 for await(const chunk of req){length+=chunk.length;if(length>16384)throw new RangeError('Payload too large');parts.push(chunk);}
 return Buffer.concat(parts);
}

export function createApiServer({dbPath=':memory:',clock=()=>new Date(),corsOrigins=[],
 gameUrl='http://127.0.0.1:4320/convergence-runner-lab/convergence/',stripeClient=null,
 webhookSecret='',paymentsMode='disabled'}={}){
 if(!['disabled','test'].includes(paymentsMode))throw Error('Only explicitly configured test payments are permitted');
 const paymentsReady=paymentsMode==='test'&&!!stripeClient&&!!webhookSecret;
 const db=database(dbPath);
 const origins=new Set([...corsOrigins,new URL(gameUrl).origin,'http://127.0.0.1:4320','http://localhost:4320']);
 const server=http.createServer(async(req,res)=>{
  const origin=req.headers.origin;
  if(origin&&!origins.has(origin))return json(res,403,{error:'origin_not_allowed'});
  if(origin){
   res.setHeader('Access-Control-Allow-Origin',origin);
   res.setHeader('Vary','Origin');
   res.setHeader('Access-Control-Allow-Headers','Authorization,Content-Type,Stripe-Signature');
   res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  }
  if(req.method==='OPTIONS'){res.writeHead(204);res.end();return;}
  try{
   const uri=new URL(req.url,'http://localhost'),path=uri.pathname;
   if(req.method==='GET'&&path==='/api/v1/health')
    return json(res,200,{ok:true,leaderboard:true,payments:paymentsReady?'test':'disabled',currency:'eur'});
   if(req.method==='POST'&&path==='/api/v1/players'){
    const id=crypto.randomUUID(),token=crypto.randomBytes(32).toString('base64url');
    db.prepare('INSERT INTO players VALUES(?,?,?)').run(id,sha(token),new Date().toISOString());
    return json(res,201,{playerId:id,token});
   }
   if(req.method==='GET'&&path==='/api/v1/daily/leaderboard'){
    const day=uri.searchParams.get('day')||utcChallengeDate(clock());
    if(!validDay(day,utcChallengeDate(clock())))return json(res,400,{error:'invalid_day'});
    const leaders=db.prepare('SELECT name,survivors FROM scores WHERE day=? ORDER BY survivors DESC,created ASC LIMIT 20').all(day);
    return json(res,200,{day,leaders});
   }
   if(req.method==='POST'&&path==='/api/v1/daily/scores'){
    const player=auth(db,req);
    if(!player)return json(res,401,{error:'unauthorized'});
    const params=JSON.parse((await readBody(req)).toString('utf8'));
    if(!validDay(params.day,utcChallengeDate(clock())))return json(res,400,{error:'invalid_day'});
    const result=computeDailyScore(params.day,params.path);
    if(!result.won)return json(res,422,{error:'losing_route'});
    const name=safeName(params.name,player.id),created=new Date().toISOString();
    db.prepare(`INSERT INTO scores(day,player_id,name,survivors,route,created) VALUES(?,?,?,?,?,?)
      ON CONFLICT(day,player_id) DO UPDATE SET name=excluded.name,
      survivors=excluded.survivors,route=excluded.route,created=excluded.created
      WHERE excluded.survivors > scores.survivors`)
      .run(params.day,player.id,name,result.survivors,JSON.stringify(params.path),created);
    const current=db.prepare('SELECT survivors FROM scores WHERE day=? AND player_id=?').get(params.day,player.id);
    return json(res,200,{certified:true,day:params.day,survivors:current.survivors});
   }
   if(req.method==='GET'&&path==='/api/v1/shop/catalog')
    return json(res,200,{currency:'eur',payments:paymentsReady?'test':'disabled',
      items:Object.values(PRODUCTS).map(p=>({sku:p.sku,name:p.name,price_cents:p.cents,description:p.description}))});
   if(req.method==='GET'&&path==='/api/v1/shop/inventory'){
    const player=auth(db,req);
    if(!player)return json(res,401,{error:'unauthorized'});
    const owned=db.prepare('SELECT sku FROM inventory WHERE player_id=?').all(player.id).map(x=>x.sku);
    return json(res,200,{owned});
   }
   if(req.method==='POST'&&path==='/api/v1/shop/checkout'){
    if(!paymentsReady)return json(res,503,{error:'payments_disabled'});
    const player=auth(db,req);
    if(!player)return json(res,401,{error:'unauthorized'});
    const params=JSON.parse((await readBody(req)).toString('utf8'));
    const product=PRODUCTS[params.sku];
    if(!product)return json(res,400,{error:'unknown_product'});
    if(db.prepare('SELECT sku FROM inventory WHERE player_id=? AND sku=?').get(player.id,product.sku))
      return json(res,409,{error:'already_owned'});
    const session=await stripeClient.checkout.sessions.create({
      mode:'payment',
      line_items:[{price_data:{currency:'eur',unit_amount:product.cents,
        product_data:{name:product.name,description:product.description}},quantity:1}],
      client_reference_id:player.id,metadata:{game:'convergence',sku:product.sku,player_id:player.id},
      success_url:gameUrl+(gameUrl.includes('?')?'&':'?')+'purchase=returned',
      cancel_url:gameUrl+(gameUrl.includes('?')?'&':'?')+'purchase=cancelled'
    });
    if(!/^https:\/\/checkout\.stripe\.com\//.test(session.url||''))throw Error('Invalid Checkout URL');
    return json(res,200,{url:session.url});
   }
   if(req.method==='POST'&&path==='/api/v1/shop/stripe-webhook'){
    if(!paymentsReady)return json(res,503,{error:'payments_disabled'});
    const raw=await readBody(req);
    const event=stripeClient.webhooks.constructEvent(raw,req.headers['stripe-signature'],webhookSecret);
    if(['checkout.session.completed','checkout.session.async_payment_succeeded'].includes(event.type)){
     const session=event.data.object;
     if(session.payment_status==='paid'&&session.metadata?.game==='convergence'){
      const sku=session.metadata.sku,pid=session.metadata.player_id;
      if(!PRODUCTS[sku]||!db.prepare('SELECT id FROM players WHERE id=?').get(pid))
       return json(res,400,{error:'invalid_metadata'});
      db.exec('BEGIN IMMEDIATE');
      try{
       db.prepare('INSERT OR IGNORE INTO orders VALUES(?,?,?,?)').run(session.id,pid,sku,new Date().toISOString());
       db.prepare('INSERT OR IGNORE INTO inventory VALUES(?,?,?)').run(pid,sku,new Date().toISOString());
       db.exec('COMMIT');
      }catch(e){db.exec('ROLLBACK');throw e;}
     }
    }
    return json(res,200,{received:true});
   }
   return json(res,404,{error:'not_found'});
  }catch(e){
   const code=e instanceof SyntaxError||e instanceof TypeError||e instanceof RangeError||/signature/i.test(e.message)?400:500;
   return json(res,code,{error:code===500?'server_error':e.message});
  }
 });
 return {server,db,close:()=>new Promise(done=>server.close(()=>{db.close();done();}))};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const key=process.env.STRIPE_SECRET_KEY||'';
 if(key&&!/^(sk_test_|rk_test_)/.test(key)){
  console.error('Refusing non-test Stripe key');process.exit(2);
 }
 let stripeClient=null;
 if(key){
  const {default:Stripe}=await import('stripe');
  stripeClient=new Stripe(key,{apiVersion:'2026-08-26.dahlia'});
 }
 const app=createApiServer({
  dbPath:process.env.DB_PATH||resolve('data/convergence.sqlite'),
  corsOrigins:process.env.ALLOWED_ORIGINS?.split(',').map(s=>s.trim())||[],
  gameUrl:process.env.GAME_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/',
  stripeClient,webhookSecret:process.env.STRIPE_WEBHOOK_SECRET||'',
  paymentsMode:process.env.PAYMENTS_MODE==='test'?'test':'disabled'
 });
 const port=Number(process.env.PORT||4319);
 app.server.listen(port,'127.0.0.1',()=>console.log('CONVERGENCE API listening on port '+port));
}

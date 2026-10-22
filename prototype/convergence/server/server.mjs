import http from 'node:http';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { utcChallengeDate, validChallengeDate, computeDailyScore } from '../src/dailyChallenge.mjs';

export const PRODUCTS = Object.freeze({
 spiderman:{sku:'spiderman',name:'CONVERGENCE — Personnage Spider-Man',cents:199,description:'Personnage déguisé - apparence visuelle, sans avantage tactique'},
 dinosaur:{sku:'dinosaur',name:'CONVERGENCE — Dinosaure gonflable',cents:199,description:'Personnage déguisé, sans avantage tactique'},
 marseille1:{sku:'marseille1',name:'CONVERGENCE — Renfort marseillais x1',cents:299,description:'Une intervention spéciale en campagne',charges:1},
 marseille3:{sku:'marseille3',name:'CONVERGENCE — Renfort marseillais x3',cents:897,description:'Trois interventions spéciales en campagne',charges:3},
 genz3:{sku:'genz3',name:'CONVERGENCE - 6 tirs GenZ',cents:99,description:'6 tirs pyrotechniques virtuels (campagne)',ammo:6},
 genz12:{sku:'genz12',name:'CONVERGENCE - 24 tirs GenZ',cents:299,description:'24 tirs pyrotechniques virtuels (campagne)',ammo:24},
 marseille10:{sku:'marseille10',name:'CONVERGENCE — Renfort marseillais x10',cents:2990,description:'Dix interventions spéciales en campagne',charges:10}
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
 CREATE TABLE IF NOT EXISTS inventory(player_id TEXT NOT NULL REFERENCES players(id),sku TEXT NOT NULL,created TEXT NOT NULL,PRIMARY KEY(player_id,sku));
 CREATE TABLE IF NOT EXISTS marseille_charges(player_id TEXT PRIMARY KEY REFERENCES players(id),charges INTEGER NOT NULL DEFAULT 0 CHECK(charges>=0));
 CREATE TABLE IF NOT EXISTS support_redemptions(request_id TEXT PRIMARY KEY,player_id TEXT NOT NULL REFERENCES players(id),remaining INTEGER NOT NULL,created TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS genz_ammo(player_id TEXT PRIMARY KEY REFERENCES players(id),charges INTEGER NOT NULL DEFAULT 0 CHECK(charges>=0));
 CREATE TABLE IF NOT EXISTS genz_redemptions(request_id TEXT PRIMARY KEY,player_id TEXT NOT NULL REFERENCES players(id),remaining INTEGER NOT NULL,created TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS unclaimed_orders(session_id TEXT PRIMARY KEY,sku TEXT NOT NULL,created TEXT NOT NULL);`);
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
 webhookSecret='',paymentsMode='disabled',paymentLinks={}}={}){
 if(!['disabled','test','live'].includes(paymentsMode))throw Error('Invalid payments mode');
 if(paymentsMode==='live' && ((!stripeClient&&!Object.keys(paymentLinks).length)||!webhookSecret||!gameUrl.startsWith('https://')))
  throw Error('Live payments require HTTPS game URL, Checkout or Payment Links, and webhook signature');
 const validLinks=Object.entries(paymentLinks).every(([sku,link])=>
  !!PRODUCTS[sku]&&/^plink_[\w]+$/.test(link.id||'')&&/^https:\/\/buy\.stripe\.com\//.test(link.url||''));
 if(!validLinks)throw Error('Invalid Payment Links configuration');
 const paymentsReady=['test','live'].includes(paymentsMode)&&!!stripeClient&&!!webhookSecret;
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
    return json(res,200,{ok:true,leaderboard:true,payments:paymentsReady?paymentsMode:'disabled',currency:'eur'});
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
    return json(res,200,{currency:'eur',payments:paymentsReady?paymentsMode:'disabled',
      items:Object.values(PRODUCTS).map(p=>({sku:p.sku,name:p.name,price_cents:p.cents,description:p.description,buyable:paymentsReady&&(!Object.keys(paymentLinks).length||!!paymentLinks[p.sku])}))});
   if(req.method==='GET'&&path==='/api/v1/shop/inventory'){
    const player=auth(db,req);
    if(!player)return json(res,401,{error:'unauthorized'});
    const owned=db.prepare('SELECT sku FROM inventory WHERE player_id=?').all(player.id).map(x=>x.sku);
    const charges=db.prepare('SELECT charges FROM marseille_charges WHERE player_id=?').get(player.id)?.charges||0;
    const genzAmmo=db.prepare('SELECT charges FROM genz_ammo WHERE player_id=?').get(player.id)?.charges||0;
    return json(res,200,{owned,marseilleCharges:charges,genzAmmo});
   }
   if(req.method==='POST'&&path==='/api/v1/support/consume'){
    const player=auth(db,req);if(!player)return json(res,401,{error:'unauthorized'});
    const params=JSON.parse((await readBody(req)).toString('utf8'));
    if(typeof params.requestId!=='string'||!/^[0-9a-f-]{36}$/.test(params.requestId))return json(res,400,{error:'invalid_request_id'});
    db.exec('BEGIN IMMEDIATE');
    try{
      const previous=db.prepare('SELECT remaining FROM support_redemptions WHERE request_id=? AND player_id=?').get(params.requestId,player.id);
      if(previous){db.exec('COMMIT');return json(res,200,{remaining:previous.remaining,idempotent:true});}
      const updated=db.prepare('UPDATE marseille_charges SET charges=charges-1 WHERE player_id=? AND charges>0 RETURNING charges').get(player.id);
      if(!updated){db.exec('COMMIT');return json(res,409,{error:'no_support_charges'});}
      db.prepare('INSERT INTO support_redemptions VALUES(?,?,?,?)').run(params.requestId,player.id,updated.charges,new Date().toISOString());
      db.exec('COMMIT');return json(res,200,{remaining:updated.charges,spent:1});
    }catch(e){db.exec('ROLLBACK');throw e;}
   }
   if(req.method==='POST'&&path==='/api/v1/genz/consume'){
    const player=auth(db,req);if(!player)return json(res,401,{error:'unauthorized'});
    const params=JSON.parse((await readBody(req)).toString('utf8'));
    if(typeof params.requestId!=='string'||!/^[0-9a-f-]{36}$/.test(params.requestId))return json(res,400,{error:'invalid_request_id'});
    db.exec('BEGIN IMMEDIATE');
    try{
     const previous=db.prepare('SELECT remaining FROM genz_redemptions WHERE request_id=? AND player_id=?').get(params.requestId,player.id);
     if(previous){db.exec('COMMIT');return json(res,200,{remaining:previous.remaining,idempotent:true});}
     const updated=db.prepare('UPDATE genz_ammo SET charges=charges-1 WHERE player_id=? AND charges>0 RETURNING charges').get(player.id);
     if(!updated){db.exec('COMMIT');return json(res,409,{error:'no_genz_ammo'});}
     db.prepare('INSERT INTO genz_redemptions VALUES(?,?,?,?)').run(params.requestId,player.id,updated.charges,new Date().toISOString());
     db.exec('COMMIT');return json(res,200,{remaining:updated.charges,spent:1});
    }catch(e){db.exec('ROLLBACK');throw e;}
   }
   if(req.method==='POST'&&path==='/api/v1/shop/checkout'){
    if(!paymentsReady)return json(res,503,{error:'payments_disabled'});
    const player=auth(db,req);
    if(!player)return json(res,401,{error:'unauthorized'});
    const params=JSON.parse((await readBody(req)).toString('utf8'));
    const product=PRODUCTS[params.sku];
    if(!product)return json(res,400,{error:'unknown_product'});
    if(Object.keys(paymentLinks).length&&!paymentLinks[product.sku])return json(res,503,{error:'product_not_yet_available'});
    if(!product.charges && !product.ammo && db.prepare('SELECT sku FROM inventory WHERE player_id=? AND sku=?').get(player.id,product.sku))
      return json(res,409,{error:'already_owned'});
    if(paymentLinks[product.sku]){
      const url=new URL(paymentLinks[product.sku].url);
      url.searchParams.set('client_reference_id',player.id);
      return json(res,200,{url:url.toString()});
    }
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
     if(session.payment_status==='paid'){
      const linkPair=session.payment_link?Object.entries(paymentLinks).find(([,link])=>link.id===session.payment_link):null;
      if(Object.keys(paymentLinks).length&&!linkPair)return json(res,200,{received:true,ignored:'unrelated_payment'});
      if(!linkPair&&session.metadata?.game!=='convergence')return json(res,200,{received:true,ignored:'unrelated_checkout'});
      const sku=linkPair?linkPair[0]:session.metadata.sku;
      const pid=linkPair?session.client_reference_id:session.metadata.player_id;
      if(!PRODUCTS[sku])return json(res,400,{error:'invalid_sku'});
      if(!db.prepare('SELECT id FROM players WHERE id=?').get(pid)){
       // A paid link opened without a player reference must never disappear.
       // Track it for manual reconciliation by Stripe session ID.
       db.prepare('INSERT OR IGNORE INTO unclaimed_orders VALUES(?,?,?)').run(session.id,sku,new Date().toISOString());
       return json(res,200,{received:true,fulfillment:'needs_reconciliation'});
      }
      // A signed event must also match our fixed-price Checkout session.
      if(session.amount_total!==PRODUCTS[sku].cents||session.currency!=='eur'||session.client_reference_id!==pid)
       return json(res,400,{error:'checkout_mismatch'});
      db.exec('BEGIN IMMEDIATE');
      try{
       const inserted=db.prepare('INSERT OR IGNORE INTO orders VALUES(?,?,?,?)').run(session.id,pid,sku,new Date().toISOString()).changes;
       if(inserted){
        if(PRODUCTS[sku].ammo){
         db.prepare('INSERT INTO genz_ammo(player_id,charges) VALUES(?,?) ON CONFLICT(player_id) DO UPDATE SET charges=charges+excluded.charges').run(pid,PRODUCTS[sku].ammo);
        }else if(PRODUCTS[sku].charges){
         db.prepare('INSERT INTO marseille_charges(player_id,charges) VALUES(?,?) ON CONFLICT(player_id) DO UPDATE SET charges=charges+excluded.charges').run(pid,PRODUCTS[sku].charges);
        }else db.prepare('INSERT OR IGNORE INTO inventory VALUES(?,?,?)').run(pid,sku,new Date().toISOString());
       }
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
 const mode=process.env.PAYMENTS_MODE||'disabled';
 const paymentLinks=process.env.PAYMENT_LINKS_JSON?JSON.parse(process.env.PAYMENT_LINKS_JSON):{};
 const gameUrl=process.env.GAME_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
 const webhookSecret=process.env.STRIPE_WEBHOOK_SECRET||'';
 const allowed=mode==='live'?/^(sk_live_|rk_live_)/:mode==='test'?/^(sk_test_|rk_test_)/:null;
 if(!['disabled','test','live'].includes(mode)||
    (mode!=='disabled'&&(!/^whsec_/.test(webhookSecret)||
       (key&&!allowed.test(key))||(!key&&!Object.keys(paymentLinks).length)))||
    (mode==='live'&&(!gameUrl.startsWith('https://')||
      !process.env.ALLOWED_ORIGINS?.split(',').map(s=>s.trim()).includes(new URL(gameUrl).origin)))){
  console.error('Stripe configuration invalid: refusing to start with a non-matching key, missing signed webhook or insecure live origin');process.exit(2);
 }
 if(mode==='disabled'&&key){console.error('Stripe key present while payments disabled: refusing unsafe configuration');process.exit(2);}
 let stripeClient=null;
 if(key||mode!=='disabled'){
  const {default:Stripe}=await import('stripe');
  // In Payment Links mode Stripe only verifies signatures; no API calls are made.
  stripeClient=new Stripe(key||'sk_test_local_webhook_verification_only',{apiVersion:'2026-08-26.dahlia'});
 }
 const app=createApiServer({
  dbPath:process.env.DB_PATH||resolve('data/convergence.sqlite'),
  corsOrigins:process.env.ALLOWED_ORIGINS?.split(',').map(s=>s.trim())||[],
  gameUrl,
  stripeClient,webhookSecret,
  paymentsMode:mode,paymentLinks
 });
 const port=Number(process.env.PORT||4319);
 app.server.listen(port,process.env.HOST||'0.0.0.0',()=>console.log('CONVERGENCE API listening on port '+port));
}

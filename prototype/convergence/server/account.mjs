import crypto from 'node:crypto';
import { normalizeHeroSave } from '../src/heroRules.mjs';

const digest = value => crypto.createHash('sha256').update(value).digest('hex');
const send = (res,status,data) => {
  res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
  res.end(JSON.stringify(data));
};
const issueToken = () => crypto.randomBytes(32).toString('base64url');
export function installAccountTables(db) {
  db.exec("CREATE TABLE IF NOT EXISTS account_links (subject TEXT PRIMARY KEY, player_id TEXT NOT NULL REFERENCES players(id));");
  db.exec("CREATE TABLE IF NOT EXISTS player_tokens (token_hash TEXT PRIMARY KEY, player_id TEXT NOT NULL REFERENCES players(id), expires_at TEXT NOT NULL);");
  db.exec("CREATE TABLE IF NOT EXISTS campaign_saves (player_id TEXT PRIMARY KEY REFERENCES players(id), data TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 1, updated TEXT NOT NULL);");
  db.exec("CREATE TABLE IF NOT EXISTS player_presence (session_id TEXT PRIMARY KEY, first_seen TEXT NOT NULL, last_seen TEXT NOT NULL, source TEXT NOT NULL);");
  db.exec("CREATE INDEX IF NOT EXISTS presence_time ON player_presence(last_seen);");
  db.exec("CREATE TABLE IF NOT EXISTS recovery_codes (player_id TEXT PRIMARY KEY REFERENCES players(id), code_hash TEXT NOT NULL UNIQUE, updated TEXT NOT NULL);");
}
const playerFromToken = (db,token) => {
  if(typeof token!=='string'||!/^[\w-]{43}$/.test(token))return null;
  return db.prepare("SELECT id FROM players WHERE token_hash=?").get(digest(token)) ||
    db.prepare("SELECT player_id AS id FROM player_tokens WHERE token_hash=? AND expires_at>?").get(digest(token),new Date().toISOString()) || null;
};
const bearer = req => (req.headers.authorization||'').replace(/^Bearer /,'');
const parse = async req => {
  let n=0,parts=[];
  for await(const chunk of req){n+=chunk.length;if(n>16384)throw Error('Payload too large');parts.push(chunk);}
  return JSON.parse(Buffer.concat(parts).toString('utf8')||'{}');
};
const validProgress = p => {
  if(!p||typeof p!=='object'||Array.isArray(p))return null;
  const ints=['level','parisLevel','coins','crowdUpgrade','strengthUpgrade'];
  const x={parisVersion:1};
  for(const k of ints){if(!Number.isSafeInteger(p[k])||p[k]<0||p[k]> (k==='coins'?1000000:100))return null;x[k]=p[k];}
  if(x.level<1||x.level>12||x.parisLevel<1||x.parisLevel>12||x.crowdUpgrade<1||x.strengthUpgrade<1)return null;
  x.campaignComplete=p.campaignComplete===true;
  const skus=items => Array.isArray(items)&&items.length<40&&items.every(v=>typeof v==='string'&&/^[a-z0-9_-]{1,32}$/.test(v))?items:null;
  x.ownedSkins=skus(p.ownedSkins);x.ownedThemes=skus(p.ownedThemes);
  if(!x.ownedSkins||!x.ownedThemes)return null;
  x.equippedSkin=typeof p.equippedSkin==='string'&&/^[a-z0-9_-]{1,32}$/.test(p.equippedSkin)?p.equippedSkin:'blue';
  x.equippedTheme=typeof p.equippedTheme==='string'&&/^[a-z0-9_-]{1,32}$/.test(p.equippedTheme)?p.equippedTheme:'default';
  if(p.heroSave)x.heroSave=normalizeHeroSave(p.heroSave);
  if(p.badges&&typeof p.badges==='object'&&!Array.isArray(p.badges)){
    x.badges={};
    for(const [k,v] of Object.entries(p.badges))if(/^([1-9]|1[0-2])$/.test(k)&&v&&typeof v==='object')
      x.badges[k]={won:v.won===true,badge:v.badge===true,best:Number.isSafeInteger(v.best)?Math.max(0,Math.min(1000,v.best)):0};
  }
  return x;
};
const nowISO = clock => clock().toISOString();
function mergePlayers(db,into,from,clock){
  if(into===from)return;
  const scores=db.prepare('SELECT * FROM scores WHERE player_id=?').all(from);
  for(const s of scores){
    const previous=db.prepare('SELECT survivors FROM scores WHERE day=? AND player_id=?').get(s.day,into);
    if(!previous||s.survivors>previous.survivors){
      db.prepare('DELETE FROM scores WHERE day=? AND player_id=?').run(s.day,into);
      db.prepare('INSERT INTO scores(day,player_id,name,survivors,route,created) VALUES(?,?,?,?,?,?)')
        .run(s.day,into,s.name,s.survivors,s.route,s.created);
    }
  }
  for(const s of db.prepare('SELECT sku,created FROM inventory WHERE player_id=?').all(from))
    db.prepare('INSERT OR IGNORE INTO inventory VALUES(?,?,?)').run(into,s.sku,s.created);
  for(const table of ['marseille_charges','genz_ammo']){
    const a=db.prepare('SELECT charges FROM '+table+' WHERE player_id=?').get(from)?.charges||0;
    if(a)db.prepare('INSERT INTO '+table+' (player_id,charges) VALUES(?,?) ON CONFLICT(player_id) DO UPDATE SET charges=charges+excluded.charges').run(into,a);
  }
  for(const table of ['support_redemptions','genz_redemptions'])
    db.prepare('UPDATE '+table+' SET player_id=? WHERE player_id=?').run(into,from);
  db.prepare('UPDATE orders SET player_id=? WHERE player_id=?').run(into,from);
  const src=db.prepare('SELECT data FROM campaign_saves WHERE player_id=?').get(from);
  const recovery=db.prepare('SELECT code_hash,updated FROM recovery_codes WHERE player_id=?').get(from);
  if(recovery&&!db.prepare('SELECT 1 FROM recovery_codes WHERE player_id=?').get(into))
    db.prepare('UPDATE recovery_codes SET player_id=? WHERE player_id=?').run(into,from);
  const dst=db.prepare('SELECT data FROM campaign_saves WHERE player_id=?').get(into);
  if(src && (!dst||JSON.parse(src.data).level>JSON.parse(dst.data).level))
    db.prepare('INSERT INTO campaign_saves(player_id,data,revision,updated) VALUES(?,?,1,?) ON CONFLICT(player_id) DO UPDATE SET data=excluded.data,revision=campaign_saves.revision+1,updated=excluded.updated')
    .run(into,src.data,nowISO(clock));
  db.prepare('DELETE FROM scores WHERE player_id=?').run(from);
  db.prepare('DELETE FROM inventory WHERE player_id=?').run(from);
  for(const table of ['marseille_charges','genz_ammo','support_redemptions','genz_redemptions','campaign_saves','player_tokens','recovery_codes'])
    db.prepare('DELETE FROM '+table+' WHERE player_id=?').run(from);
  db.prepare('DELETE FROM players WHERE id=?').run(from);
}
export function createAccountRoutes({db,clock=()=>new Date(),adminSubjects='',consumeIdentity,verifyIdentity,products={}}={}){
  const admins=new Set(adminSubjects.split(',').map(x=>x.trim()).filter(Boolean));
  const verify=verifyIdentity||consumeIdentity||(()=>null);
  const provision=(id,subject) => {
    if(id)return id;
    const newId=crypto.randomUUID(),token=issueToken();
    db.prepare('INSERT INTO players VALUES(?,?,?)').run(newId,digest(token),nowISO(clock));
    db.prepare('INSERT INTO account_links VALUES(?,?)').run(subject,newId);
    return newId;
  };
  return async(req,res,path) => {
    if(path==='/api/v1/account/link' && req.method==='POST'){
      const body=await parse(req);
      db.exec('BEGIN IMMEDIATE');
      try{
        const subject=await verify(bearer(req));
        if(!subject){db.exec('ROLLBACK');send(res,401,{error:'invalid_identity'});return true;}
        const guest=playerFromToken(db,body.guestToken);
        const existing=db.prepare('SELECT player_id AS id FROM account_links WHERE subject=?').get(subject);
        const guestAlreadyLinked=guest&&db.prepare('SELECT 1 FROM account_links WHERE player_id=?').get(guest.id);
        let id=existing?.id||null;
        if(!id&&guest&&!guestAlreadyLinked){
          id=guest.id;db.prepare('INSERT INTO account_links VALUES(?,?)').run(subject,id);
          // Guest access is replaced by scoped device sessions after account linking.
          db.prepare('UPDATE players SET token_hash=? WHERE id=?').run(digest(issueToken()),id);
        }else{
          id=provision(id,subject);
          if(guest&&guest.id!==id&&!guestAlreadyLinked)
            mergePlayers(db,id,guest.id,clock);
        }
        const token=issueToken();
        db.prepare('INSERT INTO player_tokens VALUES(?,?,?)').run(digest(token),id,new Date(clock().getTime()+90*86400000).toISOString());
        db.exec('COMMIT');
        return send(res,200,{playerId:id,token}),true;
      }catch(e){db.exec('ROLLBACK');throw e;}
    }
    if(path==='/api/v1/account/recovery/create' && req.method==='POST'){
      const player=playerFromToken(db,bearer(req));
      if(!player)return send(res,401,{error:'unauthorized'}),true;
      const code='CV-'+crypto.randomBytes(24).toString('base64url');
      db.prepare('INSERT INTO recovery_codes VALUES(?,?,?) ON CONFLICT(player_id) DO UPDATE SET code_hash=excluded.code_hash,updated=excluded.updated')
        .run(player.id,digest(code),nowISO(clock));
      return send(res,200,{code,warning:'Conserve ce code en lieu sûr : il donne accès à ta partie et à tes achats. Le précédent code est invalidé.'}),true;
    }
    if(path==='/api/v1/account/recovery/redeem' && req.method==='POST'){
      const body=await parse(req);
      if(typeof body.code!=='string'||!/^CV-[A-Za-z0-9_-]{32}$/.test(body.code))return send(res,400,{error:'invalid_recovery_code'}),true;
      const player=db.prepare('SELECT player_id AS id FROM recovery_codes WHERE code_hash=?').get(digest(body.code));
      if(!player)return send(res,401,{error:'invalid_recovery_code'}),true;
      db.exec('BEGIN IMMEDIATE');
      try{
        const guest=playerFromToken(db,body.guestToken);
        if(guest&&guest.id!==player.id &&
          !db.prepare('SELECT 1 FROM account_links WHERE player_id=?').get(guest.id) &&
          !db.prepare('SELECT 1 FROM recovery_codes WHERE player_id=?').get(guest.id))
          mergePlayers(db,player.id,guest.id,clock);
        const token=issueToken();
        db.prepare('INSERT INTO player_tokens VALUES(?,?,?)').run(digest(token),player.id,new Date(clock().getTime()+90*86400000).toISOString());
        db.exec('COMMIT');
        return send(res,200,{playerId:player.id,token}),true;
      }catch(e){db.exec('ROLLBACK');throw e;}
    }
    if(path==='/api/v1/account/recovery/status' && req.method==='GET'){
      const player=playerFromToken(db,bearer(req));
      if(!player)return send(res,401,{error:'unauthorized'}),true;
      return send(res,200,{enabled:!!db.prepare('SELECT 1 FROM recovery_codes WHERE player_id=?').get(player.id)}),true;
    }
    if(path==='/api/v1/account/me' && req.method==='GET'){
      const player=playerFromToken(db,bearer(req));
      if(!player){send(res,401,{error:'unauthorized'});return true;}
      const linked=!!db.prepare('SELECT 1 FROM account_links WHERE player_id=?').get(player.id)||
        !!db.prepare('SELECT 1 FROM recovery_codes WHERE player_id=?').get(player.id);
      send(res,200,{playerId:player.id,linked});return true;
    }
    if(path==='/api/v1/account/logout' && req.method==='POST'){
      const token=bearer(req);
      if(/^[\w-]{43}$/.test(token))db.prepare('DELETE FROM player_tokens WHERE token_hash=?').run(digest(token));
      return send(res,200,{ok:true}),true;
    }
    if(path==='/api/v1/account/progress' && req.method==='GET'){
      const p=playerFromToken(db,bearer(req));if(!p)return send(res,401,{error:'unauthorized'}),true;
      const d=db.prepare('SELECT data,revision,updated FROM campaign_saves WHERE player_id=?').get(p.id);
      return send(res,200,{progress:d?JSON.parse(d.data):null,revision:d?.revision||0,updated:d?.updated||null}),true;
    }
    if(path==='/api/v1/account/progress' && req.method==='POST'){
      const p=playerFromToken(db,bearer(req));if(!p)return send(res,401,{error:'unauthorized'}),true;
      const body=await parse(req),progress=validProgress(body.progress);
      if(!progress||!Number.isSafeInteger(body.revision)||body.revision<0)return send(res,400,{error:'invalid_progress'}),true;
      const current=db.prepare('SELECT data,revision FROM campaign_saves WHERE player_id=?').get(p.id);
      // Older devices cannot silently erase a more advanced cloud campaign.
      if(current && JSON.parse(current.data).level>progress.level)
        return send(res,409,{error:'older_progress',progress:JSON.parse(current.data),revision:current.revision}),true;
      if((current?.revision||0)!==body.revision)
        return send(res,409,{error:'revision_conflict',progress:current?JSON.parse(current.data):null,revision:current?.revision||0}),true;
      const next=body.revision+1;
      db.prepare('INSERT INTO campaign_saves(player_id,data,revision,updated) VALUES(?,?,?,?) ON CONFLICT(player_id) DO UPDATE SET data=excluded.data,revision=excluded.revision,updated=excluded.updated')
        .run(p.id,JSON.stringify(progress),next,nowISO(clock));
      return send(res,200,{revision:next}),true;
    }
    if(path==='/api/v1/presence' && req.method==='POST'){
      const b=await parse(req);
      if(!/^[0-9a-f-]{36}$/.test(b.sessionId||'') || !['facebook','tiktok','x','direct','other'].includes(b.source))
        return send(res,400,{error:'invalid_presence'}),true;
      const now=nowISO(clock);
      db.prepare('INSERT INTO player_presence VALUES(?,?,?,?) ON CONFLICT(session_id) DO UPDATE SET last_seen=excluded.last_seen').run(b.sessionId,now,now,b.source);
      return send(res,200,{ok:true}),true;
    }
    if(path==='/api/v1/admin/summary' && req.method==='GET'){
      const player=playerFromToken(db,bearer(req));
      const authorized=player&&db.prepare('SELECT subject FROM account_links WHERE player_id=?').all(player.id).some(x=>admins.has(x.subject));
      if(!authorized)return send(res,403,{error:'forbidden'}),true;
      const now=clock().getTime(),today=new Date(now).toISOString().slice(0,10);
      const period=new Date(now-86400000).toISOString(),live=new Date(now-90000).toISOString();
      db.prepare('DELETE FROM player_presence WHERE last_seen<?').run(new Date(now-14*86400000).toISOString());
      const one=sql=>db.prepare(sql).get()?.n||0;
      const active=db.prepare('SELECT COUNT(*) AS n FROM player_presence WHERE last_seen>=?').get(live).n;
      const unique=db.prepare('SELECT COUNT(*) AS n FROM player_presence WHERE first_seen>=?').get(period).n;
      const orders=db.prepare('SELECT sku,COUNT(*) AS n FROM orders WHERE created>=? GROUP BY sku').all(period);
      const scores=db.prepare('SELECT COUNT(*) AS n FROM scores WHERE day=?').get(today).n;
      const sources=db.prepare('SELECT source,COUNT(*) AS n FROM player_presence WHERE first_seen>=? GROUP BY source').all(period);
      return send(res,200,{at:nowISO(clock),active,visitors24h:unique,registered:one('SELECT COUNT(*) AS n FROM account_links'),playerRecords:one('SELECT COUNT(*) AS n FROM players'),dailyScores:scores,
        purchases24h:orders.reduce((a,b)=>a+b.n,0),revenueCents24h:orders.reduce((a,b)=>a+b.n*(products[b.sku]?.cents||0),0),orders, sources}),true;
    }
    return false;
  };
}

import crypto from 'node:crypto';
import {isIP} from 'node:net';
import {OAuth2Client} from 'google-auth-library';
import nodemailer from 'nodemailer';

const rand=()=>crypto.randomBytes(32).toString('base64url');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const json=(res,status,payload)=>{
  res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',
    'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'});
  res.end(JSON.stringify(payload));
};
const redirect=(res,url,cookie)=>{
  res.writeHead(302,{'Location':url,'Cache-Control':'no-store','Referrer-Policy':'no-referrer',
    'X-Content-Type-Options':'nosniff',...(cookie?{'Set-Cookie':cookie}:{})});
  res.end();
};
const read=async req=>{
  let n=0;const parts=[];
  for await(const chunk of req){n+=chunk.length;if(n>4096)throw new RangeError('Payload too large');parts.push(chunk);}
  return JSON.parse(Buffer.concat(parts).toString('utf8')||'{}');
};
const emailPattern=/^[^\s@<>]{1,64}@[^\s@<>]{1,190}\.[^\s@<>]{2,63}$/;
const returnPage=value=>value==='cockpit'?'cockpit':'game';
const cookieValue=(req,key)=>req.headers.cookie?.split(';').map(x=>x.trim()).find(x=>x.startsWith(key+'='))?.slice(key.length+1)||'';
const equal=(x,y)=>typeof x==='string'&&typeof y==='string'&&x.length===y.length&&crypto.timingSafeEqual(Buffer.from(x),Buffer.from(y));
const seconds=ms=>new Date(ms).toISOString();
const flowCookie=(value,maxAge)=>'cg_oauth='+value+'; Path=/api/v1/auth/google; HttpOnly; Secure; SameSite=Lax; Max-Age='+maxAge;
export function installIdentityTables(db){
  db.exec("CREATE TABLE IF NOT EXISTS identity_tickets (token_hash TEXT PRIMARY KEY, subject TEXT NOT NULL, expires_at TEXT NOT NULL);");
  db.exec("CREATE TABLE IF NOT EXISTS oauth_flows (state_hash TEXT PRIMARY KEY, verifier TEXT NOT NULL, nonce TEXT NOT NULL, destination TEXT NOT NULL, expires_at TEXT NOT NULL);");
  db.exec("CREATE TABLE IF NOT EXISTS auth_rate_limits (rate_key TEXT PRIMARY KEY, window_start INTEGER NOT NULL, attempts INTEGER NOT NULL, last_sent INTEGER NOT NULL);");
}
export function createIdentityRoutes({db,clock=()=>new Date(),gameUrl='http://127.0.0.1:4320/',
 publicApiUrl='',googleClientId='',googleClientSecret='',smtpHost='',smtpPort=587,
 smtpUser='',smtpPass='',smtpFrom='',sendEmail,googleOAuthClient,trustLocalProxy=false}={}){
  const publicApi=String(publicApiUrl).replace(/\/$/,'');
  const callbackUrl=publicApi ? publicApi+'/api/v1/auth/google/callback' : '';
  const googleReady=Boolean(googleClientId&&googleClientSecret&&callbackUrl);
  const mailReady=Boolean(sendEmail || (smtpHost&&smtpUser&&smtpPass&&smtpFrom));
  const google=googleReady?(googleOAuthClient||new OAuth2Client(googleClientId,googleClientSecret,callbackUrl)):null;
  const transport=mailReady&&!sendEmail ? nodemailer.createTransport({
    host:smtpHost,port:Number(smtpPort),secure:Number(smtpPort)===465,
    requireTLS:Number(smtpPort)!==465,auth:{user:smtpUser,pass:smtpPass},
    tls:{rejectUnauthorized:true}
  }):null;
  const sendMail=sendEmail||((to,link)=>transport.sendMail({
    from:smtpFrom,to,subject:'Connexion à CONVERGENCE',
    text:'Ouvre ce lien pour retrouver ta partie CONVERGENCE. Il est valable 15 minutes et ne fonctionne qu’une fois.\n\n'+link+
      '\n\nSi tu n’as rien demandé, ignore ce message.'
  }));
  function issue(subject,minutes=15){
    const ticket=rand();
    db.prepare('INSERT INTO identity_tickets VALUES(?,?,?)').run(hash(ticket),subject,seconds(clock().getTime()+minutes*60000));
    return ticket;
  }
  function consume(ticket){
    if(!/^[\w-]{43}$/.test(ticket||''))return null;
    const row=db.prepare('DELETE FROM identity_tickets WHERE token_hash=? AND expires_at>? RETURNING subject')
      .get(hash(ticket),clock().toISOString());
    return row?.subject||null;
  }
  function linkFor(ticket,destination){
    const target=new URL(destination==='cockpit'?'cockpit.html':'',gameUrl);
    target.hash='auth_ticket='+encodeURIComponent(ticket);
    return target.toString();
  }
  function allow(key,limit=5,cooldown=60000){
    const timestamp=clock().getTime();
    const row=db.prepare('SELECT * FROM auth_rate_limits WHERE rate_key=?').get(key);
    if(row&&timestamp-row.window_start<3600000){
      if(row.attempts>=limit||timestamp-row.last_sent<cooldown)return false;
      db.prepare('UPDATE auth_rate_limits SET attempts=attempts+1,last_sent=? WHERE rate_key=?').run(timestamp,key);
    }else{
      db.prepare('INSERT INTO auth_rate_limits VALUES(?,?,1,?) ON CONFLICT(rate_key) DO UPDATE SET window_start=excluded.window_start,attempts=1,last_sent=excluded.last_sent')
        .run(key,timestamp,timestamp);
    }
    return true;
  }
  async function routes(req,res,path,uri){
    if(req.method==='GET'&&path==='/api/v1/auth/status'){
      json(res,200,{google:googleReady,email:mailReady,apple:false});return true;
    }
    if(req.method==='POST'&&path==='/api/v1/auth/email/start'){
      if(!mailReady){json(res,503,{error:'email_not_configured'});return true;}
      const body=await read(req);
      const email=String(body.email||'').trim().toLowerCase();
      if(email.length>254||!emailPattern.test(email)){json(res,400,{error:'invalid_email'});return true;}
      const socketIP=(req.socket.remoteAddress||'').replace(/^::ffff:/,'');
      const loopback=socketIP==='127.0.0.1'||socketIP==='::1';
      const forwarded=String(req.headers['x-real-ip']||'');
      const remoteIP=loopback?(trustLocalProxy&&isIP(forwarded)?forwarded:null):socketIP;
      // Without the trusted proxy header, loopback identifies the server, not the visitor.
      const ipAllowed=!remoteIP||allow('ip:'+hash(remoteIP),30,1000);
      if(ipAllowed&&allow('email:'+hash(email),5,60000)){
        const ticket=issue('email:'+email);
        try{await sendMail(email,linkFor(ticket,returnPage(body.destination)));}
        catch(e){
          db.prepare('DELETE FROM identity_tickets WHERE token_hash=?').run(hash(ticket));
          json(res,503,{error:'email_delivery_unavailable'});return true;
        }
      }
      json(res,200,{ok:true,message:'Si cette adresse peut recevoir des messages, un lien de connexion lui a été envoyé.'});
      return true;
    }
    if(req.method==='GET'&&path==='/api/v1/auth/google/start'){
      if(!googleReady){json(res,503,{error:'google_not_configured'});return true;}
      const state=rand(),verifier=rand(),nonce=rand();
      const destination=returnPage(uri.searchParams.get('destination'));
      const challenge=crypto.createHash('sha256').update(verifier).digest('base64url');
      db.prepare('INSERT INTO oauth_flows VALUES(?,?,?,?,?)')
        .run(hash(state),verifier,nonce,destination,seconds(clock().getTime()+600000));
      const location=google.generateAuthUrl({
        scope:['openid','email','profile'],response_type:'code',state,
        prompt:'select_account',nonce,code_challenge:challenge,code_challenge_method:'S256',
        access_type:'online'
      });
      redirect(res,location,flowCookie(state,600));return true;
    }
    if(req.method==='GET'&&path==='/api/v1/auth/google/callback'){
      if(!googleReady){json(res,503,{error:'google_not_configured'});return true;}
      const state=uri.searchParams.get('state')||'',code=uri.searchParams.get('code')||'';
      const cookie=cookieValue(req,'cg_oauth');
      if(!/^[\w-]{43}$/.test(state)||!equal(state,cookie)||!code||uri.searchParams.has('error')){
        json(res,400,{error:'oauth_state_invalid'});return true;
      }
      const flow=db.prepare('DELETE FROM oauth_flows WHERE state_hash=? AND expires_at>? RETURNING *')
        .get(hash(state),clock().toISOString());
      if(!flow){json(res,400,{error:'oauth_flow_expired'});return true;}
      try{
        const tokenResult=await google.getToken({code,redirect_uri:callbackUrl,codeVerifier:flow.verifier});
        const idToken=tokenResult?.tokens?.id_token;
        if(!idToken)throw Error('missing_id_token');
        const ticket=await google.verifyIdToken({idToken,audience:googleClientId});
        const claim=ticket.getPayload();
        if(!claim||claim.nonce!==flow.nonce||!claim.sub||!/^[a-zA-Z0-9_-]{5,160}$/.test(claim.sub))
          throw Error('invalid_claims');
        const loginTicket=issue('google:'+claim.sub);
        redirect(res,linkFor(loginTicket,flow.destination),flowCookie('',0));
      }catch(e){json(res,401,{error:'google_verification_failed'});}
      return true;
    }
    return false;
  }
  return {routes,consume,configured:googleReady||mailReady};
}

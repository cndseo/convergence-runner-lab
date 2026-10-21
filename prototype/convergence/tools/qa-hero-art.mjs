import {createRequire} from 'node:module';import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const out=new URL('../../../qa-hero-art/',import.meta.url);mkdirSync(out,{recursive:true});const file=n=>new URL(n,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:600,height:800}}),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
try{
 await p.goto((process.env.QA_URL||'http://127.0.0.1:4675/')+'tools/hero-art-review.html');await p.waitForFunction(()=>window.artReview);
 const ids=process.argv.slice(2).length?process.argv.slice(2):await p.evaluate(()=>window.profiles.map(p=>p.id));const stats=[];
 for(const id of ids){
  for(const [name,angle,close]of [['front',0,false],['face',0,true],['side',Math.PI/2,false],['back',Math.PI,false]]){
   const s=await p.evaluate(async({id,angle,close})=>window.artReview(id,angle,close),{id,angle,close});
   if(name==='front')stats.push(s);await p.screenshot({path:file(id+'-'+name+'.png')});
  }
 }
 writeFileSync(file('results.json'),JSON.stringify({stats,errors},null,2));if(errors.length)throw Error(errors.join('\n'));console.log(JSON.stringify({ok:true,profiles:ids.length,stats:stats.map(({id,drawCalls,triangles})=>({id,drawCalls,triangles}))}));
}catch(e){console.error(errors);throw e;}finally{await b.close();}


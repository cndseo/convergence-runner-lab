import fs from 'node:fs';
import {HERO_PROFILES,HERO_ATLAS as A} from '../src/heroCatalog.mjs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
const require=createRequire(import.meta.url),{chromium}=require('playwright-core');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'public/assets/crowd');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const page=await browser.newPage();
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.BAKE_URL||'http://127.0.0.1:4674/tools/bake-heroes.html',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>typeof window.bakeRealistic==='function');
 const pngBase64=await page.evaluate(()=>window.bakeRealistic());
 if(errors.length)throw new Error(errors.join('\n'));
 const tmp=path.join(out,'walk-heroes.tmp.png');
 fs.writeFileSync(tmp,Buffer.from(pngBase64.split(',')[1],'base64'));
 execFileSync(process.platform==='win32'?'python':'python3',['-c','from PIL import Image; import sys; Image.open(sys.argv[1]).save(sys.argv[2],quality=88,method=6)',tmp,path.join(out,'walk-heroes.webp')]);
 fs.unlinkSync(tmp);
 fs.writeFileSync(path.join(out,'walk-heroes.json'),JSON.stringify({
   format:'hero-communities-walk-v1',image:'walk-heroes.webp',width:A.cellWidth*A.columns,height:A.cellHeight*A.rows,
   columns:A.columns,rows:A.rows,animation:'Walk',license:'MIT (see assets/realistic/LICENSE.txt)',
   variation:'20 rows grouped by community, 4 profiles per community; hero remains skinned 3D',characters:HERO_PROFILES.map(s=>({key:s.id,source:s.model.base,prop:s.model.prop||null})),plane:A
 },null,2)+'\n');
 console.log('20 hero adaptations x 12 Walk frames baked:',path.join(out,'walk-heroes.webp'));
}finally{await browser.close();}

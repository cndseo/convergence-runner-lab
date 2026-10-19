import fs from 'node:fs';
import {CHARACTER_STYLES,CHARACTER_ATLAS as A} from '../src/characterCatalog.mjs';
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
 await page.goto(process.env.BAKE_URL||'http://127.0.0.1:4291/tools/bake-realistic.html',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>typeof window.bakeRealistic==='function');
 const pngBase64=await page.evaluate(()=>window.bakeRealistic());
 if(errors.length)throw new Error(errors.join('\n'));
 const tmp=path.join(out,'walk-realistic.tmp.png');
 fs.writeFileSync(tmp,Buffer.from(pngBase64.split(',')[1],'base64'));
 execFileSync(process.platform==='win32'?'python':'python3',['-c','from PIL import Image; import sys; Image.open(sys.argv[1]).save(sys.argv[2],quality=88,method=6)',tmp,path.join(out,'walk-realistic.webp')]);
 fs.unlinkSync(tmp);
 fs.writeFileSync(path.join(out,'walk-realistic.json'),JSON.stringify({
   format:'reference-characters-walk-v2',image:'walk-realistic.webp',width:A.cellWidth*A.columns,height:A.cellHeight*A.rows,
   columns:A.columns,rows:A.rows,animation:'Walk',license:'MIT (see assets/realistic/LICENSE.txt)',
   variation:'row=(crowdIndex-1) % 13; P02 remains separate',characters:CHARACTER_STYLES.map(s=>({key:s.key,source:s.base,prop:s.prop||null})),plane:A
 },null,2)+'\n');
 console.log('13 dressed profiles x 12 Walk frames baked:',path.join(out,'walk-realistic.webp'));
}finally{await browser.close();}

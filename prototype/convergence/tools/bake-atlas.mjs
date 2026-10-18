import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
const require=createRequire(import.meta.url),{chromium}=require('playwright-core');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'public/assets/crowd');
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{
 const page=await browser.newPage();
 await page.goto(process.env.BAKE_URL||'http://127.0.0.1:4178/tools/bake-crowd.html',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>typeof window.bake==='function');
 const data=await page.evaluate(()=>window.bake());
 const png=path.join(out,'walk-atlas.tmp.png');fs.writeFileSync(png,Buffer.from(data.split(',')[1],'base64'));
 execFileSync(process.platform==='win32'?'python':'python3',['-c','from PIL import Image; import sys; Image.open(sys.argv[1]).save(sys.argv[2],quality=90,method=6)',png,path.join(out,'walk-atlas.webp')]);
 fs.unlinkSync(png);
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify({format:'native-walk-atlas-v1',image:'walk-atlas.webp',width:1920,height:1320,columns:12,rows:6,animation:'Walk',source:'quaternius/animated-human.glb',factions:['gilets','genz','lyceens','pompiers','infirmieres','agriculteurs'],approvedP02:'../approved/P02.webp (single pose, separate hero)'},null,2)+'\n');
 console.log('Baked 72 Walk frames into '+path.join(out,'walk-atlas.webp'));
}finally{await browser.close();}

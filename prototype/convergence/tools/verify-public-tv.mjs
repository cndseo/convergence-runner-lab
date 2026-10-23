import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../../../',import.meta.url)));
import {createHash} from 'node:crypto';
import {writeFileSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
mkdirSync('public-png-verification',{recursive:true});
import {FIXED_TV_CATALOG,MARSEILLE_TV} from '../src/fixedTVCatalog.mjs';
const base='https://jeu.laconvergence.fr/',sha=b=>createHash('sha256').update(b).digest('hex');
const report={url:base,checkedAt:new Date().toISOString(),revision:(await(await fetch(base+'revision.txt')).text()).trim(),assets:[]};
assert.ok(report.revision.startsWith('b4bab317a86cf2d892e301de861ae5f4d936dae3'));
const results=await Promise.allSettled([...Object.values(FIXED_TV_CATALOG),MARSEILLE_TV].map(async d=>{
 const r=await fetch(base+'assets/'+d.folder+'/'+d.file);assert.equal(r.status,200,d.id);
 const bytes=Buffer.from(await r.arrayBuffer()),download='public-png-verification/'+d.file;writeFileSync(download,bytes);
 const hash=sha(bytes);return {id:d.id,file:d.file,sha256:hash,originalSha256:d.sha256,status:r.status,download,original:'prototype/convergence/public/assets/'+d.folder+'/'+d.file};
}));
for(const r of results){if(r.status==='rejected')throw r.reason;report.assets.push(r.value);}
writeFileSync('public-png-verification/manifest.json',JSON.stringify(report.assets));
report.assets=JSON.parse(execFileSync('python',['prototype/convergence/tools/check-png-pixels.py','public-png-verification/manifest.json'],{encoding:'utf8'})).map(({download,original,...r})=>r);
for(const [file,want] of [['cockpit.html','0277a838d6900bd8d83c9da2ef8f21b1a514d37af4879a49ec30d1f66ea24ce4'],['assets/accountPortal-BPM8ZsIr.js','3bc2c8af645f329aa9c1c6fd979339fddc2b4eecd8d2381d5bf9dfbd1578331e']]){
 const r=await fetch(base+file);assert.equal(r.status,200);assert.equal(sha(Buffer.from(await r.arrayBuffer())),want);report[file]='byte-identical';
}
const api=await fetch('https://api.le84500.fr/convergence/api/v1/health');assert.equal(api.status,200);report.apiHealth=await api.json();
writeFileSync('docs/reviews/tv-contract-20261023/deployment.json',JSON.stringify(report,null,2));
console.log('PUBLIC_ASSETS_PASS 17 original PNGs; cockpit and previous account asset unchanged; API healthy');

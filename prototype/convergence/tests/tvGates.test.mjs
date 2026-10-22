import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {FIXED_TV_CATALOG,FIXED_TV_KEYS,fixedTVFile,makeFixedPairs} from '../src/fixedTVCatalog.mjs';
import {generateTacticalLevel,applyChoice,gateLabel} from '../src/tactics.mjs';

test('sixteen correct PNG choices; no generated image overlay',async()=>{
 assert.equal(FIXED_TV_KEYS.length,16);
 assert.equal(new Set(FIXED_TV_KEYS.map(k=>FIXED_TV_CATALOG[k].file)).size,16);
 for(const key of FIXED_TV_KEYS){
  const a=FIXED_TV_CATALOG[key];
  assert.ok(!/[{}()]|placeholder|_x_/.test(a.file));
  const data=await readFile(new URL('../public/assets/tv-final/'+a.file,import.meta.url));
  assert.equal(data.toString('ascii',1,4),'PNG',key);
  assert.equal(data[25],6,key+' must have RGBA alpha');
  assert.ok(data.length>100_000,key+' must be a real TV image');
  assert.ok(data.readUInt32BE(16)>600);
 }
 const source=await readFile(new URL('../src/tvGateArt.js',import.meta.url),'utf8');
 assert.ok(!/CanvasTexture|fillText|strokeText|paintActualPNG|makeVariant|makeTVBroadcast/.test(source),
   'No number may be redrawn over the image');
});

test('20 choices in every generated level are drawn exclusively from the 16 fixed PNGs',()=>{
 const keys=new Set();
 for(let seed=1;seed<=400;seed++){
  const p=generateTacticalLevel({level:1+seed%25,seed,startCount:5,strength:1});
  const gates=p.events.filter(e=>e.type==='choice');
  assert.equal(gates.length,10);
  for(const g of gates)for(const c of [g.left,g.right]){
   assert.equal(fixedTVFile(c),FIXED_TV_CATALOG[c.tvKey].file);
   assert.ok(c.tvKey);
   keys.add(c.tvKey);
   const label=gateLabel(c);
   assert.ok(!/undefined|NaN|\(x\)/i.test(label.title));
  }
 }
 assert.deepEqual([...keys].sort(),[...FIXED_TV_KEYS].sort());
});

test('bonus human factions and all six penalties preserve exact arithmetic',()=>{
 for(const [key,num] of [['genz6',6],['pompiers4',4],['infirmieres3',3],['gilets5',5]])
   assert.equal(applyChoice({count:12,shields:0},{...FIXED_TV_CATALOG[key]}).count,12+num);
 assert.equal(applyChoice({count:30,shields:0},FIXED_TV_CATALOG.departs5).count,25);
 assert.equal(applyChoice({count:30,shields:0},FIXED_TV_CATALOG.dispersion2).count,15);
 assert.equal(applyChoice({count:30,shields:0},FIXED_TV_CATALOG.bravm3).count,27);
 assert.equal(applyChoice({count:30,shields:0},FIXED_TV_CATALOG.obstacles40).count,18);
 assert.equal(makeFixedPairs().length,10);
});

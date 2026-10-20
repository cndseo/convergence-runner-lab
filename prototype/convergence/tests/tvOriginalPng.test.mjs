import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {ORIGINAL_TV_CHOICES,matchingOriginalTV,templateOriginalTV} from '../src/tvOriginalMapping.mjs';
import {generateTacticalLevel,gateLabel} from '../src/tactics.mjs';

test('all 15 original TV graphics are native transparent PNGs, no placeholders',async()=>{
 assert.equal(ORIGINAL_TV_CHOICES.length,15);
 assert.equal(new Set(ORIGINAL_TV_CHOICES.map(x=>x.file)).size,15);
 for(const {file} of ORIGINAL_TV_CHOICES){
  assert.ok(!/\\(x\\)|placeholder/i.test(file));
  const bytes=await readFile(new URL('../public/assets/tv-originals/'+file,import.meta.url));
  assert.equal(bytes.subarray(1,4).toString(),'PNG',file);
  assert.ok(bytes.readUInt32BE(16)>1000,file+' maintains source picture resolution');
  assert.equal(bytes[25],6,file+' must have RGBA transparency');
  assert.ok(bytes.length>200_000,file+' cannot be a compressed tiny atlas thumbnail');
 }
});
test('exact PNG value is selected only when its painted number and math agree',()=>{
 for(const {file,choice} of ORIGINAL_TV_CHOICES){
  assert.equal(matchingOriginalTV(choice),file);
  const fake={...choice,value:choice.value+101};
  assert.equal(matchingOriginalTV(fake),null);
 }
 assert.equal(matchingOriginalTV({op:'conditional',value:24,elseValue:-5}),null);
 assert.equal(matchingOriginalTV({op:'shield',value:16}),null);
 assert.equal(matchingOriginalTV({op:'damage',kind:'van',value:19,percent:false}),null);
});
test('current generated levels keep 10 gates and use real original PNG art for both opening choices',()=>{
 for(let seed=1;seed<130;seed++){
  const plan=generateTacticalLevel({seed,level:seed%10+1,startCount:5,strength:1});
  const pair=plan.events.find(e=>e.type==='choice');
  assert.ok(pair);
  for(const c of [pair.left,pair.right]){
   assert.ok(matchingOriginalTV(c),JSON.stringify({seed,c}));
   assert.equal(['+10','×2'].includes(gateLabel(c).title),true);
  }
 }
});


test('all 20 gate screens select one of the real original PNG templates over 800 level seeds',()=>{
 const approved=new Set(ORIGINAL_TV_CHOICES.map(x=>x.file));
 let total=0,adapted=0;
 for(let seed=1;seed<=800;seed++){
  const plan=generateTacticalLevel({seed,level:1+seed%9,startCount:5,strength:1});
  for(const [i,pair] of plan.events.filter(e=>e.type==='choice').entries()){
   for(const choice of [pair.left,pair.right]){
    const png=templateOriginalTV(choice,i);
    assert.ok(approved.has(png),JSON.stringify({seed,choice,png}));
    if(!matchingOriginalTV(choice))adapted++;
    total++;
   }
  }
 }
 assert.equal(total,16000);
 assert.ok(adapted>0,'adapted PNGs cover formerly reconstructed TV screens');
});

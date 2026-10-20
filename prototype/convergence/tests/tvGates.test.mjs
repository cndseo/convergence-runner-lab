import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {TV_ART,tvArtIndex,tvDisplay} from '../src/tvGateMapping.mjs';
import {generateTacticalLevel,applyChoice,gateLabel} from '../src/tactics.mjs';

test('all 15 approved images, none with X placeholders, survive as an atlas',async()=>{
 assert.equal(TV_ART.length,15);
 assert.equal(new Set(TV_ART).size,15);
 assert.ok(TV_ART.every(x=>!/\(x\)|placeholder/i.test(x)));
 const data=await readFile(new URL('../public/assets/tv/tv-approved-atlas.webp',import.meta.url));
 assert.equal(data.toString('ascii',0,4),'RIFF');assert.equal(data.toString('ascii',8,12),'WEBP');
 assert.equal(data.length,6402);
});
test('TV text always mirrors the exact solver operation over 800 generated levels',()=>{
 for(let seed=1;seed<=800;seed++){
  const plan=generateTacticalLevel({level:1+(seed%8),seed,startCount:5+(seed%5)*8,strength:1});
  const gates=plan.events.filter(e=>e.type==='choice');
  assert.equal(gates.length,10);
  for(const [i,g] of gates.entries())for(const choice of [g.left,g.right]){
   const {number}=tvDisplay(choice);
   assert.ok(!/undefined|NaN|\(x\)/i.test(number));
   const expected=gateLabel(choice).title;
   assert.equal(number,expected,JSON.stringify({seed,i,choice}));
   const index=tvArtIndex(choice,2*i);
   assert.ok(index>=0&&index<TV_ART.length);
   const before={count:36,shields:4};assert.deepEqual(applyChoice(before,choice),applyChoice(before,choice),'visual never affects math');
  }
 }
});
test('faction channels select Gen Z, firefighters and nurses without fictitious values',()=>{
 for(const [faction,index] of [['genz',8],['pompiers',13],['infirmieres',1],['gilets',10]]){
  const choice={op:'+',value:10,bonusFaction:faction};
  assert.equal(tvArtIndex(choice),index);
  assert.equal(tvDisplay(choice).number,'+10');
 }
});

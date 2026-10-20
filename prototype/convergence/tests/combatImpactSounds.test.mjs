import test from 'node:test';
import assert from 'node:assert/strict';
import {CombatImpactSounds,COMBAT_IMPACT_ASSETS} from '../src/combatImpactSounds.js';

function fakeAudio(){
 let startCount=0;
 const gains=[];
 const param={value:0};
 const makeNode=()=>({
  connect(){},disconnect(){},start(){startCount++;},
  playbackRate:{value:1},gain:{value:1},pan:{value:0}
 });
 const ctx={state:'running',currentTime:3,createBufferSource:makeNode,createGain:()=>{
  const g=makeNode();gains.push(g.gain);return g;
 },createStereoPanner:makeNode};
 const audio={ctx,initialized:true,sfxGain:makeNode(),combatVoiceNode:null};
 return {audio,ctx,gains,get starts(){return startCount;}};
}
test('sampled baton, human reactions and body thud are short and rate-limited',()=>{
 const fake=fakeAudio();
 const fx=new CombatImpactSounds(fake.audio);
 for(const file of new Set(Object.values(COMBAT_IMPACT_ASSETS).flat()))
   fx.buffers.set(file,{duration:.4});
 assert.equal(fx.play('baton',{reaction:true}),true);
 assert.equal(fake.starts,2,'one physical sound and one pain reaction');
 assert.equal(fx.play('baton',{reaction:true}),false,'no overlapping spam');
 fake.ctx.currentTime+=.28;
 assert.equal(fx.play('baton',{reaction:true}),true);
 assert.equal(fake.starts,3,'second hit, but no immediately repeated scream');
 fake.ctx.currentTime+=.52;
 assert.equal(fx.play('body',{reaction:true}),true);
 assert.equal(fake.starts,5,'motorcycle thud with fresh reaction');
 assert.equal(fx.played,3);
});
test('no synthetic tones, no impact when audio locked or assets missing',()=>{
 const fake=fakeAudio();
 const fx=new CombatImpactSounds(fake.audio);
 assert.equal(fx.play('baton'),false,'not loaded');
 fake.ctx.state='suspended';
 assert.equal(fx.play('body'),false,'locked audio cannot play');
});
test('combat sound assets are source-licensed locally and connected to BRAV-M and CRS hits',async()=>{
 const {readFile,stat}=await import('node:fs/promises');
 const base=new URL('../',import.meta.url);
 for(const file of new Set(Object.values(COMBAT_IMPACT_ASSETS).flat())){
  const info=await stat(new URL('../public/assets/audio/combat/'+file,import.meta.url));
  assert.ok(info.size>2500,file);
 }
 const source=await readFile(new URL('../src/game.js',import.meta.url),'utf8');
 const moto=await readFile(new URL('../src/bravmGateCharge.js',import.meta.url),'utf8');
 assert.match(source,/preloadCombatImpacts/);
 assert.match(source,/playCombatImpact\?\.\('baton'/);
 assert.match(source,/playCombatImpact\?\.\('counter'/);
 assert.match(moto,/playCombatImpact\?\.\('body'/);
 assert.doesNotMatch(moto,/playMarseilleImpact/);
});

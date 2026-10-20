import test from 'node:test';
import assert from 'node:assert/strict';
import {AudioManager} from '../src/audio.js';
import {BravmGateCharge} from '../src/bravmGateCharge.js';

function audioMock(){
 const audio=new AudioManager();
 let played=0,stopped=0;
 function param(){return {value:0,setValueAtTime(v){this.value=v;},
  linearRampToValueAtTime(v){this.value=v;},cancelScheduledValues(){}};}
 function node(){return {gain:param(),pan:param(),playbackRate:{value:1},
  connect(){},start(){played++;},stop(){stopped++;}};}
 audio.initialized=true;
 audio.bravmMotorbikeBuffer={duration:3.187};
 audio.sfxGain=node();
 audio.ctx={state:'running',currentTime:1.2,createGain:node,
   createBufferSource:node,createStereoPanner:node};
 return {audio,count:()=>({played,stopped})};
}
test('Motorbike 4 field recording triggers exactly one paired left/right sound during BRAV-M charge',()=>{
 const {audio,count}=audioMock();
 const g={
  scene:{attach(){throw Error('unexpected rider')}} ,
  audio,state:'playing',speed:3,trackZ:0,playerX:0,runId:2,
  crowdManager:{getPlayerCount:()=>5},
  applyGate:()=>{},ui:{screenShake(){},updateCount(){}}
 };
 const attack=new BravmGateCharge(g);
 const gate={leftMesh:{userData:{root:{userData:{bravmRiders:[]}}}}};
 assert.equal(attack.start(gate,{op:'damage',kind:'bravm',value:3},'left'),true);
 assert.equal(g.state,'bravm_charge');
 assert.equal(count().played,2,'two staggered motorbike playback voices');
 assert.equal(audio.bravmMotorbikeNodes.sources.length,2);
 assert.equal(attack.start(gate,{},'left'),false,'avoid overlapping motorcycle charges');
 assert.equal(count().played,2);
 attack.clear();
 assert.equal(audio.bravmMotorbikeNodes,null,'stop audio when charge clears');
 assert.equal(count().stopped,4,'scheduled clip fade and charge cancellation');
 assert.equal(attack.start(gate,{op:'damage',kind:'bravm',value:3},'left'),true);
 assert.equal(count().played,4,'subsequent motorbike pass plays again');
 attack.clear();
});
test('motorcycle recording uses the selected file and preloads after starting campaign audio',async()=>{
 const {readFile}=await import('node:fs/promises');
 const {existsSync}=await import('node:fs');
 const base=new URL('../',import.meta.url);
 assert.ok(existsSync(new URL('./../public/assets/audio/bravm-motorbike-4.mp3',import.meta.url)));
 const sound=await readFile(new URL('../src/audio.js',import.meta.url),'utf8');
 const game=await readFile(new URL('../src/game.js',import.meta.url),'utf8');
 assert.ok(sound.includes('bravm-motorbike-4.mp3'));
 assert.ok(game.includes('this.audio.preloadBravmMotorbike?.()'));
 assert.equal(sound.includes('bravm-motorbike-1.mp3'),false);
});

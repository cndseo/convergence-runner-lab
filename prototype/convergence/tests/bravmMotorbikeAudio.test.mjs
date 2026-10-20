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

test('BRAV-M begins around 30 meters away, approaches for 3 seconds, damages once and plays no artificial impact',()=>{
 const {audio}=audioMock();
 let fakeImpacts=0,penalties=0,buzzes=0;
 audio.playMarseilleImpact=()=>{fakeImpacts++;};
 audio.playGateBad=()=>{buzzes++;};
 let crowd=9;
 const riders=Array.from({length:2},()=>({
  position:{x:0,y:.04,z:0,set(x,y,z){this.x=x;this.y=y;this.z=z;}},
  rotation:{y:0,z:0},userData:{},visible:false,
  removeFromParent(){this.removed=true;}
 }));
 const game={
  scene:{attach(){}},audio,state:'playing',speed:3,trackZ:21,playerX:.4,runId:5,
  crowdManager:{getPlayerCount:()=>crowd},
  applyGate(choice){penalties++;crowd-=choice.value;},
  ui:{screenShake(){},updateCount(){}}
 };
 const attack=new BravmGateCharge(game);
 const gate={leftMesh:{userData:{root:{userData:{bravmRiders:riders}}}}};
 assert.equal(attack.start(gate,{op:'damage',kind:'bravm',value:3},'left'),true);
 assert.equal(game.state,'bravm_charge');
 assert.deepEqual(riders.map(r=>r.position.z),[-50,-53]);
 assert.deepEqual(riders.map(r=>r.visible),[true,true]);
 for(let i=0;i<53;i++)attack.update(.05); // 2.65 s, no collision
 assert.equal(penalties,0);
 assert.ok(riders.every(r=>r.position.z>-53));
 for(let i=0;i<7;i++)attack.update(.05); // 3 seconds: collision just occurred
 assert.equal(penalties,1);
 assert.equal(crowd,6);
 assert.equal(fakeImpacts,0);
 assert.equal(buzzes,0);
 for(let i=0;i<12;i++)attack.update(.05);
 assert.equal(penalties,1);
 assert.equal(game.state,'playing');
 assert.equal(game.speed,3);
 assert.equal(fakeImpacts,0);
 assert.equal(attack.current,null);
});

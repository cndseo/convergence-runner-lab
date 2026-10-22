import test from 'node:test';
import assert from 'node:assert/strict';
import {BravmGateCharge} from '../src/bravmGateCharge.js';
import {MarseilleReinforcements} from '../src/marseilleReinforcements.js';
import {UIManager} from '../src/ui.js';
import {applyChoice} from '../src/tactics.mjs';

function bikeFixture(count=30,shields=20,z=20){
 let party={count,shields},applications=0,impacts=0;
 const g={state:'playing',speed:3,trackZ:0,playerX:0,runId:1,shields,
  crowdManager:{getPlayerCount:()=>party.count},
  audio:{playBravmMotorbikeCharge(){},stopBravmMotorbikeCharge(){},playCombatImpact(){impacts++;}},
  ui:{screenShake(){},updateCount(){}},
  applyGate(choice){party=applyChoice(party,choice);applications++;if(!party.count)this.state='lose';}};
 const charge=new BravmGateCharge(g),gate={z,leftMesh:{userData:{root:{userData:{}}}}};
 charge.start(gate,{op:'damage',kind:'bravm',value:3},'left',{nonBlocking:true});
 return {g,charge,get party(){return party;},get applications(){return applications;},get impacts(){return impacts;}};
}
test('BRAV-M: contact removes three real units once, without stopping campaign or spending shields',()=>{
 for(const count of [1,2,3,30])for(const shields of [0,20]){
  const f=bikeFixture(count,shields);
  for(let i=0;i<50;i++)f.charge.update(.05);
  assert.equal(f.party.count,count);assert.equal(f.applications,0);
  assert.equal(f.g.state,'playing');assert.equal(f.g.speed,3);
  for(let i=0;i<30;i++)f.charge.update(.05);
  assert.deepEqual(f.party,{count:Math.max(0,count-3),shields});
  assert.equal(f.applications,1);assert.equal(f.impacts,1);
 }
});
test('BRAV-M: pause, late tap, swept arrival and restart cannot lose or duplicate the hit',()=>{
 const f=bikeFixture();f.g.state='paused';f.charge.update(.05);
 assert.equal(f.charge.current.elapsed,0);assert.equal(f.applications,0);
 f.g.state='playing';f.g.trackZ=20;f.charge.update(.05);
 assert.equal(f.party.count,27);assert.equal(f.charge.current.lost,3);
 for(let i=0;i<20;i++)f.charge.update(.05);
 assert.equal(f.applications,1);
 const late=bikeFixture(30,0,1.001);late.charge.update(.05);assert.equal(late.party.count,27);
 const stale=bikeFixture();stale.g.runId++;stale.charge.update(.05);
 assert.equal(stale.applications,0);assert.equal(stale.charge.current,null);
});
function reserveFixture(){
 const enemy={count:14,remainingCount:14},g={mode:'campaign',state:'fighting',runId:1,fightingEnemy:enemy,
  audio:{preloadMarseilleAttack:async()=>({})},ui:{showFloatingText(){}}};
 const r=Object.assign(Object.create(MarseilleReinforcements.prototype),{game:g,generation:0,active:false,pending:false,charges:1,demoCharges:0,
  showButton(){},preload:async()=>({}),begin(e){this.enemy=e;this.active=true;this.begins=(this.begins||0)+1;}});
 g.challengeHub={consumeMarseilleCharge:async()=>{r.charges--;return true;}};
 return {g,r,enemy};
}
test('Marseille: pause after charge consumption preserves the attack and prevents a second activation',async()=>{
 const {g,r}=reserveFixture();
 g.challengeHub.consumeMarseilleCharge=async()=>{r.charges--;g.pausedState='fighting';g.state='paused';return true;};
 assert.equal(await r.activate(),true);assert.equal(r.charges,0);assert.equal(r.active,true);assert.equal(r.begins,1);
 g.state='fighting';assert.equal(await r.activate(),false);assert.equal(r.begins,1);
});
test('Marseille: a paused preload remains valid, a restarted run cannot consume a charge',async()=>{
 for(const restart of [false,true]){
  const {g,r}=reserveFixture();
  r.preload=async()=>{if(restart)g.runId++;else{g.state='paused';g.pausedState='fighting';}return {};};
  assert.equal(await r.activate(),!restart);assert.equal(r.charges,restart?1:0);
 }
});
test('Marseille: real officer count reaches zero at the animated impact, not nine seconds later',()=>{
 const {g,r,enemy}=reserveFixture();let impacts=0,labels=0;
 Object.assign(r,{active:true,enemy,elapsed:0,nextFootfall:10,actors:[],police:[],puffs:[]});
 Object.assign(g.audio,{playMarseilleImpact(){impacts++;}});g.ui.screenShake=()=>{};
 g.levelGenerator={updateEnemyLabel(e){assert.equal(e.remainingCount,0);labels++;}};
 for(let i=0;i<50;i++)r.update(.05);
 assert.equal(enemy.remainingCount,14);
 for(let i=0;i<10;i++)r.update(.05);
 assert.equal(enemy.remainingCount,0);assert.equal(impacts,1);assert.equal(labels,1);assert.equal(r.active,true);
 g.state='paused';const time=r.elapsed;r.update(.05);assert.equal(r.elapsed,time);
});
test('HUD arithmetic uses real units while dense crowd visuals are preserved',t=>{
 t.mock.method(globalThis,'setTimeout',()=>0);
 const display={style:{},setAttribute(){}};
 const ui=Object.assign(Object.create(UIManager.prototype),{game:{crowdManager:{getDisplayedCount:()=>127}},countDisplay:display,prevCount:0});
 ui.updateCount(30);assert.equal(display.textContent,'👥 30');assert.match(display.title,/127/);
 ui.updateCount(35);assert.equal(display.textContent,'👥 35');
 ui.updateCount(32);assert.equal(display.textContent,'👥 32');
});

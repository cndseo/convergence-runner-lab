import test from 'node:test';
import assert from 'node:assert/strict';
import {MarseilleReinforcements} from '../src/marseilleReinforcements.js';
import {ChallengeHub,PREMIUM_CATALOG} from '../src/challengeHub.js';

const records=new Map();
globalThis.localStorage={getItem:key=>records.get(key)||null,setItem:(key,value)=>records.set(key,value)};
function fixture(paid=0){
 records.clear();
 const game={mode:'campaign',level:1};
 const reserve=Object.assign(Object.create(MarseilleReinforcements.prototype),{
  game,charges:paid,demoCharges:0,levelOneGift:{claimed:false,pending:false},showButton(){}
 });
 game.marseille=reserve;
 const hub=Object.assign(Object.create(ChallengeHub.prototype),{game,apiBase:'',ensurePlayer:async()=> 'test'});
 return {game,reserve,hub};
}
test('TV gift adds once to the same purchased stock and consumes without a payment API',async()=>{
 const {reserve,hub}=fixture(2);
 assert.equal(reserve.grantLevelOneGift(),true);
 assert.equal(reserve.charges,3);assert.equal(reserve.available(),3);assert.equal(reserve.demoCharges,0);
 assert.equal(reserve.grantLevelOneGift(),false);
 assert.equal(await hub.consumeMarseilleCharge(),true);
 assert.equal(reserve.charges,2);assert.equal(reserve.levelOneGift.pending,false);
 assert.equal(await hub.consumeMarseilleCharge(),false,'paid stock needs the existing server');
});
test('server synchronization preserves exactly one outstanding gift',()=>{
 const {reserve}=fixture();
 reserve.grantLevelOneGift();
 reserve.syncPurchasedCharges(3);assert.equal(reserve.charges,4);
 reserve.syncPurchasedCharges(3);assert.equal(reserve.charges,4);
 reserve.consumeLevelOneGift();reserve.syncPurchasedCharges(3);assert.equal(reserve.charges,3);
});
test('reload restores the gift and its claimed flag without allowing a duplicate',()=>{
 const {reserve}=fixture();reserve.grantLevelOneGift();
 const resumed=Object.assign(Object.create(MarseilleReinforcements.prototype),{
  game:reserve.game,charges:0,demoCharges:0,levelOneGift:{claimed:false,pending:false},showButton(){}
 });
 resumed.restoreLevelOneGift();
 assert.equal(resumed.charges,1);assert.equal(resumed.grantLevelOneGift(),false);
 resumed.consumeLevelOneGift();
 const next=Object.assign(Object.create(MarseilleReinforcements.prototype),{
  game:reserve.game,charges:0,levelOneGift:{claimed:false,pending:false}
 });
 next.restoreLevelOneGift();assert.equal(next.charges,0);assert.equal(next.levelOneGift.claimed,true);
});
test('new run replaces an unused gift and preserves all purchased charges',()=>{
 const {reserve}=fixture(2);
 reserve.grantLevelOneGift();reserve.resetLevelOneGift();
 assert.equal(reserve.charges,2);assert.equal(reserve.levelOneGift.claimed,false);
 reserve.grantLevelOneGift();assert.equal(reserve.charges,3);
});
test('later levels and daily challenge cannot grant or spend this bonus',async()=>{
 const {game,reserve,hub}=fixture();
 game.level=2;assert.equal(reserve.grantLevelOneGift(),false);
 game.level=1;game.mode='daily';assert.equal(reserve.grantLevelOneGift(),false);
 game.mode='campaign';reserve.grantLevelOneGift();game.mode='daily';
 assert.equal(await hub.consumeMarseilleCharge(),false);assert.equal(reserve.available(),1);
});
test('purchased attacks keep the existing consume endpoint and 299 cent price',async t=>{
 const {reserve,hub}=fixture(2);hub.apiBase='https://contract.test';
 const requests=[];
 t.mock.method(globalThis,'fetch',async(url,options)=>{
  requests.push({url,options});return {ok:true,json:async()=>({remaining:1})};
 });
 assert.equal(await hub.consumeMarseilleCharge(),true);
 assert.equal(reserve.charges,1);
 assert.equal(requests.length,1);assert.equal(requests[0].url,'https://contract.test/api/v1/support/consume');
 assert.ok(JSON.parse(requests[0].options.body).requestId);
 assert.equal(PREMIUM_CATALOG.find(p=>p.id==='marseille1').cents,299);
});

test('attack action is visible only when combat allows manual use',()=>{
 const {game,reserve}=fixture(0);
 delete reserve.showButton; // Remove the fixture's empty stub to test the real method.
 const classes=new Set();
 reserve.button={style:{display:'none'},disabled:true,title:'',textContent:'',
  classList:{toggle:(name,enabled)=>enabled?classes.add(name):classes.delete(name)}};
 reserve.grantLevelOneGift();
 game.state='playing';game.fightingEnemy=null;reserve.showButton();
 assert.equal(reserve.button.style.display,'none');
 game.state='fighting';game.fightingEnemy={kind:'crs'};
 reserve.showButton();
 assert.equal(reserve.button.style.display,'block');
 assert.match(reserve.button.textContent,/TOUCHE ICI POUR ATTAQUER/);
 assert.match(reserve.button.textContent,/1 disponible/);
 assert.equal(reserve.button.disabled,false);
 assert.ok(classes.has('marseille-attack-ready'));
 game.state='paused';reserve.showButton();
 assert.equal(reserve.button.style.display,'none');
 game.state='fighting';reserve.pending=true;reserve.showButton();
 assert.equal(reserve.button.style.display,'none');
 reserve.pending=false;reserve.active=true;reserve.showButton();
 assert.equal(reserve.button.style.display,'none');
 reserve.active=false;reserve.consumeLevelOneGift();reserve.showButton();
 assert.equal(reserve.button.style.display,'none');
 assert.equal(reserve.button.disabled,true);
 assert.equal(classes.has('marseille-attack-ready'),false);
});

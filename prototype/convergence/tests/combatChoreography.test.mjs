import test from 'node:test';
import assert from 'node:assert/strict';
import {INTRO_SECONDS, CONTACT_SECONDS, RECOVER_SECONDS, clamp01, visualCombatPhase, visualCombatWeight} from '../src/combatStages.mjs';
test('combat choreography transitions and recoveries are deterministic',()=>{
 assert.equal(visualCombatPhase(0),'approach');
 assert.equal(visualCombatPhase(INTRO_SECONDS),'contact');
 assert.equal(visualCombatPhase(CONTACT_SECONDS),'pressure');
 assert.equal(visualCombatPhase(3,true),'recover');
 assert.equal(visualCombatWeight(0),0);
 assert.equal(visualCombatWeight(INTRO_SECONDS),1);
 assert.equal(visualCombatWeight(2),.78);
 assert.equal(visualCombatWeight(2,true,0),1);
 assert.equal(visualCombatWeight(2,true,RECOVER_SECONDS),0);
 assert.equal(clamp01(-1),0);
 assert.equal(clamp01(2),1);
});

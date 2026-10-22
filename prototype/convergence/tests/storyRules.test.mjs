import test from 'node:test';
import assert from 'node:assert/strict';
import {FINAL_CAMPAIGN_LEVEL,INTRO_AUDIO_SECONDS,introPhase,easeOut,canCatchTarget} from '../src/storyRules.mjs';

test('intro speech happens before escape and shelter phases',()=>{
  assert.equal(introPhase(0).phase,'speaking');
  assert.equal(introPhase(INTRO_AUDIO_SECONDS+.6).phase,'speaking');
  const r=introPhase(INTRO_AUDIO_SECONDS+1.8);
  assert.equal(r.phase,'running');
  assert.ok(r.progress>0&&r.progress<1);
  const end=introPhase(INTRO_AUDIO_SECONDS+4.8);
  assert.equal(end.phase,'sheltered');
  assert.equal(end.progress,1);
  assert.equal(easeOut(-3),0);assert.equal(easeOut(4),1);
});

test('character cannot be caught at any non-final level or before the last CRS front falls',()=>{
  for(let level=1;level<FINAL_CAMPAIGN_LEVEL;level++){
    assert.equal(canCatchTarget({
      level,finalLineDefeated:true,
      playerProgress:500,targetProgress:1,playerX:0,targetX:0
    }),false);
  }
  assert.equal(canCatchTarget({
    level:FINAL_CAMPAIGN_LEVEL,finalLineDefeated:false,
    playerProgress:200,targetProgress:190,playerX:0,targetX:0
  }),false);
});

test('last-level contact is possible, but requires real proximity',()=>{
 const scenario={level:FINAL_CAMPAIGN_LEVEL,finalLineDefeated:true,playerProgress:191,targetProgress:191,playerX:0,targetX:0};
 assert.equal(canCatchTarget(scenario),true);
 assert.equal(canCatchTarget({...scenario,playerX:3}),false);
 assert.equal(canCatchTarget({...scenario,playerProgress:180}),false);
});

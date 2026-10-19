import test from 'node:test';
import assert from 'node:assert/strict';
import {utcChallengeDate,dailyChallengeSeed,createDailyPlan,computeDailyScore,formatChallengeShare,validateDailyPath} from '../src/dailyChallenge.mjs';

test('one UTC daily seed shared across locales and changing at midnight UTC',()=>{
 assert.equal(utcChallengeDate(new Date('2026-10-19T23:59:59Z')),'2026-10-19');
 assert.equal(utcChallengeDate(new Date('2026-10-20T00:00:01Z')),'2026-10-20');
 assert.notEqual(dailyChallengeSeed('2026-10-19'),dailyChallengeSeed('2026-10-20'));
 assert.equal(dailyChallengeSeed('2026-10-19'),dailyChallengeSeed('2026-10-19'));
 assert.throws(()=>dailyChallengeSeed('2026-02-31'),RangeError);
});
test('identical daily plans at same date with exactly 10 portals, proved winning',()=>{
 const a=createDailyPlan('2026-10-19'), b=createDailyPlan('2026-10-19');
 assert.deepEqual(a,b);
 assert.equal(a.events.filter(e=>e.type==='choice').length,10);
 assert.equal(a.startCount,5);
 assert.equal(a.strength,1);
 assert.ok(a.proof.winningPaths>0);
 const scored=computeDailyScore('2026-10-19',a.proof.winningPath);
 assert.ok(scored.won&&scored.survivors>0);
 assert.equal(scored.totalChoices,10);
 assert.equal(scored.seed,a.seed);
});
test('forged or incomplete score submissions cannot be accepted',()=>{
 assert.equal(validateDailyPath(Array(10).fill('left')),true);
 for(const path of [[],['left'],Array(11).fill('right'),Array(10).fill('middle'),null,'left']){
  assert.equal(validateDailyPath(path),false);
  assert.throws(()=>computeDailyScore('2026-10-19',path),TypeError);
 }
});
test('share text displays score but not winning route or private data',()=>{
 const text=formatChallengeShare('2026-10-19',27,'https://example.com/convergence/');
 assert.match(text,/27 manifestants/);
 assert.match(text,/2026-10-19/);
 assert.match(text,/daily=2026-10-19/);
 assert.doesNotMatch(text,/left|right|token|player_id/i);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateTacticalLevel,solvePlan,replayPlan,greedyPath,difficultyTargets,
  applyChoice,applyCombat,initialState
} from '../src/tactics.mjs';

test('real first level is challenging yet has a substantial fraction of winning choices',()=>{
  const level=1, seed=level*20261019;
  const plan=generateTacticalLevel({level,seed,startCount:5,strength:1});
  const all=solvePlan(plan);
  const winners=all.filter(s=>replayPlan(plan,s.path).count>0);
  const d=difficultyTargets(level);
  assert.equal(all.length,1024);
  assert.ok(winners.length>=Math.ceil(d.min*1024),`Only ${winners.length} winning first-level routes`);
  assert.ok(winners.length<=Math.floor(d.max*1024));
  assert.equal(winners.length,plan.proof.winningPaths);
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>=5);
  assert.equal(replayPlan(plan,greedyPath(plan).path).count,0);
  assert.equal(plan.events.filter(e=>e.type==='choice').length,10);
  assert.equal(plan.events.filter(e=>e.type==='enemy').length,2);
});

test('every real saved-level seed is certified across levels and upgraded crowds',()=>{
  for(const startCount of [5,8,17,50,72]){
    for(const strength of [1,2,3,7]){
      for(let level=1;level<=120;level++){
        const seed=level*20261019;
        const plan=generateTacticalLevel({level,seed,startCount,strength});
        const d=difficultyTargets(level);
        const proof=plan.proof;
        const tag=JSON.stringify({level,startCount,strength,seed});
        assert.ok(proof.winningPaths>=Math.ceil(d.min*1024),`Too few winners: ${tag} ${proof.winningPaths}`);
        assert.ok(proof.winningPaths<=Math.floor(d.max*1024),`Too many winners: ${tag} ${proof.winningPaths}`);
        assert.equal(proof.totalPaths,1024,tag);
        assert.ok(proof.winningPaths<proof.totalPaths,tag);
        assert.equal(proof.winningPath.length,10,tag);
        assert.ok(replayPlan(plan,proof.winningPath).count>0,`False witness ${tag}`);
        assert.equal(replayPlan(plan,greedyPath(plan).path).count,0,`Greedy wins ${tag}`);
        assert.equal(proof.greedyWins,false,tag);
        assert.equal(proof.witnessSurvivors,replayPlan(plan,proof.winningPath).count,tag);
        assert.equal(proof.winningRate,proof.winningPaths/proof.totalPaths,tag);
      }
    }
  }
});

test('certified path stays alive after each choice and each line of police',()=>{
  for(const level of [1,2,8,30,75]){
    const plan=generateTacticalLevel({level,seed:level*20261019,startCount:5,strength:1});
    let state=initialState(plan.startCount),choice=0;
    for(const event of plan.events){
      state=event.type==='choice'
        ?applyChoice(state,event[plan.proof.winningPath[choice++]])
        :applyCombat(state,event.count,plan.strength);
      assert.ok(state.count>0,`Path dies at level ${level}, event ${event.z}`);
    }
    state=applyCombat(state,plan.bossHealth,plan.strength);
    assert.ok(state.count>0,`Path dies at boss level ${level}`);
  }
});

test('alternate level seeds and long-term levels remain certified',()=>{
  for(const level of [1,8,35,121,200,500,1000]){
    for(const seed of [1,58,9999,305001,20261019]){
      for(const [startCount,strength] of [[5,1],[50,3]]){
        const plan=generateTacticalLevel({level,seed,startCount,strength});
        const tag=JSON.stringify({level,seed,startCount,strength});
        assert.ok(plan.proof.winningPaths>0,`No winner ${tag}`);
        assert.ok(replayPlan(plan,plan.proof.winningPath).count>0,`Invalid witness ${tag}`);
        assert.equal(replayPlan(plan,greedyPath(plan).path).count,0,`Greedy wins ${tag}`);
        const d=difficultyTargets(level);
        assert.ok(plan.proof.winningRate>=d.min&&plan.proof.winningRate<=d.max,`Outside difficulty band ${tag}`);
      }
    }
  }
});

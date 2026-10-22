import test from 'node:test';
import assert from 'node:assert/strict';
import {applyChoice} from '../src/tactics.mjs';
import {explainGateChoice,evaluateResult} from '../src/tacticalFeedback.mjs';

test('gate feedback shows exact population and protection deltas',()=>{
  const before={count:13,shields:0},choice={op:'shield',value:15};
  const after=applyChoice(before,choice);
  const f=explainGateChoice(choice,before,after);
  assert.match(f.title,/15 protections/);
  assert.match(f.detail,/absorbent les pertes/);
  assert.equal(f.tone,'positive');
  assert.deepEqual(before,{count:13,shields:0});
});

test('barriers and conditions explain facts without revealing optimal choices',()=>{
  const before={count:10,shields:6};
  const barrier={op:'damage',value:8,kind:'barrier'};
  const after=applyChoice(before,barrier);
  const f=explainGateChoice(barrier,before,after);
  assert.match(f.title,/6 protections utilisées/);
  assert.match(f.title,/-2 manifestants/);
  assert.match(f.detail,/limité les pertes/);
  assert.equal(f.tone,'warning');
  const conditional={op:'conditional',condition:'shield',threshold:8,value:30,elseValue:-4};
  const c=explainGateChoice(conditional,before,applyChoice(before,conditional));
  assert.match(c.detail,/non remplie/);
});

test('a bonus above the former display cap remains exact in feedback',()=>{
  const before={count:69,shields:2};
  const after=applyChoice(before,{op:'+',value:10});
  const f=explainGateChoice({op:'+',value:10},before,after);
  assert.equal(after.count,79);
  assert.match(f.title,/\+10 manifestants/);
  assert.doesNotMatch(f.detail,/plafond/i);
});

test('loss report distinguishes sources and provides grounded guidance',()=>{
  const history=[
    {before:{count:5,shields:0},after:{count:15,shields:0}},
    {before:{count:15,shields:0},after:{count:15,shields:12}}
  ];
  const c=evaluateResult({won:false,survivors:0,gateHistory:history,lossSource:'combat',level:1});
  assert.match(c.title,/2\/10/);
  assert.match(c.detail,/forces de l’ordre/);
  assert.match(c.detail,/15 manifestants/);
  assert.match(c.tip,/protections/);
  const g=evaluateResult({won:false,survivors:0,gateHistory:history,lossSource:'gate',level:1});
  assert.match(g.detail,/dernier portique/);
  const o=evaluateResult({won:false,survivors:0,gateHistory:history,lossSource:'obstacle',level:1});
  assert.match(o.detail,/obstacle/);
});

test('victory stars are cosmetic and only count actual survivors',()=>{
  const report=n=>evaluateResult({won:true,survivors:n,gateHistory:[{before:{count:5,shields:0},after:{count:15,shields:10}}],level:1});
  assert.equal(report(4).stars,1);
  assert.equal(report(20).stars,2);
  assert.equal(report(35).stars,3);
  assert.match(report(35).detail,/35 survivants/);
  assert.match(report(35).detail,/10 protections/);
});

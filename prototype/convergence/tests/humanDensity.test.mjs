import test from 'node:test';
import assert from 'node:assert/strict';
import {crowdDensity,crowdSlot,streetRoster,streetDetail,DENSITY_LIMITS} from '../src/humanDensity.mjs';

test('visual growth is monotonic, 3–6x, bounded, and never resurrects an empty crowd',()=>{
  let previous=0;
  for(let n=1;n<=72;n++){
    const d=crowdDensity(n,48);
    assert.ok(d.marchers>=n*3&&d.marchers<=n*6);
    assert.ok(d.total>previous);assert.ok(d.total<=DENSITY_LIMITS.crowd);
    previous=d.total;
  }
  assert.equal(crowdDensity(5).total,28);
  assert.equal(crowdDensity(72,48).total,312);
  assert.equal(crowdDensity(0,48).total,0);
});
test('each protection adds two visible supporters, losses remove them without changing the roster',()=>{
  const base=crowdDensity(12,0);
  for(let shield=0;shield<=48;shield++){
    const next=crowdDensity(12,shield);
    assert.equal(next.marchers,base.marchers);
    assert.equal(next.count,12);
    assert.equal(next.total-base.total,2*shield);
  }
});
test('ranks sit behind the leader, within a compact corridor, with no duplicate slots',()=>{
  for(const n of [1,5,24,72]){
    const d=crowdDensity(n,48),seen=new Set();
    for(let i=0;i<d.total;i++){
      const slot=crowdSlot(i,d);
      assert.ok(Number.isFinite(slot.x)&&Number.isFinite(slot.z));
      assert.ok(Math.abs(slot.x)<3.4);
      if(i)assert.ok(slot.z>0&&slot.z<=d.depth+.06);
      const key=JSON.stringify(slot);assert.ok(!seen.has(key));seen.add(key);
    }
  }
});
test('every district has all patrol types throughout the route, clear of the playable corridor',()=>{
  for(let id=1;id<=12;id++){
    const roster=streetRoster(180,id);
    assert.deepEqual(roster,streetRoster(180,id));
    for(let z=0;z<180;z+=24){
      const nearby=roster.filter(g=>g.z>=z&&g.z<z+30);
      for(const kind of ['crs','bac','bravm'])assert.ok(nearby.some(g=>g.kind===kind));
    }
    assert.ok(roster.every(g=>Math.abs(g.x)>=5.65));
    assert.ok(roster.some(g=>g.kind==='spectators'));
  }
  assert.deepEqual([-25,-24,0,44,45,66,67,86,87].map(streetDetail),[0,1,1,1,2,2,3,3,0]);
});

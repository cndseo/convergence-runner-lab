import test from 'node:test';
import assert from 'node:assert/strict';
import {HERO_PROFILES,HERO_COMMUNITIES} from '../src/heroCatalog.mjs';
import {HERO_REFINEMENTS,artFor} from '../src/heroArt.mjs';

test('twenty explicit identity recipes and all five communities',()=>{
 assert.equal(HERO_PROFILES.length,20);
 assert.equal(Object.keys(HERO_REFINEMENTS).length,20);
 assert.equal(HERO_COMMUNITIES.length,5);
 for(const community of HERO_COMMUNITIES)
  assert.equal(HERO_PROFILES.filter(p=>p.family===community.id).length,4);
 const signatures=new Set();
 for(const profile of HERO_PROFILES){
  const style=HERO_REFINEMENTS[profile.id],art=artFor(profile.model);
  assert.ok(style,profile.id+' is missing its face signature');
  assert.ok(art?.style&&art?.skin&&art?.hair);
  const signature=[profile.model.base,style.style,style.jaw,style.cheek,style.chin].join('|');
  assert.ok(!signatures.has(signature),profile.id+' would have a duplicate recipe');
  signatures.add(signature);
 }
});

test('senior and younger faces stay distinct in the declarative catalog',()=>{
 const older=artFor({key:'hero-gilets-marcel'});
 const younger=artFor({key:'hero-lyceens-mathis'});
 assert.equal(older.age,70);
 assert.equal(younger.shape,'young');
 assert.notEqual(older.style,younger.style);
 assert.notEqual(older.jaw,younger.jaw);
});

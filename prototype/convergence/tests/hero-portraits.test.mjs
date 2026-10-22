import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {HERO_PROFILES,HERO_COMMUNITIES} from '../src/heroCatalog.mjs';

const folder=fileURLToPath(new URL('../public/assets/hero-portraits/',import.meta.url));
const manifest=JSON.parse(readFileSync(folder+'manifest.json','utf8'));
const pngSig=Buffer.from('89504e470d0a1a0a','hex');

test('every selected hero has two authentic cropped PNGs',()=>{
 assert.equal(HERO_PROFILES.length,20);
 assert.equal(manifest.length,20);
 assert.equal(HERO_COMMUNITIES.length,5);
 const names=new Set();
 for(const hero of HERO_PROFILES){
  assert.ok(!names.has(hero.id));names.add(hero.id);
  for(const suffix of ['', '-face']){
   const path=folder+hero.id+suffix+'.png';
   assert.ok(existsSync(path),hero.id+suffix);
   const b=readFileSync(path);
   assert.ok(b.subarray(0,8).equals(pngSig),'Invalid PNG '+hero.id+suffix);
   const w=b.readUInt32BE(16),h=b.readUInt32BE(20);
   assert.ok(w>115&&h>(suffix?120:350),'Incorrect crop '+hero.id+suffix);
   assert.ok(statSync(path).size<180000,'Unoptimized asset '+hero.id+suffix);
  }
  const meta=manifest.find(x=>x.id===hero.id);
  assert.ok(meta&&meta.original_sha256?.length===64);
 }
});

test('wardrobe is strictly illustrated; GLBs are retained for gameplay',()=>{
 const src=readFileSync(fileURLToPath(new URL('../src/heroSystem.js',import.meta.url)),'utf8');
 const portrait=readFileSync(fileURLToPath(new URL('../src/heroPortrait.js',import.meta.url)),'utf8');
 const glb=readFileSync(fileURLToPath(new URL('../src/heroModels.js',import.meta.url)),'utf8');
 assert.match(src,/new HeroPortrait\(viewport\)/);
 assert.doesNotMatch(src,/HeroViewer|GLISSE POUR TOURNER|ENREGISTRER MON PORTRAIT 3D/);
 assert.doesNotMatch(portrait,/WebGLRenderer|GLTFLoader|createHeroModel|from 'three'/);
 assert.match(glb,/createRealisticWalker/);
});

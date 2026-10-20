import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const assets=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/police-reference');
const approved={
  'crs-reference.webp':{size:2842,sha:'aa5ec8004d31aff7e8beed5ca80f8da243e6b2f75113755c9bf548e06a5062e6'},
  'bac-reference.webp':{size:3120,sha:'d27ba0326ed6d174b673234b58e83b145ece542738aa8d05b4e68c97e946a630'},
  'bravm-reference.webp':{size:2050,sha:'9a5f20faeb60bb8894436de5c00b432251b1df8f6062d23e13501e2ffc9c34e9'},
};
test('3 approved cutouts exist and were transferred without corruption',async()=>{
 for(const [name,expected] of Object.entries(approved)){
  const b=await readFile(path.join(assets,name));
  assert.equal(b.toString('ascii',0,4),'RIFF');
  assert.equal(b.toString('ascii',8,12),'WEBP');
  assert.equal(b.length,expected.size);
  assert.equal(createHash('sha256').update(b).digest('hex'),expected.sha);
  assert.ok(b.length<15000,'per-sprite mobile download budget');
 }
});

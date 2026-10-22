import test from 'node:test';
import assert from 'node:assert/strict';
import {shareResultLayout,resultShareData,SHARE_BACKGROUND} from '../src/resultSharing.mjs';

test('share background is a reusable image; numbers remain generated per result',()=>{
 assert.equal(SHARE_BACKGROUND,'assets/brand/convergence-share-background.webp');
 const a=shareResultLayout({mode:'campaign',level:1,district:'Nation',survivors:28,badge:false,bestGain:10,won:true});
 const b=shareResultLayout({mode:'campaign',level:12,district:'Élysée',survivors:132,badge:true,bestGain:25,won:true});
 assert.deepEqual([a.survivors,a.category,a.district,a.detail],['28','PARIS · 1/12','Nation','Meilleur ralliement : +10']);
 assert.deepEqual([b.survivors,b.category,b.district,b.detail,b.verdict],['132','PARIS · 12/12','Élysée','Meilleur ralliement : +25','OBJECTIF ATTEINT']);
});
test('share card clamps invalid values and handles campaign and daily results',()=>{
 const zero=shareResultLayout({mode:'campaign',level:1,district:'Nation',survivors:-22,won:false});
 assert.equal(zero.survivors,'0');assert.equal(zero.verdict,'PARTIE TERMINÉE');
 const daily=shareResultLayout({mode:'daily',day:'2026-10-22',survivors:17,won:true});
 assert.equal(daily.category,'DÉFI DU JOUR');assert.equal(daily.district,'2026-10-22');
 assert.equal(daily.survivors,'17');
 assert.equal(daily.detail,'À TON TOUR DE FAIRE MIEUX !');
});
test('share URL and dynamic score remain accurate and carry challenge date',()=>{
 const s=resultShareData({mode:'campaign',day:'2026-10-22',district:'Nation',survivors:28},'https://jeu.laconvergence.fr/');
 assert.match(s.text,/28 manifestants/);
 const u=new URL(s.url);assert.equal(u.searchParams.get('daily'),'2026-10-22');
 assert.equal(u.searchParams.get('from'),'result');
});

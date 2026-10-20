import test from 'node:test';
import assert from 'node:assert/strict';
import {districtForLevel,migrateParisProgress} from '../src/parisDistricts.mjs';
import {FINAL_CAMPAIGN_LEVEL,canCatchTarget} from '../src/storyRules.mjs';
test('old ten-front completion migrates into Paris without skipping the two final districts',()=>{
 assert.deepEqual(migrateParisProgress({level:10,campaignComplete:true}),{parisLevel:10,campaignComplete:false});
});
test('geography persists independently of tactical difficulty and survives daily-mode saves',()=>{
 assert.deepEqual(migrateParisProgress({parisVersion:1,level:1,parisLevel:9}),{parisLevel:9,campaignComplete:false});
 assert.deepEqual(migrateParisProgress({parisVersion:1,level:4,parisLevel:12,campaignComplete:true}),{parisLevel:12,campaignComplete:true});
});
test('only the twelfth geographic destination permits the final symbolic capture',()=>{
 const contact={finalLineDefeated:true,playerProgress:200,targetProgress:200,playerX:0,targetX:0};
 assert.equal(FINAL_CAMPAIGN_LEVEL,12);
 for(let level=1;level<12;level++)assert.equal(canCatchTarget({...contact,level}),false);
 assert.equal(canCatchTarget({...contact,level:12}),true);
 assert.equal(districtForLevel(12).slug,'elysee');
});

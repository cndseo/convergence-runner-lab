import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright-core');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
const page=await context.newPage(), errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.addInitScript(()=>localStorage.setItem('convergence_challenge_token','P'.repeat(43)));
let emailStart=null, logout=false;
await page.route('http://127.0.0.1:4329/api/v1/**',async route=>{
  const req=route.request(),url=new URL(req.url()),path=url.pathname;
  const headers={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Methods':'GET,POST,OPTIONS','Content-Type':'application/json'};
  if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
  if(path==='/api/v1/auth/status')return route.fulfill({status:200,headers,body:JSON.stringify({google:false,email:true,apple:false})});
  if(path==='/api/v1/account/link')return route.fulfill({status:200,headers,body:JSON.stringify({playerId:'admin-test',token:'A'.repeat(43)})});
  if(path==='/api/v1/admin/summary'){
    assert.equal(req.headers().authorization,'Bearer '+'A'.repeat(43));
    return route.fulfill({status:200,headers,body:JSON.stringify({at:'2026-10-22T19:00:00Z',active:3,visitors24h:9,
      registered:4,playerRecords:12,dailyScores:8,purchases24h:2,revenueCents24h:598,
      sources:[{source:'x',n:4}],orders:[{sku:'marseille1',n:2}]})});
  }
  if(path==='/api/v1/account/logout'){
    logout=true;return route.fulfill({status:200,headers,body:'{"ok":true}'});
  }
  if(path==='/api/v1/auth/email/start'){
    emailStart=JSON.parse(req.postData());
    return route.fulfill({status:200,headers,body:'{"message":"Lien envoyé"}'});
  }
  return route.fulfill({status:404,headers,body:'{"error":"not_found"}'});
});
const ticket='T'.repeat(43);
await page.goto('http://127.0.0.1:4192/cockpit.html#auth_ticket='+ticket,{waitUntil:'domcontentloaded'});
await page.locator('#app').waitFor({state:'visible',timeout:15000});
assert.equal(await page.locator('#active').textContent(),'3');
assert.equal(await page.locator('#revenue').textContent(),'5,98 €');
assert.equal(await page.evaluate(()=>localStorage.getItem('convergence_admin_token')),'A'.repeat(43));
assert.equal(await page.evaluate(()=>localStorage.getItem('convergence_challenge_token')),'P'.repeat(43));
await page.locator('#logout').click();
assert.equal(logout,true);
await page.locator('#auth').waitFor({state:'visible'});
assert.equal(await page.evaluate(()=>localStorage.getItem('convergence_admin_token')),null);
assert.equal(await page.evaluate(()=>localStorage.getItem('convergence_challenge_token')),'P'.repeat(43));
assert.equal(await page.locator('#signin-email').isVisible(),true);
await page.locator('#admin-email').fill('admin@example.test');
await page.locator('#signin-email').click();
assert.equal(emailStart?.destination,'cockpit');
assert.equal(emailStart?.email,'admin@example.test');
assert.equal(errors.length,0,JSON.stringify(errors));
console.log(JSON.stringify({cockpitEmail:true,adminSessionIsolated:true,renderedCounters:true,errors},null,2));
await browser.close();

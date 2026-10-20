import test from 'node:test';
import assert from 'node:assert/strict';
import {verifiedStripeCheckoutUrl} from '../src/stripeCheckoutUrl.mjs';
test('production Stripe Payment Links and Stripe Checkout are both accepted',()=>{
 assert.equal(verifiedStripeCheckoutUrl('https://buy.stripe.com/00weV65xa5OSbW94wbc7u0I?client_reference_id=abc'),
  'https://buy.stripe.com/00weV65xa5OSbW94wbc7u0I?client_reference_id=abc');
 assert.equal(verifiedStripeCheckoutUrl('https://checkout.stripe.com/c/pay/cs_live_test'),'https://checkout.stripe.com/c/pay/cs_live_test');
});
test('checkout accepts neither domains impersonating Stripe nor insecure links',()=>{
 for(const x of ['https://buy.stripe.com.evil.org/abc','http://buy.stripe.com/abc',
    'https://buy.stripe.com@evil.org/abc','javascript:alert(1)','https://evil.org',
    'https://stripes.com','https://buy.stripe.com:80/a',null,'']){
  assert.equal(verifiedStripeCheckoutUrl(x),null,x);
 }
});
test('obsolete crowd personalization checkout link is absent',async()=>{
 const {readFile}=await import('node:fs/promises');
 const source=await readFile(new URL('../src/challengeHub.js',import.meta.url),'utf8');
 assert.equal(source.includes('PERSONNALISER MA FOULE'),false);
 assert.equal(source.includes("this.game.ui.showShop()"),false);
});

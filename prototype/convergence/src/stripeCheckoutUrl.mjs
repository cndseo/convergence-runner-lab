// Whitelist exact official Stripe checkout hosts; reject lookalike links.
export function verifiedStripeCheckoutUrl(raw) {
  if(typeof raw!=='string')return null;
  try {
    const url=new URL(raw);
    if(url.protocol!=='https:' || url.port || url.username || url.password ||
      !['checkout.stripe.com','buy.stripe.com'].includes(url.hostname))return null;
    return url.href;
  }catch {return null;}
}

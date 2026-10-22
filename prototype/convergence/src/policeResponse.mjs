import {crowdDensity} from './humanDensity.mjs';

// Fixed visual budgets. No change to TV maths, damage, XP or tactical enemy health.
export function policeResponse(tacticalCount, shields=0) {
 const visible = crowdDensity(tacticalCount,shields).total;
 const tier= visible>=220?3:visible>=120?2:visible>=70?1:0;
 return Object.freeze({
  visible,
  tier,
  motorcycles:[2,4,6,8][tier],
  crsPerFlank:[8,12,18,24][tier],
  streetMotorcycles:[3,4,5,6][tier]
 });
}

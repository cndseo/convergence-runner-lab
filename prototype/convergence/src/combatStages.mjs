// Pure presentation timeline; combat mathematics remain exclusively in tactics.mjs.
export const INTRO_SECONDS = 0.44;
export const CONTACT_SECONDS = 1.06;
export const RECOVER_SECONDS = 0.55;
export const clamp01 = value => Math.max(0, Math.min(1, value));
export function visualCombatPhase(elapsed, recovering=false) {
  if (recovering) return 'recover';
  if (elapsed < INTRO_SECONDS) return 'approach';
  if (elapsed < CONTACT_SECONDS) return 'contact';
  return 'pressure';
}
export function visualCombatWeight(elapsed, recovering=false, recoveryTime=0) {
  if(recovering) return 1 - clamp01(recoveryTime / RECOVER_SECONDS);
  if(elapsed < INTRO_SECONDS) return clamp01(elapsed / INTRO_SECONDS);
  if(elapsed < CONTACT_SECONDS) return 1;
  return .78;
}

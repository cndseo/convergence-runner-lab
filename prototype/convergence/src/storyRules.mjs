// Finite campaign structure and deterministic story animation helpers.
// Pure math: level solver and casualty model remain independent.
export const FINAL_CAMPAIGN_LEVEL = 12;
export const INTRO_AUDIO_SECONDS = 3.733;
export const INTRO_SPEECH_DELAY = .6;
export const INTRO_ESCAPE_SECONDS = 3.35;
export const FINAL_CATCH_RADIUS = 1.75;

export function introPhase(time, speechSeconds = INTRO_AUDIO_SECONDS) {
  const turnAt = INTRO_SPEECH_DELAY + speechSeconds + .28;
  if (time < turnAt) return {phase:'speaking',progress:0,turnAt};
  const progress = Math.min(1,Math.max(0,(time-turnAt)/INTRO_ESCAPE_SECONDS));
  return {phase:progress<1?'running':'sheltered',progress,turnAt};
}
export function easeOut(t) {
  const n=Math.max(0,Math.min(1,t));
  return 1-(1-n)**2;
}
export function canCatchTarget({level,finalLineDefeated,playerProgress,targetProgress,playerX,targetX}) {
  return level===FINAL_CAMPAIGN_LEVEL && !!finalLineDefeated
    && playerProgress>=targetProgress-1.3
    && Math.abs(playerX-targetX)<FINAL_CATCH_RADIUS;
}

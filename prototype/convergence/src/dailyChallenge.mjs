import { generateTacticalLevel, replayPlan } from './tactics.mjs';

export const DAILY_START_COUNT = 5;
export const DAILY_STRENGTH = 1;
export const DAILY_LEVEL = 1;
export const DAILY_PATH_LENGTH = 10;

export function utcChallengeDate(now = new Date()) {
  const date = now instanceof Date ? now : new Date(now);
  if (Number.isNaN(date.valueOf())) throw new RangeError('Invalid date');
  return date.toISOString().slice(0, 10);
}

export function validChallengeDate(day) {
  if (typeof day !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  const parsed = new Date(day + 'T00:00:00.000Z');
  return Number.isFinite(parsed.valueOf()) && parsed.toISOString().startsWith(day);
}

// FNV-1a, fixed 32-bit arithmetic and UTF-8 digits only.
// A UTC date produces exactly the same ten portals everywhere.
export function dailyChallengeSeed(day) {
  if (!validChallengeDate(day)) throw new RangeError('Invalid UTC challenge date');
  let hash = 2166136261;
  for (const character of 'CONVERGENCE-DAILY-1-' + day) {
    hash = Math.imul(hash ^ character.charCodeAt(0), 16777619);
  }
  return (hash >>> 0) || 1;
}
export function createDailyPlan(day) {
  return generateTacticalLevel({
    level: DAILY_LEVEL, seed: dailyChallengeSeed(day), exactTV:true,
    startCount: DAILY_START_COUNT, strength: DAILY_STRENGTH
  });
}
export function validateDailyPath(path) {
  return Array.isArray(path) && path.length === DAILY_PATH_LENGTH
    && path.every(side => side === 'left' || side === 'right');
}
export function computeDailyScore(day, path) {
  if (!validateDailyPath(path)) throw new TypeError('Daily route must contain ten left/right decisions');
  const plan = createDailyPlan(day);
  const result = replayPlan(plan, path);
  return {day, seed:plan.seed, survivors:result.count, shields:result.shields,
    won:result.count>0, path:path.slice(), totalChoices:plan.events.filter(e=>e.type==='choice').length,
    winningRoutes:plan.proof.winningPaths};
}
export function formatChallengeShare(day, survivors, url) {
  if (!validChallengeDate(day) || !Number.isSafeInteger(survivors) || survivors < 0 || survivors > 72)
    throw new TypeError('Invalid score');
  const shareUrl = new URL(url);
  shareUrl.searchParams.set('daily',day);
  return 'CONVERGENCE · Défi du '+day+'\n'+survivors+
    ' manifestants survivants sur 72\nTu peux faire mieux ?\n'+shareUrl.toString();
}

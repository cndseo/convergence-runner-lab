// Pure, deterministic rules shared by the level solver and the live game.
export const MAX_CROWD = 72;
export const MAX_SHIELDS = 48;
export function initialState(count = 5) {
  return { count: Math.max(1, Math.min(MAX_CROWD, Math.floor(count))), shields: 0 };
}
export function sufferLoss(state, loss) {
  const next = { ...state };
  const damage = Math.max(0, Math.ceil(loss));
  const absorbed = Math.min(next.shields, damage);
  next.shields -= absorbed;
  next.count = Math.max(0, next.count - damage + absorbed);
  return next;
}
export function applyChoice(state, choice) {
  if (state.count <= 0) return { ...state };
  let next = { ...state };
  switch (choice.op) {
    case '+': next.count += choice.value; break;
    case '-': next.count -= choice.value; break;
    case '*': next.count *= choice.value; break;
    case '/': next.count = Math.floor(next.count / Math.max(1, choice.value)); break;
    case '%': next.count = Math.floor(next.count * (1 + choice.value / 100)); break;
    case 'shield': next.shields += choice.value; break;
    case 'conditional': {
      const ok = choice.condition === 'atMost' ? next.count <= choice.threshold
        : choice.condition === 'shield' ? next.shields >= choice.threshold
        : next.count >= choice.threshold;
      next.count += ok ? choice.value : (choice.elseValue || 0);
      break;
    }
    case 'damage': return sufferLoss(next, choice.percent ? next.count * choice.value / 100 : choice.value);
    default: throw new Error('Unknown operation: ' + choice.op);
  }
  next.count = Math.max(0, Math.min(MAX_CROWD, Math.floor(next.count)));
  next.shields = Math.max(0, Math.min(MAX_SHIELDS, Math.floor(next.shields)));
  return next;
}
export function applyCombat(state, health, strength = 1) {
  if (state.count <= 0) return { ...state };
  // The last opponent does not retaliate. Matches Game.updateFight exactly.
  return sufferLoss(state, Math.max(0, Math.ceil(health / Math.max(1, strength)) - 1));
}
export function gateLabel(c) {
  const sign = n => n >= 0 ? '+' + n : String(n);
  if (c.op === 'shield') return { title: '+' + c.value, caption: 'PROTECTIONS', tone: 'gold' };
  if (c.op === 'conditional') return {
    title: sign(c.value),
    caption: 'SI ' + (c.condition === 'atMost' ? 'FOULE ≤ ' : c.condition === 'shield' ? 'PROT. ≥ ' : 'FOULE ≥ ') + c.threshold,
    detail: 'SINON ' + sign(c.elseValue || 0), tone: 'purple'
  };
  if (c.op === 'damage') return {
    title: '−' + c.value + (c.percent ? '%' : ''),
    caption: { barrier: 'BARRAGE', van: 'FOURGON', bravm: 'BRAV-M', debris: 'OBSTACLES' }[c.kind] || 'PERTES',
    detail: 'PROTECTIONS UTILISÉES', tone: 'red'
  };
  return {
    title: c.op === '%' ? sign(c.value) + '%' : (c.op === '*' ? '×' : c.op === '/' ? '÷' : c.op === '-' ? '−' : '+') + c.value,
    caption: c.op === '*' ? 'MOBILISATION' : c.op === '/' ? 'DISPERSION' : c.op === '%' ? 'RALLIEMENT' : c.op === '+' ? 'RENFORTS' : 'DÉPARTS',
    tone: ['-', '/'].includes(c.op) || c.value < 0 ? 'red' : 'blue'
  };
}
function random(seed) {
  let a = seed >>> 0;
  return () => { a += 0x6D2B79F5; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function solvePlan(plan) {
  let states = [{ ...initialState(plan.startCount), path: [] }];
  for (const event of plan.events) {
    if (event.type === 'enemy') {
      states = states.map(s => ({ ...applyCombat(s, event.count, plan.strength), path: s.path }));
    } else {
      states = states.flatMap(s => ['left', 'right'].map(side => ({
        ...applyChoice(s, event[side]), path: [...s.path, side]
      })));
    }
  }
  return states.map(s => ({
    ...s,
    capacity: s.count > 0 ? (s.count + s.shields) * plan.strength : 0,
    survivors: plan.bossHealth ? applyCombat(s, plan.bossHealth, plan.strength).count : s.count
  }));
}
export function replayPlan(plan, path) {
  let state = initialState(plan.startCount), i = 0;
  for (const e of plan.events) state = e.type === 'enemy'
    ? applyCombat(state, e.count, plan.strength) : applyChoice(state, e[path[i++]]);
  return applyCombat(state, plan.bossHealth, plan.strength);
}
export function greedyPath(plan) {
  let state = initialState(plan.startCount), path = [];
  for (const e of plan.events) {
    if (e.type === 'enemy') { state = applyCombat(state, e.count, plan.strength); continue; }
    const l = applyChoice(state, e.left), r = applyChoice(state, e.right);
    const side = l.count >= r.count ? 'left' : 'right';
    state = side === 'left' ? l : r;
    path.push(side);
  }
  return { ...state, path, capacity: state.count > 0 ? (state.count + state.shields) * plan.strength : 0 };
}
export function generateTacticalLevel({ level = 1, seed = 1, startCount = 5, strength = 1 } = {}) {
  level = Math.max(1, Math.floor(level));
  strength = Math.max(1, Math.floor(strength));
  const start = initialState(startCount).count;
  const rand = random(seed + level * 7919 + start * 31);
  let fallback;
  for (let attempt = 0; attempt < 96; attempt++) {
    const n = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));
    const damage = (kind, value, percent = false) => ({ op: 'damage', kind, value, percent });
    // Linked choices: protection is an investment; smaller groups can qualify
    // for later conditional recruitment. No "always take the larger number".
    const pairs = [
      [{ op: '+', value: 10 }, { op: '*', value: 2 }],
      [{ op: 'shield', value: n(10, 18) }, { op: '+', value: 5 }],
      [damage('barrier', n(10, 17)), damage('bravm', n(28, 42), true)],
      [{ op: '/', value: 2 }, { op: '-', value: n(3, 8) }],
      [{ op: 'conditional', condition: 'atMost', threshold: n(10, 17), value: n(23, 32), elseValue: -5 }, { op: '%', value: 40 }],
      [{ op: '*', value: 2 }, { op: 'shield', value: n(14, 23) }],
      [damage('van', n(15, 24)), damage('debris', n(35, 50), true)],
      [{ op: '%', value: 50 }, { op: 'conditional', condition: 'shield', threshold: 8, value: n(22, 32), elseValue: -4 }],
      [{ op: '+', value: 10 }, { op: 'shield', value: n(11, 19) }],
      [{ op: '+', value: 5 }, { op: '%', value: 25 }]
    ];
    const events = [];
    pairs.forEach((pair, i) => {
      if (rand() < 0.5) pair.reverse();
      events.push({ type: 'choice', z: 14 + i * 16, left: pair[0], right: pair[1] });
      if (i === 4 || i === 7) events.push({
        type: 'enemy', z: 22 + i * 16, kind: i === 4 ? 'crs' : 'bac',
        count: n(5, 9) + Math.min(8, Math.floor(level / 3))
      });
    });
    const plan = { version: 2, seed, level, startCount: start, strength, events, trackLength: 180, bossHealth: 0 };
    const paths = solvePlan(plan);
    const alive = paths.filter(p => p.count > 0).sort((a, b) => a.capacity - b.capacity);
    if (!alive.length) continue;
    const greedy = greedyPath(plan);
    const max = alive.at(-1).capacity;
    const quantile = Math.min(0.93, 0.77 + level * 0.012);
    const target = alive[Math.floor((alive.length - 1) * quantile)].capacity;
    plan.bossHealth = Math.max(target, greedy.capacity + 1);
    if (plan.bossHealth > max) plan.bossHealth = target;
    const winners = alive.filter(p => p.capacity >= plan.bossHealth);
    plan.proof = {
      winningPaths: winners.length, totalPaths: paths.length,
      winningPath: winners.at(-1).path,
      greedyWins: greedy.capacity >= plan.bossHealth,
      minSurvivors: Math.min(...winners.map(p => applyCombat(p, plan.bossHealth, strength).count))
    };
    fallback = plan;
    if (!plan.proof.greedyWins && winners.length / paths.length <= 0.30 && winners.length >= 2) return plan;
  }
  if (!fallback) throw new Error('Unable to certify a playable level');
  return fallback;
}

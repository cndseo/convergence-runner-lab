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
export function applyChoice(state, choice, legacyBravm=false) {
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
    case 'damage': {
      // BRAV-M motorcycle strike removes up to three protesters once on contact.
      // A shield does not turn the physical collision into a second combat tick.
      if(choice.kind==='bravm'&&!legacyBravm)return {...next,count:Math.max(0,next.count-3)};
      return sufferLoss(next, choice.percent ? next.count * choice.value / 100 : choice.value);
    }
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
    title: '−' + (c.kind==='bravm'?3:c.value) + (c.kind==='bravm'?'':c.percent ? '%' : ''),
    caption: { barrier: 'BARRAGE', van: 'FOURGON', bravm: 'BRAV-M', debris: 'OBSTACLES' }[c.kind] || 'PERTES',
    detail: c.kind==='bravm'?'CHARGE : 3 MANIFESTANTS':'PROTECTIONS UTILISÉES', tone: 'red'
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
export function solvePlan(plan, legacyBravm=false) {
  let states = [{ ...initialState(plan.startCount), path: [] }];
  for (const event of plan.events) {
    if (event.type === 'enemy') {
      states = states.map(s => ({ ...applyCombat(s, event.count, plan.strength), path: s.path }));
    } else {
      states = states.flatMap(s => ['left', 'right'].map(side => ({
        ...applyChoice(s, event[side],legacyBravm), path: [...s.path, side]
      })));
    }
  }
  return states.map(s => ({
    ...s,
    capacity: s.count > 0 ? (s.count + s.shields) * plan.strength : 0,
    survivors: plan.bossHealth ? applyCombat(s, plan.bossHealth, plan.strength).count : s.count
  }));
}
export function replayPlan(plan, path, legacyBravm=false) {
  let state = initialState(plan.startCount), i = 0;
  for (const e of plan.events) state = e.type === 'enemy'
    ? applyCombat(state, e.count, plan.strength) : applyChoice(state, e[path[i++]],legacyBravm);
  return applyCombat(state, plan.bossHealth, plan.strength);
}
// Difficulty is measured against all 2^10 legal routes, not just routes
// that survive the intermediate police lines. Never publish a near-impossible
// puzzle merely because it has one certified winning path.
export function difficultyTargets(level) {
  if (level <= 1) return { min: 0.17, ideal: 0.21, max: 0.27 };
  if (level <= 3) return { min: 0.14, ideal: 0.19, max: 0.25 };
  if (level <= 9) return { min: 0.11, ideal: 0.16, max: 0.22 };
  return { min: 0.08, ideal: 0.13, max: 0.19 };
}
export function greedyPath(plan, legacyBravm=false) {
  let state = initialState(plan.startCount), path = [];
  for (const e of plan.events) {
    if (e.type === 'enemy') { state = applyCombat(state, e.count, plan.strength); continue; }
    const l = applyChoice(state, e.left,legacyBravm), r = applyChoice(state, e.right,legacyBravm);
    const side = l.count >= r.count ? 'left' : 'right';
    state = side === 'left' ? l : r;
    path.push(side);
  }
  return { ...state, path, capacity: state.count > 0 ? (state.count + state.shields) * plan.strength : 0 };
}
// Retain the legacy level layout, rolls and CRS/BAC roster. After a playable
// seed is selected, rebalance only the boss for the fixed -3 BRAV-M collision.
function finalizeBravmPlan(plan) {
  for(const event of plan.events)if(event.type==='choice')
    for(const gate of [event.left,event.right])
      if(gate.kind==='bravm'){gate.value=3;gate.percent=false;}
  const paths=solvePlan(plan);
  const alive=paths.filter(s=>s.count>0).sort((a,b)=>a.capacity-b.capacity);
  if(!alive.length)return null;
  const greedy=greedyPath(plan),bounds=difficultyTargets(plan.level);
  let choice=null,lower=0;
  for(const health of [...new Set(alive.map(p=>p.capacity))]){
    while(lower<alive.length&&alive[lower].capacity<health)lower++;
    const winners=alive.length-lower,rate=winners/paths.length;
    if(health<=greedy.capacity||winners<2||rate>=.32)continue;
    const score=Math.abs(rate-bounds.ideal)+5*
      (Math.max(0,bounds.min-rate)+Math.max(0,rate-bounds.max));
    if(!choice||score<choice.score||(score===choice.score&&health>choice.health))
      choice={health,rate,score,lower};
  }
  if(!choice)return null;
  plan.bossHealth=choice.health;
  const winners=alive.slice(choice.lower),witness=winners.at(-1);
  const survived=replayPlan(plan,witness.path).count;
  if(survived<=0||replayPlan(plan,greedy.path).count>0)return null;
  plan.proof={
    winningPaths:winners.length,totalPaths:paths.length,
    winningPath:witness.path,greedyWins:false,
    minSurvivors:Math.min(...winners.map(p=>applyCombat(p,plan.bossHealth,plan.strength).count)),
    witnessSurvivors:survived,winningRate:choice.rate,difficulty:bounds
  };
  return plan;
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
    // Preserve the historical random draw so unrelated CRS/BAC groups,
    // daily seeds and Marseille cinematics remain unchanged by this balance fix.
    const bravmDamage = () => damage('bravm',n(28,42),true);
    // Linked choices: protection is an investment; smaller groups can qualify
    // for later conditional recruitment. No "always take the larger number".
    const pairs = [
      [{ op: '+', value: 10 }, { op: '*', value: 2 }],
      [{ op: 'shield', value: n(10, 18) }, { op: '+', value: 5 }],
      [damage('barrier', n(10, 17)), bravmDamage()],
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
    const paths = solvePlan(plan,true);
    const alive = paths.filter(p => p.count > 0).sort((a, b) => a.capacity - b.capacity);
    if (!alive.length) continue;
    const greedy = greedyPath(plan,true);
    const bounds = difficultyTargets(level);
    // All 1024 routes matter. Only the boss's HP may be adjusted;
    // enemy line strength, risky portals and the ten real choices stay intact.
    let choice = null, lower = 0;
    for (const health of [...new Set(alive.map(p => p.capacity))]) {
      while (lower < alive.length && alive[lower].capacity < health) lower++;
      const winners = alive.length - lower, rate = winners / paths.length;
      if (health <= greedy.capacity || winners < 2 || rate >= 0.32) continue;
      const shortfall = Math.max(0, bounds.min - rate);
      const excess = Math.max(0, rate - bounds.max);
      const score = Math.abs(rate - bounds.ideal) + 5 * (shortfall + excess);
      if (!choice || score < choice.score ||
          (score === choice.score && health > choice.health)) {
        choice = { health, lower, winners, rate, score };
      }
    }
    if (!choice) continue;
    plan.bossHealth = choice.health;
    const winners = alive.slice(choice.lower);
    // Proof must be an actual surviving route, not just a nonzero capacity.
    const witness = winners.at(-1);
    const survivors = replayPlan(plan, witness.path,true).count;
    if (survivors <= 0) continue;
    plan.proof = {
      winningPaths: winners.length, totalPaths: paths.length,
      winningPath: witness.path,
      greedyWins: replayPlan(plan, greedy.path,true).count > 0,
      minSurvivors: Math.min(...winners.map(p => applyCombat(p, plan.bossHealth, strength).count)),
      witnessSurvivors: survivors,
      winningRate: choice.rate,
      difficulty: bounds
    };
    if (plan.proof.greedyWins) continue;
    const adjusted=finalizeBravmPlan(plan);
    if(!adjusted)continue;
    if (!fallback || choice.score < fallback.score) fallback = {plan:adjusted, score: choice.score};
    if (adjusted.proof.winningRate >= bounds.min && adjusted.proof.winningRate <= bounds.max)
      return adjusted;
  }
  if (!fallback) throw new Error('Unable to certify a playable level');
  // The closest verified alternative is still winning and defeats greedy play.
  return fallback.plan;
}

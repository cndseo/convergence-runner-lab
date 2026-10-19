// Short, strictly factual feedback derived from the SAME states as the
// certified tactical solver. No extra damage, healing, preview or route hint.
export function explainGateChoice(choice, before, after) {
  const population = after.count - before.count;
  const protection = after.shields - before.shields;
  const pieces = [];
  let tone = 'neutral';
  if (population > 0) {
    pieces.push(`+${population} manifestant${population > 1 ? 's' : ''}`);
    tone = 'positive';
  } else if (population < 0) {
    pieces.push(`${population} manifestants`);
    tone = 'warning';
  }
  if (protection > 0) {
    pieces.push(`+${protection} protections`);
    tone = 'positive';
  } else if (protection < 0) {
    pieces.push(`${protection} protections utilisées`);
    if (population <= 0) tone = 'warning';
  }
  let reason;
  if (choice.op === 'conditional') {
    const met = choice.condition === 'atMost'
      ? before.count <= choice.threshold
      : choice.condition === 'shield'
        ? before.shields >= choice.threshold
        : before.count >= choice.threshold;
    reason = met ? 'Condition remplie' : 'Condition non remplie';
  } else if (choice.op === 'shield') {
    reason = 'Les protections absorbent les pertes suivantes';
  } else if (choice.op === 'damage') {
    reason = protection < 0 ? 'Les protections ont limité les pertes' : 'Barrage traversé';
  } else if (after.count === 72 && before.count < 72) {
    reason = 'Plafond de foule atteint : 72';
  } else if (choice.op === '/' || choice.op === '-') {
    reason = 'Une petite foule peut débloquer d’autres conditions';
  } else if (choice.op === '*') {
    reason = 'Mobilisation multipliée, limitée à 72';
  } else {
    reason = 'Chaque choix influence les rencontres suivantes';
  }
  if (!pieces.length) pieces.push('Effectif inchangé');
  return { title: pieces.join(' · '), detail: reason, tone };
}

export function evaluateResult({won, survivors, gateHistory = [], lossSource = 'unknown', level = 1}) {
  const remaining = Math.max(0, Math.floor(Number(survivors) || 0));
  const decisions = gateHistory.length;
  const best = Math.max(remaining, ...gateHistory.map(h => h.after?.count ?? 0), 0);
  const shieldsObtained = gateHistory.reduce((sum,h) => sum + Math.max(0,(h.after?.shields ?? 0) - (h.before?.shields ?? 0)),0);
  if (won) {
    // A performance medal, not a probability or proof of optimal play.
    const stars = remaining >= 35 ? 3 : remaining >= 15 ? 2 : 1;
    return {
      stars, title: ['','Front franchi','Bonne mobilisation','Mobilisation remarquable'][stars],
      detail: `${remaining} survivant${remaining>1?'s':''} · ${decisions} choix · ${shieldsObtained} protections recrutées`,
      tip: stars === 3 ? 'Essaie de conserver autant de monde à l’étape suivante.' :
        'Rejoue pour sauver davantage de manifestants et obtenir 3 étoiles.'
    };
  }
  let reason = 'La mobilisation s’est arrêtée.';
  if (lossSource === 'combat') {
    reason = 'La foule n’était plus assez nombreuse pour tenir face aux forces de l’ordre.';
  } else if (lossSource === 'gate') {
    reason = 'Le dernier portique a épuisé la foule.';
  } else if (lossSource === 'obstacle') {
    reason = 'L’obstacle a réduit la foule à zéro.';
  }
  const protectionTip = shieldsObtained === 0
    ? 'Les protections peuvent absorber les pertes aux barrages et pendant les combats.'
    : 'Économise tes protections avant les confrontations les plus difficiles.';
  return {
    stars: 0,
    title: `Étape ${level} · ${decisions}/10 portiques franchis`,
    detail: `${reason} Maximum atteint : ${best} manifestants.`,
    tip: lossSource === 'gate'
      ? 'Un bonus immédiat n’est pas toujours le meilleur choix pour la suite.'
      : protectionTip
  };
}

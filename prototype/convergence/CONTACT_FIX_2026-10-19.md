# CONVERGENCE — correctif d'orientation et de contact (19 octobre 2026)

## Constats reproduits à partir de la capture utilisateur (18 h 29)

L'animation v3 faisait reculer visuellement les manifestants de +2,1 m en Z pendant l'affrontement, inversait de 180° les policiers, et conservait la formation de marche (qui peut s'étirer sur plusieurs mètres) lors des combats. Résultat : groupes disjoints, CRS orientés du mauvais côté, chute semblant glisser sur une route vide.

## Correctifs

- `src/level.js` : suppression des rotations Y=PI ajoutées sur les CRS, BAC et BRAV-M ; leur équipement de face (bouclier, visière, bandeau) est déjà orienté vers le +Z local, soit les manifestants.
- `src/game.js` : suppression complète du décalage de groupe `fightFormationOffset` ; retour de la caméra à un angle léger, sans éloigner les personnages de leur affrontement.
- `src/crowd.js` : `getCombatFormationPosition(index)` recompose temporairement les rangs **uniquement pendant un combat** devant la ligne adverse (écart de base ~0,7 m, puis plusieurs rangs derrière). Le nombre de rangs n'avance plus la première ligne à travers les CRS. L'affichage revient en douceur à la formation d'origine après le combat.
- `src/crowd.js` : chute plus rapide vers le sol (~0,52 s), dérive de position réduite (~0,13 m), corps momentanément au sol avant retrait (2,15 s en tout).
- Aucun changement de modèles/assets P02, d'animations de base, de dégâts LBD, du générateur `tactics.mjs`, des CRS tactiques ou de la durée du son.
- `src/game.js` : les collisions restent régies par `trackZ`, et non la position graphique des silhouettes.

## Tests reproductibles

- `npm test` : 11 tests réussis, dont 800 niveaux et leurs preuves gagnantes.
- `npm run build` : compilé.
- `node tools/qa-front-contact.mjs` : 5 scénarios en Chrome mobile (5, 19 et 50 manifestants ; 3 manifestants avec 16 protections face à la seconde unité ; front final). Première ligne des CRS orientée vers les joueurs (`forward.z > 0.8`). Distance entre premières lignes ~0,5–0,8 m après 1,75 seconde, proche sans traversée. Captures d'écran dans `C:\CITYOS\convergence-qa-20261019\front-contact-fix\`.
- `node tools/qa-crs-visual.mjs` : 6 -> 3 -> 1 -> 0 agents, même modèle équipé pendant la chute, nettoyage après 2,15 secondes.
- `node tools/qa-live-math.mjs` : 5 parcours réels, dont niveaux 1, 2, 10, 30 et parcours perdant, tous réussis.
- `node tools/qa-combat-voice.mjs` : lecture, pause/reprise, arrêt.
- `QA_REALISTIC=1 node tools/smoke-mobile.mjs` : tests tactiles et de deux résolutions mobiles, victoire/défaite, pas d'erreurs.
- Vérification physique iPhone : **reste à effectuer par l'utilisateur**.

## Gouvernance

Branche locale `fix/convergence-contact-facing-20261019`. Ne pas modifier le travail parallèle dans `prototype/convergence/ASSET_CATALOG.md` ; ne pas publier la version principale GitHub Pages avant validation iPhone.

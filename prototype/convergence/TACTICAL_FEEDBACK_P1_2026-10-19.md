# CONVERGENCE — Feedback tactique & immersion sonore P1 (19/10/2026)

## Objectif
Donner au joueur des repères tactiques et une progression visible sans changer la difficulté mathématiquement certifiée, les positions FDO, la géométrie, les costumes, la caméra, P02 ou les animations corrigées.

## Fonctions codées

1. Retour tactique de 2 secondes **après** chaque portique : différences exactes de manifestants et de protections, conditions remplies/non remplies, plafond de 72, protections consommées au barrage. Aucun conseil de trajet gagnant ni valeur inventée.
2. Bilan de victoire : 1–3 étoiles **cosmétiques** (survivants 1–14 = 1 étoile, 15–34 = 2, 35+ = 3), nombre de survivants, choix et protections effectivement obtenues. Pas de modification des pièces gagnées, des upgrades ni du passage de niveau.
3. Bilan de défaite : cause selon le point réel de l'échec (affrontement, portique, obstacle, inconnu), nombre de portiques franchis, maximum de foule atteint et indication de tactique pour la partie suivante. Ne montre pas le chemin gagnant exact.
4. Petit son synthétisé et latéralisé lors de l'absorption d'un coup par une protection pendant un combat. Volume réduit lorsque l'enregistrement utilisateur « Pourquoi tu me frappe » joue. Les impacts ordinaires sont également réduits en présence de la voix ; pas de changement de la bande enregistrée.
5. Nettoyage des confettis de victoire lorsqu'on ouvre un autre écran (évite de laisser les confettis sur l'écran de défaite après une nouvelle partie).
6. Style adapté aux écrans portrait 320x700 et 390x844 : messages sur le bas de l'écran, au-dessus des gestes tactiles, sans recouvrir les portiques.

## Vérifications

- `npm test` : **16/16**, dont 5 nouveaux tests purs sur le feedback. Audit ancien des 800 niveaux et preuve de victoire conservés.
- `npm run build` : réussi (Vite, 42 modules).
- `node tools/qa-tactical-feedback.mjs` : 6 scénarios 2 résolutions, portique, victoire et défaite, contrôles géométrie UI et absence d'erreurs.
- `node tools/qa-live-math.mjs` : 5 parties complètes en Chrome, niveaux 1/2/10/30 gagnés, un parcours perdant, sans modification de résultats.
- `node tools/qa-front-contact.mjs` : 5 cas, distances première ligne ~0,5–0,8 m, FDO face aux manifestants : aucune régression.
- `node tools/qa-combat-voice.mjs` : voix, pause/reprise, durée et arrêt vérifiés.
- `QA_REALISTIC=1 node tools/smoke-mobile.mjs` : tactile, pause, deux résolutions, victoire/défaite, aucune erreur. Capture d'écrans dans `C:\CITYOS\convergence-qa-20261019\tactical-feedback-p1\`.

## Portée et précautions

- Branche locale `feature/convergence-tactical-feedback-p1`, basée sur le commit `ffe5055`.
- Ne pas toucher `prototype/convergence/ASSET_CATALOG.md` modifié par un autre agent, et ne pas pousser vers GitHub Pages/main sans validation.
- Prévisualisation temporaire GMK : https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/
- Écoute de la balance audio sur un iPhone physique encore à valider par l'utilisateur.
- **Les étoiles ne sont pas une preuve d'optimalité**, seulement un score de survie.

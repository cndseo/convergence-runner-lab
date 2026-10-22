# CONVERGENCE — affrontements animés V3 (19 octobre 2026)

## Architecture et préservation
- Base locale : `19d261b` (ambiance sonore) sur GMK K12 ; correctifs sur `feature/convergence-combat-choreography`.
- Three.js conservé, aucun nouveau framework 3D ; les animations originales Walk/Idle et le gilet P02 approuvé restent intacts.
- `src/combatStages.mjs` définit les quatre phases indépendamment du moteur : approche (0,44 s), contact (jusqu'à 1,06 s), pression, récupération (0,55 s).
- `src/combatChoreography.js` applique une couche visuelle légère après la mise à jour des mixers : inclinaisons, mouvements de bras, micro-déplacements, recul aux impacts, boucliers CRS ; maximum huit acteurs proches par camp. Les personnages lointains gardent leur atlas.
- Les combattants proches sont légèrement espacés ; caméra plus proche et plus basse pendant les combats. Les grands panneaux de choix proches sont masqués visuellement pendant le combat, sans désactiver leurs collisions.
- Aucun changement au calcul tactique de `tactics.mjs` ni aux solutions vérifiées ; durée des échanges augmentée à 0,20 seconde pour la lisibilité et temps d'approche visuel de 0,44 seconde.
- Les animations de policiers sont désormais gelées pendant une pause. Les animations temporaires sont nettoyées à la fin de l'affrontement ou au redémarrage.

## Tests vérifiés
- `npm test` : 4 tests réussis, y compris le test du minutage des phases et 800 niveaux générés.
- `npm run build` : succès (avertissement de taille des bundles non bloquant).
- `node tools/qa-combat-choreography.mjs` : captures approche/contact/pression/récupération en 390×844, aucun échec HTTP ni erreur JavaScript. P02 validé toujours présent.
- Capture et charge active à 50 manifestants : 12 rigs + 38 impostors ; environ 31 images/s, 470 draw calls dans Chrome headless sur GMK.
- `QA_REALISTIC=1 node tools/smoke-mobile.mjs` : succès 320×700 et 390×844 avec 5 puis 50 personnages, interactions, victoire et défaite ; aucune erreur.
- Rapports/captures dans `C:\CITYOS\convergence-qa-20261019\combat-choreography\` et `...\choreography-regression\`.
- iPhone physique : pas encore validé.

## Limites / suites
- Ce sont des poses additives procédurales, pas de véritables clips de mocap (motion capture). Prochaine étape possible : retargeting de 3-5 animations CC0 pour les personnages proches.
- Le test de 50 personnages est un test de navigateur mobile émulé, pas une mesure sur iPhone réel.
- `ASSET_CATALOG.md` est un fichier modifié avant intervention ; il est volontairement exclu du commit.
- Le commit contenant les audios ne doit pas être fusionné/publié ouvertement sans vérification des droits des enregistrements. Privilégier une branche GitHub distincte contenant exclusivement les animations si une PR distante est nécessaire.

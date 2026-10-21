# CONVERGENCE — compteur cohérent et densification CRS/BRAV-M

Date : 21 octobre 2026. Fonctionnalité expérimentale sur branche dédiée.

## Pourquoi
L’ancien HUD affichait l’effectif tactique (ex. 30) tandis que le moteur représentait davantage de silhouettes (ex. 139). La présentation ne correspondait pas à la foule visible.

## Implémentation
- Le compteur principal reprend désormais `CrowdManager.getDisplayedCount()`, identique au total de personnes représentées par les personnages animés et les instances GPU.
- Le nombre d'unités tactiques reste inchangé et explicite dans le titre/nom accessible du compteur. Il gouverne toujours les combats, les sauvegardes et les achats.
- Paliers des renforts visuels selon l'effectif représenté : 2/4/6/8 motos BRAV-M, 8/12/18/24 CRS de réserve par flanc.
- Les unités de réserve sont rendues par le système d'instances existant, sans changer les collisions ni les dégâts.
- Les motos supplémentaires lors d'une charge BRAV-M sont des renforts visuels, leur arrivée est synchronisée ; une seule résolution de dégâts (-3) reste appliquée.
- Les panneaux TV sont masqués lors de la charge BRAV-M pour donner de la visibilité à l'affrontement.

## Séparation indispensable
**Participants représentés** : nombre des modèles/instances constituant visuellement le cortège (139 dans le cas 30 unités + 6 protections).
**Unités tactiques** : effectif soumis aux opérations du jeu (30 dans cet exemple). Les deux nombres ne sont pas interchangeables : une silhouette complémentaire n'est pas un nouveau droit à tirer, subir des dégâts, gagner de l'XP ou augmenter les achats.
Les titres des groupes CRS indiquent toujours l'effectif effectivement engagé au contact, pas tous les renforts de décor.

## Contrôles
- 91 tests unitaires réussis / 0 échec ; compilation Vite OK.
- Navigateur Chrome 390x844 : 20 portraits PNG conservés ; une foule de 30 unités tactiques / 6 protections donne 139 représentations, visibles sur le HUD.
- Attaque BRAV-M avec six motos et perte confirmée : 30 -> 27, une seule résolution.
- Douze quartiers gagnés au parcours contrôlé, cinq pouvoirs valides ; sauvegardes et restauration valides, 312 silhouettes au maximum inchangées.
- Aucun 404 de ressource ni erreur JS durant les scénarios.
- À valider : FPS réels et température sur iPhone physique ; site public inchangé et aucune fusion sans validation.

## Sources
- `src/policeResponse.mjs` (paliers purement visuels).
- `src/streetPresence.js` (patrouilles GPU), `src/bravmGateCharge.js` (motos supplémentaires).
- `src/crowd.js` et `src/ui.js` (compteur de représentations).
- `tools/qa-crowd-police-scale.mjs`, `tests/policeResponse.test.mjs`.

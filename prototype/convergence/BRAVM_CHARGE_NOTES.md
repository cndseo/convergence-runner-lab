# CONVERGENCE — charge BRAV-M et 3 pertes au portique

## Base et isolation
- Départ : commit `3e74f75` (CRS, BAC et BRAV-M de référence).
- Branche : `fix/bravm-charge-three-losses`, worktree distinct `C:\CITYOS\convergence-bravm-impact`.
- Aucun changement sur les branches de travail d'Astra ou sur le site public.

## Changements livrés
- `arcadeGates.js` : les motos BRAV-M des portiques, auparavant tournées de 90 degrés, sont remplacées par deux pilotes orientés de face, avec les sprites WebP de référence et les motos 3D existantes conservées seulement en repli.
- `bravmGateCharge.js` : les deux motos quittent le portique après le choix, foncent vers le joueur pendant ~0,94 seconde, impact unique, trois chutes et une récupération de ~0,48 seconde. Aucune nouvelle collision ni perte pendant la cinématique. Pause/reprise et redémarrage sont pris en charge.
- `crowd.js` : les trois figurants perdus produisent des chutes vers le sol (au lieu de s'envoler arbitrairement).
- `tactics.mjs` : le portique affiche **−3** et retire exactement trois manifestants (ou tous s'il en reste moins). Pas d'absorption par les protections pour ce choc mécanique. Règle identique côté simulation et moteur ; une perte unique, jamais « −42 % + 3 ».
- Le générateur conserve le tirage historique pendant la sélection des configurations et recalcule la difficulté du boss selon la nouvelle règle ; validation obligatoire avant publication.
- Les autres portiques, les costumes, le son original, les renforts marseillais et les prix restent inchangés.

## QA
- `npm test` : 43 tests (règles, générateur, 800 scénarios et intégrations).
- `npm run build` : compilation réussie, avec avertissement historique de taille du bundle JS.
- `node tools/qa-bravm-gate.mjs` : Chrome 390×844 et 320×700 ; 2 motos face, chargement WebP, 14→11, 3 ragdolls, portique comptabilisé une fois, pause sans déplacement, puis reprise et nettoyage.
- Test Marseille 2D adapté pour relever le recul progressif des CRS aussi à 2,55 s (utile pour les fronts de 5 CRS) : deux formats validés.
- Autres contrôles de non-régression : `qa-marseille-audio.mjs`, `qa-marseille-regressions.mjs`, `qa-police-reference.mjs`, `qa-street-fx.mjs`.
- Prévisualisation HTTPS via tunnel temporaire du GMK ; test iPhone physique restant à confirmer.

**Limite visuelle :** les riders de référence sont des WebP 2D orientés vers la caméra, non des personnages 3D articulés à 360°. Les chutes des manifestants sont des ragdolls simplifiés ; un vrai dispositif d'animation sur squelette serait une évolution distincte.

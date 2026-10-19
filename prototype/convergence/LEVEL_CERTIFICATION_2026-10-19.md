# CONVERGENCE — niveaux mathématiquement gagnables et difficulté contrôlée (19 octobre 2026)

## Problème identifié et corrigé
L'ancien générateur acceptait presque n'importe quel niveau comportant deux chemins gagnants, en calculant la difficulté **parmi les seuls parcours ayant survécu aux premiers affrontements**. Cela ne représentait pas la difficulté réelle face aux dix portiques (1 024 combinaisons), et certaines configurations laissaient seulement trois possibilités de victoire.

Le nouveau `src/tactics.mjs` :
1. Énumère exactement les 1 024 parcours, y compris ceux qui échouent avant le boss.
2. Calcule les survivants après chaque portique, les deux groupes de policiers et le boss, avec les règles `applyChoice` et `applyCombat` utilisées par le jeu.
3. Choisit la santé du boss pour approcher un **taux de chemins gagnants cible**, en conservant la nécessité de choix tactiques ; un parcours glouton doit perdre.
4. Si une série de portiques ne permet pas d'atteindre une difficulté raisonnable, passe à une autre configuration déterministe. Si aucun candidat ne satisfait parfaitement la plage, sélectionne seulement un parcours de secours dont une victoire réelle et un échec glouton ont été vérifiés, et documente sa difficulté.
5. Enregistre une preuve : chemin gagnant, survivants exacts, nombre/ratio de chemins gagnants, difficulté visée, défaite du parcours glouton.

### Difficultés visées (sur 1 024 itinéraires)
| Niveaux | Plage cible |
|---|---|
| 1 | 17–27 % |
| 2–3 | 14–25 % |
| 4–9 | 11–22 % |
| 10+ | 8–19 % |

Un peu moins d'une chance sur cinq au début : difficile, mais pas quasi impossible. Les taux sont des proportions de combinaisons, pas des chances de réussite d'un joueur expérimenté.

## Mesures reproductibles
- Niveau 1 avant correction, paramétrage réel (niveau=1, seed=20261019, foule=5, force=1) : boss 68, **106/1024** routes gagnantes (10,4 %).
- Niveau 1 corrigé : boss 64, **203/1024** routes gagnantes (19,8 %). Le chemin certifié termine avec **35 survivants**.
- Audit de 2 400 configurations réelles : niveaux 1 à 100 × foules [5,8,17,35,50,72] × puissances [1,2,3,7], seed = niveau × 20261019.
- Après correction : **0 niveau impossible ; 0 fausse preuve ; 0 parcours glouton gagnant**. Minimum observé **82/1024** (8,0 %), maximum 228/1024 (22,3 %). Toutes les configurations étudiées respectent les plages visées.
- `npm test` : 11 tests réussis, dont certification sur 2 400 configurations réelles, 70 variantes de semences et de niveaux allant jusqu'au niveau 1000, 800 niveaux de l'ancien jeu, et contrôles détaillés sur le niveau 1.
- `tools/qa-live-math.mjs` : partie complète avec `Game.update`, déplacement sur la route, vraies collisions de portiques et vrais combats, sans injection directe du résultat. Niveau 1 victoire avec 35 survivants, même niveau échec par parcours glouton, niveaux 2, 10 et 30 gagnés ; 5 scénarios réussis. Tests en Chrome mobile simulé.
- `tools/smoke-mobile.mjs` : 5 et 50 manifestants, 320×700 / 390×844, victoire, défaite, tactile, pause/reprise, sans erreur.
- `tools/qa-combat-voice.mjs` sur HTTPS : son de combat chargé, joué, suspendu/repris et arrêté sans erreur.
- `tools/audit-seeds.mjs` : exécution manuelle reproductible de l'audit complet avec statut d'échec si une impossibilité ou un taux hors plage est trouvé.

## Préservation
- Aucun changement des assets P02, personnages, groupes de CRS, LBD, Gen Z ou fichiers audio.
- Architecture Three.js conservée, pas de nouvelle dépendance.
- `ASSET_CATALOG.md` est modifié par un autre agent, **exclu volontairement du commit**.
- Branche locale `fix/convergence-certified-difficulty`. Version publique GitHub Pages non modifiée.
- Lien HTTPS de prévisualisation temporaire du GMK : https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/
- Les essais sont réalisés sur GMK/Chrome en affichage mobile simulé, et pas encore sur iPhone physique.

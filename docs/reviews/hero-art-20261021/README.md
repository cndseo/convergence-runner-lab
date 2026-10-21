# Preuves — reprise artistique des héros

- `gallery-front.jpg`, `gallery-face.jpg`, `gallery-side.jpg`, `gallery-back.jpg` : vingt profils, quatre vues par profil, captures Chrome du rendu réel.
- `art-results.json` : chargement des vingt profils, appels de rendu et triangles, aucune erreur WebGL/JavaScript relevée.
- `interface-results.json` : choix après le niveau 1, vingt profils, zoom du visage, XP, équipement, rechargement, foule maximale et défi quotidien.
- `regression-results.json` : douze quartiers terminés gratuitement, cinq pouvoirs, ancien inventaire conservé, restauration de sauvegarde vérifiée.
- 84 tests unitaires réussis ; compilation de prévisualisation et compilation par défaut réussies.

## Coût du rendu

Mesure Chrome / GMK K12 / AMD Radeon 780M, fenêtre 390 × 844. Même partie maximale et même nombre de silhouettes :

| Mode | Personnages animés | Instances | Total visible | Appels de rendu | Triangles |
| --- | ---: | ---: | ---: | ---: | ---: |
| Apparence historique | 12 | 300 | 312 | 193 | 484 014 |
| Communauté et héros repris | 12 | 300 | 312 | 205 | 594 612 |

La géométrie supplémentaire augmente le coût du rendu. Ce test ne mesure pas les FPS sur un téléphone physique et ne démontre pas une fluidité inchangée sur iPhone.

## Statut artistique

Version intermédiaire issue des GLB existants. Carnations, proportions, palettes et équipements ont changé ; la ressemblance exacte des vingt visages reste à réaliser. Voir `prototype/convergence/HERO_ART_PASS_2026-10-21.md` pour les limites, les essais écartés et les décisions.

Prévisualisation isolée : https://heros-convergence.72-61-167-161.sslip.io/fidelite/

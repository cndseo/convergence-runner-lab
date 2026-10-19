# CONVERGENCE — pack de décors urbains 3D

**Livraison compatible renforts marseillais 2D :** `feature/marseille-2d-urban-decay` sur la base validée `fix/marseille-premium-2d` (`51d0ac6`). Première création sur `feature/convergence-urban-decay-assets` (`4513844`). Aucun changement sur la production ni dans la branche d'Astra.

## Modèles livrés (format GLB 2.0 autonome, PBR sans texture externe)

| Modèle | Description | Dimensions | Usage |
|---|---|---|---|
| \`hospital-delabre.glb\` | Bâtiment avec enseigne HOPITAL et croix, façade écaillée, vitres cassées, entrée sous auvent, débris | 13 × 8,51 × 9,41 m | Architecture latérale |
| \`lycee-delabre.glb\` | Lycée avec entrée, enseigne LYCEE, fenêtres condamnées, grille, graffiti, débris | 14,7 × 8,45 × 9,39 m | Architecture latérale |
| \`campement-trottoir.glb\` | Trottoir avec personnes dormant dans des sacs de couchage, abri bâché, cartons, sacs, personne assise | 7,7 × 2,06 × 9,2 m | Bordure hors voie jouable |

Modèles originaux créés pour le projet à partir de géométries Three.js (aucune source tiers ni image d'illustration recopiée). **Les figures sont statiques** ; elles ne nécessitent ni squelette ni animation.

## Installation, emplacements et modification

- Binaires : \`public/assets/urban-decay/*.glb\`. Glisser-déposer également possible dans Blender, Unity et les outils glTF.
- Loader : \`src/urbanDecayAssets.js\` ; \`placeUrbanDecayAssets()\` est appelée à la génération du niveau.
- 4 occurrences initiales : 1 hôpital, 1 lycée, 2 campements, toutes placées latéralement et hors des voies de choix.
- Les objets sont chargés une seule fois en mémoire, clonés, non-collisibles ; les chargements sont annulés au changement de niveau.
- Ajuster la constante \`URBAN_DECAY_SCENES\` (x, z, rotation, échelle) pour les déplacer.
- Reconstruire les GLB après toute modification des géométries : \`npm run assets:urban\`.
- Vérification : \`npm test\`, \`npm run build\`, \`node tools/qa-urban-decay.mjs\` (nécessite Chrome/Playwright sur GMK).
- Aucune modification des portiques, règles de jeu, personnages, prix, paiements, ni routes.

**Attention :** ce pack est une première réalisation 3D low-poly propre au jeu, pas une reproduction photoréaliste des trois illustrations précédemment générées.
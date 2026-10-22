# CONVERGENCE — Personnages 3D et renforts marseillais réalistes

## Mission du 19 octobre 2026

Remplacer les costumes plats Spider-Man et dinosaure par de vrais volumes 3D animés ; remplacer les neuf sprites de renforts marseillais par douze personnages 3D, en conservant les règles tactiques et le mode histoire.

### Spider-Man

- Personnage humain 3D articulé : bras, jambes, tête, gants, bottes, masque, yeux blancs volumétriques, motif de toile et insigne.
- Utilise les **deux images fournies par l'utilisateur** : quatre panneaux de tissu en texture (deux sur la tête, deux sur le torse) déformés sur une enveloppe 3D. Le costume n'est plus un plan vertical en `THREE.Sprite`.
- L'animation de marche anime les articulations ; les deux vues sont présentes de face et de dos.
- Respect de P02 (index 0) : costume porté uniquement par le second manifestant.

### Dinosaure gonflable

- Costume 3D créé avec volumes arrondis : énorme torse gonflable, ventre, tête et museau, gueule ouverte, langue, dents, yeux, griffes et queue en plusieurs volumes.
- Animation des jambes/bras et balancement souple de la queue.
- Motifs photographiques avant et arrière basés sur les deux images de référence de l'utilisateur ; spots bruns sur la queue, pas d'appendices plats.
- Plus aucun billboard visible dans le jeu.

### Renfort marseillais

- Arrivée en trois voies : gauche, droite et derrière la foule, dans la même scène de jeu.
- **Douze personnages 3D animés : 9 silhouettes humaines réalistes déjà disponibles dans le projet, via les GLB CC0, et 3 personnages 3D procéduraux plus légers.**
- Les personnages humains ont de vraies articulations 3D, des visages, vêtements variés, écharpes bleu-blanc, sacs et drapeaux. Animation de marche accélérée pendant l'intervention, panaches lumineux bleus et blancs.
- Effet cinématique de recul des CRS préservé, comme auparavant ; aucune nouvelle mécanique de fabrication d'arme, pas de changement aux pertes mathématiques hors usage de l'intervention déjà existante.
- Préchargement asynchrone des rigs pour ne pas provoquer de sprite de remplacement ; solution de secours 3D en cas d'asset indisponible ; libération des mixers et objets à la fin de la scène.

### Non-régression

- P02 et ses modèles restent inchangés.
- Aucun changement des 10 portiques mathématiques, du calcul des pertes, de la difficulté certifiée ou du défi quotidien.
- Renforts uniquement en campagne, une charge consommée pour une intervention. Prix inchangés : costumes 1,99 €, renfort 2,99 € l'unité (packs à prix proportionnels). Paiements réels désactivés.
- Branché sur `feature/convergence-costumes-marseille-3d`, sans publier la branche principale ni intégrer les modifications de l'autre agent dans `ASSET_CATALOG.md` et `qa-online-leaderboard.mjs`.

### Tests

- `npm test` : 32/32 tests (dont 3 sur la géométrie 3D et l'animation des trois types de modèles).
- `npm run build` : réussi.
- `tools/qa-characters-3d.mjs` : face / dos / côté des costumes avec le modèle intégré ; 12 Marseillais, 9 GLB skinnés, aucune image `Sprite` ; trois voies et consommation de charge.
- `tools/qa-costumes-marseille.mjs` : démonstration, combat, recul CRS, retour au jeu avec effectifs inchangés, interdiction en mode quotidien sur deux tailles d'écran (320 × 700 et 390 × 844).
- `tools/qa-spiderman.mjs` : correspondance du costume 3D, conformité des tarifs et maintien de P02 sur deux formats mobiles.
- `tools/qa-front-contact.mjs`, `tools/qa-combat-voice.mjs`, `tools/smoke-mobile.mjs` et `tools/qa-live-math.mjs` : validés, y compris parties gagnantes/perdantes et scènes avec 50 manifestants.
- Captures de référence sur GMK : `C:\CITYOS\convergence-qa-20261019\three-dimensional-characters\`.

### Restant à valider

La fluidité sur iPhone physique et la qualité esthétique finale, car Chrome en émulation mobile n'est pas un appareil réel. Les costumes sont des modèles 3D stylisés construits autour des références 2D, et non des modèles commerciaux issus de scans 3D.

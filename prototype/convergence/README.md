# CONVERGENCE — Runner 3D mobile (prototype V1)

Fork/adaptation isolée du code de Count Masters Three.js de zhzhhyzh/count-stickman-game.
Les mécaniques de course, portails, foule, collisions et progression restent basées sur ce moteur existant.

## Changements V1
- camp joueur : 6 personnages manifestants stylisés (Gilets jaunes, Gen Z, lycéens, pompiers, infirmières, agriculteurs)
- groupes adverses CRS, BRAV-M sur motos et BAC ; front final CRS accompagné d’un fourgon
- décors urbains, chaussée de pont, immeubles, barrières, lumières et obstacles thématiques
- interface française mobile portrait
- sauvegarde locale distincte `convergence_vertical_v1`
- aucun remplacement de CONVERGENCE V11, qui reste hébergé séparément

## Développement
```bash
npm ci
npm run dev
npm run build -- --base=/convergence-runner-lab/convergence/ --outDir ../../docs/convergence
```

Le premier rendu reste **stylisé et procédural**, non photoréaliste.
Les interactions et silhouettes des équipes sont une fiction de jeu ; pas de comportement policier réel simulé.
Les assets 3D complets, les animations réalistes et l’équilibrage sont à traiter dans les versions suivantes.

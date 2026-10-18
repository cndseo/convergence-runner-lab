# CONVERGENCE — Lab de comparaison mobile

Deux builds indépendants pour comparer des prototypes 3D de runner/foule en format portrait iPhone.

- `docs/corical/` : https://github.com/Corical/CrowdRunner — Babylon.js/TypeScript
- `docs/count/` : https://github.com/zhzhhyzh/count-stickman-game — Three.js/Vite

Les dossiers `docs` contiennent des builds de démonstration inchangés du gameplay original, compilés avec les chemins publics correspondant à ce dépôt. Les dépôts originaux restent les références de code.

Ces démos **ne sont pas encore CONVERGENCE**, ne présentent pas les manifestants ni les CRS et ne remplacent pas la V11 publique. Elles servent uniquement à comparer les deux bases avant décision technique.

## Génération des builds

```bash
# Corical/CrowdRunner
npm install
npm run build -- --base=/convergence-runner-lab/corical/

# zhzhhyzh/count-stickman-game
npm install
npm run build -- --base=/convergence-runner-lab/count/ --outDir dist-bench
```


## Prototype CONVERGENCE vertical V1

- Jeu : https://cndseo.github.io/convergence-runner-lab/convergence/
- Source maintenable : `prototype/convergence/`
- Dossier build : `docs/convergence/` (GitHub Pages)
- Le jeu original Count Masters reste disponible à `docs/count/`.
- La V11 du premier jeu CONVERGENCE n'est ni modifiée ni remplacée.
- Nouveaux personnages géométriques : manifestants (6 rôles) et CRS, BRAV-M, BAC ; front final policier.
- Test compilé sur Windows et testé en Chrome format mobile (320, 390, 430 et 768 px), pas encore sur iPhone physique.

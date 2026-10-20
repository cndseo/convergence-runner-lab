# CONVERGENCE — finition rapide rues, renforts et véhicules (sprint 20/10/2026)

Branche isolée : `feature/convergence-streets-attack-fx` issue de `fa9412b`. Aucun changement à la branche d'Astra, à la version publique, au moteur Three.js, aux prix ou aux règles tactiques.

## Modifications

- `src/streetPatina.js` : 484 éléments décoratifs déterministes (version de test 200 m), seulement 18 meshes instanciés, hors voie jouable. Trottoir continu derrière les barrières, boutiques fermées (rideaux métalliques), vitrages condamnés par des planches, morceaux d'enduit détaché, graffitis géométriques, traces de suie, poubelles et déchets. Les principales façades dédiées à l'hôpital et au lycée sont épargnées.
- `src/kenneyCity.js` : lampes bleue/rouge alternées positionnées après chargement sur le toit des modèles de voiture de police et de fourgon. Ces lampes utilisent des matériaux de base, sans projecteurs ni ombres dynamiques.
- `src/marseilleReinforcements.js` : trois pas graves discrets pendant la course, un impact unique à 2,6 s, léger mouvement des CRS, onde de poussière circulaire atténuée, petit mouvement de caméra. Nettoyage complet à la fin ou à l'annulation.
- `src/audio.js` : sons ponctuels synthétisés via l'AudioContext existant, compatibles pause/reprise. **L'extrait fourni par l'utilisateur (.m4a) n'a pas été remplacé ni modifié**.

## QA et limites

- Tests Node : `npm test`. Le fichier `tests/streetPatina.test.mjs` vérifie les limites de 18 lots et l'absence de détails dans la voie du joueur.
- `npm run build` — version autonome prévisualisable.
- `node tools/qa-street-fx.mjs` — rendus Chrome mobile 390×844 et 320×700, gyrophares, 15 groupes, onde, nombre d'impacts, fin et absence d'erreurs JS.
- QA de non-régression : `qa-marseille-2d.mjs`, `qa-marseille-audio.mjs`, `qa-marseille-regressions.mjs`, `qa-urban-decay.mjs`.
- Les façades et déchets sont **low-poly**, non photoréalistes. Les véhicules restent les modèles GLB existants. Le rendu définitif sur iPhone physique demeure à vérifier.

Aucune collision, aucune nouvelle interaction payante, aucune modification sur `main`. Un éventuel déploiement public reste soumis à validation.

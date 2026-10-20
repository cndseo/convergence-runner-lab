# Foule et présence FDO — 21 octobre 2026

Prévisualisation jouable : https://foule-convergence.72-61-167-161.sslip.io/

Branche : `feature/convergence-dense-crowds-20261021`, basée sur `13338c4` (dernière branche player-experience récupérée après fetch). Travail effectué dans un worktree distinct ; les autres worktrees n'ont pas été modifiés.

## Modifications

- Foule visuelle : `round(6*N/(1+N/72))`, soit 28 personnes pour 5 unités, 108 pour 24, 216 pour 72. Croissance monotone, entre 3 et 6 fois l'effectif.
- Chaque protection ajoute deux silhouettes (pompiers, infirmières, gilets jaunes). Maximum : 312 personnes pour 72 unités et 48 protections. Les rangs se retirent quand les protections sont consommées ; aucun personnage supplémentaire si l'effectif est nul.
- Formation compacte et décalée, derrière le leader ; tenues variées et apparition progressive des nouveaux rangs. Caméra adaptée à la largeur et à la profondeur, y compris pendant les combats et la poursuite finale.
- Patrouilles BAC, lignes CRS, motos BRAV-M, spectateurs et renforts latéraux aux fronts dans les douze quartiers. Stations tous les 12 mètres sur les deux côtés, hors du couloir de jeu. Les BAC proches se déplacent lentement.
- Les unités de combat centrales gardent leurs nombres et dommages ; les petits fronts sont recentrés. Les silhouettes de décor ne deviennent ni cibles ni pertes cachées.

## Choix techniques et limites

Les manifestants supplémentaires partagent l'atlas animé existant et son appel de rendu. Les présences latérales utilisent quatre lots instanciés pour tout le parcours. Aucun asset ajouté, aucun GLB/squelette supplémentaire, aucun changement aux PNG TV, paiements, inventaires, bonus, sons ou règles quotidiennes.

Matrices des patrouilles actualisées au plus 12 fois/seconde à l'arrêt, culling au-delà de 86 m devant / 24 m derrière, densité réduite au-delà de 44 puis 66 m. Capacités bornées et ressources des lots libérées au changement de quartier. Textures partagées conservées par leurs propriétaires. Les positions intermédiaires de formation réutilisent des objets.

Les nombres du HUD, les scores et les solveurs restent les effectifs logiques. La foule est une représentation amplifiée. Les renforts de protection restent une présentation du stock existant, sans nouvelle récompense économique.

## Contrôles exécutés

- 80 tests Node réussis, dont croissance monotone, protections, formation et répartition des trois types FDO sur les 12 quartiers.
- Builds Vite de production et de prévisualisation réussis. Avertissement de taille du bundle déjà présent : environ 972 ko JS avant gzip.
- QA WebGL avec Chrome sur GMK, vues mobiles 390×844 et 320×700 : 28 / 44 / 132 / 312 silhouettes, gain réel d'une TV +14 protections, pause, changements répétés des 12 quartiers, capacités et matrices finies.
- Projection des pieds de chaque rang vérifiée dans le cadre mobile, même au maximum. Captures examinées et cadrage corrigé.
- Tests de progression : parties complètes Nation et Élysée, victoires avec 29 et 25 survivants, dix TV franchies, poursuite finale conservée.
- QA de l'expérience et du défi quotidien rejouée sur la prévisualisation HTTPS compilée ; interactions tactiles, boutique, partage et transitions. Aucun paiement réel déclenché.
- Les quatre scènes comparées avec/sans la couche ajoutée (même scène/caméra) donnent 4 à 5 appels de rendu et moins de 1 000 triangles supplémentaires. Il s'agit du coût géométrique incrémental, pas d'une mesure de FPS sur téléphone.
- Prévisualisation, site public et API de santé répondent HTTP 200 après installation de la route HTTPS. Site public non redéployé.

Preuves : `docs/reviews/human-density-20261021/`. Reproduction : `npm test`, `QA_URL=<preview> node tools/qa-human-density.mjs`, `QA_URL=<preview> node tools/qa-player-experience.mjs`.

## Déploiement

Prévisualisation isolée, API/paiements désactivés via `VITE_PLAYER_PREVIEW=1` et `VITE_CONVERGENCE_API=`. Nginx statique dans `convergence-dense-crowds-20261021`, réseau existant ; seule une nouvelle route de prévisualisation a été ajoutée à Caddy. Les fichiers compilés de `docs/convergence` gardent la configuration API habituelle pour une future livraison.

Caddy : le montage de fichier du conteneur pointe vers un ancien inode. Valider et recharger le fichier courant de l'hôte via stdin (`--config /dev/stdin --adapter caddyfile`), jamais le chemin monté périmé. Comparer la configuration avant écriture pour préserver les changements simultanés.

À confirmer : fluidité, chauffe et autonomie sur de vrais téléphones modestes ; les captures et compteurs graphiques de Chrome ne constituent pas cette validation matérielle.

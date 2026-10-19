# Personnages conformes aux rÃ´les de la planche â€” 19 octobre 2026

Branche `feature/reference-characters-v2`, dÃ©part `d10ef61`. Travail, cuisson des atlas, compilation et Chrome exÃ©cutÃ©s sur GMK K12 Windows 11.

## Direction et conservation
La planche du ZIP fourni est la rÃ©fÃ©rence. La liste explicite de la mission prÃ©cise certains Ã©lÃ©ments : hoodie rouge du lycÃ©en, mÃ©gaphone du pompier, gilet du fumigÃ¨ne, casquette et pantalon beige de l'agriculteur.
**P02 est validÃ© et gelÃ© : aucune modification de son image, de son composant, de ses jambes, de son costume legacy ou de sa disposition.** Ne pas reprendre les anciennes notes proposant de le remplacer.
Three.js, squelettes GLB, clips Walk, gameplay, V11 et fallback `?visual=legacy` sont conservÃ©s. Le changement prÃ©alable de `ASSET_CATALOG.md` est prÃ©servÃ© et exclu du commit.

## Personnages effectivement implÃ©mentÃ©s
| Profil | Tenue et Ã©quipements |
|---|---|
| LycÃ©en | Hoodie rouge avec capuche en volume, jean sombre, sac scolaire noir, pancarte en carton tenue dans la main |
| Pompier | Uniforme rouge texturÃ©, bandes jaunes sur buste/bras/jambes, casque rouge arrondi, sac noir et mÃ©gaphone |
| InfirmiÃ¨re | Tunique blanche Ã  bas Ã©vasÃ©, pantalon blanc, croix rouge dans le dos, coiffe marquÃ©e et sac mÃ©dical en bandouliÃ¨re |
| Manifestante | Veste violette Ã  capuche, jean, cheveux attachÃ©s, sac marron Ã  rabat |
| FumigÃ¨ne | VÃªtement sombre, gilet fluorescent, petit sac, bras levÃ© portant le fumigÃ¨ne vert, fumÃ©e transparente animÃ©e |
| Agriculteur | Veste verte Ã  poches, pantalon beige, casquette verte, sac de randonnÃ©e marron avec rouleau et gourde |
| Drapeau | Tenue sombre, sac noir, hampe tenue en main et drapeau franÃ§ais dÃ©formÃ© par animation |
| Six gilets supplÃ©mentaires | Hoodie rouge/sac scolaire ; blonde/sac compact ; bonnet/sac roulÃ© ; rousse/sac cuir ; casquette/sac sport ; cheveux gris/sac randonnÃ©e. Variations de taille, largeur, vÃªtements et coiffures |

Les corps et plis de vÃªtements proviennent des GLB rÃ©alistes existants ; les dÃ©tails du sac rÃ©utilisent la texture dÃ©jÃ  issue de P02. Les piÃ¨ces manquantes sont des volumes attachÃ©s aux os : capuches, gilets, coiffe, casque, sacs et accessoires. Les piÃ¨ces sont regroupÃ©es par os pour limiter les appels de rendu. Les visages et les mains conservent les textures de peau.
Les nouvelles silhouettes restent des modÃ¨les de jeu stylisÃ©s ; la planche n'est pas convertie en sprites statiques et aucune illustration de prÃ©sentation n'a Ã©tÃ© gÃ©nÃ©rÃ©e.

## Marche, atlas et ressources
- Les bras porteurs sont orientÃ©s aprÃ¨s la marche, avec des doigts en prise. Le dÃ©placement et les jambes restent pilotÃ©s par Walk.
- 13 profils Ã— 12 phases = 156 images produites automatiquement par `tools/bake-realistic.*`.
- Atlas `walk-realistic.webp`, 1920 Ã— 3120, environ 290 Ko. Chaque profil proche et sa rangÃ©e d'atlas utilisent le mÃªme constructeur.
- FumÃ©e rendue sÃ©parÃ©ment de l'atlas pour conserver sa transparence ; particules Ã©loignÃ©es regroupÃ©es en un seul InstancedMesh.
- En portrait : 12 personnages riggÃ©s maximum, P02 compris ; 38 impostors Ã  50, 73 Ã  85. Les ressources des costumes sont libÃ©rÃ©es lors des pertes et redÃ©marrages ; matÃ©riaux partagÃ©s conservÃ©s.
- Le test Ã  85 exerce le rendu et les renforts directs, y compris 85 â†’ 3 â†’ 85. Le plafond des rÃ¨gles tactiques reste inchangÃ© Ã  72.

## VÃ©rifications
Les rÃ©sultats structurÃ©s du build final, du fallback et de la comparaison avant/aprÃ¨s sont dans `tests/QA_CHARACTERS_2026-10-19.json`.
Les captures inspectÃ©es sur GMK sont dans `C:\CITYOS\convergence-qa-20261019\reference-characters-v2\build` : vues mobiles, renforts 85 et quatre vues rapprochÃ©es **dans la scÃ¨ne rÃ©elle du jeu** montrant les 13 profils.
La camÃ©ra de contrÃ´le des vues rapprochÃ©es est uniquement manipulÃ©e par le script de test. Aucun Ã©cran de prÃ©sentation ou sÃ©lection de modÃ¨le n'est ajoutÃ© au produit.
La comparaison de performances utilise le build public d10ef61 puis le candidat, sur le mÃªme Chrome/GMK, en 390 Ã— 844, DPR 1.5. Ce ne sont pas des mesures sur tÃ©lÃ©phone physique.
Le warning Vite du bundle de plus de 500 Ko reste non bloquant (environ 777 Ko brut, 208 Ko gzip).

## Reproduction
- Serveur Vite : port 4317 ; `BAKE_URL=http://127.0.0.1:4317/tools/bake-realistic.html`, puis `node tools/bake-realistic.mjs`.
- `npm test` et `npm run build`.
- PrÃ©visualisation du build : `npm run preview -- --host 127.0.0.1 --port 4318 --base /convergence-runner-lab/convergence/`. Le paramÃ¨tre base est indispensable avec la configuration existante.
- `QA_URL` indique le build ou le site, `QA_OUTPUT` le dossier de preuves.
- `QA_REALISTIC=1 node tools/smoke-mobile.mjs`, puis `node tools/qa-characters.mjs`.
- Pour le fallback, passer `?visual=legacy` et `QA_REALISTIC=0`.
- `tools/qa-character-performance.mjs` compare deux URLs ; `QA_BASELINE` doit toujours servir le bundle historique d10ef61 (le script vÃ©rifie son nom).

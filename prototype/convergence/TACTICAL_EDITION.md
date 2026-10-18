# CONVERGENCE — édition tactique, 19 octobre 2026

## Continuité et décisions
- Développement, préparation des assets, compilation et tests effectués sur le GMK K12, dans C:\CITYOS\convergence-runner-lab.
- Branche feature/convergence-tactical-v2 depuis 5aca654 / feature/asset-library-v1.
- Moteur Three.js, animations Quaternius Walk et modèles Kenney réutilisés. Aucun changement de V11 ni des démos count/corical.
- Le changement ASSET_CATALOG.md déjà présent avant cette intervention reste intact et exclu de ce commit. Copie et patch de sauvegarde dans C:\CITYOS\convergence-qa-20261019.
- Les PNG ESSAI du ZIP sont des prototypes, pas des personnages validés pour publication.

## Personnages et assets
P02 exact est conservé dans art/approved/P02.png. Le WebP normalisé du pipeline fourni sert dans le menu et comme personnage principal dans la scène, avec buste/drapeau issus du PNG et jambes du GLB jouant Walk : la pose de course des jambes du PNG est masquée dans la scène. **Le buste reste un impostor 2D à pose unique ; ce montage hybride n’est pas un personnage intégralement modélisé et riggé fidèle à P02.**
Les autres personnages proches utilisent le rig GLB et le clip Walk, jamais Run. Échelle et orientation des accessoires corrigées : gilets réfléchissants, sacs, drapeaux, couvre-chefs, manches et chaussures suivent les os.
Sur portrait, 50 personnages sont affichés avec 1 P02 hybride (jambes riggées), 11 autres rigs et 38 impostors regroupés dans un seul InstancedMesh. L'atlas contient 12 poses Walk pour chacune des 6 factions, fabriquées automatiquement depuis les modèles équipés. Aucun lot de 50 variantes fabriqué manuellement.
Baker reproductible : lancer Vite sur 4178 puis npm run assets:bake. Dépendances déjà disponibles sur GMK : playwright-core, Chrome, Python/Pillow.
Le rendu reste une étape intermédiaire : P02 détaillé et personnages GLB low-poly ne sont pas encore parfaitement homogènes avec la référence artistique.

## Gameplay
- Dix décisions successives : +, −, ×, ÷, pourcentages, protections, bonus avec seuil d'effectif ou réserve de protections.
- Barrages, BRAV-M, fourgons et débris affichent leurs pertes. Les protections absorbent les pertes d'obstacles et de confrontations ; les divisions/départs ne sont pas bloqués par des protections.
- Les règles pures de tactics.mjs sont utilisées par le jeu et son solveur. Pour chaque niveau, les 1024 parcours sont évalués avec les confrontations et les plafonds d'effectif/protection.
- Le générateur conserve une preuve de victoire, des parcours perdants et recherche un niveau où maximiser seulement l'effectif immédiat échoue. Le niveau est reproductible par sa graine.
- Correction majeure : l'ancien minimum artificiel d'un manifestant rendait la foule invincible. L'effectif peut maintenant atteindre zéro et provoquer une défaite réelle.
- Pause/reprise, informations compactes sur protections/front/progression. Le jeu conserve sa sauvegarde existante.

## Vérifications
- npm test : arithmétique, arrondis, protections, conditions, zéro terminal, déterminisme ; 800 configurations avec départs à 5 et 50, forces 1 et 3, niveaux 1 à 30.
- Chrome sur GMK en 390×844 et 320×700, DPR 1.5, avec 5 puis 50 manifestants ; capture WebGL obligatoire pour chaque cas.
- Parcours gagnant et parcours glouton réellement exécutés dans les collisions/combat du jeu ; victoire avec 11 survivants, défaite à zéro ; passage au niveau suivant, commande tactile et pause testés.
- Les rapports et captures sont dans C:\CITYOS\convergence-qa-20261019 ; build/ pour le build final, public/ pour l'adresse publiée.
- Mesures observées dans Chrome headless sur GMK : environ 32 images/s. Ce ne sont pas des mesures sur iPhone physique. Ce dernier reste à vérifier.
- Vite signale un bundle JS supérieur à 500 Ko (environ 713 Ko brut / 188 Ko gzip) ; compilation réussie, aucun échec causé par cet avertissement.

## Reproduction
- npm run dev -- --host 127.0.0.1 --port 4178
- npm test
- npm run test:mobile (Chrome et playwright-core déjà installés sur GMK)
- npm run build
QA_URL permet de tester le build ou l'URL publique ; QA_OUTPUT choisit le dossier de preuves. Le crochet de test window.__convergence n'est exposé en production que si l'URL contient ?qa=1.

Publication : docs/convergence dans le dépôt convergence-runner-lab. La branche dédiée doit être poussée, puis main avancée uniquement en fast-forward après validation ; ne jamais forcer main.

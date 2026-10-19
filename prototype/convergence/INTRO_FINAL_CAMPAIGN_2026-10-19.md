# CONVERGENCE — Introduction et objectif final (19 octobre 2026)

## Périmètre réalisé
- **Campagne scénarisée de 10 niveaux.** Les 10 portiques existants restent présents dans *chaque* niveau. Le niveau final de l'histoire est **le niveau 10**, configurable par `FINAL_CAMPAIGN_LEVEL` dans `src/storyRules.mjs`.
- **Introduction avant la première partie du niveau 1** : silhouette issue des deux images utilisateur (vue face / dos), incrustée dans le vrai décor 3D face au premier front CRS. Lecture automatique du véritable audio de la vidéo utilisateur (~3,74 s). Le personnage se retourne puis court se réfugier au-delà de la première ligne ; la partie redémarre à zéro, sans portique consommé ni perte de foule. Le bouton « Passer l’intro » est actif au tactile.
- L'introduction ne se relance pas à chaque retry au cours de la session. Elle est rejouée si l'utilisateur relance volontairement la campagne.
- **Objectif protégé** : le personnage n'est pas une cible dans les niveaux 1–9 ; il n'apparaît derrière le dernier barrage qu'au niveau 10. La poursuite est inaccessible tant que **le boss final de ce niveau n'a pas été vaincu**.
- **Après le front final** : courte poursuite sur la route, pilotable au glissement du doigt ou au clavier. Le personnage choisit une autre voie, et l'utilisateur doit se rapprocher horizontalement : aucune capture automatique après un temps arbitraire ; la distance et le geste déclenchent le contact. La victoire de campagne est enregistrée seulement après la capture; nouveau bouton « Rejouer la campagne ».
- Aucun coup ou blessure supplémentaire : la rencontre finale est une interception fictive, un contact sans animation de violence physique.

## Fichiers
- `src/storyRules.mjs` : niveaux de campagne, phases d'introduction et condition déterministe de capture.
- `src/storyDirector.js` : cinématique en vraie scène Three.js, caméra, deux textures, fuite, objectif final et retour au gameplay.
- `public/assets/story/target-front.webp` et `target-back.webp` : dérivés compressés (320 px hauteur) et détourés des 2 images communiquées par l'utilisateur.
- `public/assets/story/intro-voice.mp3` : audio extrait de la vidéo utilisateur (~3,74 s), mp3 mono 24 kHz compatible iOS.
- `src/audio.js` : lecture de la voix à partir de l'AudioContext déverrouillé par le bouton Jouer, avec reprise si suspendu et arrêt sur Skip.
- `src/game.js` : intégration en états séparés `intro`, `final_chase`, `final_capture`, limitation logique de la campagne 10, sauvegarde du drapeau `campaignComplete`, controls maintenus lors de la chasse.
- `src/ui.js`, `style.css`, `src/level.js` : interface et transitions; portiques masqués **uniquement** pendant les séquences narratives, puis rétablis. Aucun changement de règle, collision, costume ou coordonnées tactiques.
- Assets de production compilés dans `docs/convergence/assets/story/`.

## Validations effectuées sur GMK K12
- `npm test` : **19/19** tests, dont 3 nouveaux tests de cinématique/verrouillage; les audits de niveaux certifiés sont intacts.
- `npm run build` : réussi.
- `qa-intro-final.mjs` : 8 scénarios en Chrome mobile avec véritables textures et voix décodée; CRS visibles, dos pendant la fuite, passage derrière eux, Skip, retour à 0, interdiction de l'objectif avant le dernier niveau, contact et replay. Aucun chargement en erreur.
- `qa-final-live.mjs` : **vrai parcours gagnant du niveau 10**, 10 choix, 2 fronts intermédiaires, front final vaincu avec 36 manifestants survivants. Après le dernier combat, poursuite, contrôle tactile, contact, victoire finale et persistance validés.
- `qa-live-math.mjs` : niveau 1, 2, 10, 30 gagnants avec résultats inchangés ; parcours glouton perdant ; aucune régression de solveur.
- `qa-front-contact.mjs` : 5 scénarios de contact CRS, distance ~0,5–0,8 m et agents toujours face aux manifestants.
- `qa-combat-voice.mjs` : son d'affrontement historique maintenu, pause/reprise, fin de combat, vérifiés.
- `smoke-mobile.mjs` : deux tailles de téléphone, entrée tactile et pause, succès/défaite, aucun crash.
- Captures PNG dans `C:\CITYOS\convergence-qa-20261019\intro-final-story\`. Inspection visuelle du prologue face/dos et de la récompense.

## Contraintes et publication
- Travail réalisé sur une branche locale `feature/convergence-intro-final-figure`, base `a641936`. **Aucun push ni remplacement de main**.
- Prévisualisation privée temporaire via tunnel GMK : `https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/`.
- `prototype/convergence/ASSET_CATALOG.md` modifié par un autre agent : ne jamais inclure dans notre commit.
- Le jeu est une fiction satirique, non une représentation d'une scène authentique.
- **À vérifier sur iPhone physique** : volume réel du MP3, fluidité et cadrage de l'introduction et de la poursuite. Les tests sont effectués en Chrome mobile simulé sur le GMK.

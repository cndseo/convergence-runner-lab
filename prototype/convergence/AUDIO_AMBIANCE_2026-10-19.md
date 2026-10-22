# CONVERGENCE — ambiance de manifestation (19 octobre 2026)

## État
Intégration locale dans `feature/convergence-ambiance-realiste`, basée sur `56e9e7a`.
Moteur Three.js et `AudioManager` préservés. P02 intact. La version GitHub Pages publiée n'est pas modifiée.

## Sources
Les deux enregistrements ont été fournis dans la conversation par l'utilisateur sous forme MP3.
Pour les placer directement sur le GMK, les vidéos portant les mêmes titres et durées ont été récupérées :
- Manifestations à Paris « Macron démission ! » (70 s) : https://www.youtube.com/watch?v=cVgaJjPaX6M
- « Macron destitution, Macron Décapitation ! » (22 s) : https://www.youtube.com/watch?v=gpb4_LAd6fQ
Les durées correspondent aux MP3 fournis (70,50 s et 21,63 s) à la précision attendue d'un transcodage ; aucune identité binaire n'a été vérifiée.

Originals téléchargés : `C:\CITYOS\convergence-audio-sources-20261019\` (hors dépôt).
Fichiers du jeu :
- `public/assets/audio/crowd-paris.ogg` : mono Opus 32 kbit/s, ~264 Ko
- `public/assets/audio/crowd-street.ogg` : mono Opus 32 kbit/s, ~85 Ko

## Comportement
- Alternance des deux extraits en ambiance de fond, fondus de 0,7 seconde.
- Volume réduit avec gain existant `musicGain`. La musique électronique reste uniquement en secours si les fichiers sont indisponibles.
- Mise en pause réelle du contexte audio, reprise au retour de jeu.
- Bouton SON dans la fenêtre de pause, sans couper les effets sonores.
- Son arrêté lors de victoire ou de défaite.

## QA
`node tools/qa-crowd-ambience.mjs` : les deux pistes se chargent/décodent (70,4/21,5 s), contexte audio en cours, deuxième piste activée après la première, pause, reprise, mute, stop, aucune erreur.
`npm test` : 3 tests (dont 800 niveaux) réussis.
`npm run build` : réussi. Avertissement de taille de bundle existant, non bloquant.
`QA_REALISTIC=1 node tools/smoke-mobile.mjs` : 4 formats/effectifs, commandes tactiles, victoire et défaite réussis sous Chrome GMK.
Prévisualisation LAN : `http://192.168.1.153:4321/convergence-runner-lab/convergence/`. Écoute sur iPhone physique non encore testée.

## Prudence avant publication
Les droits de reproduction et de diffusion publique de ces **enregistrements** ne sont pas vérifiés. Leurs auteurs/diffuseurs peuvent détenir les droits sur la prise de son. Le second extrait contient des propos violents qui doivent être validés éditorialement avant une diffusion ouverte, notamment pour un public jeune. Ne pas pousser les audios sur GitHub Pages ou fusionner en `main` sans validation de ces points.

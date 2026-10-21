# CONVERGENCE — Vestiaire avec planches originales (21 octobre 2026)

## Décision retenue

Le vestiaire affiche les personnages originaux en PNG et non plus un rendu 3D. Les 20 modèles 3D existants restent inchangés dans les 12 quartiers : leur rôle dans le runner est vu essentiellement de dos et de loin.

Aucun bouton 3D, aucune rotation 3D, aucun contexte WebGL supplémentaire dans le vestiaire.

## Livrable

- 5 planches originales, 4 profils par planche : GenZ, Gilets jaunes, Soignants, Pompiers, Lycéens.
- 20 silhouettes recadrées du visuel original + 20 portraits faciaux découpés du même visuel, en PNG sans redessiner les personnages.
- Le dossier public/assets/hero-portraits/ contient les 40 PNG.
- Le fichier manifest.json conserve la planche d'origine, son empreinte SHA-256 et la zone de découpe de chaque profil.
- Le visualiseur du vestiaire devient HeroPortrait et affiche des éléments IMG natifs.
- Téléchargement d'un personnage en PNG depuis le vestiaire.
- Identités, sauvegardes, équipement et progression inchangés.

## Tests

- npm test : 88 tests réussis / 0 échec.
- npm run build : réussi.
- node tools/qa-wardrobe-png.mjs : 20 silhouettes et 20 portraits chargés, 390x844 et 320x700, aucun WebGL dans le vestiaire, téléchargement PNG, sauvegarde, choix, 11 membres au niveau 2, aucune erreur JS / 404.
- Captures disponibles dans docs/reviews/wardrobe-png-20261021/.

## Limites et sécurité

Cette modification ne concerne que le vestiaire. Les modèles 3D en partie, les déplacements, les animations, les achats, les 12 niveaux et les systèmes de sauvegarde ne sont pas remplacés.
Le personnage 3D visible de dos et de loin est une représentation simplifiée de son illustration. Les PNG sont des recadrages des pixels originaux, pas des modèles 3D reproduits.
Le site public et les prévisualisations antérieures ne sont pas écrasés.
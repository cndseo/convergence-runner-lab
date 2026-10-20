# CONVERGENCE — TV BFMTV/CNEWS en portiques (20 octobre 2026)

## État vérifié
- Branche isolée `feature/convergence-tv-portals`, basée sur le commit `1e043bb`; ni `main` ni les branches d'Astra n'ont été modifiées.
- 15 illustrations approuvées sans placeholders « (x) » réunies dans `public/assets/tv/tv-approved-atlas.webp` (6 402 octets). Les 15 variantes sont sélectionnables au fil des niveaux, test de couverture inclus. Atlas à faible définition destiné au mobile : les images de fond restent stylisées et ne prétendent pas être des vidéos.
- `tvGateArt.js` : remplace les pancartes par des téléviseurs plats Three.js, avec cadres fins, bandeau de chaîne BFMTV/CNEWS, annotation explicite de fiction et valeur dynamique nette.
- `tvGateMapping.mjs` : affiche toujours le montant tiré par `tactics.mjs`. Aucune nouvelle valeur de bonus/malus n'est inventée ; Gilets jaunes, Gen Z, pompiers et infirmières réutilisent la logique `bonusFaction`. Conditionnels, multiplicateurs, pourcentages et malus restent synchronisés.
- `tvBreakEffects.js` : le TV choisi explose en 14 éclats pendant 0,65 s à la collision. L'opération de la porte est appliquée une seule fois par `game.js`. Les modèles BRAV-M et les règles de perte de trois personnes restent inchangés.
- `storyDirector.js` : correction du rendu du visage du personnage présidentiel (ordre de rendu, test de profondeur frontal, alpha), sans changement de l'enregistrement vocal ou du parcours d'introduction.
- `level.js` : déchargement explicite des textures de téléviseurs lors des changements de niveau pour éviter les accumulations de mémoire graphique.

## Vérifications sur GMK K12
- `npm test` : 47/47 tests réussis dont 800 générateurs de niveaux et couverture des 15 variantes.
- `npm run build` : réussite, seul avertissement existant de bundle JavaScript supérieur à 500 Ko.
- Tests Chrome locaux : `qa-tv-gates.mjs` en 390×844 et 320×700 : 20 TV, atlas HTTP 200, aucune valeur « (x) », une seule rupture avec 14 éclats, mathématique du compteur exacte, aucune erreur JS.
- Tests du code compilé via HTTPS : mêmes deux résolutions et mêmes assertions, plus `qa-intro-final-tv.mjs` pour le prologue, la fuite et la finale ; passage confirmé.
- `qa-bravm-gate.mjs` compilé : charge avec 3 chutes, 14→11, pause et reprise passées aux deux formats.
- Limite : écran réel d'iPhone non encore testé; le tunnel HTTPS est temporaire et dépend du GMK.

## Livraison
Prévisualisation HTTPS temporaire : https://soldiers-creatures-organizational-clip.trycloudflare.com/convergence-runner-lab/convergence/

**Ne pas fusionner sur `main` avant validation du rendu physique iPhone et accord.** Préserver les branches d'Astra et la publication actuelle.

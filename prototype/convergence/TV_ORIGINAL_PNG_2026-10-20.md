# CONVERGENCE — PNG de téléviseurs originaux

20 octobre 2026. Base `d0775d5`, branche `fix/convergence-actual-tv-png`.

Les 15 téléviseurs BFMTV/CNEWS ont été récupérés depuis la Bibliothèque ChatGPT sur le GMK, détourés en PNG transparents, sans redessiner les visuels. Leur largeur est de 1191 à 1248 pixels. Chaque TV est représentée par un PNG intégral comprenant son habillage, ses pieds et le chiffre imprimé.

`tvOriginalMapping.mjs` n'associe un PNG au choix que si son chiffre correspond exactement à la logique mathématique du jeu. Exemple : x2, +10, -14 barrage, +21 protections. Si la valeur diffère, l'ancien rendu dynamique reste affiché : il serait trompeur d'annoncer +21 quand le tirage prévoit +16. Les 15 originaux sont intégrés aux assets, mais ne sont pas tous nécessairement utilisés dans un niveau donné.

La texture est chargée depuis le PNG source, avec un cache partagé et libération lors du redémarrage. Les portiques rouges et les chiffres flottants restent absents. Le code de BRAV-M, du prologue et des renforts marseillais est préservé.

Tests vérifiés : 50/50 tests unitaires, compilation de production, Chrome mobile 390x844 et 320x700 ; assets PNG HTTP 200, collision unique, aucune erreur JS. Non-régressions : BRAV-M 14 à 11, introduction/finale, renforts marseillais en 2D.

Limites : images originales à nombres fixes ; les alternatives avec des valeurs différentes nécessitent de nouveaux PNG cohérents ou une évolution contrôlée du générateur. Aucun déploiement sur `main` sans validation physique iPhone.

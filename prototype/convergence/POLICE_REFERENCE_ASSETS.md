# CONVERGENCE — références CRS, BAC et BRAV-M dans le jeu

**Branche isolée :** `feature/reference-police-bravm-charge` (issue du commit `9cc6556`, préservant la 2D Marseille, le son et les décors précédents).

## Assets réellement intégrés

Fichiers : `public/assets/police-reference/{crs-reference,bac-reference,bravm-reference}.webp`.
Ces trois images ont été découpées à fond transparent à partir des illustrations validées dans le chat, puis fortement réduites et compressées (126px de large, 2,8/3,1/2,0 Ko) pour l'affichage mobile. **Ce sont des représentations 2D frontales dans un environnement 3D, et non des GLB photogrammétriques ou des personnages en 3D intégrale.** Les versions générées originales restent distinctes des trois WebP de jeu.

- `src/policeReferenceSprites.js` : textures chargées et mises en cache, personnages CRS/BAC/motard BRAV-M avec habillage d'origine, sprites orientés caméra, repli visuel 3D si une texture échoue.
- Les modèles de police et moto préexistants restent utilisables par le jeu pour les combats et l'animation ; seules leurs surfaces visibles sont masquées lorsque l'asset de référence est chargé.
- Les motos BRAV-M **avancent réellement** pendant un affrontement : progression sur 3,5 à 4,5 m en 1,45 s, accélération et légère vibration, arrêt à la ligne de la foule et pause respectée. Les calculs de blessures, les portiques, les bonus et les crédits ne changent pas.
- Les CRS et les BAC du front final utilisent également les références. Les renforts marseillais et le combat restent intacts.

## Vérification et limitations

- `npm test` : tests unitaires comprenant vérification SHA-256 et poids des trois fichiers.
- `npm run build` : vérification du build.
- `node tools/qa-police-reference.mjs` : Chrome 390×844 et 320×700, chargement HTTP 200, texture réelle affichée, visibilité des modèles exclusifs, charge effective et pause.
- Non-régression `qa-marseille-2d.mjs`, `qa-marseille-regressions.mjs`, `qa-marseille-audio.mjs` et `qa-street-fx.mjs` sur les deux formats.
- Le rendu peut perdre en netteté en gros plan à cause de la compression 126 px. Pour une version 3D animée sur 360°, il faudra ensuite des vues supplémentaires et un vrai rig 3D, non fourni par trois images frontales.
- Le jeu public et la branche d'Astra restent inchangés. Fusion non effectuée ; contrôle sur iPhone réel encore nécessaire.

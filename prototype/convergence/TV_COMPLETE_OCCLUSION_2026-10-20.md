# CONVERGENCE — correctif intégral PNG et occlusion TV

20 octobre 2026 — branche isolée `fix/convergence-tv-complete-occlusion`, issue de `dc7ea88`.

## Problème et solution
- La PR #11 ne remplaçait par PNG que les choix dont le chiffre était identique à un des 15 assets validés. Les 13 autres écrans sur 20 utilisaient encore la TV dessinée en canvas.
- Les 20 téléviseurs viennent **désormais des PNG originaux** BFMTV/CNEWS (`tv-originals/*.png`) : cadre, pieds, présentatrice et arrière-plan photo sont conservés.
- Pour un montant différent de celui imprimé dans le fichier, le **bandeau inférieur de ce même PNG** est recomposé dans une unique texture pour afficher la valeur exacte. Aucune plaque 3D, aucun second numéro flottant, et aucun ancien téléviseur de remplacement. Les 7 choix à montant identique affichent le PNG totalement inchangé.
- Tous les cas du solveur sont couverts : +, -, ×, ÷, %, protections, dommages BRAV-M, barrières, fourgons, débris, conditionnels, renforts Gen Z/pompiers/infirmières/gilets jaunes.
- Les textures sont alpha-testées, **depthWrite=true**, **depthTest=true**, **transparent=false** sur les pixels visibles. Les 2 motards associés à une TV BRAV-M sont cachés jusqu'au choix du joueur. Lors du contact, l'animation de charge les détache et les rend visibles.

## Tests vérifiés
- `npm test` : **51 réussis**, couvrant notamment **16 000 choix de portes** dans 800 niveaux, sans aucun écran reconstruit.
- `npm run build` : OK (avertissement préexistant concernant la taille du bundle).
- Chrome 390×844 et 320×700 : 20/20 TV `source=original-png`, 13 bandeaux adaptés, images originales HTTP 200, 100 % profondeur active et motos pré-impact invisibles, aucun portique parasite, zéro erreur JavaScript.
- Version compilée **sur HTTPS** : mêmes assertions pour les 20 TV et la collision/bris unique ; BRAV-M 14→11, 3 renversements, pause/reprise. Introduction et finale testées localement ; renforts marseillais testés localement.
- Captures et tests additionnels des portes 0,1,2,3,5,8 sur GMK.

## Gouvernance
Aucune modification sur `main` ou les branches d'Astra. PR en brouillon ; à valider sur l'iPhone physique avant fusion. Les tunnels Cloudflare sont temporaires et dépendent du GMK. La nouvelle méthode de compositing peut occuper davantage de mémoire GPU mobile, à surveiller sur téléphone.

Prévisualisation temporaire :
https://unfortunately-pump-preservation-pop.trycloudflare.com/convergence-runner-lab/convergence/

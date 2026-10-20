# CONVERGENCE — téléviseurs autonomes nets, sans armatures

Date : 20 octobre 2026. Base : e353daf, PR #9. Branche isolée : fix/convergence-tv-hd-standalone.

## Correctifs vérifiés
- Supprimé poteaux, poutres, pylônes, panneaux et cadres rouges/bleus autour des 20 TV (dix paires). Un seul écran plat noir par voie avec pied discret ; aucun nombre en surimpression externe.
- Les vignettes sources de ~100 × 58 pixels ne sont plus chargées. Les écrans sont des compositions fictives BFMTV/CNEWS générées en 1024 × 576, avec graphismes nets, et un unique montant intégré au bandeau inférieur de l'image. Les photographies originales ne sont PAS reproduites en haute définition dans cette version : les illustrations sont recomposées.
- Règles mathématiques et génération certifiée conservées. Collision BRAV-M 3 pertes et animations existantes intactes. TV choisie brisée en 14 éclats sans double application.
- Correction d'un conflit de matériau WebGL observé sur la surbrillance, supprimé en conservant la casse visuelle.
- Aucun changement sur main ou les branches d'Astra.

## Vérifications
- 47/47 tests automatisés, dont 800 configurations tactiques.
- Build compilé réussi (avertissement historique de bundle volumineux).
- Version compilée HTTPS testée dans Chrome 390×844 et 320×700 : 20 TV, zéro portique, textures 1024×576, aucun chargement de l'ancien atlas flou, chiffres synchronisés au calcul, une seule casse et aucune erreur JS.
- BRAV-M validé en 390×844 et 320×700 : deux motos, perte 14→11, trois chutes, pause et reprise.
- Introduction et finale passées en Chrome local ET HTTPS ; attaques marseillaises passées localement.
- À vérifier sur iPhone physique : netteté perçue et mémoire vidéo.

Prévisualisation HTTPS temporaire : https://discrete-ages-underlying-suggest.trycloudflare.com/convergence-runner-lab/convergence/

# Héros — preuves de livraison du 21 octobre 2026

Prévisualisation vérifiée : https://heros-convergence.72-61-167-161.sslip.io/

PR : https://github.com/cndseo/convergence-runner-lab/pull/20

Notion : https://app.notion.com/p/400397ac627081169e67e15e6d6257d0

- `node-tests.txt` : 84 tests réussis.
- `qa-heroes/results.json` : circuit complet exécuté sur HTTPS, vingt modèles, XP, rechargement, équipement, quotidien.
- `qa-hero-regressions/results.json` : douze quartiers gratuits terminés, cinq pouvoirs, sauvegarde ancienne et backup, comparaison de rendu à 312 silhouettes.
- `qa-hero-release/results.json` : contrôle final du bundle publié, cadrage de Léo avec pancarte, pouvoir via toucher, navigation de résultat à 320 px.
- `qa-player-experience/report.json` : parcours, partage, boutiques et quotidien à 390 × 844 et 320 × 700.
- `qa-human-density/results.json` : densité, protections, patrouilles, douze décors, pause et bornes des instances.
- `qa-heroes/gallery.jpg` : aperçu des vingt adaptations. Les images individuelles sont issues des aperçus 3D réels ; ce ne sont pas des concepts générés. Le cadrage final de Léo est dans `qa-hero-release/leo-320.png`.
- `open-source-research.json` : extraits et métadonnées des dépôts consultés ; les décisions sont dans `prototype/convergence/HEROES_OPEN_SOURCE_2026-10-21.md`.

Environnement : Chrome Windows sur GMK K12, Radeon 780M, dimensions mobiles simulées. Pas d’essai physique iPhone/Safari. Pas de mesure de rétention. Les captures montrent des adaptations fonctionnelles ; la fidélité des visages, carnations et silhouettes aux planches reste un chantier artistique.

Rendu maximal observé dans la même scène : référence 193 appels/484014 triangles ; héros 182 appels/490892 triangles, 12 rigs et 300 instances. Cette comparaison ne constitue pas une mesure de FPS mobile.

Le build signale le bundle JavaScript supérieur à 500 kB : environ 996 kB brut / 284 kB gzip. Ce warning n’empêche pas la compilation. Les modèles sont chargés à la demande et l’atlas supplémentaire pèse 307406 octets. Aucune modification des PNG TV, des systèmes de paiement ou du domaine public.

# TV : promesse exacte — 23 octobre 2026

Base de production : `7bc13af` (comptes en production, descendant de `main 8f8e252`). Branche dédiée : `fix/convergence-tv-contract-20261023`. Aucun fichier des comptes, du cockpit ou des paiements n'est modifié par le correctif.

## Correction

Les PNG et les valeurs du catalogue correspondaient déjà. Les plafonds de 72 manifestants et 48 protections tronquaient leurs promesses : 70 + 10 donnait 72 ; 72 × 2 restait à 72 ; 47 + 21 protections donnait 48. Ils donnent maintenant respectivement **80**, **144** et **68**.

Les ressources réelles ne sont plus limitées par le budget des acteurs. Les acteurs individuels restent limités à 72 et les silhouettes à 312. Les familles sont suivies pour tous les manifestants, même au-delà de ce budget et avant le choix d'un héros. Le feedback indique la famille recrutée. Les munitions GenZ et les charges marseillaises restent inchangées par les TV ordinaires.

Une définition immuable relie identifiant, PNG, empreinte SHA-256, famille, ressource, opération, valeur, conditions et formule. Le rendu et le calcul la résolvent tous deux. Une valeur, un signe ou une famille divergents sont rejetés ; la TV réellement affichée doit porter l'identifiant touché. Aucun PNG modifié, aucun cadre/texte ajouté sur l'image, proportions natives conservées.

Les protections absorbent les malus d'impact selon les règles existantes ; les départs et BRAV-M retirent directement des manifestants. Pourcentage et division arrondissent l'effectif à l'entier inférieur ; les pertes ne passent jamais sous zéro. Le bonus Marseille ajoute une charge, une seule fois, sans lancer l'attaque.

[Tableau complet PNG → effet → résultat](correspondance.md).

## Validation

- 127 tests de régression, dont 6 nouveaux contrats : 560 états pour les 16 TV, combinaisons successives, familles, munitions/réserves inchangées, intégrité des PNG, refus des divergences.
- Chrome mobile 390 × 844 : **240 occurrences**, deux côtés de chaque paire des 12 quartiers ; vrais événements tactiles, choix unique, chiffres HUD et états du moteur vérifiés.
- **32 cas au-delà des anciens plafonds**, plus Marseille et parcours Daily complet.
- Captures de chaque TV avant/après ; contrôle des fichiers PNG réellement chargés et de leurs proportions. Les captures `visual/` corrigent le positionnement du scénario de capture ; `local/results.json` contient les 240 occurrences.
- **48 configurations**, soit 2 834 352 possibilités ternaires prises en compte. Dispositions, patrouilles, effectifs CRS et résistance finale **identiques à la référence** ; parcours gratuits gagnants.
- Daily v4 utilise le même calcul exact côté client et serveur. L'ancien générateur v3 reste disponible pour les références historiques. Les nouvelles routes sont certifiées compatibles avec le stockage de scores existant, sans tronquer les scores.
- Contrôle physique iPhone et écoute humaine non réalisés.

## Publication

Builds Docker sans GitHub Actions, prévisualisation indépendante puis publication Hostinger dans `domains/laconvergence.fr/public_html/jeu`, après les validations. Les assets existants et `cockpit.html` sont préservés ; le nouveau fichier d'entrée est publié en dernier. Sauvegarde des fichiers d'entrée avant remplacement.

La mise à jour serveur porte uniquement sur les quatre modules purs de règles TV/Daily de l'image existante. Identifiants de connexion, comptes Google/e-mail, configuration Stripe, données et code serveur sont conservés. Vérifications et révisions dans `deployment.json` une fois la publication terminée.

# TV physiques sur le parcours — correctif isolé

Demande du propriétaire : rejeter la fenêtre de choix de la PR #26 et toucher directement les PNG présents sur la chaussée. Base inspectée : `1786bbad663b432ce12b79c9454d2a4ba47ce837`. Branche indépendante : `fix/convergence-road-tv-tap-20261021`. Les worktrees existants, dont le dossier principal avec des modifications non enregistrées, ont été préservés.

## Comportement

- Aucun dialogue ni état `tv_choice`. Tap court (320 ms maximum, déplacement maximum 10 pixels CSS), ou clic souris, sur la TV. Le glissement dirige le cortège.
- Projection écran de la géométrie PNG existante, zones tactiles d'au moins 44 pixels quand l'espace écran le permet, séparées au milieu des deux TV. Aucun parcours des 312 silhouettes pour détecter un toucher. Les boutons de l'interface restent prioritaires.
- La première paire non résolue devient interactive jusqu'à 20 mètres, après résolution des rencontres précédentes. Fin stricte à 1 mètre devant le cortège, point d'impact partagé avec le toucher. Un relâchement après ce point ne gagne rien.
- Une seule transition atomique : `approaching → chosen/missed → resolved`. `passed` verrouille immédiatement les deux TV. La destruction ne concerne que la TV choisie ; l'autre devient inactive. Aucun déplacement automatique du joueur vers une voie.
- Choix : casse et son existants, effet exact du PNG immédiatement appliqué. BRAV-M conserve les motos animées ; en campagne la marche continue et le -3 est appliqué une seule fois au toucher. Le fonctionnement Daily antérieur de cette animation reste conservé.
- Paire manquée : les deux TV basculent, choc à l'avant, animation de chute existante, impact sonore, pertes et protections actualisées immédiatement. Message compact en haut ; aucune récompense de TV n'est appliquée.
- Pause, perte de focus, visibilité, annulation du pointeur, multitouch et nouvelle partie annulent le geste en attente. Les TV déjà résolues ne redeviennent jamais sélectionnables.
- Pendant les combats, le masquage historique des panneaux reste en place pour laisser voir les policiers : une TV masquée ne peut pas être touchée. Les TV redeviennent sélectionnables dès la reprise de la marche, y compris pendant la récupération visuelle des policiers. On ne peut pas prendre une récompense située après un barrage avant de l'avoir franchi : ordre identique au simulateur.
- La TV spéciale Marseillais se récupère également au toucher, en réserve, sans activation ni paiement. Elle reste un cadeau facultatif distinct des dix paires ; la manquer ne crée pas une onzième pénalité tactique.

## Difficulté commune au moteur et au simulateur

`pertes = min(12, max(2, ceil(effectif_tactique * 0.08)))`, puis absorption par les protections via `sufferLoss`. Pour une foule déjà vide : 0 dégât supplémentaire. Le plafond tactique existant est 72 ; 312 correspond aux silhouettes affichées. Une foule de 72 unités tactiques reçoit donc 6 impacts. Le barème accepte aussi les exemples 100→8 et 150→12 pour une éventuelle évolution du plafond, sans le modifier ici.

Le calculateur énumère les trois choix à chaque paire, soit **59 049 parcours par quartier**. La certification sur mobile fusionne les états équivalents en conservant exactement leur multiplicité, leurs protections et le nombre de TV manquées. Un test confronte cette méthode à l'énumération exhaustive.

Le réglage des barrages reste celui de la PR #26 pour les parcours attentifs. La preuve publie séparément le taux attentif et les résultats avec 0 à 10 ratés : ne pas confondre ces deux taux. Aucun changement des montants des PNG, des effectifs des patrouilles ni des prix. Les 12 quartiers, 4 graines chacun, restent gagnables gratuitement avec 5 unités de départ, force 1, aucun consommable acheté (2 834 352 parcours comptabilisés). Avec la graine 20261021, trois ratés réduisent le taux de parcours gagnants à environ 2–4 % dans les quartiers 2–12, contre 14–24 % sans raté ; quartier 1 : 11,9 % contre 32,6 %. Ce sont des proportions de parcours théoriques, pas une mesure de réussite de joueurs humains.

## Vérifications

- `npm test` : 101 tests, 101 réussites ; Daily, inventaires, sauvegardes, tarifs, héros et assets inclus.
- `node tools/certify-road-tv.mjs` : 48 configurations certifiées, rapport `docs/reviews/road-tv-20261021/difficulty.json`.
- `node tools/qa-road-tv.mjs` : Chrome 390×844, touches réelles via Playwright, choix gauche/droite, chaussée, glissement aller-retour, double toucher, pertes et protections, derniers manifestants, frontière d'impact, pause/focus/visibilité, combat masqué et reprise, BRAV-M sans pause, sauvegarde/rechargement, souris, Daily et 12 quartiers. Les 12 itinéraires gagnants sont parcourus avec comparaison exacte des survivants avec le simulateur.
- Première passe locale : 12/12 quartiers terminés gratuitement, 0 erreur JavaScript, 0 ressource d'asset en erreur. Avec 312 silhouettes : projection ~0,008 ms par appel ; médiane des frames ~18,2 ms sur Chrome du GMK. Ce n'est pas une mesure sur iPhone physique.
- Captures et rapport de la dernière passe navigateur : `docs/reviews/road-tv-20261021/`.

## Livraison et limites

Prévisualisation distincte prévue : `https://heros-convergence.72-61-167-161.sslip.io/tv-parcours/`. Construction Docker Node 24 sur le VPS, sans réseau dans le conteneur de build, ni GitHub Actions. Dossier propre et URL neuve, sans remplacer les anciennes prévisualisations. `revision.txt` identifie le commit construit. Le script `tools/deploy-road-tv-preview.sh` refuse d'écraser une prévisualisation existante.

La validation sur un iPhone physique et l'écoute réelle restent à faire. Les appels aux sons sont contrôlés automatiquement ; cela ne remplace pas l'écoute sur l'appareil. Les probabilités théoriques ne remplacent pas une session de jeu humaine. Aucun changement de main, de jeu.laconvergence.fr ou de la configuration Stripe.

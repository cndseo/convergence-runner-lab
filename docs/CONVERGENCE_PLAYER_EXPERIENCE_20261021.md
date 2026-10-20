# CONVERGENCE — expérience joueur du 21 octobre 2026

Mission utilisateur : mettre en œuvre l’audit #17 et son contre-audit, en préservant le moteur, les assets et les achats. Les deux textes ont été lus intégralement. Base vérifiée après fetch : `72b56d4`, branche `feature/convergence-genz-gas-shop-20261020`. Worktree isolé : `C:/CITYOS/convergence-player-experience`. Aucun fichier non suivi des autres worktrees n’a été repris ou écrasé.

## Livré

- Générateur de campagne distinct (`campaignPlan.mjs`). Les premières étapes laissent gagner la stratégie intuitive « conserver le plus de manifestants ». Les résistances sont calibrées sur cinq manifestants et force 1, sans achat, puis les améliorations gagnées s’appliquent réellement sans augmenter l’opposition. Un solveur vérifie les routes gagnantes. Les montants imprimés et les PNG TV restent inchangés.
- Sur la seed de référence du niveau 1 : 530 routes gagnantes / 1 024, contre 211 dans l’audit. **Il s’agit de combinatoire, pas d’un taux de victoire de joueurs.** Vérification de 192 combinaisons niveau/seed/améliorations ; les chemins de référence restent gagnants avec les améliorations.
- Démarrage direct ; introduction conservée à la demande. Trois indications contextuelles au premier niveau, gains exacts et effectif avant/après chaque TV, raisons des pertes explicites. HUD : foule, protections, progression vers l’arrivée.
- Trois objectifs facultatifs en rotation sur les quartiers : réunir 30 personnes, recruter 20 protections, arriver avec 15 survivants. Les réussites et meilleurs résultats restent sur l’appareil. Aucun crédit, consommable ou bonus compétitif attribué.
- Carte PNG verticale 720 × 1280 en fin de campagne ou de défi. Partage natif (fichier si accepté), invitation copiable et téléchargement. L’interface distingue partage transmis, annulation et copie ; elle ne prétend pas connaître la publication finale dans l’application choisie.
- Défi d’ami par date UTC et objectif de score déclaré, avec le même parcours quotidien sans avantage payant. Le score de l’ami est explicitement annoncé comme partagé et non certifié. Aucun score de campagne n’est comparé au défi quotidien. Liens dépouillés de paramètres QA, jetons et fragments.
- Texte Count Masters retiré du partage historique ; une copie échouée n’attribue plus Rainbow. Correction du vieil appel à une méthode `floatingText` inexistante dans cette interface.
- Recharge GenZ dirigée vers les deux packs concernés, filtres costumes/renforts/tirs, distinction permanente/consommable et améliorations en pièces du jeu. Prix, SKU, webhooks, inventaires et débit des consommables conservés.
- Mouvement réduit, qualité graphique économe (ratio de pixels 1, ombres désactivées) et pause quand l’onglet passe en arrière-plan.
- Journal local facultatif désactivé par défaut : 200 événements maximum, export volontaire, effacement à la désactivation, aucun appel réseau d’analytics. Pas de token, nom, email ni URL. Événements de parcours, résultat, abandon, partage, boutique, redirection checkout, erreurs catégorisées et classes de temps de frame. La redirection Stripe n’est jamais appelée « paiement confirmé ». Les indicateurs D1/D7 sont locaux à l’appareil et ne constituent pas des cohortes serveur.

## Décisions

1. Corriger l’apprentissage et l’équilibrage avant de rajouter du décor. Aucun remplacement du moteur ni nouvelle dépendance.
2. Isoler entièrement la campagne du générateur v3 quotidien et du replay serveur : pas de migration de scores ni de rééquilibrage compétitif silencieux.
3. Ne pas augmenter la résistance avec les améliorations gagnées. Le joueur doit sentir leur bénéfice.
4. Image légère avant replay vidéo : pas d’enregistrement continu, de capture GPU ou d’encodeur mobile supplémentaire.
5. Aucun partage obligatoire, aucune série punitive ni achat nécessaire. La progression des missions est facultative.
6. Journal local exportable avant collecte distante : il sert aux essais volontaires ; il ne permet pas encore un tableau de rétention de toute la population.

## Validation

- `npm test` : **76/76**, dont commerce/webhooks, conservation et consommation des crédits, bonus TV marseillais, règles quotidiennes, assets, quatre nouveaux tests d’expérience.
- `npm run build` : réussi, avertissement de taille du bundle (>500 kB) présent ; environ 274 kB gzip pour le JavaScript. Pas de promesse de performance sur téléphone physique.
- `tools/qa-player-experience.mjs` : Chrome headless Windows en 390×844 et 320×700 ; vrai glissement tactile, démarrage, boutique ciblée/pause/reprise, niveau 1 entier, progression, échec/reprise, défi entier, partage simulé succès/annulation/copie/échec, invitation valide. Zéro erreur JS et zéro asset manquant. Les dialogues OS de partage sont simulés : validation iOS réelle restante.
- `tools/qa-paris-journey.mjs` : douze quartiers inspectés ; transitions, bonus gratuit unique, contrôle tactile ; niveaux 1 et 12 terminés réellement par simulation de la boucle, avec 29 et 25 survivants. Aucun consommable payant nécessaire. Zéro erreur JS et zéro asset manquant sur le lien HTTPS.
- Les fichiers `src/tactics.mjs`, `src/dailyChallenge.mjs`, `server/` et `public/assets/` ne sont pas modifiés.
- Aucun paiement réel effectué. API publique vérifiée en lecture seule : `ok:true`, `payments:live`.

## Prévisualisation et déploiement

Lien : https://experience-convergence.72-61-167-161.sslip.io/

Prévisualisation isolée sur VPS, paiements réels désactivés ; aucune modification du site public `jeu.laconvergence.fr`. Les sauvegardes de cette origine sont séparées de la production.

Build preview : `VITE_PLAYER_PREVIEW=1 VITE_PARIS_PREVIEW=1 VITE_CONVERGENCE_API='' npm run build -- --base=/ --outDir ../../preview-player-experience`.

Build présent dans `docs/convergence` : API live conservée dans la variable `VITE_CONVERGENCE_API=https://api-convergence.72-61-167-161.sslip.io`, base historique. Ce build n’a pas été publié sur le domaine public ; une publication sur sa racine nécessite de reconstruire avec `--base=/`. Ne jamais publier le build isolé de preview en remplacement de la production.

VPS : `/home/olga/convergence-player-experience-20261021/public`. Conteneur `convergence-player-experience-20261021`, nginx:alpine déjà disponible, réseau `le84500-content_default`, limite 96 Mo / 0,5 CPU, redémarrage automatique. Site noindex. Nouveau bloc Caddy uniquement ; sauvegarde et validation préalables. Le premier rechargement a lu l’ancien inode monté dans le conteneur, produisant une régression temporaire de routage ; le rechargement corrigé via stdin utilise la configuration courante et l’API a été vérifiée saine. Pour les prochaines modifications : `docker exec -i le84500-content-caddy-1 caddy reload --config /dev/stdin --adapter caddyfile < /opt/olga/apps/le84500-content/Caddyfile` ; ne pas recharger aveuglément l’ancienne copie montée. Les routes existantes du fichier courant ont été conservées.

## Restant

- Tests avec de nouveaux joueurs, iPhone/Android physiques, cold start 4G, son réel et partage natif OS.
- Rétention, plaisir, conversion des invitations et performances réelles non mesurés ; aucune amélioration de ces indicateurs n’est revendiquée.
- Tableau de mesure agrégé/collecte consentie distante non développé ; le journal local ne le remplace pas.
- Publication du domaine public non effectuée. Les transactions réelles et la restauration inter-appareils ne sont pas retestées par un nouvel achat.
- Vidéos/replays automatiques et nouvelles scènes de gameplay hors du périmètre de cette livraison.

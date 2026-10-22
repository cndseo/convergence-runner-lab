# Débogage ciblé — 22 octobre 2026

Référence : `main` à `317c3c8c5c9b671e4d92fa040822f52bff8676fb`.
Branche : `fix/convergence-targeted-combat-20261022`.
Quatre modules applicatifs modifiés ; aucun changement de formule tactique, de catalogue, d'achat, de Stripe ou de production.

## Reproductions avant / après

Conditions communes : Chrome 390 × 844, effectif réel 30, force 1, quartier 2, événements antérieurs marqués terminés pour isoler chaque interaction.

| Scénario | Avant, 317c3c8 | Après |
| --- | --- | --- |
| Marseillais, pause après consommation de la charge gratuite, avant retour de la promesse | Charge 1 → 0, attaque annulée, 14 CRS toujours présents à la reprise | Charge 1 → 0, attaque conservée en pause puis animée à la reprise |
| Marseillais, contact à 2,6 s | Animation de choc mais compteur CRS encore à 14 jusqu'à la fin des 9 s | Effectif CRS réel 14 → 0 au contact ; fuite existante conservée jusqu'à la reprise de marche |
| BRAV-M sélectionnés, 20 protections | Effectif 30 → 27 au toucher ; à l'arrivée des motos : pertes 0, aucune chute restante | Effectif 30 pendant l'approche puis 27 au contact ; trois corps renversés, un seul événement, protections inchangées conformément à la règle existante |
| Arithmétique +5 puis −3 | État réel correct 30 → 35 → 32, mais compteur visible 127 → 141 → 133 | Compteur et modèles actifs 30 → 35 → 32 ; densité visuelle conservée |

L'attaque Marseillais normale fonctionnait sur la référence. Le défaut reproduit concerne l'interruption asynchrone par une pause, pas une indisponibilité générale de cette attaque. Le correctif ne touche pas à la consommation serveur : il conserve la validité du même affrontement pendant sa pause. Une nouvelle partie invalide toujours une activation en chargement.

## Causes et comparaison historique

- BRAV-M : `6efc6be` avait déplacé les pertes dans le tap TV et désactivé leur résolution au contact. Comparaison avec `03c569c`, où `applyGate` s'exécutait au contact. La marche reste continue ; un toucher tardif raccourcit l'approche pour conserver l'ordre des événements.
- Compteur : `0e53d58` avait remplacé l'effectif tactique par le nombre de silhouettes. Le calcul réel n'était pas faux ; ses unités ne correspondaient plus au compteur principal. L'effectif réel redevient la valeur du compteur ; les silhouettes restent identiques.
- Marseillais : aucun changement du module entre `deeead2` et la référence. Le contrôle strict `state === fighting` invalidait une activation déjà consommée lors d'une pause. La pause est maintenant reconnue comme une suspension du même combat. Les dégâts et le label sont synchronisés sur l'impact existant.

La sélection de TV reste tactile et sans menu. Seul le malus BRAV-M attend le contact des motos ; les autres effets restent immédiats. Les motos de décor ne deviennent pas des sources de dégâts supplémentaires.

## Validation

- Tests ciblés : **19/19**, dont six nouveaux tests de comportement.
- Suite existante complète `npm test` : **109/109**.
- `qa-targeted-combat.mjs` : **9 scénarios** ; charge gratuite, activation réelle par bouton, animation, pause à deux moments, impact BRAV-M, compteur, échanges CRS avec/sans protections, patrouille et TV manquée.
- Comparaison de l'effectif réel et des modèles actifs avec les fonctions du simulateur, pas seulement du texte affiché.
- `qa-road-tv.mjs`, réutilisé avec `QA_DISTRICTS=2` : 15 contrôles, sauvegarde/rechargement, Daily, tap/glissement, doublons, protections, pause/focus, 312 silhouettes, une route complète. Quartier témoin : **28 survivants côté moteur et simulateur**.
- Aucune erreur JavaScript ni ressource manquante dans ces tests. Pas de campagne de 12 simulations supplémentaires.
- Les captures `before-*` et `after-*` accompagnent les JSON avant/après dans ce dossier.

Commandes (depuis `prototype/convergence`) :

```text
node --test tests/targetedCombat.test.mjs tests/bravmCollision.test.mjs tests/marseilleGift.test.mjs tests/campaignPatrolCombat.test.mjs
node tools/qa-targeted-combat.mjs
npm test
QA_URL=http://127.0.0.1:4722/ QA_DISTRICTS=2 QA_OUTPUT=<dossier> node tools/qa-road-tv.mjs
```

Prévisualisation prévue : https://heros-convergence.72-61-167-161.sslip.io/combat-cible-20261022/
Déploiement : script Docker `tools/deploy-targeted-combat-preview.sh`, révision exacte exposée dans `revision.txt`, sans GitHub Actions ni remplacement d'une URL existante.

Limite de validation : Chrome avec résolution iPhone sur le GMK ; pas de test sur iPhone physique ni d'écoute humaine. Aucun achat réel effectué.

# CONVERGENCE — personnages de référence et renforts marseillais (19/10/2026)

## Assets effectivement intégrés
- `public/assets/characters/spiderman-front.webp` / `spiderman-back.webp` : extractions détourées **du document Spider-Man fourni par l'utilisateur** (non réinterprété). Un manifestant supplémentaire dans la foule utilise le sprite de dos en vue de jeu. La vue de face est affichée dans la boutique. Aucun changement P02.
- `dinosaur-front.webp` / `dinosaur-back.webp` : deux vues du costume de dinosaure orange fourni par l'utilisateur ; effet sprite animé au rythme de la foule.
- `marseille-front.webp` / `marseille-back.webp` : les deux images de foule marseillaise fournies ; six images-sprites de groupe entrent par les côtés, les CRS reculent puis quittent le front au bout de 4,4 secondes.
- Les fichiers sont légers, WebP avec transparence, générés à partir des fichiers utilisateur. Les sprites sont des représentations 2D intégrées dans la scène Three.js ; **ne pas les présenter comme de nouveaux modèles 3D articulés**.

## Boutique
| SKU | Contenu | Prix indicatif |
|---|---|---|
| spiderman | personnage déguisé Spider-Man, visuel | 2,99 € |
| dinosaur | personnage déguisé en dinosaure | 2,99 € |
| marseille1 | 1 intervention marseillaise | 1,99 € |
| marseille3 | 3 interventions | 4,99 € |
| marseille10 | 10 interventions | 12,99 € |

Les produits antérieurs couleurs/ambiances/soutien sont remplacés dans la boutique Stripe préparée. Aucune facturation réelle. Le mode test n'est pas encore connecté sur le compte Stripe Hexamind.

## Fonctionnement des renforts
- Bouton `RENFORT MARSEILLAIS · N` visible uniquement au combat dans la **campagne** si une intervention est disponible.
- Au clic, le client appelle `POST /api/v1/support/consume` avec un jeton joueur et UUID aléatoire (sauf démo locale en prévisualisation). Le serveur retire 1 crédit de manière atomique et idempotente. Sans confirmation serveur, l'attaque réelle ne démarre pas.
- Animation fictive avec six groupes, fumigènes bleu/blanc issus des images, FDO qui se retournent et reculent. Pendant ces secondes, les tirs LBD sont suspendus afin de ne pas ajouter de victimes pendant une cinématique.
- Au terme de l'animation le groupe de CRS est compté comme ayant quitté son front, la partie reprend. Les maths certifiées des portiques sont inchangées. **Le défi quotidien n'autorise ni interventions ni personnages achetés pour modifier le score.**
- Pour tester avant ouverture de Stripe, la boutique permet `TESTER SPIDER-MAN (DÉMO)`, `TESTER DINOSAURE (DÉMO)`, `TESTER UNE SUPER ATTAQUE (DÉMO)`. L'essai de costume dure une seule partie. Ces essais ne débloquent pas d'article dans l'inventaire serveur.

## Sécurité Stripe
- Produits déclarés dans `server/server.mjs`. Catalogue prix en centimes **côté serveur**.
- Achat : Stripe Checkout hébergé, crée une session côté serveur après authentification par jeton aléatoire.
- Attribution : uniquement après webhook signé, `payment_status === paid`, même prix, même devise et même client que la commande. Une session déjà enregistrée ne crédite plus de seconde fois.
- Inventaire et crédits dans SQLite ; consommation `POST /api/v1/support/consume` dans une transaction ; tentative sans crédit renvoie 409, répétition du même UUID n'entraîne pas une double consommation.
- `PAYMENTS_MODE=disabled` : état actuel du GMK. Le serveur refuse de démarrer avec une clé Stripe réelle, même fournie accidentellement. **Aucun produit n'a été créé en mode réel, aucun paiement n'a été encaissé.**

## Contrôles
- `npm test` : 27 tests, 0 échec, dont les preuves mathématiques et les packs 1/3/10 avec webhooks redondants.
- `npm run build` : réussi, WebP intégrés dans `docs/convergence/assets/characters/`.
- `qa-spiderman.mjs` : capture dans le jeu à 390×844 et 320×700 ; modèle source réel, P02 inchangé.
- `qa-costumes-marseille.mjs` : dinosaure et renforts sur deux tailles d'écran ; six sprites, recul FDO, consommation de 1 crédit, reprise, interdit dans daily.
- `qa-daily-commerce.mjs` : défi, score, boutique, prix et paiements inactifs sur 2 tailles.
- Régressions histoire/combat/math : voir résultats `qa-live-math`, `qa-intro-final`, `qa-front-contact`, `qa-combat-voice`.
- Captures sur GMK : `C:\CITYOS\convergence-qa-20261019\spiderman-user-asset\`, `...\costumes-marseille\`.
- Les tests Chrome mobile simulé ne remplacent pas une mesure de fluidité sur iPhone physique.

## Gouvernance et mise en production
- Branche dédiée `feature/convergence-actual-character-assets`. Ne pas écraser le travail parallèle d'Astra (`prototype/convergence/ASSET_CATALOG.md` et `tools/qa-online-leaderboard.mjs`).
- La publication principale GitHub Pages reste inchangée, les nouveautés ne sont disponibles que sur la prévisualisation HTTPS temporaire du GMK.
- **Droits** : l'apparence Spider-Man est associée à une propriété intellectuelle de Marvel/Disney ; l'utiliser dans un prototype à tester ne donne pas le droit de la commercialiser. Obtenir l'autorisation/licence ou faire créer un costume réellement original avant toute vente. Vérifier également les droits sur les images de personnages, marques, voix et les autres références.
- Avant paiements réels : Stripe sandbox, récupération des achats sur plusieurs appareils, remboursements/annulations et révocation des consommables non utilisés, conformité TVA/droit de la consommation et politique de confidentialité.

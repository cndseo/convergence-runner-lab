# CONVERGENCE — Défi quotidien, classement et préparation Stripe (19/10/2026)

## Réalisé
- Défi quotidien déterministe par date UTC, 10 portiques, 5 personnages initiaux, force 1, mêmes calculs pour tous. Le mode histoire et sa cinématique finale restent séparés.
- Record local sauvegardé, interface de victoire/défaite quotidienne, invitation à refaire le même parcours, partage natif WhatsApp/Facebook ou copie d'un texte et d'un lien avec `?daily=AAAA-MM-JJ`.
- API Node 24 + SQLite : profil pseudonyme sans email, score recalculé sur le serveur par les mêmes 10 décisions, meilleurs résultats quotidiens et classement des 20 premiers.
- Catalogue cosmétique 1,99 / 3,99 / 5,99 € ; aucun achat n'améliore la force, la foule initiale ou le classement.
- Intégration Stripe Checkout hébergé : création de session protégée côté serveur et confirmation par événement signé `checkout.session.completed` / `checkout.session.async_payment_succeeded`. Délivrance idempotente en SQLite seulement si paiement indiqué comme `paid`, inventaire vérifié via jeton personnel.
- Stripe reste strictement en mode **paiements désactivés** tant qu'un sandbox Stripe distinct n'est pas disponible. Aucun produit ni paiement réel créé sur le compte Hexamind (compte connecté uniquement en mode réel).
- La page boutique affiche explicitement son état désactivé.

## Tests
- `npm test` : 26/26 réussis, dont mathématiques de centaines de niveaux, classement, tarifs fixes et tests webhook signé via mock Stripe.
- `npm run build` : réussi.
- `node tools/qa-daily-commerce.mjs` : 8 scénarios sur 390×844 et 320×700 (partie, victoire, meilleur score, retour histoire, boutique).
- `node tools/qa-online-ranking.mjs` : démonstration complète sur 2 sessions mobiles : score calculé, publié au serveur HTTPS, récupéré depuis un second navigateur, paiements inactifs.
- Captures et rapports sur GMK : `C:\CITYOS\convergence-qa-20261019\daily-commerce\`, `...\online-ranking\`.
- Les données de test ont été conservées dans une première base séparée. Le service de prévisualisation a été relancé avec `convergence-preview.sqlite`, vide au lancement.

## Infrastructure et confidentialité
- Serveur : `prototype/convergence/server/server.mjs`, écoute sur `127.0.0.1:4319` au GMK K12.
- HTTPS temporaire : `https://alliance-worthy-finance-acceptable.trycloudflare.com` (tunnel Cloudflare, non permanent).
- Page jouable temporaire : `https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/`.
- Environnement de build Vite : `VITE_CONVERGENCE_API` pointe vers l'URL HTTPS de l'API de prévisualisation. Pour tout nouveau déploiement, remplacer par une URL API stable.
- Jeton de joueur aléatoire de 256 bits stocké localement, sans email. La récupération d'achats sur un autre appareil ou après réinitialisation du navigateur exige une identité durable à développer avant vente réelle.
- Le score est recalculé côté serveur, mais les 10 décisions sont publiques : cela ne prouve pas que la partie a été effectivement jouée, et un classement public à grande échelle exigera des protections contre le spam et les faux parcours.
- Les apparences payantes doivent également être associées à un inventaire serveur persistant lorsque le mode de paiement sera activé.
- P02, scènes d'introduction, mathématiques, FDO et travail parallèle d'Astra dans `ASSET_CATALOG.md` préservés.
- Branche : `feature/convergence-daily-commerce-stripe`. Aucun push sur `main` / GitHub Pages public.

## Avant lancement commercial
1. Hébergement HTTPS stable de l'API et base sauvegardée (VPS existant ou autre service validé), avec supervision.
2. Connexion d'un **Stripe sandbox**, passage des cartes de test, webhook et contrôle du retour et de l'inventaire sur deux appareils.
3. Récupération des achats après changement d'appareil, facturation / TVA / mentions légales, politique de confidentialité et consentement nécessaire.
4. Mesures de rétention, limitation des abus, classements modérés. Carte-image partageable et publicité récompensée restent à développer.

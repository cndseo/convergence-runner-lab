# CONVERGENCE — API quotidienne et boutique Stripe

API Node 24 / SQLite avec classement fondé sur le replay serveur des dix portiques.

## Démarrage en local (sans paiements)
```powershell
cd C:\\CITYOS\\convergence-runner-lab\\prototype\\convergence\\server
npm install
$env:PAYMENTS_MODE='disabled'
node server.mjs
```
La santé du serveur est sur `http://127.0.0.1:4319/api/v1/health`.

## Activation des achats en TEST uniquement
Un compte Stripe test ou sandbox doit être disponible et autorisé.
Dans un gestionnaire de secrets sur le serveur, définir :
`STRIPE_SECRET_KEY` (commence par `sk_test_` ou `rk_test_`),
`STRIPE_WEBHOOK_SECRET` (`whsec_`),
`PAYMENTS_MODE=test`, `GAME_URL` et `ALLOWED_ORIGINS`.
Installer un endpoint HTTPS pour `POST /api/v1/shop/stripe-webhook` et s'abonner aux événements
`checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`.
Le code ne délivre un article qu'après un événement payé **et signé**. Le client ne peut pas débloquer un article via `?purchase=returned`.

Le serveur **refuse une clé Stripe réelle** et garde les achats désactivés par défaut.
Ne pas activer les ventes réelles avant tests sandbox, conformité légale et validation du compte destinataire.

## Variables
- `PORT` (défaut 4319), `DB_PATH` (SQLite), `GAME_URL` (URL du jeu), `ALLOWED_ORIGINS` (origines CORS séparées par une virgule).
- `VITE_CONVERGENCE_API` au moment du build Vite pour connecter le classement.

## Intégrité
- Les scores soumis comprennent uniquement dix choix gauche/droite et la date UTC.
- Le backend **recalcule** le score avec `src/dailyChallenge.mjs` et `src/tactics.mjs`, sans utiliser le nombre annoncé par le client.
- L'identité du joueur est un jeton aléatoire local, pas un nom, email ou mot de passe obligatoire.
- Un article est attribué de façon idempotente. Aucun achat n'améliore les performances tactiques.


## Paiements Stripe LIVE - code pret, activation non effectuee

Un serveur API HTTPS permanent (Node >=24, stockage SQLite persistant sauvegarde)
doit etre configure avec ces secrets et variables serveur uniquement :
- STRIPE_SECRET_KEY = cle sk_live_ ou rk_live_ du bon compte
- STRIPE_WEBHOOK_SECRET = secret whsec_ du webhook LIVE
- PAYMENTS_MODE = live
- GAME_URL = https://jeu.laconvergence.fr/
- ALLOWED_ORIGINS = https://jeu.laconvergence.fr
- DB_PATH = chemin de stockage SQLite durable et sauvegarde
- PORT = port interne derriere le reverse proxy HTTPS

Avant le build de la page publique, VITE_CONVERGENCE_API doit contenir
l'URL HTTPS stable de l'API. Le webhook Stripe doit pointer vers
/api/v1/shop/stripe-webhook et etre signe. Les achats ne sont attribues
qu'apres evenement paye et signe.

L'hebergement actuel de jeu.laconvergence.fr est statique chez Hostinger
(public_html/jeu), sans API Node publique detectee. Le mode LIVE ne doit
pas etre active tant que compte, webhooks, stockage, recuperation des
achats et droits commerciaux sur les personnages ne sont pas prets.

Les identifiants historiques genz3/genz12 restent stables pour la
compatibilite, mais octroient maintenant 6 et 24 tirs, aux prix inchanges
de 0,99 EUR et 2,99 EUR.

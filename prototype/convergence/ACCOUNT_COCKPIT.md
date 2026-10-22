# CONVERGENCE — comptes et cockpit autonomes (sans Supabase)

## Architecture retenue
- Node.js 24 + SQLite restent le serveur et la base métier de référence, sur notre VPS.
- Authentification Google par OAuth 2.0 / OpenID Connect, code d'autorisation, state, nonce et PKCE (vérification Google côté serveur).
- Connexion e-mail par lien à usage unique, valable 15 minutes, envoyé en SMTP sécurisé ; jamais de mot de passe.
- Les fournisseurs sont des options interchangeables, pas des gestionnaires de notre base de données.
- Connexion Google/e-mail rattachée à un joueur enregistré dans SQLite et conservant scores, objets achetés, renforts, munitions et progression.
- Invité = jeu gratuit sans compte. Quand la connexion est activée, compte nécessaire avant achat.
- Les sessions sont propres à chaque appareil et révocables. Un compte lié ne peut pas être revendiqué silencieusement par une nouvelle identité.
- Classement du défi quotidien calculé sur le serveur, nom de joueur optionnel.
- Cockpit privé : UID administrateur autorisé sous forme google:<sub> ou email:<adresse>, vérification côté API sur le jeton de session.
- Mesure des joueurs actifs uniquement après consentement. Fenêtre actif = dernière présence durant 90 s, via heartbeat toutes les 30 s, suppression des présences vieilles de 14 jours.
- Revenus estimés par produits et montants catalogues des paiements enregistrés, hors remboursements et frais Stripe.

## Variables publiques, compilation du jeu
VITE_CONVERGENCE_API=https://api.laconvergence.fr

Aucun secret Google, SMTP, Stripe, cookie, JWT ou clé d'administration n'est distribué dans les fichiers JS du jeu.

## Variables de l'API sur VPS uniquement
AUTH_PUBLIC_URL=https://api.laconvergence.fr
GAME_URL=https://jeu.laconvergence.fr/
ALLOWED_ORIGINS=https://jeu.laconvergence.fr
DB_PATH=/chemin/prive/convergence.sqlite
PORT=4319
HOST=127.0.0.1
TRUST_LOCAL_PROXY=1
GOOGLE_CLIENT_ID=<client_id_application_web>
GOOGLE_CLIENT_SECRET=<secret_google>
SMTP_HOST=<smtp>
SMTP_PORT=465
SMTP_USER=<compte>
SMTP_PASS=<secret>
SMTP_FROM=CONVERGENCE <notifications@domaine>
CONVERGENCE_ADMIN_SUBJECTS=google:<sub_du_compte_admin>

Important : la variable GOOGLE_CLIENT_ID est publique chez Google, mais le secret reste exclusivement sur le VPS.
Chez Google Cloud, autoriser exactement https://api.laconvergence.fr/api/v1/auth/google/callback comme URI de redirection.
Configurer HTTPS pour les deux domaines et le reverse proxy API; un certificat valide est impératif.
La variable TRUST_LOCAL_PROXY=1 exige un proxy local de confiance qui transmet X-Real-IP depuis l'adresse client (par ex. Nginx : proxy_set_header X-Real-IP $remote_addr). Interdire l'accès direct au port Node depuis Internet.
L'authentification renvoie le joueur vers jeu.laconvergence.fr via un ticket de connexion éphémère placé dans le fragment URL et consommé via POST une seule fois.
Un lien e-mail arrive également sur le jeu avec un ticket éphémère (usage unique). Le ticket ne contient aucun identifiant privé en clair.

## Sécurité et limites
- Aucun nouveau coût Supabase. Les coûts éventuels SMTP, hébergement, réseau, Apple Developer et Stripe restent distincts.
- Les tickets de connexion sont stockés uniquement sous forme de SHA-256, expirent, et ne sont valides qu'une fois.
- Google : le serveur vérifie signature ID Token, audience, state, nonce, échange de code et PKCE.
- E-mail : anti-flood par adresse et IP de connexion directe, réponse générique pour éviter l'énumération.
- Sessions de jeu : jetons de 256 bits par appareil, expirent après 90 jours et sont révocables individuellement.
- La progression est sauvegardée entre les niveaux. Pas de reprise à la seconde près en pleine course.
- Google et e-mail ne sont pas fusionnés automatiquement s'ils sont associés à des joueurs différents; cette opération devra être explicitement autorisée.
- Apple n'est pas activé : il faut un compte Apple Developer et un flux OAuth vérifié séparément, sans promettre une fonctionnalité non configurée.
- L'API et les services Google/SMTP réels ne peuvent être validés tant que les identifiants VPS/Google/SMTP n'ont pas été configurés et un test effectué sur les domaines.
- Le jeu actuel en production n'a pas été remplacé.
- Sauvegardes chiffrées de SQLite et test de restauration indispensables avant mise en service.
- Modifier uniquement la branche isolée PR #36. Ne pas remplacer le moteur ni écraser le répertoire de build d'un autre agent.

## Tests
Depuis prototype/convergence/server : npm ci
Depuis prototype/convergence : npm ci; npm test; npm run build
Test Chrome (GMK) : node tools/smoke-account-ui.mjs
API : GET /api/v1/health ; GET /api/v1/auth/status ; GET /api/v1/admin/summary (auth).

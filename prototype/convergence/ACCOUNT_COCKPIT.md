# CONVERGENCE — comptes, achats, classements et cockpit

## Réalisé sur branche isolée
- Jeu invité maintenu et sauvegardes locales préservées.
- Connexion Google, Apple et e-mail à usage unique via Supabase Auth et PKCE (inspiré de Frairot, instance indépendante).
- Association du compte à la partie invitée; anciens scores, inventaire, achats et munitions conservés.
- Sessions multidevices avec jetons distincts, révocation de session lors de la déconnexion.
- Sauvegarde cloud de progression avec révision et prévention de régression accidentelle.
- Classement serveur existant conservé et recalcul des résultats.
- Cockpit privé: comptes enregistrés, sessions actives, scores, achats confirmés, revenus bruts, acquisition.
- Mesure de présence facultative uniquement après consentement, à 30 secondes d'intervalle, actif si signal dans les 90 secondes.
- Le journal SQLite ne stocke pas l'adresse IP dans cette fonctionnalité; l'infrastructure d'hébergement peut avoir ses propres logs.

## Configuration externe à faire avant toute activation publique
Créer un projet Supabase dédié CONVERGENCE, distinct de celui de Frairot, après validation des frais éventuels.
Activer Google OAuth, Apple OAuth et les liens e-mail.
Ajouter les redirects autorisés:
https://jeu.laconvergence.fr/
https://jeu.laconvergence.fr/cockpit.html

Variables publiques Vite:
VITE_CONVERGENCE_API=https://API_HTTPS
VITE_CONVERGENCE_SUPABASE_URL=https://PROJET.supabase.co
VITE_CONVERGENCE_SUPABASE_PUBLISHABLE_KEY=<cle publique>

Variables privées du serveur:
SUPABASE_URL=https://PROJET.supabase.co
SUPABASE_PUBLISHABLE_KEY=<cle publique>
CONVERGENCE_ADMIN_SUBJECTS=<UID admin du projet Supabase>
DB_PATH=<chemin persistant de SQLite, sauvegardé>
ALLOWED_ORIGINS=https://jeu.laconvergence.fr
GAME_URL=https://jeu.laconvergence.fr/

Ne jamais mettre les clés service_role, le secret Stripe ou les comptes admin dans le JavaScript public.
Les JWT sont vérifiés par appel au fournisseur d'identité depuis le serveur; le simple ID donné par le client n'est pas accepté.
Le cockpit est une page statique à accès données restreint côté API: le HTML seul ne donne aucune statistique.

## Limites et déploiement
- Le cockpit ne peut afficher des chiffres réels qu'après raccordement de l'API et collecte consentie.
- La reprise concerne la campagne entre les niveaux, pas la position exacte au milieu d'un niveau.
- Google, Apple, e-mail et les achats réels nécessitent des tests externes sur les fournisseurs configurés.
- Achat enregistré = paiement vérifié par webhook signé; le CA affiché est brut sans remboursements ni frais.
- L'API est à déployer derrière HTTPS et SQLite doit être sauvegardé; ne pas déployer avant validation de ces conditions.
- Commandes: npm test; npm run build.
- Ne pas réutiliser l'instance Frairot ni ses données. Les modèles et plateformes sont remplaçables.

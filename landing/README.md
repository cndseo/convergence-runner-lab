# CONVERGENCE — Landing page officielle

Site statique autonome pour https://laconvergence.fr/ et lien de jeu https://jeu.laconvergence.fr/.

## Fichiers

- `assets/hero-desktop.webp` — illustration desktop 16:9 optimisée.
- `assets/hero-mobile.webp` — illustration mobile 9:16 optimisée.
- `index.html`, `style.css`, `robots.txt`, `sitemap.xml`, `assets/icon.svg`.
- Les deux PNG originaux sont conservés dans la bibliothèque /CONVERGENCE.

## Déploiement recommandé

Héberger les fichiers à la racine de laconvergence.fr ; ne pas appliquer l'installation d'un CMS.
Publier le build autonome du jeu sur jeu.laconvergence.fr. Tester HTTPS et www.
DNS constaté avant intervention : Hostinger NS athena/apollo.dns-parking.com,
A racine 2.57.91.91 ; sous-domaine jeu absent. Ne pas supprimer les enregistrements MX/TXT existants.

Le domaine n'est pas encore raccordé : hPanel demande une authentification Google.

## Vérifications

Chrome 1440x900, 390x844, 320x700 : pas de débordement, hero adapté.
Une copie indépendante est exposée temporairement sur GMK via HTTPS.

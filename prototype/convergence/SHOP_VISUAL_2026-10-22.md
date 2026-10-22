# CONVERGENCE — nouvelle boutique visuelle (22 octobre 2026)

## Objectif
Remplacer la présentation générique du panneau « BOUTIQUE » par une identité immédiatement commerciale et plus attractive, fidèle à la maquette approuvée : enseigne jaune, auvent de magasin, onglets colorés, articles illustrés, tarifs plus visibles et appels à l'action lumineux.

## Changements effectivement codés
- Habillage CSS de la seule fenêtre ChallengeHub en mode premium (aucun changement de thème dans Daily, pause ou le jeu).
- Bandeau, pictogramme sac, catégories avec emojis et leurs couleurs, cartes différenciées pour GenZ, Marseille et costumes.
- Illustrations par émojis (et conservation des images de costumes disponibles), montants en évidence, boutons de démonstration et retour revalorisés.
- Classement visuel « GenZ 6 », « GenZ 24 », puis renforts et costumes : les sept produits et leurs identifiants restent identiques.
- Indicateurs des stocks conservés et avis « paiements désactivés » visible.
- Aucun changement des mécanismes de Stripe, des prix, des droits, des consommables ou des achats.
- Écrans testés 390 × 844 et 320 × 700, sans défilement horizontal.

## Vérifications réalisées
- npm test : 101 tests unitaires réussis / 0 échec.
- npm run build : succès.
- node tools/qa-shop-visual.mjs : 7 articles ; ordre des deux offres GenZ ; 4 filtres ; bouton de démo de trois tirs ; fermeture boutique et retour Daily ; tarifs inchangés ; pas d'erreur JS ni de ressource manquante.
- Captures sous docs/reviews/shop-visual-20261022/.

## Limite
Le rendu fait appel à des gradients CSS et des emojis, pas à une image de maquette incrustée (les menus, tarifs et CTA demeurent des éléments interactifs). À vérifier sur iPhone physique.
Publication de prévisualisation isolée et PR en brouillon. Ne pas modifier main, Stripe ou jeu.laconvergence.fr.

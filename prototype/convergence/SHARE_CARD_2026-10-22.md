# CONVERGENCE — Carte de partage illustrée dynamique

## Principe
La photo fournie par l'utilisateur (864 × 1536, ratio 9:16) est conservée comme image de fond sans résultat figé. Asset optimisé WEBP : public/assets/brand/convergence-share-background.webp (864 × 1536, environ 243 Ko).
Le générateur src/resultSharing.mjs produit une image PNG 720 × 1280. Il place les textes dynamiques dans le ciel sombre, sans couper le logo, les personnages ou le bandeau imprimé « REJOINS LE DÉFI DU JOUR ».
Données variables : quartier, niveau, score réel, victoire et meilleur recrutement ; variante défi quotidien avec date.
Aucun nombre n'est imprimé dans le fond. Le fichier partagé reste un PNG autonome et le lien du défi est transmis dans le texte. En cas d'échec de chargement, une composition graphique de secours reste disponible.

## Tests
- Tests unitaires pour Nation 28, Élysée 132, défi quotidien 3, contrôle des valeurs invalides et des URL.
- QA Chrome au format iPhone 390 × 844 : capture PNG 720 × 1280 pour trois résultats ; logo et CTA préservés, score lisible sans empiéter sur les personnages.
- Test intégration du flux existant : partage du défi quotidien et téléchargement de la carte depuis l'écran de victoire.
- Pas de changement aux achats Stripe, aux scores ni aux règles de gameplay.

## Livraison
PR isolée et prévisualisation HTTPS avant fusion. Aucun paiement réel dans la prévisualisation.

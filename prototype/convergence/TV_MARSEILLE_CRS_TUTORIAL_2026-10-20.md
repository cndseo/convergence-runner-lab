# CONVERGENCE — TV marseillaise avant CRS et bouton contextualisé

Date : 20 octobre 2026. Branche `fix/marseille-tv-crs-tutorial-20261020`, parent `79fbc96`.
Travail réalisé exclusivement dans un nouveau worktree indépendant `C:\CITYOS\convergence-marseille-crs-tutorial`, sans toucher aux modifications d'Astra, à `main` ou à la version publique.

## Modifications
- La télévision BFMTV `tv-marseille-attack.png` (PNG original inchangé) n'est plus à six mètres du départ. Son positionnement est dérivé du premier événement CRS certifié : `marseilleBonus.z = firstCRS.z - 4` (niveau 1 actuel : TV z=82, CRS z=86, paire précédente z=78).
- Le cadeau reste **une attaque gratuite en réserve**, sans déclenchement automatique, une fois par partie ; la casse n'affecte pas les dix paires mathématiques.
- À la casse : indication brève « MARSEILLAIS +1 EN RÉSERVE ».
- Le bouton d'attaque n'est visible que si la campagne est en **combat actif**, qu'un adversaire est présent, qu'au moins un crédit est disponible et qu'aucune attaque n'est déjà lancée/en cours de vérification. Il est caché pendant la marche, la pause, après utilisation et en défi quotidien.
- Pendant un affrontement, le bouton de grande taille affiche **« TOUCHE ICI POUR ATTAQUER · MARSEILLAIS · 1 disponible »** sur fond orange contrasté avec clignotement lumineux. L'animation ne change pas ses dimensions, assurant un clic tactile fiable. Accessibilité : focus visible et respect du mode mouvement réduit.
- Les paiements à 2,99 €, les voix, les sprites 2D, la charge BRAV-M, les 16 PNG TV et le solveur ne sont pas modifiés.

## Vérifications
- `npm test` : **55/55 tests réussis** ; `npm run build` : OK.
- Chrome sur version compilée 390 × 844 et 320 × 700 : TV exactement 4 m avant les CRS et 4 m après la paire précédente ; récupération unique sans déclenchement, bouton caché durant la marche, visible + clignotant + actif en combat ; reste dans les dimensions du téléphone ; caché durant pause, revient à la reprise ; caché après consommation, réserve à zéro.
- Animations et audio existants (15 groupes, ~7,18 s), persistance, nouvelle partie, achats additionnels et absence de paiement cadeau testés sur les deux tailles ; aucune erreur JavaScript.
- Régressions : 20 TV, collision unique des bonus, motos BRAV-M (2 motos, 3 pertes) passent les tests Chrome.
- Contrôle physique iPhone restant à réaliser avant fusion. Tunnel HTTPS Cloudflare temporaire.

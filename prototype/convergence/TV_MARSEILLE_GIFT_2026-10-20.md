# CONVERGENCE — TV spéciale Attaque des Marseillais (20 octobre 2026)

## Réalisation vérifiée sur le GMK K12

Branche isolée : `fix/convergence-marseille-bonus-tested-20261020`, basée sur `859a6fc`.
Travail existant d'Astra repris en **copie séparée**, sans toucher à son dossier
`C:\CITYOS\convergence-marseille-tv-reserve`.

- PNG BFMTV « ATTAQUE DES MARSEILLAIS » exact, avec journaliste et émeutiers, intégré dans `public/assets/marseille-bonus/tv-marseille-attack.png`.
- TV placée à `z=6` au niveau 1 campagne, avant les dix paires de TV de choix, sans constituer une onzième porte mathématique.
- Collision avec la TV : **une seule attaque gratuite ajoutée en réserve**, sans animation de charge ni paiement.
- Affichage d'un bouton `MARSEILLAIS · 1 disponible` pendant le parcours, activable uniquement durant les combats.
- Activation manuelle : utilise l'animation et le son préexistants, puis soustrait une unité du même stock partagé que les achats.
- Persistance locale du droit utilisé ; un nouveau départ de partie permet une nouvelle TV. Rechargement de page : pas de cumul ni duplication.
- Synchronisation des achats : les crédits payants restent séparés de l'origine gratuite. Prix catalogue inchangé à **2,99 €** par intervention, sans modification de Stripe ni d'API.
- Pas de TV dans le défi quotidien ; les 16 TV fixes et le générateur certifié ne sont pas modifiés.

## Tests contrôlés
- `npm ci && npm test && npm run build` : **54/54 tests automatiques réussis**, compilation Vite réussie.
- Playwright sur version compilée HTTP, **390 × 844 et 320 × 700** : vrais fichiers PNG HTTP 200, stock à 1 sans déclenchement, pas de paiement, déclenchement manuel en combat (15 acteurs et bande-son 7,18 s), stock à zéro après utilisation, pause/reprise, rechargement navigateur, nouvelle partie, absence de duplications, achats payants préservés. Aucun erreur JavaScript.
- Non-régressions : 20 TV et 16 assets, collisions des choix, animation BRAV-M avec exactement 3 pertes, introduction/finale, renforts 2D, défi quotidien.

## Limites et publication
- Test sur iPhone physique par le propriétaire restant à faire.
- Version publique `main` et branche d'Astra inchangées ; PR en brouillon, sans fusion.
- Prévisualisation HTTPS temporaire dépend du GMK K12 et de son tunnel Cloudflare.

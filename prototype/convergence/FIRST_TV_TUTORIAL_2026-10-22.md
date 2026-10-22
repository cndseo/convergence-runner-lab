# CONVERGENCE — Tuto interactif de la première paire de TV (22 octobre 2026)

## Fonctionnement validé
Pendant **la première paire de TV du quartier 1** uniquement, dès que les deux téléviseurs sont assez proches pour être touchés, le message **🤛 CHOISIS 1 TV 🤜** apparaît directement sur la scène. Un grand bandeau jaune pulsant et deux indicateurs lumineux animés, positionnés selon la projection des vrais écrans 3D, guident le joueur.

- Le tutoriel n'est ni une fenêtre ni un nouveau menu : aucune pause et aucun élément ne capture les touches (`pointer-events:none`).
- Un toucher valide gauche ou droit casse la TV choisie et retire immédiatement les indications.
- Une paire manquée supprime le tutoriel et conserve les pertes de collision existantes.
- Il apparaît une seule fois par nouvelle partie du quartier 1 et n'apparaît ni à partir du deuxième quartier ni en mode Daily.
- Il se masque pendant les menus, l'introduction ou la pause, sans perdre l'état de la première TV. Il réapparaît à la reprise uniquement si la paire est encore sélectionnable.
- Aucun changement des formules mathématiques, du système de TV, des achats Stripe, des protections ou des sauvegardes.

## Réalisation
Module `src/firstTVTutorial.js` branché sur le contrôleur existant `TVChoice`; reset après génération des niveaux et résolution lors du clic ou de l'impact. Styles limités au sélecteur `#first-tv-tutorial`.

## QA
- `npm test` : **101/101 tests unitaires réussis**.
- Build Vite de production avec base `/` réussi.
- Test Chrome tactile 390×844 sur le build : message et halos devant la première TV, absence avant la zone d'interaction, rendu sans débordement, gauche puis droite chacune détruites, disparition après sélection, collision pénalisante inchangée, réinitialisation à nouvelle partie, pas de tutoriel au quartier 2, pause et reprise sans régression ; aucune erreur JS ni ressource manquante.
- Capture de rendu et rapport dans `docs/reviews/first-tv-tutorial-20261022/`.

## Livraison
Branche indépendante. Prévisualisation HTTPS isolée pour confirmation sur iPhone physique ; ni Stripe ni la version publique ne doivent être modifiés avant validation.


## Extension — Recommencer depuis le début
La fenêtre Pause et l'écran de défaite proposent « ↻ RECOMMENCER DEPUIS LE DÉBUT ». Un deuxième appui confirme l'opération. Sur confirmation, la méthode restartCampaignFromBeginning() ramène le quartier et le niveau de campagne à 1, supprime l'état de fin de partie, sauvegarde la position, puis lance automatiquement le prologue d'origine. Le tutoriel de la première TV réapparaît lors du nouveau parcours.

Les achats Stripe, crédits disponibles, profil et XP du héros, améliorations, costumes et pièces gagnées ne sont ni supprimés ni réinitialisés. Seule la progression de campagne et la partie en cours sont recommencées. Le bouton Reprendre annule une confirmation non validée.

### Vérifications supplémentaires
- npm test : 101/101 réussis, build Vite --base / réussi.
- Chrome tactile iPhone 390×844 : retour au niveau 1 depuis quartier 5 via Pause et depuis quartier 8 via l'écran de défaite ; double confirmation, annulation par Reprendre, intro et tutoriel réinitialisés, sauvegarde mise à jour ; pièces, améliorations, XP et clé de propriété test conservés.
- Aucune erreur JavaScript ou ressource manquante. Captures restart-pause-iphone-390.png, restart-confirm-iphone-390.png et rapport restart-results.json.

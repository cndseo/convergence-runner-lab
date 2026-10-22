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

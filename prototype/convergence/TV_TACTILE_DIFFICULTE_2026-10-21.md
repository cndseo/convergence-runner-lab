# CONVERGENCE — Sélection tactile des TV et difficulté rééquilibrée

## Décision validée par le développement du 21 octobre 2026

Dans **la campagne uniquement**, la taille de la foule ne doit jamais décider à la place du joueur. Une paire de TV comporte exactement un choix. La marche se fige environ 6 m avant la paire ; une interface tactile montre les deux **PNG originaux** et attend que le joueur touche une TV. Une seule destruction et un seul effet sont enregistrés, même lorsque la foule occupe toute la chaussée.

Le mode Daily/compétitif conserve la sélection par déplacement latéral, ses règles certifiées et ses scores. Le héros, le vestiaire PNG, Stripe, les packs, la sauvegarde et la gestion des 12 quartiers restent inchangés.

## Recalcul de difficulté commun au jeu et au solveur

- La puissance offensive des manifestants devient max(1, floor(unités tactiques / 8)) × force acquise, contre /7 auparavant.
- La riposte d'un barrage devient max(1, ceil(agents restants / 10)) coups par échange, contre /11 auparavant.
- Une patrouille provoque désormais min(8, max(2, ceil(effectif tactique / 18) + floor((quartier - 1) / 5) + 1)) impacts, absorbés en priorité par les protections.
- Le solveur de campagne utilise exactement les mêmes transitions ; le boss est recherché pour maintenir un taux de routes gagnantes gratuites approprié.
- Cibles de taux de routes gagnantes : environ 32 % au niveau 1, 23 % aux niveaux 2–3, et 17 % aux niveaux suivants. Les valeurs réelles varient avec les choix et les seeds.

L'augmentation ne crée **aucun avantage payant obligatoire** : chaque quartier garde un itinéraire gagnant gratuit. L'intensité réelle sur appareil iPhone physique reste à vérifier.

## QA

- 95/95 tests unitaires.
- Les 12 quartiers terminés en navigateur dans Chrome mobile émulé, 10 choix par quartier, 5 pouvoirs et sauvegardes vérifiés, 312 silhouettes maximum conservées.
- Test tactile : première paire bloquée sans clic, deux images PNG validées, 50 frames sans mouvement ni choix implicite, choix TV droite puis TV gauche, exactement deux résultats et aucune erreur JS.
- Test de combat : 24 → 21 manifestants tactiques à la patrouille, pas de doublon au même passage ; barrage de 14 CRS neutralisé avec de vraies pertes et protections.
- Taux de parcours gagnants mesurés pour un échantillon de 1 024 chemins : niveau 1 32,6 %, niveau 2 21,0 %, niveau 3 23,7 %, niveau 6 17,5 %, niveau 9 16,7 %, niveau 12 13,7 %.
- Captures et rapports de test : docs/reviews/tv-choice-balance-20261021/.

## Sécurité

Branche indépendante fondée sur la PR #25, sans fusion dans main et sans modification du site public ou de Stripe. Les travaux existants sont préservés.

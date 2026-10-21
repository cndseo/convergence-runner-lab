# CONVERGENCE — Patrouilles actives, barrages et difficulté (21/10/2026)

## Décision de gameplay mise en œuvre

Les patrouilles CRS/BAC sur les côtés ne sont plus de simples figurants. Sur les niveaux de campagne, des groupes identifiables se déploient vers le centre de la chaussée, lèvent leurs matraques et retirent effectivement des membres du cortège à leur passage.

La génération de la campagne comporte :
- Niveau 1 : 3 interventions latérales et 2 barrages centraux (apprentissage progressif).
- Niveaux 2 à 12 : **5 interventions latérales et 4 barrages centraux**.
- Barrages centraux : **10 à 14 agents engagés**, visibles en 3D et comptés exactement dans le combat (au lieu des 2–4 agents précédents).
- Patrouilles latérales : de **6 à 12 CRS/BAC par côté**, rendus en instances GPU et dotés d'un mouvement vers le cortège et d'une animation de matraque. Elles ne produisent qu'un événement de contact enregistré par point de passage ; aucune perte répétée au même endroit.
- Les renforts BRAV-M à 2/4/6/8 motos de la PR #24 restent actifs et leur pénalité de TV homologuée (-3) ne change pas.

## Mathématiques partagées entre jeu et vérificateur

**Seules les unités tactiques** sont utilisées pour les pertes. Les silhouettes supplémentaires servent à rendre la foule réellement dense à l'écran ; le compteur affiche leur total.

- Un coup de patrouille provoque un nombre d'impacts : min(6, max(1, ceil(unités tactiques / 18) + floor((quartier - 1) / 5))).
- Les protections absorbent ces impacts d'abord ; les impacts restants retranchent autant de manifestants du cortège.
- Lors d'un échange de barrage, les manifestants neutralisent max(1, floor(effectif tactique / 7)) × force acquise agents, sans dépasser les agents encore en place.
- Lorsque des agents restent engagés après cette réponse, ils infligent max(1, ceil(agents restants / 11)) impacts, absorbés par les protections puis déduits des effectifs.
- Aucun dernier coup des agents lorsque la dernière unité de police du barrage vient d'être neutralisée.
- Les événements de patrouille, les barrages centraux et le front final sont résolus par **les mêmes fonctions mathématiques pures** dans le jeu et dans la preuve du parcours.
- Le mode Daily, ses calculs, son générateur certifié et ses scores restent inchangés.

## Scénarios vérifiés

- 95/95 tests unitaires, dont 4 tests ciblant les pertes, protections, densification et 1024 itinéraires.
- 12/12 quartiers terminés dans Chrome avec la nouvelle logique et les 10 TV d'origine.
- 5 pouvoirs testés ; sauvegardes import/export et restauration préservées ; absence d'erreurs JS et 404 d'assets.
- Test de passage réel en Chrome mobile 390×844 : 24 unités tactiques → 22 après la première patrouille, puis à nouveau 22 en revérifiant le même point ; 3 protections → 1 et aucun manifestant perdu au deuxième contact.
- Barrage de 14 CRS au même niveau : 22 unités avant, 18 après, 14 agents neutralisés avec les règles partagées.
- Jusqu'à 312 silhouettes conservées sans augmentation du plafond.
- Captures et résultats sous docs/reviews/active-patrols-20261021.

## Limites / sécurité

La densité policière est plus importante ; les mesures de FPS et de température sur iPhone physique sont encore indispensables. Un test Chrome sur le GMK ne les remplace pas.
Toutes les modifications concernent la campagne ; Stripe, achats, prix, stock, et site public inchangés.
Cette livraison est une prévisualisation expérimentale sur branche et PR dédiées, sans fusion automatique.

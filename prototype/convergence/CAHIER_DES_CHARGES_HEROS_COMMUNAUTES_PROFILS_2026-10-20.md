# CONVERGENCE — Cahier des charges : héros, communautés, personnages et progression
**Version :** 2026-10-20, fin de séance de conception. **Nature :** décisions de game design / base de préparation des assets — **pas une demande de développement immédiat**.

## 0. Vision générale — VALIDÉE
Le runner mobile CONVERGENCE évolue vers un jeu de progression avec un **héros incarné et personnalisable**, qui guide une foule. On commence avec un groupe homogène de sa famille, puis on recrute progressivement les autres familles : le mélange et l'union des mouvements deviennent l'identité du jeu (« Convergence »).

Conserver le cœur du runner : portails/télévisions bonus, foule qui grossit, affrontements fictifs FDO, progression dans **12 décors de Paris**, jouabilité iPhone. Le système de héros enrichit l'existant sans tout reconstruire.

## 1. Moment du choix du héros — VALIDÉ
- Le **niveau 1 est jouable immédiatement**, sans formulaire ni création de personnage préalable.
- **Après avoir terminé le premier niveau**, proposer un écran narratif de sélection de héros avant la suite de la campagne (niveau 2).
- Étapes d'interface envisagées : **choisir une famille**, puis **choisir un profil** au sein de cette famille.
- Le joueur incarne **un seul héros principal à la fois**, et non plusieurs héros simultanés dans la foule.
- Le héros reste identifiable au milieu d'une foule compacte ; sa tenue et son équipement acquis doivent être visibles en jeu.
- La possibilité de changer de héros, débloquer de nouvelles variantes ou refaire son choix **n'est pas encore arbitrée**.

## 2. Familles et profils — VALIDÉ (nombre de variantes à affiner)
Cinq familles sélectionnables :
1. **GenZ**
2. **Gilets jaunes**
3. **Infirmières / soignants**
4. **Pompiers**
5. **Lycéens**

Le joueur a demandé **3 ou 4 profils distincts par famille**. **Cible de travail pour la phase de création : 4 profils par famille, soit 20 profils** au total ; la validation finale des silhouettes et des variantes est à effectuer ensemble. Chaque profil doit être un personnage reconnaissable, pas un simple échange de couleur : silhouette, visage, morphologie, coiffure, vêtements, chaussures, équipement de base et animation peuvent varier. Tous les profils d'une même famille partagent l'identité du groupe et un socle de capacités de famille.

## 3. Départ communautaire puis recrutement mixte — VALIDÉ
- Dès que le joueur a son héros (à partir du niveau 2), **sa foule initiale contient exclusivement des membres de la même famille que son héros**, outre le héros lui-même.
- **Tous les héros commencent avec le même effectif** ; aucune famille n'est privilégiée au départ.
- Pendant le runner, les télévisions/portails de bonus recrutent **visuellement des membres identifiables des autres familles** (ainsi que potentiellement de la famille de départ).
- Chaque nouvelle famille rejoint réellement le cortège, identifiable par les tenues et silhouettes.
- La **composition** de la foule compte autant que le nombre total. La progression doit faire passer d'une petite communauté homogène à un cortège mêlant les cinq familles.

## 4. Règle x2 de densité — VALIDÉE EN GAME DESIGN
Dernière décision de la séance : **doubler le nombre de membres par communauté**, au départ et dans les recrutements concernés.
- Exemple convenu : base initiale **5 → 10 membres** de sa famille **+ 1 héros = 11 personnages** à l'entrée du niveau 2.
- Bonus de recrutement illustratifs doublés : **+12 Gilets jaunes → +24** ; **+6 infirmières → +12** ; **+8 pompiers → +16** ; **+10 lycéens → +20**.
- Exemple complet héros GenZ : 10 GenZ + héros (11), puis 24 GJ, 12 infirmières, 16 pompiers, 20 lycéens = **83 individus**.
- Ces chiffres de bonus sont des **exemples de design**, PAS une modification déjà validée des opérations des 16 TV PNG actuelles. La traduction en jeu devra préserver la cohérence mathématique des portails, les règles d'équilibrage, les sauvegardes et les preuves de niveaux réalisables. Aucun compteur fictif.
- **La densité à l'écran doit suivre l'effectif réel** : formation plus compacte, agrandissement lisible, arrivée visible des recrues, performances iPhone préservées (LOD, instancing, personnages simplifiés à distance).
- Ambition à terme : pouvoir atteindre **plusieurs centaines** de manifestants, sous réserve des performances et de l'équilibrage.

## 5. Héros actif et progression — VALIDÉ AU NIVEAU CONCEPTUEL
- **Option choisie par l'utilisateur : le véritable héros avec capacités spéciales activables**, pas seulement le leader esthétique.
- Le héros gagne de l'**expérience (XP)** en jouant, progresse et peut acquérir **accessoires, équipements de protection et d'attaque adaptés à sa famille**, à gagner en jeu ou acheter.
- Chaque famille doit offrir une façon de jouer distincte. Les accessoires acquis doivent personnaliser visuellement le héros.
- Garder une interaction tactile simple ; proposer un pouvoir principal activable sans surcharge de boutons.
- Les détails XP, niveaux, coûts, durée/recharge des pouvoirs, effets précis des équipements et modèle économique sont à définir avant développement.

### Capacités envisagées — PROPOSITIONS, NON ENCORE VALIDÉES À L'UNITÉ
- GenZ : mobilité/sprint collectif ; possibilité d'un tir pyrotechnique **strictement fictif et arcade**, déjà traité comme consommable distinct dans CONVERGENCE.
- Gilets jaunes : endurance/résistance collective.
- Infirmières : soins collectifs et atténuation des effets des gaz.
- Pompiers : protection temporaire de la foule contre fumées/obstacles.
- Lycéens : mobilisation et recrutement collectif.

Ces idées sont une **orientation de conception**, non des spécifications techniques figées. Les lycéens restent dans des compétences de mobilisation/soutien, sans armement offensif à leur attribuer.

### Capacités collectives et synergies — À DISCUTER
Concept proposé, pas encore tranché : certaines combinaisons de familles recrutées débloquent des effets collectifs ; la présence des cinq familles pourrait déclencher une **« Convergence totale »**. Proposition d'une jauge de **Détermination** pour la capacité du héros. Le mode hybride (bonus passifs de foule + contrôle direct du héros) a été recommandé, mais **n'est pas une décision explicite de l'utilisateur**.

## 6. Économie et équité — ORIENTATION À FINALISER
- Équipement gagné **en jouant** ou obtenu par achat : principe souhaité.
- Éviter qu'un paiement soit obligatoire pour avancer ; ne pas déséquilibrer artificiellement les niveaux payants/gratuits.
- Personnages, accessoires, packs de munitions et renforts existants doivent coexister sans double comptabilisation.
- Tarifs validés ailleurs pour les tirs GenZ : **6 tirs à 0,99 € ; 24 tirs à 2,99 €**, sous réserve de l'état réel des paiements Stripe lors de la mise en production. Le présent document **ne demande pas l'activation de Stripe**.

## 7. Expérience utilisateur souhaitée
1. Jouer au niveau 1 sans attendre.
2. Fin du niveau 1 : célébration et proposition de **choix du héros**.
3. Choisir une des cinq familles ; découvrir les variantes de la famille ; sélectionner un héros unique.
4. Début niveau 2 : 10 camarades exclusivement de la famille choisie, plus le héros.
5. Récolter des bonus qui intègrent les autres familles, avec effectifs x2 et foule visuellement plus dense.
6. Déclencher la capacité du héros ; gagner XP et équipements ; poursuivre la progression dans les 12 quartiers.
7. Retrouver son héros et sa progression lors des sessions suivantes. Les règles précises de persistance de la foule et de changement de héros restent à définir.

## 8. Contraintes de réalisation future
- Ne pas écraser les versions approuvées ni le travail d'autres agents.
- Conserver les **12 décors parisiens** et la progression existante ; ne pas réécrire le moteur Three.js.
- Ne pas toucher aux PNG originaux des bonus, aux calculs certifiés, aux achats/renforts existants sans besoin démontré.
- Sauvegarder le héros choisi, ses XP, son apparence et son équipement ; prévoir la migration depuis les sauvegardes antérieures.
- Séparer la **quantité réelle** des manifestants, la **répartition par famille** et les représentations 3D optimisées.
- Vérifier sur Chrome iPhone/mobile les animations, les performances et l'ergonomie.
- Le choix et la progression doivent fonctionner sans nécessité d'achat.

## 9. PROCHAINE PHASE — CRÉATION DES PROFILS VISUELS (PAS ENCORE LANCÉE)
La prochaine séance sert à **concevoir et générer les variantes des personnages**. Base : **5 familles × 4 profils = 20 profils de travail**.

Pour chaque profil, préparer progressivement une fiche :
- famille / identifiant stable / nom provisoire ;
- sexe ou présentation, âge approprié (les lycéens sont mineurs pour certains profils) ;
- silhouette, traits, coiffure, expression, diversité non caricaturale ;
- vêtements et code couleur de famille ;
- accessoires de base et emplacements futurs d'équipement ;
- vues 3/4 avant, face, dos, idéalement profil pour intégrer le personnage 3D ;
- lisibilité à petite taille sur un écran vertical, posture et animation distinctives ;
- cohérence artistique avec le jeu et les ressources 3D/2D existantes ;
- possibilité de fournir ensuite les assets PNG transparents/3D optimisés, mais pas de génération automatique avant cadrage visuel.

**Points à arbitrer avec l'utilisateur pendant cette phase** : apparence générale (semi-réaliste/stylisée), identité de chaque variante, rôle précis des profils d'une famille, degré de personnalisation, possibilité de changer de héros et détails des capacités/équipements.

## 10. Statut et source de vérité
**Décisions validées par la discussion** : sélection après niveau 1 ; héros unique activable ; cinq familles ; groupe de départ homogène ; recrutement progressif des autres familles ; règle x2 ; principe d'évolution et d'équipement gagné/acheté ; densité visible.

**Propositions non validées définitivement** : 4 au lieu de 3 profils par famille ; compétences chiffrées ; synergies ; jauge Détermination ; progression inter-niveaux détaillée ; échange de héros ; catalogue/prix d'équipement ; rééquilibrage effectif des TV.

**Statut : document de conception enregistré, en attente de création des 20 profils visuels. AUCUNE modification du gameplay ou des fichiers d'assets n'est demandée par ce document.**

# Héros et communautés — livraison de prévisualisation

Branche : `feature/convergence-heroes-20261021`. Worktree indépendant : `C:/CITYOS/convergence-heroes`.

## Circuit livré

Le premier niveau reste immédiatement jouable avec P02. Après la victoire, le bouton suivant ouvre un choix entre cinq communautés et quatre profils chacune. Chaque profil dispose d’un aperçu 3D animé, orientable au doigt. Une confirmation enregistre l’unique héros. Un ancien joueur déjà au-delà de Nation choisit son héros au prochain départ sans perdre sa progression.

À partir du niveau 2, la base gratuite est de **10 membres de la communauté + le héros = 11**. Les améliorations de foule déjà acquises restent ajoutées : un ancien bonus de neuf personnes donne donc 20 au départ. Les niveaux 1 et quotidien gardent leur base précédente.

Le tableau `roster` contient les membres réels. Son total suit exactement les gains et pertes du moteur. Les recrutements explicitement étiquetés conservent leur famille. Le recrutement générique accueille une famille absente ; le ×2 et le +50 % reproduisent la composition existante, dans la limite de 72. Le héros reste le premier membre, jusqu’à disparition complète du groupe. Les silhouettes de densification et les accompagnants liés aux protections restent visuels : ils n’ajoutent ni points, ni dégâts, ni membres logiques.

**Les PNG et les calculs TV sont inchangés.** +6 GenZ reste +6, +4 pompiers reste +4, +3 soignants reste +3 et +5 gilets reste +5. Les exemples de recrutement doublé du cahier des charges ne deviennent pas une multiplication cachée. Le doublement est réalisé par la TV ×2 certifiée.

## Progression et décisions provisoires

`heroRules.mjs` centralise le barème d’essai : 3 XP par TV, 30 XP par victoire, 120 XP par niveau, plafond de niveau 30. L’XP est accordée une fois par parcours terminé, y compris les TV déjà franchies en cas de défaite. Ni le quotidien ni les raccourcis de quartiers ne rapportent cette XP. Aucun achat n’est nécessaire.

Le vestiaire débloque gratuitement le brassard au niveau 2, le sac réfléchissant au niveau 3 et le foulard au niveau 4. Ces objets sont des géométries attachées aux os du personnage et apparaissent dans le parcours. Les emplacements et prérequis sont déclaratifs, sans vingt implémentations distinctes.

Les pouvoirs sont **expérimentaux**, activés uniquement dans une compilation avec `VITE_HERO_LAB=1`. Une charge par parcours, durée de six secondes pour les effets temporaires : GenZ accélère la marche ; Gilets ignore le ralentissement LBD ; Soignants dissipe les nuages présents ; Pompiers ignore le ralentissement du gaz ; Lycéens annonce les résultats de la prochaine paire de TV. Aucun armement n’est ajouté aux lycéens. Aucun pouvoir ne change les calculs des TV ni le défi quotidien. Ces choix ne valent pas validation définitive de l’équilibrage.

## Sauvegarde et achats

La clé séparée `convergence_hero_v1` conserve identité, XP, équipement et identifiants des derniers parcours réglés. Une copie précédente est gardée dans `_backup`. Validation des identités et équipements, restauration après JSON corrompu, export/import JSON et message explicite si le stockage échoue. L’import ne permet pas de changer un héros déjà choisi. La sauvegarde reste locale à l’origine du site : la prévisualisation possède donc son propre profil. Pas de compte ou de synchronisation distante ajoutés.

Les clés historiques de campagne, inventaire, crédits et achats ne sont pas migrées ni remplacées. Les costumes achetés restent disponibles sur leur acteur existant. Aucun changement Stripe, aucun déploiement du domaine public, aucune fusion main.

## État artistique réel

Les vingt profils sont disponibles comme **adaptations 3D fonctionnelles**, assemblées à partir des GLB existants, de deux animations de marche et de recettes d’habillement. Ce ne sont pas vingt nouvelles sculptures fidèles des planches, ni des images collées devant un modèle. Les visages, âges apparents, carnations et certaines silhouettes ne reproduisent pas encore précisément les références. En particulier, une adaptation telle qu’Amina ne constitue pas une reproduction validée de sa fiche. Les planches restent la cible de production artistique.

- GenZ : Léa, Emma, Kay, Noah.
- Gilets jaunes : Thomas, Marcel, Sophie, Nadia.
- Soignants : Lucas, Amina, Yann, Carine.
- Pompiers : Hugo, Chloé, Pierre, Samir.
- Lycéens : Julie, Mathis, Léo, Manon.

## Rendu et fabrication

Three.js natif : GLTFLoader + MeshoptDecoder, SkeletonUtils.clone, AnimationMixer et InstancedMesh. Aucune dépendance de jeu supplémentaire. Un héros détaillé et au maximum douze personnages animés sur écran étroit, vingt sur écran large ; le reste utilise un atlas animé. La densification précédente, les patrouilles BAC/CRS/BRAV-M et les douze quartiers sont conservés.

`tools/bake-heroes.html` et `.mjs` produisent un atlas WebP de **20 profils × 12 poses**, 1536 × 3840 pixels, donc sous 4096 pixels par dimension. Les lignes sont groupées par communauté. L’ancien atlas reste utilisé au niveau 1, dans le quotidien et pour les présences de rue. Les shaders distinguent explicitement les deux nombres de lignes dans leur clé de cache. Les GLB et textures source sont réutilisés ; les accessoires temporaires et squelettes clonés sont libérés. Le vestiaire utilise un seul contexte temporaire, détruit à la fermeture ; le rendu du jeu est suspendu pendant son affichage.

Le bouton de portrait exporte le rendu 3D sélectionné en PNG. Les portraits ne sont pas encore des cartes sociales composées avec statistiques.

## Vérification reproductible

```powershell
npm test
$env:VITE_PLAYER_PREVIEW='1'; $env:VITE_PARIS_PREVIEW='1'; $env:VITE_HERO_LAB='1'
npm run dev -- --host 127.0.0.1 --port 4674 --strictPort
node tools/bake-heroes.mjs
$env:QA_URL='http://127.0.0.1:4674/'
node tools/qa-heroes.mjs
node tools/qa-hero-regressions.mjs
node tools/qa-player-experience.mjs
node tools/qa-human-density.mjs
```

Les suites Chrome isolent les appels API : aucun achat, joueur ou score réel créé. `qa-heroes` couvre le circuit réel Nation → choix → deux victoires → équipement → rechargement, les vingt rigs, le quotidien et 312 silhouettes. `qa-hero-regressions` couvre les douze parcours complets gratuits, les cinq pouvoirs, les anciennes sauvegardes, les imports et le rendu maximal. `qa-player-experience` vérifie notamment les interfaces 390 × 844 et 320 × 700. Les rapports et captures de livraison sont conservés dans `docs/reviews/heroes-20261021/`.

Les essais utilisent Chrome sur le GMK Windows avec dimensions mobiles. Ils ne constituent pas une mesure sur iPhone/Safari ou un smartphone physique. Aucune amélioration de rétention n’est prétendue. La sculpture fidèle, des expressions/animations spécifiques et la calibration auprès de joueurs restent à réaliser.

# CONVERGENCE — renforts marseillais 2D

Livraison du 20 octobre 2026, GMK K12 Windows 11, Chrome.
Base : b660df3, branche de correction : fix/marseille-premium-2d.
Copie isolée : C:\CITYOS\convergence-marseille-2d.
Le dépôt initial et ses deux modifications non committées ont été conservés.

## Résultat

15 groupes 2D, cinq par entrée : gauche, droite et fond. Les images face/dos fournies
sont réutilisées. Un atlas transparent de 4 poses de course par angle trois-quarts
complète les entrées latérales ; le miroir choisit gauche/droite selon la vitesse réelle.
Les vues de face/dos utilisent une déformation locale des jambes/bras ; les changements
de direction sont fondus sur 200 ms. Les pieds sont recalés sur la dernière ligne
opaque de chaque texture, avec ombres de contact.

Trajectoires continues, départs, tailles et phases de course distincts. Fumée bleu/blanc
et impulsion légère de caméra. Les vrais CRS sont détachés de leur formation, réagissent
par vagues et courent jusqu'à sortir du champ. Leur suppression n'intervient qu'après
la fuite ; aucun rétrécissement de personnages. Les groupes sortent à des moments différents.
Durée : 9 secondes, puis reprise du déplacement habituel.

La pause conserve l'attaque ; les doubles clics restent bloqués. Une charge par attaque.
Un changement de partie pendant le chargement annule la demande avant consommation.

## Périmètre conservé

Sources et assets de P02, Spider-Man et dinosaure 3D inchangés. Introduction, cible finale,
règles de combat, sons, solveur, dix niveaux, défi quotidien, serveur de classement et
serveur Stripe inchangés. Aucun renfort en mode quotidien. Prix : 199/199/299/897/2990 centimes.
Paiements désactivés dans cette prévisualisation, confirmé dans Chrome.

Une correction isolée du bouton de démonstration des costumes réinitialise son indicateur
de démonstration consommée lorsqu'une nouvelle démonstration est explicitement choisie.
Le défaut préexistant empêchait le deuxième costume d'apparaître après un premier essai.
Les modèles, tenues et droits d'inventaire ne changent pas.

## Vérifications

- npm test : 34 tests réussis. Inclut 800 niveaux générés, certification des dix niveaux
  de campagne et au-delà, prix, inventaire, idempotence des charges, protection du défi quotidien.
- npm run build : réussi. Avertissement Vite sur la taille du bundle conservé.
- Chrome GMK en 390 × 844 et 320 × 700 : 11 captures par format, entre 0,5 et 9,7 secondes.
- Arrivées des trois directions, quatre familles de vues et miroir gauche/droite,
  recul décalé des CRS, sortie du champ avant suppression, fin et reprise.
- Un appel de consommation malgré le double déclenchement ; aucun appel en mode quotidien.
- Pause/reprise ; annulation pendant le chargement sans perte de charge.
- Spider-Man : 31 maillages 3D ; dinosaure : 65, dont la queue ; textures fournies conservées.
  P02 reste le personnage principal approuvé.
- Parcours du défi quotidien terminé, score local cohérent, retour à la campagne,
  cinq prix exacts et boutons d'achat désactivés, aux deux tailles.
- Introduction avec voix, fuite, verrou de la finale, poursuite/capture finale et rejouer la campagne.
- Aucune erreur JavaScript ni ressource HTTP en échec lors des parcours HTTPS.

Mesure de la boucle réelle Chrome GMK au format 390 × 844 : médiane 31,2 ms avant/après ;
95e percentile 31,6/31,7 ms. Pic observé : 432 → 376 appels de dessin,
250 617 → 179 239 triangles. Cette comparaison n'est pas une mesure sur iPhone physique.
La vidéo et les captures documentent le rendu ; une appréciation artistique reste subjective.

## Reproduction

Depuis prototype/convergence :
npm test
npm run build
node tools/qa-costumes-marseille.mjs

QA_URL sélectionne la prévisualisation ; QA_DIR sélectionne la sortie des captures de la ruée.
Les tests nécessitent Chrome installé à son chemin Windows habituel et playwright-core.

Prévisualisation locale : port 4324. La variable CONVERGENCE_PREVIEW_HOST autorise seulement
l'hôte du tunnel choisi, sans désactiver la protection de Vite.
HTTPS vérifié : https://fire-chat-likewise-convertible.trycloudflare.com/convergence-runner-lab/convergence/

Ce tunnel temporaire exige que le GMK, Vite et cloudflared restent actifs.
Aucune fusion dans main et aucune publication sur GitHub Pages.
Les preuves sélectionnées sont dans qa/marseille-2d-2026-10-20/.

## Nouvel atlas

public/assets/characters/marseille-quarter-run.webp : 1536 × 1024, RGBA, 413 976 octets.
Créé avec l'outil intégré de génération d'images, à partir des deux références existantes,
puis normalisé en WebP pour l'intégration. Les originaux front/back ne sont pas remplacés.
Grille : quatre colonnes et deux rangées, trois personnages par cellule, quatre phases
de course ; première rangée trois-quarts face vers la droite, seconde dos vers la gauche.
Les autres côtés sont obtenus par miroir contrôlé par la trajectoire.

Consigne de création : reproduire le style des références face/dos, hoodies noirs/gris,
écharpes bleu-blanc, sacs, un gilet jaune, jean, chaussures détaillées ; groupes de trois
adultes entiers, quatre phases alternées gauche/contact, passage, droite/contact, passage,
angles trois-quarts réellement distincts ; fond transparent, sans texte, sol ni fumée.

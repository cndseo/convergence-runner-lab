# Reprise artistique des héros — 21 octobre 2026

Branche : `feature/convergence-hero-fidelity-20261021`, issue de `2fce8ca` (PR #20). Aucun travail concurrent écrasé. Cette livraison est une **reprise intermédiaire des adaptations**, pas une validation de reproductions fidèles des vingt visages.

## Réalisé

- Une direction artistique explicite pour les 20 profils, transcrite depuis les cinq planches fournies : carnations, cheveux, volumes, couleurs et équipement distinctifs.
- Matériaux de peau appliqués aux visages et mains, conservation des détails des textures. Correction notamment d’Amina et du modèle de base de Mathis. Coiffures complémentaires et coloration des cheveux ; variation des mâchoires, joues, nez et lèvres.
- Volumes des vêtements ajustés dans le repère des os au repos : silhouette plus pleine pour Amina, épaules plus fortes pour les profils athlétiques, pantalons plus amples pour GenZ et Lycéens.
- Vestes à panneaux colorés et sous-couches, poches cargo, sacs et accessoires. Carnets de Julie et Léo (retrait de la pancarte de Léo), écouteurs au cou de Mathis et Léo, brancard replié pour Yann, gants bleus des soignants, sac de hanche de Carine.
- Casques à la main pour Hugo, Chloé et Pierre ; casque porté pour Samir. Bouteilles d’air jaunes et harnais. Chloé utilise un visage découvert.
- Vue rapprochée du visage accessible par un vrai bouton, retour à la silhouette, éclairage et exposition cohérents avec la revue artistique.
- Atlas de foule régénéré : vingt profils × douze poses. Les nouvelles apparences sont également visibles dans la foule éloignée.

## Choix techniques

Le squelette, l’animation Walk, le chargement Meshopt et les modèles GLB validés restent la base. Aucun nouveau moteur, service payant, dépendance de production ou génération distante n’a été ajouté. Les géométries et matériaux des sources ne sont pas modifiés : caches séparés par profil, accessoires regroupés par os, atlas pour les silhouettes éloignées. Les identifiants de sauvegarde restent stables.

Une première déformation par inversion des matrices de skinning mélangées provoquait des pointes aux articulations ; elle a été remplacée pour les vêtements par une modification de la section dans l’espace de l’os au repos. Les normales d’origine du visage sont conservées pour éviter des coutures aux yeux et à la bouche. Les essais de chaussures superposées et de barbe volumétrique grossière ont été écartés après inspection visuelle.

Les règles, 12 quartiers, protections, TV PNG, pouvoirs, achats, crédits, inventaires, XP et défi quotidien ne sont pas modifiés. Le budget de personnages animés et le plafond de 312 silhouettes sont conservés.

## Vérification

Les preuves sont dans `docs/reviews/hero-art-20261021` : compilation, tests, parcours et images. La revue capture chaque personnage de face, de profil, de dos et en gros plan ; le test d’interface parcourt les vingt profils et vérifie le bouton de zoom. Les tests de progression couvrent la sélection après le niveau 1, les 11 membres au niveau 2, l’XP et l’équipement sauvegardé, les douze parcours gratuits et l’isolation du défi quotidien.

Les mesures de rendu proviennent de Chrome sur le GMK K12 avec une fenêtre mobile. **Elles ne constituent pas une mesure de fluidité sur téléphone physique.**

## Limites artistiques à conserver visibles

Les bases restent reconnaissables : coupes des vestes/blouses, chaussures et certains cheveux viennent encore des GLB d’origine. Les ressemblances faciales, âges et silhouettes des planches ne sont donc pas reproduits exactement. Les microdétails, tatouages de Carine et expressions spécifiques ne sont pas livrés. La version doit être présentée comme une étape de reprise, jamais comme vingt sculptures finales approuvées. Une sculpture individuelle et des textures propres aux vingt personnages restent nécessaires pour atteindre cette fidélité.

## Prévisualisation isolée

https://heros-convergence.72-61-167-161.sslip.io/fidelite/

Publication dans un sous-répertoire de la prévisualisation existante ; aucun changement du site public, du serveur de paiement ou de la configuration du proxy. Aucun merge dans `main`.

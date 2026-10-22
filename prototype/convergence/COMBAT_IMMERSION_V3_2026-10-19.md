# CONVERGENCE — immersion des combats v3 (19 octobre 2026)

## Modifications intégrées sur GMK K12

- **CRS qui tombent avec leur modèle original** : lorsqu'un groupe perd un agent, le même objet Three.js est détaché de sa formation, bascule progressivement, reste brièvement au sol et est retiré. Tenue, casque, équipement et bouclier sont conservés pendant la chute. Aucune substitution par un mannequin géométrique.
- **Compte et formation cohérents** : les petits groupes montrent désormais exactement le nombre initial de CRS du moteur tactique (au lieu de 16 policiers pour un front de 6). Les grands groupes et le boss conservent un plafond de modèles pour les performances mobiles ; le nombre du boss est sa résistance tactique, représentée visuellement par une formation plus réduite.
- **Réactions liées aux vrais échanges** : `CombatChoreography.onExchange({policeLost, protestersLost, blocked})` reçoit les pertes effectives et les protections absorbées. Les personnages survivants réagissent ; P02 (index 0) reste hors du système de poses procédurales.
- **Factions** : pompiers qui se raidissent sous la poussée, infirmières qui réagissent à une perte avec un geste de secours ; aucune guérison ni attaque supplémentaire n'est injectée dans les mathématiques.
- **Gen Z** : les projectiles pyrotechniques fictifs trouvent désormais le groupe de CRS de l'affrontement à courte distance. Effet purement visuel, pas de dégâts ajoutés.
- **Cadrage mobile** : la caméra passe progressivement à un angle 3/4 surélevé pour montrer les deux lignes ; les manifestants sont légèrement reculés visuellement pendant le combat, puis reviennent en place sans incidence sur les collisions.
- **Portiques** : les grandes enseignes deviennent invisibles pendant les affrontements afin de ne pas obstruer les personnages ou les effets LBD. Les données de portiques ne sont pas supprimées.
- **Compteurs** : étiquette locale des CRS déplacée sur le côté et réduite, barre du boss conservée. La formation du boss et le fourgon restent visibles pendant les échanges.

## Contraintes préservées

- Moteur Three.js et architecture existants.
- P02 inchangé (personnage et tenue), aucun nouvel asset externe.
- Aucun changement dans `tactics.mjs` : 1 024 parcours, pertes, santé du boss et chemins gagnants certifiés inchangés.
- Enregistrement « Pourquoi tu me frappe » joué sans interrompre la scène avant le délai minimum.
- Travail d'un autre agent dans `ASSET_CATALOG.md` exclu du commit.
- Branche dédiée locale `feature/convergence-combat-immersion-v3`. GitHub Pages public non modifié.

## Vérifications effectuées

- `npm test` : 11/11 tests, dont certification des parcours de niveaux.
- `npm run build` : réussi.
- `qa-crs-visual.mjs` : chute du personnage *d'origine*, retraite progressive de 6 à 3, 1, 0 CRS, animation puis nettoyage ; boss et fourgon conservés.
- `qa-combat-immersion.mjs` : caméra, P02 inchangé, infirmière visible, Gen Z tir en combat, vrais modèles de CRS au sol, retour à la marche après au moins 9,2 s.
- `qa-live-math.mjs` : victoire et défaite réelles en traversant les portiques et en faisant les vrais combats (niveaux 1, 2, 10, 30).
- `qa-combat-voice.mjs` : lecture son, pause, reprise, arrêt à la fin de l'affrontement.
- `qa-visual-bonus.mjs` et `qa-combat-choreography.mjs` : quatre factions, effets Gen Z, phases approche/contact/poussée/récupération.
- Captures d'écran : `C:\CITYOS\convergence-qa-20261019\combat-immersion-v3\front-line.png`, `front-cleared.png`.
- Restant : validation *subjective* des chutes, du volume audio et de la fluidité sur un iPhone physique ; les simulations Chrome ne remplacent pas un appareil réel.

## Note graphique

Les chutes sont des animations procédurales courtes, **pas** de la physique ragdoll exhaustive. Les modèles existants ont des limites low-poly connues. Ne pas présenter cette amélioration comme du photoréalisme.

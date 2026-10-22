# CONVERGENCE — Correction de pause intempestive au toucher TV (22/10/2026)

## Incident iPhone
L'utilisateur observe parfois l'écran « EN PAUSE » immédiatement après avoir touché une télévision sur la chaussée. Le menu appartient bien au jeu.

## Cause identifiée dans le code
La gestion des entrées du canvas `tvChoice.js` faisait un appel programmatique à `pause-btn.click()` à chaque événement `window.blur`, même si le document restait visible. Dans un navigateur iOS intégré, le focus peut être perdu temporairement pendant les gestes tactiles ; la simulation directe de `blur` reproduit cette voie d'ouverture du menu.

## Correctif
- `window.blur` nettoie les touches et annule les gestes en cours, mais ne provoque plus de pause.
- `visibilitychange` du `PlayerExperience` continue à mettre en pause uniquement lorsque `document.hidden` est vrai ; bouton Pause et reprise restent inchangés.
- `pointerdown` sur le canvas pendant le jeu empêche l'action native par défaut iOS, sans intercepter les vrais boutons du HUD ni supprimer le glissement de direction.
- Les TV, leurs effets, le simulateur, les affrontements, Stripe, Daily, sauvegardes et vitesses ne sont pas modifiés.

## Régression ciblée
`tools/qa-road-tv.mjs` vérifie maintenant :
1. Un tap réel sur une TV gauche puis droite conserve l'état `playing`, y compris après un événement `window.blur` simulé.
2. Le dialogue Pause ne s'ouvre pas après ce blur.
3. Le bouton Pause continue de fonctionner ; l'animation est figée et Reprendre rétablit la partie.
4. `document.hidden=true` + `visibilitychange` déclenche toujours une vraie pause et invalide le toucher en cours.
5. Les 12 quartiers et les autres cas du test mobile existant ne régressent pas.

## Limites
Tests sur navigateur Chrome mobile émulé. À confirmer sur l'iPhone réel et son navigateur intégré, où les événements natifs de focus varient. Aucune fusion ni mise en production avant validation.

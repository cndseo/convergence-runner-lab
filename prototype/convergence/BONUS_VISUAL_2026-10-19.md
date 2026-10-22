# CONVERGENCE — Portiques bonus visuels

Branche locale feature/convergence-visual-bonus-gates.

- Quatre portiques visuels 3D avec icones sur CanvasTexture : +10 gilets jaunes, +5 Gen Z, +10 pompiers, +5 infirmières.
- Deux choix par rangée maintenus ; les quatre catégories sont réparties sur quatre rangées.
- Gen Z : traînées lumineuses et étincelles stylisées en direction des lignes de police, sans dégâts tactiques supplémentaires.
- Les recrues conservent un tag de faction utilisé pour les rigs animés et les imposteurs.
- P02 préservé, moteur Three.js conservé, aucune bibliothèque externe.
- Générateur tactique modifié sur quatre choix additifs et vérifié avec 800 niveaux.
- Tests : npm test (7/7), npm run build, QA 390x844 (4 panneaux et 5 effets), smoke-mobile 320x700/390x844 victoire et défaite.
- Preview HTTPS temporaire sur le GMK, pas de publication main.
- À améliorer : personnages et environnements plus réalistes que les icônes procédurales, effets de feux d'artifice actuellement purement visuels.

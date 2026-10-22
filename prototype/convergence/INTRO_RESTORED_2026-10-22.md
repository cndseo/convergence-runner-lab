# CONVERGENCE — Introduction du niveau 1 restaurée (22 octobre 2026)

## Problème
La fonction `startWithIntro` avait été modifiée pour n’afficher le prologue que sur demande explicite (`force:true`). Le clic normal sur « Jouer » sautait donc l’introduction.

## Correction
Lancer `StoryDirector.beginIntro()` automatiquement après le démarrage d’une partie de campagne au quartier 1, y compris lorsqu’une nouvelle partie est démarrée depuis l’écran d’accueil. Le scénario, les images, la voix originale, le bouton « Passer l’intro », le gameplay et la progression demeurent inchangés. Aucune introduction ajoutée au défi Daily ni aux quartiers suivants.

## Vérification
- 101 tests unitaires passent (code existant).
- Build Vite de production avec `--base /` réussi.
- `node tools/qa-auto-intro.mjs` sur le build compilé : clic « Jouer » → état intro, sprite et images front/back chargés, enregistrement 3,74 s disponible puis lancé, HUD masqué, bouton Passer utilisable, reprise au début du niveau 1, pas de prologue au niveau 2 ni en Daily, aucune erreur JavaScript ni asset absent.
- La boutique Stripe et ses références SKU ne sont pas modifiées par ce commit.

## Livraison
À compiler sur le VPS avec `VITE_CONVERGENCE_API=https://api.le84500.fr/convergence` et publier sur Hostinger après sauvegarde. Spider-Man devient achetable via le septième lien Stripe ajouté séparément à la configuration du service sur le VPS.

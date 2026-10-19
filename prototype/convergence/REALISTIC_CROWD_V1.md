# CONVERGENCE — personnages 3D réalistes (19 octobre 2026)

## Livraison

Développé exclusivement sur GMK K12, branche `feature/realistic-crowd-v1`, depuis `d826e30`.

- 12 personnages 3D indépendants : variantes par faction, humains de morphologies et tenues différentes (travailleurs en gilets, jeunes, pompiers, soignants, agriculteurs).
- Animation `Walk` native sur squelettes Bip01, visage et vêtements texturés. Moteur Three.js conservé ; nouveau chargeur `GLTFLoader + MeshoptDecoder`.
- Chargement progressif et reprise sur anciens modèles si échec d'un téléchargement. Les 11 proches sont 3D, avec P02 exact en tête ; les suivants sont des imposteurs animés.
- Générateur de 144 vues de marche (12 modèles × 12 phases), regroupées en une image `walk-realistic.webp` utilisée par une seule instance GPU de foule lointaine. La limite de cette instance est maintenant de 256, sans débordement mémoire.
- Les renforts gagnés aux portiques sont eux aussi transformés en modèles animés/silhouettes, au lieu de rester géométriques.
- `?visual=legacy` restaure les six anciens personnages low-poly et l'ancien atlas sans effacer les nouveaux. V11, P02 et les modifications extérieures au commit préservés.
- Sources : `public/assets/realistic/README.md`, licence MIT intégrale `public/assets/realistic/LICENSE.txt`. Toutes les ressources sont hébergées avec le jeu, sans CDN externe.

## Vérifications

- `npm test` : 3 tests de règles, dont 800 configurations gagnables et perdantes.
- `npm run build` : succès.
- QA sur Chrome headless au GMK 390×844 et 320×700 avec 5 et 50 joueurs : contrôles tactiles, pause, victoire et défaite passés ; 0 erreur JavaScript ou téléchargement.
- Pour 50 : 11 modèles réalistes distincts + P02 et 38 personnages animés par atlas. 55 images/s observées sur le GMK ; 296 appels de rendu et 141 275 triangles (dépend du décor).
- QA renforts : démarrage à 5 puis +80 = 85 ; 12 modèles 3D (dont P02), 73 silhouettes ; redémarrage du niveau et réinitialisation des squelettes testés.
- Les tests ne sont **pas** des mesures sur téléphone physique ; iPhone / Android restent à valider dans le navigateur natif sur des appareils réels.
- Ancienne version testée avec `?visual=legacy` pour régression.
- Le catalogue modifié `prototype/convergence/ASSET_CATALOG.md` n'est pas inclus dans ce commit.

## Commandes reproductibles

```powershell
cd C:\CITYOS\convergence-runner-lab\prototype\convergence
npm run dev -- --host 127.0.0.1 --port 4291
$env:BAKE_URL='http://127.0.0.1:4291/tools/bake-realistic.html'
node tools/bake-realistic.mjs
npm test
$env:QA_REALISTIC='1'
$env:QA_URL='http://127.0.0.1:4291/'
npm run test:mobile
node tools/qa-reinforcements.mjs
npm run build
```

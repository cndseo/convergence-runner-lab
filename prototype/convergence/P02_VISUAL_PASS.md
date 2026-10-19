# CONVERGENCE — Passe de cohérence visuelle P02 (19 octobre 2026)

## Portée réellement livrée
- Le personnage P02 validé reste inchangé dans `art/approved/P02.png` et `public/assets/approved/P02.webp`.
- Les autres manifestants conservent leurs six factions distinctes, leurs modèles Three.js existants et le clip natif **Walk**. Les silhouettes ne sont pas remplacées par des copies de P02.
- Des détails de sac et de gilet réfléchissant ont été extraits de l'illustration approuvée, avec un générateur reproductible `python tools/bake-p02-backpack.py`. Les textures sont appliquées aux vêtements 3D et suivent le squelette.
- Les 72 poses du `walk-atlas.webp` ont été reconstruites depuis les six personnages habillés. Le 3D proche et la foule lointaine restent en place. La V11 originale n'est pas modifiée.
- Une tentative de silhouettes P02 recolorées a été rejetée après inspection : trop de personnages identiques. Elle n'est pas dans la version livrée.

## Vérifications réalisées sur GMK K12
- `npm test` : 3 tests réussis, dont 800 niveaux certifiés avec victoire et parcours perdants.
- `npm run test:mobile`, Chrome avec écran/tactile simulés en 390×844 et 320×700, 5 et 50 manifestants : OK, victoire/défaite/pause/commandes tactiles.
- 50 personnages sur vue mobile : 12 3D animés et 38 sprites issus de l'atlas de 72 poses, plus P02 comme leader.
- Résultat de cette passe : 55 FPS estimés en Chrome automatisé sur GMK, 19 ms au 95e percentile des frames, 0 erreur console et 0 ressource en échec.
- Preuves sur GMK : `C:\CITYOS\convergence-qa-20261019\p02-vest`.

## Limites
- La ressemblance visuelle complète de tous les personnages avec P02 n'est **pas** atteinte : le corps des personnages secondaires conserve son style de modèle 3D original.
- Aucun test sur iPhone ou Android **physique** n'a été effectué depuis cette session ; l'émulation tactile Chrome n'y équivaut pas.
- Le fichier de travail `ASSET_CATALOG.md`, déjà modifié par un autre intervenant, est laissé intact et exclu du commit.
- Le build Vite signale toujours une taille de bundle supérieure à 500 Ko, sans erreur bloquante.

## Reproduction
```powershell
cd C:\CITYOS\convergence-runner-lab\prototype\convergence
python tools/bake-p02-backpack.py
npm run dev -- --host 127.0.0.1 --port 4180
$env:BAKE_URL='http://127.0.0.1:4180/tools/bake-crowd.html'
npm run assets:bake
npm test
npm run test:mobile
npm run build
```

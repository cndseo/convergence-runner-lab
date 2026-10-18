# CONVERGENCE 3D — catalogue des assets externes

## Acquis et vérifiés (18 octobre 2026)

| Asset | Source | Licence | Format | Statut |
|---|---|---|---|---|
| Road Side (Kenney City Kit Roads) | https://flockbay.com/assets/road-side-city-kit-roads/ | CC0-1.0 | GLB 2.0 + PNG | Intégré comme accessoire décoratif latéral dans la scène ; chargement confirmé par test navigateur Chrome mobile (HTTP 200, console de succès, aucune erreur JS) |

Fichiers locaux : `public/assets/kenney/road-side.glb` et `public/assets/kenney/Textures/colormap.png`.

## Catalogues sélectionnés pour la suite (non téléchargés)

1. Personnages de base, 6 silhouettes riggées, coiffures : https://quaternius.com/packs/universalbasecharacters.html — CC0, glTF.
2. Animations humanoïdes : https://quaternius.itch.io/universal-animation-library — vérifier les fichiers disponibles.
3. Personnages féminins modulaires : https://quaternius.com/packs/ultimatemodularwomen.html — CC0.
4. Personnages masculins modulaires : https://quaternius.com/packs/ultimatemodularcharacters.html — CC0.
5. Routes, barrières, lampadaires : https://kenney.nl/assets/city-kit-roads — CC0.
6. Immeubles et façades : https://kenney.nl/assets/city-kit-suburban — CC0.

## Règles d'intégration

- Conserver la V1 et les démos originales, travailler sur branche.
- Vérifier source, licence, format, squelette, textures et performance de chaque asset avant intégration.
- Ne pas annoncer un asset comme intégré tant qu'il n'est pas rendu dans la scène et testé sur format mobile.
- Modèles et textures conservés sous leur nom de provenance ; adapter ensuite vers GLB optimisé et LOD.
- Prochaine étape : importer et tester les modèles humanoïdes riggés, puis remplacer progressivement les personnages procéduraux.


## Deuxième collecte — Kenney via tge-assets (18 octobre 2026)

Source : https://github.com/Hidencod/tge-assets ; catalogue : https://raw.githubusercontent.com/Hidencod/tge-assets/main/catalog.json
Licence déclarée par la source : CC0-1.0 (Kenney). Tous les fichiers ci-dessous ont été téléchargés et vérifiés comme binaires GLB ; **non intégrés dans le jeu**.

- Véhicules : `car-kit/police.glb`, `van.glb`, `ambulance.glb`, `firetruck.glb`.
- Mobilier urbain : `city-kit-roads/construction-barrier.glb`, `traffic-light.glb`, `light-curved.glb`.
- Architecture : `city-kit-commercial/building-a.glb`, `building-b.glb`.
- Personnages : `blocky-characters/character-a.glb`, `character-b.glb`, `character-c.glb`.

Emplacement : `public/assets/tge-kenney/` (12 fichiers, 1 577 956 octets).

Note : les trois personnages sont des modèles GLB, sans validation de rig ni d'animations. Les véhicules sont génériques et devront être adaptés. Prochaine étape : banc d'essai visuel mobile, mesure de performances, sélection et intégration progressive.

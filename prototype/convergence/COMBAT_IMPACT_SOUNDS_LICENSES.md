# CONVERGENCE — sampled fight impact sound effects (20 October 2026)

These six files are **Creative Commons Zero (CC0)/public-domain** sound effects, cleared for commercial games. The game hosts local copies under `public/assets/audio/combat/`.

## Impact recordings
Source: **Kenney — Impact Sounds**, author Kenney, 2019. Official source: https://kenney.nl/assets/impact-sounds  
Original archive: https://kenney.nl/media/pages/assets/impact-sounds/87b4ddecda-1677589768/kenney_impact-sounds.zip  
The archive's License.txt explicitly states CC0. Original .ogg files were transcoded to short AAC-LC .m4a clips for iOS compatibility.

| Local asset | Original sound |
| --- | --- |
| `baton-plank-01.m4a` | `impactPlank_medium_001.ogg` |
| `punch-01.m4a` | `impactPunch_medium_001.ogg` |
| `punch-02.m4a` | `impactPunch_medium_003.ogg` |
| `body-thud-01.m4a` | `impactSoft_heavy_002.ogg` |

## Hurt / pain vocal reactions
Source: **EZduzziteh — Hurt Sound Effects**, 10 September 2025. Licensed CC0 by its creator.  
https://opengameart.org/content/hurt-sound-effects

| Local asset | Original |
| --- | --- |
| `hurt-01.mp3` | https://opengameart.org/sites/default/files/hurt_01_0.mp3 |
| `hurt-02.mp3` | https://opengameart.org/sites/default/files/hurt_05.mp3 |

## In-game policy
- CRS melee contacts: one baton/body impact sound only when a protester actually loses a unit, paired with an occasional short grunt.
- Police losing units without a protester loss: quiet body contact and intermittent reaction.
- BRAV-M motorcycle collision: one thud + human reaction when a protester is lost, replacing the earlier synthetic impact. The motorcycle engine remains Motorbike 4.
- Shields and avoided attacks do **not** produce human grunts.
- A rate limiter and randomized selection limit repeated/stacking effects. No extra losses, timings or damage changes.
- All sounds loaded after the first player gesture; missing/unsupported audio gracefully skips without breaking gameplay.

# CONVERGENCE — second art pass, 21 October 2026

## Ground truth
Five concept boards, four heroes per board:
- GenZ: a_high_detail_character_concept_turnaround_sheet_p.png
- Gilets jaunes: wide_stylized_character_concept_sheet_lineup_pos.png
- Soignants: a_high_detail_character_sheet_concept_art_collag.png
- Pompiers: a_detailed_high_resolution_character_concept_shee.png
- Lycéens: fiche_de_personnages_lycéens_stylés.png

These are visual requirements, not finished 3D textures or mesh assets.

## What has changed
- Added distinct per-profile facial geometry parameters (jaw, cheek, chin), hair-style intentions and named stable ID mappings for all twenty heroes in heroArt.mjs.
- Better complexion treatment on generic skinned heads, and lower-frequency age/beard shader parameters in heroSculpt.js.
- Corrected Noah's unwanted cap in the hero recipe.
- Added catalog guardrails, preventing twenty profiles from silently collapsing to duplicated identity recipes.

## Experiments explicitly rejected
A procedural replacement for GLB hairstyles was rendered in six-character comparisons. It created helmet-like scalp caps, intrusive fringes and detached beard volumes. This approach was **rejected and removed**, rather than delivered or promoted.
The original GLB hairstyles and all validated outfits were restored. Screenshots of experiments remain outside version control.

## Important: not artist-approved / not finished
Despite per-profile parameters, almost all heads still inherit geometry, UVs and textures from a limited number of base GLBs. This cannot match 20 photoreal multi-view concept sheets. The complete solution requires individually sculpted heads, age-specific facial textures, separate groom meshes and avatar-specific garments exported as optimized rigged GLBs.
Do not call this "20 faithful 3D reconstructions"; it is an intermediate identity pass.

## Next art pipeline / acceptance
1. Obtain original multi-angle board references for each hero and create a proper mesh or sculpted head matching the facial outline, eyes, nose, lips and age.
2. Fit each to the existing animation skeleton (Bip01 bones), UVs, skinning, and equipment slots. Preserve IDs and saved XP.
3. Maintain hero/near LOD separately from the already optimized atlas crowd LOD; reject regressions in triangle count, memory and mobile p95 frame time.
4. Compare face/profile/back screenshots against the original boards and explicitly sign off each character. Aim for first eight verified heads before scaling to twenty.
5. Test real iPhone and Android hardware before merge or public deployment.

## Safety
All work is isolated from main, Stripe, public DNS and the existing approved fidelity preview. No model-pack licensing has been assumed or copied into production. Existing hero selection and gameplay contract remain authoritative.

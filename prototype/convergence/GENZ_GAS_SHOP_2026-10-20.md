# CONVERGENCE — GenZ pyrotechnics / FDO tear gas (20 October 2026)

Branch: feature/convergence-genz-gas-shop-20261020.
Base: 13b76f8 (12 Paris districts already densified).

- Reused native Three.js, existing GenZ/LBD modules, and current audio pipeline; no runtime dependency added.
- GenZ fireworks are now triggered manually during campaign fights when a GenZ character is recruited and a paid or preview charge is available. Each shot has a visual arcade trail/burst and temporarily suppresses the next LBD shot; it does not add arbitrary police losses to the certified solver.
- FDO can deploy an arcade-only lacrymogène effect: a stylized projectile, persistent smoke cloud and temporary walking slowdown. Medics mitigate the slowdown. Campaign only; daily competitive mode untouched.
- Two new server-side-priced Stripe SKUs: `genz3` (3 charges, 99 cents) and `genz12` (12 charges, 299 cents). Inventory is separate from Marseille support charges. Consuming a shot uses an authenticated, idempotent SQLite transaction.
- A `TESTER 3 TIRS GENZ (DÉMO)` button works while real payments are disabled, without minting any paid server credits.
- Real Stripe payments are still disabled; test webhooks only.
- Previous Marseille credits, bonus TVs, costumes, 12 Paris districts and final campaign stage remain intact.

Verification: `npm test` 60/60; Vite build successful; browser mobile 390×844 passed shop + demo shot + 1-credit consumption + LBD suppression + tear-gas cloud; Paris QA traversed all 12 districts and full stages 1 and 12 without errors. Physical iPhone performance not benchmarked.

Preview: local compiled server `PARIS_PREVIEW_PORT=4656 node tools/serve-paris-preview.mjs`, with `VITE_PARIS_PREVIEW=1` during build and `?qa=1&decors=1` for QA.

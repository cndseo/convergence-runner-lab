# CONVERGENCE — TV plates BFMTV/CNEWS et casse au passage

## Livraison du 20 octobre 2026
- Base conservée : commit `1e043bb`, branche de travail distincte `feature/convergence-tv-portals`.
- Les dix portiques à deux choix utilisent désormais **20 téléviseurs plats** : châssis fin noir, pied, LED, habillage BFMTV/CNEWS de fiction.
- **15 illustrations fournies dans la conversation** réunies sans version « (x) » dans `public/assets/tv/tv-approved-atlas.webp` (6 402 octets ; 400 × 232, 15 cases / 16). Compression mobile très forte : fond diffus moins net en gros plan, mais les chiffres et légendes sont redessinés à 512 × 288.
- Mapping indépendant de l'arithmétique : `tvGateMapping.mjs`, `tvGateArt.js`. Seule la valeur du choix `tactics.mjs` fait foi. Si l'illustration d'origine contient un montant différent, celui-ci est recouvert et le **vrai montant** est dessiné. Les conditions affichent aussi le `SINON` réel. Le code de génération et le solveur restent inchangés.
- Les bonus + Gilets jaunes, Gen Z, pompiers, infirmières, protections, multiplicateurs et ralliement, ainsi que les malus barricades, fourgons, dispersion, obstacles et BRAV-M sont compatibles avec les écrans TV. Certaines illustrations alternatives de l'atlas ne s'affichent pas simultanément dans un niveau de dix choix : le moteur choisit selon le type réel du bonus.
- `tvBreakEffects.js` : lorsque le joueur franchit un écran, 14 éclats de verre apparaissent pendant environ 0,65 s, puis sont nettoyés. Les bonus/malus ne sont pas recalculés ; un seul déclenchement par portique.
- `storyDirector.js` : le président de l'introduction passe au premier plan pendant la prise de parole, sans se faire occulter par la profondeur des CRS ; il repasse derrière eux pendant sa fuite.

## Tests réalisés et vérifiés sur GMK K12
- `npm test` : **46/46 tests**, dont 800 configurations de niveaux vérifiant le vrai montant texte = règle.
- `npm run build` : succès. Avertissement historique de taille du bundle JS supérieur à 500 Ko.
- `qa-tv-gates.mjs` : Chrome 390 × 844 et 320 × 700, en local puis depuis HTTPS de build ; 20 téléviseurs, atlas HTTP 200, 0 placeholder « (x) », collision 1 fois, compte exact, effet casse 14 éclats et nettoyage, aucune erreur JS.
- `qa-bravm-gate.mjs` : deux résolutions, motos de face et **3 manifestants perdus** conservés.
- `qa-intro-final-tv.mjs` : 8 scénarios de prologue, audio, fuite, reset, passage, campagne finale validés ; capture du visage revue.
- **Prévisualisation isolée, non publique sur main** : https://sun-biography-lens-handled.trycloudflare.com/convergence-runner-lab/convergence/ (tunnel temporaire du GMK).

## Gouvernance et limites
- Aucun écrasement des branches d'Astra ni fusion vers `main`.
- Pas de retouche des opérations arithmétiques, de la monétisation ou du son Marseille.
- Le transfert des 15 fonds TV a été validé par SHA-256 : `908df88daf60b99a132ea2c88a74fcb4bea8d8e3658ba73fc7ec229c9330e72d`.
- **À valider** : lisibilité et performances sur iPhone physique, puis amélioration de la résolution des images TV si nécessaire.

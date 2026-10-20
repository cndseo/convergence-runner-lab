# Paris — douze quartiers intégrés (20 octobre 2026)

Branche : feature/paris-12-decors-20261020.
Base : deeead2 (TV originales, cadeau Marseille manuel, renforts 2D) + menu 0843618.

- Douze configurations dans src/parisDistricts.mjs ; générateurs instanciés dans parisArchitecture.js ; monuments dans parisMonuments.js.
- ParisEnvironment remplace uniquement l'ancien pont : tronçons de 48 m chargés autour du joueur, ressources partagées, suppression des tronçons dépassés.
- parisLevel est sauvegardé indépendamment de level (difficulté/front tactique). La campagne finit au douzième quartier. Les anciennes sauvegardes achevées au niveau 10 reprennent à Concorde.
- Transition Champs → avenue de Marigny → rue du Faubourg-Saint-Honoré. L'Arc reste une perspective éloignée, pas la destination de la campagne.
- Les proportions et parcours sont compressés pour le runner ; il ne s'agit pas d'une reconstitution cadastrale.
- Sélecteur : build avec VITE_PARIS_PREVIEW=1 puis ?decors=1 ; les sauts de développement ne modifient pas la sauvegarde de campagne.
- Compiler : npm run build. Prévisualisation isolée : node tools/serve-paris-preview.mjs (port 4652).
- Vérifications : 55 tests existants réussis, 3 tests de progression supplémentaires réussis ; 12 scènes parcourues, matrices finies, 5 tronçons maximum ; parties complètes aux niveaux 1 et 12, toucher et réserve offerte vérifiés. Aucun achat réel effectué.
- API/Stripe : code existant conservé. VITE_CONVERGENCE_API reste le réglage d'intégration ; aucune activation de paiements dans cette prévisualisation.
- Le jeu public n'est pas remplacé. Le tunnel de prévisualisation dépend du GMK allumé.

Repères architecturaux : https://parcoursrevolution.paris.fr/fr/quartiers/15-le-quartier-de-la-place-de-la-nation ; https://www.elysee.fr/maison-elysee/infos .

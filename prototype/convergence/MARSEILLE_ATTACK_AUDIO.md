# CONVERGENCE — son de l'attaque marseillaise (20 octobre 2026)

Base préservée : `feature/marseille-2d-urban-decay` au commit `8e45cd9` (renforts marseillais 2D + décors). Livré sur branche dédiée `feature/marseille-attack-audio`.

- **Source** : extrait MOV de 7,15 s transmis dans la conversation.
- **Asset** : `public/assets/audio/marseille-attack.m4a` (AAC mono 16 kHz, 9 926 octets, durée décodée 7,176 s).
- **SHA-256 vérifié sur GMK** : `9489eb580c611b6fef3457c3bbe13537440b602b89f89f831da456cf08b68568`.
- **Déclencheur unique** : `MarseilleReinforcements.begin()`, uniquement après chargement et consommation réussie d'une charge. Aucun son au simple survol du bouton ni en défi quotidien.
- **AudioContext commun** : compatible iPhone, chargé au démarrage ; source connectée au bus SFX du jeu, avec baisse temporaire de la musique ; la voix de combat concurrente est arrêtée.
- **Pause** : `ui.js` suspend / reprend déjà le contexte audio global du jeu.
- **Fin / annulation / redémarrage** : `clear()` arrête et nettoie la source audio ; pas de second déclenchement à la fin.
- **Résilience** : si fichier absent ou non décodable, l'attaque continue sans bloquer ni facturer une charge supplémentaire.

## Vérifications sur GMK K12

- `npm test` : 38 réussis.
- `npm run build` : compilation réussie.
- `node tools/qa-marseille-audio.mjs` : 390x844 et 320x700, fichier HTTP 200, 7,176 s décodées, lecture effective pendant l'attaque, pause et arrêt de la source vérifiés, aucune erreur JS.
- `qa-marseille-2d.mjs`, `qa-marseille-regressions.mjs`, `qa-urban-decay.mjs` : réussis sur ces deux formats.
- Prévisualisation hors version publique, sur un tunnel HTTPS temporaire du GMK.

Aucune modification des règles tactiques, des renforts 2D, des costumes, des modèles de décor ou des paiements. La qualité sonore d'origine a été compressée pour limiter le téléchargement mobile ; améliorable en conservant la même intégration.

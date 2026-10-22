# CONVERGENCE — Son de combat « Pourquoi tu me frappe »

## Installation vérifiée le 19 octobre 2026
- Enregistrement fourni par l'utilisateur (8,016 s, 321 750 octets) : « Pourquoi tu me frappe .mp3 ».
- Version pour le jeu : `public/assets/audio/pourquoi-tu-me-frappe.ogg` (Opus mono 16 kHz, 12 kb/s, 12 453 octets, durée 7,985 s).
- Vérification intégrité : SHA256 `3f4a8e8332f388363eb6f4e523a3c7fb26a53461f5c9dfdff7a861ffd30ce1e2` sur GMK et source préparée.
- Le fichier est copié automatiquement au build dans `docs/convergence/assets/audio/pourquoi-tu-me-frappe.ogg`.
- Charge le son dès le démarrage du jeu, déclenche pendant les affrontements CRS et boss, diminue le volume de l'ambiance pendant la voix, restaure le volume après, respecte pause et sourdine.
- Arrête la lecture à la victoire, à la défaite, au redémarrage et à la fin du combat.
- Si chargement impossible, le combat reste jouable sans le son.

## Vérifications
- `npm test` : 7/7, dont 800 niveaux tactiques certifiés.
- `npm run build` : réussi.
- `tools/qa-combat-voice.mjs` en Chrome mobile simulé : Ogg décodé, buffer ~8 secondes, lecture déclenchée dans le combat réel, pause/reprise, arrêt à la victoire, aucune erreur.
- `tools/qa-visual-bonus.mjs` : quatre pancartes et effet Gen Z validés avec de vraies recrues Gen Z.
- HTTPS d'essai : https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/
- iPhone physique : vérification auditive non faite.

## Gouvernance
- Le fichier audio utilisateur reste uniquement dans la branche locale de prévisualisation ; ne pas ajouter aux PR de code sur GitHub sans clarifier les droits de diffusion.
- `ASSET_CATALOG.md` est modifié par un autre agent : ne pas inclure dans ce commit.

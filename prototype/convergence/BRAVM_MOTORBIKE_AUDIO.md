# BRAV-M motorcycle sound

- Asset: public/assets/audio/bravm-motorbike-4.mp3 (~49 KiB, 3.18 seconds).
- Recording: Motorbike - 4, by ezwa, PDSounds record 677, 12 November 2008.
- Origin: https://commons.wikimedia.org/wiki/File:Motorbike_4.ogg
- MP3 transcode: https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Motorbike_4.ogg/Motorbike_4.ogg.mp3
- Rights: public domain, including commercial reuse.
- WebAudio buffer is preloaded once after initial user gesture, two pitch-shifted/panned voices play when the BRAV-M motorcycle charge begins.
- The two voices ramp up and fade by the animation end; they stop on clear/reset. If decoding fails, gameplay continues unchanged.
- No changes to BRAV-M damage, camera, movement or charge duration.

## 20 October refinement

The original sample was quiet (~0.016 RMS, 0.13 peak); the Web Audio buffer is
normalized once on decode to a safe peak of 0.84. During the charge, city
ambience is reduced and two stereo samples get a 3.20-second crescendo/fade.
The actors materialize 29 and 32 metres ahead, approach for 2.92 seconds and
recover for 0.34 seconds. No synthetic Marseille impact sound or negative-gate
buzz is played on BRAV-M contact. BRAV-M damage remains exactly three.

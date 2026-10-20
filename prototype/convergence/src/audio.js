import {CrowdAmbience} from './crowdAmbience.js';

export class AudioManager {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.musicGain = null;
        this.sfxGain = null;
        this.isMusicPlaying = false;
        this.musicNodes = [];
        this.initialized = false;
        this.ambience = new CrowdAmbience(this);
        this.ambienceMuted = false;
    }

    init() {
        if (this.initialized) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.7;
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = 0.35;
        this.musicGain.connect(this.masterGain);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 0.6;
        this.sfxGain.connect(this.masterGain);

        this.initialized = true;
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    startCrowdAmbience(){ return this.ambience.start(); }
    toggleAmbienceMute(){
      this.ambienceMuted=!this.ambienceMuted;
      if(this.musicGain)this.musicGain.gain.value=this.ambienceMuted?0:.35;
      return this.ambienceMuted;
    }
    stopCrowdAmbience(){ this.ambience.stop(); }
    pauseAudio(){ return this.ctx?.suspend(); }
    resumeAudio(){ return this.ctx?.resume(); }

    // Audio supplied in the user's introduction video; plays only during
    // the scripted prologue, from the already-unlocked game AudioContext.
    async preloadIntroVoice(){
        if(this.introVoiceBuffer)return;
        if(this.introVoiceLoading)return this.introVoiceLoading;
        if(!this.initialized)this.init();
        this.introVoiceLoading=(async()=>{
            try{
                const url=import.meta.env.BASE_URL+'assets/story/intro-voice.mp3';
                const response=await fetch(url);
                if(!response.ok)throw new Error('intro recording unavailable');
                this.introVoiceBuffer=await this.ctx.decodeAudioData(await response.arrayBuffer());
            }catch(error){console.warn('Intro audio:',error.message);this.introVoiceBuffer=null;}
            finally{this.introVoiceLoading=null;}
        })();
        return this.introVoiceLoading;
    }
    playIntroVoice(){
        if(!this.introVoiceBuffer || !this.ctx)return false;
        this.introVoiceRequested=true;
        if(this.ctx.state!=='running'){
            this.ctx.resume().then(()=>{
                if(this.introVoiceRequested && this.ctx.state==='running')this.playIntroVoice();
            }).catch(()=>{});
            return false;
        }
        this.stopIntroVoice();
        this.introVoiceRequested=true;
        const source=this.ctx.createBufferSource(), gain=this.ctx.createGain();
        source.buffer=this.introVoiceBuffer;gain.gain.value=.94;
        source.connect(gain);gain.connect(this.masterGain);
        if(this.musicGain)this.musicGain.gain.setTargetAtTime(.07,this.ctx.currentTime,.12);
        this.introVoiceNode=source;
        source.onended=()=>{
            if(this.introVoiceNode!==source)return;
            this.introVoiceNode=null;
            if(this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.25);
        };
        source.start();
        return true;
    }
    stopIntroVoice(){
        this.introVoiceRequested=false;
        try{this.introVoiceNode?.stop();}catch{}
        this.introVoiceNode=null;
        if(this.ctx&&this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.15);
    }

    // Optional supplied recording during combat; gracefully skip if absent.
    async preloadCombatVoice(){
        if(this.combatVoiceBuffer)return Promise.resolve();
        if(this.combatVoiceLoading)return this.combatVoiceLoading;
        if(!this.initialized)this.init();
        this.combatVoiceLoading=(async()=>{
            try{
                const url=import.meta.env.BASE_URL+'assets/audio/pourquoi-tu-me-frappe.ogg';
                const response=await fetch(url);
                if(!response.ok)throw new Error('combat recording not installed');
                this.combatVoiceBuffer=await this.ctx.decodeAudioData(await response.arrayBuffer());
            }catch(error){this.combatVoiceBuffer=null;}
            finally{this.combatVoiceLoading=null;}
        })();
        return this.combatVoiceLoading;
    }
    playCombatVoice(){
        if(!this.ctx||this.ctx.state!=='running')return;
        this.combatVoiceRequested=true;
        if(!this.combatVoiceBuffer){
            this.preloadCombatVoice().then(()=>{
                if(this.combatVoiceBuffer&&this.combatVoiceRequested)this.playCombatVoice();
            });
            return;
        }
        if(this.combatVoiceNode)return;
        const source=this.ctx.createBufferSource();
        const gain=this.ctx.createGain();
        source.buffer=this.combatVoiceBuffer;
        gain.gain.value=.82;
        source.connect(gain);gain.connect(this.sfxGain);
        if(this.musicGain){
            this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.12,this.ctx.currentTime,.12);
        }
        this.combatVoiceNode=source;
        source.onended=()=>{
            if(this.combatVoiceNode===source)this.combatVoiceNode=null;
            if(this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.30);
        };
        source.start();
    }
    stopCombatVoice(){
        this.combatVoiceRequested=false;
        try{this.combatVoiceNode?.stop();}catch{}
        this.combatVoiceNode=null;
        if(this.ctx&&this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.18);
    }

    // Audio supplied specifically for the Marseille 2D counterattack (7.15 s).
    // WebAudio shares the game's unlocked iPhone-compatible AudioContext.
    async preloadMarseilleAttack() {
        if (this.marseilleAttackBuffer) return this.marseilleAttackBuffer;
        if (this.marseilleAttackLoading) return this.marseilleAttackLoading;
        if (!this.initialized) this.init();
        this.marseilleAttackLoading=(async()=>{
            try {
                const response=await fetch(import.meta.env.BASE_URL+'assets/audio/marseille-attack.m4a');
                if(!response.ok)throw new Error('Marseille attack recording missing');
                this.marseilleAttackBuffer=await this.ctx.decodeAudioData(await response.arrayBuffer());
                return this.marseilleAttackBuffer;
            }catch(error) {
                console.warn('Marseille attack recording:',error?.message);
                return null; // no impact on visuals, fighting or credits
            }finally {this.marseilleAttackLoading=null;}
        })();
        return this.marseilleAttackLoading;
    }
    playMarseilleAttack() {
        if(!this.marseilleAttackBuffer||!this.ctx||this.ctx.state!=='running')return false;
        this.stopMarseilleAttack();
        this.stopCombatVoice();
        const source=this.ctx.createBufferSource();
        const gain=this.ctx.createGain();
        source.buffer=this.marseilleAttackBuffer;
        gain.gain.value=.90;
        source.connect(gain);
        gain.connect(this.sfxGain);
        this.marseilleAttackNode=source;
        if(this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.10,this.ctx.currentTime,.12);
        source.onended=()=>{
            if(this.marseilleAttackNode!==source)return;
            this.marseilleAttackNode=null;
            if(this.musicGain)this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.25);
        };
        source.start(0); // exactly once at the start of the attack
        return true;
    }
    stopMarseilleAttack() {
        try{this.marseilleAttackNode?.stop();}catch{}
        this.marseilleAttackNode=null;
        if(this.ctx&&this.musicGain)
            this.musicGain.gain.setTargetAtTime(this.ambienceMuted?0:.35,this.ctx.currentTime,.15);
    }

    // Public-domain motorbike pass-by (ezwa / PDSounds, via Wikimedia Commons).
    // Load once, lazily after the first user gesture, and share the unlocked
    // Web Audio context used by all other effects. No streaming during gameplay.
    async preloadBravmMotorbike() {
        if (this.bravmMotorbikeBuffer) return this.bravmMotorbikeBuffer;
        if (this.bravmMotorbikeLoading) return this.bravmMotorbikeLoading;
        if (!this.initialized) return null;
        this.bravmMotorbikeLoading=(async()=>{
            try {
                const response=await fetch(import.meta.env.BASE_URL+'assets/audio/bravm-motorbike-4.mp3');
                if (!response.ok) throw new Error('motorbike asset unavailable');
                this.bravmMotorbikeBuffer=await this.ctx.decodeAudioData(await response.arrayBuffer());
                return this.bravmMotorbikeBuffer;
            } catch(error) {
                console.warn('BRAV-M motorbike audio unavailable:',error?.message);
                return null;
            } finally {this.bravmMotorbikeLoading=null;}
        })();
        return this.bravmMotorbikeLoading;
    }

    playBravmMotorbikeCharge() {
        if (!this.initialized || !this.ctx) return false;
        this.stopBravmMotorbikeCharge();
        const generation=++this.bravmMotorbikeGeneration;
        if (!this.bravmMotorbikeBuffer) {
            // If still loading at first collision, start only while this
            // charge stays active; clear() invalidates the generation token.
            this.preloadBravmMotorbike().then(buffer=>{
                if (buffer && this.bravmMotorbikeGeneration===generation) this.startBravmMotorbikeSample(generation);
            });
            return false;
        }
        return this.startBravmMotorbikeSample(generation);
    }

    startBravmMotorbikeSample(generation) {
        if (this.bravmMotorbikeGeneration!==generation ||
            this.ctx?.state!=='running' || !this.bravmMotorbikeBuffer || !this.sfxGain) return false;
        const ctx=this.ctx,now=ctx.currentTime;
        // Two BRAV-M motorcycles, one reusable 3-second field recording.
        // Slightly different pitch, start and stereo pan create a convincing
        // two-bike approach. Fade out by the end of the 1.42-second charge.
        const bus=ctx.createGain();
        bus.gain.setValueAtTime(.001,now);
        bus.gain.linearRampToValueAtTime(.65,now+.14);
        bus.gain.setValueAtTime(.65,now+.87);
        bus.gain.linearRampToValueAtTime(.001,now+1.44);
        bus.connect(this.sfxGain);
        const sources=[];
        for(const [index,rate,pan,offset] of [[0,1.03,-.47,0],[1,.94,.47,.11]]){
            const source=ctx.createBufferSource(),gain=ctx.createGain();
            source.buffer=this.bravmMotorbikeBuffer;
            source.playbackRate.value=rate;
            gain.gain.value=index===0?.62:.40;
            source.connect(gain);
            if(ctx.createStereoPanner){
                const stereo=ctx.createStereoPanner();stereo.pan.value=pan;
                gain.connect(stereo);stereo.connect(bus);
            }else gain.connect(bus);
            source.start(now+offset);
            source.stop(now+1.48);
            sources.push(source);
        }
        this.bravmMotorbikeNodes={sources,bus};
        return true;
    }

    stopBravmMotorbikeCharge() {
        this.bravmMotorbikeGeneration=(this.bravmMotorbikeGeneration||0)+1;
        const active=this.bravmMotorbikeNodes;
        this.bravmMotorbikeNodes=null;
        if(!active)return;
        // Natural fade: prevent a hard cut when the animation resolves early.
        const now=this.ctx?.currentTime||0;
        active.bus.gain.cancelScheduledValues(now);
        active.bus.gain.setValueAtTime(Math.max(.001,active.bus.gain.value),now);
        active.bus.gain.linearRampToValueAtTime(.001,now+.11);
        for(const node of active.sources){
            try{node.stop(now+.12);}catch{} // already ended naturally
        }
    }

    // Short synthesized steps/impact layered under the original spoken recording.
    // One-shot buffers: no asset downloads and no overlapping crowd loops.
    playMarseilleFootfall() {
        if(!this.ctx||this.ctx.state!=='running'||!this.sfxGain)return false;
        const now=this.ctx.currentTime,osc=this.ctx.createOscillator(),gain=this.ctx.createGain();
        osc.type='sine';
        osc.frequency.setValueAtTime(94,now);
        osc.frequency.exponentialRampToValueAtTime(48,now+.085);
        gain.gain.setValueAtTime(.075,now);
        gain.gain.exponentialRampToValueAtTime(.001,now+.095);
        osc.connect(gain);gain.connect(this.sfxGain);
        osc.start(now);osc.stop(now+.10);
        return true;
    }
    playMarseilleImpact() {
        if(!this.ctx||this.ctx.state!=='running'||!this.sfxGain)return false;
        const now=this.ctx.currentTime,osc=this.ctx.createOscillator(),gain=this.ctx.createGain();
        osc.type='triangle';
        osc.frequency.setValueAtTime(135,now);
        osc.frequency.exponentialRampToValueAtTime(42,now+.27);
        gain.gain.setValueAtTime(.15,now);
        gain.gain.exponentialRampToValueAtTime(.001,now+.31);
        osc.connect(gain);gain.connect(this.sfxGain);
        osc.start(now);osc.stop(now+.32);
        return true;
    }

    // ============ BACKGROUND MUSIC ============
    startMusic() {
        if (!this.initialized) this.init();
        if (this.isMusicPlaying) return;
        this.isMusicPlaying = true;
        this.playMusicLoop();
    }

    stopMusic() {
        this.isMusicPlaying = false;
        this.musicNodes.forEach(node => {
            try { node.stop(); } catch(e) {}
        });
        this.musicNodes = [];
    }

    playMusicLoop() {
        if (!this.isMusicPlaying) return;

        const now = this.ctx.currentTime;
        const bpm = 128;
        const beatDuration = 60 / bpm;
        const barDuration = beatDuration * 4;

        // Bass line pattern
        const bassNotes = [110, 110, 146.83, 130.81, 110, 110, 146.83, 164.81];
        bassNotes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.3, now + i * beatDuration);
            gain.gain.exponentialRampToValueAtTime(0.01, now + (i + 0.8) * beatDuration);
            osc.connect(gain);
            gain.connect(this.musicGain);
            osc.start(now + i * beatDuration);
            osc.stop(now + (i + 1) * beatDuration);
            this.musicNodes.push(osc);
        });

        // Kick drum on every beat
        for (let i = 0; i < 8; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150, now + i * beatDuration);
            osc.frequency.exponentialRampToValueAtTime(30, now + i * beatDuration + 0.1);
            gain.gain.setValueAtTime(0.8, now + i * beatDuration);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * beatDuration + 0.15);
            osc.connect(gain);
            gain.connect(this.musicGain);
            osc.start(now + i * beatDuration);
            osc.stop(now + i * beatDuration + 0.2);
            this.musicNodes.push(osc);
        }

        // Hi-hat on offbeats
        for (let i = 0; i < 16; i++) {
            const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.05, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let j = 0; j < data.length; j++) {
                data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (data.length * 0.2));
            }
            const source = this.ctx.createBufferSource();
            source.buffer = buffer;
            const gain = this.ctx.createGain();
            gain.gain.value = i % 2 === 0 ? 0.1 : 0.2;
            
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.value = 7000;
            
            source.connect(filter);
            filter.connect(gain);
            gain.connect(this.musicGain);
            source.start(now + i * beatDuration * 0.5);
            this.musicNodes.push(source);
        }

        // Melody arpeggios
        const melodyNotes = [329.63, 392, 440, 523.25, 440, 392, 349.23, 329.63];
        melodyNotes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.08, now + i * beatDuration);
            gain.gain.exponentialRampToValueAtTime(0.01, now + (i + 0.6) * beatDuration);
            osc.connect(gain);
            gain.connect(this.musicGain);
            osc.start(now + i * beatDuration);
            osc.stop(now + (i + 0.7) * beatDuration);
            this.musicNodes.push(osc);
        });

        // Schedule next loop
        const loopDuration = 8 * beatDuration;
        setTimeout(() => {
            this.musicNodes = [];
            this.playMusicLoop();
        }, loopDuration * 1000 - 50);
    }

    // ============ SOUND EFFECTS ============
    playGateGood() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Rising arpeggio
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.4, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.06 + 0.2);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.25);
        });
    }

    playGateBad() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Descending buzz
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.35);
    }

    playHit() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Impact sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.2);

        // Noise burst
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.1, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.value = 0.3;
        noise.connect(noiseGain);
        noiseGain.connect(this.sfxGain);
        noise.start(now);
    }

    playLbdShot() {
        if (!this.initialized || this.ctx.state !== 'running') return;
        const now=this.ctx.currentTime;
        const osc=this.ctx.createOscillator();
        const gain=this.ctx.createGain();
        osc.type='triangle';
        osc.frequency.setValueAtTime(480,now);
        osc.frequency.exponentialRampToValueAtTime(78,now+.13);
        gain.gain.setValueAtTime(.11,now);
        gain.gain.exponentialRampToValueAtTime(.001,now+.15);
        osc.connect(gain);gain.connect(this.sfxGain);
        osc.start(now);osc.stop(now+.16);
    }

    // Low, brief shield contact sound panned slightly across the front.
    // Quieter while the user's recorded voice is playing. Cosmetic only.
    playShieldContact(exchange=0) {
        if (!this.initialized || this.ctx?.state!=='running') return;
        const now=this.ctx.currentTime;
        const tone=this.ctx.createOscillator(), gain=this.ctx.createGain();
        tone.type='triangle';
        tone.frequency.setValueAtTime(175,now);
        tone.frequency.exponentialRampToValueAtTime(68,now+.095);
        gain.gain.setValueAtTime(this.combatVoiceNode?.035:.09,now);
        gain.gain.exponentialRampToValueAtTime(.001,now+.115);
        const stereo=this.ctx.createStereoPanner?.();
        if(stereo){
            stereo.pan.value=exchange%2===0?-.28:.28;
            tone.connect(gain);gain.connect(stereo);stereo.connect(this.sfxGain);
        } else {tone.connect(gain);gain.connect(this.sfxGain);}
        tone.start(now);tone.stop(now+.12);
    }

    playFightHit() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150 + Math.random() * 100, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);
        gain.gain.setValueAtTime(this.combatVoiceNode ? 0.09 : 0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.12);
    }

    playWin() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Victory fanfare
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.3, now + i * 0.15);
            gain.gain.setValueAtTime(0.3, now + i * 0.15 + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.4);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.5);
        });

        // Shimmer effect
        for (let i = 0; i < 8; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 1000 + Math.random() * 2000;
            gain.gain.setValueAtTime(0.05, now + 0.6 + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6 + i * 0.05 + 0.2);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now + 0.6 + i * 0.05);
            osc.stop(now + 0.6 + i * 0.05 + 0.25);
        }
    }

    playLose() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Sad descending tones
        const notes = [392, 349.23, 293.66, 261.63];
        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.3, now + i * 0.25);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.25 + 0.4);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now + i * 0.25);
            osc.stop(now + i * 0.25 + 0.5);
        });
    }

    playCountUp() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 800 + Math.random() * 400;
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.1);
    }

    playBossAppear() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        // Deep dramatic horn
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.5);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.setValueAtTime(0.4, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 1);

        // Second horn
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.value = 55;
        gain2.gain.setValueAtTime(0.3, now + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
        osc2.connect(gain2);
        gain2.connect(this.sfxGain);
        osc2.start(now + 0.1);
        osc2.stop(now + 1);
    }

    playClick() {
        if (!this.initialized) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 600;
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.06);
    }
}

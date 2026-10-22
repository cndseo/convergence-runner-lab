// Real CC0 sampled sounds for the game's tactical impact moments.
// No synthetic punch tones, and no audio linked to weapon attack cadence.
export const COMBAT_IMPACT_ASSETS=Object.freeze({
  baton:['baton-plank-01.m4a','punch-01.m4a'],
  body:['body-thud-01.m4a','punch-02.m4a'],
  voices:['hurt-01.mp3','hurt-02.mp3']
});
const files=[...new Set(Object.values(COMBAT_IMPACT_ASSETS).flat())];
export class CombatImpactSounds {
  constructor(audio){
    this.audio=audio;this.buffers=new Map();this.loading=null;this.counter=0;
    this.lastImpact=-100;this.lastReaction=-100;this.played=0;
  }
  async preload(baseUrl='/'){
    if(!this.audio.initialized||!this.audio.ctx)return [];
    if(this.buffers.size===files.length)return files;
    if(this.loading)return this.loading;
    const ctx=this.audio.ctx;
    this.loading=Promise.allSettled(files.map(async file=>{
      const response=await fetch(baseUrl+'assets/audio/combat/'+file);
      if(!response.ok)throw new Error(file+': HTTP '+response.status);
      const sound=await ctx.decodeAudioData(await response.arrayBuffer());
      this.buffers.set(file,sound);
      return file;
    })).then(results=>{
      if(results.some(result=>result.status==='rejected'))
        console.warn('Combat sampled SFX partially unavailable; gameplay unaffected');
      return [...this.buffers.keys()];
    }).finally(()=>{this.loading=null;});
    return this.loading;
  }
  sample(file,volume,pitch=1,delay=0,pan=0){
    const audio=this.audio,ctx=audio.ctx,buffer=this.buffers.get(file);
    if(!buffer || !ctx ||ctx.state!=='running'||!audio.sfxGain)return false;
    const source=ctx.createBufferSource(),gain=ctx.createGain();
    source.buffer=buffer;
    source.playbackRate.value=pitch;
    gain.gain.value=volume;
    source.connect(gain);
    if(typeof ctx.createStereoPanner==='function'){
      const panner=ctx.createStereoPanner();
      panner.pan.value=pan;
      gain.connect(panner);
      panner.connect(audio.sfxGain);
      source.onended=()=>{source.disconnect();gain.disconnect();panner.disconnect();};
    }else{
      gain.connect(audio.sfxGain);
      source.onended=()=>{source.disconnect();gain.disconnect();};
    }
    source.start(ctx.currentTime+delay);
    return true;
  }
  // type = baton (CRS contact), body (motorbike fall), counter (police struck).
  // Reactions represent actual losses, never speculative or blocked attacks.
  play(type='baton',{reaction=true}={}){
    const ctx=this.audio.ctx;
    if(!ctx||ctx.state!=='running')return false;
    const now=ctx.currentTime;
    const cooldown=type==='body'?.36:.23; // max ~4 sampled contacts/second
    if(now-this.lastImpact<cooldown)return false;
    const group=type==='baton'?COMBAT_IMPACT_ASSETS.baton:COMBAT_IMPACT_ASSETS.body;
    const file=group[this.counter%group.length];
    const counter=this.counter++;
    const volume=type==='baton'?.76:type==='body'?.72:.52;
    const speaking=!!this.audio.combatVoiceNode;
    const played=this.sample(file,speaking?volume*.70:volume,
      [1.0,.96,1.035,.985][counter%4],0,counter%2? .19:-.19);
    if(!played)return false;
    this.lastImpact=now;
    this.played++;
    // Grunt is occasional, very brief, and slightly delayed after body contact.
    if(reaction&&now-this.lastReaction>.47){
      const voice=COMBAT_IMPACT_ASSETS.voices[counter%2];
      if(this.sample(voice,speaking?.29:.46,.95+(counter%3)*.05,.075,counter%2?.12:-.12))
        this.lastReaction=now;
    }
    return true;
  }
}

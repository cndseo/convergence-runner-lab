// On-demand, non-positional crowd background. Reuses the game's existing AudioContext.
// All sound files are local resources. Nothing streams to an external service.
export class CrowdAmbience {
  constructor(audio) {
    this.audio=audio;
    this.paths=['crowd-paris.ogg','crowd-street.ogg'];
    this.buffers=[];
    this.current=null;
    this.enabled=false;
    this.generation=0;
    this.played=0;
    this.loadPromise=null;
    this.error=null;
  }
  async load() {
    if (this.buffers.length) return this.buffers;
    if (!this.loadPromise) this.loadPromise=Promise.all(this.paths.map(async filename=>{
      const url=import.meta.env.BASE_URL+'assets/audio/'+filename;
      const response=await fetch(url);
      if(!response.ok)throw new Error('Ambience '+response.status+' '+filename);
      return this.audio.ctx.decodeAudioData(await response.arrayBuffer());
    })).then(buffers=>{this.buffers=buffers;return buffers;}).catch(err=>{
      this.loadPromise=null;this.error=String(err);throw err;
    });
    return this.loadPromise;
  }
  async start(){
    this.stop();
    this.enabled=true;
    const token=this.generation;
    try {
      await this.load();
      if(!this.enabled||this.generation!==token)return;
      this.next(token);
    } catch(err){
      if(this.generation!==token)return;
      this.enabled=false;
      // Safe fallback when recordings are missing or a device cannot decode Ogg.
      console.warn('Crowd ambience unavailable, using original music:',err?.message);
      this.audio.startMusic();
    }
  }
  next(token){
    if(!this.enabled||token!==this.generation||!this.buffers.length)return;
    const ctx=this.audio.ctx,buffer=this.buffers[this.played++%this.buffers.length];
    const node=ctx.createBufferSource(),fade=ctx.createGain();
    const now=ctx.currentTime,fadeTime=Math.min(.7,buffer.duration/8);
    node.buffer=buffer;
    node.connect(fade);fade.connect(this.audio.musicGain);
    fade.gain.setValueAtTime(0,now);
    fade.gain.linearRampToValueAtTime(.50,now+fadeTime);
    fade.gain.setValueAtTime(.50,Math.max(now+fadeTime,now+buffer.duration-fadeTime));
    fade.gain.linearRampToValueAtTime(0,now+buffer.duration);
    node.onended=()=>{
      if(this.current?.node===node)this.current=null;
      node.disconnect();fade.disconnect();
      this.next(token);
    };
    this.current={node,fade};
    node.start(now); // next track starts when this one ends
  }
  stop(){
    this.enabled=false;this.generation++;
    const current=this.current;this.current=null;
    if(current){current.node.onended=null;try{current.node.stop();}catch{}current.node.disconnect();current.fade.disconnect();}
  }
}

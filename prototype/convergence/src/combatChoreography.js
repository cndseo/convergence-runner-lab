import {INTRO_SECONDS, CONTACT_SECONDS, RECOVER_SECONDS, clamp01, visualCombatPhase, visualCombatWeight} from './combatStages.mjs';

// Lightweight combat poses layered *after* the existing walk/idle mixers.
// Does not modify the approved P02, level math, damage, or the source GLBs.
const MAX_ACTORS_PER_SIDE = 8;
const smooth = t => { const x=clamp01(t); return x*x*(3-2*x); };

export class CombatChoreography {
  constructor(game,enemy) {
    this.game=game;
    this.enemy=enemy;
    this.elapsed=0;
    this.recoveryTime=0;
    this.recovering=false;
    this.exchange=0;
    this.phase='approach';
    this.poses=new Map();
    this.reactions=new WeakMap();
    this.actors=new Set();
    this.impactPulse=0;
    this.fallenOfficers=0;
    this.finished=false;
  }
  get players() {
    // P02 (index 0) is deliberately skipped: preserve the approved reference.
    const available=this.game.crowdManager.playerStickmen.filter((actor,i)=>i>0 && actor.parent);
    const visible=available.slice(0,MAX_ACTORS_PER_SIDE);
    // Let a recruited medic appear at the front when someone needs help.
    const medic=available.find(a=>a.userData.bonusFaction==='infirmieres');
    if(medic && !visible.includes(medic) && visible.length)visible[visible.length-1]=medic;
    return visible;
  }
  get officers() {
    const group=this.enemy.meshGroup;
    return group?.children.filter(c=>c.visible && !c.userData.combatRetired &&
      ['crs','bac','bravm'].includes(c.userData.faction)).slice(0,MAX_ACTORS_PER_SIDE) || [];
  }
  onExchange({policeLost=0, protestersLost=0, blocked=false}={}) {
    if(this.recovering)return;
    this.exchange++;
    this.fallenOfficers+=policeLost;
    this.impactPulse=Math.max(this.impactPulse,.65+Math.min(.35,policeLost*.1));
    // Recoil tracks what actually happened, not a pre-scripted animation.
    const fronts=[[this.players,protestersLost>0||blocked],[this.officers,policeLost>0]];
    for(const [actors,affected] of fronts){
      if(!actors.length || !affected)continue;
      const actor=actors[(this.exchange*3)%actors.length];
      this.reactions.set(actor,this.elapsed+.52);
    }
    if(protestersLost>0){
      const medic=this.players.find(a=>a.userData.bonusFaction==='infirmieres');
      if(medic)this.reactions.set(medic,this.elapsed+.95);
    }
  }
  finish() { this.recovering=true;this.recoveryTime=0;this.phase='recover'; }
  cachePose(root,actor) {
    let pose=this.poses.get(root);
    if(pose)return pose;
    const arms={left:null,right:null,spine:null};
    root.traverse(o=>{
      if(!o.isBone)return;
      const n=o.name.toLowerCase().replace(/[^a-z0-9]/g,'');
      if(!arms.left && (n.includes('lupperarm')||n.includes('leftupperarm')))arms.left=o;
      if(!arms.right && (n.includes('rupperarm')||n.includes('rightupperarm')))arms.right=o;
      if(!arms.spine && (n.endsWith('spine2')||n.endsWith('spine1')||n.endsWith('chest')))arms.spine=o;
    });
    pose={baseX:root.position.x,baseY:root.position.y,baseZ:root.position.z,
      rx:root.rotation.x,rz:root.rotation.z,arms,actor};
    this.actors.add(actor);
    this.poses.set(root,pose);
    return pose;
  }
  applyActor(actor,police,index,weight) {
    const human=actor.userData.realHumanoid;
    const root=police?(actor.userData.policeModel||actor):(human?.model||actor);
    if(!root)return;
    const pose=this.cachePose(root,actor);
    const dir=police?1:-1; // toward the opposing front (Z)
    const phase=this.phase;
    const sideOffset=index*.83;
    const contact=smooth((this.elapsed-INTRO_SECONDS)/.28);
    const beating=Math.sin(this.elapsed*9.5+sideOffset*1.3);
    const reactionUntil=this.reactions.get(actor)??0;
    const recoil=reactionUntil>this.elapsed?
      Math.sin(Math.PI*clamp01(1-(reactionUntil-this.elapsed)/.55)):0;
    const pushing=phase==='approach'?.15:phase==='contact'?.62+.38*contact:
      phase==='pressure'?.56+.18*beating:.12;
    const role=actor.userData.bonusFaction;
    // Firefighters brace under pressure, medics help with a visible gesture.
    const medicHelping=!police&&role==='infirmieres'&&reactionUntil>this.elapsed;
    const firefighter=!police&&role==='pompiers';
    const intensity=weight*pushing*(firefighter?.88:1);
    root.rotation.x=pose.rx+dir*(.16*intensity-.24*recoil*weight)
      +(medicHelping?.12:0);
    root.rotation.z=pose.rz+(.018*Math.sin(this.elapsed*5+sideOffset)
      +.13*recoil+(medicHelping?.13:0))*weight;
    root.position.z=pose.baseZ+dir*(.26*intensity-.22*recoil*weight);
    root.position.x=pose.baseX+.055*intensity*Math.sin(this.elapsed*5+sideOffset);
    root.position.y=pose.baseY-(.055*intensity)+.045*recoil-(medicHelping?.14:0);
    const {arms}=pose;
    // Mixer.write -> additive pose, no accumulated skeleton drift.
    // Hide the effect during recover to return to the unaltered Walk/Idle clips.
    if(arms.left)arms.left.rotation.x+=dir*.38*intensity-.10*recoil+(medicHelping?.35:0);
    if(arms.right)arms.right.rotation.x+=dir*.33*intensity+.13*recoil+(medicHelping?.62:0);
    if(arms.spine)arms.spine.rotation.x+=dir*.07*intensity;
    if(police){
      const shield=actor.userData.policeModel?.userData.combatShield;
      if(shield){
        const base=shield.userData.combatBaseX??shield.rotation.x;
        shield.userData.combatBaseX=base;
        shield.rotation.x=base-.20*intensity+.22*recoil;
      }
    }
    actor.userData.combatVisualState=this.phase;
  }
  step(dt) {
    if(this.finished)return;
    this.elapsed+=dt;
    this.impactPulse=Math.max(0,this.impactPulse-dt*2.3);
    if(this.recovering)this.recoveryTime+=dt;
    this.phase=visualCombatPhase(this.elapsed,this.recovering);
    const weight=visualCombatWeight(this.elapsed,this.recovering,this.recoveryTime);
    const players=this.players,officers=this.officers;
    for(let i=0;i<players.length;i++)this.applyActor(players[i],false,i,weight);
    for(let i=0;i<officers.length;i++)this.applyActor(officers[i],true,i,weight);
    if(this.recovering && this.recoveryTime>=RECOVER_SECONDS)this.dispose();
  }
  dispose() {
    if(this.finished)return;
    this.finished=true;
    for(const [root,pose] of this.poses){
      // A retired CRS is now independently falling in world space.
      if(pose.actor?.userData.combatRetired)continue;
      root.position.set(pose.baseX,pose.baseY,pose.baseZ);
      root.rotation.x=pose.rx;
      root.rotation.z=pose.rz;
    }
    for(const actor of this.actors) {
      if(actor.userData.combatVisualState)delete actor.userData.combatVisualState;
      const shield=actor.userData.policeModel?.userData.combatShield;
      if(shield && shield.userData.combatBaseX!==undefined){
        shield.rotation.x=shield.userData.combatBaseX;
      }
    }
    this.poses.clear();
    this.actors.clear();
  }
}

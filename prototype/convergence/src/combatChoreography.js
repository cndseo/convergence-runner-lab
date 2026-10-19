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
    this.finished=false;
  }
  get players() {
    // P02 (index 0) is deliberately skipped: preserve the approved reference.
    return this.game.crowdManager.playerStickmen.slice(1,MAX_ACTORS_PER_SIDE+1);
  }
  get officers() {
    const group=this.enemy.meshGroup;
    return group?.children.filter(c=>['crs','bac','bravm'].includes(c.userData.faction)).slice(0,MAX_ACTORS_PER_SIDE) || [];
  }
  onExchange() {
    if(this.recovering)return;
    this.exchange++;
    for (const [actors,salt] of [[this.players,0],[this.officers,3]]) {
      if(!actors.length)continue;
      const actor=actors[(this.exchange*3+salt)%actors.length];
      this.reactions.set(actor,this.elapsed+.38);
    }
  }
  finish() { this.recovering=true;this.recoveryTime=0;this.phase='recover'; }
  cachePose(root) {
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
      rx:root.rotation.x,rz:root.rotation.z,arms};
    this.poses.set(root,pose);
    return pose;
  }
  applyActor(actor,police,index,weight) {
    const human=actor.userData.realHumanoid;
    const root=police?(actor.userData.policeModel||actor):human?.model;
    if(!root)return;
    const pose=this.cachePose(root);
    const dir=police?1:-1; // toward the opposing front (Z)
    const phase=this.phase;
    const sideOffset=index*.83;
    const contact=smooth((this.elapsed-INTRO_SECONDS)/.28);
    const beating=Math.sin(this.elapsed*9.5+sideOffset*1.3);
    const recoil=(this.reactions.get(actor)??0)>this.elapsed?
      Math.sin(Math.PI*clamp01(1-((this.reactions.get(actor)-this.elapsed)/.38))):0;
    const pushing=phase==='approach'?.15:phase==='contact'?.62+.38*contact:
      phase==='pressure'?.56+.18*beating:.12;
    const intensity=weight*pushing;
    root.rotation.x=pose.rx+dir*(.12*intensity-.18*recoil*weight);
    root.rotation.z=pose.rz+(.025*Math.sin(this.elapsed*7+sideOffset)+.08*recoil)*weight;
    root.position.z=pose.baseZ+dir*(.22*intensity-.17*recoil*weight);
    root.position.x=pose.baseX+.055*intensity*Math.sin(this.elapsed*5+sideOffset);
    root.position.y=pose.baseY-(.055*intensity)+.025*recoil;
    const {arms}=pose;
    // Mixer.write -> additive pose, no accumulated skeleton drift.
    // Hide the effect during recover to return to the unaltered Walk/Idle clips.
    if(arms.left)arms.left.rotation.x+=dir*.38*intensity-.10*recoil;
    if(arms.right)arms.right.rotation.x+=dir*.33*intensity+.13*recoil;
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
      // Restore all procedural offsets; the original GLB/Walk remains intact.
      root.position.set(pose.baseX,pose.baseY,pose.baseZ);
      root.rotation.x=pose.rx;
      root.rotation.z=pose.rz;
    }
    for(const actor of [...this.players,...this.officers]) {
      if(actor.userData.combatVisualState)delete actor.userData.combatVisualState;
      const shield=actor.userData.policeModel?.userData.combatShield;
      if(shield && shield.userData.combatBaseX!==undefined){
        shield.rotation.x=shield.userData.combatBaseX;
      }
    }
    this.poses.clear();
  }
}

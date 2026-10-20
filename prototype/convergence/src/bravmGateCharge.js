// Collision-triggered BRAV-M street attack. Uses the existing gate's real
// reference riders, not a duplicated bike texture, and resolves damage once.
// A full ~3-second arrival from the visible far end of the Parisian street.
const CHARGE_TIME=2.92;
const RECOVERY_TIME=.34;
const APPROACH_METRES=29;
const smooth=x=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};

export class BravmGateCharge {
  constructor(game){this.game=game;this.current=null;}
  start(gate,choice,side){
    if(this.current)return false;
    const g=this.game,root=(side==='left'?gate.leftMesh:gate.rightMesh)?.userData?.root;
    const bikes=root?.userData?.bravmRiders||[];
    const actorList=[];
    for(let i=0;i<bikes.length;i++){
      const rider=bikes[i];
      // Detach before hiding the passed portal. Existing sprite & GLB remain.
      g.scene.attach(rider);
      rider.userData.dynamic=true;
      rider.visible=true;
      // Spawn about 29–32 metres up the road instead of emerging just
      // 3–4 metres in front of the player. Keep both in visible street lanes.
      const startX=g.playerX+(i===0?-1.95:1.95);
      const startZ=-g.trackZ-APPROACH_METRES-i*3;
      rider.position.set(startX,rider.position.y,startZ);
      actorList.push({rider,x:startX,y:rider.position.y,z:startZ,index:i});
    }
    // Keep runner stationary while the motorcycle approaches. The regular
    // game update loop is frozen so no second portal or combat can resolve.
    this.current={gate,choice,side,actors:actorList,elapsed:0,hit:false,
      impactZ:-g.trackZ,impactX:g.playerX,runId:g.runId,speed:g.speed};
    g.state='bravm_charge';
    g.speed=0;
    g.audio.playBravmMotorbikeCharge?.();
    return true;
  }
  update(dt){
    const c=this.current,g=this.game;
    if(!c||g.state!=='bravm_charge')return;
    if(c.runId!==g.runId){this.clear();return;}
    c.elapsed+=Math.min(.05,Math.max(0,dt));
    const t=c.elapsed,u=smooth(t/CHARGE_TIME);
    for(const unit of c.actors){
      const {rider,x,y,z,index}=unit;
      const targetX=c.impactX+(index===0?-.54:.54);
      // Final position is just ahead of the player, not through their body.
      const targetZ=c.impactZ-.52-(index*.18);
      const advance=u;
      rider.position.set(x+(targetX-x)*advance,
        y+Math.sin(t*27+index)*.038*(1-u),
        z+(targetZ-z)*advance);
      rider.rotation.y=0;
      rider.rotation.z=Math.sin(t*6+index)*.035*(1-u);
    }
    if(t>=CHARGE_TIME&&!c.hit){
      c.hit=true; // set before mutating game state to prevent reentrant damage
      const before=g.crowdManager.getPlayerCount();
      g.applyGate(c.choice,c.side);
      const lost=before-g.crowdManager.getPlayerCount();
      c.lost=lost;
      if(lost>0){
        // Each falling rider already emits a flash; avoid layering a giant
        // opaque explosion over the three toppled protesters.
        // No fake punch / arcade impact noise on motorcycle collision.
        g.ui.screenShake(8);
        g.ui.updateCount(g.crowdManager.getPlayerCount());
      }
    }
    if(t>=CHARGE_TIME+RECOVERY_TIME||g.state==='lose'){
      this.clear();
      if(g.state==='bravm_charge'){g.state='playing';g.speed=c.speed;}
    }
  }
  clear(){
    const c=this.current;
    if(!c)return;
    for(const {rider} of c.actors){
      rider.removeFromParent();
      // Materials/textures are shared with cached 3D models and sprites.
      // Remove scene instances without disposing shared GLB buffers here.
    }
    this.current=null;
    this.game.audio.stopBravmMotorbikeCharge?.();
  }
}

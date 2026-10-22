import * as THREE from 'three';
import {MAX_CROWD} from './tactics.mjs';
import {familyRoster,changeRoster} from './heroRules.mjs';
import {crowdDensity,crowdSlot} from './humanDensity.mjs';
import { makeCitizen } from './characters.js';
import { attachAnimatedHumanoid, updateAnimatedHumanoids, clearHumanoids } from './humanoidAssets.js';
import { applyCostumeToCrowd, disposeRunnerCostume } from './characterCostumes.js';

export class CrowdManager {
    constructor(scene, game) {
        this.scene = scene;
        this.game = game;
        this.playerStickmen = [];
        this.playerGroup = null;
        this.playerCount = 0;
        this.animTime = 0;
        this.density = crowdDensity(0);
        this.densityGrowth = 1;
        this.previousVisualTotal = 0;
        this.flyingBodies = [];    // Ragdoll stickmen flying away
        this.fallingOfficers = []; // Retain the real equipped CRS models during a fall
        this.impactFlashes = [];   // Impact burst rings
        this.sparkParticles = [];  // Small spark particles
        this.trailParticles = [];  // Trailing particles behind flying bodies
    }

    clear() {
        clearHumanoids(this);
        if (this.playerGroup) {
            this.scene.remove(this.playerGroup);
            this.playerGroup.traverse(child => {
                if (child.geometry && !child.userData.sharedHumanoidAsset) child.geometry.dispose();
                if (child.material && !child.userData.sharedHumanoidAsset) child.material.dispose();
            });
        }
        this.playerStickmen = [];
        this.playerGroup = null;
        this.playerCount = 0;
        this.density = crowdDensity(0);
        this.previousVisualTotal = 0;
        this.densityGrowth = 1;
        
        // Clean up effects
        this.fallingOfficers.forEach(f => { this.scene.remove(f.officer); });
        this.fallingOfficers = [];
        this.flyingBodies.forEach(b => { this.scene.remove(b.mesh); });
        this.flyingBodies = [];
        this.impactFlashes.forEach(f => { this.scene.remove(f.mesh); });
        this.impactFlashes = [];
        this.sparkParticles.forEach(p => { this.scene.remove(p.mesh); });
        this.sparkParticles = [];
        this.trailParticles.forEach(p => { this.scene.remove(p.mesh); });
        this.trailParticles = [];
    }

    createPlayerCrowd(count) {
        this.clear();
        this.playerCount = count;
        this.roster=familyRoster(count,this.game?.heroes?.active?this.game.heroes.profile.family:'gilets');
        this.refreshDensity();
        this.playerGroup = new THREE.Group();
        this.playerGroup.userData.dynamic = true;

        for (let i = 0; i < Math.min(count,MAX_CROWD); i++) {
            this.addStickmanToGroup(i);
        }

        this.scene.add(this.playerGroup);
        // Flag the costume before the asynchronous humanoid loader can run.
        const costume=this.game?.activeCostume;
        if(costume && this.game?.mode!=='daily' && this.playerStickmen[1]){
            this.playerStickmen[1].userData.costumeAvatar=costume;
            applyCostumeToCrowd(this,costume);
        }
        attachAnimatedHumanoid(this);
    }

    addStickmanToGroup(index) {
        let color;
        if (this.game && this.game.equippedSkin === 'rainbow') {
            const rainbowColors = [0xFF1744, 0xFF9100, 0xFFEA00, 0x00E676, 0x2979FF, 0xD500F9];
            color = rainbowColors[index % rainbowColors.length];
        } else {
            color = this.game ? this.game.getPlayerColor() : 0x2196F3;
        }
        const stickman = makeCitizen(index);
        const pos = this.getFormationPosition(index);
        stickman.position.set(pos.x, 0, pos.z);
        stickman.userData.index = index;
        if(this.roster?.[index]){stickman.userData.community=this.roster[index];stickman.userData.bonusFaction=this.roster[index];}
        if(index===0&&this.game?.heroes?.active)stickman.userData.heroProfile=this.game.heroes.profile;
        // Start with a pop-in scale animation
        stickman.scale.set(0, 0, 0);
        stickman.userData.spawnTime = this.animTime;
        stickman.userData.spawning = true;
        this.playerGroup.add(stickman);
        this.playerStickmen.push(stickman);
    }

    refreshDensity() {
        const shields=Math.max(0,Math.min(48,Math.floor(this.game?.shields||0)));
        if(Math.min(MAX_CROWD,this.playerCount)===this.density.count && (this.playerCount?shields*2:0)===this.density.protectors)return;
        const next=crowdDensity(this.playerCount,shields);
        if(next.count!==this.density.count||next.protectors!==this.density.protectors){
            this.previousVisualTotal=this.density.total;
            this.densityGrowth=next.total>this.density.total ? 0 : 1;
            this.density=next;
        }
    }

    getFormationPosition(index,out={}) {
        return crowdSlot(index,this.density,out);
    }

    getCombatFormationPosition(index,out={}) {
        const enemy=this.game?.fightingEnemy;
        if(!enemy)return this.getFormationPosition(index,out);
        crowdSlot(index,this.density,out);
        out.z+=this.game.trackZ-enemy.z+1.33;
        return out;
    }

    getVisualPosition(index,out={}) {
        return this.game?.state==='fighting'
            ? this.getCombatFormationPosition(index,out) : this.getFormationPosition(index,out);
    }

    getCameraExpansion(){return Math.max(0,this.density.depth-1.4);}
    getCameraHeight(){return 6.3+this.getCameraExpansion()*.72;}
    getCameraDistance(){return 8.4+this.getCameraExpansion()*1.45+Math.max(0,this.density.columns-7)*.4;}

    createStickman(color) {
        const group = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color });

        // Body
        const bodyGeo = new THREE.CapsuleGeometry(0.15, 0.5, 4, 4);
        const body = new THREE.Mesh(bodyGeo, mat);
        body.position.y = 0.7;
        body.castShadow = true;
        group.add(body);

        // Head
        const headGeo = new THREE.SphereGeometry(0.2, 8, 8);
        const head = new THREE.Mesh(headGeo, mat);
        head.position.y = 1.2;
        head.castShadow = true;
        group.add(head);

        // Legs
        const legGeo = new THREE.CapsuleGeometry(0.07, 0.3, 4, 4);
        const leftLeg = new THREE.Mesh(legGeo, mat);
        leftLeg.position.set(-0.1, 0.2, 0);
        group.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeo, mat);
        rightLeg.position.set(0.1, 0.2, 0);
        group.add(rightLeg);

        // Arms
        const armGeo = new THREE.CapsuleGeometry(0.05, 0.25, 4, 4);
        const leftArm = new THREE.Mesh(armGeo, mat);
        leftArm.position.set(-0.25, 0.75, 0);
        leftArm.rotation.z = 0.3;
        group.add(leftArm);
        const rightArm = new THREE.Mesh(armGeo, mat);
        rightArm.position.set(0.25, 0.75, 0);
        rightArm.rotation.z = -0.3;
        group.add(rightArm);

        return group;
    }

    addToPlayerCrowd(amount, faction=null, choice=null) {
        const startIndex = this.playerStickmen.length;
        this.playerCount += amount;
        this.roster=changeRoster(this.roster,this.playerCount,choice||{bonusFaction:faction},this.game?.heroes?.active?this.game.heroes.profile.family:'gilets');
        this.refreshDensity();

        for (let i = startIndex; i < Math.min(this.playerCount,MAX_CROWD); i++) {
            this.addStickmanToGroup(i);
            if(faction)this.playerStickmen.at(-1).userData.bonusFaction=faction;
        }
        // Gate reinforcements must also become skinned walkers / LOD sprites.
        // Previously newly recruited citizens stayed as geometric placeholders.
        attachAnimatedHumanoid(this);
    }

    removeFromPlayerCrowd(amount, {knockdown=false}={}) {
        amount = Math.min(amount, this.playerCount);
        if (amount <= 0) return;

        const nextCount=Math.max(0,this.playerCount-amount);
        const removedModels=Math.max(0,this.playerStickmen.length-Math.min(nextCount,MAX_CROWD));
        for(let i=0;i<Math.min(5,amount-removedModels);i++){
            const runner=this.playerStickmen.at(-1-i);
            if(runner)this.launchRagdoll(runner,this.game?.getPlayerColor?.()||0x2196f3,null,{knockdown});
        }
        for (let i = 0; i < removedModels; i++) {
            if (this.playerStickmen.length > 0) {
                const stickman = this.playerStickmen.pop();
                // Instead of just removing, launch it as a ragdoll
                let ragdollColor;
                if (this.game && this.game.equippedSkin === 'rainbow') {
                    const rainbowColors = [0xFF1744, 0xFF9100, 0xFFEA00, 0x00E676, 0x2979FF, 0xD500F9];
                    ragdollColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                } else {
                    ragdollColor = this.game ? this.game.getPlayerColor() : 0x2196F3;
                }
                if (i < 5) this.launchRagdoll(stickman, ragdollColor, null, {knockdown});
                const h=stickman.userData.realHumanoid;
                if(h){h.mixer.stopAllAction();h.mixer.uncacheRoot(h.model);h.dispose?.();h.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();});}
                disposeRunnerCostume(stickman);
                this.playerGroup.remove(stickman);
            }
        }
        this.playerCount = Math.max(0, this.playerCount - amount);
        if(this.roster)this.roster=this.roster.slice(0,this.playerCount);
        this.refreshDensity();
    }

    launchOfficerFall(officer) {
        if (!officer?.parent || officer.userData.combatRetired) return false;
        // Re-parent the actual equipped officer to world space: helmet, shield
        // and uniform remain visible for the whole fall (no dummy stickman).
        officer.updateWorldMatrix(true, true);
        this.scene.attach(officer);
        officer.userData.combatRetired = true;
        this.fallingOfficers.push({
            officer, elapsed: 0, duration: 2.15,
            origin: officer.position.clone(), rotation: officer.rotation.clone(),
            scale: officer.scale.clone(),
            side: (this.fallingOfficers.length % 2 ? -1 : 1)
        });
        return true;
    }

    updateFallingOfficers(dt) {
        for (let i = this.fallingOfficers.length - 1; i >= 0; i--) {
            const fx = this.fallingOfficers[i];
            fx.elapsed += dt;
            const progress = Math.min(1, fx.elapsed / .52);
            const ease = progress * progress * (3 - 2 * progress);
            const officer = fx.officer;
            // Stumble sideways, fall to the street and stay down briefly.
            officer.rotation.set(
                fx.rotation.x - .13 * ease,
                fx.rotation.y,
                fx.rotation.z + fx.side * 1.48 * ease
            );
            officer.position.set(
                fx.origin.x + fx.side * .13 * ease,
                fx.origin.y + .12 * ease,
                fx.origin.z + .12 * ease
            );
            const fade = Math.max(0, Math.min(1, (fx.duration - fx.elapsed) / .30));
            officer.scale.copy(fx.scale).multiplyScalar(Math.max(.001, fade));
            if (fx.elapsed >= fx.duration) {
                this.scene.remove(officer);
                this.fallingOfficers.splice(i, 1);
            }
        }
    }

    removeEnemyCrowd(enemy) {
        // Officers already fell one by one during the exchange.
        // Only clean up the now-empty unit; do not explode the whole squad.
        if(enemy.meshGroup)enemy.meshGroup.visible=false;
        if(enemy.labelMesh)enemy.labelMesh.visible=false;
    }

    // ============ RAGDOLL FLYING STICKMAN ============
    launchRagdoll(stickman, color, parentGroup, {knockdown=false}={}) {
        // Get world position of the stickman
        const worldPos = new THREE.Vector3();
        stickman.getWorldPosition(worldPos);

        // Create a simplified ragdoll body
        const ragdoll = this.createStickman(color);
        ragdoll.position.copy(worldPos);
        ragdoll.userData.dynamic = true;

        // Random launch direction (mostly up and outward)
        const launchAngle = Math.random() * Math.PI * 2;
        const launchPower = 4 + Math.random() * 6;
        const upPower = 6 + Math.random() * 5;

        ragdoll.userData.velocity = knockdown
            ? new THREE.Vector3(Math.cos(launchAngle)*2.6,2.8,3.5)
            : new THREE.Vector3(Math.cos(launchAngle)*launchPower,upPower,
                Math.sin(launchAngle)*launchPower);
        ragdoll.userData.angularVel = knockdown
            ? new THREE.Vector3(7,(Math.random()-.5)*2,4)
            : new THREE.Vector3((Math.random()-.5)*15,(Math.random()-.5)*10,
                (Math.random()-.5)*15);
        ragdoll.userData.life = 1.5;
        ragdoll.userData.maxLife = 1.5;
        ragdoll.userData.color = color;
        ragdoll.userData.trailTimer = 0;

        // Make material transparent for fade-out
        ragdoll.traverse(child => {
            if (child.material) {
                child.material = child.material.clone();
                child.material.transparent = true;
            }
        });

        this.scene.add(ragdoll);
        this.flyingBodies.push({ mesh: ragdoll });

        // Spawn impact flash at launch position
        this.spawnImpactFlash(worldPos, color);

        // Spawn burst sparks
        this.spawnSparks(worldPos, color, 5);
    }

    // ============ IMPACT FLASH (expanding ring) ============
    spawnImpactFlash(position, color) {
        const ringGeo = new THREE.RingGeometry(0.1, 0.3, 16);
        const ringMat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 1,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(position);
        ring.position.y += 0.8;
        ring.rotation.x = -Math.PI / 2;
        ring.userData.dynamic = true;

        this.scene.add(ring);
        this.impactFlashes.push({
            mesh: ring,
            life: 0.4,
            maxLife: 0.4
        });

        // Also spawn a bright sphere flash
        const flashGeo = new THREE.SphereGeometry(0.3, 8, 8);
        const flashMat = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.9
        });
        const flash = new THREE.Mesh(flashGeo, flashMat);
        flash.position.copy(position);
        flash.position.y += 0.8;
        flash.userData.dynamic = true;
        this.scene.add(flash);
        this.impactFlashes.push({
            mesh: flash,
            life: 0.2,
            maxLife: 0.2
        });
    }

    // ============ SPARK PARTICLES ============
    spawnSparks(position, color, count) {
        for (let i = 0; i < count; i++) {
            const geo = new THREE.SphereGeometry(0.06 + Math.random() * 0.06, 4, 4);
            const mat = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? color : 0xFFFFFF,
                transparent: true,
                opacity: 1
            });
            const spark = new THREE.Mesh(geo, mat);
            spark.position.copy(position);
            spark.position.y += 0.5 + Math.random() * 0.5;
            spark.userData.dynamic = true;

            const angle = Math.random() * Math.PI * 2;
            const speed = 3 + Math.random() * 5;
            spark.userData.velocity = new THREE.Vector3(
                Math.cos(angle) * speed,
                2 + Math.random() * 4,
                Math.sin(angle) * speed
            );
            spark.userData.life = 0.5 + Math.random() * 0.3;
            spark.userData.maxLife = spark.userData.life;

            this.scene.add(spark);
            this.sparkParticles.push({ mesh: spark });
        }
    }

    // ============ DEATH EFFECT (called from game.js fight) ============
    spawnDeathEffect(x, z, color) {
        const pos = new THREE.Vector3(
            x + (Math.random() - 0.5) * 2,
            0.5,
            z + (Math.random() - 0.5) * 1
        );
        this.spawnImpactFlash(pos, color);
        this.spawnSparks(pos, color, 4);
    }

    // The real rendered formation: animated actors and GPU instances together.
    getDisplayedCount() { return this.density.total; }

    getPlayerCount() {
        return this.playerCount;
    }

    updatePlayerPosition(x, z) {
        if (this.playerGroup) {
            this.playerGroup.position.set(x, 0, z);
        }
    }

    update(delta) {
        this.refreshDensity();
        this.densityGrowth=Math.min(1,this.densityGrowth+delta*3);
        if(this.playerStickmen.some(r=>!r.userData.realHumanoid&&!r.userData.lowDetail))attachAnimatedHumanoid(this);
        this.animTime += delta * 2.6; // Measured walking cadence for fallback low-detail citizens
        
        // Animate low-detail demonstrators walking
        if (this.playerStickmen.length > 0) {
            const slot=this._formationTarget??={x:0,z:0};
            this.playerStickmen.forEach((stickman, i) => {
                // Spawn pop-in animation
                if (stickman.userData.spawning) {
                    const elapsed = this.animTime - stickman.userData.spawnTime;
                    const t = Math.min(elapsed * 2, 1);
                    const scale = Math.min(t * 1.2, 1) * (1 + Math.sin(t * Math.PI) * 0.3);
                    stickman.scale.set(
                        Math.min(scale, 1),
                        Math.min(scale, 1),
                        Math.min(scale, 1)
                    );
                    if (t >= 1) {
                        stickman.userData.spawning = false;
                        stickman.scale.set(1, 1, 1);
                    }
                }

                const target = this.game?.state==='fighting'
                    ? this.getCombatFormationPosition(i,slot)
                    : this.getFormationPosition(i,slot);
                stickman.position.x += (target.x - stickman.position.x) * Math.min(1, delta * 8);
                stickman.position.z += (target.z - stickman.position.z) * Math.min(1, delta * 8);
                const offset = i * 0.7;
                const walkCycle = this.animTime + offset;
                
                // Gentle vertical weight shift rather than sprint bouncing
                if (!stickman.userData.spawning) {
                    stickman.position.y = Math.abs(Math.sin(walkCycle * 2)) * 0.045;
                }
                
                // Upright posture for the march
                const children = stickman.children;
                // Body tilt (children[0] = body)
                if (children.length >= 1) {
                    children[0].rotation.x = 0.01 + Math.sin(walkCycle) * 0.018;
                }
                // Head bob (children[1] = head)
                if (children.length >= 2) {
                    children[1].rotation.x = Math.sin(walkCycle * 2) * 0.018;
                }
                
                // Controlled leg swing: walking, not running
                if (children.length >= 4) {
                    children[2].rotation.x = Math.sin(walkCycle) * 0.36; // left leg
                    children[3].rotation.x = -Math.sin(walkCycle) * 0.36; // right leg
                }
                // Gentle opposite arm swing
                if (children.length >= 6) {
                    children[4].rotation.x = -Math.sin(walkCycle) * 0.25; // left arm
                    children[4].rotation.z = 0.17 + Math.sin(walkCycle * 2) * 0.04;
                    children[5].rotation.x = Math.sin(walkCycle) * 0.25; // right arm
                    children[5].rotation.z = -0.17 - Math.sin(walkCycle * 2) * 0.04;
                }
            });
        }

        updateAnimatedHumanoids(this,delta);

        // Update all effects
        this.updateFlyingBodies(delta);
        this.updateFallingOfficers(delta);
        this.updateImpactFlashes(delta);
        this.updateSparkParticles(delta);
        this.updateTrailParticles(delta);
    }

    updateFlyingBodies(delta) {
        for (let i = this.flyingBodies.length - 1; i >= 0; i--) {
            const body = this.flyingBodies[i];
            const mesh = body.mesh;
            const ud = mesh.userData;

            ud.life -= delta;
            const lifeRatio = ud.life / ud.maxLife;

            // Physics
            ud.velocity.y -= 20 * delta; // gravity
            mesh.position.x += ud.velocity.x * delta;
            mesh.position.y += ud.velocity.y * delta;
            mesh.position.z += ud.velocity.z * delta;

            // Tumbling rotation
            mesh.rotation.x += ud.angularVel.x * delta;
            mesh.rotation.y += ud.angularVel.y * delta;
            mesh.rotation.z += ud.angularVel.z * delta;

            // Slow down angular velocity
            ud.angularVel.multiplyScalar(0.98);

            // Fade out and shrink in last 30% of life
            if (lifeRatio < 0.3) {
                const fadeRatio = lifeRatio / 0.3;
                mesh.traverse(child => {
                    if (child.material) {
                        child.material.opacity = fadeRatio;
                    }
                });
                mesh.scale.setScalar(fadeRatio);
            }

            // Spawn trail particles
            ud.trailTimer += delta;
            if (ud.trailTimer > 0.05 && lifeRatio > 0.3) {
                ud.trailTimer = 0;
                this.spawnTrailParticle(mesh.position, ud.color);
            }

            // Bounce off ground
            if (mesh.position.y < 0.2 && ud.velocity.y < 0) {
                ud.velocity.y *= -0.4;
                ud.velocity.x *= 0.7;
                ud.velocity.z *= 0.7;
                mesh.position.y = 0.2;
                // Spawn ground hit sparks
                if (Math.abs(ud.velocity.y) > 1) {
                    this.spawnSparks(mesh.position, ud.color, 2);
                }
            }

            // Remove when dead
            if (ud.life <= 0) {
                this.scene.remove(mesh);
                mesh.traverse(child => {
                    if (child.geometry && !child.userData.sharedHumanoidAsset) child.geometry.dispose();
                    if (child.material && !child.userData.sharedHumanoidAsset) child.material.dispose();
                });
                this.flyingBodies.splice(i, 1);
            }
        }
    }

    updateImpactFlashes(delta) {
        for (let i = this.impactFlashes.length - 1; i >= 0; i--) {
            const flash = this.impactFlashes[i];
            flash.life -= delta;
            const ratio = flash.life / flash.maxLife;

            // Expand and fade
            const scale = 1 + (1 - ratio) * 4;
            flash.mesh.scale.set(scale, scale, scale);
            flash.mesh.material.opacity = ratio * 0.8;

            if (flash.life <= 0) {
                this.scene.remove(flash.mesh);
                flash.mesh.geometry.dispose();
                flash.mesh.material.dispose();
                this.impactFlashes.splice(i, 1);
            }
        }
    }

    updateSparkParticles(delta) {
        for (let i = this.sparkParticles.length - 1; i >= 0; i--) {
            const spark = this.sparkParticles[i];
            const mesh = spark.mesh;
            const ud = mesh.userData;

            ud.life -= delta;
            const ratio = ud.life / ud.maxLife;

            // Physics
            ud.velocity.y -= 12 * delta;
            mesh.position.x += ud.velocity.x * delta;
            mesh.position.y += ud.velocity.y * delta;
            mesh.position.z += ud.velocity.z * delta;

            // Fade and shrink
            mesh.material.opacity = ratio;
            mesh.scale.setScalar(ratio);

            // Slow down
            ud.velocity.multiplyScalar(0.96);

            if (ud.life <= 0 || mesh.position.y < -1) {
                this.scene.remove(mesh);
                mesh.geometry.dispose();
                mesh.material.dispose();
                this.sparkParticles.splice(i, 1);
            }
        }
    }

    spawnTrailParticle(position, color) {
        const geo = new THREE.SphereGeometry(0.04, 4, 4);
        const mat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.6
        });
        const particle = new THREE.Mesh(geo, mat);
        particle.position.copy(position);
        particle.position.x += (Math.random() - 0.5) * 0.2;
        particle.position.y += (Math.random() - 0.5) * 0.2;
        particle.userData.dynamic = true;
        particle.userData.life = 0.4;
        particle.userData.maxLife = 0.4;
        this.scene.add(particle);
        this.trailParticles.push({ mesh: particle });
    }

    updateTrailParticles(delta) {
        for (let i = this.trailParticles.length - 1; i >= 0; i--) {
            const trail = this.trailParticles[i];
            const mesh = trail.mesh;
            mesh.userData.life -= delta;
            const ratio = mesh.userData.life / mesh.userData.maxLife;

            mesh.material.opacity = ratio * 0.6;
            mesh.scale.setScalar(ratio);

            if (mesh.userData.life <= 0) {
                this.scene.remove(mesh);
                mesh.geometry.dispose();
                mesh.material.dispose();
                this.trailParticles.splice(i, 1);
            }
        }
    }

    // Keep backward compat
    updateParticles(delta) {
        // Now handled in update() automatically
    }
}

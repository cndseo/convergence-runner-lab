import * as THREE from 'three';
import { generateTacticalLevel } from './tactics.mjs';
import { generateCampaignLevel } from './campaignPlan.mjs';
import { createArcadeGate, animateArcadeGates } from './arcadeGates.js';
import { disposeTVGateArtwork, makeMarseilleBonusArtwork } from './tvGateArt.js';
import { upgradeBossVan } from './bossAssets.js';
import { disposeKenneyCityDetails } from './kenneyCity.js';
import { makeOfficer, makeVan } from './characters.js';
import { upgradePoliceOfficer, resetPoliceVisualBudget } from './policeAssets.js';
import { upgradeBravMotorcycle, resetMotorcycles } from './motorcycleAssets.js';
import {StreetPresence} from './streetPresence.js';
import { ParisEnvironment } from './parisEnvironment.js';
import { disposeUrbanDecayAssets } from './urbanDecayAssets.js';
import { updateKenneyPoliceLights } from './kenneyCity.js';
import { attachReferenceOfficer, resetReferencePolice } from './policeReferenceSprites.js';

export class LevelGenerator {
    constructor(scene, game) {
        this.scene = scene;
        this.game = game;
        this.gates = [];
        this.marseilleBonus = null;
        this.obstacles = [];
        this.enemies = [];
        this.patrols = [];
        this.boss = null;
        this.meshes = [];
    }

    clear() {
        this.streetPresence?.dispose();
        this.streetPresence=null;
        this.parisEnvironment?.dispose();
        this.parisEnvironment=null;
        disposeUrbanDecayAssets(this.meshes);
        disposeKenneyCityDetails(this.meshes);
        this.gates = [];
        this.marseilleBonus = null;
        this.obstacles = [];
        this.enemies = [];
        this.patrols = [];
        this.boss = null;
        this.meshes.forEach(m => {
            if (!m.isObject3D) return;
            disposeTVGateArtwork(m);
            this.scene.remove(m);
            if (m.geometry) m.geometry.dispose();
            if (m.material) {
                if (Array.isArray(m.material)) m.material.forEach(mat => {mat.map?.dispose();mat.dispose();});
                else {m.material.map?.dispose();m.material.dispose();}
            }
        });
        this.meshes = [];
    }

    generate(level, trackLength) {
        resetPoliceVisualBudget();
        resetMotorcycles();
        resetReferencePolice();
        this.plan = (this.game.mode==='daily'?generateTacticalLevel:generateCampaignLevel)({
            level, seed: this.game.levelSeed ?? level * 20261019,
            startCount: this.game.getStartingCrowdSize(), strength: this.game.getEffectiveStrength()
        });
        trackLength = this.plan.trackLength;
        this.parisEnvironment = new ParisEnvironment(this.scene, this.game, trackLength, this.game.geographicLevel);
        this.createGates(level, trackLength);
        this.createMarseilleBonus(level);
        this.createObstacles(level, trackLength);
        this.createEnemies(level, trackLength);
        this.patrols=this.plan.events.filter(e=>e.type==='patrol').map(e=>({...e,passed:false}));
        this.createBoss(level, trackLength);
        this.streetPresence=new StreetPresence(this.scene,this.game,this.plan,this.game.geographicLevel);
        // Geography replaces only static scenery. TV, police and combat objects remain above.
    }

    updateVisibility(progress) {
        this.parisEnvironment?.update(progress);
        animateArcadeGates(this.gates, progress, performance.now() / 1000);
        updateKenneyPoliceLights(this.meshes,performance.now()/1000);
        // During an encounter, hide nearby giant choice billboards so the camera
        // can show the front line. Gate collision/solver data remain untouched.
        const combatView=['fighting','intro','bravm_charge','final_chase','final_capture'].includes(this.game.state)
            ||(this.game.state==='paused'&&this.game.pausedState==='fighting');
        if(combatView)for(const gate of this.gates){
            // Even portals 30m ahead can cover an encounter in portrait mode.
            // Hide every giant billboard *visually* until marching resumes.
            for(const pane of [gate.leftMesh,gate.rightMesh]){
                if(pane?.userData.root)pane.userData.root.visible=false;
            }
        }
        if(this.marseilleBonus){
            const bonus=this.marseilleBonus, distance=bonus.z-progress;
            bonus.leftMesh.userData.root.visible=(!bonus.passed||bonus.tvState==='missed')&&!combatView&&distance<62&&distance>-8;
        }
        // Preserve all gameplay and collision data, cull only distant visuals.
        for (const enemy of this.enemies) {
            const distance=enemy.z-progress;
            const show=distance<72 && distance> -14;
            if(enemy.meshGroup)enemy.meshGroup.visible=show;
            if(enemy.labelMesh)enemy.labelMesh.visible=show;
        }
        if(this.boss) {
            const show=this.boss.isDefeating || (this.boss.z-progress)<75;
            if(this.boss.meshGroup)this.boss.meshGroup.visible=show;
            if(this.boss.labelMesh)this.boss.labelMesh.visible=show;
        }
    }

    createGates(level, trackLength) {
        for (const event of this.plan.events.filter(e => e.type === 'choice')) {
            // The fixed TV catalog owns both bonus numbers and faction identity.
            // No visual-only change to the chosen faction or computed amount.
            const gate = { z: event.z, passed: false, tvState:'approaching', leftGate: event.left, rightGate: event.right };
            const gateOrder=this.gates.length*2;
            gate.leftMesh = this.createGateMesh(event.left, -2.5, event.z, gateOrder);
            gate.rightMesh = this.createGateMesh(event.right, 2.5, event.z, gateOrder+1);
            this.gates.push(gate);
        }
    }

    createMarseilleBonus(level) {
        if(level!==1 || this.game.mode!=='campaign' || this.game.marseille.levelOneGift.claimed)return;
        // Place the special reward immediately before the first CRS unit,
        // *after* the preceding mathematical TV pair (no 11th tactical gate).
        const firstCRS=this.plan.events.find(e=>e.type==='enemy'&&e.kind==='crs');
        if(!firstCRS)return;
        const z=firstCRS.z-4;
        const root=new THREE.Group();
        root.name='MARSEILLE_BONUS_TV';root.position.set(0,0,-z);
        root.userData.dynamic=true;
        const art=makeMarseilleBonusArtwork(root),pane=art.getObjectByName('TV_LIVE_SCREEN');
        pane.userData.root=root;
        this.scene.add(root);this.meshes.push(root);
        // Separate pickup: never an eleventh decision or a tactical reward.
        this.marseilleBonus={z,passed:false,tvState:'approaching',leftMesh:pane,leftGate:{op:'support',kind:'marseille'}};
    }

    createGateMesh(data, x, z, ordinal=0) {
        return createArcadeGate(data, x, z, this.scene, this.meshes,ordinal);
    }

    createObstacles() {
        // Hazard rows are choices, evaluated once by the same rules as the solver.
        // Their actual vans, barriers and motorbikes are rendered by arcadeGates.
    }

    createEnemies() {
        for (const event of this.plan.events.filter(e => e.type === 'enemy')) {
            const enemy = { kind: event.kind, z: event.z, count: event.count, defeated: false, meshes: [] };
            this.createEnemyCrowd(enemy, enemy.z, enemy.count);
            this.enemies.push(enemy);
        }
    }

    createEnemyCrowd(enemy, z, count) {
        // The central fighting unit keeps its tactical size; instanced patrols
        // occupy the flanks without adding hidden combat difficulty.
        const displayCount = Math.min(Math.max(count, 1), 24);
        const group = new THREE.Group();
        group.userData.dynamic = true;

        for (let i = 0; i < displayCount; i++) {
            const stickman = makeOfficer(enemy.kind,i);
            // Police kit (shields, visor and launchers) faces local +Z,
            // toward the approaching protesters. Do not reverse the officer.
            stickman.position.set(
                (i % 8 - (Math.min(8,displayCount)-1)/2) * .68,
                0,
                -Math.floor(i / 8) * .83
            );
            group.add(stickman);
            upgradePoliceOfficer(stickman,enemy.kind);
            if(enemy.kind==='bravm')upgradeBravMotorcycle(stickman);
            attachReferenceOfficer(stickman,enemy.kind,i);
        }

        group.position.set(0, 0, -z);
        this.scene.add(group);
        this.meshes.push(group);
        enemy.meshGroup = group;
        enemy.officers = [...group.children];
        enemy.visualOfficerCount = displayCount;

        // Count label
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f3f6ff';
        ctx.font = 'bold 26px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(enemy.kind==='bravm'?'BRAV-M':enemy.kind==='bac'?'BAC':'CRS',64,19);
        ctx.font = 'bold 37px system-ui';ctx.fillText(count.toString(),64,49);

        const texture = new THREE.CanvasTexture(canvas);
        const labelGeo = new THREE.PlaneGeometry(1.75, .88);
        const labelMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
        const label = new THREE.Mesh(labelGeo, labelMat);
        // Keep the count readable but off the officers' bodies and faces.
        label.position.set(-2.95, 2.9, -z-.85);
        label.userData.dynamic = true;
        this.scene.add(label);
        this.meshes.push(label);
        enemy.labelMesh = label;
    }

    updateEnemyLabel(enemy) {
        if (!enemy.labelMesh) return;
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f3f6ff';
        ctx.font = 'bold 26px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(enemy.kind==='bravm'?'BRAV-M':enemy.kind==='bac'?'BAC':'CRS',64,19);
        ctx.font = 'bold 37px system-ui';ctx.fillText(Math.max(0,enemy.remainingCount).toString(),64,49);
        
        if (enemy.labelMesh.material.map) {
            enemy.labelMesh.material.map.dispose();
        }
        enemy.labelMesh.material.map = new THREE.CanvasTexture(canvas);
        enemy.labelMesh.material.needsUpdate = true;

        // Keep the visible CRS line in proportion to the *actual* tactical
        // count. A 20-officer proxy for 60 CRS must not vanish after 20 hits.
        this.updateOfficerVisuals(enemy);
    }

    updateOfficerVisuals(enemy) {
        const target = enemy.isBoss ? this.boss : enemy;
        const officers = target?.officers;
        if (!officers?.length || !target.meshGroup) return;
        const original = Math.max(1, enemy.count);
        const remaining = Math.max(0, enemy.remainingCount);
        const wanted = remaining > 0
            ? Math.max(1, Math.ceil(officers.length * remaining / original))
            : 0;
        let standing = officers.reduce((n, officer) =>
            n + Number(officer.parent === target.meshGroup && !officer.userData.combatRetired), 0);
        while (standing > wanted) {
            const officer = officers.findLast(o => o.parent === target.meshGroup && !o.userData.combatRetired);
            if (!officer) break;
            // The officer is detached and animated as the *same dressed model*.
            if (!this.game?.crowdManager?.launchOfficerFall?.(officer)) break;
            standing--;
        }
        target.visualOfficerCount = standing;
    }

    updateBossCount(enemy) {
        if (!this.boss) return;
        this.updateOfficerVisuals(enemy);
        const label = this.boss.labelMesh;
        if (!label) return;
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle='#f3e8d8'; ctx.font='bold 49px system-ui';
        ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.strokeStyle='#152334';ctx.lineWidth=9;
        const message='FRONT CRS : '+Math.max(0,enemy.remainingCount);
        ctx.strokeText(message,256,64);ctx.fillText(message,256,64);
        label.material.map?.dispose();
        label.material.map=new THREE.CanvasTexture(canvas);
        label.material.needsUpdate=true;
    }

    createBoss(level, trackLength) {
        const bossHealth=this.plan.bossHealth;
        this.boss={z:trackLength,health:bossHealth,defeated:false};
        const squad=new THREE.Group();squad.userData.dynamic=true;
        // Final front: CRS line backed by a white van instead of a king stickman.
        for(let i=0;i<13;i++){
            const officer=makeOfficer(i%5===0?'bac':'crs',i);
            // The model's shield is already oriented toward local +Z.
            officer.position.set((i%7-3)*.66,0,Math.floor(i/7)*-.86);
            squad.add(officer);
            upgradePoliceOfficer(officer, i%5===0?'bac':'crs');
            attachReferenceOfficer(officer,i%5===0?'bac':'crs',i);
        }
        // Two flanking motorcycle units; scenery only, no additional tactical damage.
        for(const side of [-1,1]){
            for(let j=0;j<2;j++){
                const rider=makeOfficer('bravm',j);
                rider.position.set(side*(4.2+j*.85),0,-1.1-j*1.9);
                rider.rotation.y=side*Math.PI/10;
                squad.add(rider);
                upgradePoliceOfficer(rider,'bravm');
                upgradeBravMotorcycle(rider);
                attachReferenceOfficer(rider,'bravm',j);
            }
        }
        const vehicle=makeVan();vehicle.scale.set(.85,.85,.85);
        vehicle.position.set(0,0,-4.3);squad.add(vehicle);
        upgradeBossVan(squad,vehicle);
        squad.position.set(0,0,-trackLength);
        this.scene.add(squad);this.meshes.push(squad);
        this.boss.meshGroup=squad;this.boss.officers=squad.children.filter(c=>c!==vehicle);this.boss.visualOfficerCount=this.boss.officers.length;
        this.boss.defeatTime=0;this.boss.isDefeating=false;
        const c=document.createElement('canvas');c.width=512;c.height=128;
        const ctx=c.getContext('2d');
        ctx.fillStyle='#f3e8d8';ctx.font='bold 49px system-ui';
        ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.strokeStyle='#152334';ctx.lineWidth=9;ctx.strokeText('FRONT CRS : '+bossHealth,256,64);
        ctx.fillText('FRONT CRS : '+bossHealth,256,64);
        const label=new THREE.Mesh(new THREE.PlaneGeometry(4.0,1.0),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));
        label.position.set(-2.6,3.4,-trackLength-1.3);label.userData.dynamic=true;this.scene.add(label);this.meshes.push(label);
        this.boss.labelMesh=label;
    }

    shakeBoss() {
        if (!this.boss || !this.boss.meshGroup) return;
        const group = this.boss.meshGroup;
        // Quick shake
        const shakeX = (Math.random() - 0.5) * 0.4;
        const shakeZ = (Math.random() - 0.5) * 0.2;
        group.position.x = shakeX;
        group.position.z += shakeZ;
        // Flash red
        group.traverse(child => {
            if (child.material && child.material.emissive) {
                child.material.emissive = new THREE.Color(0xff0000);
                child.material.emissiveIntensity = 0.6;
            }
        });
        setTimeout(() => {
            if (group) {
                group.position.x = 0;
                group.traverse(child => {
                    if (child.material && child.material.emissiveIntensity) {
                        child.material.emissiveIntensity = 0;
                    }
                });
            }
        }, 80);
    }

    playBossDefeatAnimation() {
        if (!this.boss || !this.boss.meshGroup) return;
        this.boss.isDefeating = true;
        this.boss.defeatTime = 0;
    }

    updateBossDefeat(delta) {
        if (!this.boss || !this.boss.isDefeating || !this.boss.meshGroup) return;
        
        this.boss.defeatTime += delta;
        const t = this.boss.defeatTime;
        const group = this.boss.meshGroup;

        // Stage 1: Shake violently (0 - 0.5s)
        if (t < 0.5) {
            group.position.x = (Math.random() - 0.5) * t * 4;
            group.rotation.z = (Math.random() - 0.5) * t * 0.5;
            // Flash colors
            group.traverse(child => {
                if (child.material && child.material.color) {
                    child.material.emissive = new THREE.Color(0xff0000);
                    child.material.emissiveIntensity = Math.sin(t * 40) * 0.5 + 0.5;
                }
            });
        }
        // Stage 2: Fall apart and shrink (0.5 - 1.2s)
        else if (t < 1.2) {
            const fallProgress = (t - 0.5) / 0.7;
            // Collapse downward
            group.position.y = -fallProgress * 3;
            group.rotation.x = fallProgress * 0.8;
            group.rotation.z = fallProgress * 0.5;
            // Scale down
            const scale = 1 - fallProgress * 0.8;
            group.scale.set(scale, scale * (1 - fallProgress * 0.3), scale);
            // Fade children
            group.traverse(child => {
                if (child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 1 - fallProgress;
                }
            });
            // Scatter parts
            group.children.forEach((child, i) => {
                child.position.x += (Math.random() - 0.5) * delta * 8;
                child.position.y += (Math.random() - 0.5) * delta * 5;
                child.rotation.x += delta * (i + 1) * 3;
            });
        }
        // Stage 3: Remove
        else {
            this.scene.remove(group);
            this.boss.isDefeating = false;
        }
    }

    createDecorations(trackLength) {
        // Sparse overhead lamps and road furniture; background architecture is
        // generated in createTrack so this does not add forests or mountains.
        for(let z=12;z<trackLength;z+=26) {
            for(const side of [-1,1]){
                const pole=new THREE.Mesh(new THREE.CylinderGeometry(.07,.09,5,7),new THREE.MeshStandardMaterial({color:0x647078,metalness:.35}));
                pole.position.set(side*6.1,2.5,-z);pole.userData.dynamic=true;
                this.scene.add(pole);this.meshes.push(pole);
                const light=new THREE.Mesh(new THREE.SphereGeometry(.23,8,6),new THREE.MeshBasicMaterial({color:0xffe7ac}));
                light.position.set(side*6.1,4.9,-z);light.userData.dynamic=true;
                this.scene.add(light);this.meshes.push(light);
            }
        }
    }

    createTree(x, z) {
        const treeType = Math.random();
        
        if (treeType < 0.4) {
            // Pine tree
            const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 2.5, 6);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5D4037 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(x, 1.25, z);
            trunk.castShadow = true;
            trunk.userData.dynamic = true;
            this.scene.add(trunk);
            this.meshes.push(trunk);

            // Layered cone foliage
            const colors = [0x1B5E20, 0x2E7D32, 0x388E3C];
            for (let i = 0; i < 3; i++) {
                const coneGeo = new THREE.ConeGeometry(1.2 - i * 0.25, 1.8 - i * 0.3, 8);
                const coneMat = new THREE.MeshStandardMaterial({ color: colors[i] });
                const cone = new THREE.Mesh(coneGeo, coneMat);
                cone.position.set(x, 2.5 + i * 1.0, z);
                cone.castShadow = true;
                cone.userData.dynamic = true;
                this.scene.add(cone);
                this.meshes.push(cone);
            }
        } else if (treeType < 0.7) {
            // Round leafy tree
            const trunkGeo = new THREE.CylinderGeometry(0.2, 0.35, 2.5, 6);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6D4C41 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(x, 1.25, z);
            trunk.castShadow = true;
            trunk.userData.dynamic = true;
            this.scene.add(trunk);
            this.meshes.push(trunk);

            const leafGeo = new THREE.SphereGeometry(1.5 + Math.random() * 0.5, 8, 8);
            const leafMat = new THREE.MeshStandardMaterial({ color: 0x43A047 });
            const leaves = new THREE.Mesh(leafGeo, leafMat);
            leaves.position.set(x, 3.2, z);
            leaves.castShadow = true;
            leaves.userData.dynamic = true;
            this.scene.add(leaves);
            this.meshes.push(leaves);
        } else {
            // Cherry blossom tree
            const trunkGeo = new THREE.CylinderGeometry(0.15, 0.3, 2, 6);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4E342E });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(x, 1, z);
            trunk.castShadow = true;
            trunk.userData.dynamic = true;
            this.scene.add(trunk);
            this.meshes.push(trunk);

            const leafGeo = new THREE.SphereGeometry(1.3, 8, 8);
            const leafMat = new THREE.MeshStandardMaterial({ color: 0xF48FB1 });
            const leaves = new THREE.Mesh(leafGeo, leafMat);
            leaves.position.set(x, 2.8, z);
            leaves.castShadow = true;
            leaves.userData.dynamic = true;
            this.scene.add(leaves);
            this.meshes.push(leaves);
        }
    }

    createFlower(x, z) {
        const colors = [0xFF5252, 0xFFD740, 0xE040FB, 0x40C4FF, 0xFF6E40, 0x69F0AE];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Stem
        const stemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 4);
        const stemMat = new THREE.MeshStandardMaterial({ color: 0x4CAF50 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(x, 0.2, z);
        stem.userData.dynamic = true;
        this.scene.add(stem);
        this.meshes.push(stem);

        // Flower head
        const flowerGeo = new THREE.SphereGeometry(0.12 + Math.random() * 0.08, 6, 6);
        const flowerMat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.2 });
        const flower = new THREE.Mesh(flowerGeo, flowerMat);
        flower.position.set(x, 0.45, z);
        flower.userData.dynamic = true;
        this.scene.add(flower);
        this.meshes.push(flower);
    }

    createRock(x, z) {
        const scale = 0.5 + Math.random() * 1.0;
        const rockGeo = new THREE.DodecahedronGeometry(scale, 0);
        const rockMat = new THREE.MeshStandardMaterial({ 
            color: 0x757575, 
            roughness: 0.9,
            flatShading: true 
        });
        const rock = new THREE.Mesh(rockGeo, rockMat);
        rock.position.set(x, scale * 0.4, z);
        rock.rotation.set(Math.random(), Math.random(), Math.random());
        rock.castShadow = true;
        rock.userData.dynamic = true;
        this.scene.add(rock);
        this.meshes.push(rock);
    }

    createBush(x, z) {
        const group = new THREE.Group();
        const bushMat = new THREE.MeshStandardMaterial({ color: 0x558B2F });
        
        for (let i = 0; i < 3; i++) {
            const size = 0.4 + Math.random() * 0.3;
            const bushGeo = new THREE.SphereGeometry(size, 6, 6);
            const bush = new THREE.Mesh(bushGeo, bushMat);
            bush.position.set(
                (Math.random() - 0.5) * 0.6,
                size * 0.7,
                (Math.random() - 0.5) * 0.6
            );
            group.add(bush);
        }
        
        group.position.set(x, 0, z);
        group.userData.dynamic = true;
        this.scene.add(group);
        this.meshes.push(group);
    }

    createMountains(trackLength) {
        const mountainColors = [0x5C6BC0, 0x7986CB, 0x3949AB];
        
        for (let i = 0; i < 12; i++) {
            const side = i % 2 === 0 ? 1 : -1;
            const x = side * (40 + Math.random() * 30);
            const z = -(Math.random() * trackLength);
            const height = 15 + Math.random() * 20;
            const radius = 8 + Math.random() * 10;
            
            const mountainGeo = new THREE.ConeGeometry(radius, height, 6);
            const mountainMat = new THREE.MeshStandardMaterial({ 
                color: mountainColors[Math.floor(Math.random() * mountainColors.length)],
                flatShading: true
            });
            const mountain = new THREE.Mesh(mountainGeo, mountainMat);
            mountain.position.set(x, height * 0.3, z);
            mountain.userData.dynamic = true;
            this.scene.add(mountain);
            this.meshes.push(mountain);

            // Snow cap
            if (height > 20) {
                const snowGeo = new THREE.ConeGeometry(radius * 0.3, height * 0.2, 6);
                const snowMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
                const snow = new THREE.Mesh(snowGeo, snowMat);
                snow.position.set(x, height * 0.7, z);
                snow.userData.dynamic = true;
                this.scene.add(snow);
                this.meshes.push(snow);
            }
        }
    }

    createClouds(trackLength) {
        for (let i = 0; i < 20; i++) {
            const group = new THREE.Group();
            const cloudMat = new THREE.MeshStandardMaterial({ 
                color: 0xFFFFFF, 
                transparent: true, 
                opacity: 0.85 
            });

            const numPuffs = 3 + Math.floor(Math.random() * 4);
            for (let j = 0; j < numPuffs; j++) {
                const puffGeo = new THREE.SphereGeometry(1.5 + Math.random() * 2, 8, 8);
                const puff = new THREE.Mesh(puffGeo, cloudMat);
                puff.position.set(
                    j * 2.2 + Math.random() * 0.5,
                    Math.random() * 0.8,
                    Math.random() * 1.0
                );
                puff.scale.y = 0.6;
                group.add(puff);
            }

            group.position.set(
                (Math.random() - 0.5) * 80,
                20 + Math.random() * 15,
                -(Math.random() * trackLength)
            );
            group.userData.dynamic = true;
            this.scene.add(group);
            this.meshes.push(group);
        }
    }

    createStickman(color) {
        const group = new THREE.Group();
        
        // Body
        const bodyGeo = new THREE.CapsuleGeometry(0.15, 0.5, 4, 4);
        const mat = new THREE.MeshStandardMaterial({ color });
        const body = new THREE.Mesh(bodyGeo, mat);
        body.position.y = 0.7;
        group.add(body);

        // Head
        const headGeo = new THREE.SphereGeometry(0.2, 8, 8);
        const head = new THREE.Mesh(headGeo, mat);
        head.position.y = 1.2;
        group.add(head);

        // Legs
        const legGeo = new THREE.CapsuleGeometry(0.07, 0.3, 4, 4);
        const leftLeg = new THREE.Mesh(legGeo, mat);
        leftLeg.position.set(-0.1, 0.2, 0);
        group.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeo, mat);
        rightLeg.position.set(0.1, 0.2, 0);
        group.add(rightLeg);

        return group;
    }
}


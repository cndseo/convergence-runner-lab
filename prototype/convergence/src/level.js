import * as THREE from 'three';
import { compactStaticTrack } from './staticScenery.js';
import { generateTacticalLevel } from './tactics.mjs';
import { createArcadeGate, animateArcadeGates } from './arcadeGates.js';
import { placeKenneyRoadFurniture } from './assetLoader.js';
import { upgradeBossVan } from './bossAssets.js';
import { placeKenneyCityDetails, disposeKenneyCityDetails } from './kenneyCity.js';
import { makeOfficer, makeVan } from './characters.js';
import { makeAsphaltTexture } from './roadTexture.js';
import { upgradePoliceOfficer, resetPoliceVisualBudget } from './policeAssets.js';
import { upgradeBravMotorcycle, resetMotorcycles } from './motorcycleAssets.js';
import { createParisStreetscape } from './parisEnvironment.js';

export class LevelGenerator {
    constructor(scene, game) {
        this.scene = scene;
        this.game = game;
        this.gates = [];
        this.obstacles = [];
        this.enemies = [];
        this.boss = null;
        this.meshes = [];
    }

    clear() {
        disposeKenneyCityDetails(this.meshes);
        this.gates = [];
        this.obstacles = [];
        this.enemies = [];
        this.boss = null;
        this.meshes.forEach(m => {
            if (!m.isObject3D) return;
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
        this.plan = generateTacticalLevel({
            level, seed: this.game.levelSeed ?? level * 20261019,
            startCount: this.game.getStartingCrowdSize(), strength: this.game.strengthUpgrade
        });
        trackLength = this.plan.trackLength;
        this.createTrack(trackLength);
        compactStaticTrack(this.scene, this.meshes);
        this.createGates(level, trackLength);
        this.createObstacles(level, trackLength);
        this.createEnemies(level, trackLength);
        this.createBoss(level, trackLength);
        createParisStreetscape(this.scene,trackLength,this.meshes);
        placeKenneyRoadFurniture(this.scene,trackLength,this.meshes);
        placeKenneyCityDetails(this.scene,trackLength,this.meshes);
    }

    updateVisibility(progress) {
        animateArcadeGates(this.gates, progress, performance.now() / 1000);
        // During an encounter, hide nearby giant choice billboards so the camera
        // can show the front line. Gate collision/solver data remain untouched.
        const combatView=this.game.state==='fighting'||(this.game.state==='paused'&&this.game.pausedState==='fighting');
        if(combatView)for(const gate of this.gates){
            if(Math.abs(gate.z-progress)>18)continue;
            for(const pane of [gate.leftMesh,gate.rightMesh]){
                if(pane?.userData.root)pane.userData.root.visible=false;
            }
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

    createTrack(trackLength) {
        // City boulevard / bridge. All geometry is procedural; no image downloads.
        const mesh=(geometry,color,x,y,z,shadow=false)=>{
            const obj=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.87}));
            obj.position.set(x,y,z);obj.userData.dynamic=true;obj.receiveShadow=true;
            obj.castShadow=shadow;this.scene.add(obj);this.meshes.push(obj);return obj;
        };
        const surface=mesh(new THREE.PlaneGeometry(11,trackLength+24),0x68717b,0,.025,-trackLength/2);
        surface.rotation.x=-Math.PI/2;
        surface.material.color.set(0xffffff);
        surface.material.map=makeAsphaltTexture(trackLength);
        surface.material.roughness=.96;
        const river=mesh(new THREE.PlaneGeometry(220,trackLength+70),0x426784,0,-1.65,-trackLength/2);
        river.rotation.x=-Math.PI/2;
        river.material.roughness=.30;
        river.material.metalness=.12;
        for(let side of [-1,1]){
            // Raised concrete verge and metal bridge railings
            mesh(new THREE.BoxGeometry(.7,.36,trackLength+18),0x9eabb0,side*5.55,.18,-trackLength/2);
            mesh(new THREE.BoxGeometry(.14,.12,trackLength+18),0x374858,side*5.65,1.24,-trackLength/2);
            mesh(new THREE.BoxGeometry(.10,.10,trackLength+18),0x516277,side*5.65,.77,-trackLength/2);
            for(let z=0;z<trackLength+6;z+=5){
                mesh(new THREE.BoxGeometry(.11,1.3,.10),0x384d5f,side*5.65,.7,-z);
            }
        }
        for(let z=0;z<trackLength+6;z+=8){
            const dash=mesh(new THREE.PlaneGeometry(.13,3),0xe7e9e4,0,.055,-z);
            dash.rotation.x=-Math.PI/2;
        }
        // Along the far banks: abstract southern-French buildings with tiled roofs
        for(let z=0;z<trackLength+35;z+=17){
            for(const side of [-1,1]){
                const h=4+(Math.floor(z/17)%4)*1.8;
                const house=mesh(new THREE.BoxGeometry(7.5,h,9),[0xe0c7a0,0xd8b2a1,0xc8b5a6,0xd7c6af][Math.floor(z/17)%4],side*(16+Math.abs(z%3)),h/2-1.5,-z);
                mesh(new THREE.BoxGeometry(7.8,.45,9.3),0x536475,side*(16+Math.abs(z%3)),h-1.5,-z);
                for(let floor=1;floor<h/2;floor++)for(let zz of [-2.6,1.8]){
                    mesh(new THREE.BoxGeometry(.10,.9,.85),0x45586c,side*(16+Math.abs(z%3))-side*3.82,floor*1.55-1.2,-z+zz);
                }
            }
        }
    }

    createGates(level, trackLength) {
        let bonusIndex=0;
        for (const event of this.plan.events.filter(e => e.type === 'choice')) {
            // Assign the visual faction to additive rewards without changing their math.
            for(const choice of [event.left,event.right])if(choice.op==='+'&&choice.value>0){
                choice.bonusFaction=['gilets','genz','pompiers','infirmieres'][bonusIndex++%4];
            }
            const gate = { z: event.z, passed: false, leftGate: event.left, rightGate: event.right };
            gate.leftMesh = this.createGateMesh(event.left, -2.5, event.z);
            gate.rightMesh = this.createGateMesh(event.right, 2.5, event.z);
            this.gates.push(gate);
        }
    }

    createGateMesh(data, x, z) {
        return createArcadeGate(data, x, z, this.scene, this.meshes);
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
        const displayCount = Math.min(Math.max(count, 16), 24);
        const group = new THREE.Group();
        group.userData.dynamic = true;

        for (let i = 0; i < displayCount; i++) {
            const angle = (i / displayCount) * Math.PI * 2 + Math.random() * 0.5;
            const radius = Math.sqrt(i / displayCount) * 2.5;
            const stickman = makeOfficer(enemy.kind,i);
            stickman.position.set(
                (i % 8 - 3.5) * .68,
                0,
                -Math.floor(i / 8) * .83
            );
            group.add(stickman);
            upgradePoliceOfficer(stickman,enemy.kind);
            if(enemy.kind==='bravm')upgradeBravMotorcycle(stickman);
        }

        group.position.set(0, 0, -z);
        this.scene.add(group);
        this.meshes.push(group);
        enemy.meshGroup = group;

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
        const labelGeo = new THREE.PlaneGeometry(2.4, 1.2);
        const labelMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
        const label = new THREE.Mesh(labelGeo, labelMat);
        label.position.set(0, 4, -z);
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

        // Also remove stickmen from the enemy group visually
        if (enemy.meshGroup && enemy.meshGroup.children.length > 0) {
            const child = enemy.meshGroup.children[enemy.meshGroup.children.length - 1];
            enemy.meshGroup.remove(child);
        }
    }

    createBoss(level, trackLength) {
        const bossHealth=this.plan.bossHealth;
        this.boss={z:trackLength,health:bossHealth,defeated:false};
        const squad=new THREE.Group();squad.userData.dynamic=true;
        // Final front: CRS line backed by a white van instead of a king stickman.
        for(let i=0;i<13;i++){
            const officer=makeOfficer(i%5===0?'bac':'crs',i);
            officer.position.set((i%7-3)*.66,0,Math.floor(i/7)*-.86);
            squad.add(officer);
            upgradePoliceOfficer(officer, i%5===0?'bac':'crs');
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
            }
        }
        const vehicle=makeVan();vehicle.scale.set(.85,.85,.85);
        vehicle.position.set(0,0,-4.3);squad.add(vehicle);
        upgradeBossVan(squad,vehicle);
        squad.position.set(0,0,-trackLength);
        this.scene.add(squad);this.meshes.push(squad);
        this.boss.meshGroup=squad;this.boss.defeatTime=0;this.boss.isDefeating=false;
        const c=document.createElement('canvas');c.width=512;c.height=128;
        const ctx=c.getContext('2d');
        ctx.fillStyle='#f3e8d8';ctx.font='bold 49px system-ui';
        ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.strokeStyle='#152334';ctx.lineWidth=9;ctx.strokeText('FRONT CRS : '+bossHealth,256,64);
        ctx.fillText('FRONT CRS : '+bossHealth,256,64);
        const label=new THREE.Mesh(new THREE.PlaneGeometry(7,1.6),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));
        label.position.set(0,3.4,-trackLength);label.userData.dynamic=true;this.scene.add(label);this.meshes.push(label);
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


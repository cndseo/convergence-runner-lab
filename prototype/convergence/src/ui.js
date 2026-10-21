import {districtForLevel} from './parisDistricts.mjs';

export class UIManager {
    constructor(game) {
        this.game = game;
        
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.upgradeScreen = document.getElementById('upgrade-screen');
        this.winScreen = document.getElementById('win-screen');
        this.loseScreen = document.getElementById('lose-screen');
        this.hud = document.getElementById('hud');
        this.container = document.getElementById('game-container');
        
        // HUD elements
        this.levelDisplay = document.getElementById('level-display');
        this.coinDisplay = document.getElementById('coin-display');
        this.countDisplay = document.getElementById('count-display');
        
        // Upgrade elements
        this.crowdLevel = document.getElementById('crowd-level');
        this.strengthLevel = document.getElementById('strength-level');
        this.upgradeCrowdBtn = document.getElementById('upgrade-crowd-btn');
        this.upgradeStrengthBtn = document.getElementById('upgrade-strength-btn');
        
        // Shake state
        this.shakeIntensity = 0;
        this.canvas = document.getElementById('game-canvas');
        
        // Previous count for pulse animation
        this.prevCount = 0;
        
        // Boss health bar element
        this.bossHealthBar = null;
        
        this.tacticalStatus = document.getElementById('tactical-status');
        const pause = document.getElementById('pause-btn'), panel = document.getElementById('pause-panel');
        pause.addEventListener('click', () => {
            if (!['playing','fighting','bravm_charge'].includes(this.game.state)) return;
            this.game.pausedState = this.game.state;
            this.game.state = 'paused'; panel.classList.remove('hidden');
            this.game.marseille?.showButton();this.game.genzFireworks?.showButton(); // Hide attack action immediately during pause.
            this.game.audio.pauseAudio();
        });
        document.getElementById('resume-btn').addEventListener('click', () => {
            this.game.state = this.game.pausedState || 'playing'; panel.classList.add('hidden');
            this.game.marseille?.showButton();this.game.genzFireworks?.showButton(); // Restore CTA only if attack can now be launched.
            this.game.audio.resumeAudio();
        });
        const soundButton=document.getElementById('ambience-toggle-btn');
        soundButton?.addEventListener('click',()=>{
            const muted=this.game.audio.toggleAmbienceMute();
            soundButton.textContent=muted?'SON : COUPÉ':'SON : ACTIVÉ';
        });
        this.setupButtons();
        this.updateHUDInfo();
        this.startShakeLoop();
    }

    setupButtons() {
        document.getElementById('play-btn').addEventListener('click', () => {
            this.game.audio.init();
            this.game.audio.playClick();
            this.transitionOut(this.startScreen, () => {
                this.game.startWithIntro();
            });
        });

        document.getElementById('upgrade-btn').addEventListener('click', () => {
            this.game.audio.init();
            this.game.audio.playClick();
            this.transitionOut(this.startScreen, () => {
                this.showUpgrades();
            });
        });

        document.getElementById('shop-btn').addEventListener('click', () => {
            this.game.audio.init();
            this.game.audio.playClick();
            this.transitionOut(this.startScreen, () => {
                this.showShop();
            });
        });

        document.getElementById('shop-back-btn').addEventListener('click', () => {
            if (this.game.audio.initialized) this.game.audio.playClick();
            this.transitionOut(document.getElementById('shop-screen'), () => {
                this.transitionIn(this.startScreen);
            });
        });

        document.getElementById('tab-skins').addEventListener('click', () => {
            document.getElementById('tab-skins').classList.add('active');
            document.getElementById('tab-themes').classList.remove('active');
            document.getElementById('skins-panel').classList.remove('hidden');
            document.getElementById('themes-panel').classList.add('hidden');
        });

        document.getElementById('tab-themes').addEventListener('click', () => {
            document.getElementById('tab-themes').classList.add('active');
            document.getElementById('tab-skins').classList.remove('active');
            document.getElementById('themes-panel').classList.remove('hidden');
            document.getElementById('skins-panel').classList.add('hidden');
        });

        document.getElementById('back-btn').addEventListener('click', () => {
            if (this.game.audio.initialized) this.game.audio.playClick();
            this.transitionOut(this.upgradeScreen, () => {
                this.transitionIn(this.startScreen);
            });
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (this.game.audio.initialized) this.game.audio.playClick();
            this.transitionOut(this.winScreen, () => {
                if(this.game.mode==='daily')this.game.challengeHub.returnToCampaignMenu();
                else if(this.game.campaignComplete){
                    this.game.level=1;
                    this.game.parisLevel=1;
                    this.game.campaignComplete=false;
                    this.game.story.introSeen=false;
                    this.game.saveProgress();
                    this.game.startWithIntro({newRun:true});
                }else this.game.startGame();
            });
        });

        // Win screen upgrade buttons
        document.getElementById('win-upgrade-crowd-btn').addEventListener('click', () => {
            if (this.game.upgradecrowd()) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.updateWinUpgradeInfo();
                this.pulseElement(document.getElementById('win-upgrade-crowd-btn'));
            }
        });

        document.getElementById('win-upgrade-strength-btn').addEventListener('click', () => {
            if (this.game.upgradeStrength()) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.updateWinUpgradeInfo();
                this.pulseElement(document.getElementById('win-upgrade-strength-btn'));
            }
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            if (this.game.audio.initialized) this.game.audio.playClick();
            this.transitionOut(this.loseScreen, () => {
                if(this.game.mode==='daily')this.game.startDailyChallenge(this.game.dailyDate);
                else this.game.startGame({newRun:true});
            });
        });

        this.upgradeCrowdBtn.addEventListener('click', () => {
            if (this.game.upgradecrowd()) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.updateUpgradeScreen();
                this.updateHUDInfo();
                this.pulseElement(this.upgradeCrowdBtn);
            }
        });

        this.upgradeStrengthBtn.addEventListener('click', () => {
            if (this.game.upgradeStrength()) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.updateUpgradeScreen();
                this.updateHUDInfo();
                this.pulseElement(this.upgradeStrengthBtn);
            }
        });
    }

    // ============ TRANSITIONS ============
    transitionOut(element, callback) {
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        element.style.opacity = '0';
        element.style.transform = 'scale(0.9)';
        setTimeout(() => {
            element.classList.add('hidden');
            element.style.opacity = '';
            element.style.transform = '';
            element.style.transition = '';
            if (callback) callback();
        }, 300);
    }

    transitionIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(1.1)';
        element.classList.remove('hidden');
        requestAnimationFrame(() => {
            element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
            setTimeout(() => {
                element.style.transition = '';
            }, 400);
        });
    }

    // ============ SCREEN SHAKE ============
    screenShake(intensity) {
        if(this.game.experience?.reducedMotion)return;
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    }

    startShakeLoop() {
        const loop = () => {
            if (this.shakeIntensity > 0.5) {
                const x = (Math.random() - 0.5) * this.shakeIntensity;
                const y = (Math.random() - 0.5) * this.shakeIntensity;
                this.canvas.style.transform = `translate(${x}px, ${y}px)`;
                this.shakeIntensity *= 0.85;
            } else {
                this.shakeIntensity = 0;
                this.canvas.style.transform = '';
            }
            requestAnimationFrame(loop);
        };
        loop();
    }

    // Compact warning of injuries during distant LBD fire.
    showLbdImpact(message,blocked=false) {
        if(!this.lbdNotice){
            this.lbdNotice=document.createElement('div');
            this.lbdNotice.setAttribute('role','status');
            this.lbdNotice.style.cssText='position:absolute;top:16%;left:50%;transform:translateX(-50%);z-index:40;pointer-events:none;border-radius:8px;padding:6px 10px;max-width:86%;font:700 14px system-ui,sans-serif;text-align:center;background:rgba(27,33,46,.86);border:1px solid rgba(255,255,255,.25);text-shadow:0 1px 2px #000;white-space:nowrap;';
            this.container.appendChild(this.lbdNotice);
        }
        this.lbdNotice.textContent=message;
        this.lbdNotice.style.color=blocked?'#bce8ff':'#ffb1b1';
        this.lbdNotice.style.display='block';
        clearTimeout(this.lbdNoticeTimeout);
        this.lbdNoticeTimeout=setTimeout(()=>{if(this.lbdNotice)this.lbdNotice.style.display='none';},1050);
    }

    // Short, non-blocking feedback: appears after crossing a gate, never
    // before a choice and never atop the police line.
    showTacticalHint(feedback) {
        if (!this.tacticalHint) {
            this.tacticalHint=document.createElement('div');
            this.tacticalHint.id='tactical-hint';
            this.tacticalHint.setAttribute('role','status');
            this.tacticalHint.setAttribute('aria-live','polite');
            this.container.appendChild(this.tacticalHint);
        }
        this.tacticalHint.replaceChildren();
        const title=document.createElement('strong');
        title.textContent=feedback.title;
        const detail=document.createElement('span');
        detail.textContent=feedback.detail;
        this.tacticalHint.append(title,detail);
        this.tacticalHint.dataset.tone=feedback.tone;
        this.tacticalHint.classList.add('visible');
        clearTimeout(this.tacticalHintTimer);
        this.tacticalHintTimer=setTimeout(()=>this.tacticalHint?.classList.remove('visible'),2050);
    }
    clearTacticalHint() {
        clearTimeout(this.tacticalHintTimer);
        this.tacticalHint?.classList.remove('visible');
    }

    // ============ FLOATING TEXT ============
    showFloatingText(text, color) {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.cssText = `
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 48px;
            font-weight: bold;
            color: ${color};
            text-shadow: 0 0 10px ${color}, 0 2px 4px rgba(0,0,0,0.5);
            pointer-events: none;
            z-index: 50;
            animation: floatUp 0.8s ease-out forwards;
        `;
        this.container.appendChild(el);
        setTimeout(() => el.remove(), 800);
    }

    // ============ PULSE ANIMATION ============
    pulseElement(el) {
        el.style.transform = 'scale(1.3)';
        el.style.transition = 'transform 0.15s ease';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
            setTimeout(() => { el.style.transition = ''; }, 150);
        }, 150);
    }

    // ============ STANDARD UI ============
    hideAllScreens() {
        // Do not leave victory confetti over a retry or a defeat screen.
        this.container.querySelectorAll('.win-confetti').forEach(el=>el.remove());
        this.startScreen.classList.add('hidden');
        this.upgradeScreen.classList.add('hidden');
        this.winScreen.classList.add('hidden');
        this.loseScreen.classList.add('hidden');
        document.getElementById('shop-screen').classList.add('hidden');
        this.hud.style.display = 'none';
    }

    showHUD() {
        this.hud.style.display = 'flex';
        this.hud.style.opacity = '0';
        requestAnimationFrame(() => {
            this.hud.style.transition = 'opacity 0.5s ease';
            this.hud.style.opacity = '1';
            setTimeout(() => { this.hud.style.transition = ''; }, 500);
        });
        this.updateHUDInfo();
    }

    updateHUDInfo() {
        this.levelDisplay.textContent = this.game.mode==='daily'?'Défi du jour':this.game.geographicLevel+'/12 · '+districtForLevel(this.game.geographicLevel).short;
        this.coinDisplay.textContent = `🪙 ${this.game.coins}`;
    }

    updateCount(count) {
        const visible = this.game.crowdManager?.getDisplayedCount?.() ?? count;
        this.countDisplay.title = visible+' participants représentés dans le cortège ; '+count+' unités tactiques actives';
        this.countDisplay.setAttribute('aria-label',this.countDisplay.title);
        if (this.tacticalStatus && this.game.levelGenerator?.plan) {
            const done = this.game.levelGenerator.gates.filter(g => g.passed).length;
            const text = '◇ '+(this.game.shields||0)+' protections · '+done+'/10 TV · Arrivée '+Math.round(Math.min(1,this.game.trackZ/this.game.trackLength)*100)+' %';
            if(this.tacticalStatus.textContent!==text)this.tacticalStatus.textContent=text;
        }
        this.countDisplay.textContent = '👥 '+visible;
        // Pulse the count display when count changes significantly
        if (Math.abs(visible - this.prevCount) > 2) {
            this.countDisplay.style.transform = 'scale(1.3)';
            this.countDisplay.style.transition = 'transform 0.15s ease';
            setTimeout(() => {
                this.countDisplay.style.transform = 'scale(1)';
                setTimeout(() => { this.countDisplay.style.transition = ''; }, 150);
            }, 150);
        }
        this.prevCount = visible;
    }

    showUpgrades() {
        this.transitionIn(this.upgradeScreen);
        this.updateUpgradeScreen();
    }

    updateUpgradeScreen() {
        this.crowdLevel.textContent = `Niv. ${this.game.crowdUpgrade}`;
        this.strengthLevel.textContent = `Niv. ${this.game.strengthUpgrade}`;
        this.upgradeCrowdBtn.textContent = `🪙 ${this.game.crowdUpgrade * 50}`;
        this.upgradeStrengthBtn.textContent = `🪙 ${this.game.strengthUpgrade * 75}`;
        this.coinDisplay.textContent = `🪙 ${this.game.coins}`;
    }

    // ============ SHOP ============
    showShop() {
        const shopScreen = document.getElementById('shop-screen');
        this.transitionIn(shopScreen);
        this.renderShop();
    }

    renderShop() {
        document.getElementById('shop-coins').textContent = `🪙 ${this.game.coins}`;
        this.renderSkins();
        this.renderThemes();
    }

    renderSkins() {
        const grid = document.getElementById('skins-grid');
        grid.innerHTML = '';
        this.game.skins.forEach(skin => {
            const item = document.createElement('div');
            item.className = 'shop-item';
            if (skin.owned) item.classList.add('owned');
            if (skin.id === this.game.equippedSkin) item.classList.add('equipped');

            const preview = document.createElement('div');
            preview.className = 'skin-preview';
            preview.style.background = '#' + skin.color.toString(16).padStart(6, '0');
            if (skin.id === 'rainbow') {
                preview.style.background = 'linear-gradient(135deg, red, orange, yellow, green, blue, purple)';
            }
            item.appendChild(preview);

            const name = document.createElement('div');
            name.className = 'item-name';
            name.textContent = skin.name;
            item.appendChild(name);

            const price = document.createElement('div');
            price.className = 'item-price';
            if (skin.id === this.game.equippedSkin) {
                price.textContent = '✓ Equipped';
                price.classList.add('owned-label');
            } else if (skin.owned) {
                price.textContent = 'Tap to equip';
                price.classList.add('owned-label');
            } else if (skin.shareUnlock) {
                price.textContent = '📤 Share';
                price.classList.add('free');
            } else {
                price.textContent = `🪙 ${skin.price}`;
            }
            item.appendChild(price);

            item.addEventListener('click', () => this.onSkinClick(skin));
            grid.appendChild(item);
        });
    }

    renderThemes() {
        const grid = document.getElementById('themes-grid');
        grid.innerHTML = '';
        this.game.themes.forEach(theme => {
            const item = document.createElement('div');
            item.className = 'shop-item';
            if (theme.owned) item.classList.add('owned');
            if (theme.id === this.game.equippedTheme) item.classList.add('equipped');

            const preview = document.createElement('div');
            preview.className = 'theme-preview';
            preview.style.background = `linear-gradient(180deg, ${theme.colors[0]}, ${theme.colors[2]}, ${theme.colors[4]})`;
            item.appendChild(preview);

            const name = document.createElement('div');
            name.className = 'item-name';
            name.textContent = theme.name;
            item.appendChild(name);

            const price = document.createElement('div');
            price.className = 'item-price';
            if (theme.id === this.game.equippedTheme) {
                price.textContent = '✓ Equipped';
                price.classList.add('owned-label');
            } else if (theme.owned) {
                price.textContent = 'Tap to equip';
                price.classList.add('owned-label');
            } else {
                price.textContent = `🪙 ${theme.price}`;
            }
            item.appendChild(price);

            item.addEventListener('click', () => this.onThemeClick(theme));
            grid.appendChild(item);
        });
    }

    async onSkinClick(skin) {
        if (skin.id === this.game.equippedSkin) return;
        if (skin.owned) {
            this.game.equipSkin(skin.id);
            if (this.game.audio.initialized) this.game.audio.playClick();
        } else if (skin.shareUnlock) {
            const shareData = {title:'CONVERGENCE',text:'Rassemble ta foule dans Paris. Rejoins le défi du jour !',url:location.origin+location.pathname+'?from=skin'};
            try {
                if(navigator.share){await navigator.share(shareData);this.showFloatingText('Invitation transmise · Rainbow débloqué', '#4CAF50');}
                else {await navigator.clipboard.writeText(shareData.text+' '+shareData.url);this.showFloatingText('Lien copié · Rainbow débloqué', '#4CAF50');}
                this.game.shareForSkin(skin.id);
                if(this.game.audio.initialized)this.game.audio.playGateGood();
            } catch(error) {if(error.name!=='AbortError')this.showFloatingText('Partage indisponible. Réessaie plus tard.', '#ffcc38');}
        } else {
            if (this.game.buySkin(skin.id)) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.showFloatingText(`-${skin.price} 🪙`, '#ffd700');
            }
        }
        this.renderShop();
    }

    onThemeClick(theme) {
        if (theme.id === this.game.equippedTheme) return;
        if (theme.owned) {
            this.game.equipTheme(theme.id);
            if (this.game.audio.initialized) this.game.audio.playClick();
        } else {
            if (this.game.buyTheme(theme.id)) {
                if (this.game.audio.initialized) this.game.audio.playGateGood();
                this.showFloatingText(`-${theme.price} 🪙`, '#ffd700');
            }
        }
        this.renderShop();
    }

    showWin(coins, report) {
        this.hideAllScreens();
        const completed=!!this.game.campaignComplete;
        const heading=this.winScreen.querySelector('h2');
        if(heading)heading.textContent=completed?'OBJECTIF FINAL ATTEINT !':'FRONT FRANCHI !';
        const portrait=document.getElementById('final-portrait');
        if(portrait)portrait.hidden=!completed;
        document.getElementById('next-btn').textContent=completed?'↻ REJOUER LA CAMPAGNE':'ÉTAPE SUIVANTE →';
        if(completed)report={...report,title:'PERSONNAGE RATTRAPÉ !',tip:'Il ne peut être rejoint qu’après le front du niveau 12. Tu as terminé la campagne.'};
        this.clearTacticalHint();
        const el=document.getElementById('win-report');
        if(el){
            const medal=report?.stars?('★'.repeat(report.stars)+'☆'.repeat(3-report.stars)):'★';
            el.replaceChildren();
            const head=document.createElement('strong');head.textContent=medal+'  '+(report?.title||'Front franchi');
            const info=document.createElement('span');info.textContent=report?.detail||'';
            const tip=document.createElement('small');tip.textContent=report?.tip||'';
            el.append(head,info,tip);
        }
        const completedRunId=this.game.runId;
        setTimeout(() => {
            if(this.game.runId!==completedRunId || this.game.state!=='win')return;
            this.transitionIn(this.winScreen);
            document.getElementById('win-coins').textContent = `+${coins} 🪙`;
            this.updateWinUpgradeInfo();
            // Confetti burst
            this.spawnConfetti();
        }, 300);
    }

    updateWinUpgradeInfo() {
        document.getElementById('win-total-coins').textContent = `Total: 🪙 ${this.game.coins}`;
        document.getElementById('win-crowd-level').textContent = `Niv. ${this.game.crowdUpgrade}`;
        document.getElementById('win-strength-level').textContent = `Niv. ${this.game.strengthUpgrade}`;
        document.getElementById('win-upgrade-crowd-btn').textContent = `🪙 ${this.game.crowdUpgrade * 50}`;
        document.getElementById('win-upgrade-strength-btn').textContent = `🪙 ${this.game.strengthUpgrade * 75}`;
    }

    showLose(report) {
        this.hideAllScreens();
        this.clearTacticalHint();
        const el=document.getElementById('lose-report');
        if(el){
            el.replaceChildren();
            const head=document.createElement('strong');head.textContent=report?.title||'Mobilisation stoppée';
            const detail=document.createElement('span');detail.textContent=report?.detail||'';
            el.append(head,detail);
        }
        const tip=document.getElementById('lose-tip');
        if(tip)tip.textContent=report?.tip||'Essaie une autre combinaison de portiques.';
        setTimeout(() => {
            this.transitionIn(this.loseScreen);
        }, 300);
    }

    // ============ CONFETTI ============
    spawnConfetti() {
        if(this.game.experience?.reducedMotion)return;
        const colors = ['#FF5252', '#FFD740', '#69F0AE', '#40C4FF', '#E040FB', '#FF6E40'];
        for (let i = 0; i < 40; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('win-confetti');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const delay = Math.random() * 0.5;
            const size = 6 + Math.random() * 8;
            confetti.style.cssText = `
                position: absolute;
                top: -10px;
                left: ${left}%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none;
                z-index: 200;
                animation: confettiFall ${1.5 + Math.random()}s ease-in ${delay}s forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            this.container.appendChild(confetti);
            setTimeout(() => confetti.remove(), 2500);
        }
    }

    // ============ BOSS HEALTH BAR ============
    showBossHealthBar(maxHealth) {
        // Remove existing
        this.hideBossHealthBar();

        const wrapper = document.createElement('div');
        wrapper.id = 'boss-health-wrapper';
        wrapper.style.cssText = `
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            max-width: 80vw;
            z-index: 50;
            pointer-events: none;
            animation: slideInUp 0.5s ease;
        `;

        const label = document.createElement('div');
        label.style.cssText = `
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 4px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        `;
        label.textContent = `👑 GIANT KING`;
        wrapper.appendChild(label);

        const barBg = document.createElement('div');
        barBg.style.cssText = `
            width: 100%;
            height: 20px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #9C27B0;
            box-shadow: 0 0 10px rgba(156, 39, 176, 0.5);
        `;

        const barFill = document.createElement('div');
        barFill.id = 'boss-health-fill';
        barFill.style.cssText = `
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #f44336, #E91E63, #9C27B0);
            border-radius: 8px;
            transition: width 0.15s ease;
            box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
        `;
        barBg.appendChild(barFill);
        wrapper.appendChild(barBg);

        const hpText = document.createElement('div');
        hpText.id = 'boss-health-text';
        hpText.style.cssText = `
            color: #fff;
            font-size: 12px;
            text-align: center;
            margin-top: 3px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        `;
        hpText.textContent = `${maxHealth} / ${maxHealth}`;
        wrapper.appendChild(hpText);

        this.container.appendChild(wrapper);
        this.bossHealthBar = wrapper;
    }

    updateBossHealthBar(remaining, max) {
        const fill = document.getElementById('boss-health-fill');
        const text = document.getElementById('boss-health-text');
        if (fill) {
            const pct = Math.max(0, (remaining / max) * 100);
            fill.style.width = `${pct}%`;
            
            // Change color when low
            if (pct < 25) {
                fill.style.background = 'linear-gradient(90deg, #f44336, #ff5722)';
            } else if (pct < 50) {
                fill.style.background = 'linear-gradient(90deg, #f44336, #E91E63)';
            }
        }
        if (text) {
            text.textContent = `${Math.max(0, remaining)} / ${max}`;
        }
    }

    hideBossHealthBar() {
        if (this.bossHealthBar) {
            this.bossHealthBar.style.transition = 'opacity 0.3s ease';
            this.bossHealthBar.style.opacity = '0';
            const el = this.bossHealthBar;
            setTimeout(() => el.remove(), 300);
            this.bossHealthBar = null;
        }
        const existing = document.getElementById('boss-health-wrapper');
        if (existing) existing.remove();
    }
}

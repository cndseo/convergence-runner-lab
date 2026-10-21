import {HERO_ART} from './heroArt.mjs';
// Stable identities from the five supplied boards. Render recipes are adaptations,
// not claims of a faithful sculpt of the reference faces.
export const HERO_COMMUNITIES=Object.freeze([
 {id:'genz',name:'GenZ',color:'#d85dad',caption:'Une nouvelle génération en mouvement',rows:[3,0]},
 {id:'gilets',name:'Gilets jaunes',color:'#f1d645',caption:'Des parcours différents, une même détermination',rows:[7,8,9,10,11,12]},
 {id:'infirmieres',name:'Soignants',color:'#6bb9eb',caption:'Prendre soin du collectif',rows:[2]},
 {id:'pompiers',name:'Pompiers',color:'#ee6659',caption:'L’esprit d’équipe en première ligne',rows:[1]},
 {id:'lyceens',name:'Lycéens',color:'#ad8ae8',caption:'Faire entendre sa voix et mobiliser',rows:[0,3]}
]);
const profile=(id,name,family,role,base,height,width,look={})=>({id,name,family,role,
 quality:'reference-sculpt-pass',model:{key:'hero-'+id,faction:family,base,height,width,
 top:0x29303c,pants:0x27323e,hood:true,pack:'school',bag:0x252b33,...look,bag:HERO_ART[id].bag,airTank:false,
 top:family==='genz'||family==='lyceens'?0x262b32:(look.top||0x29303c),
 pack:HERO_ART[id].tank||HERO_ART[id].stretcher||HERO_ART[id].hipBag?null:(look.pack||'school') }});
export const HERO_PROFILES=Object.freeze([
 profile('genz-lea','Léa','genz','Déterminée · engagée','female-adult-05',1.67,1.02,{top:0x7e2533,hair:'ponytail'}),
 profile('genz-emma','Emma','genz','Curieuse · audacieuse','female-adult-12',1.70,.98,{top:0x2c64a3,pants:0xbfc2c8,hair:'blonde',pack:'sport'}),
 profile('genz-kay','Kay','genz','Stratège · loyal','male-adult-04',1.79,1.08,{top:0x24559a,skinTone:0x77513f,headphones:true,pack:'sport'}),
 profile('genz-noah','Noah','genz','Ingénieux · visionnaire','male-adult-07',1.75,1,{top:0x3d5f36,cap:0x253b29,pack:'hiking'}),
 profile('gilets-thomas','Thomas','gilets','Entrepreneur · 35 ans','male-adult-10',1.80,1.12,{vest:true,top:0x333a2b,beard:true,pack:'hiking'}),
 profile('gilets-marcel','Marcel','gilets','Retraité · 70 ans','male-adult-07',1.73,1.04,{vest:true,top:0x414442,pants:0x31506c,hair:'beanie',beard:true,grey:true,scarf:0x8d9191,pack:'leather'}),
 profile('gilets-sophie','Sophie','gilets','Mère au foyer · 32 ans','female-adult-05',1.64,1.06,{vest:true,top:0xbfc0c4,hair:'ponytail',scarf:0x9a6b7a}),
 profile('gilets-nadia','Nadia','gilets','Femme de ménage · 45 ans','female-adult-12',1.63,1.15,{vest:true,hair:'dark',scarf:0x397ba3,pack:'compact'}),
 profile('soignants-lucas','Lucas','infirmieres','Infirmier débutant · 23 ans','medical-male-01',1.77,1,{top:0xe7e9e8,pants:0xd2d8df,hood:false,bag:0x29456a,pack:'rescue',medicalKit:true}),
 profile('soignants-amina','Amina','infirmieres','Infirmière expérimentée · 38 ans','medical-female-02',1.71,1.24,{top:0xe9e9e7,pants:0xd5dade,hood:false,bag:0xa52d32,pack:'rescue',medicalKit:true,hair:'ponytail',skinTone:0x77503d}),
 profile('soignants-yann','Yann','infirmieres','Brancardier · 28 ans','medical-male-01',1.82,1.14,{top:0xe7e8e5,pants:0xd6dae0,hood:false,bag:0x333b43,pack:'rescue',medicalKit:true,beard:true}),
 profile('soignants-carine','Carine','infirmieres','Aide-soignante · 45 ans','medical-female-02',1.64,1.15,{top:0xe6e8e8,pants:0xd4d8df,hood:false,bag:0x324a63,pack:'compact',medicalKit:true,hair:'ponytail'}),
 profile('pompiers-hugo','Hugo','pompiers','Sapeur-pompier · 24 ans','fire-male-01',1.82,1.05,{top:0x232c38,pants:0x202b37,hood:false,pack:'rescue',airTank:true}),
 profile('pompiers-chloe','Chloé','pompiers','Sapeur-pompier · 32 ans','female-adult-05',1.72,1.02,{top:0x202b37,pants:0x222c37,hood:false,pack:'rescue',airTank:true,hair:'ponytail'}),
 profile('pompiers-pierre','Pierre','pompiers','Caporal-chef · 42 ans','fire-male-01',1.85,1.16,{top:0x222a33,pants:0x24303a,hood:false,pack:'rescue',airTank:true,beard:true}),
 profile('pompiers-samir','Samir','pompiers','Secours routier · 28 ans','fire-male-01',1.77,1.12,{top:0x26303b,pants:0x222e38,hood:false,pack:'rescue',bag:0xb32d31,beard:true}),
 profile('lyceens-julie','Julie','lyceens','Étudiante · 17 ans','female-adult-05',1.62,.96,{top:0x30333e,pants:0x64768b,bag:0x6a4b83,hair:'ponytail',headphones:true}),
 profile('lyceens-mathis','Mathis','lyceens','Sportif · 17 ans','male-adult-10',1.75,1.02,{top:0x285f9a,bag:0x264a71,pack:'sport',headphones:true}),
 profile('lyceens-leo','Léo','lyceens','Créatif · 18 ans','male-adult-07',1.73,.97,{top:0x375b39,bag:0x565440,pack:'leather',headphones:true}),
 profile('lyceens-manon','Manon','lyceens','Confiante · 16 ans','female-adult-12',1.61,.98,{top:0x9c4e77,pants:0xcac7cb,hair:'blonde',bag:0x272730})
]);
export const heroById=id=>HERO_PROFILES.find(p=>p.id===id)||null;
export const communityById=id=>HERO_COMMUNITIES.find(p=>p.id===id)||null;
export const profilesFor=family=>HERO_PROFILES.filter(p=>p.family===family);
export const HERO_EQUIPMENT=Object.freeze([
 {id:'standard',name:'Tenue de départ',level:1,slot:'kit'},
 {id:'armband',name:'Brassard du collectif',level:2,slot:'kit'},
 {id:'reflective-pack',name:'Sac réfléchissant',level:3,slot:'kit'},
 {id:'solidarity-scarf',name:'Foulard solidaire',level:4,slot:'kit'}
]);

export const HERO_ATLAS={columns:12,rows:20,cellWidth:128,cellHeight:192,planeWidth:2.2,planeHeight:3.3,centerY:1.48};

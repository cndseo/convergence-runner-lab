// Art direction transcribed from the five supplied character boards.
// Values describe shape, complexion and costume; no gameplay or save data lives here.
const look=(skin,hair,style,shape,extra={})=>({skin,hair,style,shape,...extra});
export const HERO_ART=Object.freeze({
 'genz-lea':look(0xc58f70,0x30221c,'bun','oval',{accent:0xad2936,hood:0xbcbec2,bag:0x252830,bagAccent:0x9f2933,eye:0x65402d}),
 'genz-emma':look(0xe6b49a,0xb99358,'pony','oval',{accent:0x3864aa,hood:0xc6c7ca,bag:0x202b3c,bagAccent:0x356cb5,eye:0x63838c}),
 'genz-kay':look(0x815039,0x201813,'coils','broad',{accent:0x315caa,hood:0xd4d4d0,bag:0x202633,bagAccent:0x376bb7,nose:1.14,lips:1.13}),
 'genz-noah':look(0xd5a080,0x503322,'waves','young',{accent:0x426a38,hood:0x64874d,bag:0x25302b,bagAccent:0x65924b,cap:true}),
 'gilets-thomas':look(0xbf8a68,0x33231b,'short','square',{beard:'short',age:35,hood:0x4d5543,bag:0x24282b,bagAccent:0xafab36}),
 'gilets-marcel':look(0xc49c81,0xb7b6ac,'beanie','aged',{beard:'full',age:70,bag:0x6d5140,bagAccent:0x8e7152,scarf:0x575b5b}),
 'gilets-sophie':look(0xd5a084,0x4c3024,'bun','oval',{age:32,hood:0xafafb3,bag:0x28282e,bagAccent:0x995f80,scarf:0x956778}),
 'gilets-nadia':look(0xb58260,0x261c19,'bun','mature',{age:45,bag:0x202a34,bagAccent:0x35618a,scarf:0x355f83}),
 'soignants-lucas':look(0xdfb091,0x66432d,'waves','young',{age:23,bag:0x263c60,bagAccent:0xcdd43e,gloves:true}),
 'soignants-amina':look(0x825039,0x201713,'coils-bun','round',{age:38,body:'full',bag:0x9e3035,bagAccent:0xd7d548,gloves:true,earrings:true,nose:1.16,lips:1.15}),
 'soignants-yann':look(0xc99471,0x30231c,'fade','square',{age:28,beard:'short',body:'athletic',stretcher:true,gloves:true}),
 'soignants-carine':look(0xd4a184,0x6b4230,'bun','mature',{age:45,bag:0x293e55,bagAccent:0x3e7496,gloves:true,tattoo:true,hipBag:true}),
 'pompiers-hugo':look(0xd7a17f,0x68432c,'waves','young',{age:24,body:'athletic',tank:true}),
 'pompiers-chloe':look(0xc79476,0x37251e,'bun','oval',{age:32,tank:true}),
 'pompiers-pierre':look(0xb7805f,0x39271f,'short','square',{age:42,body:'athletic',beard:'short',tank:true}),
 'pompiers-samir':look(0xba8762,0x241c17,'fade','square',{age:28,beard:'short',helmet:true,bag:0xa5292d,bagAccent:0xd8c85e}),
 'lyceens-julie':look(0xdeb097,0x5a3929,'bun','young',{accent:0x30333f,hood:0xc0c1c4,bag:0x6c4b8b,bagAccent:0x9a77ba,book:0x785094,pins:true}),
 'lyceens-mathis':look(0xe0b095,0x4a2e20,'curls','young',{accent:0x386bae,hood:0xc0c3c7,bag:0x294366,bagAccent:0x548ac7,neckphones:true}),
 'lyceens-leo':look(0xd6a082,0x553724,'waves','young',{accent:0x41663d,hood:0xd0d1c9,bag:0x66513f,bagAccent:0x9b845d,neckphones:true,book:0x937d60,messenger:true,pins:true}),
 'lyceens-manon':look(0xe4b39d,0xb6935d,'pony','young',{accent:0x2b2e38,hood:0xb8668c,bag:0x272730,bagAccent:0xb95d8a,pins:true})
});
export const artFor=spec=>HERO_ART[spec.key?.replace(/^hero-/,'')];

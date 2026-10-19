// The board defines clothing; the existing GLBs supply anatomy, skin and Walk rigs.
// Index zero in the crowd remains the approved P02 and never uses this catalogue.
export const CHARACTER_STYLES = [
 {key:'lyceen',pack:'school',label:'LycÃ©en',base:'male-adult-04',faction:'lyceens',height:1.62,width:.98,top:0xb3202c,pants:0x202a38,hood:true,bag:0x20252c,prop:'placard'},
 {key:'pompier',pack:'rescue',label:'Pompier',base:'fire-male-01',faction:'pompiers',height:1.76,width:1.04,top:0xce2229,pants:0xb81c25,bag:0x25262b,prop:'megaphone'},
 {key:'infirmiere',label:'InfirmiÃ¨re',base:'medical-female-02',faction:'infirmieres',height:1.65,width:1,top:0xffffff,pants:0xf3f5f2,medical:true},
 {key:'manifestante',pack:'leather',label:'Manifestante',base:'female-adult-05',faction:'genz',height:1.67,width:1.04,top:0x7634a2,pants:0x294a70,hood:true,bag:0xa66a35,hair:'ponytail'},
 {key:'fumigene',pack:'compact',label:'FumigÃ¨ne',base:'male-adult-07',faction:'gilets',height:1.71,width:1.04,top:0x273343,pants:0x304d6a,hood:true,vest:true,bag:0x272b30,prop:'flare'},
 {key:'agriculteur',pack:'hiking',label:'Agriculteur',base:'gardener-male-01',faction:'agriculteurs',height:1.72,width:1.08,top:0x365c34,pants:0xb49c70,bag:0x976836,cap:0x294b2b},
 {key:'drapeau',pack:'classic',label:'Porteur de drapeau',base:'male-adult-10',faction:'gilets',height:1.75,width:1.02,top:0x202837,pants:0x263646,hood:true,bag:0x262a2f,prop:'flag'},
 {key:'gilet-rouge',pack:'school',label:'Gilet jaune â€” hoodie rouge',base:'male-adult-04',faction:'gilets',height:1.64,width:1,top:0xa72b36,pants:0x294462,vest:true,hood:true,bag:0x20282d,hair:'dark'},
 {key:'gilet-blonde',pack:'compact',label:'Gilet jaune â€” blonde',base:'female-adult-12',faction:'gilets',height:1.72,width:.98,top:0xe3dfce,pants:0x314b6a,vest:true,bag:0x9b683a,hair:'blonde'},
 {key:'gilet-bonnet',pack:'rolltop',label:'Gilet jaune â€” bonnet',base:'male-adult-07',faction:'gilets',height:1.78,width:1.13,top:0x353936,pants:0x343638,vest:true,bag:0x24272a,hair:'beanie'},
 {key:'gilet-rousse',pack:'leather',label:'Gilet jaune â€” rousse',base:'female-adult-05',faction:'gilets',height:1.60,width:1.08,top:0x8b3548,pants:0x273b51,vest:true,bag:0x6c4131,hair:'red'},
 {key:'gilet-casquette',pack:'sport',label:'Gilet jaune â€” casquette',base:'male-adult-10',faction:'gilets',height:1.73,width:1.06,top:0x2c6283,pants:0x294461,vest:true,bag:0x233946,cap:0x202d39},
 {key:'gilet-gris',pack:'hiking',label:'Gilet jaune â€” cheveux gris',base:'male-adult-07',faction:'gilets',height:1.69,width:1.12,top:0xbfc5c8,pants:0x3a4651,vest:true,bag:0x79684c,hair:'grey'},
];
export const CHARACTER_ATLAS = {columns:12,rows:CHARACTER_STYLES.length,cellWidth:160,cellHeight:240,planeWidth:2.2,planeHeight:3.3,centerY:1.48};
export function characterRow(index){return ((index-1)%CHARACTER_STYLES.length+CHARACTER_STYLES.length)%CHARACTER_STYLES.length;}
export function characterStyle(index){return CHARACTER_STYLES[characterRow(index)];}

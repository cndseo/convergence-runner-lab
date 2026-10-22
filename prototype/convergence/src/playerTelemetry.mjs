const KEY='convergence_diagnostics_v1';
const EVENTS=new Set(['session_start','tap_play','first_gate_seen','gate_choice','first_front','level_complete','level_fail','quit_before_level_end','daily_play','share_open','share_success','share_cancel','share_copy','share_download','share_failed','store_open','checkout_start','checkout_redirect','checkout_failed','fps_bucket','runtime_error','invite_open']);
const FIELDS=new Set(['level','mode','gate','count','shields','elapsed','source','method','bucket','target','returnedD1','returnedD7']);

// Opt-in, bounded LOCAL diagnostics. No network, account, URL, token or device ID.
export class PlayerTelemetry {
  constructor(storage=globalThis.localStorage,now=()=>Date.now()){
    this.storage=storage;this.now=now;this.data={enabled:false,events:[],firstDay:null,lastDay:null};
    try{const saved=JSON.parse(storage.getItem(KEY)||'null');if(saved?.enabled&&Array.isArray(saved.events))this.data={...saved,events:saved.events.slice(-200)};}catch{}
    this.sessionStart=this.now();this.begin();
  }
  get enabled(){return this.data.enabled;}
  begin(){
    if(!this.enabled)return;
    const day=Math.floor(this.now()/86400000),first=this.data.firstDay??day;
    const previous=this.data.lastDay;
    this.data.firstDay=first;this.data.lastDay=day;
    this.track('session_start',{returnedD1:previous!==day&&day-first===1,returnedD7:previous!==day&&day-first===7});
  }
  setEnabled(enabled){
    this.data={enabled:!!enabled,events:[],firstDay:null,lastDay:null};
    this.sessionStart=this.now();this.save();if(enabled)this.begin();
  }
  track(name,details={}){
    if(!this.enabled||!EVENTS.has(name))return;
    const clean={};
    for(const [key,value] of Object.entries(details)){
      if(!FIELDS.has(key))continue;
      if(typeof value==='number'&&Number.isFinite(value))clean[key]=Math.round(value*10)/10;
      else if(typeof value==='boolean')clean[key]=value;
      else if(typeof value==='string'&&/^[a-zA-Z0-9_-]{1,32}$/.test(value))clean[key]=value;
    }
    this.data.events.push({event:name,day:Math.floor(this.now()/86400000),seconds:Math.round((this.now()-this.sessionStart)/1000),...clean});
    this.data.events=this.data.events.slice(-200);this.save();
  }
  save(){try{this.storage.setItem(KEY,JSON.stringify(this.data));}catch{}}
  snapshot(){return {schema:1,scope:'local-device-only',...this.data};}
}

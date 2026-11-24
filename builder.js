/* Deima Travels trip builder — 6 steps, live trip card, saved on this device */
(function(){
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAY=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const INT={culture:'Culture & heritage',wildlife:'Wildlife & safari',beach:'Beaches & ocean',tea:'Tea & hill country',nature:'Nature & hiking',adventure:'Adventure & surf',wellness:'Wellness & Ayurveda',food:'Food & local life',temples:'Temples & pilgrimage'};
const ALL=[1,2,3,4,5,6,7,8,9,10,11,12],DRY_WS=[12,1,2,3,4],EAST=[5,6,7,8,9],TRI=[1,2,3,4,5,6,7,8,9];
const P=[
 ['negombo','Negombo','West coast',7.21,79.84,'Beach town 20 minutes from the airport, handy for the first or last night.',['beach','food'],DRY_WS,[['Lagoon boat ride','nature'],['Fish market visit','food'],['Dutch canal tour','culture']]],
 ['colombo','Colombo','West coast',6.93,79.85,'The capital: busy markets, colonial streets and a lively food scene.',['food','culture'],DRY_WS,[['Pettah market walk','food'],['Gangaramaya Temple','temples'],['Galle Face Green at sunset','food'],['National Museum','culture']]],
 ['bentota','Bentota','West coast',6.42,80.00,'Long beach with river safaris, water sports and Ayurveda resorts.',['beach','wellness','adventure'],DRY_WS,[['Madu River boat safari','nature'],['Water sports','adventure'],['Ayurveda treatment','wellness']]],
 ['galle','Galle','South coast',6.03,80.22,'A walled Dutch fort town of cafés, boutiques and ocean ramparts.',['culture','beach','food'],DRY_WS,[['Galle Fort walking tour','culture'],['Maritime Museum','culture'],['Stilt fishermen at Koggala','beach'],['Turtle hatchery','wildlife'],['Cooking class','food']]],
 ['mirissa','Mirissa & Weligama','South coast',5.95,80.47,'Palm-lined beaches, whale watching and easy beginner surf.',['beach','wildlife','adventure'],DRY_WS,[['Whale watching','wildlife'],['Beginner surf lesson','adventure'],['Coconut Tree Hill','beach']]],
 ['tangalle','Tangalle','South coast',6.02,80.79,'Wide, quiet beaches and turtle nesting at Rekawa.',['beach','wellness'],DRY_WS,[['Rekawa turtle watch','wildlife'],['Mulkirigala rock temple','temples'],['Beach yoga','wellness']]],
 ['udawalawe','Udawalawe','South',6.47,80.89,'Open grasslands with large elephant herds.',['wildlife'],ALL,[['Udawalawe jeep safari','wildlife'],['Elephant Transit Home','wildlife']]],
 ['yala','Yala','South',6.37,81.52,"Sri Lanka's best-known safari park for leopards, elephants and birds.",['wildlife','nature'],[2,3,4,5,6,7],[['Yala jeep safari','wildlife'],['Bundala bird safari','wildlife'],['Kataragama temple','temples']]],
 ['ella','Ella','Hill country',6.87,81.05,"Mountain village of the Nine Arches Bridge, Little Adam's Peak and scenic train rides.",['tea','nature','adventure'],[12,1,2,3,4],[['Nine Arches Bridge','culture'],["Little Adam's Peak hike",'nature'],['Scenic train ride','tea'],['Ravana Falls','nature']]],
 ['nuwaraeliya','Nuwara Eliya','Hill country',6.97,80.78,'Cool tea town with colonial bungalows and Horton Plains nearby.',['tea','nature'],[1,2,3,4],[['Tea estate and factory tour','tea'],["Horton Plains & World's End hike",'nature'],['Gregory Lake','nature']]],
 ['kandy','Kandy','Hill country',7.29,80.63,'The hill capital: Temple of the Tooth, Kandyan dancing and botanical gardens.',['culture','temples','tea','food'],[12,1,2,3,4],[['Temple of the Tooth Relic','temples'],['Peradeniya Botanical Garden','nature'],['Kandyan dance show','culture'],['Spice garden visit','food'],['Tea factory visit','tea']]],
 ['dambulla','Dambulla','Cultural Triangle',7.86,80.65,'Cave temples filled with ancient paintings and Buddha statues.',['temples','culture'],TRI,[['Dambulla Cave Temple','temples'],['Golden Temple','temples'],['Fruit and vegetable market','food']]],
 ['sigiriya','Sigiriya','Cultural Triangle',7.957,80.76,'The Lion Rock fortress, Pidurangala sunrise hike and village life around the lakes.',['culture','nature','adventure'],TRI,[['Sigiriya Rock Fortress','culture'],['Pidurangala Rock hike','nature'],['Sigiriya Museum','culture'],['Village tour and cooking demo','food']]],
 ['minneriya','Minneriya','Cultural Triangle',8.03,80.90,'National park known for elephant gatherings in the dry season.',['wildlife','nature'],[6,7,8,9,10],[['Elephant jeep safari','wildlife'],['Hurulu Eco Park safari','wildlife']]],
 ['polonnaruwa','Polonnaruwa','Cultural Triangle',7.94,81.00,'Medieval royal capital with the stone Buddhas of Gal Vihara.',['culture','temples'],TRI,[['Gal Vihara','temples'],['Royal Palace ruins','culture'],['Cycling the ancient city','adventure']]],
 ['anuradhapura','Anuradhapura','Cultural Triangle',8.31,80.40,'Sacred ancient city of giant stupas and the Sri Maha Bodhi tree.',['temples','culture'],TRI,[['Sri Maha Bodhi','temples'],['Ruwanwelisaya stupa','temples'],['Cycling the ruins','adventure']]],
 ['wilpattu','Wilpattu','North-west',8.43,80.00,'The largest national park, known for leopards and natural lakes.',['wildlife','nature'],[2,3,4,5,6,7,8,9,10],[['Wilpattu jeep safari','wildlife']]],
 ['trinco','Trincomalee','East coast',8.59,81.21,'Quiet beaches, Pigeon Island snorkelling and whale watching in season.',['beach','temples','adventure'],EAST,[['Pigeon Island snorkelling','beach'],['Koneswaram Temple','temples'],['Whale watching','wildlife']]],
 ['pasikudah','Pasikudah','East coast',7.92,81.56,'A shallow, calm bay that suits families and swimmers.',['beach','wellness'],EAST,[['Swimming and snorkelling','beach'],['Batticaloa lagoon trip','nature']]],
 ['arugam','Arugam Bay','East coast',6.84,81.83,'Surf town with long right-hand breaks and lagoon safaris.',['adventure','beach'],[4,5,6,7,8,9,10],[['Surf lesson','adventure'],['Kumana lagoon safari','wildlife'],['Elephant Rock sunset','nature']]],
 ['jaffna','Jaffna','North',9.66,80.02,'Tamil culture, Hindu temples, island ferries and distinctive food.',['culture','temples','food'],TRI,[['Nallur Kandaswamy Temple','temples'],['Jaffna Fort','culture'],['Ferry to Delft Island','adventure'],['Jaffna crab curry','food']]]
].map(a=>({id:a[0],name:a[1],reg:a[2],lat:a[3],lon:a[4],desc:a[5],tags:a[6],best:a[7],acts:a[8]}));
const PB=Object.fromEntries(P.map(p=>[p.id,p]));
const AIR={lat:7.18,lon:79.88};
const LAB={sigiriya:'u',dambulla:'l',pasikudah:'d',negombo:'l',polonnaruwa:'r',minneriya:'u',colombo:'l',kandy:'r',nuwaraeliya:'l',ella:'r'};
const K=150,CX=Math.cos(7.8*Math.PI/180);
const X=lon=>(lon-79.5)*K*CX+10,Y=lat=>(9.95-lat)*K+10;
const COUNTRIES=[['United Kingdom','GBR','+44'],['India','IND','+91'],['Australia','AUS','+61'],['Germany','DEU','+49'],['United Arab Emirates','ARE','+971'],['United States','USA','+1'],['Maldives','MDV','+960'],['Japan','JPN','+81'],['China','CHN','+86'],['Russia','RUS','+7'],['France','FRA','+33'],['Italy','ITA','+39'],['Netherlands','NLD','+31'],['Sri Lanka','LKA','+94'],['Other','—','']];
const STAY=[['Luxury','Top resorts and heritage hotels'],['Premium','Well-known 4–5★ hotels'],['Boutique','Small, characterful places'],['Comfort','Good value, comfortable'],['Mix it up','Let Deima choose per stop']];
const PACE=[['Relaxed','Fewer stops, longer stays · about 3 nights per stop',3],['Balanced','A good mix · about 2 nights per stop',2],['See it all','More places, shorter stays · about 1 night per stop',1]];
const MEALS=[['BB','Bed & breakfast','BB'],['HB','Half board','Breakfast + dinner'],['FB','Full board','All three meals'],['AI','All inclusive','Where the hotel offers it']];
const LANGS=['English','Sinhala','Tamil','German','French','Russian','Chinese','Japanese','Hindi','Arabic','Italian','Spanish'];
const TYPES=['Holiday','Honeymoon','Family','Wildlife','Pilgrimage','Adventure'];
const DESTS=[['lk','Sri Lanka','Culture, wildlife, tea country and beaches',1],['mv','Maldives','Coming soon',0],['ae','Dubai','Coming soon',0],['jp','Japan','Coming soon',0]];
const STEPS=['Where & when','Travel style','Your route','Stay & extras','Your details','Review'];
const KEY='deima-trip-v1';
const fresh=()=>({step:0,max:0,dest:'lk',type:'Holiday',date:'',nights:7,adults:2,kids:0,ints:[],stay:'Premium',pace:'Balanced',route:[],sel:null,meals:'HB',rooms:null,lang:'English',flights:false,flyFrom:'',visa:true,cur:'USD',budget:'',notes:'',name:'',email:'',cc:'+44',phone:'',waSame:true,wa:'',from:'',reach:'WhatsApp',consent:false,sent:false});
let S=fresh();
try{const v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&typeof v==='object')S=Object.assign(fresh(),v,{sent:false})}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* helpers */
const month=()=>S.date?Number(S.date.slice(5,7)):(new Date().getMonth()+1);
const fmtDate=(iso,add=0)=>{if(!iso)return '–';const d=new Date(iso+'T12:00:00');d.setDate(d.getDate()+add);return `${DAY[d.getDay()]}, ${MON[d.getMonth()]} ${d.getDate()}`};
const km=(a,b)=>{const R=6371,t=Math.PI/180,dl=(b.lat-a.lat)*t,dn=(b.lon-a.lon)*t,h=Math.sin(dl/2)**2+Math.cos(a.lat*t)*Math.cos(b.lat*t)*Math.sin(dn/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h))*1.35)};
const hrs=k=>{const h=k/38;return h<1?`${Math.max(.5,Math.round(h*2)/2)}h`:`${Math.round(h*2)/2}h`};
const score=p=>p.tags.filter(t=>S.ints.includes(t)).length+(p.best.includes(month())?1:0);
const matches=()=>P.map(p=>[p,score(p)]).filter(x=>x[1]>=2).sort((a,b)=>b[1]-a[1]).slice(0,6).map(x=>x[0]);
const planned=()=>S.route.reduce((a,r)=>a+r.n,0);
const pax=()=>`${S.adults}A${S.kids?` ${S.kids}C`:''}`;
const rooms=()=>S.rooms||{s:0,d:Math.ceil(S.adults/2),t:0};
const transport=()=>{const n=S.adults+S.kids;return n<=3?'Car with a chauffeur guide':n<=6?'Van with a chauffeur guide':n<=12?'Mini-coach with a guide':'Coach with a guide'};
const ctry=()=>COUNTRIES.find(c=>c[0]===S.from);
const inRoute=id=>S.route.some(r=>r.id===id);
const perStop=()=>PACE.find(p=>p[0]===S.pace)[2];

/* shell */
const root=document.createElement('div');root.className='tb';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Deima Travels trip builder');
root.innerHTML=`<div class="tb-top"><div class="tb-brand"><i>DT</i><div><b>Deima Travels</b><small>TRIP BUILDER</small></div></div><nav class="tb-steps" id="tbSteps" aria-label="Steps"></nav><button class="tb-x" data-a="close" aria-label="Close trip builder">×</button></div><div class="tb-body"><div class="tb-main" id="tbMain"></div><aside class="tb-aside" id="tbCard" aria-label="Your trip card"></aside></div><div class="tb-foot"><button class="tb-btn ghost" data-a="back">← Back</button><span id="tbHint" style="font-size:13px;color:#6b7590"></span><button class="tb-btn" data-a="next" id="tbNext">Next</button></div>`;
const scrim=document.createElement('div');scrim.className='tb-scrim';scrim.hidden=true;scrim.addEventListener('click',()=>close());
document.body.appendChild(scrim);document.body.appendChild(root);
const $=s=>root.querySelector(s);
let lastFocus=null;

function stepsBar(){$('#tbSteps').innerHTML=STEPS.map((t,i)=>`<button data-a="goto" data-i="${i}" class="${i===S.step?'cur':i<=S.max?'done':''}" ${i>S.max?'disabled':''} ${i===S.step?'aria-current="step"':''}><span>${i<S.step||(i<=S.max&&i!==S.step)?'✓':i+1}</span><em>${t}</em></button>`).join('')}

function card(){
  const c=ctry();
  $('#tbCard').innerHTML=`<div class="tc"><div class="hd">DEIMA TRAVELS · TRIP REQUEST</div><div class="ft"><div><b>${c?esc(c[1]):'YOU'}</b><small>${c?esc(c[0]):'Your country'}</small></div><span class="pl">✈</span><div class="r"><b>CMB</b><small>Sri Lanka</small></div></div><hr><dl><div><dt>ARRIVE</dt><dd>${fmtDate(S.date)}</dd></div><div><dt>NIGHTS</dt><dd>${S.nights}</dd></div><div><dt>TRAVELLERS</dt><dd>${pax()}</dd></div><div><dt>STAY</dt><dd>${esc(S.stay)}</dd></div><div><dt>TRIP</dt><dd>${esc(S.type)}</dd></div><div><dt>MEALS</dt><dd>${S.meals}</dd></div></dl>${S.route.length?`<div class="rt">${S.route.map((r,i)=>`<span>${i+1}. ${esc(PB[r.id].name)}</span>`).join('')}</div>`:''}<div class="bc"></div></div><p class="tc-note"><b>Your trip card</b> fills in as you go. Your progress is saved on this device.</p><p class="tc-note">Nothing is booked or paid here. A Deima consultant checks your plan and sends you a priced quote.</p><button class="tb-pill" data-a="reset">Start over</button>`;
}

const stepper=(label,sub,key,min,max)=>`<div class="tb-step"><div><b>${label}</b>${sub?`<small>${sub}</small>`:''}</div><div class="ctl"><button data-a="inc" data-k="${key}" data-d="-1" data-min="${min}" data-max="${max}" aria-label="Fewer ${label}">−</button><b>${key.includes('.')?rooms()[key.split('.')[1]]:S[key]}</b><button data-a="inc" data-k="${key}" data-d="1" data-min="${min}" data-max="${max}" aria-label="More ${label}">+</button></div></div>`;
const choice=(group,val,on,title,sub,dis)=>`<button class="tb-card" data-a="set" data-k="${group}" data-v="${esc(val)}" aria-pressed="${on}" ${dis?'disabled':''}><b>${title}</b>${sub?`<small>${sub}</small>`:''}${dis?'<span class="soon">Soon</span>':''}</button>`;

/* step 1 */
function s1(){
  const m=month(),good=P.filter(p=>p.best.includes(m)).map(p=>p.name);
  return `<p class="eyebrow">Step 1 of 6</p><h2>Where would you like to go?</h2><p class="sub">Pick a destination and tell us when, and who's coming.</p>
  <h4>Destination</h4><div class="tb-cards">${DESTS.map(d=>choice('dest',d[0],S.dest===d[0],d[1],d[2],!d[3])).join('')}</div>
  <h4>Type of trip</h4><div class="tb-chips">${TYPES.map(t=>`<button class="tb-chip" data-a="set" data-k="type" data-v="${t}" aria-pressed="${S.type===t}">${t}</button>`).join('')}</div>
  <div class="tb-grid2" style="margin-top:18px"><label class="f">Arrival date<input type="date" data-in="date" value="${esc(S.date)}" min="${new Date().toISOString().slice(0,10)}"></label><div><span class="f" style="font-size:13px;font-weight:700">Length of stay</span>${stepper('Nights',`${S.nights+1} days`,'nights',1,30)}</div>
  <div>${stepper('Adults','12 years and over','adults',1,40)}</div><div>${stepper('Children','Under 12','kids',0,20)}</div></div>
  <div class="tb-tip">${good.length>2?`<b>${MON[m-1]} is a good time for:</b> ${good.join(', ')}.`:`<b>${MON[m-1]}:</b> few places are at their best this month${good.length?` (best: ${good.join(', ')})`:''}. Deima will suggest the best mix for your dates.`} A rough guide.</div>`;
}
/* step 2 */
function s2(){
  const best=matches();
  return `<p class="eyebrow">Step 2 of 6</p><h2>How do you like to travel?</h2><p class="sub">Your choices light up the best places on the map in the next step.</p>
  <h4>What would you like to do? <em>Pick as many as you like</em></h4><div class="tb-chips">${Object.entries(INT).map(([k,v])=>`<button class="tb-chip" data-a="tog" data-k="ints" data-v="${k}" aria-pressed="${S.ints.includes(k)}">${v}</button>`).join('')}</div>
  <h4>Where would you like to stay?</h4><div class="tb-cards">${STAY.map(s=>choice('stay',s[0],S.stay===s[0],s[0],s[1])).join('')}</div>
  <h4>Pace</h4><div class="tb-grid3">${PACE.map(p=>choice('pace',p[0],S.pace===p[0],p[0],p[1])).join('')}</div>
  ${best.length?`<div class="tb-tip">✓ <b>Best matches for you:</b> ${best.map(p=>p.name).join(', ')}.</div>`:`<div class="tb-tip">Pick a few interests to see your best matches.</div>`}`;
}
/* step 3 */
function mapSvg(){
  const pts=S.route.map(r=>PB[r.id]);
  const line=pts.length?`<polyline points="${[AIR,...pts,AIR].map(p=>`${X(p.lon).toFixed(1)},${Y(p.lat).toFixed(1)}`).join(' ')}" fill="none" stroke="#0F1B38" stroke-width="2" stroke-dasharray="5 4" opacity=".75"/>`:'';
  const pins=P.map(p=>{const sc=score(p),cls=['pin',sc>=2?'good':'',inRoute(p.id)?'in':'',S.sel===p.id?'sel':''].join(' ');const x=X(p.lon),y=Y(p.lat),lp=LAB[p.id]||(p.lon>81.3?'l':'r'),left=lp==='l',ty=lp==='u'?y-10:lp==='d'?y+17:y+4,tx=lp==='u'||lp==='d'?x:left?x-10:x+10,ta=lp==='u'||lp==='d'?'middle':left?'end':'start';
    return `<g class="${cls}" data-a="pick" data-v="${p.id}" tabindex="0" role="button" aria-label="${esc(p.name)}${inRoute(p.id)?', in your route':''}"><circle class="ring" cx="${x}" cy="${y}" r="${sc>=2?11+sc*2:0}"/><circle class="dot" cx="${x}" cy="${y}" r="6"/><text x="${tx}" y="${ty}" text-anchor="${ta}">${esc(p.name.split(' &')[0])}</text></g>`}).join('');
  return `<svg viewBox="0 0 380 630" role="img" aria-label="Map of Sri Lanka with places to visit"><path class="land" d="${window.LK_PATH||''}"/>${line}<g><rect x="${X(AIR.lon)-5}" y="${Y(AIR.lat)-5}" width="10" height="10" rx="2" fill="#92C04E" stroke="#0F1B38"/><text x="${X(AIR.lon)-9}" y="${Y(AIR.lat)+16}" font-size="9.5" fill="#0F1B38" font-weight="700">✈ CMB</text></g>${pins}</svg>`;
}
function detail(){
  const p=PB[S.sel];if(!p)return '';
  const r=S.route.find(x=>x.id===p.id),m=month();
  return `<div class="tb-panel"><div style="display:flex;justify-content:space-between;gap:10px;align-items:start"><div><div class="reg">${esc(p.reg.toUpperCase())}</div><h3>${esc(p.name)}</h3></div>${r?`<button class="tb-pill" data-a="remove" data-v="${p.id}">Remove</button>`:`<button class="tb-btn" data-a="add" data-v="${p.id}">+ Add to route</button>`}</div>
  <p style="margin:0">${esc(p.desc)}</p><div class="tb-tags">${p.tags.map(t=>`<span>${INT[t]}</span>`).join('')}</div>
  <h4>Best months <em>rough guide</em></h4><div class="tb-months">${MON.map((x,i)=>`<span class="${p.best.includes(i+1)?'ok':''} ${i+1===m?'mnow':''}">${x[0]}</span>`).join('')}</div>
  ${p.best.includes(m)?'':`<div class="tb-tip tb-warn" style="margin-top:10px">${MON[m-1]} isn't the best month here. Deima can suggest an alternative.</div>`}
  <h4>Things to do${r?'':' <em>· add to route to choose</em>'}</h4><div class="tb-acts">${p.acts.map(([a,t])=>{const on=r&&r.acts.includes(a);return `<label class="${on?'on':''}"><input type="checkbox" data-a="act" data-p="${p.id}" data-v="${esc(a)}" ${on?'checked':''} ${r?'':'disabled'}>${esc(a)}${S.ints.includes(t)?'<span class="m">Matches you</span>':''}</label>`}).join('')}</div>
  <h4>Where to stay</h4><select data-in="hotel" data-p="${p.id}" ${r?'':'disabled'} aria-label="Hotel preference for ${esc(p.name)}">${['Let Deima choose the best fit',...STAY.slice(0,4).map(s=>s[0]+' hotel')].map(o=>`<option ${r&&r.hotel===o?'selected':''}>${o}</option>`).join('')}</select></div>`;
}
function routeList(){
  const n=planned(),left=S.nights-n;
  if(!S.route.length)return `<div class="tb-panel"><div style="display:flex;justify-content:space-between"><b>Your route</b><small>0 of ${S.nights} nights planned</small></div><p class="sub" style="margin:8px 0 0">No stops yet. Tap a place on the map and press "Add to route".</p></div>`;
  let prev=AIR,h='';
  S.route.forEach((r,i)=>{const p=PB[r.id],k=km(prev,p);h+=`<div class="tb-leg ${k>200?'long':''}">${i?'Drive':'From the airport'} · ${k} km · ${hrs(k)}${k>200?' · long drive, consider a stop between':''}</div><div class="tb-stop"><span class="num">${i+1}</span><div><b>${esc(p.name)}</b><small>${r.acts.length} activities · ${esc(r.hotel==='Let Deima choose the best fit'?'Deima picks hotel':r.hotel)}</small></div><div class="ctl"><button class="tb-mini" data-a="nights" data-v="${r.id}" data-d="-1" aria-label="One night less in ${esc(p.name)}">−</button><b>${r.n}n</b><button class="tb-mini" data-a="nights" data-v="${r.id}" data-d="1" aria-label="One night more in ${esc(p.name)}">+</button><button class="tb-mini" data-a="move" data-v="${r.id}" data-d="-1" aria-label="Move ${esc(p.name)} earlier" ${i?'':'disabled'}>↑</button><button class="tb-mini" data-a="move" data-v="${r.id}" data-d="1" aria-label="Move ${esc(p.name)} later" ${i<S.route.length-1?'':'disabled'}>↓</button></div></div>`;prev=p});
  const k=km(prev,AIR);h+=`<div class="tb-leg ${k>200?'long':''}">Back to the airport · ${k} km · ${hrs(k)}</div>`;
  return `<div class="tb-panel"><div style="display:flex;justify-content:space-between"><b>Your route</b><small>${n} of ${S.nights} nights planned</small></div>${h}${S.route.length>2?'<button class="tb-pill" data-a="order">⇅ Suggest the best order</button>':''}${left>0?`<div class="tb-tip">${left} night${left>1?'s':''} left. Add another place, or leave them for Deima to suggest.</div>`:left<0?`<div class="tb-tip tb-warn">That's ${-left} night${left<-1?'s':''} more than your stay. Reduce a stop or add nights in step 1.</div>`:''}</div>`;
}
function s3(){
  const best=matches();
  return `<p class="eyebrow">Step 3 of 6</p><h2>Build your route on the map</h2><p class="sub">Tap a place to see what you can do and where you can stay, then add it to your route. Brighter rings mean a better match for you.</p>
  <div class="tb-route"><div class="tb-map">${mapSvg()}<div class="tb-legend"><span><i style="background:#92C04E"></i>Good match</span><span><i style="background:#0F1B38"></i>In your route</span><span><i style="background:#fff;border:1.5px solid #5b8a2a"></i>Tap to explore</span></div></div>
  <div>${S.sel?detail():`<div class="tb-panel"><b>Start here</b><p class="sub" style="margin:4px 0 10px">Tap a pin on the map, or pick one of your best matches:</p><div class="tb-chips">${(best.length?best:P.slice(0,6)).map(p=>`<button class="tb-chip" data-a="pick" data-v="${p.id}">${esc(p.name)} ${'•'.repeat(Math.max(1,score(p)))}</button>`).join('')}</div></div>`}${routeList()}</div></div>`;
}
/* step 4 */
function s4(){
  const ro=rooms();
  return `<p class="eyebrow">Step 4 of 6</p><h2>Stay and extras</h2><p class="sub">We've suggested rooms and a vehicle for your group. Change anything you like.</p>
  <h4>Meals</h4><div class="tb-cards">${MEALS.map(m=>choice('meals',m[0],S.meals===m[0],m[1],m[2])).join('')}</div>
  <h4>Rooms <em>suggested for ${S.adults} adult${S.adults>1?'s':''}${S.kids?` and ${S.kids} child${S.kids>1?'ren':''}`:''}</em></h4><div class="tb-grid3">${stepper('Single rooms','','rooms.s',0,20)}${stepper('Double / twin','','rooms.d',0,20)}${stepper('Triple rooms','','rooms.t',0,20)}</div>
  <div class="tb-grid2" style="margin-top:16px"><div><span class="f" style="font-size:13px;font-weight:700">Transport <small style="font-weight:500;color:#7a849b">based on ${S.adults+S.kids} travellers</small></span><div class="tb-tip" style="margin-top:5px">🚗 ${transport()} for the whole trip.</div></div>
  <label class="f">Guide language<select data-in="lang">${LANGS.map(l=>`<option ${S.lang===l?'selected':''}>${l}</option>`).join('')}</select></label>
  <label class="tb-check"><input type="checkbox" data-in="flights" ${S.flights?'checked':''}><span><b>I need flights</b><small>Deima's ticketing team will add flight options.</small></span></label>
  <label class="tb-check"><input type="checkbox" data-in="visa" ${S.visa?'checked':''}><span><b>Help me with the visa / ETA</b><small>Deima will tell you what you need and can apply for you.</small></span></label>
  ${S.flights?`<label class="f">Flying from <small>city or airport</small><input type="text" data-in="flyFrom" value="${esc(S.flyFrom)}" placeholder="e.g. London Heathrow, Chennai"></label><span></span>`:''}
  <div><span class="f" style="font-size:13px;font-weight:700">Budget per person <small style="font-weight:500;color:#7a849b">optional, excluding flights</small></span><div style="display:grid;grid-template-columns:96px minmax(0,1fr);gap:8px"><select data-in="cur" aria-label="Currency">${['USD','GBP','EUR','AUD','LKR','INR'].map(c=>`<option ${S.cur===c?'selected':''}>${c}</option>`).join('')}</select><input type="number" min="0" step="50" data-in="budget" value="${esc(S.budget)}" placeholder="e.g. 1500" aria-label="Budget per person"></div></div>
  <label class="f">Special requests <small>optional</small><textarea data-in="notes" placeholder="Anniversary, dietary needs, accessibility, a hotel you love…">${esc(S.notes)}</textarea></label></div>`;
}
/* step 5 */
function s5(){
  const c=ctry();
  return `<p class="eyebrow">Step 5 of 6</p><h2>Where should we send your quote?</h2><p class="sub">A Deima travel consultant will check your plan and send you prices.</p>
  <div class="tb-grid2"><label class="f">Full name<input type="text" data-in="name" value="${esc(S.name)}" autocomplete="name"></label><label class="f">Email<input type="email" data-in="email" value="${esc(S.email)}" autocomplete="email"></label>
  <label class="f">Contact number<div style="display:grid;grid-template-columns:96px minmax(0,1fr);gap:8px"><select data-in="cc" aria-label="Country code">${[...new Set(COUNTRIES.map(c=>c[2]).filter(Boolean))].map(x=>`<option ${S.cc===x?'selected':''}>${x}</option>`).join('')}</select><input type="tel" data-in="phone" value="${esc(S.phone)}" autocomplete="tel-national"></div></label>
  <label class="f">Travelling from<select data-in="from"><option value="">Choose a country</option>${COUNTRIES.map(c=>`<option ${S.from===c[0]?'selected':''}>${c[0]}</option>`).join('')}</select></label></div>
  <label class="tb-check" style="margin-top:14px"><input type="checkbox" data-in="waSame" ${S.waSame?'checked':''}><span>My WhatsApp number is the same as my contact number</span></label>
  ${S.waSame?'':`<label class="f" style="margin-top:10px;max-width:420px">WhatsApp number<input type="tel" data-in="wa" value="${esc(S.wa)}"></label>`}
  <h4>Best way to reach you</h4><div class="tb-chips">${['WhatsApp','Email','Phone call'].map(r=>`<button class="tb-chip" data-a="set" data-k="reach" data-v="${r}" aria-pressed="${S.reach===r}">${r}</button>`).join('')}</div>
  ${c&&c[1]!=='LKA'?`<div class="tb-tip">ℹ Travellers from ${esc(c[0])} usually need a Sri Lanka visa or ETA before arrival. Deima will confirm and can apply for you.</div>`:''}
  <label class="tb-check" style="margin-top:14px"><input type="checkbox" data-in="consent" ${S.consent?'checked':''}><span>Deima Travels may contact me about this trip by email, phone or WhatsApp.</span></label>`;
}
/* itinerary */
function days(){
  const out=[];let d=0,prev=AIR;
  S.route.forEach((r,i)=>{const p=PB[r.id],k=km(prev,p),acts=r.acts.slice();
    const t=i===0?`Arrive in Sri Lanka, transfer to ${p.name}`:`Travel to ${p.name}`;
    const first=r.n>1?[]:acts.splice(0);
    out.push({d:d++,t,note:`≈${k} km · ${hrs(k)} by road from ${i?PB[S.route[i-1].id].name:'the airport'}`,acts:first});
    for(let n=1;n<r.n;n++){const chunk=n===1?acts.splice(0):[];out.push({d:d++,t:n===1?`Explore ${p.name}`:`At leisure in ${p.name}`,note:'',acts:chunk})}
    prev=p});
  const left=S.nights-planned();
  for(let n=0;n<left;n++)out.push({d:d++,t:'Extra day — Deima will suggest',note:'',acts:[]});
  if(S.route.length){const k=km(prev,AIR);out.push({d:d++,t:'Transfer to the airport and depart',note:`≈${k} km · ${hrs(k)} by road`,acts:[]})}
  return out;
}
function quoteText(){
  const c=ctry(),ro=rooms(),ref='DT-'+(S.date||new Date().toISOString().slice(0,10)).replace(/-/g,'').slice(2)+'-'+String(S.phone||'0000').replace(/\D/g,'').slice(-4).padStart(4,'0');
  const L=[`DEIMA TRAVELS — TRIP REQUEST  ${ref}`,'',`Client: ${S.name||'—'}`,`Email: ${S.email||'—'}`,`Phone: ${S.cc} ${S.phone||'—'}${S.waSame?' (WhatsApp)':''}`,...(S.waSame?[]:[`WhatsApp: ${S.wa||'—'}`]),`Travelling from: ${c?c[0]:'—'}`,`Contact by: ${S.reach}  ·  Consent: ${S.consent?'yes':'no'}`,'',
  `Destination: Sri Lanka  ·  Trip: ${S.type}`,`Arrival: ${fmtDate(S.date)}  ·  Nights: ${S.nights}  ·  Departure: ${S.date?fmtDate(S.date,S.nights):'–'}`,`Travellers: ${S.adults} adult(s), ${S.kids} child(ren)`,`Stay: ${S.stay}  ·  Pace: ${S.pace}  ·  Meals: ${MEALS.find(m=>m[0]===S.meals)[1]}`,`Rooms: ${ro.s} single, ${ro.d} double/twin, ${ro.t} triple`,`Transport: ${transport()}  ·  Guide language: ${S.lang}`,`Flights: ${S.flights?'yes, from '+(S.flyFrom||'—'):'no'}  ·  Visa/ETA help: ${S.visa?'yes':'no'}`,`Budget per person (excl. flights): ${S.budget?S.cur+' '+S.budget:'not given'}`,`Interests: ${S.ints.map(i=>INT[i]).join(', ')||'—'}`,'','ROUTE'];
  S.route.forEach((r,i)=>L.push(`${i+1}. ${PB[r.id].name} — ${r.n} night(s) — ${r.hotel}`,`   ${r.acts.join(', ')||'no activities chosen'}`));
  L.push('','DAY BY DAY');days().forEach(x=>L.push(`Day ${x.d+1} (${fmtDate(S.date,x.d)}): ${x.t}${x.acts.length?' — '+x.acts.join(', '):''}`));
  L.push('',`Special requests: ${S.notes||'—'}`);return L.join('\n');
}
/* step 6 */
function s6(){
  const ro=rooms(),c=ctry();
  return `<p class="eyebrow">Step 6 of 6</p><h2>Here's your trip so far</h2><p class="sub">This is a draft. A Deima consultant will check it, add prices and send you a full quote.</p>
  <div class="tb-sum"><div><small>Travellers</small><b>${S.adults} adult${S.adults>1?'s':''}${S.kids?`, ${S.kids} child`:''}</b></div><div><small>Arrival</small><b>${fmtDate(S.date)}</b></div><div><small>Length</small><b>${S.nights} nights</b></div><div><small>Trip</small><b>${esc(S.type)}</b></div><div><small>Hotels</small><b>${esc(S.stay)} · ${ro.d+ro.s+ro.t} room${ro.d+ro.s+ro.t>1?'s':''}</b></div><div><small>Meals</small><b>${MEALS.find(m=>m[0]===S.meals)[1]}</b></div><div><small>Transport</small><b>${transport().split(' with')[0]} · ${esc(S.lang)} guide</b></div><div><small>Extras</small><b>${[S.flights&&'Flights',S.visa&&'Visa help'].filter(Boolean).join(' · ')||'None'}</b></div></div>
  <h4>Day by day</h4>${S.route.length?`<div class="tb-days">${days().map(x=>`<div class="tb-day"><div class="d"><b>Day ${x.d+1}</b><small>${fmtDate(S.date,x.d)}</small></div><div><h5>${esc(x.t)}</h5>${x.note?`<p>${esc(x.note)}</p>`:''}${x.acts.length?`<ul>${x.acts.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>`:''}</div></div>`).join('')}</div>`:`<div class="tb-tip tb-warn">No route yet. Go back to step 3 to add places, or send it and Deima will plan the route for you.</div>`}
  <div class="tb-grid2" style="margin-top:14px"><div class="tb-tip">We'll reply by <b>${esc(S.reach)}</b>${S.reach==='Email'?` to ${esc(S.email||'your email')}`:` to ${esc(S.cc)} ${esc(S.phone||'your number')}`}.</div><div class="tb-tip tb-warn"><b>Demo mode.</b> Nothing is sent yet. You'll see exactly what Deima would receive.</div></div>
  ${S.sent?`<div class="tb-done"><b>Request ready.</b> In the live site this goes straight to the Deima Travels team. For now, copy it below and send it by WhatsApp or email.</div>`:''}
  <details ${S.sent?'open':''}><summary>What Deima receives (quotation-template format)</summary><pre id="tbQuote">${esc(quoteText())}</pre><button class="tb-pill" data-a="copy">Copy request</button> <span id="tbCopied" style="font-size:13px"></span></details>`;
}
const VIEWS=[s1,s2,s3,s4,s5,s6];
function valid(){
  if(S.step===0&&!S.date)return 'Choose your arrival date to continue.';
  if(S.step===4){if(!S.name.trim())return 'Add your name to continue.';if(!/^\S+@\S+\.\S+$/.test(S.email))return 'Add a valid email to continue.';if(!S.phone.trim())return 'Add a contact number to continue.';if(!S.from)return 'Choose where you are travelling from.'}
  return '';
}
function render(keepScroll){
  const main=$('#tbMain'),top=main.scrollTop;
  stepsBar();main.innerHTML=VIEWS[S.step]();card();
  const v=valid(),nx=$('#tbNext');
  $('#tbHint').textContent=v;
  nx.innerHTML=S.step===5?(S.sent?'Request ready ✓':'Send to Deima →'):`Next<span class="nx-l">: ${STEPS[S.step+1]}</span> →`;
  nx.className='tb-btn'+(S.step===5?' go':'');nx.disabled=!!v;
  root.querySelector('[data-a=back]').style.visibility=S.step?'visible':'hidden';
  main.scrollTop=keepScroll?top:0;save();
}
function light(){card();const v=valid();$('#tbHint').textContent=v;$('#tbNext').disabled=!!v;save()}

/* events */
root.addEventListener('click',e=>{
  const b=e.target.closest('[data-a]');if(!b||b.disabled)return;
  const a=b.dataset.a,v=b.dataset.v,k=b.dataset.k;
  if(a==='close')return close();
  if(a==='back'){S.step=Math.max(0,S.step-1);return render()}
  if(a==='next'){if(valid())return;if(S.step===5){S.sent=true;return render(true)}S.step++;S.max=Math.max(S.max,S.step);if(S.step===2&&!S.route.length&&!S.sel){const m=matches()[0];if(m)S.sel=m.id}return render()}
  if(a==='goto'){S.step=+b.dataset.i;return render()}
  if(a==='set'){S[k]=v;return render(true)}
  if(a==='tog'){S[k]=S[k].includes(v)?S[k].filter(x=>x!==v):[...S[k],v];return render(true)}
  if(a==='inc'){const d=+b.dataset.d,mn=+b.dataset.min,mx=+b.dataset.max;if(k.startsWith('rooms.')){const r={...rooms()},f=k.split('.')[1];r[f]=Math.min(mx,Math.max(mn,r[f]+d));S.rooms=r}else{S[k]=Math.min(mx,Math.max(mn,S[k]+d));if(k==='adults'||k==='kids')S.rooms=null}return render(true)}
  if(a==='pick'){S.sel=v;return render(true)}
  if(a==='add'){const p=PB[v];if(!inRoute(v))S.route.push({id:v,n:Math.max(1,Math.min(perStop(),S.nights-planned()||1)),acts:p.acts.filter(x=>S.ints.includes(x[1])).map(x=>x[0]),hotel:'Let Deima choose the best fit'});return render(true)}
  if(a==='remove'){S.route=S.route.filter(r=>r.id!==v);return render(true)}
  if(a==='nights'){const r=S.route.find(x=>x.id===v);r.n=Math.max(1,Math.min(14,r.n+ +b.dataset.d));return render(true)}
  if(a==='move'){const i=S.route.findIndex(x=>x.id===v),j=i+ +b.dataset.d;if(j<0||j>=S.route.length)return;[S.route[i],S.route[j]]=[S.route[j],S.route[i]];return render(true)}
  if(a==='order'){const left=S.route.slice(),out=[];let cur=AIR;while(left.length){left.sort((x,y)=>km(cur,PB[x.id])-km(cur,PB[y.id]));const n=left.shift();out.push(n);cur=PB[n.id]}S.route=out;return render(true)}
  if(a==='reset'){S=fresh();return render()}
  if(a==='copy'){const t=$('#tbQuote').textContent;navigator.clipboard.writeText(t).then(()=>$('#tbCopied').textContent='Copied. Paste it into WhatsApp or email.').catch(()=>$('#tbCopied').textContent='Select the text above to copy it.')}
});
root.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.a==='act'){const r=S.route.find(x=>x.id===t.dataset.p);if(r){r.acts=t.checked?[...r.acts,t.dataset.v]:r.acts.filter(x=>x!==t.dataset.v)}return render(true)}
  const k=t.dataset.in;if(!k)return;
  if(k==='hotel'){const r=S.route.find(x=>x.id===t.dataset.p);if(r)r.hotel=t.value;return render(true)}
  S[k]=t.type==='checkbox'?t.checked:t.value;
  if(k==='from'){const c=ctry();if(c&&c[2])S.cc=c[2]}
  if(['date','flights','waSame','from','lang','cur','consent'].includes(k))return render(true);
  light();
});
root.addEventListener('input',e=>{const t=e.target,k=t.dataset.in;if(!k||t.type==='checkbox'||t.tagName==='SELECT')return;S[k]=t.value;light()});
root.addEventListener('keydown',e=>{
  if(e.key==='Escape')return close();
  const g=e.target.closest('g[data-a=pick]');if(g&&(e.key==='Enter'||e.key===' ')){e.preventDefault();S.sel=g.dataset.v;render(true)}
});
function open(opts={}){
  lastFocus=document.activeElement;
  if(opts.place&&PB[opts.place]){S.sel=opts.place;if(!inRoute(opts.place)){const p=PB[opts.place];S.route.push({id:p.id,n:perStop(),acts:p.acts.slice(0,2).map(x=>x[0]),hotel:'Let Deima choose the best fit'})}}
  if(opts.date)S.date=opts.date;
  if(opts.adults){S.adults=+opts.adults;S.rooms=null}
  scrim.hidden=false;root.hidden=false;document.documentElement.style.overflow='hidden';render();
  setTimeout(()=>root.querySelector('.tb-x').focus(),50);
}
function close(){root.hidden=true;scrim.hidden=true;document.documentElement.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus()}
window.DeimaTrip={open,close,places:P};
})();

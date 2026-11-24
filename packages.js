/* Deima Travels: pre-defined tour packages with day-by-day itinerary and map */
(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const AIRN={UL:'SriLankan Airlines',EK:'Emirates',FZ:'flydubai',SQ:'Singapore Airlines'};
const logo=k=>`<span class="logo"><img src="assets/airlines/${k}.png" alt="${AIRN[k]||k}" loading="lazy"></span>`;
const IC={
 Flights:'<path fill="currentColor" stroke="none" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z"/>',
 Hotel:'<path d="M3 19V6M3 14h18v5M21 14v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="1.6"/>',
 Transfers:'<path d="M5 17h14M6 17l1.5-6h9l1.5 6M7 17v2M17 17v2"/><circle cx="8" cy="14.5" r=".8"/><circle cx="16" cy="14.5" r=".8"/>',
 Shopping:'<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
 Sightseeing:'<circle cx="7" cy="15" r="3.5"/><circle cx="17" cy="15" r="3.5"/><path d="M10.5 15h3M7 11.5 9 5h2l1 4 1-4h2l2 6.5"/>',
 Resort:'<path d="M3 20h18M12 4c-4 0-7 3-8 6h16c-1-3-4-6-8-6zM12 10v10"/>',
 Safari:'<path d="M3 17h18M5 17V9h10l3 4v4M8 9V6h5v3"/><circle cx="7" cy="17" r="2"/><circle cx="16" cy="17" r="2"/>',
 Guide:'<circle cx="12" cy="7" r="3.5"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/>'
};
const ico=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]||IC.Sightseeing}</svg>`;
const BKK_ART=`<svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="bkS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2f6b"/><stop offset=".45" stop-color="#c0567a"/><stop offset=".8" stop-color="#f4a259"/><stop offset="1" stop-color="#ffd27a"/></linearGradient><linearGradient id="bkR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4a259" stop-opacity=".55"/><stop offset="1" stop-color="#0F1B38"/></linearGradient><radialGradient id="bkG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient></defs>
<rect width="600" height="340" fill="url(#bkS)"/><circle cx="470" cy="190" r="70" fill="url(#bkG)"/><circle cx="470" cy="190" r="26" fill="#ffe2a0" opacity=".9"/>
<g fill="#0F1B38" opacity=".55"><path d="M0 250V210h30v-30h18v30h22v-55h26v55h14v-22h20v22h16v-70h24v70h20v-40h16v40H0z"/><path d="M440 250v-60h22v-30h16v30h20v-50h26v50h18v-26h20v26h38v60z"/></g>
<g fill="#0F1B38"><path d="M300 52l6 30 4 24 8 30 6 40 10 34 12 40H254l12-40 10-34 6-40 8-30 4-24z"/><path d="M232 250l10-38 8-22h20l-10 34-6 26zM368 250l-10-38-8-22h-20l10 34 6 26z"/><path d="M196 250l6-22 6-14h12l-6 20-4 16zM404 250l-6-22-6-14h-12l6 20 4 16z"/><rect x="180" y="246" width="240" height="10" rx="2"/></g>
<rect y="256" width="600" height="84" fill="url(#bkR)"/>
<g stroke="#ffe9a8" stroke-width="1.5" opacity=".7"><path d="M0 268h600M40 288h520M120 308h360" stroke-dasharray="14 18"/></g>
<path d="M60 296h90l-12 12H72z" fill="#0F1B38"/><path d="M78 284h52v12H78z" fill="#0F1B38"/>
<path d="M0 30Q150 70 300 34T600 40" fill="none" stroke="#ffe9a8" stroke-width="1" opacity=".6"/>
<g fill="#ffe9a8">${Array.from({length:22},(_,i)=>{const x=i*28+8,y=30+Math.sin(i/22*Math.PI*2)*-8+(i%2?6:2);return `<circle cx="${x}" cy="${y+4}" r="3"/>`}).join('')}</g>
<g transform="translate(540 214)"><path d="M0-66 22-20H10L28 10H12L32 40H-32L-12 10H-28L-10-20H-22z" fill="#1f5a3a"/><rect x="-5" y="40" width="10" height="12" fill="#5b3a1e"/><path d="M0-76l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#ffd34d"/><g fill="#e8423f"><circle cx="-8" cy="-14" r="3"/><circle cx="10" cy="4" r="3"/><circle cx="-14" cy="24" r="3"/><circle cx="16" cy="30" r="3"/></g></g>
</svg>`;
const P=[
{id:'bkk',feat:1,title:'Bangkok Christmas Getaway',where:'Bangkok, Thailand',dates:'23–27 December',len:'5 days · 4 nights',price:'LKR 175,000',pnote:'Special air fare',ribbon:'Christmas special',photo:'assets/bangkok-wat-arun.jpg',credit:'Photo: Chainwit. / Wikimedia Commons, CC BY 4.0',air:['UL'],airNote:'SriLankan Airlines – direct flights both ways',incl:['Flights','Hotel','Transfers','Shopping','Sightseeing'],note:'Ground arrangements can be arranged.',tags:['Vibrant markets','Amazing temples','Stunning nightlife'],art:BKK_ART,
 contact:{name:'Mark',tel:'+94778093636',show:'077 809 3636',wa:'94778093636'},
 days:[
 {d:'Day 1',when:'Wed 23 Dec',t:'Fly to Bangkok',s:[['Suvarnabhumi Airport (BKK)',13.6900,100.7501,'Land on SriLankan Airlines\' direct flight from Colombo. Meet and transfer to your hotel.'],['Asiatique The Riverfront',13.7044,100.5030,'Riverside night market and Ferris wheel, lit up for Christmas.']]},
 {d:'Day 2',when:'Thu 24 Dec',t:'Temples and Christmas Eve on the river',s:[['Grand Palace',13.7500,100.4915,'The royal palace and the Temple of the Emerald Buddha.'],['Wat Pho',13.7465,100.4927,'Home of the giant golden Reclining Buddha.'],['Wat Arun',13.7437,100.4889,'Cross by river ferry to the Temple of Dawn — best at sunset.'],['ICONSIAM pier',13.7266,100.5103,'Christmas Eve dinner cruise on the Chao Phraya river.']]},
 {d:'Day 3',when:'Fri 25 Dec',t:'Christmas Day shopping',s:[['Siam Paragon',13.7462,100.5348,'Luxury brands, a food hall and festive displays.'],['CentralWorld',13.7466,100.5393,'Giant Christmas tree and one of Asia\'s biggest malls.'],['Platinum Fashion Mall',13.7502,100.5403,'Wholesale fashion at low prices.'],['Yaowarat (Chinatown)',13.7396,100.5097,'Evening street-food crawl under the neon lights.']]},
 {d:'Day 4',when:'Sat 26 Dec',t:'Markets and malls',s:[['Chatuchak Weekend Market',13.7999,100.5505,'Thousands of stalls — clothes, crafts, plants and snacks. Open weekends.'],['ICONSIAM',13.7266,100.5103,'Riverside mega-mall with an indoor floating market.']]},
 {d:'Day 5',when:'Sun 27 Dec',t:'Last shopping and fly home',s:[['MBK Center',13.7445,100.5300,'Phones, gadgets and souvenirs before you leave.'],['Suvarnabhumi Airport (BKK)',13.6900,100.7501,'Direct flight back to Colombo.']]}
 ]},
{id:'dxb',title:'Dubai City & Desert',where:'Dubai & Abu Dhabi, UAE',dates:'Flexible dates',len:'5 days · 4 nights',price:'Price on request',pnote:'Flights, hotel and tours',ribbon:'Family favourite',air:['UL','EK','FZ'],incl:['Flights','Hotel','Transfers','Safari','Sightseeing'],tags:['Desert safari','Burj Khalifa','Abu Dhabi day trip'],img:'videos/dubai.jpg',
 days:[
 {d:'Day 1',when:'Arrival',t:'Arrive in Dubai',s:[['Dubai International Airport (DXB)',25.2532,55.3657,'Meet and transfer to your hotel.'],['Dubai Marina',25.0805,55.1403,'Evening dhow dinner cruise past the Marina towers.']]},
 {d:'Day 2',when:'',t:'Old Dubai and the tallest tower',s:[['Al Fahidi Historical Neighbourhood',25.2637,55.2995,'Wind towers, galleries and old lanes.'],['Dubai Creek abra ride',25.2654,55.2970,'Cross the creek on a traditional wooden boat.'],['Gold Souk',25.2870,55.2967,'Gold and spice markets in Deira.'],['Burj Khalifa & Dubai Mall',25.1972,55.2744,'Observation deck at sunset, then the Dubai Fountain show.']]},
 {d:'Day 3',when:'',t:'Desert safari',s:[['Desert camp, Lahbab dunes area',24.99,55.64,'Dune bashing, camel ride, henna and a barbecue dinner under the stars.']]},
 {d:'Day 4',when:'',t:'Abu Dhabi day trip',s:[['Sheikh Zayed Grand Mosque',24.4128,54.4750,'One of the world\'s largest mosques, in white marble.'],['Ferrari World, Yas Island',24.4837,54.6071,'Optional theme park afternoon.']]},
 {d:'Day 5',when:'Departure',t:'Palm Jumeirah and fly home',s:[['Palm Jumeirah & Atlantis',25.1304,55.1171,'Photo stop on the famous palm-shaped island.'],['Dubai International Airport (DXB)',25.2532,55.3657,'Flight back to Colombo.']]}
 ]},
{id:'mle',title:'Maldives Honeymoon Escape',where:'South Malé Atoll, Maldives',dates:'Flexible dates',len:'5 days · 4 nights',price:'Price on request',pnote:'Flights, resort and transfers',ribbon:'Honeymoon',air:['UL'],incl:['Flights','Resort','Transfers','Sightseeing'],tags:['Overwater villa','Sandbank picnic','Sunset cruise'],img:'videos/maldives.jpg',
 days:[
 {d:'Day 1',when:'Arrival',t:'Fly to paradise',s:[['Velana International Airport (MLE)',4.1918,73.5290,'80-minute flight from Colombo.'],['Your resort, South Malé Atoll',3.985,73.42,'Speedboat transfer to an overwater villa (resort chosen with you).']]},
 {d:'Day 2',when:'',t:'Reef and sunset',s:[['House reef',3.98,73.425,'Snorkel straight from your villa.'],['Sunset dolphin cruise',3.95,73.47,'Watch spinner dolphins as the sun goes down.']]},
 {d:'Day 3',when:'',t:'Sandbank picnic',s:[['Private sandbank',4.04,73.47,'A picnic for two on a strip of white sand in the lagoon.']]},
 {d:'Day 4',when:'',t:'Spa and Malé city',s:[['Old Friday Mosque (Hukuru Miskiy)',4.1785,73.5098,'Coral-stone mosque from 1658.'],['Malé fish market',4.1773,73.5073,'See the day\'s tuna catch come in.']]},
 {d:'Day 5',when:'Departure',t:'Fly home',s:[['Velana International Airport (MLE)',4.1918,73.5290,'Speedboat to the airport and fly back to Colombo.']]}
 ]},
{id:'sin',title:'Singapore Family Fun',where:'Singapore',dates:'Flexible dates',len:'5 days · 4 nights',price:'Price on request',pnote:'Flights, hotel and passes',ribbon:'School holidays',air:['UL','SQ'],incl:['Flights','Hotel','Transfers','Sightseeing'],tags:['Universal Studios','Night Safari','Gardens by the Bay'],img:'videos/singapore.jpg',
 days:[
 {d:'Day 1',when:'Arrival',t:'Arrive and see the lights',s:[['Jewel Changi Airport',1.3602,103.9898,'See the indoor Rain Vortex waterfall on arrival.'],['Gardens by the Bay',1.2816,103.8636,'Evening light show among the Supertrees.']]},
 {d:'Day 2',when:'',t:'Sentosa island',s:[['Universal Studios Singapore',1.2540,103.8238,'Rides and shows for every age.'],['S.E.A. Aquarium',1.2583,103.8205,'Walk under huge ocean tanks.']]},
 {d:'Day 3',when:'',t:'Zoo and Night Safari',s:[['Singapore Zoo',1.4043,103.7930,'Open-concept zoo with orangutans and white tigers.'],['Night Safari',1.4022,103.7880,'Tram ride through the world\'s first nocturnal zoo.']]},
 {d:'Day 4',when:'',t:'City neighbourhoods',s:[['Chinatown',1.2836,103.8443,'Temples, markets and hawker food.'],['Little India',1.3066,103.8518,'Colourful streets and Mustafa Centre shopping.'],['Marina Bay Sands SkyPark',1.2834,103.8607,'City views from 57 floors up.']]},
 {d:'Day 5',when:'Departure',t:'Fly home',s:[['Changi Airport (SIN)',1.3644,103.9915,'Flight back to Colombo.']]}
 ]},
{id:'lka',title:'Sri Lanka Cultural Triangle',where:'Sri Lanka',dates:'Flexible dates',len:'6 days · 5 nights',price:'Price on request',pnote:'Hotels, car and guide',ribbon:'Visiting Sri Lanka',air:['UL'],incl:['Hotel','Transfers','Guide','Safari','Sightseeing'],tags:['Sigiriya','Elephant safari','Temple of the Tooth'],img:'videos/sigiriya.jpg',builder:1,
 days:[
 {d:'Day 1',when:'Arrival',t:'Arrive in Sri Lanka',s:[['Bandaranaike International Airport (CMB)',7.1808,79.8841,'Meet your chauffeur guide.'],['Negombo',7.2083,79.8358,'Beach and lagoon town for the first night.']]},
 {d:'Day 2',when:'',t:'Cave temples',s:[['Dambulla Cave Temple',7.8567,80.6490,'Five caves of ancient paintings and Buddha statues.']]},
 {d:'Day 3',when:'',t:'Lion Rock and elephants',s:[['Sigiriya Rock Fortress',7.9570,80.7603,'Climb the 5th-century rock palace at sunrise.'],['Minneriya National Park',8.0350,80.8950,'Jeep safari to see elephant herds.']]},
 {d:'Day 4',when:'',t:'Ancient capital',s:[['Polonnaruwa',7.9403,81.0188,'Cycle between royal ruins and the Gal Vihara Buddhas.']]},
 {d:'Day 5',when:'',t:'Kandy',s:[['Temple of the Tooth Relic',7.2936,80.6413,'Sri Lanka\'s most sacred temple.'],['Peradeniya Botanical Garden',7.2685,80.5960,'Orchids, spice trees and giant bamboo.']]},
 {d:'Day 6',when:'Departure',t:'Colombo and fly home',s:[['Galle Face Green, Colombo',6.9271,79.8456,'Sea-front walk and street food.'],['Bandaranaike International Airport (CMB)',7.1808,79.8841,'Transfer for your flight.']]}
 ]}
];
const DAYC=['#4d7a1c','#1e6f8a','#c2691a','#7a5bbf','#b03a48','#0F1B38'];

function art(p){if(p.photo)return `<div class="pkArt photo"><img src="${p.photo}" alt="Wat Arun at sunset on the Chao Phraya river, Bangkok" loading="lazy"><svg class="lights" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 14Q150 44 300 18T600 22" fill="none" stroke="#ffe9a8" stroke-width="1" opacity=".7"/>${Array.from({length:24},(_,i)=>`<circle cx="${i*26+6}" cy="${22+Math.sin(i/3.8)*7}" r="3.2" fill="${['#ffe9a8','#e8423f','#92C04E'][i%3]}"/>`).join('')}</svg><small class="credit">${p.credit}</small></div>`;return p.art?`<div class="pkArt">${p.art}</div>`:`<div class="pkArt"><img src="${p.img}" alt="" loading="lazy"></div>`}
const waLink=p=>`https://wa.me/${p.contact.wa}?text=${encodeURIComponent(`Hi ${p.contact.name}, I'm interested in the ${p.title} (${p.dates}).`)}`;
function card(p,i){
 return `<article class="pk${p.feat?' feat':''}" data-pk="${p.id}" style="--d:${i*80}ms">
 ${art(p)}<span class="pkRibbon">${p.ribbon}</span>
 <div class="pkBody">
  <p class="pkWhere">${p.where}</p><h3>${p.title}</h3>
  <div class="pkMeta"><span class="pkDate">${p.dates}</span><span>${p.len}</span></div>
  <div class="pkPrice${p.price.startsWith('LKR')?'':' ask'}"><small>${p.pnote}</small><b>${p.price}</b></div>
  ${p.airNote?`<div class="pkAir">${logo(p.air[0])}<span>${p.airNote}</span></div>`:`<div class="pkAir">${p.air.map(logo).join('')}</div>`}
  <div class="pkIncl">${p.incl.map(k=>`<span title="${k}" aria-label="${k}">${ico(k)}</span>`).join('')}</div>
  ${p.feat?`<ol class="pkStrip">${p.days.map(d=>`<li><b>${d.when}</b><span>${d.t}</span></li>`).join('')}</ol>`:''}
  <div class="pkActs">${p.contact?`<a class="btn wa sm" href="${waLink(p)}" target="_blank" rel="noopener">WhatsApp ${p.contact.name}</a>`:''}<button type="button" class="pkGo">View itinerary & map →</button></div>
 </div></article>`;
}
function render(){$('#packGrid').innerHTML=P.map(card).join('');$$('#packGrid .pk').forEach(b=>b.addEventListener('click',e=>{if(e.target.closest('a'))return;open(P.find(p=>p.id===b.dataset.pk))}))}

/* ---------- itinerary popup ---------- */
let map=null,markers=[],lastFocus=null,cur=null;
function loadLeaflet(){
 if(window.L)return Promise.resolve();
 if(loadLeaflet.p)return loadLeaflet.p;
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';document.head.appendChild(css);
 return loadLeaflet.p=new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s)});
}
function open(p){
 cur=p;const m=$('#pkm');let n=0;
 const msg=encodeURIComponent(`Hi ${p.contact?p.contact.name:'Deima Travels'}, I'm interested in the ${p.title} (${p.dates}).`);
 m.innerHTML=`<div class="pkBox">
 <div class="pkHero">${art(p)}<div class="pkHeroIn">
  <button type="button" class="pkX" aria-label="Close">×</button>
  <span class="pkRibbon">${p.ribbon}</span><p class="pkWhere">${p.where}</p><h3 id="pkT">${p.title}</h3>
  <div class="pkMeta"><span class="pkDate">${p.dates}</span><span>${p.len}</span></div>
  <div class="pkHeroRow"><div class="pkPrice${p.price.startsWith('LKR')?'':' ask'}"><small>${p.pnote}</small><b>${p.price}</b></div>${p.airNote?`<div class="pkAir">${logo(p.air[0])}<span>${p.airNote}</span></div>`:`<div class="pkAir"><span>Fly with</span>${p.air.map(logo).join('')}</div>`}</div>
 </div></div>
 <div class="pkMain">
  <div class="pkDays"><h4>Day by day</h4>${p.days.map((d,i)=>`<button type="button" class="pkDay" data-day="${i}" style="--c:${DAYC[i%DAYC.length]}"><span class="dn">${d.d}</span>${d.when?`<span class="dw">${d.when}</span>`:''}<b>${d.t}</b><ol start="${n+1}">${d.s.map(s=>{n++;return `<li><strong>${s[0]}</strong><span>${s[3]}</span></li>`}).join('')}</ol></button>`).join('')}
   <div class="pkIncl big">${p.incl.map(k=>`<span>${ico(k)}<em>${k}</em></span>`).join('')}</div>
   ${p.note?`<p class="pkNote">${p.note}</p>`:''}
   <p class="pkFine">This is our suggested plan. Times, hotels and stops can be changed to suit you; your planner confirms prices and availability before you book.</p>
  </div>
  <div class="pkMapWrap"><div class="pkMap" id="pkMap" role="img" aria-label="Map of the itinerary stops"></div><p class="pkMapHint">Tap a day to zoom to its stops · tap a pin for details</p></div>
 </div>
 <div class="pkCta">
  ${p.contact?`<a class="btn wa" href="https://wa.me/${p.contact.wa}?text=${msg}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>WhatsApp ${p.contact.name} · ${p.contact.show}</a><a class="btn line" href="tel:${p.contact.tel}">Call ${p.contact.show}</a>`:''}
  ${p.builder?`<button type="button" class="btn" data-build>Customise this trip</button>`:''}
  <button type="button" class="btn ${p.contact||p.builder?'line':''}" data-req>Request this package</button>
 </div></div>`;
 if(m.hidden){lastFocus=document.activeElement;m.hidden=false;document.body.style.overflow='hidden'}
 m.querySelector('.pkX').onclick=close;m.querySelector('.pkX').focus();
 m.querySelector('[data-req]').onclick=()=>{close();window.DeimaQQ&&window.DeimaQQ(`${p.title} — ${p.dates}`)};
 const bld=m.querySelector('[data-build]');if(bld)bld.onclick=()=>{close();window.DeimaTrip&&window.DeimaTrip.open({})};
 $$('#pkm .pkDay').forEach(b=>b.onclick=()=>focusDay(+b.dataset.day));
 loadLeaflet().then(()=>drawMap(p)).catch(()=>{const w=$('#pkm .pkMapWrap');if(w)w.innerHTML='<p class="pkFine">The map could not load. All stops are listed day by day.</p>'});
}
function drawMap(p){
 if(cur!==p||$('#pkm').hidden)return;
 if(map){map.remove();map=null}
 map=L.map('pkMap',{scrollWheelZoom:false,zoomControl:true,attributionControl:true});
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
 markers=[];let n=0;const pts=[];
 p.days.forEach((d,i)=>d.s.forEach(s=>{n++;const ll=[s[1],s[2]];pts.push(ll);
  const mk=L.marker(ll,{icon:L.divIcon({className:'pkPin',html:`<span style="--c:${DAYC[i%DAYC.length]}">${n}</span>`,iconSize:[30,30],iconAnchor:[15,15]}),title:s[0]}).addTo(map)
   .bindPopup(`<b>${n}. ${s[0]}</b><br><small>${d.d}${d.when?' · '+d.when:''}</small><br>${s[3]}`);
  mk.on('click',()=>hiDay(i));markers.push({mk,day:i,ll});
 }));
 L.polyline(pts,{color:'#0F1B38',weight:2.5,opacity:.6,dashArray:'6 8'}).addTo(map);
 map.fitBounds(L.latLngBounds(pts).pad(.15));
 setTimeout(()=>map&&map.invalidateSize(),250);
 if(window.DeimaLang&&window.DeimaLang.get()!=='en')window.DeimaLang.set(window.DeimaLang.get());
}
function hiDay(i){$$('#pkm .pkDay').forEach(b=>b.classList.toggle('on',+b.dataset.day===i));markers.forEach(o=>{const el=o.mk.getElement();if(el)el.classList.toggle('dim',o.day!==i)})}
function focusDay(i){hiDay(i);if(!map)return;const ll=markers.filter(o=>o.day===i).map(o=>o.ll);if(!ll.length)return;if(ll.length===1)map.flyTo(ll[0],14,{duration:RM?0:.8});else map.flyToBounds(L.latLngBounds(ll).pad(.3),{duration:RM?0:.8,maxZoom:15});
 if(matchMedia('(max-width:980px)').matches){const w=$('#pkm .pkMapWrap');if(w)w.scrollIntoView({block:'nearest',behavior:RM?'auto':'smooth'})}}
function close(){const m=$('#pkm');if(m.hidden)return;m.hidden=true;document.body.style.overflow='';if(map){map.remove();map=null}if(lastFocus)lastFocus.focus()}
$('#pkm').addEventListener('click',e=>{if(e.target.id==='pkm')close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
render();
window.DeimaPackages={open:id=>open(P.find(p=>p.id===id))};
})();

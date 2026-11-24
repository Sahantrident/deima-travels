/* Deima Travels: explore globe, country guides, airline comparison, fares, seat guide, planning steps */
(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const IC={
 beach:'<path d="M3 19h18M6 19c1.5-3.5 4.5-6 8.5-6.5M14 12.5 11.8 4.5M11.8 4.5c3-1 6 .3 7.2 3.2M11.8 4.5C8.8 3.8 6 5.6 5.6 8.6"/>',
 city:'<path d="M3 21V9h5v12M8 21V4h8v17M16 21v-9h5v9M11 8h2M11 12h2M11 16h2"/>',
 nature:'<path d="M2 20 8.5 9l4 6.5L15.5 11 22 20z"/><circle cx="17" cy="6" r="2"/>',
 culture:'<path d="M4 21h16M6 21v-9M10 21v-9M14 21v-9M18 21v-9M3 12h18L12 4z"/>',
 food:'<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 3c-2.2 2.2-2.2 7 0 9v9"/>',
 adventure:'<path d="M12 3a6 6 0 0 1 6 6c0 4-6 6-6 6s-6-2-6-6a6 6 0 0 1 6-6zM10 15l-1 6h6l-1-6"/>',
 plane:'<path fill="currentColor" stroke="none" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z"/>',
 cash:'<path d="M3 6h18v12H3zM7 12h.01M17 12h.01"/><circle cx="12" cy="12" r="2.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 leg:'<path d="M7 3v9a3 3 0 0 0 3 3h5l3 6M7 21h4"/>',
 door:'<path d="M5 21V4h10v17M15 12h-2M19 21H3M15 6l4 2v13"/>',
 baby:'<circle cx="12" cy="7" r="3"/><path d="M7 21v-5a5 5 0 0 1 10 0v5M9 14l-3-2M15 14l3-2"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
 seat:'<path d="M7 3v10h10M7 13l-2 8M17 13l2 8M7 9h8"/>'
};
const ico=(k,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const logo=(k,cls='')=>`<span class="logo ${cls}"><img src="assets/airlines/${k}.png" alt="${(typeof AIR!=='undefined'&&AIR[k])?AIR[k].n:k}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('b'),{textContent:'${k}'}))"></span>`;
const AREA={'Indian Ocean':['#0d6f8f','#2a9bb3'],'Asia':['#1e5f74','#4d7a1c'],'Middle East':['#3a2c4f','#b5562f'],'Europe':['#1d2c4f','#46607f'],'Oceania':['#0F1B38','#a4502f']};
const CMB=[79.88,6.93];

/* ---------- country guides ---------- */
const C=[
{id:'lk',iso:'144',name:'Sri Lanka',ll:[80.7,7.8],area:'Asia',reg:null,z:2.4,fly:'You are home',cur:'LKR',best:[1,2,3,4,7,8,12],bn:'Dec–Apr south & west · May–Sep east coast',ideal:['Culture','Wildlife','Beaches','Families'],
 tag:'Eight UNESCO World Heritage Sites, wild elephants and misty tea hills — all on one small island.',
 p:[['culture','Sigiriya','A 5th-century palace on top of a 200 m rock, with ancient frescoes and the giant Lion Gate.','Climb at 7 am, before the heat and the crowds.'],
 ['nature','Ella','Tea country, the Nine Arch Bridge and the famous blue train ride from Kandy.','Reserve train seats early — they sell out.'],
 ['nature','Yala National Park','One of the best places on earth to see a leopard in the wild, plus elephants and sloth bears.','Take the dawn safari, when animals are most active.'],
 ['beach','Galle & Mirissa','A Dutch fort town, then whale watching and palm-lined beaches down the south coast.','South-coast whale season runs roughly Nov–Apr.']]},
{id:'mv',iso:'462',name:'Maldives',ll:[73.5,3.6],area:'Indian Ocean',reg:'south',z:2.6,fly:'≈ 1h 20m direct',cur:'MVR / USD',best:[1,2,3,4,11,12],bn:'Nov–Apr dry season',ideal:['Honeymoon','Snorkelling','Luxury'],
 tag:'Overwater villas and the clearest reefs in the Indian Ocean — just 80 minutes from Colombo.',
 p:[['beach','North & South Malé resorts','Resorts a short speedboat ride from the airport, so you spend less time and money on transfers.','Under 4 nights? Choose a speedboat resort.'],
 ['adventure','Baa Atoll','A UNESCO biosphere where hundreds of manta rays gather at Hanifaru Bay.','Manta season peaks around Jun–Nov.'],
 ['beach','Maafushi local island','Guesthouses and white beaches at a fraction of resort prices.','Local islands are alcohol-free; use the marked bikini beach.'],
 ['adventure','South Ari Atoll','Whale shark sightings all year round on the reef edge.','Go with a licensed operator who follows distance rules.']]},
{id:'in',iso:'356',name:'India',ll:[78.9,21.5],area:'Asia',reg:'south',z:1.6,fly:'≈ 1h 30m to Chennai',cur:'INR',best:[1,2,3,10,11,12],bn:'Oct–Mar',ideal:['Pilgrimage','Culture','Food','Shopping'],
 tag:'A short hop to very different worlds — palaces, backwaters, beaches and the Himalaya.',
 p:[['culture','Taj Mahal, Agra','Perhaps the most beautiful building ever made — best seen as the sun rises.','Closed on Fridays.'],
 ['culture','Jaipur','The Pink City: Amber Fort, palaces and bazaars full of block-printed textiles.','Pair it with Delhi and Agra on the Golden Triangle.'],
 ['nature','Kerala backwaters','Slow days on a houseboat drifting through palm-lined canals.','One night on a houseboat from Alleppey is plenty.'],
 ['culture','Bodh Gaya','Where the Buddha attained enlightenment under the Bodhi tree — a key pilgrimage site.','Go Oct–Mar; summers are very hot.']]},
{id:'np',iso:'524',name:'Nepal',ll:[84.1,28.3],area:'Asia',reg:'south',z:2.2,fly:'≈ 4h direct',cur:'NPR',best:[3,4,10,11],bn:'Oct–Nov & Mar–Apr',ideal:['Trekking','Pilgrimage','Mountains'],
 tag:'Ancient temples, mountain flights and the trails to Everest and Annapurna.',
 p:[['culture','Kathmandu Valley','Three royal Durbar Squares full of carved wooden temples and palaces.','See Kathmandu, Patan and Bhaktapur in one long day.'],
 ['culture','Lumbini','The birthplace of the Buddha, with monasteries built by countries from around the world.','A meaningful pilgrimage — go in the cooler months.'],
 ['adventure','Pokhara & Annapurna','A lakeside town with sunrise views of 8,000 m peaks and short treks.','Poon Hill is a 4–5 day trek suitable for beginners.'],
 ['adventure','Everest mountain flight','Fly past the world\'s highest peak in one hour — no two-week trek needed.','Morning flights have the clearest skies.']]},
{id:'th',iso:'764',name:'Thailand',ll:[100.9,14.5],area:'Asia',reg:'asia',z:2,fly:'≈ 3h 20m direct',cur:'THB',best:[1,2,3,11,12],bn:'Nov–Mar cool & dry',ideal:['Beaches','Food','Nightlife','Value'],
 tag:'Street food, islands and golden temples — with great value at every budget.',
 p:[['city','Bangkok','The Grand Palace, Wat Arun, rooftop bars and some of the best street food in Asia.','Use the river boats to beat the traffic.'],
 ['beach','Phuket & Phi Phi','Long sandy beaches and boat trips to dramatic limestone islands.','Book Phi Phi day trips the day before — they leave early.'],
 ['culture','Chiang Mai','Old-city temples, night markets and ethical elephant sanctuaries.','Choose a sanctuary with no elephant riding.'],
 ['beach','Krabi & Railay','Towering cliffs and calmer beaches than Phuket.','Railay can only be reached by boat.']]},
{id:'sg',iso:'702',name:'Singapore',ll:[103.82,1.35],area:'Asia',reg:'asia',z:2.8,fly:'≈ 3h 45m direct',cur:'SGD',best:[2,3,4,5,6,7,8],bn:'All year · Feb–Aug drier',ideal:['Families','First trip abroad','Shopping'],
 tag:'Clean, safe and easy — the perfect first trip abroad or family holiday.',
 p:[['city','Marina Bay & Gardens by the Bay','A futuristic skyline and a free light show among the Supertrees every night.','Shows usually start at 7:45 pm and 8:45 pm.'],
 ['adventure','Sentosa Island','Universal Studios, beaches, an aquarium and cable cars on one island.','Buy combo tickets online before you go.'],
 ['food','Hawker centres','Michelin-listed dishes for a few dollars at Maxwell and Lau Pa Sat.','A tissue packet on a seat means it\'s taken.'],
 ['culture','Chinatown & Little India','Temples, shophouses and markets, all within walking distance.','Little India is great for last-minute shopping.']]},
{id:'my',iso:'458',name:'Malaysia',ll:[102,4.2],area:'Asia',reg:'asia',z:2.2,fly:'≈ 3h 30m direct',cur:'MYR',best:[1,2,3,4,6,7,8],bn:'Dec–Aug on the west coast',ideal:['Families','Food','Shopping','Value'],
 tag:'Twin Towers, rainforest islands and food from three cultures.',
 p:[['city','Kuala Lumpur','The Petronas Towers, Batu Caves and huge shopping malls.','Book the Petronas skybridge online in advance.'],
 ['beach','Langkawi','A duty-free island with a sky bridge, beaches and mangrove tours.','A great beach add-on after Kuala Lumpur.'],
 ['food','Penang','George Town\'s street art and some of Asia\'s best street food.','Try char kway teow and assam laksa.'],
 ['nature','Cameron Highlands','Cool tea plantations and strawberry farms — a lot like Nuwara Eliya.','Pack a light jacket for the evenings.']]},
{id:'id',iso:'360',name:'Indonesia',ll:[115.2,-8.4],area:'Asia',reg:'asia',z:2,fly:'≈ 7h with one stop',cur:'IDR',best:[4,5,6,7,8,9,10],bn:'Apr–Oct dry season',ideal:['Honeymoon','Culture','Surfing'],
 tag:'Bali\'s temples and rice terraces — plus volcanoes and real dragons beyond.',
 p:[['culture','Ubud, Bali','Rice terraces, temples and yoga in Bali\'s green heart.','Visit the Tegallalang terraces before 8 am.'],
 ['culture','Uluwatu Temple','A clifftop temple with a fire dance at sunset.','Keep sunglasses and phones away from the monkeys.'],
 ['nature','Mount Batur sunrise','A pre-dawn hike up an active volcano to watch the sun rise.','Start around 4 am with a local guide.'],
 ['adventure','Komodo National Park','Real Komodo dragons, pink beaches and superb snorkelling.','Fly to Labuan Bajo and take a boat trip.']]},
{id:'vn',iso:'704',name:'Vietnam',ll:[106.3,16],area:'Asia',reg:'asia',z:1.9,fly:'≈ 6h with one stop',cur:'VND',best:[2,3,4],bn:'Feb–Apr is good nationwide',ideal:['Food','Culture','Value'],
 tag:'Limestone bays, lantern-lit towns and some of the best food for the price anywhere.',
 p:[['nature','Ha Long Bay','Thousands of limestone islands — stay a night on a cruise.','Nearby Lan Ha Bay is quieter.'],
 ['culture','Hoi An','A lantern-lit old town where tailors make clothes in a day.','Go on the monthly full-moon lantern night.'],
 ['city','Hanoi','Old Quarter streets, egg coffee and street-food tours.','Cross the road slowly and steadily — bikes flow around you.'],
 ['city','Ho Chi Minh City','Busy and modern, close to the Mekong Delta and Cu Chi tunnels.','Take a day trip on the Mekong.']]},
{id:'jp',iso:'392',name:'Japan',ll:[138.3,36.2],area:'Asia',reg:'asia',z:1.9,fly:'≈ 9h direct to Tokyo',cur:'JPY',best:[3,4,5,10,11],bn:'Mar–May blossoms · Oct–Nov colours',ideal:['Culture','Food','Families','Students'],
 tag:'Neon cities, quiet temples and the best trains in the world.',
 p:[['city','Tokyo','Shibuya Crossing, Asakusa temples and endless food.','Add a Suica card to your phone for all trains.'],
 ['culture','Kyoto','Over 1,000 temples, bamboo forests and geisha districts.','Fushimi Inari before 8 am is magical.'],
 ['nature','Mount Fuji & Hakone','Lake views of Fuji and traditional hot-spring inns.','Fuji is clearest on winter mornings.'],
 ['food','Osaka & Nara','Japan\'s street-food capital, and friendly deer in Nara Park.','Nara is an easy half-day trip.']]},
{id:'kr',iso:'410',name:'South Korea',ll:[127.8,36.4],area:'Asia',reg:'asia',z:2.2,fly:'≈ 10h with one stop',cur:'KRW',best:[4,5,9,10,11],bn:'Apr–May & Sep–Nov',ideal:['K-culture','Food','Shopping','Students'],
 tag:'K-culture, royal palaces, mountains and the volcanic island of Jeju.',
 p:[['city','Seoul','Palaces, Myeongdong beauty shops and night markets.','Wear a hanbok and palace entry is free.'],
 ['beach','Jeju Island','A volcanic coast, waterfalls and Hallasan mountain.','Hire a car or join a tour — the island is spread out.'],
 ['city','Busan','Beaches, seafood markets and colourful Gamcheon village.','Take the KTX fast train from Seoul — about 2.5 hours.'],
 ['culture','The DMZ','Look across into North Korea from the border observatories.','Bring your passport — it\'s checked on the tour.']]},
{id:'ae',iso:'784',name:'UAE',ll:[54.6,24.2],area:'Middle East',reg:'gulf',z:2.6,fly:'≈ 4h 30m direct',cur:'AED',best:[1,2,3,11,12],bn:'Nov–Mar',ideal:['Shopping','Families','Luxury','Stopovers'],
 tag:'Desert safaris, record-breaking towers and giant malls — four and a half hours away.',
 p:[['city','Burj Khalifa & Downtown Dubai','The world\'s tallest building and the Dubai Fountain show.','Book a sunset slot for the observation deck.'],
 ['adventure','Desert safari','Dune bashing, camel rides and a barbecue camp under the stars.','Afternoon safaris include sunset and dinner.'],
 ['culture','Sheikh Zayed Grand Mosque','A vast white-marble mosque in Abu Dhabi, free to visit.','Cover arms and legs; women need a headscarf.'],
 ['adventure','Yas Island','Ferrari World, Warner Bros. World and big water parks.','Multi-park passes save a lot.']]},
{id:'tr',iso:'792',name:'Türkiye',ll:[35.2,39],area:'Europe',reg:'gulf',z:2,fly:'≈ 10h with one stop',cur:'TRY',best:[4,5,6,9,10],bn:'Apr–Jun & Sep–Oct',ideal:['History','Food','Honeymoon'],
 tag:'Where Europe meets Asia — bazaars, hot-air balloons and a turquoise coast.',
 p:[['city','Istanbul','Hagia Sophia, the Blue Mosque and the Grand Bazaar.','Take a Bosphorus ferry at sunset.'],
 ['adventure','Cappadocia','Sunrise hot-air balloon flights over fairy chimneys.','Stay 2–3 nights in case wind cancels a flight.'],
 ['nature','Pamukkale','White travertine terraces with warm, shallow pools.','Shoes are not allowed on the terraces.'],
 ['beach','Antalya','Beaches, a pretty old town and Roman ruins.','Visit in May or Sep to dodge the summer peak.']]},
{id:'gb',iso:'826',name:'United Kingdom',ll:[-1.8,52.8],area:'Europe',reg:'gulf',z:2.4,fly:'≈ 11h 30m direct',cur:'GBP',best:[5,6,7,8,9],bn:'May–Sep',ideal:['Students','History','Football','Family visits'],
 tag:'History, football and green countryside — with direct flights from Colombo.',
 p:[['city','London','Big Ben, free museums and West End shows.','Tap a contactless card on the Tube — daily fares are capped.'],
 ['culture','Edinburgh','A castle on a volcano, the Royal Mile and August festivals.','Book August stays months ahead.'],
 ['nature','Lake District','Lakes, hills and stone villages made for walking.','Base yourself in Windermere or Keswick.'],
 ['culture','Oxford & Cambridge','Historic university towns — ideal for students planning to study in the UK.','Both are easy day trips by train from London.']]},
{id:'fr',iso:'250',name:'France',ll:[2.4,46.6],area:'Europe',reg:'gulf',z:2.2,fly:'≈ 13h with one stop',cur:'EUR',best:[4,5,6,9,10],bn:'Apr–Jun & Sep–Oct',ideal:['Honeymoon','Art','Food'],
 tag:'Paris, palaces and the sunny Riviera.',
 p:[['city','Paris','The Eiffel Tower, the Louvre and a café on every corner.','Book Louvre and Eiffel tickets online for a time slot.'],
 ['culture','Palace of Versailles','The golden palace and gardens of Louis XIV.','Closed on Mondays.'],
 ['beach','French Riviera','Nice, Cannes and Monaco along the blue coast.','Trains link the towns cheaply.'],
 ['culture','Mont-Saint-Michel','A medieval abbey on a tidal island.','Check tide times — the bay floods fast.']]},
{id:'it',iso:'380',name:'Italy',ll:[12.6,42.6],area:'Europe',reg:'gulf',z:2.2,fly:'≈ 13h with one stop',cur:'EUR',best:[4,5,6,9,10],bn:'Apr–Jun & Sep–Oct',ideal:['Honeymoon','History','Food'],
 tag:'Ancient Rome, canals, Renaissance art and cliffside villages.',
 p:[['culture','Rome','The Colosseum, the Vatican and the Trevi Fountain.','Book Colosseum tickets well ahead.'],
 ['culture','Venice','Canals, gondolas and St Mark\'s Square.','Day-trippers pay an access fee on peak days.'],
 ['culture','Florence & Tuscany','Renaissance art, then vineyards and hill towns.','Book the Uffizi Gallery in advance.'],
 ['beach','Amalfi Coast','Pastel villages stacked above a turquoise sea.','Use ferries — the coast road jams in summer.']]},
{id:'ch',iso:'756',name:'Switzerland',ll:[8.2,46.8],area:'Europe',reg:'gulf',z:2.8,fly:'≈ 13h with one stop',cur:'CHF',best:[1,2,3,6,7,8,9,12],bn:'Jun–Sep summer · Dec–Mar snow',ideal:['Honeymoon','Snow','Scenic trains'],
 tag:'Snow peaks, glacier trains and storybook lakes.',
 p:[['nature','Jungfraujoch','The "Top of Europe" railway to a glacier at 3,454 m.','Check the live webcam for clouds before you go.'],
 ['nature','Zermatt & Matterhorn','A car-free village beneath the world\'s most famous peak.','Sunrise turns the Matterhorn gold.'],
 ['nature','Lucerne & Mount Titlis','Chapel Bridge, lake cruises and snow all year on Titlis.','Great for a first time in the snow.'],
 ['adventure','Glacier Express','A slow, panoramic train across the Alps.','A Swiss Travel Pass covers most trains.']]},
{id:'au',iso:'036',name:'Australia',ll:[134,-25.5],area:'Oceania',reg:'aus',z:1.4,fly:'≈ 10h 30m direct to Melbourne',cur:'AUD',best:[3,4,5,9,10,11],bn:'Sep–Nov & Mar–May',ideal:['Students','Family visits','Nature'],
 tag:'Harbour cities, wild coast and the Great Barrier Reef.',
 p:[['city','Sydney','The Opera House, Harbour Bridge and Bondi Beach.','Take the ferry to Manly for great harbour views.'],
 ['city','Melbourne','Coffee, laneways and sport — with a large Sri Lankan community.','Weather changes fast — pack layers.'],
 ['nature','Great Ocean Road','A coastal drive to the Twelve Apostles rock stacks.','Allow two days rather than one.'],
 ['adventure','Great Barrier Reef','Snorkel or dive the world\'s largest reef from Cairns.','Jun–Oct is the dry season up north.']]}
];
const byIso=Object.fromEntries(C.map(c=>[c.iso,c]));
const VID={mv:'maldives',ae:'dubai',jp:'tokyo',gb:'london',sg:'singapore',lk:'sigiriya'};
const LKS=[
 {id:'sigiriya',name:'Sigiriya',parent:'lk',ll:[80.76,7.957],area:'Asia',video:'sigiriya',fly:'In Sri Lanka',best:[1,2,3,4,5,6,7,8,9],bn:'Jan–Sep',tag:'Lion Rock, cave temples and the Cultural Triangle.',builder:'sigiriya'},
 {id:'ella',name:'Ella',parent:'lk',ll:[81.05,6.87],area:'Asia',video:'ella',fly:'In Sri Lanka',best:[1,2,3,4,12],bn:'Dec–Apr',tag:'Tea hills, Nine Arch Bridge and the famous train ride.',builder:'ella'},
 {id:'galle',name:'South Coast',parent:'lk',ll:[80.22,6.03],area:'Asia',video:'galle',fly:'In Sri Lanka',best:[1,2,3,4,11,12],bn:'Nov–Apr',tag:'Galle Fort, stilt fishermen and palm beaches.',builder:'galle'}
];
const DEST=[...C,...LKS];
const ORIG=[['CMB','Colombo',[79.88,7.18]],['MAA','Chennai',[80.27,12.99]],['BOM','Mumbai',[72.87,19.09]],['DEL','Delhi',[77.10,28.56]],['MLE','Malé',[73.53,4.19]],['DXB','Dubai',[55.36,25.25]],['DOH','Doha',[51.61,25.27]],['SIN','Singapore',[103.99,1.36]],['KUL','Kuala Lumpur',[101.71,2.75]],['BKK','Bangkok',[100.75,13.69]],['NRT','Tokyo',[140.39,35.77]],['ICN','Seoul',[126.45,37.46]],['LHR','London',[-0.45,51.47]],['MEL','Melbourne',[144.84,-37.67]],['SYD','Sydney',[151.18,-33.94]]];
const R={from:'CMB',stops:[],ret:true};
try{const v=JSON.parse(localStorage.getItem('deimaRoute')||'null');if(v&&Array.isArray(v.stops)){R.from=ORIG.some(o=>o[0]===v.from)?v.from:'CMB';R.stops=v.stops.filter(id=>DEST.some(d=>d.id===id)).slice(0,6);R.ret=v.ret!==false}}catch(e){}
const saveR=()=>{try{localStorage.setItem('deimaRoute',JSON.stringify(R))}catch(e){}};
const origin=()=>ORIG.find(o=>o[0]===R.from);
const HOME={home:1,name:'Colombo',ll:CMB};

/* ---------- globe ---------- */
const G={k:1,base:280,idle:0,drag:false,anim:false,inView:false,sel:null};
let proj,path,svg,sel={};
const W=600;
function initGlobe(){
 const wrap=$('#globeWrap');
 if(!window.d3||!window.topojson){wrap.innerHTML='<p class="lead">The globe could not load. Pick a country from the list instead.</p>';return}
 svg=d3.select('#globe');
 proj=d3.geoOrthographic().translate([W/2,W/2]).scale(G.base).clipAngle(90).rotate([-80,-12,0]);
 path=d3.geoPath(proj);
 const defs=svg.append('defs');
 const og=defs.append('radialGradient').attr('id','gOcean').attr('cx','38%').attr('cy','32%');
 og.append('stop').attr('offset','0').attr('stop-color','#2a4a8a');og.append('stop').attr('offset','.7').attr('stop-color','#14275a');og.append('stop').attr('offset','1').attr('stop-color','#0b1638');
 const sh=defs.append('radialGradient').attr('id','gShine').attr('cx','35%').attr('cy','28%');
 sh.append('stop').attr('offset','0').attr('stop-color','#fff').attr('stop-opacity','.18');sh.append('stop').attr('offset','.5').attr('stop-color','#fff').attr('stop-opacity','0');sh.append('stop').attr('offset','1').attr('stop-color','#000').attr('stop-opacity','.35');
 sel.glow=svg.append('circle').attr('class','g-glow').attr('cx',W/2).attr('cy',W/2);
 sel.ocean=svg.append('circle').attr('class','g-ocean').attr('cx',W/2).attr('cy',W/2);
 sel.grat=svg.append('path').datum(d3.geoGraticule10()).attr('class','g-grat');
 sel.land=svg.append('g');
 sel.arc=svg.append('path').attr('class','g-arc');
 sel.shine=svg.append('circle').attr('class','g-shine').attr('cx',W/2).attr('cy',W/2);
 sel.marks=svg.append('g');
 const mk=sel.marks.selectAll('g').data([HOME,...DEST.filter(c=>c.id!=='lk')]).join('g')
  .attr('class',d=>d.home?'mk home':'mk').attr('tabindex',d=>d.home?null:0).attr('role',d=>d.home?null:'button').attr('aria-label',d=>d.home?null:`Open ${d.name} guide`);
 mk.append('circle').attr('class','hit').attr('r',16);
 mk.filter(d=>!d.home).append('circle').attr('class','pulse').attr('r',6);
 mk.append('circle').attr('class','dot').attr('r',d=>d.home?6:5);
 mk.append('text').attr('x',10).attr('y',4).text(d=>d.name);
 mk.filter(d=>!d.home).on('click',(e,d)=>{e.stopPropagation();pick(d)}).on('keydown',(e,d)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(d)}});
 sel.mk=mk;
 svg.call(d3.drag().clickDistance(5)
  .on('start',()=>{G.drag=true;hideTip()})
  .on('drag',e=>{const r=proj.rotate(),k=70/proj.scale();proj.rotate([r[0]+e.dx*k,Math.max(-70,Math.min(70,r[1]-e.dy*k)),0]);draw()})
  .on('end',()=>{G.drag=false;G.idle=Date.now()+5000}));
 fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(r=>r.json()).then(t=>{
  const feats=topojson.feature(t,t.objects.countries).features;
  sel.c=sel.land.selectAll('path').data(feats).join('path').attr('class',d=>byIso[d.id]?'g-c feat':'g-c')
   .on('click',(e,d)=>{const c=byIso[d.id];if(c)pick(c);else toast(d.properties.name)})
   .on('mousemove',(e,d)=>{if(G.drag)return;const c=byIso[d.id];showTip(e,c?c.name:d.properties.name,c?'Tap for the Deima guide':'')})
   .on('mouseleave',hideTip);
  draw();
 }).catch(()=>{});
 draw();
 new IntersectionObserver(es=>{G.inView=es[0].isIntersecting},{threshold:.1}).observe(wrap);
 let last=0;
 d3.timer(t=>{const dt=Math.min(64,t-last);last=t;
  if(RM||!G.inView||G.drag||G.anim||!$('#xm').hidden||Date.now()<G.idle)return;
  const r=proj.rotate();proj.rotate([r[0]+dt*.007,r[1]+(-12-r[1])*.01,0]);draw()});
 $('#gIn').onclick=()=>zoomTo(Math.min(3,G.k*1.35));
 $('#gOut').onclick=()=>zoomTo(Math.max(.8,G.k/1.35));
 $('#gReset').onclick=()=>{fly({ll:origin()[2],z:1},null)};
}
function draw(){
 if(!proj)return;
 const r=proj.rotate(),ctr=[-r[0],-r[1]],s=proj.scale();
 sel.ocean.attr('r',s);sel.shine.attr('r',s);sel.glow.attr('r',s+4);
 sel.grat.attr('d',path);
 if(sel.c)sel.c.attr('d',path).classed('sel',d=>G.sel&&d.id===G.sel.iso);
 const rc=routeCoords();sel.arc.attr('d',rc?path({type:'LineString',coordinates:rc}):null);
 sel.mk.each(function(d){const vis=d3.geoDistance(d.ll,ctr)<1.5;this.style.display=vis?'':'none';if(vis){const p=proj(d.ll);this.setAttribute('transform',`translate(${p[0]},${p[1]})`)}this.classList.toggle('sel',G.sel===d)});
}
function routeCoords(){const o=origin()[2];if(R.stops.length){const c=[o,...R.stops.map(id=>DEST.find(d=>d.id===id).ll)];if(R.ret)c.push(o);return c}if(G.sel&&!(G.sel.id==='lk'&&R.from==='CMB'))return [o,G.sel.ll];return null}
function syncMarks(){if(!sel.mk)return;const o=origin();HOME.ll=o[2];HOME.name=o[1];sel.mk.filter(d=>d.home).select('text').text(o[1]);sel.mk.filter(d=>!d.home).each(function(d){const n=R.stops.indexOf(d.id);this.classList.toggle('inTrip',n>=0);d3.select(this).select('text').text(n>=0?`${n+1}. ${d.name}`:d.name)});draw()}
function zoomTo(k){const k0=G.k,t0=performance.now(),dur=RM?1:450;G.idle=Date.now()+6000;
 const st=now=>{const e=d3.easeCubicOut(Math.min(1,(now-t0)/dur));G.k=k0+(k-k0)*e;proj.scale(G.base*G.k);draw();if(e<1)requestAnimationFrame(st)};requestAnimationFrame(st)}
function fly(c,cb){
 if(!proj){cb&&cb();return}
 G.idle=Date.now()+9000;G.anim=true;
 const r0=proj.rotate(),tl=-c.ll[0],tp=Math.max(-60,Math.min(60,-c.ll[1])),dl=((tl-r0[0])%360+540)%360-180,k0=G.k,k1=c.z||1.8;
 const t0=performance.now(),dur=RM?1:1200;
 const st=now=>{const k=Math.min(1,(now-t0)/dur),e=d3.easeCubicInOut(k);
  proj.rotate([r0[0]+dl*e,r0[1]+(tp-r0[1])*e,0]);G.k=k0+(k1-k0)*e;proj.scale(G.base*G.k);draw();
  if(k<1)requestAnimationFrame(st);else{G.anim=false;cb&&cb()}};
 requestAnimationFrame(st);
}
function pick(c){G.sel=c;setChip();hideTip();$('#gtoast').hidden=true;showMonitor(c);fly(c)}
function showTip(e,name,sub){const t=$('#gtip'),b=$('#globeWrap').getBoundingClientRect();t.innerHTML=`${name}${sub?`<small>${sub}</small>`:''}`;t.style.left=(e.clientX-b.left)+'px';t.style.top=(e.clientY-b.top)+'px';t.hidden=false}
function hideTip(){const t=$('#gtip');if(t)t.hidden=true}
function toast(name){if(!name)return;G.idle=Date.now()+8000;const t=$('#gtoast');
 t.innerHTML=`<b>${name}</b>We don't have a guide for ${name} on the globe yet — but our planners can still put a trip together.<div class="row"><button class="btn" type="button" data-q>Ask about ${name}</button><button class="x" type="button">Close</button></div>`;
 t.hidden=false;t.querySelector('[data-q]').onclick=()=>{t.hidden=true;quote(name)};t.querySelector('.x').onclick=()=>t.hidden=true}
function quote(to){if(window.DeimaQQ)window.DeimaQQ(to);else location.hash='#plan'}

/* search, popular, monitor, route tray */
const tl=x=>(window.DeimaLang&&window.DeimaLang.t)?window.DeimaLang.t(x):x;
const IDX=DEST.flatMap(d=>[{label:d.name,sub:d.parent?'Sri Lanka':d.area,d},...(d.p||[]).map(p=>({label:p[1],sub:d.name,d}))]);
function buildSearch(){
 const inp=$('#dSearch'),ul=$('#dResults');let hits=[],hi=-1;
 const close=()=>{ul.hidden=true;inp.setAttribute('aria-expanded','false');hi=-1};
 const go=h=>{close();inp.value='';pick(h.d);if(matchMedia('(max-width:980px)').matches)$('#monitor').scrollIntoView({block:'nearest',behavior:RM?'auto':'smooth'})};
 const paint=()=>{ul.innerHTML=hits.map((h,k)=>`<li role="option" id="dr${k}" aria-selected="${k===hi}" data-k="${k}"><b>${h.label}</b><small>${h.sub}</small>${(h.d.video||VID[h.d.id])?'<i>▶</i>':''}</li>`).join('')||'<li class="none">No match yet — ask us anyway</li>';ul.hidden=false;inp.setAttribute('aria-expanded','true');inp.setAttribute('aria-activedescendant',hi>=0?'dr'+hi:'');$$('#dResults li[data-k]').forEach(li=>li.onmousedown=e=>{e.preventDefault();go(hits[+li.dataset.k])})};
 inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase();if(!q){close();return}hits=IDX.filter(h=>h.label.toLowerCase().includes(q)||tl(h.label).toLowerCase().includes(q)||tl(h.d.name).toLowerCase().includes(q)).sort((a,b)=>(a.label.toLowerCase().startsWith(q)?0:1)-(b.label.toLowerCase().startsWith(q)?0:1)).slice(0,8);hi=hits.length?0:-1;paint()});
 inp.addEventListener('keydown',e=>{if(ul.hidden)return;if(e.key==='ArrowDown'){e.preventDefault();hi=Math.min(hits.length-1,hi+1);paint()}else if(e.key==='ArrowUp'){e.preventDefault();hi=Math.max(0,hi-1);paint()}else if(e.key==='Enter'){e.preventDefault();if(hits[hi])go(hits[hi]);else{close();quote(inp.value.trim())}}else if(e.key==='Escape')close()});
 inp.addEventListener('blur',()=>setTimeout(close,120));
 const POP=['jp','th','mv','ae','sigiriya','kr','sg'];
 $('#popular').innerHTML=POP.map(id=>{const d=DEST.find(x=>x.id===id);return `<button type="button" class="chip" data-c="${id}"><i></i>${d.name}</button>`}).join('');
 $$('#popular .chip').forEach(b=>b.onclick=()=>pick(DEST.find(x=>x.id===b.dataset.c)));
}
function setChip(){$$('#popular .chip').forEach(b=>b.setAttribute('aria-pressed',!!G.sel&&b.dataset.c===G.sel.id))}
function showMonitor(c){
 const v=c.video||VID[c.id],g=AREA[c.area],inT=R.stops.includes(c.id);
 const places=c.p?c.p.slice(0,3).map(x=>x[1]):[];
 $('#monitor').innerHTML=`<div class="mScreen" style="--a:${g[0]};--b:${g[1]}">
  ${v?`<video muted loop playsinline autoplay preload="auto" poster="videos/${v}.jpg" aria-hidden="true"><source src="videos/${v}.mp4" type="video/mp4"></video>`:`<div class="mArt">${ico(c.p?c.p[0][0]:'nature')}</div>`}
  <div class="mTop"><span class="mTag">${c.parent?'Sri Lanka':c.area}</span><span class="mFly">${ico('plane')}${flyFrom(c)}</span></div>
  <div class="mInfo"><h3>${c.name}</h3><p>${c.tag}</p>
   <div class="mMonths" aria-label="Best months">${MON.map((m,j)=>`<i class="${c.best.includes(j+1)?'on':''}"><b>${m[0]}</b></i>`).join('')}</div>
   ${places.length?`<div class="mPlaces">${places.map(x=>`<span>${x}</span>`).join('')}</div>`:''}</div></div>
 <div class="mActs"><button type="button" class="btn sm${inT?' line':''}" data-add>${inT?'✓ In my route':'+ Add to route'}</button>${c.p?'<button type="button" class="btn line sm" data-guide>Full guide</button>':''}<button type="button" class="btn line sm" data-mq>${c.builder||c.id==='lk'?'Build this trip':'Get a quote'}</button></div>`;
 const vv=$('#monitor video');if(vv){vv.play().catch(()=>{});vv.querySelector('source').addEventListener('error',()=>vv.remove())}
 $('#monitor [data-add]').onclick=()=>{toggleStop(c);showMonitor(c)};
 const gd=$('#monitor [data-guide]');if(gd)gd.onclick=()=>openCountry(c);
 $('#monitor [data-mq]').onclick=()=>{if(c.builder&&window.DeimaTrip)window.DeimaTrip.open({place:c.builder});else if(c.id==='lk'&&window.DeimaTrip)window.DeimaTrip.open({});else quote(c.name)};
}
function flyFrom(c){if(R.from==='CMB'||c.parent)return c.fly;const o=origin(),km=d3.geoDistance(o[2],c.ll)*6371;if(km<150)return o[1];const h=Math.round((km/780+.5)*2)/2;return `≈ ${h}h from ${o[1]}`}
function toggleStop(c){const k=R.stops.indexOf(c.id);if(k>=0)R.stops.splice(k,1);else{if(R.stops.length>=6){R.stops.shift()}R.stops.push(c.id)}saveR();renderTray();syncMarks()}
function routeKm(){const rc=routeCoords();if(!rc||!R.stops.length)return 0;let k=0;for(let i=1;i<rc.length;i++)k+=d3.geoDistance(rc[i-1],rc[i])*6371;return Math.round(k/100)*100}
function routeNames(){return R.stops.map(id=>DEST.find(d=>d.id===id).name)}
function renderTray(){
 const o=origin(),km=window.d3?routeKm():0,legs=R.stops.length+(R.ret&&R.stops.length?1:0),hrs=km?Math.round(km/780+legs*.5):0;
 $('#tray').innerHTML=`<div class="trayHead"><b>My route</b>${km?`<span class="trayInfo">≈ ${km.toLocaleString('en')} km · ~${hrs} h flying</span>`:'<span class="trayInfo">Multi-city</span>'}</div>
 <div class="rWrap"><label class="rFrom"><span class="rDot o"></span><span class="rL">From</span><select id="rOrig" aria-label="Departure city">${ORIG.map(x=>`<option value="${x[0]}"${x[0]===R.from?' selected':''}>${x[1]} (${x[0]})</option>`).join('')}</select></label>
 ${R.stops.length?`<ol class="rStops">${R.stops.map((id,k)=>{const d=DEST.find(x=>x.id===id);return `<li><span class="rDot">${k+1}</span><button type="button" class="rName" data-show="${id}">${d.name}</button><span class="rBtns"><button type="button" data-mv="${k}" data-d="-1" aria-label="Move ${d.name} earlier"${k?'':' disabled'}>↑</button><button type="button" data-mv="${k}" data-d="1" aria-label="Move ${d.name} later"${k<R.stops.length-1?'':' disabled'}>↓</button><button type="button" data-rm="${k}" aria-label="Remove ${d.name}">×</button></span></li>`}).join('')}</ol>`:`<p class="rEmpty">Search or tap a country, then <b>+ Add to route</b>. Up to 6 stops.</p>`}
 <label class="rRet"><input type="checkbox" id="rRet"${R.ret?' checked':''}><span>Return to ${o[1]}</span></label></div>
 ${R.stops.length?`<div class="trayActs"><button type="button" class="btn sm" data-rq>Quote this route</button><button type="button" class="btn line sm" data-rc>Custom quote</button><button type="button" class="rClear" data-rx>Clear</button></div>`:''}`;
 $('#rOrig').onchange=e=>{R.from=e.target.value;saveR();renderTray();syncMarks();if(G.sel)showMonitor(G.sel);fly({ll:origin()[2],z:G.k})};
 $('#rRet').onchange=e=>{R.ret=e.target.checked;saveR();renderTray();syncMarks()};
 $$('#tray [data-mv]').forEach(b=>b.onclick=()=>{const k=+b.dataset.mv,n=k+ +b.dataset.d;[R.stops[k],R.stops[n]]=[R.stops[n],R.stops[k]];saveR();renderTray();syncMarks()});
 $$('#tray [data-rm]').forEach(b=>b.onclick=()=>{const id=R.stops[+b.dataset.rm];R.stops.splice(+b.dataset.rm,1);saveR();renderTray();syncMarks();if(G.sel&&G.sel.id===id)showMonitor(G.sel)});
 $$('#tray [data-show]').forEach(b=>b.onclick=()=>pick(DEST.find(d=>d.id===b.dataset.show)));
 const rq=$('#tray [data-rq]');if(rq)rq.onclick=()=>{const t=`${routeNames().join(' → ')}${R.ret?' → '+o[1]:''} (multi-city)`;quote(t);const f=$('#f-from');if(f)f.value=`${o[1]} (${o[0]})`};
 const rc=$('#tray [data-rc]');if(rc)rc.onclick=()=>{$('#cqTo').value=routeNames().join(', ');$('#cq').scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});setTimeout(()=>$('#cqTo').focus({preventScroll:true}),500)};
 const rx=$('#tray [data-rx]');if(rx)rx.onclick=()=>{R.stops=[];saveR();renderTray();syncMarks();if(G.sel)showMonitor(G.sel)};
}

/* country modal */
let lastFocus=null;
function openCountry(c){
 const m=$('#xm'),g=AREA[c.area],i=C.indexOf(c);
 const months=c.best.map(n=>MON[n-1]);
 m.innerHTML=`<div class="xm-box" style="--a:${g[0]};--b:${g[1]}">
 <div class="xm-hero"><div class="xm-nav"><button type="button" data-nav="-1" aria-label="Previous country">‹</button><button type="button" data-nav="1" aria-label="Next country">›</button><button type="button" data-x aria-label="Close">×</button></div>
  <p class="kick">${c.area} · Deima destination guide</p><h3 id="xmT">${c.name}</h3><p class="xm-tag">${c.tag}</p>
  <div class="facts"><span>${ico('plane')}${c.fly}${c.id==='lk'?'':' from Colombo'}</span><span>${ico('cash')}${c.cur}</span><span>${ico('sun')}${c.bn}</span></div></div>
 <div class="xm-body">
  <p class="mlabel"><span><b>Best months to go</b></span><span>${c.bn}</span></p>
  <div class="months" role="img" aria-label="Best months: ${months.join(', ')}">${MON.map((x,j)=>`<i class="${c.best.includes(j+1)?'on':''}" style="--d:${j*35}ms"><b>${x}</b></i>`).join('')}</div>
  <p class="ideal">Great for ${c.ideal.map(x=>`<span>${x}</span>`).join('')}</p>
  <h4>Best places to visit — and why</h4>
  <div class="places">${c.p.map((p,j)=>`<article class="place" style="--d:${j*90+150}ms"><div class="pl-ic">${ico(p[0])}</div><div><span class="pl-k">${p[0]}</span><h5>${p[1]}</h5><p class="why">${p[2]}</p></div></article>`).join('')}</div>
  ${c.reg?`<div class="carriers"><p class="mlabel"><span><b>Fly there with</b></span><span>Tap an airline to compare it and see seats</span></p><div class="carRow">${REG[c.reg].a.map(k=>`<button type="button" class="carChip" data-car="${k}" aria-label="${AIR[k].n}">${logo(k)}<span class="pill ${AIR[k].t}">${TYPE[AIR[k].t]}</span></button>`).join('')}</div></div>`:''}
  <div class="xm-cta"><button class="btn" type="button" data-plan>${c.id==='lk'?'Build my Sri Lanka trip':`Get a quote for ${c.name}`}</button>${c.reg?`<button class="btn line" type="button" data-air>Compare airlines for this trip →</button>`:''}</div>
 </div></div>`;
 if(m.hidden){lastFocus=document.activeElement;m.hidden=false;document.body.style.overflow='hidden'}
 m.querySelector('.xm-box').scrollTop=0;
 m.querySelector('[data-x]').onclick=closeCountry;
 m.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>{const n=C[(i+ +b.dataset.nav+C.length)%C.length];G.sel=n;setChip();fly(n);openCountry(n)});
 m.querySelector('[data-plan]').onclick=()=>{closeCountry();if(c.id==='lk'&&window.DeimaTrip)window.DeimaTrip.open({});else quote(c.name)};
 const a=m.querySelector('[data-air]');if(a)a.onclick=()=>{closeCountry();setRegion(c.reg);openStudio('airlines')};
 m.querySelectorAll('[data-car]').forEach(b=>b.onclick=()=>{closeCountry();focusAirline(c.reg,b.dataset.car)});
 m.querySelector('[data-x]').focus();
}
function closeCountry(){const m=$('#xm');if(m.hidden)return;m.hidden=true;document.body.style.overflow='';G.idle=Date.now()+4000;if(lastFocus)lastFocus.focus()}
$('#xm').addEventListener('click',e=>{if(e.target.id==='xm')closeCountry()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCountry()});

/* ---------- airlines ---------- */
const TYPE={full:'Full-service',hybrid:'Hybrid',budget:'Budget'};
const TINFO={
 full:{bag:'Usually included',seat:'Standard seats free at check-in',meal:'Meals & drinks included',ent:'Seat-back screens on most planes',lay:'wide'},
 hybrid:{bag:'Included on higher fares',seat:'Paid on the cheapest fares',meal:'On some fares',ent:'Varies by plane',lay:'narrowBiz'},
 budget:{bag:'Paid extra',seat:'Paid, or a random seat free',meal:'Buy on board',ent:'Bring your own',lay:'narrow'}
};
const AIR={
 UL:{n:'SriLankan Airlines',t:'full',hub:'Colombo (CMB)',s:[4,3,4,5],pro:['Non-stop from Colombo on many routes','Bag and meals included'],con:['Can cost more than Gulf airlines','Smaller network beyond its direct routes'],best:'Direct flights and families who want no connections'},
 EK:{n:'Emirates',t:'full',hub:'Dubai (DXB)',s:[5,3,5,5],pro:['Huge network to Europe, Africa and the Americas','Excellent seat-back entertainment'],con:['Usually a stop in Dubai','Peak-season fares rise fast'],best:'Long trips to Europe and beyond, in comfort'},
 QR:{n:'Qatar Airways',t:'full',hub:'Doha (DOH)',s:[5,3,5,5],pro:['Highly rated service','Calm, easy hub airport'],con:['Stop in Doha','Premium price on busy dates'],best:'Comfortable long-haul with one stop'},
 EY:{n:'Etihad Airways',t:'full',hub:'Abu Dhabi (AUH)',s:[4,4,4,5],pro:['Often good-value fares to Europe','Easy Abu Dhabi stopovers'],con:['Smaller network than Dubai or Doha'],best:'Value long-haul with full service'},
 TK:{n:'Turkish Airlines',t:'full',hub:'Istanbul (IST)',s:[4,4,5,5],pro:['Flies to more countries than almost any airline','Good food and Istanbul stopovers'],con:['Longer total journey to Europe','Very large hub — allow time'],best:'Reaching smaller European cities'},
 GF:{n:'Gulf Air',t:'full',hub:'Bahrain (BAH)',s:[3,4,3,4],pro:['Competitive fares to the Gulf and Europe','Quiet hub with short connections'],con:['Smaller network','Fewer daily flights'],best:'Budget-minded travellers who still want full service'},
 FZ:{n:'flydubai',t:'hybrid',hub:'Dubai (DXB)',s:[3,4,4,3],pro:['Cheaper than full-service to the Gulf','Business class on many flights'],con:['Bags and meals depend on the fare','Narrow-body plane on long legs'],best:'Gulf trips on a budget, with a bag fare if needed'},
 G9:{n:'Air Arabia',t:'budget',hub:'Sharjah (SHJ)',s:[2,5,3,2],pro:['Often the lowest fare to the UAE','Simple and punctual'],con:['Bags, seats and meals cost extra','Sharjah is about 30 min from Dubai'],best:'Short Gulf trips with light luggage'},
 SQ:{n:'Singapore Airlines',t:'full',hub:'Singapore (SIN)',s:[5,3,5,5],pro:['Benchmark service and comfort','Changi is one of the best airports in the world'],con:['Usually the highest fare','Stop in Singapore for most routes'],best:'Comfort to East Asia and Australia'},
 TG:{n:'Thai Airways',t:'full',hub:'Bangkok (BKK)',s:[4,4,4,5],pro:['Direct to Bangkok with full service','Good connections across Asia'],con:['Some older cabins'],best:'Thailand holidays and Asia connections'},
 MH:{n:'Malaysia Airlines',t:'full',hub:'Kuala Lumpur (KUL)',s:[4,4,4,5],pro:['Full service at fair prices','Good links to Australia and East Asia'],con:['Stop in Kuala Lumpur'],best:'Value full-service to Asia and Australia'},
 OD:{n:'Batik Air',t:'hybrid',hub:'Kuala Lumpur (KUL)',s:[3,4,3,4],pro:['Checked bag often included','Cheaper than full-service'],con:['Fewer frills on board','Smaller network'],best:'Value trips to Malaysia and onward'},
 AK:{n:'AirAsia',t:'budget',hub:'Kuala Lumpur (KUL)',s:[2,5,4,2],pro:['Very low base fares','Wide Southeast Asia network'],con:['Every extra costs money','Tight legroom'],best:'Backpackers and short hops with carry-on only'},
 '6E':{n:'IndiGo',t:'budget',hub:'Delhi & Mumbai',s:[2,5,4,2],pro:['Low fares to many Indian cities','Very punctual'],con:['Bags and meals extra','No seat-back screens'],best:'Short India trips and pilgrimages'},
 AI:{n:'Air India',t:'full',hub:'Delhi (DEL)',s:[3,4,4,4],pro:['Full service to India and beyond','Bag included'],con:['Cabin quality varies by plane'],best:'India trips with full service and a bag'}
};
const REG={
 south:{n:'India, Nepal & Maldives',a:['UL','AI','6E']},
 asia:{n:'Southeast & East Asia',a:['UL','SQ','TG','MH','OD','AK']},
 gulf:{n:'Middle East & Europe',a:['UL','EK','QR','EY','TK','GF','FZ','G9']},
 aus:{n:'Australia',a:['UL','SQ','MH','EK','AK']}
};
const SCN=['On-board comfort','Value','Network','Extras included'];
let reg='gulf',cmp=['UL','EK'],seatAir='UL';
const bars=(s,d=0)=>SCN.map((l,j)=>`<div class="bar"><span>${l}</span><i><b style="--w:${s[j]*20}%;--d:${d+j*80}ms"></b></i><em>${s[j]}</em></div>`).join('');
function setRegion(r){reg=r;cmp=REG[r].a.slice(0,2);seatAir=cmp[0];renderAir();renderSeatSelect();renderSeats()}
function renderAir(){
 $('#regTabs').innerHTML=Object.entries(REG).map(([k,v])=>`<button type="button" role="tab" aria-selected="${k===reg}" data-r="${k}">${v.n}</button>`).join('');
 $$('#regTabs button').forEach(b=>b.onclick=()=>setRegion(b.dataset.r));
 $('#airGrid').innerHTML=REG[reg].a.map((code,i)=>{const a=AIR[code],on=cmp.includes(code);return `<article class="air t-${a.t}${on?' on':''}" style="--d:${i*70}ms">
  <div class="air-top">${logo(code,'big')}<div><h3>${a.n}</h3><p class="hub">Hub: ${a.hub}</p></div><span class="pill ${a.t}">${TYPE[a.t]}</span></div>
  <div class="bars">${bars(a.s,i*70+200)}</div>
  <p class="bestfor"><b>Best for</b>${a.best}</p>
  <div class="air-act"><button class="btn sm" type="button" data-seat="${code}">See best seats</button><button class="cmpb" type="button" aria-pressed="${on}" data-cmp="${code}">${on?'✓ Comparing':'+ Compare'}</button></div></article>`}).join('');
 $$('#airGrid [data-cmp]').forEach(b=>b.onclick=()=>{const c=b.dataset.cmp;if(cmp.includes(c))cmp=cmp.filter(x=>x!==c);else{cmp.push(c);if(cmp.length>3)cmp.shift()}renderAir()});
 $$('#airGrid [data-seat]').forEach(b=>b.onclick=()=>{seatAir=b.dataset.seat;renderSeatSelect();renderSeats();openStudio('seats')});
 renderCmp();
}
function renderCmp(){
 const el=$('#cmp');
 if(!cmp.length){el.innerHTML='<h3>Compare airlines <small>Tap “+ Compare” on up to 3 airlines</small></h3>';return}
 const tot=c=>AIR[c].s.reduce((a,b)=>a+b,0),bestC=cmp.reduce((a,b)=>tot(b)>tot(a)?b:a),bestV=cmp.reduce((a,b)=>AIR[b].s[1]>AIR[a].s[1]?b:a);
 el.innerHTML=`<h3>Side by side <small>${cmp.length} of 3 selected · tap “+ Compare” to change</small></h3><div class="cmpGrid" style="--n:${cmp.length}">${cmp.map((c,i)=>{const a=AIR[c],t=TINFO[a.t];return `<div class="cmpCol" style="--d:${i*90}ms"><h4>${logo(c)}<span>${a.n}</span></h4>
 ${c===bestC&&cmp.length>1?'<span class="win">★ Best all-round</span>':''}${c===bestV&&cmp.length>1&&c!==bestC?'<span class="win">★ Best value</span>':''}
 <div class="bars" style="margin:12px 0 0">${bars(a.s,i*90+150)}</div>
 <ul class="pc" style="margin-top:12px">${a.pro.map(x=>`<li class="pro">${x}</li>`).join('')}${a.con.map(x=>`<li class="con">${x}</li>`).join('')}</ul><dl><dt>Type</dt><dd>${TYPE[a.t]}</dd><dt>Checked bag</dt><dd>${t.bag}</dd><dt>Seat choice</dt><dd>${t.seat}</dd><dt>Meals</dt><dd>${t.meal}</dd><dt>Best for</dt><dd>${a.best}</dd></dl></div>`}).join('')}</div>`;
}

/* ---------- true-cost calculator ---------- */
const ROUTES={kul:{n:'Colombo → Kuala Lumpur',b:115,bag:38,seat:12,meal:9,chg:45,f:230,fchg:40},dxb:{n:'Colombo → Dubai',b:150,bag:45,seat:15,meal:10,chg:50,f:285,fchg:40},maa:{n:'Colombo → Chennai',b:70,bag:28,seat:8,meal:6,chg:35,f:135,fchg:30}};
const ADD=[['bag','Checked bag (20 kg)'],['seat','Choose my seat'],['meal','Hot meal'],['chg','Change date later']];
let on={bag:true,seat:true,meal:false,chg:false};
function renderCalc(){
 const r=ROUTES[$('#cRoute').value];
 $('#cTog').innerHTML=ADD.map(([k,l])=>`<button type="button" class="tg" aria-pressed="${on[k]}" data-k="${k}">${l}</button>`).join('');
 $$('#cTog .tg').forEach(b=>b.onclick=()=>{on[b.dataset.k]=!on[b.dataset.k];renderCalc()});
 const segs=[['base',r.b,'Fare']].concat(ADD.filter(([k])=>on[k]).map(([k,l])=>[k,r[k],l]));
 const bt=segs.reduce((a,s)=>a+s[1],0),ft=r.f+(on.chg?r.fchg:0),mx=Math.max(bt,ft)*1.05;
 const fsegs=[['full',r.f,'All-in fare']].concat(on.chg?[['chg',r.fchg,'Change fee']]:[]);
 const row=(lab,tot,ss)=>`<div class="cbar"><div class="lab"><span>${lab}</span><b>$${tot}</b></div><div class="stack">${ss.map(s=>`<span class="seg-${s[0]}" style="width:${s[1]/mx*100}%" title="${s[2]}: $${s[1]}">${s[1]/mx>.09?'$'+s[1]:''}</span>`).join('')}</div></div>`;
 $('#cBars').innerHTML=row('Budget airline',bt,segs)+row('Full-service airline',ft,fsegs);
 const d=Math.abs(ft-bt);
 $('#cVerdict').innerHTML=bt<ft?`<b>Budget is $${d} cheaper</b> with these extras — but expect less legroom and no entertainment.`:bt>ft?`<b>Full-service is $${d} cheaper</b> once you add everything you need — and you get meals and more comfort.`:`<b>Same price</b> — so full-service gives you more for your money.`;
}

/* ---------- seat guide ---------- */
const LAY={
 wide:{label:'Typical wide-body · e.g. A330 / 777 / 787',cab:[{c:'biz',r:[1,4],g:[1,2,1],L:'ADGK'},{c:'eco',r:[20,39],g:[3,3,3],L:'ABCDEFHJK'}],exit:[30],bulk:[20,30],wing:[25,33],gal:[20,30],front:[20,24],rear:[36,39],toil:[20,29,30,39]},
 narrowBiz:{label:'Typical narrow-body · e.g. Boeing 737',cab:[{c:'biz',r:[1,3],g:[2,2],L:'ACDF'},{c:'eco',r:[6,27],g:[3,3],L:'ABCDEF'}],exit:[14,15],bulk:[6],wing:[11,18],gal:[6],front:[6,9],rear:[24,27],toil:[6,27]},
 narrow:{label:'Typical narrow-body · e.g. A320',cab:[{c:'eco',r:[1,26],g:[3,3],L:'ABCDEF'}],exit:[11,12],bulk:[1],wing:[9,16],gal:[1],front:[1,4],rear:[23,26],toil:[1,26]}
};
const PRI=[
 {k:'sleep',i:'moon',l:'Sleep',d:'<b>Window seats</b> in the middle of the cabin — something to lean on, nobody climbing over you, away from toilets and galleys.',f:s=>s.pos==='window'&&!s.exit&&!s.toil&&!s.rear&&s.c==='eco'},
 {k:'leg',i:'leg',l:'Legroom',d:'<b>Exit rows and bulkheads</b> have the most knee room. Exit rows need you to be 15+ and able to help in an emergency.',f:s=>(s.exit||s.bulk)&&s.c==='eco'},
 {k:'fast',i:'door',l:'Get off fast',d:'<b>Aisle seats near the front</b> — you\'re among the first off, which matters for tight connections.',f:s=>s.front&&s.pos==='aisle'},
 {k:'baby',i:'baby',l:'With a baby',d:'<b>Bulkhead rows</b> are where bassinets clip on (on long-haul planes). Ask for one when you book — babies can\'t sit in exit rows.',f:s=>s.bulk&&!s.exit&&s.c==='eco'},
 {k:'view',i:'eye',l:'Window views',d:'<b>Window seats in front of or behind the wing</b> give clear views for take-off and landing photos.',f:s=>s.pos==='window'&&!s.wing&&s.c==='eco'},
 {k:'cheap',i:'tag',l:'Lowest cost',d:'<b>Standard seats mid-to-back</b> are the cheapest (or free at check-in). Sitting at the back also gives you the best chance of an empty seat beside you.',f:s=>s.c==='eco'&&!s.exit&&!s.bulk&&!s.front}
];
let prio=null,picked=null,seatMap={};
function renderSeatSelect(){
 const opts=[...new Set(Object.values(REG).flatMap(r=>r.a))];
 $('#seatAir').innerHTML=opts.map(c=>`<option value="${c}"${c===seatAir?' selected':''}>${AIR[c].n} · ${TYPE[AIR[c].t]}</option>`).join('');
}
function seatInfo(id,row,letter,pos,c,L){
 const inR=(a)=>a&&row>=a[0]&&row<=a[1];
 return {id,row,letter,pos,c,exit:L.exit.includes(row),bulk:L.bulk.includes(row),wing:inR(L.wing),front:c==='biz'||inR(L.front),rear:inR(L.rear),toil:L.toil.includes(row)};
}
function renderSeats(){
 const a=AIR[seatAir],L=LAY[TINFO[a.t].lay];seatMap={};picked=null;
 let h=`<div class="ptype">${L.label}</div>`;
 L.cab.forEach(cab=>{
  h+=`<div class="clabel">${cab.c==='biz'?'Business':'Economy'}</div>`;
  for(let r=cab.r[0];r<=cab.r[1];r++){
   if(cab.c==='eco'&&L.gal.includes(r))h+=`<div class="gal">${ico('door','')}<span>Door · galley · toilets</span></div>`;
   const wing=L.wing&&r>=L.wing[0]&&r<=L.wing[1],ex=L.exit.includes(r);
   let cls='srow'+(cab.c==='biz'?' biz':'')+(wing?' wing':'')+(ex?' exit':'')+(wing&&r===L.wing[0]?' wfirst':'')+(wing&&r===L.wing[1]?' wlast':'');
   h+=`<div class="${cls}">${wing?'<span class="wingL"></span><span class="wingR"></span>':''}${ex?'<span class="exitL">EXIT</span><span class="exitR">EXIT</span>':''}<span class="rn">${r}</span>`;
   let li=0;
   cab.g.forEach((n,gi)=>{
    if(gi)h+='<span class="ai"></span>';
    for(let k=0;k<n;k++){
     const letter=cab.L[li++],first=li===1,last=li===cab.L.length,edgeL=k===0&&gi>0,edgeR=k===n-1&&gi<cab.g.length-1;
     const pos=first||last?'window':(edgeL||edgeR)?'aisle':'middle';
     const s=seatInfo(r+letter,r,letter,pos,cab.c,L);seatMap[s.id]=s;
     h+=`<button type="button" class="seat${cab.c==='biz'?' biz':''}${s.exit?' ex':''}${s.bulk&&!s.exit?' bk':''}" data-s="${s.id}" aria-label="Seat ${s.id}, ${pos}${s.exit?', exit row':''}${s.bulk?', bulkhead':''}"></button>`;
    }
   });
   h+=`<span class="rn r">${r}</span></div>`;
  }
 });
 h+=`<div class="gal">${ico('door','')}<span>Door · galley · toilets</span></div>`;
 $('#plane').innerHTML=h;
 $$('#plane .seat').forEach(b=>b.onclick=()=>pickSeat(b.dataset.s));
 $('#seatTitle').textContent=`Seat guide · ${a.n}`;
 applyPrio();showSeat(null);
}
function applyPrio(){
 const p=PRI.find(x=>x.k===prio);
 $$('#prios .prio').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===prio));
 let n=0;
 $$('#plane .seat').forEach(b=>{const s=seatMap[b.dataset.s],ok=p?p.f(s):false;if(ok)n++;b.classList.toggle('rec',!!p&&ok);b.classList.toggle('dim',!!p&&!ok)});
 $('#prioNote').innerHTML=p?`${p.d} <span style="white-space:nowrap">· ${n} seats glow on this plane.</span>`:'Choose what matters most and the best seats light up — or tap any seat.';
}
function pickSeat(id){picked=id;$$('#plane .seat').forEach(b=>b.classList.toggle('pick',b.dataset.s===id));showSeat(seatMap[id])}
function showSeat(s){
 const el=$('#sinfo');
 if(!s){el.innerHTML=`<div class="empty">${ico('seat')}<h3 style="color:var(--ink)">Tap a seat</h3><p>See what it's really like — the good, the bad, and what it usually costs on ${AIR[seatAir].n}.</p></div>
  <div class="skey"><span><i style="background:color-mix(in srgb,var(--navy) 14%,var(--card))"></i>Standard</span><span><i style="background:color-mix(in srgb,#b03a48 26%,var(--card))"></i>Exit row</span><span><i style="background:color-mix(in srgb,#7a5bbf 26%,var(--card))"></i>Bulkhead</span><span><i style="background:color-mix(in srgb,#1e6f8a 30%,var(--card))"></i>Business</span><span><i style="background:var(--lime)"></i>Recommended</span></div>`;return}
 const a=AIR[seatAir],pro=[],con=[],tags=[];
 const P={window:['Window',['A wall to lean on for sleeping','Views at take-off and landing','No one climbs over you'],['You climb over others to get out']],aisle:['Aisle',['Get up any time without asking','Stretch a leg into the aisle','Quicker off the plane'],['Bumped by trolleys and passers-by','Neighbours wake you to get out']],middle:['Middle',['Often the last seats sold — cheapest or free','Sometimes the only way to sit with family'],['Least personal space','Sharing two armrests']]};
 tags.push(P[s.pos][0]);pro.push(...P[s.pos][1]);con.push(...P[s.pos][2]);
 if(s.c==='biz'){tags.push('Business');pro.unshift('Much wider seat — lie-flat on many long-haul planes','Lounge access and priority boarding');con.push('Costs several times an economy fare')}
 if(s.exit){tags.push('Exit row');pro.unshift('The most legroom in economy');con.push('Must be 15+ and willing to help in an emergency','No bags at your feet during take-off and landing','No babies or infants')}
 if(s.bulk&&!s.exit){tags.push('Bulkhead');pro.unshift('No seat in front reclining into you','Bassinet position on long-haul planes');con.push('Tray table and screen fold out of the armrest','Families with babies often sit here')}
 if(s.wing){tags.push('Over wing');pro.push('Smoothest ride in turbulence');con.push('Wing blocks the view down')}
 if(s.front&&s.c==='eco'){tags.push('Front');pro.push('First off the plane and first to get meals')}
 if(s.rear){tags.push('Rear');pro.push('More chance of an empty seat beside you');con.push('Noisier, last off the plane, meal choices may run out')}
 if(s.toil){con.push('Next to toilets or galley — light and noise')}
 const t=a.t,cost=s.c==='biz'?'Included with a business-class fare.':t==='budget'?'Paid extra on budget airlines — or accept a random free seat at check-in.':t==='hybrid'?(s.exit||s.bulk||s.front?'Usually a paid seat; free on top fares.':'Free on higher fares, paid on the cheapest ones.'):(s.exit||s.bulk||s.front?'Often a paid "preferred" seat — sometimes free for families or frequent flyers.':'Usually free when online check-in opens.');
 const fits=PRI.filter(p=>p.f(s)).map(p=>p.l);
 el.innerHTML=`<div class="snum"><b translate="no">${s.id}</b>${logo(seatAir)}<span>${s.c==='biz'?'Business':'Economy'} · ${a.n}</span></div>
 <div class="stags">${tags.map(x=>`<span>${x}</span>`).join('')}</div>
 ${fits.length?`<p style="margin:0;font-size:14px;color:var(--soft)">Good for: <b style="color:var(--ink)">${fits.join(', ')}</b></p>`:''}
 <h4>Why you'll like it</h4><ul>${pro.slice(0,4).map((x,i)=>`<li class="pro" style="--d:${i*60}ms">${x}</li>`).join('')}</ul>
 <h4>Watch out for</h4><ul>${con.slice(0,4).map((x,i)=>`<li class="con" style="--d:${i*60+200}ms">${x}</li>`).join('')}</ul>
 <div class="scost"><b>Cost:</b> ${cost}</div>`;
}

/* ---------- planning steps ---------- */
const STEPS=[
 {t:'Pick your dates',d:'Fix the trip loosely, then stay flexible by a few days. Mid-week flights are often cheaper than weekends.',l:['Avoid Sinhala & Tamil New Year (April) and Christmas if you can','Check the destination\'s holidays too — like Golden Week in Japan','Use a fare calendar to spot the cheapest days'],tip:'Flexible by ±3 days? Tell your planner — it often saves more than any sale.'},
 {t:'Book at the right time',d:'For Asia and the Gulf, booking 4–8 weeks ahead usually gets fair prices. For Europe, Australia and peak dates, aim for 3–5 months.',l:['Cheap fare classes sell out first, then prices climb','Last-minute deals on long-haul are rare','Book visa appointments before you lock in flights'],tip:'Share your dates early and Deima will tell you when it\'s a good moment to book.'},
 {t:'Compare the total price',d:'A cheap ticket plus a bag, a seat and a meal can cost more than a full-service fare.',l:['Add every extra you actually need','Check the bag allowance on both legs','Watch for card or payment fees'],tip:'Use the true-cost check above before you choose.'},
 {t:'Choose a smart route',d:'Direct is fastest. One stop can be much cheaper and gives you a bonus stopover city.',l:['On one ticket, 1½–2 hours is usually enough to connect','On separate tickets, leave 3–4 hours — you collect and re-check bags','Check transit-visa rules for your stop country'],tip:'Long stop in Dubai, Doha or Singapore? Turn it into a 1–2 night stopover.'},
 {t:'Pick seats & meals',d:'Choose seats as soon as booking or online check-in opens. Order special meals at least 24–48 hours ahead.',l:['Vegetarian, Hindu, Muslim, child and baby meals are usually free on full-service airlines','Request a bassinet early if you fly with an infant','Use the seat guide above to choose well'],tip:'Travelling as a couple on a 3-3 plane? Book window + aisle — the middle often stays empty.'},
 {t:'Get documents ready',d:'Most countries want a passport valid for 6 months beyond your trip, plus the right visa.',l:['Apply for visas early — some take weeks','Buy travel insurance before you fly','Keep digital copies of everything'],tip:'Deima prepares visa papers and checks every document before you go.'}
];
let step=0;
function renderSteps(){
 const tr=$('#track');tr.style.setProperty('--p',step/(STEPS.length-1));
 $$('#track .step').forEach((b,i)=>{b.setAttribute('aria-selected',i===step);b.classList.toggle('done',i<step)});
 const s=STEPS[step];
 $('#stepBody').outerHTML=`<div class="stepBody" id="stepBody" role="tabpanel"><div><p class="eyebrow">Step ${step+1} of ${STEPS.length}</p><h3>${s.t}</h3><p>${s.d}</p><ul>${s.l.map(x=>`<li>${x}</li>`).join('')}</ul>
 <div class="stepNav"><button class="btn line sm" type="button" id="sPrev"${step?'':' disabled'}>← Back</button><button class="btn sm" type="button" id="sNext">${step<STEPS.length-1?'Next step →':'Plan my trip with Deima'}</button></div></div>
 <div class="ptip"><b>Pro tip</b>${s.tip}</div></div>`;
 $('#sPrev').onclick=()=>{if(step){step--;renderSteps()}};
 $('#sNext').onclick=()=>{if(step<STEPS.length-1){step++;renderSteps()}else{closeStudio();quote('')}};
}
function buildSteps(){
 $('#track').innerHTML=`<span class="prog"></span><svg class="jet" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z"/></svg>`+STEPS.map((s,i)=>`<button class="step" type="button" role="tab" aria-selected="false"><i>${i+1}</i><span>${s.t}</span></button>`).join('');
 $$('#track .step').forEach((b,i)=>b.onclick=()=>{step=i;renderSteps()});
 renderSteps();
}

/* ---------- Airline Studio popup ---------- */
let studioFocus=null;
function openStudio(tab){
 const st=$('#studio');
 if(st.hidden){studioFocus=document.activeElement;st.hidden=false;document.body.style.overflow='hidden'}
 $$('#studio [data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===tab));
 ['airlines','fares','seats','planning'].forEach(id=>{$('#'+id).hidden=id!==tab});
 $('#studioBody').scrollTop=0;
 const t=$(`#studio [data-tab="${tab}"]`);if(t)t.focus({preventScroll:true});
}
function closeStudio(){const st=$('#studio');if(st.hidden)return;st.hidden=true;document.body.style.overflow='';if(studioFocus)studioFocus.focus()}
function focusAirline(r,code){
 reg=r;cmp=[code,...REG[r].a.filter(x=>x!==code)].slice(0,2);seatAir=code;renderAir();renderSeatSelect();renderSeats();openStudio('airlines');
 setTimeout(()=>{const el=$(`#airGrid [data-cmp="${code}"]`);if(el){const card=el.closest('.air');card.scrollIntoView({block:'center',behavior:RM?'auto':'smooth'});card.classList.add('flash');setTimeout(()=>card.classList.remove('flash'),1600)}},120);
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-studio]');if(b){e.preventDefault();openStudio(b.dataset.studio)}});
$$('#studio [data-tab]').forEach(b=>b.onclick=()=>openStudio(b.dataset.tab));
$('#studioX').onclick=closeStudio;
$('#studio').addEventListener('click',e=>{if(e.target.id==='studio')closeStudio()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#pkm').hidden&&$('#xm').hidden)closeStudio()});
{const all=[...new Set(Object.values(REG).flatMap(r=>r.a))];$('#logoRail').innerHTML=`<div class="rail">${[...all,...all].map(k=>logo(k)).join('')}</div>`}

document.addEventListener('click',e=>{const t=e.target.closest('[data-tool]');if(!t)return;e.preventDefault();if(t.dataset.tool==='builder'&&window.DeimaTrip)window.DeimaTrip.open({});else if(t.dataset.tool==='quote')quote('')});
/* scroll-only extras: quick airline picks and trending countries */
{const QP=[['Direct, with family','UL','No connections from Colombo'],['Comfort via the Gulf','EK','Big network to Europe'],['Lowest fare to the UAE','G9','Pay only for extras you need'],['Value to Asia','MH','Full service at fair prices']];
 $('#quickPick').innerHTML=`<p class="qpH">Quick pick</p>`+QP.map(([n,k,w])=>`<button type="button" class="qp" data-qp="${k}">${logo(k)}<span><b>${n}</b><small>${w}</small></span></button>`).join('');
 $$('#quickPick [data-qp]').forEach(b=>b.onclick=()=>{const k=b.dataset.qp,r=Object.keys(REG).find(r=>r!=='south'&&REG[r].a.includes(k))||'gulf';focusAirline(k==='MH'?'asia':r,k)});
 const TR=['jp','th','mv','ae'];
 if($('#trend'))$('#trend').innerHTML=`<p class="trH">Trending now</p><div class="trRow">${TR.map(id=>{const c=C.find(x=>x.id===id);return `<button type="button" class="tr" data-c="${id}" style="--a:${AREA[c.area][0]};--b:${AREA[c.area][1]}"><b>${c.name}</b><span class="trFly">${ico('plane')}${c.fly.replace(' from Colombo','')}</span><span class="trM">${MON.map((m,j)=>`<i class="${c.best.includes(j+1)?'on':''}"></i>`).join('')}</span><span class="trP">${c.p.slice(0,2).map(p=>p[1]).join(' · ')}</span></button>`}).join('')}</div>`;
 $$('#trend .tr').forEach(b=>b.onclick=()=>pick(C.find(x=>x.id===b.dataset.c)));
}
/* cockpit switches */
let actx=null,muted=false;try{muted=localStorage.getItem('deimaMute')==='1'}catch(e){}
function clack(kind){if(muted)return;try{actx=actx||new(window.AudioContext||window.webkitAudioContext)();if(actx.state==='suspended')actx.resume();const t=actx.currentTime,sr=actx.sampleRate;
 const len=Math.floor(.045*sr),buf=actx.createBuffer(1,len,sr),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,7);
 const src=actx.createBufferSource();src.buffer=buf;const bp=actx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=kind==='pb'?2600:1700;bp.Q.value=1.4;const g=actx.createGain();g.gain.value=.7;src.connect(bp);bp.connect(g);g.connect(actx.destination);src.start(t);
 const o=actx.createOscillator(),og=actx.createGain();o.type='square';o.frequency.setValueAtTime(kind==='pb'?240:150,t);o.frequency.exponentialRampToValueAtTime(55,t+.06);og.gain.setValueAtTime(.16,t);og.gain.exponentialRampToValueAtTime(.001,t+.08);o.connect(og);og.connect(actx.destination);o.start(t);o.stop(t+.09);
 const bz=actx.createOscillator(),bg=actx.createGain();bz.type='sine';bz.frequency.value=kind==='pb'?1560:1240;bg.gain.setValueAtTime(0,t+.14);bg.gain.linearRampToValueAtTime(.05,t+.15);bg.gain.setValueAtTime(.05,t+.2);bg.gain.linearRampToValueAtTime(0,t+.21);bg.gain.setValueAtTime(0,t+.27);bg.gain.linearRampToValueAtTime(.05,t+.28);bg.gain.exponentialRampToValueAtTime(.001,t+.4);bz.connect(bg);bg.connect(actx.destination);bz.start(t+.14);bz.stop(t+.42);
}catch(e){}}
const muteSw=$('#muteSw');if(muteSw){const set=()=>{muteSw.setAttribute('aria-pressed',!muted);muteSw.classList.toggle('off',muted)};set();muteSw.onclick=()=>{muted=!muted;try{localStorage.setItem('deimaMute',muted?'1':'0')}catch(e){}set();clack('pb')}}
$$('.pbn').forEach(b=>b.addEventListener('click',e=>{
 e.preventDefault();
 $$('.pbn.blink').forEach(x=>x.classList.remove('blink'));
 b.classList.add('blink','press');clack(b.classList.contains('hot')?'pb':'sw');setTimeout(()=>b.classList.remove('blink'),700);setTimeout(()=>b.classList.remove('press'),160);
 if(b.dataset.sec)setActive(b.dataset.sec);
 const d=b.dataset,wait=RM?0:260;
 const menu=$('#links');if(menu&&menu.classList.contains('open')){menu.classList.remove('open');const m=$('#menu');if(m)m.setAttribute('aria-expanded',false)}
 setTimeout(()=>{if(d.dtool==='quote')quote('');else if(d.dstudio)openStudio(d.dstudio);else if(d.sec){const t=$('#'+d.sec);if(t)t.scrollIntoView({behavior:RM?'auto':'smooth'});history.replaceState(null,'','#'+d.sec)}},wait);
}));
function setActive(id){$$('.pbn[data-sec]').forEach(x=>x.classList.toggle('act',x.dataset.sec===id))}
{const secs=['explore','packages','services','contact'].map(id=>document.getElementById(id)).filter(Boolean);
 const spy=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(x=>spy.observe(x));
 const top=document.getElementById('top');if(top)new IntersectionObserver(es=>{if(es[0].isIntersecting&&es[0].intersectionRatio>.5)setActive('')},{threshold:[.5]}).observe(top)}

{const tick=()=>{const el=$('#cmbTime');if(el)el.textContent=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Colombo'}).format(new Date())};tick();setInterval(tick,15000)}
/* visitor's local time in the nav, from the device time zone */
{const lt=$('#localTime'),tz=$('#tzName');if(lt){let zone='';try{zone=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
 const city=(zone.split('/').pop()||'Local').replace(/_/g,' ').toUpperCase();if(tz)tz.textContent=city.length>12?city.slice(0,12):city;
 const fmt=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false});
 const tick=()=>{lt.textContent=fmt.format(new Date());lt.parentElement.title=zone?`${zone} · ${new Date().toDateString()}`:''};tick();setTimeout(()=>{tick();setInterval(tick,60000)},(60-new Date().getSeconds())*1000+50)}}
/* tips rail */
if($('#tipRail'))$('#tipRail').innerHTML=STEPS.map((t,i)=>`<div class="tipCard"><span class="tipN">${String(i+1).padStart(2,'0')}</span><b>${t.t}</b><p>${t.tip}</p></div>`).join('');
/* videos that play only while visible */
{const io2=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){v.preload='auto';v.play().catch(()=>{})}else v.pause()}),{threshold:.3});$$('video[data-inview]').forEach(v=>io2.observe(v));window.DeimaInview=v=>io2.observe(v)}
/* custom quote */
{const f=$('#cq');if(f){
 const now=new Date(),opts=['Flexible'];for(let k=0;k<12;k++){const d=new Date(now.getFullYear(),now.getMonth()+k,1);opts.push(`${MON[d.getMonth()]} ${d.getFullYear()}`)}
 $('#cqWhen').innerHTML=opts.map(o=>`<option>${o}</option>`).join('');
 const pax={a:2,k:0};$$('#cq [data-pax]').forEach(b=>b.onclick=()=>{const t=b.dataset.pax;pax[t]=Math.max(t==='a'?1:0,Math.min(20,pax[t]+ +b.dataset.d));$('#cqA').textContent=pax.a;$('#cqK').textContent=pax.k});
 $$('#cqStyle button').forEach(b=>b.onclick=()=>$$('#cqStyle button').forEach(x=>x.setAttribute('aria-checked',x===b)));
 $$('#cqInc button').forEach(b=>b.onclick=()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true'));
 f.addEventListener('submit',e=>{e.preventDefault();const to=$('#cqTo').value.trim();if(!to){$('#cqTo').focus();$('#cqTo').classList.add('need');return}$('#cqTo').classList.remove('need');
  const o=origin(),style=($('#cqStyle [aria-checked=true]')||{}).dataset?.v||'Comfort',inc=$$('#cqInc [aria-pressed=true]').map(b=>b.dataset.v);
  const txt=`Hello Deima Travels,\nI'd like a custom quote.\nFrom: ${o[1]} (${o[0]})\nTo: ${to}\nWhen: ${$('#cqWhen').value}${$('#cqFlex').checked?' (flexible ±3 days)':''}\nTravellers: ${pax.a} adult(s)${pax.k?`, ${pax.k} child(ren)`:''}\nStyle: ${style}\nInclude: ${inc.join(', ')||'Flights only'}`;
  $('#cqText').textContent=txt;$('#cqWa').href='https://wa.me/?text='+encodeURIComponent(txt);$('#cqOut').hidden=false;$('#cqCopied').textContent='';$('#cqOut').scrollIntoView({block:'nearest',behavior:RM?'auto':'smooth'})});
 $('#cqCopy').onclick=()=>navigator.clipboard.writeText($('#cqText').textContent).then(()=>$('#cqCopied').textContent='Copied').catch(()=>$('#cqCopied').textContent='Select the text to copy it')}}
/* ---------- init ---------- */
buildSearch();initGlobe();renderTray();syncMarks();pick(DEST.find(d=>d.id==='mv'));
renderAir();
$('#cRoute').innerHTML=Object.entries(ROUTES).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('');
$('#cRoute').onchange=renderCalc;renderCalc();
$('#prios').innerHTML=PRI.map(p=>`<button type="button" class="prio" aria-pressed="false" data-k="${p.k}">${ico(p.i)}${p.l}</button>`).join('');
$$('#prios .prio').forEach(b=>b.onclick=()=>{prio=prio===b.dataset.k?null:b.dataset.k;applyPrio()});
renderSeatSelect();$('#seatAir').onchange=e=>{seatAir=e.target.value;renderSeats()};renderSeats();
buildSteps();

/* ---------- Bingo ad ---------- */
const adC=$('#adCard'),adX=$('#adX'),adM=$('#adM'),adV=$('#adVideo');
let adClosed=false;try{adClosed=sessionStorage.getItem('deimaAdClosed')==='1'}catch(e){}
if(adC){
 if(adClosed){adC.hidden=true;adX.hidden=true}
 const pv=adC.querySelector('video');pv.play().catch(()=>{});
 const openAd=()=>{adM.hidden=false;document.body.style.overflow='hidden';adV.currentTime=0;adV.muted=false;adV.play().catch(()=>{adV.muted=true;adV.play().catch(()=>{})});pv.pause();adM.querySelector('.adClose').focus()};
 adC.onclick=openAd;document.addEventListener('click',e=>{if(e.target.closest('[data-ad]'))openAd()});
 const closeAd=()=>{adM.hidden=true;adV.pause();document.body.style.overflow='';pv.play().catch(()=>{})};
 adM.querySelector('.adClose').onclick=closeAd;
 adM.onclick=e=>{if(e.target===adM)closeAd()};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!adM.hidden)closeAd()});
 adX.onclick=()=>{adC.hidden=true;adX.hidden=true;pv.pause();try{sessionStorage.setItem('deimaAdClosed','1')}catch(e){}};
}
/* on phones the ad shrinks to a round bubble once the visitor scrolls, so it never covers reading */
if(adC){const mq=matchMedia('(min-width:0px)');const mini=()=>{const m=mq.matches&&scrollY>500;adC.classList.toggle('mini',m);adX.classList.toggle('mini',m)};addEventListener('scroll',mini,{passive:true});mq.addEventListener('change',mini);mini()}
window.DeimaExplore={rerender:()=>{renderAir();renderCalc();applyPrio();if(picked)showSeat(seatMap[picked]);else showSeat(null);renderSteps()}};
})();

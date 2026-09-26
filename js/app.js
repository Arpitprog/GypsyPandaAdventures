
/* ---------- SETTINGS: edit these three lines ---------- */
var CONFIG={
  whatsapp:"918319724869",  // your WhatsApp number with country code, digits only, e.g. "919876543210"
  email:"",     // where email enquiries go, e.g. "hello@yourdomain.com"
  sheetUrl:""   // Google Apps Script web app URL that logs enquiries to a sheet (see integrations/SETUP.md)
};

/* ---------- illustrated scenes (photo slots can replace these later) ---------- */
function pines(a,c){return a.map(function(p){var x=p[0],b=p[1],h=p[2],w=h*.38;return '<path d="M'+(x-w)+' '+b+' '+x+' '+(b-h)+' '+(x+w)+' '+b+'Z" fill="'+c+'"/>'}).join("")}
var SC={
snow:'<defs><linearGradient id="gs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FBBE0"/><stop offset="1" stop-color="#EAF3F8"/></linearGradient></defs><rect width="600" height="260" fill="url(#gs)"/><circle cx="480" cy="56" r="20" fill="#FFF6D8"/><path d="M0 170 80 95 130 135 230 35 320 140 410 78 510 150 600 105V260H0Z" fill="#C6D8E8"/><path d="M230 35 206 70 222 63 234 76 246 61 258 68ZM410 78 392 102 406 96 414 106 426 94 436 100ZM80 95 66 112 78 108 86 116 96 106Z" fill="#fff"/><path d="M0 200 110 140 210 190 330 130 440 195 540 150 600 185V260H0Z" fill="#7FA0B8"/>'+pines([[40,250,60],[75,255,80],[115,255,55],[470,255,70],[510,250,90],[555,258,64],[590,255,80]],"#1D4D45")+'<path d="M0 240C120 228 240 252 360 238S520 232 600 244V260H0Z" fill="#163C36"/>',
green:'<defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE3F0"/><stop offset="1" stop-color="#F3F7E8"/></linearGradient></defs><rect width="600" height="260" fill="url(#gg)"/><path d="M0 130 70 70 130 110 240 20 330 100 420 60 520 120 600 80V260H0Z" fill="#DDE9F0"/><path d="M240 20 220 52 236 46 246 58 258 44 268 52Z" fill="#fff"/><path d="M0 180C100 130 200 170 300 140S500 120 600 160V260H0Z" fill="#8FC27A"/><path d="M0 215C120 175 240 215 360 190S520 180 600 205V260H0Z" fill="#4E9A5A"/><g fill="#E8557B"><circle cx="120" cy="232" r="4"/><circle cx="160" cy="240" r="4"/><circle cx="220" cy="228" r="4"/><circle cx="300" cy="238" r="4"/></g><g fill="#F6D24A"><circle cx="90" cy="242" r="4"/><circle cx="190" cy="244" r="4"/><circle cx="260" cy="234" r="4"/><circle cx="340" cy="230" r="4"/></g><g transform="translate(430 150)"><path d="M0 40V18L22 2 44 18V40Z" fill="#F1E3C6"/><path d="M-4 20 22-2 48 20 44 22 22 6 0 22Z" fill="#B8502F"/><rect x="18" y="26" width="8" height="14" fill="#3A2A24"/></g>'+pines([[500,240,44],[530,246,60],[570,244,48]],"#2F6B49"),
desert:'<defs><linearGradient id="gd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FBAE3"/><stop offset="1" stop-color="#F6EAD2"/></linearGradient></defs><rect width="600" height="260" fill="url(#gd)"/><circle cx="90" cy="60" r="20" fill="#FFF3CF"/><path d="M0 150 90 100 170 140 270 70 360 130 450 90 600 140V260H0Z" fill="#D7A46A"/><path d="M0 185 120 130 210 170 320 120 430 175 520 140 600 175V260H0Z" fill="#B9834B"/><path d="M0 214C150 196 300 214 600 200V260H0Z" fill="#2E9FB0"/><path d="M0 232C150 222 300 236 600 226V260H0Z" fill="#8C5E37"/><path d="M60 160 200 128M200 128 340 150" stroke="#5A3A20" stroke-width="1.3" fill="none"/><g><path d="M90 150l12 2-1 10-11-2z" fill="#D8483B"/><path d="M118 144l12 2-1 10-11-2z" fill="#F4F4F0"/><path d="M146 138l12 2-1 10-11-2z" fill="#3E7BC4"/><path d="M174 133l12 2-1 10-11-2z" fill="#3E9B5C"/><path d="M215 132l12 3-1 10-11-3z" fill="#E9A21B"/><path d="M250 136l12 3-1 10-11-3z" fill="#D8483B"/></g>',
lake:'<defs><linearGradient id="gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0A97A"/><stop offset="1" stop-color="#FBE6C9"/></linearGradient></defs><rect width="600" height="260" fill="url(#gl)"/><circle cx="300" cy="120" r="30" fill="#FFF0CF"/><path d="M0 160 90 100 160 140 260 80 350 140 450 90 540 140 600 110V260H0Z" fill="#7C86B0"/><path d="M0 175 110 130 210 165 330 120 440 170 600 130V260H0Z" fill="#525F8E"/><rect y="176" width="600" height="84" fill="#E3AE8A"/><path d="M0 200H600M0 222H600M0 244H600" stroke="#F6D2B5" stroke-width="1.5"/><path d="M200 214 300 214 320 200 180 200Z" fill="#2A2438"/><path d="M180 200 320 200 316 196 184 196Z" fill="#7A3F35"/><g fill="#D86B2A"><circle cx="70" cy="170" r="24"/><circle cx="105" cy="178" r="20"/><circle cx="520" cy="172" r="26"/><circle cx="558" cy="180" r="19"/></g><g fill="#5A3A2A"><rect x="68" y="182" width="4" height="18"/><rect x="518" y="184" width="4" height="18"/></g>',
ne:'<defs><linearGradient id="gn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9DFDA"/><stop offset="1" stop-color="#EAF6EE"/></linearGradient></defs><rect width="600" height="260" fill="url(#gn)"/><path d="M0 130 90 90 170 120 270 70 380 120 480 85 600 125V260H0Z" fill="#7FBF9C"/><rect y="118" width="600" height="26" fill="#fff" opacity=".45"/><path d="M0 170 120 125 240 160 360 118 480 165 600 130V260H0Z" fill="#4FA575"/><path d="M0 215C100 175 220 215 340 185S520 175 600 200V260H0Z" fill="#2E8158"/><path d="M0 235C140 210 300 240 600 218V260H0Z" fill="#26694A"/><path d="M40 200Q120 190 200 204M60 215Q140 206 230 218M300 190Q380 180 470 192M320 205Q400 196 500 208" stroke="#8FD1A0" stroke-width="1.6" fill="none" opacity=".7"/><g transform="translate(470 60)"><circle cx="0" cy="0" r="18" fill="#FFF4D6"/></g>',
beach:'<defs><linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CCBEE"/><stop offset="1" stop-color="#FFF0C8"/></linearGradient></defs><rect width="600" height="260" fill="url(#gb)"/><circle cx="440" cy="82" r="30" fill="#FFE59A"/><rect y="120" width="600" height="80" fill="#1AA3C6"/><path d="M0 140H600M0 160H600M0 182H600" stroke="#7FDDF0" stroke-width="1.6" stroke-dasharray="26 18"/><path d="M0 196C150 184 300 206 600 190V260H0Z" fill="#F3D9A4"/><path d="M0 232C150 224 300 240 600 228V260H0Z" fill="#E7C387"/><path d="M110 240Q120 190 140 150" stroke="#6B4A2C" stroke-width="7" fill="none"/><g fill="#2E8B57"><path d="M140 150C110 130 90 138 76 156 104 146 122 148 140 150Z"/><path d="M140 150C150 122 174 118 192 130 168 132 156 138 140 150Z"/><path d="M140 150C120 120 96 112 80 116 104 124 120 136 140 150Z"/><path d="M140 150C166 152 186 166 194 184 174 170 156 162 140 150Z"/></g>',
abroad:'<defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FB4E6"/><stop offset="1" stop-color="#FCE9C9"/></linearGradient></defs><rect width="600" height="260" fill="url(#ga)"/><circle cx="500" cy="60" r="22" fill="#FFF0C0"/><path d="M0 170 100 100 170 145 280 40 370 140 450 105 520 150V260H0Z" fill="#DCE6F2"/><path d="M280 40 254 82 272 74 284 90 298 72 312 84Z" fill="#fff"/><path d="M0 205 130 150 240 195 340 150V260H0Z" fill="#7186AE"/><path d="M300 212C400 200 500 214 600 206V260H300Z" fill="#1AA3C6"/><path d="M330 226H600M350 240H600" stroke="#7FDDF0" stroke-width="1.6" stroke-dasharray="22 16"/><path d="M0 236C150 222 300 244 600 232V260H0Z" fill="#F3D9A4" opacity=".0"/>'
};
function scene(t,extra){return '<svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">'+SC[t]+'</svg>'}

/* ---------- data ---------- */
var DEST={
 himachal:{name:"Himachal",sub:"Apple valleys to cold desert",scene:"snow",
  desc:"Pine forests, snowy passes and old mountain villages. Himachal runs from the Parvati Valley and Kullu to the high cold desert of Spiti, so there is a trip here for a first-timer and for a seasoned trekker.",
  base:"Manali",best:"Apr to Jun, Sep to Nov",high:"Kunzum La, 4,590 m",filters:["All","Treks","Road trips"]},
 uttarakhand:{name:"Uttarakhand",sub:"Devbhoomi, the land of gods",scene:"green",
  desc:"Alpine meadows, glacial rivers and some of India's holiest shrines. Garhwal offers flower valleys, summit climbs with Himalayan views, and the temple trails of the Char Dham.",
  base:"Haridwar, Rishikesh, Kyarki",best:"Mar to May, Sep to Oct",high:"Hemkund Sahib, 4,329 m",filters:["All","Treks","Pilgrimage","Stays"]},
 ladakh:{name:"Ladakh",sub:"The high desert",scene:"desert",
  desc:"Barren ochre mountains, blue lakes and monasteries above 3,500 m. Ladakh is for long road trips over the world's highest passes, and for treks that stay above the clouds.",
  base:"Leh, 3,500 m",best:"Jun to Sep",high:"Stok Kangri, 6,153 m",filters:["All","Treks","Road trips"]},
 kashmir:{name:"Kashmir",sub:"Lakes, meadows and shikaras",scene:"lake",
  desc:"Alpine lakes under snow peaks, meadows in Gulmarg and Pahalgam, and the still water of Dal Lake at dawn. Kashmir mixes gentle valley touring with some of the best lake treks in the Himalaya.",
  base:"Srinagar, 1,585 m",best:"Apr to Jun, Jul to Oct",high:"Gadsar Pass, 4,200 m",filters:["All","Treks","Valley tours"]},
 northeast:{name:"North East",sub:"Sikkim, Meghalaya, Arunachal",scene:"ne",
  desc:"Living root bridges, misty tea hills and monasteries at the edge of the sky. The North East is India at its greenest, with a different culture in every valley.",
  base:"Gangtok, Guwahati",best:"Mar to May, Oct to Dec",high:"Sela Pass, 4,170 m",filters:["All","Road trips","Culture and nature"]},
 abroad:{name:"Abroad",sub:"Nepal, Bhutan, Bali and more",scene:"abroad",
  desc:"Take the same slow, small-group way of travel overseas. Walk to Everest Base Camp, climb to Bhutan's Tiger's Nest, or trade snow for the sea in Bali, the Maldives and Phuket.",
  base:"Kathmandu, Paro, Denpasar",best:"Depends on the place",high:"Everest Base Camp, 5,364 m",filters:["All","Mountains","Beaches"]}
};
var ORDER=["himachal","uttarakhand","ladakh","kashmir","northeast","abroad"];
/* t = explore option, prof = altitude by day (metres) */
var PK=[
 {r:"himachal",t:"Road trips",n:"Spiti Circuit",d:8,lvl:"Moderate",max:"4,590 m",peak:"Kunzum La",prof:[2200,2900,3800,3800,4166,3300,4590,2050],hi:["Key and Kibber monasteries","Chandratal camp","Shimla to Manali loop"],p:29500},
 {r:"himachal",t:"Treks",n:"Hampta Pass Trek",d:5,lvl:"Moderate",max:"4,270 m",peak:"Hampta Pass",prof:[2050,3000,3600,4270,3300],hi:["Forest to moonscape in one day","Chika and Balu Ka Ghera camps","Chandratal side trip"],p:14500},
 {r:"himachal",t:"Treks",n:"Kasol, Tosh & Kheerganga",d:5,lvl:"Easy",max:"3,000 m",peak:"Kheerganga",prof:[1640,2400,3000,2400,1640],hi:["Parvati Valley villages","Hot spring at the top","Cafe evenings by the river"],p:11500},
 {r:"himachal",t:"Treks",n:"McLeod Ganj & Triund",d:4,lvl:"Easy",max:"2,850 m",peak:"Triund",prof:[1800,2850,1800,1800],hi:["Dhauladhar views at Triund","Tibetan monastery walk","Night under the stars"],p:8500},
 {r:"uttarakhand",t:"Treks",n:"Valley of Flowers & Hemkund",d:6,lvl:"Moderate",max:"4,329 m",peak:"Hemkund Sahib",prof:[300,1800,3049,3658,4329,1800],hi:["UNESCO valley in bloom","Hemkund Sahib climb","Govindghat to Ghangaria"],p:18500},
 {r:"uttarakhand",t:"Treks",n:"Chopta, Tungnath & Chandrashila",d:5,lvl:"Easy",max:"4,000 m",peak:"Chandrashila",prof:[300,2600,3680,4000,2600],hi:["Highest Shiva temple","Sunrise over Nanda Devi","Meadows at Deoria Tal"],p:13500},
 {r:"uttarakhand",t:"Treks",n:"Kedarkantha Winter Trek",d:6,lvl:"Moderate",max:"3,800 m",peak:"Kedarkantha",prof:[1200,2000,2600,3400,3800,1200],hi:["Snow trail through pine forest","Summit sunrise","Juda ka Talab camp"],p:12500},
 {r:"uttarakhand",t:"Pilgrimage",n:"Kedarnath Yatra",d:5,lvl:"Moderate",max:"3,583 m",peak:"Kedarnath",prof:[300,1800,3583,3583,300],hi:["Guided trek from Gaurikund","Night halt at the shrine","Rishikesh Ganga aarti"],p:16000},
 {r:"uttarakhand",t:"Stays",n:"Stay at The Gypsy House Kyarki",d:4,lvl:"Easy",max:null,peak:"Kyarki",prof:null,sc:"green",hi:["Rooms and meals at our property","Village and hillside walks","Day trips around Kyarki"],p:9800,stay:true},
 {r:"ladakh",t:"Road trips",n:"Leh, Nubra & Pangong",d:7,lvl:"Easy",max:"5,359 m",peak:"Khardung La",prof:[3500,3500,5359,3048,4350,4350,3500],hi:["Khardung La crossing","Camel ride at Hunder dunes","Night by Pangong Tso"],p:32500},
 {r:"ladakh",t:"Road trips",n:"Manali to Leh Bike Expedition",d:9,lvl:"Hard",max:"5,328 m",peak:"Taglang La",prof:[2050,3980,4850,3500,3500,4300,3500,3980,2050],hi:["Rohtang, Baralacha La, Taglang La","Backup vehicle and mechanic","Sarchu tented camp"],p:41000},
 {r:"ladakh",t:"Treks",n:"Markha Valley Trek",d:8,lvl:"Moderate",max:"5,150 m",peak:"Kongmaru La",prof:[3500,3400,3700,3900,4100,4400,5150,3500],hi:["Homestays along the valley","Crossing Kongmaru La","Hemis monastery finish"],p:28000},
 {r:"ladakh",t:"Treks",n:"Stok Kangri Summit",d:9,lvl:"Hard",max:"6,153 m",peak:"Stok Kangri",prof:[3500,3500,3600,4100,4900,5000,6153,4100,3500],hi:["Acclimatisation days in Leh","Summit push before dawn","Certified guides and oxygen kit"],p:38000},
 {r:"kashmir",t:"Treks",n:"Kashmir Great Lakes",d:7,lvl:"Hard",max:"4,200 m",peak:"Gadsar Pass",prof:[2740,3500,3650,3800,4200,3600,2740],hi:["Vishansar and Krishansar lakes","Gadsar Pass crossing","Gangabal and Nundkol lakes"],p:24500},
 {r:"kashmir",t:"Treks",n:"Tarsar Marsar Trek",d:6,lvl:"Moderate",max:"4,000 m",peak:"Tarsar lake",prof:[2200,2900,3800,4000,3300,2200],hi:["Twin alpine lakes","Shepherd meadows","Pahalgam start"],p:19500},
 {r:"kashmir",t:"Valley tours",n:"Srinagar, Gulmarg & Pahalgam",d:6,lvl:"Easy",max:"2,650 m",peak:"Gulmarg",prof:[1585,1585,2650,2650,2200,1585],hi:["Shikara at sunrise on Dal Lake","Gondola ride in Gulmarg","Betaab and Aru valleys"],p:22000},
 {r:"northeast",t:"Road trips",n:"Sikkim: Gangtok, Nathula & Tsomgo",d:6,lvl:"Easy",max:"3,780 m",peak:"Tsomgo Lake",prof:[400,1650,3780,1650,2100,400],hi:["Tsomgo Lake and Baba Mandir","Rumtek monastery","Tea garden stay"],p:21500},
 {r:"northeast",t:"Culture and nature",n:"Meghalaya: Root Bridges & Dawki",d:6,lvl:"Easy",max:null,peak:"Cherrapunji",prof:null,sc:"ne",hi:["Double-decker living root bridge","Crystal-clear Umngot river","Mawlynnong village"],p:19500},
 {r:"northeast",t:"Road trips",n:"Arunachal: Tawang & Sela Pass",d:8,lvl:"Moderate",max:"4,170 m",peak:"Sela Pass",prof:[100,1500,2700,4170,3048,3048,1500,100],hi:["Tawang Monastery","Sela Pass and Madhuri Lake","Bomdila. Inner Line Permit arranged"],p:36500},
 {r:"abroad",t:"Mountains",n:"Everest Base Camp Trek, Nepal",d:12,lvl:"Hard",max:"5,364 m",peak:"Base Camp",prof:[2860,3440,3440,3860,4410,4410,4910,5364,4910,3860,3440,2860],hi:["Lukla to Namche Bazaar","Tengboche monastery","Base Camp at 5,364 m"],p:68000},
 {r:"abroad",t:"Mountains",n:"Bhutan: Paro, Thimphu & Tiger's Nest",d:6,lvl:"Easy",max:"3,120 m",peak:"Tiger's Nest",prof:[2200,2320,2320,3120,2200,2200],hi:["Hike to Paro Taktsang","Thimphu dzong and markets","Punakha valley drive"],p:62000},
 {r:"abroad",t:"Beaches",n:"Bali: Ubud, Nusa Penida & Uluwatu",d:6,lvl:"Easy",max:null,peak:"Nusa Penida",prof:null,sc:"beach",hi:["Rice terraces and temples in Ubud","Kelingking cliff on Nusa Penida","Clifftop sunset in Uluwatu"],p:58000},
 {r:"abroad",t:"Beaches",n:"Maldives Island Escape",d:5,lvl:"Easy",max:null,peak:"Lagoon",prof:null,sc:"beach",hi:["Water villa or beach stay","Snorkelling on the house reef","Sandbank picnic"],p:85000},
 {r:"abroad",t:"Beaches",n:"Phuket & Krabi Islands",d:6,lvl:"Easy",max:null,peak:"Phi Phi",prof:null,sc:"beach",hi:["Phi Phi and James Bond island","Railay beach","Longtail boat hopping"],p:52000}
];
var MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var PLACES=[
 {id:"himachal",n:"Himachal",k:"mountain",m:[1,1,1,2,2,2,1,1,2,2,1,1],hl:["Manali and the Kullu valley","Spiti's cold desert and monasteries","Parvati Valley villages","Hampta Pass or Triund trek"]},
 {id:"uttarakhand",n:"Uttarakhand",k:"mountain",m:[1,1,2,2,2,1,1,1,2,2,1,1],hl:["Valley of Flowers","Chopta and Tungnath","Kedarnath shrine","Stay at The Gypsy House Kyarki"]},
 {id:"ladakh",n:"Ladakh",k:"mountain",m:[0,0,0,0,1,2,2,2,2,1,0,0],hl:["Leh and its monasteries","Khardung La and Nubra Valley","Pangong Tso","Markha Valley or Stok Kangri"]},
 {id:"kashmir",n:"Kashmir",k:"mountain",m:[1,1,2,2,2,1,2,2,2,2,1,1],hl:["Dal Lake shikara ride","Gulmarg gondola","Pahalgam and Betaab Valley","Kashmir Great Lakes trek"]},
 {id:"northeast",n:"North East",k:"mountain",m:[1,1,2,2,1,1,1,1,1,2,2,2],hl:["Gangtok and Tsomgo Lake","Meghalaya root bridges","Tawang and Sela Pass","Tea gardens and monasteries"]},
 {id:"nepal",n:"Nepal",k:"mountain",m:[0,1,2,2,2,0,0,0,2,2,2,1],hl:["Kathmandu old city","Everest Base Camp trek","Annapurna views from Pokhara","Boudhanath and Swayambhunath"]},
 {id:"bhutan",n:"Bhutan",k:"mountain",m:[1,1,2,2,2,1,1,1,2,2,2,1],hl:["Tiger's Nest hike","Thimphu and Punakha","Dochula Pass","Homestay in Paro"]},
 {id:"bali",n:"Bali",k:"beach",m:[1,1,1,2,2,2,2,2,2,2,1,1],hl:["Ubud rice terraces","Nusa Penida cliffs","Uluwatu sunset","Snorkelling and surf beaches"]},
 {id:"maldives",n:"Maldives",k:"beach",m:[2,2,2,2,1,1,1,1,1,1,2,2],hl:["Water villa stay","House reef snorkelling","Sandbank picnic","Sunset dhoni cruise"]},
 {id:"thailand",n:"Phuket & Krabi",k:"beach",m:[2,2,2,2,1,0,0,0,0,1,2,2],hl:["Phi Phi islands","Railay beach","Longtail boat hopping","Old Phuket town"]},
 {id:"andaman",n:"Andaman",k:"beach",m:[2,2,2,2,2,1,0,0,1,1,2,2],hl:["Radhanagar beach on Havelock","Snorkelling at Elephant Beach","Neil Island coast","Cellular Jail light show"]}
];
var IMG={
 "parvati": "images/parvati.jpg",
 "nainital": "images/nainital.jpg",
 "valley": "images/valley.jpg",
 "village": "images/village.jpg",
 "mist": "images/mist.jpg",
 "horse": "images/horse.jpg",
 "sheep": "images/sheep.jpg",
 "key": "images/key.jpg",
 "chandratal": "images/chandratal.jpg",
 "flowers": "images/flowers.jpg",
 "camp": "images/camp.jpg",
 "waterfall": "images/waterfall.jpg",
 "triund": "images/triund.jpg",
 "coast": "images/coast.jpg",
 "road": "images/road.jpg"
};
var IMGW={"parvati": 597, "nainital": 862, "valley": 479, "village": 399, "mist": 516, "horse": 1080, "sheep": 500, "key": 547, "chandratal": 1280, "flowers": 696, "camp": 738, "waterfall": 1192, "triund": 1080, "coast": 1800, "road": 1000};

var PIMGS={himachal:"chandratal",uttarakhand:"nainital",ladakh:"road",kashmir:"horse",northeast:"mist"},PSC={nepal:"abroad",bhutan:"snow",bali:"beach",maldives:"beach",thailand:"beach",andaman:"beach"};
function placeArt(id){var k=PIMGS[id];return k?pic(k):scene(PSC[id]||"snow")}
function ohero(sel){return '<div class="ohero"><div class="bg">'+placeArt(sel[0].id)+'</div><b>'+sel.map(function(p){return p.n}).join(" \u00B7 ")+'</b></div>'}
var ALT={coast:"Coastal sunset",road:"Ladakh highway",parvati:"Parvati Valley",nainital:"Naini Tal lake",valley:"High valley trail",village:"Terraced hill village",mist:"Misty ridge road",horse:"Kashmir meadow",sheep:"Kashmir pastures",key:"Key Monastery, Spiti",chandratal:"Chandratal, Spiti",flowers:"Alpine meadow camp",camp:"Camp above the treeline",waterfall:"Waterfall on the trail",triund:"Dhauladhar range"};
function heroPic(k){return IMGW[k]<1000?'<img class="bl" src="'+IMG[k]+'" alt=""><img class="fg" src="'+IMG[k]+'" alt="'+ALT[k]+'">':pic(k)}
function heroBg(p){var k=p.img||TIMG[p.n];return k?heroPic(k):scene(p.sc||DEST[p.r].scene)}
function pic(k){return '<img src="'+IMG[k]+'" alt="'+ALT[k]+'">'}
DEST.himachal.img="chandratal";DEST.ladakh.img="road";DEST.abroad.img="coast";DEST.uttarakhand.img="nainital";DEST.kashmir.img="horse";DEST.northeast.img="mist";
DEST.himachal.gal=["parvati","valley","key","chandratal","flowers","camp","waterfall","triund"];
DEST.uttarakhand.gal=["nainital"];
DEST.kashmir.gal=["horse","sheep"];
DEST.northeast.gal=["village","mist"];
var PIMG={"Leh, Nubra & Pangong":"road","Spiti Circuit":"key","Hampta Pass Trek":"camp","Kasol, Tosh & Kheerganga":"waterfall","McLeod Ganj & Triund":"triund"};
PK.forEach(function(p){if(PIMG[p.n])p.img=PIMG[p.n]});

var LOGO='<svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true"><path d="M4 24 12 11l4 6 3-4 9 11z" fill="#E9A21B"/></svg>';
function tg(x){return x.replace(/\*(.+?)\*/g,"<b>$1</b>")}
DEST.himachal.tg="Where the road meets *the snow*";
DEST.uttarakhand.tg="Land of gods, *peaks and meadows*";
DEST.ladakh.tg="The high desert *is calling*";
DEST.kashmir.tg="Paradise, *one lake at a time*";
DEST.northeast.tg="Mist, root bridges and *monasteries*";
DEST.abroad.tg="The world, *at walking pace*";
var SHORT={"Spiti Circuit":"Spiti","Hampta Pass Trek":"Hampta Pass","Kasol, Tosh & Kheerganga":"Kasol","McLeod Ganj & Triund":"Triund","Valley of Flowers & Hemkund":"Valley of Flowers","Chopta, Tungnath & Chandrashila":"Chopta","Kedarkantha Winter Trek":"Kedarkantha","Kedarnath Yatra":"Kedarnath","Stay at The Gypsy House Kyarki":"Kyarki","Leh, Nubra & Pangong":"Pangong","Manali to Leh Bike Expedition":"Manali to Leh","Markha Valley Trek":"Markha","Stok Kangri Summit":"Stok Kangri","Kashmir Great Lakes":"Great Lakes","Tarsar Marsar Trek":"Tarsar Marsar","Srinagar, Gulmarg & Pahalgam":"Kashmir","Sikkim: Gangtok, Nathula & Tsomgo":"Sikkim","Meghalaya: Root Bridges & Dawki":"Meghalaya","Arunachal: Tawang & Sela Pass":"Tawang","Everest Base Camp Trek, Nepal":"Everest","Bhutan: Paro, Thimphu & Tiger's Nest":"Bhutan","Bali: Ubud, Nusa Penida & Uluwatu":"Bali","Maldives Island Escape":"Maldives","Phuket & Krabi Islands":"Phuket & Krabi"};
var TIMG={"Kashmir Great Lakes":"sheep","Srinagar, Gulmarg & Pahalgam":"horse"};
var CATS=[["Treks","valley"],["Road trips","road"],["Beaches","coast"],["Culture","nainital"],["Stays","parvati"]],catSel=null;
function catOf(p){if(p.t==="Mountains")return /Trek/.test(p.n)?"Treks":"Culture";if(p.t==="Pilgrimage"||p.t==="Culture and nature"||p.t==="Valley tours")return "Culture";return p.t}
function nights(d){return d+"D \u00B7 "+(d-1)+"N"}
function bgFor(p){var k=p.img||TIMG[p.n];return k?pic(k):scene(p.sc||DEST[p.r].scene)}
function poster(bg,name,t){return '<div class="pt"><div class="bg">'+bg+'</div><div class="ov"><span class="mk">'+LOGO+' Gypsy Panda</span><b class="nm">'+name+'</b><span class="tg">'+t+'</span></div></div>'}
function bindPC(root){root.querySelectorAll(".pc").forEach(function(a){a.onclick=function(e){e.preventDefault();go(a.getAttribute("data-r"))}})}
function renderHome(){
  var c=document.getElementById("cats");
  c.innerHTML=CATS.map(function(x){return '<button class="cat" data-c="'+x[0]+'" aria-pressed="'+(catSel===x[0])+'"><span class="bg">'+(x[1]?pic(x[1]):scene(x[2]))+'</span><span class="lab">'+x[0]+'</span></button>'}).join("");
  c.querySelectorAll(".cat").forEach(function(b){b.onclick=function(){var v=b.getAttribute("data-c");catSel=catSel===v?null:v;renderHome()}});
  var list=PK.filter(function(p){return !catSel||catOf(p)===catSel});
  document.getElementById("tripsT").textContent=catSel?catSel+" ("+list.length+")":"Book these amazing trips, curated for you";
  var tr=document.getElementById("tripRail");
  tr.innerHTML=list.map(function(p){var t=p.max?"Climb to <b>"+p.max+"</b>":p.hi[0];
    return '<a class="pc" href="#'+slug(p)+'" data-r="'+slug(p)+'">'+poster(bgFor(p),SHORT[p.n]||p.n,t)+'<span class="dn">'+nights(p.d)+'</span><span class="pn">'+p.n+'</span><span class="pp">From '+fmt(p.p)+' per person</span></a>'}).join("");
  tr.scrollLeft=0;bindPC(tr);
}
function renderRegions(){
  var el=document.getElementById("regRail");
  el.innerHTML=ORDER.map(function(k){var d=DEST[k],l=PK.filter(function(p){return p.r===k}),m=Math.min.apply(null,l.map(function(p){return p.p}));
    return '<a class="pc" href="#'+k+'" data-r="'+k+'">'+poster(d.img?pic(d.img):scene(d.scene),d.name,tg(d.tg))+'<span class="dn">'+l.length+' trips</span><span class="pn">'+d.name+' Packages</span><span class="pp">From '+fmt(m)+' per person</span></a>'}).join("");
  bindPC(el);
}
document.querySelectorAll(".arr").forEach(function(b){b.onclick=function(){document.getElementById(b.getAttribute("data-rail")).scrollBy({left:+b.getAttribute("data-dir")*580,behavior:"smooth"})}});

var EX={
"Spiti Circuit":{bm:"Jun to Oct",d:"A loop through the high cold desert of Spiti. You start in Shimla's apple country, climb through Kinnaur and Tabo to Kaza, then cross Kunzum La on the way to Manali. Expect big skies, mud-brick monasteries and long drives.",days:["Shimla to Kalpa, apple country","Kalpa to Tabo, the oldest monastery","Tabo to Kaza via Dhankar","Kaza: Key monastery and Kibber village","Langza, Hikkim and Komic villages","Kaza to Chandratal camp","Chandratal to Manali over Kunzum La","Manali, departure"]},
"Hampta Pass Trek":{bm:"Jun to Sep",d:"A five-day crossing from the green Kullu valley to the dry moonscape of Lahaul. Camps at Chika and Balu Ka Ghera lead to Hampta Pass, and the trip ends with a drive to Chandratal lake.",days:["Manali to Jobra, walk to Chika","Chika to Balu Ka Ghera","Balu Ka Ghera to Shea Goru over Hampta Pass","Shea Goru to Chhatru, drive to Chandratal","Chandratal to Manali"]},
"Kasol, Tosh & Kheerganga":{bm:"Mar to Jun, Sep to Nov",d:"A gentle walk through the Parvati Valley. Stay in riverside Kasol, wander up to Tosh, then climb through pine forest to Kheerganga and its hot spring. A good first Himalayan trek.",days:["Arrive in Kasol, riverside evening","Kasol to Tosh, village walk","Tosh to Kheerganga trek","Hot spring, then down to Barshaini and Manikaran","Kasol, departure"]},
"McLeod Ganj & Triund":{bm:"Mar to Jun, Sep to Nov",d:"A short, rewarding trek above McLeod Ganj. The trail climbs through oak and rhododendron to a ridge with the Dhauladhar range right in front of you. Add Bhagsu waterfall and a monastery walk.",days:["Arrive in McLeod Ganj, Bhagsu waterfall","Trek to Triund, night in tents","Snow line at Laka Got, back to McLeod Ganj","Namgyal monastery, departure"]},
"Valley of Flowers & Hemkund":{bm:"Jul to Sep",d:"A trek into Valley of Flowers National Park, a UNESCO site that blooms in the monsoon, with a climb to Hemkund Sahib. You base yourself at Ghangaria and walk with a guide each day.",days:["Haridwar to Joshimath","Govindghat, trek to Ghangaria","Valley of Flowers day walk","Ghangaria to Hemkund Sahib and back","Trek down to Govindghat","Drive to Rishikesh, departure"]},
"Chopta, Tungnath & Chandrashila":{bm:"Mar to Jun, Sep to Nov",d:"Chopta is often called the mini Switzerland of Uttarakhand. Walk to Tungnath, one of the highest Shiva temples, then continue to Chandrashila for sunrise over Nanda Devi and Chaukhamba.",days:["Haridwar to Chopta","Trek to Tungnath","Chandrashila summit at sunrise","Deoria Tal lake walk","Drive to Rishikesh, departure"]},
"Kedarkantha Winter Trek":{bm:"Dec to Apr",d:"A winter classic. Snow-covered forest, the frozen Juda ka Talab lake and a summit at 3,800 m with a 360-degree view. Gentle enough for first-time winter trekkers.",days:["Dehradun to Sankri","Sankri to Juda ka Talab","Juda ka Talab to Kedarkantha base","Summit day, 3,800 m","Base to Hargaon","Drive to Dehradun"]},
"Kedarnath Yatra":{bm:"May to Jun, Sep to Oct",d:"A guided pilgrimage trek from Gaurikund to the Kedarnath shrine. You spend a night at the temple, then return via Guptkashi and finish with the evening aarti in Rishikesh.",days:["Haridwar to Guptkashi","Gaurikund, trek to Kedarnath","Darshan and night halt at Kedarnath","Trek down, drive to Guptkashi","Rishikesh, Ganga aarti and departure"]},
"Stay at The Gypsy House Kyarki":{bm:"All year",d:"Four slow days at our own property in Kyarki. Wake up in the hills, walk village lanes and trails, eat with your hosts, and add day trips when you feel like it.",days:["Arrive at The Gypsy House Kyarki","Village and hillside walk","Day trip around Kyarki","Slow morning, departure"]},
"Leh, Nubra & Pangong":{bm:"Jun to Sep",d:"Ladakh's classic road trip. Cross Khardung La, camp near the Hunder dunes and end the loop at Pangong Tso, a lake whose colour changes through the day.",days:["Arrive in Leh, rest and acclimatise","Leh: Shanti Stupa and old town","Leh to Nubra over Khardung La","Hunder dunes and camel ride","Nubra to Pangong via Shyok","Pangong sunrise, drive to Leh","Leh, departure"]},
"Manali to Leh Bike Expedition":{bm:"Jun to Sep",d:"The highway everyone dreams about, on two wheels. Ride over Rohtang, Baralacha La and Taglang La with a backup vehicle and mechanic behind you. Riding experience and fitness needed.",days:["Manali to Jispa over Rohtang","Jispa to Sarchu over Baralacha La","Sarchu to Leh over Taglang La","Leh rest day","Khardung La and Nubra","Nubra to Pangong","Pangong to Leh","Leh to Sarchu","Sarchu to Manali"]},
"Markha Valley Trek":{bm:"Jun to Sep",d:"A homestay trek through the Markha Valley, with high villages, monasteries and river crossings, capped by Kongmaru La at about 5,150 m. Moderate to hard, and you acclimatise in Leh first.",days:["Arrive in Leh, acclimatise","Chilling to Skiu","Skiu to Markha","Markha to Hankar","Hankar to Thachungtse","Thachungtse to Nimaling","Kongmaru La to Chokdo","Shang Sumdo, back to Leh"]},
"Stok Kangri Summit":{bm:"Jul to Sep",d:"India's most popular trekking peak. You acclimatise in Leh, camp at Base Camp, then start the summit push in the dark. Certified guides and an oxygen kit are part of the plan. A hard trip.",days:["Arrive in Leh","Acclimatisation in Leh","Stok village to Chang Ma","Chang Ma to Base Camp","Rest and skills at Base Camp","Summit day, Stok Kangri 6,153 m","Base Camp down to Stok","Back to Leh","Spare day, departure"]},
"Kashmir Great Lakes":{bm:"Jul to Sep",d:"Seven days of alpine lakes: Vishansar, Krishansar, Gadsar and Gangabal. The route crosses Gadsar Pass at about 4,200 m and passes through shepherd meadows.",days:["Srinagar to Sonamarg, trek to Shitkadi","Shitkadi to Nichnai","Nichnai to Vishansar lake","Vishansar to Gadsar over Gadsar Pass","Gadsar to Satsar","Satsar to Gangabal","Gangabal to Naranag, drive to Srinagar"]},
"Tarsar Marsar Trek":{bm:"Jul to Sep",d:"A shorter Kashmir lake trek. Walk from Aru through Lidderwat to the twin lakes of Tarsar and Marsar, past shepherd huts and open meadows.",days:["Srinagar to Aru","Aru to Lidderwat","Lidderwat to Shekwas","Shekwas to Tarsar lake","Tarsar to Sumbal over the pass","Sumbal, drive to Srinagar"]},
"Srinagar, Gulmarg & Pahalgam":{bm:"Apr to Oct",d:"An easy valley trip. A shikara ride on Dal Lake, Mughal gardens, the gondola in Gulmarg and the meadows of Pahalgam, with comfortable stays throughout.",days:["Arrive in Srinagar, Dal Lake shikara","Mughal gardens and old city","Srinagar to Gulmarg, gondola ride","Gulmarg free day","Gulmarg to Pahalgam","Betaab and Aru valleys, back to Srinagar"]},
"Sikkim: Gangtok, Nathula & Tsomgo":{bm:"Mar to May, Oct to Dec",d:"Monasteries, mountain lakes and tea gardens. Visit Gangtok, Tsomgo Lake and, when the permit allows, Nathula, then head west to Pelling for Kanchenjunga views.",days:["Bagdogra to Gangtok","Gangtok: Rumtek and Enchey monasteries","Tsomgo Lake, Baba Mandir and Nathula (permit)","Gangtok to Pelling","Pelling: Pemayangtse monastery","Drive to Bagdogra, departure"]},
"Meghalaya: Root Bridges & Dawki":{bm:"Oct to Apr",d:"Living root bridges, clear rivers and waterfalls in one of the wettest parts of India. Walk to the double-decker bridge near Cherrapunji and take a boat on the Umngot at Dawki.",days:["Guwahati to Shillong","Shillong to Cherrapunji","Double-decker root bridge trek","Dawki and Umngot river boat","Mawlynnong and Riwai root bridge","Back to Guwahati, departure"]},
"Arunachal: Tawang & Sela Pass":{bm:"Mar to Jun, Sep to Oct",d:"A long road trip to the edge of Arunachal. Cross Sela Pass at about 4,170 m, visit Tawang Monastery and stop at high lakes. We arrange the Inner Line Permit.",days:["Guwahati to Bomdila","Bomdila to Dirang","Dirang to Tawang over Sela Pass","Tawang Monastery and war memorial","Madhuri Lake and high viewpoints","Tawang to Dirang","Dirang to Bhalukpong","Guwahati, departure"]},
"Everest Base Camp Trek, Nepal":{bm:"Mar to May, Oct to Nov",d:"The classic Everest trek from Lukla to Base Camp at 5,364 m. Rest days at Namche and Dingboche build acclimatisation. It is a hard trip that needs good fitness.",days:["Fly to Lukla, walk to Phakding","Phakding to Namche Bazaar","Rest day in Namche","Namche to Tengboche","Tengboche to Dingboche","Rest day in Dingboche","Dingboche to Lobuche","Gorak Shep and Everest Base Camp","Down to Pheriche","Pheriche to Namche","Namche to Lukla","Fly to Kathmandu"]},
"Bhutan: Paro, Thimphu & Tiger's Nest":{bm:"Mar to May, Sep to Nov",d:"A gentle introduction to Bhutan. Paro, Thimphu and Punakha, with a hike to Tiger's Nest, the monastery on a cliff above Paro.",days:["Arrive in Paro","Paro to Thimphu","Thimphu sightseeing","Hike to Tiger's Nest","Thimphu to Punakha via Dochula Pass","Punakha to Paro, departure"]},
"Bali: Ubud, Nusa Penida & Uluwatu":{bm:"Apr to Oct",d:"Rice terraces and temples in Ubud, cliffs on Nusa Penida and sunset at Uluwatu. A mix of culture and beaches.",days:["Arrive in Denpasar, transfer to Ubud","Ubud rice terraces and temples","Ubud to Nusa Penida","Kelingking cliff and Crystal Bay","Nusa Penida to Uluwatu","Uluwatu sunset, departure"]},
"Maldives Island Escape":{bm:"Nov to Apr",d:"Five days of lagoon, reef and sandbank. Swim, snorkel and do very little on an island resort.",days:["Arrive in Male, transfer to the island","Snorkel the house reef","Sandbank picnic","Sunset dhoni cruise","Slow morning, departure"]},
"Phuket & Krabi Islands":{bm:"Nov to Apr",d:"Island hopping on the Andaman coast. Phi Phi, Railay beach and longtail boat tours, with time in Phuket Old Town.",days:["Arrive in Phuket, Old Town","Phi Phi islands day trip","Ferry to Krabi","Railay beach","Four islands longtail tour","Departure"]}
};
var TPICS={"Spiti Circuit":["chandratal"],"Hampta Pass Trek":["flowers"],"Kasol, Tosh & Kheerganga":["parvati"]};
DEST.himachal.feat=[
 {img:"chandratal",tag:"Chandratal",eb:"Spiti Valley",h:"Spiti, the cold desert",tx:"Dry mountains, mud-brick monasteries and lakes so still they mirror the peaks. Spiti is Himachal at its most remote.",trip:"Spiti Circuit"},
 {img:"parvati",tag:"Parvati Valley",eb:"Kullu district",h:"Parvati Valley",tx:"Pine forests, a loud green river and villages like Kasol and Tosh. Easy walks by day, cafes and campfires by night.",trip:"Kasol, Tosh & Kheerganga"},
 {img:"triund",tag:"Dhauladhar range",eb:"Kangra valley",h:"McLeod Ganj and Triund",tx:"A Tibetan-flavoured hill town with a short trail to a ridge that faces the snow peaks.",trip:"McLeod Ganj & Triund"},
 {img:"flowers",tag:"High meadows",eb:"Lahaul and Kullu",h:"Meadows and passes",tx:"Wildflower valleys, tented camps and a pass that takes you from green forest to a dry moonscape in one day.",trip:"Hampta Pass Trek"}];
DEST.uttarakhand.feat=[
 {img:"nainital",tag:"Naini Tal",eb:"Kumaon",h:"Naini Tal and the lakes",tx:"A lake town ringed by forested hills, with boats on the water and viewpoints above. A gentle start to Uttarakhand."},
 {sc:"green",tag:"Valley of Flowers",eb:"Garhwal",h:"Valley of Flowers",tx:"A UNESCO valley of meadows that bloom through the monsoon, with the Hemkund Sahib climb close by.",trip:"Valley of Flowers & Hemkund"},
 {sc:"snow",tag:"Kedarnath",eb:"Char Dham",h:"Kedarnath and the temple trails",tx:"A pilgrim trail to one of the holiest Shiva shrines, set among snow peaks at 3,583 m.",trip:"Kedarnath Yatra"}];
DEST.ladakh.feat=[
 {sc:"desert",tag:"Pangong Tso",eb:"Eastern Ladakh",h:"Pangong and Nubra",tx:"A blue lake at 4,350 m, sand dunes with double-humped camels and the road over Khardung La.",trip:"Leh, Nubra & Pangong"},
 {sc:"desert",tag:"Markha Valley",eb:"Zanskar range",h:"Markha and Stok Kangri",tx:"Homestay treks through high villages, and a 6,153 m summit for those who want a real climb.",trip:"Markha Valley Trek"},
 {img:"road",tag:"Ladakh highway",eb:"The highway",h:"The Manali to Leh road",tx:"Some of the highest motorable passes in the world, and a landscape that changes every hour.",trip:"Manali to Leh Bike Expedition"}];
DEST.kashmir.feat=[
 {img:"horse",tag:"Sonamarg",eb:"Sindh valley",h:"Sonamarg meadows",tx:"Green pastures under snow peaks, ponies grazing between rocks and rivers running clear and cold.",trip:"Kashmir Great Lakes"},
 {img:"sheep",tag:"Alpine pastures",eb:"Shepherd country",h:"Meadows above the tree line",tx:"Flocks on open slopes with glaciers above. Lake treks pass right through these pastures.",trip:"Tarsar Marsar Trek"},
 {sc:"lake",tag:"Dal Lake",eb:"Srinagar",h:"Dal Lake at dawn",tx:"Shikaras on still water, Mughal gardens and the old city, with Gulmarg and Pahalgam close by.",trip:"Srinagar, Gulmarg & Pahalgam"}];
DEST.northeast.feat=[
 {img:"mist",tag:"Misty ridges",eb:"Hill states",h:"Above the clouds",tx:"Winding hill roads, villages on ridge lines and mornings when the valley fills with mist."},
 {img:"village",tag:"Hill village",eb:"Meghalaya",h:"Root bridges and river villages",tx:"Walk across living bridges, swim in clear rivers and stay in villages that see few visitors.",trip:"Meghalaya: Root Bridges & Dawki"},
 {sc:"ne",tag:"Tawang",eb:"Arunachal",h:"Tawang and Sela Pass",tx:"A high pass, a big monastery and a long road to the edge of India.",trip:"Arunachal: Tawang & Sela Pass"}];
DEST.abroad.feat=[
 {sc:"abroad",tag:"Everest",eb:"Nepal",h:"Everest Base Camp",tx:"Twelve days from Lukla to the foot of the highest mountain on earth, with rest days built in.",trip:"Everest Base Camp Trek, Nepal"},
 {sc:"snow",tag:"Tiger's Nest",eb:"Bhutan",h:"Bhutan's cliff monastery",tx:"Prayer flags, dzongs and a hike to a monastery on a cliff above Paro.",trip:"Bhutan: Paro, Thimphu & Tiger's Nest"},
 {sc:"beach",tag:"Bali",eb:"Indonesia",h:"Bali, Nusa Penida and Uluwatu",tx:"Rice terraces, cliff-top temples and sunsets over the sea.",trip:"Bali: Ubud, Nusa Penida & Uluwatu"},
 {img:"coast",tag:"Coastal sunset",eb:"Maldives and Thailand",h:"Beaches for a slow week",tx:"Clear lagoons, longtail boats and nothing on the schedule.",trip:"Maldives Island Escape"}];
function slug(p){return "trip-"+(SHORT[p.n]||p.n).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function renderTrip(p){
  var d=DEST[p.r],ex=EX[p.n]||{},nm=SHORT[p.n]||p.n,t=p.max?"Climb to *"+p.max+"*":p.hi[0];
  document.getElementById("crumbs").innerHTML='<a href="#destinations">All destinations</a> / <a href="#'+p.r+'">'+d.name+'</a> / '+p.n;
  document.getElementById("thero").innerHTML='<div class="rhero"><div class="bg">'+heroBg(p)+'</div><div class="ov"><span class="mk">'+LOGO+' Gypsy Panda \u00B7 '+d.name+'</span><h3>'+nm+'</h3><p class="tg">'+tg(t)+'</p><div class="tchips"><span>'+nights(p.d)+'</span><span>'+p.lvl+'</span>'+(p.max?'<span>Up to '+p.max+'</span>':'')+'</div></div></div>';
  var days=ex.days||[];
  var pics=(TPICS[p.n]||[]).map(function(k){return '<figure style="max-width:'+IMGW[k]+'px">'+pic(k)+'<figcaption>'+ALT[k]+'</figcaption></figure>'}).join("");
  document.getElementById("tmain").innerHTML='<h3 class="sub" style="margin-top:0">About this trip</h3><p class="tdesc">'+(ex.d||d.desc)+'</p>'
   +'<h3 class="sub">Highlights</h3><ul class="hl">'+p.hi.map(function(h){return "<li>"+h+"</li>"}).join("")+'</ul>'
   +(pics?'<h3 class="sub">Along the way</h3><div class="pics">'+pics+'</div>':'');
  document.getElementById("tside").innerHTML='<div><span class="pp">From</span><div class="big">'+fmt(p.p)+' <small>per person</small></div></div>'
   +'<dl class="tf"><div><dt>Duration</dt><dd>'+nights(p.d)+'</dd></div><div><dt>Difficulty</dt><dd>'+p.lvl+'</dd></div>'+(p.max?'<div><dt>Highest point</dt><dd>'+p.max+'</dd></div>':'')+'<div><dt>Best time</dt><dd>'+(ex.bm||d.best)+'</dd></div><div><dt>Region</dt><dd>'+d.name+'</dd></div></dl>'
   +(p.prof?'<div>'+profSvg(p.prof,p.peak)+'</div>':'')
   +'<button class="btn" id="tEnq">Enquire about this trip</button><a class="btn ghost" href="#custom">Customise this trip</a>';
  document.getElementById("tEnq").onclick=function(){pick(p.n)};
}
var cur="himachal",flt="All";
function fmt(n){return "₹"+n.toLocaleString("en-IN")}

/* ---------- packages ---------- */
function profSvg(a,peak){
  var W=300,H=96,pl=6,pr=6,pt=22,pb=16,mn=Math.min.apply(null,a),mx=Math.max.apply(null,a),rg=Math.max(mx-mn,1);
  var pts=a.map(function(v,i){return [pl+i*(W-pl-pr)/(a.length-1),pt+(H-pt-pb)*(1-(v-mn)/rg)]});
  var line=pts.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)}).join(" ");
  var area=line+" L"+pts[pts.length-1][0]+" "+(H-pb)+" L"+pts[0][0]+" "+(H-pb)+"Z";
  var pi=a.indexOf(mx),pp=pts[pi],anchor=pi<a.length/2?"start":"end",tx=pi<a.length/2?pp[0]+8:pp[0]-8;
  var dots=pts.map(function(p){return '<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="2.2" fill="var(--pine)"/>'}).join("");
  return '<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Altitude by day, peaking at '+mx.toLocaleString("en-IN")+' metres at '+peak+'">'
   +'<path d="'+area+'" fill="var(--pine)" opacity=".18"/><path d="'+line+'" fill="none" stroke="var(--pine)" stroke-width="2" stroke-linejoin="round"/>'+dots
   +'<circle cx="'+pp[0].toFixed(1)+'" cy="'+pp[1].toFixed(1)+'" r="4.5" fill="var(--flag)" stroke="var(--ink)" stroke-width="1.2"/>'
   +'<text x="'+tx.toFixed(1)+'" y="'+(pp[1]+4).toFixed(1)+'" text-anchor="'+anchor+'" font-family="DM Mono,monospace" font-size="11" fill="var(--ink)">'+mx.toLocaleString("en-IN")+' m</text>'
   +'<text x="'+pl+'" y="'+(H-3)+'" font-family="DM Mono,monospace" font-size="10" fill="var(--muted)">Day 1</text>'
   +'<text x="'+(W-pr)+'" y="'+(H-3)+'" text-anchor="end" font-family="DM Mono,monospace" font-size="10" fill="var(--muted)">Day '+a.length+'</text></svg>';
}
function renderPicker(){
  var el=document.getElementById("picker");
  el.innerHTML=ORDER.map(function(k){var d=DEST[k],n=PK.filter(function(p){return p.r===k}).length,ph=d.gal?d.gal.length:0;
    return '<button class="dest" data-k="'+k+'"><span class="th">'+(d.img?pic(d.img):scene(d.scene))+'</span><span class="n">'+d.name+'<small>'+d.sub+'</small><small class="cnt">'+n+' trips'+(ph?' \u00B7 '+ph+' photos':'')+' \u2192</small></span></button>'}).join("");
  el.querySelectorAll(".dest").forEach(function(b){b.onclick=function(){go(b.getAttribute("data-k"))}});
}
function renderDest(){
  var d=DEST[cur];
  document.getElementById("banner").innerHTML='<div class="rhero"><div class="bg">'+(d.img?heroPic(d.img):scene(d.scene))+'</div><div class="ov"><span class="mk">'+LOGO+' Gypsy Panda</span><h3>'+d.name+'</h3><p class="tg">'+tg(d.tg)+'</p></div></div><div class="rinfo"><p>'+d.desc+'</p><div class="facts"><div>Base<b>'+d.base+'</b></div><div>Best time<b>'+d.best+'</b></div><div>Highest point<b>'+d.high+'</b></div></div></div>';
  var f=document.getElementById("filters");
  f.innerHTML=d.filters.map(function(x){return '<button class="chipbtn" aria-pressed="'+(x===flt)+'">'+x+'</button>'}).join("");
  f.querySelectorAll(".chipbtn").forEach(function(b){b.onclick=function(){flt=b.textContent;renderDest()}});
  var list=PK.filter(function(p){return p.r===cur&&(flt==="All"||p.t===flt)});
  document.getElementById("rctaT").textContent="Ready for "+d.name+"?";
  document.getElementById("gridTitle").textContent=(flt==="All"?"All trips":flt)+" in "+d.name+" ("+list.length+")";
  var g=document.getElementById("grid");
  g.innerHTML=list.length?list.map(function(p){
    var top=(p.img?'<div class="photo">'+pic(p.img)+'</div>':'')+(p.prof?'<div class="prof'+(p.img?' under':'')+'">'+profSvg(p.prof,p.peak)+'</div>':(p.img?'':'<div class="thumb">'+scene(p.sc||"green")+'</div>'));
    return '<article class="card'+(p.stay?" stay":"")+'" data-s="'+slug(p)+'">'+top+'<div class="body">'
     +(p.stay?'<span class="badge">Our property</span>':'')
     +'<h3>'+p.n+'</h3><div class="meta"><span class="chip">'+p.d+' days</span><span class="chip'+(p.lvl==="Hard"?" hard":"")+'">'+p.lvl+'</span>'+(p.max?'<span class="chip">Up to '+p.max+'</span>':'')+'<span class="chip">'+p.t+'</span></div>'
     +'<ul>'+p.hi.map(function(h){return "<li>"+h+"</li>"}).join("")+'</ul><span class="more">View trip details \u2192</span>'
     +'<div class="foot"><div class="price"><small>From</small><b>'+fmt(p.p)+'</b> <i>/ person</i></div><button class="enq" data-n="'+p.n.replace(/"/g,"&quot;")+'">Enquire</button></div></div></article>';
  }).join(""):'<p class="empty">No trips in this group yet. Use the custom trip builder below and we will design one.</p>';
  g.querySelectorAll(".card").forEach(function(c){c.onclick=function(e){if(e.target.closest(".enq"))return;go(c.getAttribute("data-s"))}});
  g.querySelectorAll(".enq").forEach(function(b){b.onclick=function(){pick(b.getAttribute("data-n"))}});
  var gw=document.getElementById("galwrap");
  gw.innerHTML=d.feat?'<h3 class="sub">Places you will love in '+d.name+'</h3><div class="feats">'+d.feat.map(function(f){var tp=f.trip?PK.filter(function(p){return p.n===f.trip})[0]:null;return '<div class="feat"><div class="fimg">'+(f.img?pic(f.img):scene(f.sc))+'<span class="ftag">'+f.tag+'</span></div><div class="ftxt"><p class="eyebrow">'+f.eb+'</p><h4>'+f.h+'</h4><p>'+f.tx+'</p>'+(tp?'<a class="flink" href="#'+slug(tp)+'" data-s="'+slug(tp)+'">See the '+(SHORT[tp.n]||tp.n)+' trip \u2192</a>':'')+'</div></div>'}).join("")+'</div>':"";
  gw.querySelectorAll(".flink").forEach(function(a){a.onclick=function(e){e.preventDefault();go(a.getAttribute("data-s"))}});
}
document.getElementById("lb").onclick=function(){this.classList.remove("on")};
document.addEventListener("keydown",function(e){if(e.key==="Escape")document.getElementById("lb").classList.remove("on")});

/* ---------- custom trip builder ---------- */
var B={style:"mountain",places:["himachal"],days:7,pace:"Balanced"};
function renderStyles(){
  var S=[["mountain","Mountains","snow","chandratal"],["beach","Beaches","beach","coast"],["both","Both","abroad","road"]];
  var el=document.getElementById("styles");
  el.innerHTML=S.map(function(s){return '<button class="style" data-s="'+s[0]+'" aria-pressed="'+(B.style===s[0])+'"><span class="th">'+(s[0]==="both"?'<span class="half" style="left:0">'+pic("chandratal")+'</span><span class="half" style="right:0">'+pic("coast")+'</span>':(s[3]?pic(s[3]):scene(s[2])))+'</span><span class="l">'+s[1]+'</span></button>'}).join("");
  el.querySelectorAll(".style").forEach(function(b){b.onclick=function(){B.style=b.getAttribute("data-s");
    B.places=B.places.filter(function(id){var p=PLACES.filter(function(x){return x.id===id})[0];return B.style==="both"||p.k===B.style});
    if(!B.places.length){var f=PLACES.filter(function(x){return B.style==="both"||x.k===B.style})[0];B.places=[f.id]}
    renderStyles();renderPlaces();renderOutline()}});
}
function renderPlaces(){
  var el=document.getElementById("places");
  el.innerHTML=PLACES.filter(function(p){return B.style==="both"||p.k===B.style}).map(function(p){return '<button class="pcard" data-id="'+p.id+'" aria-pressed="'+(B.places.indexOf(p.id)>-1)+'"><span class="pi">'+placeArt(p.id)+'</span><span class="pn2">'+p.n+'</span><span class="ck">\u2713</span></button>'}).join("");
  el.querySelectorAll(".pcard").forEach(function(b){b.onclick=function(){var id=b.getAttribute("data-id"),i=B.places.indexOf(id);if(i>-1)B.places.splice(i,1);else B.places.push(id);renderPlaces();renderOutline()}});
}
var outlineText="";
function renderOutline(){
  var mi=+document.getElementById("cmon").value,pax=document.getElementById("cpax").value||1,bud=document.getElementById("cbud").value;
  B.days=+document.getElementById("days").value;B.pace=document.getElementById("cpace").value;
  document.getElementById("dayout").textContent=B.days+" days";
  var el=document.getElementById("outline"),sel=B.places.map(function(id){return PLACES.filter(function(p){return p.id===id})[0]});
  if(!sel.length){el.innerHTML='<h3>Your outline</h3><p class="sum">Pick at least one place to see a day-by-day outline.</p>';outlineText="";return}
  var n=sel.length,base=Math.floor(B.days/n),extra=B.days%n,day=1,txt="Custom trip: "+B.days+" days, "+MON[mi]+", "+pax+" traveller(s), "+B.pace+" pace, budget "+bud+"\n",html="";
  var hc=B.pace==="Relaxed"?2:B.pace==="Balanced"?3:4;
  sel.forEach(function(p,i){
    var len=base+(i<extra?1:0),a=day,b=day+len-1;day=b+1;
    var lab=len===1?"Day "+a:"Days "+a+" to "+b,s=p.m[mi],cls=s===2?"best":s===1?"mid":"no",st=s===2?"Good month for "+p.n:s===1?"Possible in "+MON[mi]+", expect weather":"Not advised in "+MON[mi];
    var h=p.hl.slice(0,hc);
    html+='<div class="leg"><div class="d">'+lab+'</div><div><b>'+p.n+'</b><ul>'+h.map(function(x){return "<li>"+x+"</li>"}).join("")+'</ul><span class="st '+cls+'">'+st+'</span></div></div>';
    txt+="\n"+lab+": "+p.n+" ("+st+")\n - "+h.join("\n - ")+"\n";
  });
  var warn=(base<2)?'<p class="sum">Tip: '+n+' places in '+B.days+' days means a lot of travel time. Fewer places or more days makes for an easier trip.</p>':'';
  el.innerHTML=ohero(sel)+'<h3>Your outline</h3><p class="sum">'+B.days+' days · '+MON[mi]+' · '+pax+' traveller'+(pax>1?"s":"")+' · '+B.pace+' pace · '+bud+'</p>'+html+warn+'<button class="btn" id="sendOut">Send this outline to my enquiry</button>';
  document.getElementById("sendOut").onclick=function(){
    outlineText=txt;
    document.getElementById("pkg").value="Custom itinerary";
    document.getElementById("msg").value=txt;
    document.getElementById("mon").value=MON[mi];
    document.getElementById("pax").value=pax;
    document.getElementById("enquire").scrollIntoView({behavior:"smooth"});
  };
}

/* ---------- season, form ---------- */
function renderSeason(){
  var h='<div></div>'+MON.map(function(m){return '<div class="m">'+m+'</div>'}).join("");
  PLACES.forEach(function(r){h+='<div class="r">'+r.n+'</div>'+r.m.map(function(v){return '<div class="c'+(v===2?" on":v===1?" mid":"")+'"></div>'}).join("")});
  document.getElementById("seasonGrid").innerHTML=h;
}
function fillForm(){
  document.getElementById("pkg").innerHTML='<option>Not sure yet, suggest something</option><option>Custom itinerary</option>'+PK.map(function(p){return "<option>"+p.n+"</option>"}).join("");
  var mo=MON.map(function(m,i){return '<option value="'+i+'">'+m+'</option>'}).join("");
  document.getElementById("cmon").innerHTML=mo;document.getElementById("cmon").value="5";
  document.getElementById("mon").innerHTML=MON.map(function(m){return "<option>"+m+"</option>"}).join("");document.getElementById("mon").value="Jun";
}
function go(h){try{location.hash=h}catch(e){}route()}
function route(){
  var h=(location.hash||"").slice(1),home=document.getElementById("home"),reg=document.getElementById("region"),tr=document.getElementById("trip");
  var tp=h.indexOf("trip-")===0?PK.filter(function(p){return slug(p)===h})[0]:null;
  if(tp){renderTrip(tp);home.hidden=true;reg.hidden=true;tr.hidden=false;window.scrollTo(0,0);return}
  tr.hidden=true;
  if(DEST[h]){cur=h;flt="All";renderDest();home.hidden=true;reg.hidden=false;window.scrollTo(0,0);return}
  reg.hidden=true;home.hidden=false;
  var t=h&&document.getElementById(h);
  setTimeout(function(){if(t)t.scrollIntoView({behavior:"smooth"});else window.scrollTo(0,0)},30);
}
function pick(n){document.getElementById("pkg").value=n;go("enquire")}
document.querySelector("[data-pick]").addEventListener("click",function(){document.getElementById("pkg").value=this.getAttribute("data-pick")});
["days","cmon","cpax","cpace","cbud"].forEach(function(i){document.getElementById(i).addEventListener("input",renderOutline)});
function enquiryData(){var g=function(i){return document.getElementById(i).value.trim()};return {name:g("nm"),contact:g("ct"),trip:g("pkg"),month:g("mon"),pax:g("pax"),notes:g("msg")}}
function enquiryText(d){return "Hello Gypsy Panda Adventures,\n\nI'd like to plan: "+d.trip+"\nTravelling in: "+d.month+"\nGroup size: "+d.pax+"\nName: "+(d.name||"-")+"\nContact: "+(d.contact||"-")+"\nNotes: "+(d.notes||"-")}
function say(msg,ok){var o=document.getElementById("out");o.textContent=msg;o.classList.add("show");o.style.borderColor=ok?"":"#c0392b"}
function logToSheet(d){
  if(!CONFIG.sheetUrl)return;
  try{fetch(CONFIG.sheetUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(Object.assign({source:location.href.split("#")[0]},d))}).catch(function(){})}catch(e){}
}
function openLink(url,newTab){var a=document.createElement("a");a.href=url;if(newTab){a.target="_blank";a.rel="noopener"}document.body.appendChild(a);a.click();a.remove()}
function send(via){
  if(document.getElementById("hp").value)return;
  var d=enquiryData();
  if(!d.name||!d.contact){say("Please add your name and a phone number or email so we can reply.",false);return}
  var text=enquiryText(d);
  logToSheet(d);
  if(via==="wa"){openLink("https://wa.me/"+String(CONFIG.whatsapp).replace(/\D/g,"")+"?text="+encodeURIComponent(text),true);say("Opening WhatsApp. Press send there to finish.\n\n"+text,true)}
  else{openLink("mailto:"+CONFIG.email+"?subject="+encodeURIComponent("Trip enquiry: "+d.trip)+"&body="+encodeURIComponent(text),false);say("Opening your email app. Press send there to finish.\n\n"+text,true)}
}
document.getElementById("form").addEventListener("submit",function(e){e.preventDefault();send("wa")});
document.getElementById("sendWa").addEventListener("click",function(){send("wa")});
document.getElementById("sendMail").addEventListener("click",function(){send("mail")});
document.getElementById("copy").addEventListener("click",function(){
  var b=this,text=enquiryText(enquiryData());
  function done(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy enquiry"},1800)}
  function sel(){say(text,true);var r=document.createRange();r.selectNodeContents(document.getElementById("out"));var x=getSelection();x.removeAllRanges();x.addRange(r);b.textContent="Selected, press copy"}
  try{navigator.clipboard.writeText(text).then(done,sel)}catch(x){sel()}
});
fillForm();renderHome();renderRegions();renderStyles();renderPlaces();renderOutline();renderSeason();window.addEventListener("hashchange",route);route();

/* =====================================================================================================
   ALL THE WEBSITE'S TEXT AND NUMBERS LIVE IN THIS ONE FILE.
   Every text has two languages: { en: "English", ar: "عربي" }.
   To change something on the site, change it here and upload this file again.
   The numbers come from the game's own modules in Studio on 2026-11-09 (MatchSettings, GameModes, WeaponStats,
   WeaponClasses, Attachments, WeaponSkins, Perks, FieldUpgradeSettings, KillstreakSettings, LethalSettings,
   TacticalSettings, ExplosiveSettings, PlayerLevels, Cash, CareerSettings, MovementSettings, HealthSettings,
   SettingsList).
   1 stud = 0.28 m (the same rule the game uses for its ping distances).
   ===================================================================================================== */

window.SITE = {
  // ---- LINKS: fill these in. An empty link is hidden on the site. -----------------------------------
  links: {
    roblox: "https://www.roblox.com/games/94942221628227",
    youtube: "",   // e.g. "https://www.youtube.com/@yourchannel"
    tiktok: "",    // e.g. "https://www.tiktok.com/@yourname"
    discord: "",   // e.g. "https://discord.gg/xxxx"
  },
  // The YouTube video id of the trailer (the part after "watch?v="). Empty = "coming soon" card.
  trailerYouTubeId: "",

  name: { en: "Bullet of Mercy", ar: "رصاصة الرحمة" },
  status: { en: "BETA", ar: "نسخة تجريبية" },
};

/* ---- Small words used around the page --------------------------------------------------------------- */
window.UI = {
  en: {
    navModes: "Modes", navMaps: "Maps", navArsenal: "Arsenal", navGear: "Gear", navClasses: "Classes",
    navProgress: "Progress", navControls: "Controls", navUpdates: "Updates", navFaq: "FAQ",
    play: "Play on Roblox", watch: "Watch the trailer", langSwitch: "عربي", menu: "Menu", skip: "Skip to content",
    heroTag: "One bullet is enough.",
    heroText: "A tactical shooter on Roblox. Five game modes, four maps, nine weapons, grenades that break walls, and a rank to climb from 1 to 55. Play every gun, or vote for snipers only.",
    trailerSoon: "The trailer is coming soon.",
    trailerSoonSub: "Real gameplay from the game.",
    statsTitle: "Numbers", oneShot: "One-shot kill", twoShot: "Two shots",
    zoneHead: "Head", zoneChest: "Chest", zoneStomach: "Stomach", zoneThigh: "Thighs", zoneUpperArm: "Upper arms", zoneLowerLimbs: "Forearms, hands, shins, feet",
    damageTitle: "Damage by body part (100 health)",
    stDamage: "Damage", stRate: "Fire rate", stRange: "Range", stMobility: "Mobility", stAim: "Aim speed", stMag: "Magazine", stReload: "Reload",
    rpm: "RPM", pellets: "pellets",
    unlockAt: "Unlocks at level", free: "Free from the start", level: "Level",
    slot: "Slot", effect: "What it does", unlock: "Gun level", fits: "Fits",
    charge: "Charge", lasts: "Lasts",
    key: "Key", action: "Action", tip: "Tip", setting: "Setting", default: "Default",
    day: "Day", cash: "cash", xp: "XP",
    footerNote: "Bullet of Mercy is a Roblox game in beta. Everything on this page is taken from the game itself and can change in updates.",
    footerRoblox: "Not made or endorsed by Roblox Corporation.",
    backTop: "Back to top", soon: "Soon",
  },
  ar: {
    navModes: "الأطوار", navMaps: "الخرائط", navArsenal: "الأسلحة", navGear: "العتاد", navClasses: "الفئات",
    navProgress: "التقدّم", navControls: "التحكم", navUpdates: "التحديثات", navFaq: "أسئلة",
    play: "العب على Roblox", watch: "شاهد الإعلان", langSwitch: "EN", menu: "القائمة", skip: "انتقل إلى المحتوى",
    heroTag: "رصاصة واحدة تكفي.",
    heroText: "لعبة تصويب تكتيكية على Roblox. خمسة أطوار لعب، أربع خرائط، تسعة أسلحة، قنابل تهدم الجدران، ورتبة تصعدها من 1 إلى 55. العب بكل الأسلحة، أو صوّت للقناصات فقط.",
    trailerSoon: "الإعلان قادم قريبًا.",
    trailerSoonSub: "لقطات حقيقية من داخل اللعبة.",
    statsTitle: "الأرقام", oneShot: "قتل بطلقة واحدة", twoShot: "طلقتان",
    zoneHead: "الرأس", zoneChest: "الصدر", zoneStomach: "البطن", zoneThigh: "الفخذ", zoneUpperArm: "أعلى الذراع", zoneLowerLimbs: "الساعد واليد والساق والقدم",
    damageTitle: "الضرر حسب مكان الإصابة (الصحة 100)",
    stDamage: "الضرر", stRate: "سرعة الإطلاق", stRange: "المدى", stMobility: "خفة الحركة", stAim: "سرعة التصويب", stMag: "المخزن", stReload: "التعبئة",
    rpm: "RPM", pellets: "شظايا",
    unlockAt: "يُفتح عند المستوى", free: "متاح من البداية", level: "المستوى",
    slot: "الخانة", effect: "ماذا يفعل", unlock: "مستوى السلاح", fits: "يركب على",
    charge: "الشحن", lasts: "المدة",
    key: "الزر", action: "الفعل", tip: "نصيحة", setting: "الإعداد", default: "الافتراضي",
    day: "اليوم", cash: "كاش", xp: "خبرة",
    footerNote: "رصاصة الرحمة لعبة على Roblox في مرحلة تجريبية. كل ما في هذه الصفحة مأخوذ من اللعبة نفسها وقد يتغير مع التحديثات.",
    footerRoblox: "هذا الموقع ليس من Roblox Corporation ولا تتبناه.",
    backTop: "إلى الأعلى", soon: "قريبًا",
  },
};

/* ---- Sections ---------------------------------------------------------------------------------------- */
window.CONTENT = {

  heroFacts: [
    { n: "5", t: { en: "game modes", ar: "أطوار لعب" } },
    { n: "4", t: { en: "maps", ar: "خرائط" } },
    { n: "9", t: { en: "weapons", ar: "أسلحة" } },
    { n: "6v6", t: { en: "players", ar: "لاعبين" } },
    { n: "55", t: { en: "player levels", ar: "مستوى للاعب" } },
  ],

  /* GAME MODES ----------------------------------------------------------------------------------------- */
  modes: {
    kicker: { en: "Game modes", ar: "أطوار اللعب" },
    title: { en: "Five ways to fight", ar: "خمسة أطوار للقتال" },
    intro: {
      en: "Between matches everyone votes three times: the map, the mode, and the weapons. Every mode works on every map.",
      ar: "بين كل مباراة وأخرى يصوّت الجميع ثلاث مرات: على الخريطة، وعلى الطور، وعلى الأسلحة. وكل طور يعمل على كل الخرائط.",
    },
    list: [
      { short: "S&D", name: "SEARCH & DESTROY", ar: "البحث والتدمير",
        tag: { en: "One life · plant the bomb", ar: "حياة واحدة · ازرع القنبلة" },
        d: { en: "Attackers plant the bomb on site A or B, defenders stop them or defuse it. One life a round, no respawns. First team to 6 rounds wins.", ar: "المهاجمون يزرعون القنبلة في الموقع A أو B، والمدافعون يمنعونهم أو يفككونها. حياة واحدة في الجولة بدون عودة. أول فريق يفوز بـ 6 جولات يربح." },
        facts: [{ en: "6 rounds to win", ar: "6 جولات للفوز" }, { en: "2:00 a round", ar: "دقيقتان للجولة" }, { en: "No respawn", ar: "بدون عودة" }] },
      { short: "TDM", name: "TEAM DEATHMATCH", ar: "ديثماتش الفرق",
        tag: { en: "Respawn · most kills", ar: "عودة للحياة · أكثر قتلات" },
        d: { en: "Two teams, endless respawns. Every kill is a point for your team. First team to 50 kills wins.", ar: "فريقان وعودة للحياة بلا حدود. كل قتلة نقطة لفريقك. أول فريق يصل إلى 50 قتلة يفوز." },
        facts: [{ en: "50 kills", ar: "50 قتلة" }, { en: "10 min", ar: "10 دقائق" }, { en: "Back in 3 s", ar: "تعود بعد 3 ثوانٍ" }] },
      { short: "FFA", name: "FREE FOR ALL", ar: "الكل ضد الكل",
        tag: { en: "Everyone is an enemy", ar: "الكل أعداء" },
        d: { en: "No teams, up to 12 players. Trust nobody. First player to 25 kills wins.", ar: "بدون فرق، حتى 12 لاعبًا. لا تثق بأحد. أول لاعب يصل إلى 25 قتلة يفوز." },
        facts: [{ en: "25 kills", ar: "25 قتلة" }, { en: "10 min", ar: "10 دقائق" }, { en: "Up to 12", ar: "حتى 12 لاعبًا" }] },
      { short: "DOM", name: "DOMINATION", ar: "السيطرة",
        tag: { en: "Hold the flags A · B · C", ar: "امسك الأعلام A · B · C" },
        d: { en: "Three flags on the map. Stand on a flag for 5 s to take it. Every flag you hold gives points over time. Halftime at 100. First team to 200 wins.", ar: "ثلاثة أعلام في الخريطة. قف على العلم 5 ثوانٍ لتأخذه. كل علم تمسكه يعطيك نقاطًا مع الوقت. استراحة عند 100 نقطة. أول فريق يصل إلى 200 يفوز." },
        facts: [{ en: "200 points", ar: "200 نقطة" }, { en: "Capture in 5 s", ar: "الاستيلاء في 5 ثوانٍ" }, { en: "Halftime at 100", ar: "استراحة عند 100" }] },
      { short: "HP", name: "HARDPOINT", ar: "النقطة الساخنة",
        tag: { en: "Hold the moving zone", ar: "امسك المنطقة المتنقلة" },
        d: { en: "One zone on the map, and it moves every 60 seconds. Your team gets a point every second it holds the zone alone. First team to 250 wins.", ar: "منطقة واحدة في الخريطة، وتنتقل كل 60 ثانية. فريقك يكسب نقطة كل ثانية يمسك فيها المنطقة وحده. أول فريق يصل إلى 250 يفوز." },
        facts: [{ en: "250 points", ar: "250 نقطة" }, { en: "Moves every 60 s", ar: "تنتقل كل 60 ثانية" }, { en: "1 point a second", ar: "نقطة كل ثانية" }] },
    ],
    voteTitle: { en: "Vote for the next match", ar: "صوّت للمباراة القادمة" },
    votes: [
      { t: { en: "Map vote", ar: "تصويت الخريطة" }, d: { en: "Pick one of the four maps. 20 seconds.", ar: "اختر واحدة من الخرائط الأربع. 20 ثانية." } },
      { t: { en: "Mode vote", ar: "تصويت الطور" }, d: { en: "Pick one of the five modes. 15 seconds.", ar: "اختر واحدًا من الأطوار الخمسة. 15 ثانية." } },
      { t: { en: "Weapon vote", ar: "تصويت الأسلحة" }, d: { en: "ALL WEAPONS opens every gun. SNIPERS ONLY: snipers and the knife, nothing else.", ar: "ALL WEAPONS تفتح كل الأسلحة. SNIPERS ONLY: القناصات والسكين فقط." } },
    ],
    sndTitle: { en: "Search & Destroy rules", ar: "قواعد البحث والتدمير" },
    sndRules: [
      { k: { en: "Plant the bomb", ar: "زرع القنبلة" }, v: { en: "Hold E for 5 s on a site", ar: "اضغط مطولًا على E لمدة 5 ثوانٍ في الموقع" } },
      { k: { en: "Bomb timer", ar: "مؤقت القنبلة" }, v: { en: "45 s, then it explodes", ar: "45 ثانية ثم تنفجر" } },
      { k: { en: "Defuse", ar: "التفكيك" }, v: { en: "Hold E for 7.5 s", ar: "اضغط مطولًا على E لمدة 7.5 ثانية" } },
      { k: { en: "Switch sides", ar: "تبديل الجهتين" }, v: { en: "After round 5", ar: "بعد الجولة الخامسة" } },
      { k: { en: "Friendly fire", ar: "إصابة الزملاء" }, v: { en: "Off", ar: "مغلقة" } },
      { k: { en: "Teams", ar: "الفريقان" }, v: { en: "FALCONS against WOLVES", ar: "الصقور FALCONS ضد الذئاب WOLVES" } },
    ],
    flowTitle: { en: "A match, step by step", ar: "المباراة خطوة بخطوة" },
    flow: [
      { t: { en: "Deploy", ar: "انطلق" }, d: { en: "Press DEPLOY in the main menu. You join a team of up to six.", ar: "اضغط DEPLOY في القائمة الرئيسية لتنضم إلى فريق من ستة لاعبين كحد أقصى." } },
      { t: { en: "Vote", ar: "صوّت" }, d: { en: "Map, mode and weapons. The most votes win.", ar: "الخريطة والطور والأسلحة. الأكثر أصواتًا يفوز." } },
      { t: { en: "Fight", ar: "قاتل" }, d: { en: "Pick a class, fight, earn your killstreak and charge your field upgrade.", ar: "اختر فئتك، قاتل، اكسب سلسلة القتل واشحن ترقية الميدان." } },
      { t: { en: "Kill cam", ar: "إعادة القتل" }, d: { en: "See how you died from the killer's eyes. The last kill plays as the FINAL KILLCAM.", ar: "شاهد كيف قُتلت من عيون القاتل. وآخر قتلة تُعرض كـ FINAL KILLCAM." } },
      { t: { en: "Results", ar: "النتائج" }, d: { en: "The results screen shows the best players, your XP and your cash.", ar: "شاشة النتائج تعرض أفضل اللاعبين وخبرتك والكاش الذي كسبته." } },
    ],
  },

  /* MAPS ------------------------------------------------------------------------------------------------ */
  maps: {
    kicker: { en: "Maps", ar: "الخرائط" },
    title: { en: "Four maps. Four worlds.", ar: "أربع خرائط. أربعة عوالم." },
    intro: {
      en: "From a rooftop above the city to a frozen rail yard. Every map has bomb sites, flags and hardpoints, and every place has a name in Arabic and English.",
      ar: "من سطح برج فوق المدينة إلى ساحة قطارات متجمدة. في كل خريطة مواقع للقنبلة وأعلام ونقاط ساخنة، ولكل مكان اسم بالعربي والإنجليزي.",
    },
    list: [
      { name: "SKYLINE TOWER", ar: "برج الأفق", img: "assets/img/shots/map-skyline.jpg",
        tag: { en: "Rooftop · city", ar: "سطح · مدينة" },
        d: { en: "A rooftop under construction, high above a city in the haze. A helipad in the middle, tunnels below the deck and a crane you can climb. No rails at the edge: fall and you die.", ar: "سطح برج تحت الإنشاء، عاليًا فوق مدينة يغطيها الضباب. مهبط طائرة في الوسط، وأنفاق تحت السطح، ورافعة تستطيع تسلقها. لا حواجز على الحافة: إذا سقطت تموت." },
        spots: [["Helipad", "مهبط الطائرة"], ["Crane", "الرافعة"], ["Garage", "المرآب"], ["Underpass", "الممر السفلي"], ["Fire Escape", "سلم الطوارئ"], ["Slant Tank", "الخزان المائل"]] },
      { name: "SCARLET", ar: "سكارلت", img: "assets/img/shots/map-scarlet.jpg",
        tag: { en: "Desert · oil field", ar: "صحراء · حقل نفط" },
        d: { en: "An oil field in the red desert. Climb the drilling rig floor by floor for the high ground, or cut through the pipes and the tank yard.", ar: "حقل نفط في الصحراء الحمراء. اصعد برج الحفر طابقًا بعد طابق لتأخذ الأرض العالية، أو اعبر بين الأنابيب وساحة الخزانات." },
        spots: [["Rig", "البرج"], ["Big Pipe", "الأنبوب الكبير"], ["Water Tower", "برج الماء"], ["Pipe Bridge", "جسر الأنابيب"], ["Tank Yard", "ساحة الخزانات"], ["Crew Camp", "مخيم العمال"]] },
      { name: "FROSTLINE DEPOT", ar: "محطة الصقيع", img: "assets/img/shots/map-frostline.jpg",
        tag: { en: "Snow · rail yard", ar: "ثلج · ساحة قطارات" },
        d: { en: "A snowy rail yard full of freight cars. Fight along the tracks, over the footbridge and the catwalk, or down in the cut below the main line.", ar: "ساحة قطارات مغطاة بالثلج ومليئة بعربات الشحن. قاتل على طول السكك، وفوق الجسر العلوي والممشى، أو في الخندق تحت الخط الرئيسي." },
        spots: [["Boxcars", "عربات الشحن"], ["Footbridge", "الجسر العلوي"], ["Signal Tower", "برج الإشارة"], ["Engine Shed", "ورشة القاطرات"], ["Catwalk", "الممشى العلوي"], ["Low Line", "الخندق"]] },
      { name: "FIRING YARD", ar: "ساحة الرماية", img: "assets/img/shots/map-firingyard.jpg",
        tag: { en: "Dust · training camp", ar: "غبار · معسكر تدريب" },
        d: { en: "A dusty army training camp: barracks, workshops, an old mill and ruins. Many narrow lanes and quick corners.", ar: "معسكر تدريب في الغبار: ثكنات وورش وطاحونة قديمة وخرائب. ممرات ضيقة كثيرة وزوايا سريعة." },
        spots: [["Old Mill", "الطاحونة القديمة"], ["East Barracks", "الثكنة الشرقية"], ["Mess Hall", "قاعة الطعام"], ["Kiln Ruin", "خرابة الفرن"], ["Motor Yard", "ساحة الآليات"], ["Lookout", "المرقب"]] },
    ],
    tip: {
      en: "Turn on MAP PLACE NAMES in Settings to see every place's name inside the map.",
      ar: "فعّل MAP PLACE NAMES من الإعدادات لترى اسم كل مكان داخل الخريطة.",
    },
  },

  /* ARSENAL --------------------------------------------------------------------------------------------- */
  // s: dmg (per bullet), pel (pellets), rpm, mag, res (spare), rel (reload s), aim (s), mob (1 = 100%), rangeM (metres)
  arsenal: {
    kicker: { en: "Arsenal", ar: "الأسلحة" },
    title: { en: "Nine weapons. Pick yours.", ar: "تسعة أسلحة. اختر سلاحك." },
    intro: {
      en: "Snipers, an assault rifle, an SMG, two shotguns, a pistol, a rocket launcher and a knife. Each gun levels up on its own and opens its attachments and camos.",
      ar: "قناصات، بندقية هجومية، رشاش صغير، بندقيتا خرطوش، مسدس، قاذف صواريخ وسكين. كل سلاح يرتفع مستواه وحده ويفتح ملحقاته وتمويهاته.",
    },
    guns: [
      { id: "intervention", name: "INTERVENTION", img: "assets/img/shots/w-intervention.jpg", unlock: 0,
        cat: { en: "Sniper rifle · primary", ar: "قناصة · سلاح أساسي" },
        rule: { en: "Head or chest kills in one shot.", ar: "الرأس أو الصدر يقتل بطلقة واحدة." },
        about: { en: "Fast to aim and light to carry. A real 3D scope. The reward for players who hit heads.", ar: "سريعة في التصويب وخفيفة. منظار ثلاثي الأبعاد حقيقي. مكافأة لمن يصيب الرؤوس." },
        s: { dmg: 85, rpm: 54, mag: 5, res: 25, rel: 2.5, aim: 0.2, mob: 1.05, rangeM: 700 },
        zones: { head: 170, chest: 102, stomach: 77, thigh: 68, arm: 68, lower: 60 } },
      { id: "hs50", name: "HS .50-M1", img: "assets/img/shots/w-hs50.jpg", unlock: 6,
        cat: { en: "Sniper rifle · primary", ar: "قناصة · سلاح أساسي" },
        rule: { en: "Head, chest, stomach or thigh kills in one shot.", ar: "الرأس أو الصدر أو البطن أو الفخذ يقتل بطلقة واحدة." },
        about: { en: "A .50 calibre with a bipod. Slower to aim and move, but far more forgiving.", ar: "عيار 50 مع حامل. أبطأ في التصويب والحركة، لكنها تسامحك أكثر بكثير." },
        s: { dmg: 100, rpm: 54, mag: 5, res: 25, rel: 2.5, aim: 0.32, mob: 0.9, rangeM: 700 },
        zones: { head: 200, chest: 100, stomach: 100, thigh: 100, arm: 70, lower: 60 } },
      { id: "ak47", name: "AK-47", img: "assets/img/shots/w-ak47.jpg", unlock: 2,
        cat: { en: "Assault rifle · primary", ar: "بندقية هجومية · سلاح أساسي" },
        rule: { en: "Hits hard at any range.", ar: "ضربة قوية على أي مسافة." },
        about: { en: "Full auto, 30 rounds, strong at long range. Tame its kick and it wins most fights.", ar: "رشق كامل، 30 طلقة، وقوية من بعيد. سيطر على ارتدادها وستفوز بأغلب المواجهات." },
        s: { dmg: 28, rpm: 600, mag: 30, res: 120, rel: 2.4, aim: 0.22, mob: 0.95, rangeM: 224 } },
      { id: "mp7", name: "MP7", img: "assets/img/shots/w-mp7.jpg", unlock: 0,
        cat: { en: "SMG · primary", ar: "رشاش صغير · سلاح أساسي" },
        rule: { en: "The fastest gun in the game.", ar: "أسرع سلاح في اللعبة." },
        about: { en: "950 rounds a minute, light in your hands. Made for running and close fights.", ar: "950 طلقة في الدقيقة، وخفيف في يدك. مصنوع للركض والمواجهات القريبة." },
        s: { dmg: 25, rpm: 950, mag: 30, res: 120, rel: 1.9, aim: 0.14, mob: 1.1, rangeM: 84 } },
      { id: "olympia", name: "OLYMPIA", img: "assets/img/shots/w-olympia.jpg", unlock: 4,
        cat: { en: "Double-barrel shotgun · primary", ar: "شوزن بفوهتين · سلاح أساسي" },
        rule: { en: "Two shells. Make them count.", ar: "طلقتان فقط. اجعلهما تحسبان." },
        about: { en: "Ten pellets a shot. Up close, one shot ends the fight. Break it open to reload.", ar: "عشر شظايا في الطلقة. من قريب، طلقة واحدة تنهي المواجهة. افتحه لتعيد التعبئة." },
        s: { dmg: 16, pel: 10, rpm: 300, mag: 2, res: 24, rel: 2.3, aim: 0.2, mob: 1, rangeM: 34 } },
      { id: "haymaker", name: "HAYMAKER", img: "assets/img/shots/w-haymaker.jpg", unlock: 8,
        cat: { en: "Auto shotgun · primary", ar: "شوزن أوتوماتيكي · سلاح أساسي" },
        rule: { en: "Hold the trigger, clear the room.", ar: "اضغط الزناد ونظّف الغرفة." },
        about: { en: "A fully automatic shotgun with a 10-shell mag. Eight pellets every shot.", ar: "شوزن أوتوماتيكي بالكامل بمخزن 10 طلقات. ثماني شظايا في كل طلقة." },
        s: { dmg: 11, pel: 8, rpm: 300, mag: 10, res: 40, rel: 2.6, aim: 0.22, mob: 0.95, rangeM: 31 } },
      { id: "m1911", name: "M1911", img: "assets/img/shots/w-m1911.jpg", unlock: 0,
        cat: { en: "Pistol · secondary", ar: "مسدس · سلاح ثانوي" },
        rule: { en: "Your backup when the mag runs dry.", ar: "سلاحك الاحتياطي حين ينفد المخزن." },
        about: { en: "One hand, fastest aim in the game, 8 rounds. Switching to it is faster than reloading.", ar: "بيد واحدة، أسرع تصويب في اللعبة، 8 طلقات. التبديل إليه أسرع من إعادة التعبئة." },
        s: { dmg: 28, rpm: 400, mag: 8, res: 40, rel: 1.6, aim: 0.11, mob: 1.1, rangeM: 84 } },
      { id: "rpg7", name: "RPG-7", img: "assets/img/shots/w-rpg7.jpg", unlock: 10,
        cat: { en: "Rocket launcher · secondary", ar: "قاذف صواريخ · سلاح ثانوي" },
        rule: { en: "One rocket, one spare. Walls fall.", ar: "صاروخ واحد واحتياطي. والجدران تسقط." },
        about: { en: "Kills anyone within about 2 m of the blast and hurts up to about 5 m away. Breaks walls and opens new paths.", ar: "يقتل أي أحد في حدود مترين تقريبًا من الانفجار ويصيب حتى 5 أمتار. يهدم الجدران ويفتح طرقًا جديدة." },
        s: { dmg: 200, rpm: 40, mag: 1, res: 1, rel: 2.8, aim: 0.3, mob: 0.9, rangeM: 280, blast: true } },
    ],
    melee: {
      name: "KARAMBIT", img: "assets/img/karambit.png",
      slot: { en: "Knife · secondary", ar: "سكين · سلاح ثانوي" },
      d: { en: "Too close for a scope? Pull the karambit. With it out you move 10% faster and your stamina lasts 50% longer.", ar: "العدو قريب جدًا على المنظار؟ اسحب الكارامبيت. معه تتحرك أسرع بـ 10% وتدوم قدرتك على التحمل أطول بـ 50%." },
      stats: [
        { k: { en: "Slash (left click)", ar: "ضربة (زر أيسر)" }, v: "55" },
        { k: { en: "Stab (right click)", ar: "طعنة (زر أيمن)" }, v: { en: "110 · kill", ar: "110 · قتل" } },
        { k: { en: "Reach", ar: "المدى" }, v: "~1.8 m" },
      ],
    },
    snipersOnly: {
      en: "In a SNIPERS ONLY match you carry a sniper and the karambit, nothing else.",
      ar: "في مباراة SNIPERS ONLY تحمل قناصة وسكين الكارامبيت فقط.",
    },
  },

  /* GEAR: lethals, tacticals, field upgrades, killstreak ---------------------------------------------- */
  gear: {
    kicker: { en: "Gear", ar: "العتاد" },
    title: { en: "Throw it, plant it, call it in", ar: "ارمِه، ضعه، أو اطلبه" },
    intro: {
      en: "Every class carries one lethal (E), one tactical (Q) and one field upgrade (X). Get 3 kills without dying and a UAV is yours (3).",
      ar: "كل فئة تحمل سلاحًا قاتلًا (E)، وأداة تكتيكية (Q)، وترقية ميدان (X). اقتل 3 أعداء بدون أن تموت وتحصل على طائرة استطلاع UAV (زر 3).",
    },
    lethalTitle: { en: "Lethals · E", ar: "القاتل · E" },
    lethals: [
      { name: "THROWING KNIFE", unlock: 0, img: "assets/img/throwing-knife.png",
        d: { en: "Kills with one hit. Hold E to keep it ready, let go to throw. Walk over it to take it back; a lost knife comes back after 3 s.", ar: "يقتل بضربة واحدة. اضغط مطولًا على E لتجهيزه واتركه للرمي. امشِ فوقه لتستعيده، وإذا ضاع يعود بعد 3 ثوانٍ." } },
      { name: "FRAG GRENADE", unlock: 2, img: "assets/img/shots/frag.jpg", photo: true,
        d: { en: "Bounces and rolls, goes off 2.5 s after the throw. Hold the key to cook it. Kills close by and breaks walls.", ar: "ترتد وتتدحرج وتنفجر بعد 2.5 ثانية. اضغط مطولًا لتطبخها قبل الرمي. تقتل من قريب وتهدم الجدران." } },
      { name: "THROWING STARS", unlock: 6, img: null,
        d: { en: "Five stars, thrown fast one after another. 2 hits kill up close, 3 further away. Walk over them to take them back.", ar: "خمس نجوم ترميها بسرعة واحدة تلو الأخرى. ضربتان تقتلان من قريب، وثلاث من بعيد. امشِ فوقها لتستعيدها." } },
      { name: "SEMTEX", unlock: 8, img: "assets/img/shots/cover.jpg", photo: true,
        d: { en: "Sticks to the first thing it hits: walls, floors, people. Goes off 2 s after the throw and breaks walls.", ar: "تلتصق بأول شيء تصيبه: جدار أو أرض أو لاعب. تنفجر بعد ثانيتين من الرمي وتهدم الجدران." } },
    ],
    tacticalTitle: { en: "Tacticals · Q", ar: "التكتيكي · Q" },
    tacticals: [
      { name: "STIM SHOT", unlock: 0, img: "assets/img/stim.png",
        d: { en: "Stab it into your arm: full health in 0.6 s and a full stamina bar. One per life.", ar: "اغرسها في ذراعك: صحة كاملة خلال 0.6 ثانية وشريط تحمل ممتلئ. واحدة في كل حياة." } },
      { name: "STUN GRENADE", unlock: 4, img: "assets/img/stun-grenade.png",
        d: { en: "Goes off 1.4 s after the throw. Enemies within about 6 m who see it get a white screen, muffled sound and slow moves for up to 4 s.", ar: "تنفجر بعد 1.4 ثانية. الأعداء في حدود 6 أمتار تقريبًا ممن يرونها: شاشة بيضاء، صوت مكتوم، وحركة بطيئة حتى 4 ثوانٍ." } },
    ],
    fieldTitle: { en: "Field upgrades · X", ar: "ترقيات الميدان · X" },
    fieldIntro: {
      en: "A ring at the bottom of the screen fills over time. Kills, plants, defuses and flag captures fill it faster. When it is full, press X.",
      ar: "حلقة أسفل الشاشة تمتلئ مع الوقت. القتل والزرع والتفكيك والاستيلاء على الأعلام تملؤها أسرع. عندما تمتلئ اضغط X.",
    },
    fieldUpgrades: [
      { name: "DEAD SILENCE", unlock: 0, charge: 60, lasts: { en: "12 s (+6 a kill)", ar: "12 ث (+6 لكل قتلة)" },
        d: { en: "For a short time nobody hears your footsteps. Every kill makes it last longer.", ar: "لفترة قصيرة لا أحد يسمع خطواتك. وكل قتلة تطيل المدة." } },
      { name: "AMMO BOX", unlock: 4, charge: 90, lasts: { en: "30 s", ar: "30 ث" },
        d: { en: "Drop a box that refills ammo and lethals for you and your team.", ar: "ضع صندوقًا يعيد تعبئة الذخيرة والأسلحة القاتلة لك ولفريقك." } },
      { name: "PORTABLE UAV", unlock: 10, charge: 100, lasts: { en: "Until destroyed", ar: "حتى يُدمَّر" },
        d: { en: "Put down a scanner: enemies within about 13 m of it show on your team's minimap.", ar: "ضع جهاز مسح: الأعداء في حدود 13 مترًا منه يظهرون على خريطة فريقك المصغّرة." } },
      { name: "DEPLOYABLE COVER", unlock: 18, charge: 80, lasts: { en: "600 health", ar: "600 نقطة صمود" },
        d: { en: "Put up a bulletproof wall to hide behind, anywhere.", ar: "انصب جدارًا مضادًا للرصاص تختبئ خلفه في أي مكان." } },
      { name: "BATTLE RAGE", unlock: 28, charge: 75, lasts: { en: "10 s", ar: "10 ث" },
        d: { en: "Endless tactical sprint and fast healing, and it clears a stun.", ar: "ركض تكتيكي بلا نهاية وشفاء سريع، ويزيل أثر الصعق." } },
    ],
    streakTitle: { en: "Killstreak and minimap", ar: "سلسلة القتل والخريطة المصغّرة" },
    streak: [
      { t: { en: "UAV · 3 kills", ar: "طائرة UAV · 3 قتلات" }, d: { en: "Get 3 kills in one life and press 3 to call the UAV: for 30 seconds every enemy shows on your team's minimap. You keep it until you use it, even after you die.", ar: "اقتل 3 أعداء في حياة واحدة ثم اضغط 3 لتطلب الطائرة: لمدة 30 ثانية يظهر كل الأعداء على خريطة فريقك المصغّرة. تبقى معك حتى تستخدمها، حتى لو مت." } },
      { t: { en: "Minimap", ar: "الخريطة المصغّرة" }, d: { en: "Top left in every match: walls, your team, the objectives, pings, and enemies who fire a loud shot.", ar: "أعلى يسار الشاشة في كل مباراة: الجدران وفريقك والأهداف والعلامات، والأعداء الذين يطلقون طلقة عالية الصوت." } },
      { t: { en: "Walls that break", ar: "جدران تتهدم" }, d: { en: "Frag grenades, semtex and rockets punch holes in walls. Make your own way in.", ar: "القنابل والسمتكس والصواريخ تفتح ثقوبًا في الجدران. اصنع طريقك بنفسك." } },
    ],
    streakImg: "assets/img/shots/frag.jpg",
  },

  /* CLASSES --------------------------------------------------------------------------------------------- */
  classes: {
    kicker: { en: "Create a class", ar: "إنشاء فئة" },
    title: { en: "Five classes. Build each one.", ar: "خمس فئات. جهّز كل واحدة." },
    intro: {
      en: "Press B in the main menu or in a match. Change your class before the round starts and it is used right away.",
      ar: "اضغط B في القائمة الرئيسية أو أثناء المباراة. إذا غيّرت فئتك قبل بداية الجولة تُستخدم فورًا.",
    },
    slots: [
      { k: { en: "Primary", ar: "السلاح الأساسي" }, v: "INTERVENTION · HS .50-M1 · AK-47 · MP7 · OLYMPIA · HAYMAKER" },
      { k: { en: "Secondary", ar: "السلاح الثانوي" }, v: "M1911 · RPG-7 · KARAMBIT" },
      { k: { en: "Lethal", ar: "القاتل" }, v: "THROWING KNIFE · FRAG · STARS · SEMTEX" },
      { k: { en: "Tactical", ar: "التكتيكي" }, v: "STIM SHOT · STUN GRENADE" },
      { k: { en: "Field upgrade", ar: "ترقية الميدان" }, v: { en: "One of five", ar: "واحدة من خمس" } },
      { k: { en: "Perks", ar: "الامتيازات" }, v: { en: "Vest + gloves + boots + gear", ar: "سترة + قفازات + حذاء + معدّة" } },
    ],
    perkTitle: { en: "Perks", ar: "الامتيازات" },
    perkIntro: {
      en: "Pick one vest (the big perk) and one of each small perk. Most perks open as your player level goes up.",
      ar: "اختر سترة واحدة (الامتياز الكبير) وواحدًا من كل امتياز صغير. أغلب الامتيازات تُفتح مع ارتفاع مستواك.",
    },
    perkGroups: [
      { slot: { en: "Vest", ar: "السترة" }, color: "#ffc846", list: [
        { name: "INFANTRY VEST", unlock: 0, d: { en: "Tactical sprint refills twice as fast. Faster sprint to fire.", ar: "الركض التكتيكي يُشحن بضعف السرعة. وتطلق النار أسرع بعد الركض." } },
        { name: "GUNNER VEST", unlock: 3, d: { en: "Spawn with 1 more magazine for each gun. Aim in 10% faster.", ar: "تبدأ بمخزن إضافي لكل سلاح. وتصوّب أسرع بـ 10%." } },
        { name: "MEDIC VEST", unlock: 7, d: { en: "Healing starts sooner, and a used stim comes back.", ar: "الشفاء يبدأ أبكر، والحقنة المستخدمة تعود إليك." } },
        { name: "SHADOW VEST", unlock: 14, d: { en: "Quieter footsteps. Enemies can't ping you, and your loud shots don't show on their radar.", ar: "خطوات أهدأ. الأعداء لا يستطيعون تحديدك، وطلقاتك لا تظهر على رادارهم." } },
        { name: "DEMOLITION VEST", unlock: 21, d: { en: "Carry 1 more lethal. A used lethal comes back after a while.", ar: "تحمل سلاحًا قاتلًا إضافيًا. والمستخدم يعود إليك بعد فترة." } },
        { name: "UTILITY VEST", unlock: 24, d: { en: "Two gear slots, but no boots.", ar: "خانتان للمعدّات، لكن بدون حذاء." } },
      ] },
      { slot: { en: "Gloves", ar: "القفازات" }, color: "#5aaaff", list: [
        { name: "SCAVENGER", unlock: 0, d: { en: "Take ammo and your lethal back from fallen players.", ar: "خذ الذخيرة واستعد سلاحك القاتل من اللاعبين الساقطين." } },
        { name: "STEADY AIM", unlock: 3, d: { en: "Better hip fire: 30% less spread.", ar: "إطلاق أدق بدون تصويب: تشتت أقل بـ 30%." } },
        { name: "SLEIGHT OF HAND", unlock: 5, d: { en: "Reload 30% faster.", ar: "إعادة تعبئة أسرع بـ 30%." } },
      ] },
      { slot: { en: "Boots", ar: "الحذاء" }, color: "#6ed282", list: [
        { name: "LIGHTWEIGHT", unlock: 0, d: { en: "Move 5% faster.", ar: "تتحرك أسرع بـ 5%." } },
        { name: "DOUBLE TIME", unlock: 9, d: { en: "Tactical sprint lasts longer. Faster crouch walk.", ar: "الركض التكتيكي يدوم أطول. ومشي أسرع وأنت منحنٍ." } },
        { name: "MOUNTAINEER", unlock: 16, d: { en: "No fall damage. Climb and vault faster.", ar: "لا ضرر من السقوط. وتسلق وقفز أسرع." } },
      ] },
      { slot: { en: "Gear", ar: "المعدّة" }, color: "#ff6050", list: [
        { name: "QUICK FIX", unlock: 0, d: { en: "A kill starts your healing right away.", ar: "القتلة تبدأ شفاءك فورًا." } },
        { name: "TRACKER", unlock: 0, d: { en: "See enemy footprints for a few seconds.", ar: "ترى آثار أقدام الأعداء لثوانٍ." } },
        { name: "COLD-BLOODED", unlock: 7, d: { en: "Enemy UAVs and portable UAVs don't show you.", ar: "طائرات العدو وأجهزة المسح لا تُظهرك." } },
        { name: "FLAK JACKET", unlock: 12, d: { en: "Less damage from explosives and shorter stuns.", ar: "ضرر أقل من المتفجرات وصعق أقصر." } },
      ] },
    ],

    gunsmithTitle: { en: "Gunsmith", ar: "ورشة السلاح" },
    gunsmithIntro: {
      en: "Up to six attachment slots: optic, muzzle, underbarrel, laser, magazine and stock. Every gun has its own level from 1 to 10: a kill gives 100 XP, a headshot kill 50 more. Attachments change handling only, never damage.",
      ar: "حتى ست خانات للملحقات: المنظار، الفوهة، أسفل السبطانة، الليزر، المخزن والأخمص. لكل سلاح مستواه الخاص من 1 إلى 10: القتلة تعطي 100 نقطة خبرة، وقتلة الرأس 50 إضافية. الملحقات تغيّر التعامل مع السلاح فقط، ولا تغيّر الضرر.",
    },
    slotNames: {
      Optic: { en: "Optic", ar: "المنظار" },
      Muzzle: { en: "Muzzle / barrel", ar: "الفوهة / السبطانة" },
      Underbarrel: { en: "Underbarrel", ar: "أسفل السبطانة" },
      Laser: { en: "Laser", ar: "الليزر" },
      Magazine: { en: "Magazine", ar: "المخزن" },
      Stock: { en: "Stock / grip", ar: "الأخمص / المقبض" },
    },
    // Weapon types for the gunsmith tabs. "guns" = which guns use this type.
    types: [
      { id: "SNIPER RIFLES", label: { en: "Snipers", ar: "القناصات" }, guns: "INTERVENTION · HS .50-M1" },
      { id: "ASSAULT RIFLES", label: { en: "Assault rifle", ar: "البندقية الهجومية" }, guns: "AK-47" },
      { id: "SMGs", label: { en: "SMG", ar: "الرشاش الصغير" }, guns: "MP7" },
      { id: "SHOTGUNS", label: { en: "Shotgun", ar: "الشوزن" }, guns: "HAYMAKER" },
      { id: "DOUBLE BARREL", label: { en: "Double barrel", ar: "الشوزن بفوهتين" }, guns: "OLYMPIA" },
      { id: "SIDEARMS", label: { en: "Pistol", ar: "المسدس" }, guns: "M1911" },
    ],
    // Straight from Modules.Attachments. m = multiplier, a = added, set = switched on, per = per weapon type changes.
    attachments: [
      { id: "FastMag", name: "FAST MAG", slot: "Magazine", lvl: 1, types: ["SNIPER RIFLES"], m: { ReloadTime: 0.75 }, a: { ReserveAmmo: -5 } },
      { id: "NoStock", name: "NO STOCK", slot: "Stock", lvl: 1, types: ["SHOTGUNS", "DOUBLE BARREL", "SMGs"], m: { Mobility: 1.05, RecoilUp: 1.25, AimTime: 0.85 },
        per: { "DOUBLE BARREL": { m: { Mobility: 1.05, RecoilUp: 1.3, AimTime: 0.85 } } } },
      { id: "LightStock", name: "LIGHT STOCK", slot: "Stock", lvl: 2, types: ["SNIPER RIFLES", "ASSAULT RIFLES"], m: { Mobility: 1.03, AimTime: 0.88, RecoilUp: 1.15 },
        per: { "ASSAULT RIFLES": { m: { Mobility: 1.04, AimTime: 0.88, RecoilUp: 1.15 } } } },
      { id: "RedDot", name: "RED DOT", slot: "Optic", lvl: 2, types: ["ASSAULT RIFLES", "DOUBLE BARREL", "SMGs", "SHOTGUNS", "SIDEARMS"], m: { AimTime: 1.03 } },
      { id: "MuzzleBrake", name: "MUZZLE BRAKE", slot: "Muzzle", lvl: 3, types: ["SNIPER RIFLES", "ASSAULT RIFLES"], m: { RecoilUp: 0.7, AimTime: 1.06 },
        per: { "ASSAULT RIFLES": { m: { RecoilUp: 0.8, AimTime: 1.04 } } } },
      { id: "Compensator", name: "COMPENSATOR", slot: "Muzzle", lvl: 3, types: ["SIDEARMS", "SMGs"], m: { RecoilUp: 0.8, AimTime: 1.03 } },
      { id: "Choke", name: "CHOKE", slot: "Muzzle", lvl: 3, types: ["SHOTGUNS", "DOUBLE BARREL"], m: { HipSpread: 0.8, Range: 1.1, AimTime: 1.02 } },
      { id: "ShortBarrel", name: "SHORT BARREL", slot: "Muzzle", lvl: 4, types: ["SNIPER RIFLES", "DOUBLE BARREL"], m: { AimTime: 0.92, Mobility: 1.03, Range: 0.7, RecoilUp: 1.15 },
        per: { "DOUBLE BARREL": { m: { AimTime: 0.85, Mobility: 1.05, Range: 0.7, HipSpread: 1.15, RecoilUp: 1.1 } } } },
      { id: "Foregrip", name: "FOREGRIP", slot: "Underbarrel", lvl: 4, types: ["ASSAULT RIFLES", "SHOTGUNS", "SMGs"], m: { RecoilUp: 0.9, RecoilSide: 0.7, AimTime: 1.04, Mobility: 0.98 } },
      { id: "LowZoomScope", name: "LOW-ZOOM SCOPE", slot: "Optic", lvl: 5, types: ["SNIPER RIFLES"], m: { AimTime: 0.9 }, zoom: "less" },
      { id: "Laser", name: "LASER", slot: "Laser", lvl: 5, types: ["ASSAULT RIFLES", "DOUBLE BARREL", "SMGs", "SHOTGUNS", "SIDEARMS"], m: { HipSpread: 0.65 },
        per: { SHOTGUNS: { m: { HipSpread: 0.85 } }, "DOUBLE BARREL": { m: { HipSpread: 0.85 } } } },
      { id: "ShellHolder", name: "SHELL HOLDER", slot: "Magazine", lvl: 5, types: ["DOUBLE BARREL"], m: { ReloadTime: 0.8 }, a: { ReserveAmmo: 6 } },
      { id: "HeavyStock", name: "HEAVY STOCK", slot: "Stock", lvl: 6, types: ["SNIPER RIFLES", "ASSAULT RIFLES"], m: { RecoilUp: 0.8, AimTime: 1.1, Mobility: 0.97 },
        per: { "ASSAULT RIFLES": { m: { RecoilUp: 0.82, AimTime: 1.08, Mobility: 0.97 } } } },
      { id: "Holographic", name: "HOLOGRAPHIC", slot: "Optic", lvl: 6, types: ["SHOTGUNS", "SMGs"], m: { AimTime: 1.05 } },
      { id: "Suppressor", name: "SUPPRESSOR", slot: "Muzzle", lvl: 7, types: ["SNIPER RIFLES", "SIDEARMS", "ASSAULT RIFLES"], m: { Range: 0.8, AimTime: 1.05 }, quiet: true,
        per: { "ASSAULT RIFLES": { m: { Range: 0.85, AimTime: 1.05 } }, SIDEARMS: { m: { Range: 0.85, AimTime: 1.06, Mobility: 0.99 } } } },
      { id: "SMGSuppressor", name: "SUPPRESSOR", slot: "Muzzle", lvl: 8, types: ["SMGs"], m: { Range: 0.85, AimTime: 1.05 }, quiet: true },
      { id: "ShotgunSuppressor", name: "SUPPRESSOR", slot: "Muzzle", lvl: 8, types: ["SHOTGUNS"], m: { Range: 0.85, AimTime: 1.05 }, quiet: true },
      { id: "ExtendedMag", name: "EXTENDED MAG", slot: "Magazine", lvl: 8, types: ["SNIPER RIFLES", "SHOTGUNS", "SIDEARMS", "ASSAULT RIFLES"], m: { ReloadTime: 1.15, Mobility: 0.98 }, a: { MagSize: 2, ReserveAmmo: 10 },
        per: { "ASSAULT RIFLES": { m: { ReloadTime: 1.12, AimTime: 1.04, Mobility: 0.98 }, a: { MagSize: 15, ReserveAmmo: 30 } },
               SIDEARMS: { m: { ReloadTime: 1.08, AimTime: 1.03 }, a: { MagSize: 4, ReserveAmmo: 12 } },
               SHOTGUNS: { m: { ReloadTime: 1.1, AimTime: 1.04, Mobility: 0.98 }, a: { MagSize: 5, ReserveAmmo: 10 } } } },
      { id: "SMGExtendedMag", name: "EXTENDED MAG", slot: "Magazine", lvl: 7, types: ["SMGs"], m: { ReloadTime: 1.12, AimTime: 1.04, Mobility: 0.98 }, a: { MagSize: 10, ReserveAmmo: 40 } },
      { id: "LongBarrel", name: "LONG BARREL", slot: "Muzzle", lvl: 9, types: ["SNIPER RIFLES", "DOUBLE BARREL"], m: { Range: 1.3, RecoilUp: 0.9, AimTime: 1.08, Mobility: 0.97 },
        per: { "DOUBLE BARREL": { m: { Range: 1.25, HipSpread: 0.85, AimTime: 1.1, Mobility: 0.96 } } } },
      { id: "PaddedStock", name: "PADDED STOCK", slot: "Stock", lvl: 9, types: ["SHOTGUNS", "DOUBLE BARREL", "SMGs"], m: { RecoilUp: 0.85, RecoilSide: 0.85, AimTime: 1.06, Mobility: 0.98 } },
      { id: "Scope4x", name: "4X SCOPE", slot: "Optic", lvl: 9, types: ["ASSAULT RIFLES"], m: { AimTime: 1.15, Mobility: 0.98 }, zoom: "more" },
      { id: "HighZoomScope", name: "HIGH-ZOOM SCOPE", slot: "Optic", lvl: 10, types: ["SNIPER RIFLES"], m: { AimTime: 1.1 }, zoom: "more" },
      { id: "DrumMag", name: "DRUM MAG", slot: "Magazine", lvl: 10, types: ["ASSAULT RIFLES", "SHOTGUNS"], m: { ReloadTime: 1.35, AimTime: 1.12, Mobility: 0.94 }, a: { MagSize: 45, ReserveAmmo: 75 },
        per: { SHOTGUNS: { m: { ReloadTime: 1.3, AimTime: 1.12, Mobility: 0.94 }, a: { MagSize: 10, ReserveAmmo: 20 } } } },
    ],
    fxWords: {
      AimTime: { en: "aim speed", ar: "سرعة التصويب" },
      Mobility: { en: "mobility", ar: "خفة الحركة" },
      RecoilUp: { en: "kick", ar: "الارتداد" },
      RecoilSide: { en: "side kick", ar: "الارتداد الجانبي" },
      Range: { en: "range", ar: "المدى" },
      ReloadTime: { en: "reload speed", ar: "سرعة التعبئة" },
      HipSpread: { en: "hip-fire spread", ar: "التشتت بدون تصويب" },
      MagSize: { en: "bullets in the mag", ar: "طلقات في المخزن" },
      ReserveAmmo: { en: "spare bullets", ar: "طلقات احتياطية" },
      quiet: { en: "Quieter shot", ar: "طلقة أهدأ" },
      zoomMore: { en: "More zoom", ar: "تقريب أكثر" },
      zoomLess: { en: "Less zoom, wider view", ar: "تقريب أقل ورؤية أوسع" },
    },

    paintTitle: { en: "Paint and camos", ar: "الطلاء والتمويه" },
    paintText: {
      en: "Paint every weapon your way: 16 colors, 16 materials, and 12 camos that open with the gun's level. Gold and Damascus wait at level 10.",
      ar: "لوّن كل سلاح على ذوقك: 16 لونًا، و16 خامة، و12 تمويهًا تُفتح مع مستوى السلاح. الذهبي والدمشقي ينتظرانك في المستوى 10.",
    },
    paintImg: "assets/img/shots/camo.jpg",
    camos: [
      { n: "WOODLAND", l: 1, c: "#4d5a35" }, { n: "DESERT", l: 1, c: "#c9a86e" }, { n: "SNOW", l: 2, c: "#d9dde0" },
      { n: "URBAN", l: 3, c: "#6d7275" }, { n: "TIGER", l: 4, c: "#c47a2c" }, { n: "NIGHT", l: 5, c: "#1f2a3d" },
      { n: "SPLINTER", l: 6, c: "#7d8a6a" }, { n: "CRIMSON", l: 7, c: "#8f1f24" }, { n: "VIPER", l: 8, c: "#3f7a3a" },
      { n: "CARBON", l: 9, c: "#2a2a2a" }, { n: "DAMASCUS", l: 10, c: "#8c8f94" }, { n: "GOLD", l: 10, c: "#d8a640" },
    ],
  },

  /* PROGRESSION ----------------------------------------------------------------------------------------- */
  progress: {
    kicker: { en: "Progress", ar: "التقدّم" },
    title: { en: "Climb from level 1 to 55", ar: "اصعد من المستوى 1 إلى 55" },
    intro: {
      en: "Every match gives XP: kills, headshots, plants, defuses, round wins and match wins. New levels open new weapons, gear and perks.",
      ar: "كل مباراة تعطيك خبرة: القتل، وطلقات الرأس، والزرع، والتفكيك، والفوز بالجولات والمباريات. والمستويات الجديدة تفتح أسلحة وعتادًا وامتيازات جديدة.",
    },
    xp: [
      { n: "+100", t: { en: "a kill", ar: "للقتلة" } },
      { n: "+25", t: { en: "a headshot", ar: "لطلقة الرأس" } },
      { n: "+100", t: { en: "plant or defuse", ar: "للزرع أو التفكيك" } },
      { n: "+100", t: { en: "a round win", ar: "للفوز بجولة" } },
      { n: "+500", t: { en: "a match win", ar: "للفوز بمباراة" } },
      { n: "+250", t: { en: "for every match", ar: "لكل مباراة تلعبها" } },
    ],
    unlockTitle: { en: "What opens at each level", ar: "ماذا يُفتح في كل مستوى" },
    // [level, name, kind]  kind: w = weapon, l = lethal, t = tactical, p = perk, f = field upgrade
    unlocks: [
      [2, "AK-47", "w"], [2, "FRAG GRENADE", "l"], [3, "STEADY AIM", "p"], [3, "GUNNER VEST", "p"],
      [4, "OLYMPIA", "w"], [4, "STUN GRENADE", "t"], [4, "AMMO BOX", "f"], [5, "SLEIGHT OF HAND", "p"],
      [6, "HS .50-M1", "w"], [6, "THROWING STARS", "l"], [7, "MEDIC VEST", "p"], [7, "COLD-BLOODED", "p"],
      [8, "HAYMAKER", "w"], [8, "SEMTEX", "l"], [9, "DOUBLE TIME", "p"], [10, "RPG-7", "w"], [10, "PORTABLE UAV", "f"],
      [12, "FLAK JACKET", "p"], [14, "SHADOW VEST", "p"], [16, "MOUNTAINEER", "p"], [18, "DEPLOYABLE COVER", "f"],
      [21, "DEMOLITION VEST", "p"], [24, "UTILITY VEST", "p"], [28, "BATTLE RAGE", "f"],
    ],
    kinds: {
      w: { en: "Weapon", ar: "سلاح" }, l: { en: "Lethal", ar: "قاتل" }, t: { en: "Tactical", ar: "تكتيكي" },
      p: { en: "Perk", ar: "امتياز" }, f: { en: "Field upgrade", ar: "ترقية ميدان" },
    },
    startWith: {
      en: "From the start: Intervention, MP7, M1911, karambit, throwing knife, stim, Dead Silence and the first perk of every slot.",
      ar: "من البداية: Intervention وMP7 وM1911 والكارامبيت وسكين الرمي والحقنة وDead Silence وأول امتياز في كل خانة.",
    },
    cards: [
      { t: { en: "Cash", ar: "الكاش" }, d: { en: "Every XP you earn also gives cash (about 500 a match). 1,000 cash opens anything that is still locked: a weapon, a perk, an attachment or a camo. What you buy stays yours forever.", ar: "كل خبرة تكسبها تعطيك كاشًا أيضًا (حوالي 500 في المباراة). 1,000 كاش تفتح أي شيء ما زال مقفلًا: سلاح أو امتياز أو ملحق أو تمويه. وما تشتريه يبقى لك للأبد." } },
      { t: { en: "Leaderboards", ar: "لوحات الصدارة" }, d: { en: "The top 50 players by LEVEL, WINS and KILLS, right in the main menu. Only real public matches count.", ar: "أفضل 50 لاعبًا في المستوى والانتصارات والقتلات، داخل القائمة الرئيسية. وتُحسب المباريات العامة الحقيقية فقط." } },
      { t: { en: "Career", ar: "سجلك" }, d: { en: "Your kills, deaths, assists, wins and matches are saved for life.", ar: "قتلاتك ووفياتك ومساعداتك وانتصاراتك ومبارياتك تُحفظ طوال الوقت." } },
      { t: { en: "Prayer reminder", ar: "تذكير بالصلاة" }, d: { en: "When you join, the game asks if you have prayed. A small reminder before you play.", ar: "عند دخولك تسألك اللعبة: هل صليت آخر فريضة عليك؟ تذكير بسيط قبل أن تلعب." } },
    ],
    dailyTitle: { en: "Daily reward", ar: "المكافأة اليومية" },
    dailyText: {
      en: "Come back every day to climb a 7-day ladder. Miss a day and it starts again at day 1.",
      ar: "ارجع كل يوم لتصعد سُلّمًا من 7 أيام. وإذا فاتك يوم يبدأ من جديد من اليوم الأول.",
    },
    daily: [[50, 100], [75, 150], [100, 200], [125, 250], [150, 300], [175, 350], [300, 500]], // [cash, XP]
  },

  /* CONTROLS -------------------------------------------------------------------------------------------- */
  controls: {
    kicker: { en: "How to play", ar: "طريقة اللعب" },
    title: { en: "Keyboard, controller or phone", ar: "لوحة مفاتيح أو يد تحكم أو جوال" },
    intro: {
      en: "Play the way you like. Every key and button can be changed in SETTINGS, and HOW TO PLAY in the main menu shows your own keys.",
      ar: "العب بالطريقة التي تحبها. كل زر يمكن تغييره من SETTINGS، وشاشة HOW TO PLAY في القائمة الرئيسية تعرض أزرارك أنت.",
    },
    devices: [
      { id: "kbm", name: { en: "Keyboard & mouse", ar: "لوحة المفاتيح والفأرة" }, groups: [
        { t: { en: "Move", ar: "الحركة" }, keys: [
          { k: ["W", "A", "S", "D"], a: { en: "Walk", ar: "المشي" } },
          { k: ["Shift"], a: { en: "Sprint", ar: "الركض" } },
          { k: ["Shift", "Shift"], a: { en: "Tactical sprint (double-tap)", ar: "الركض التكتيكي (ضغطتان سريعتان)" } },
          { k: ["C"], a: { en: "Crouch, slide while sprinting, hold to lie prone", ar: "انحناء، تزحلق أثناء الركض، اضغط مطولًا للانبطاح" } },
          { k: ["Ctrl"], a: { en: "Prone, or dolphin dive while sprinting", ar: "الانبطاح، أو قفزة الدولفين أثناء الركض" } },
          { k: ["Space"], a: { en: "Jump, climb, vault, slide cancel", ar: "القفز، التسلق، القفز فوق الحاجز، إلغاء التزحلق" } },
        ] },
        { t: { en: "Fight", ar: "القتال" }, keys: [
          { k: ["LMB"], a: { en: "Shoot / knife slash", ar: "إطلاق النار / ضربة السكين" } },
          { k: ["RMB"], a: { en: "Aim / knife stab", ar: "التصويب / طعنة السكين" } },
          { k: ["R"], a: { en: "Reload", ar: "إعادة التعبئة" } },
          { k: ["1"], alt: ["2"], a: { en: "Primary / secondary (or the mouse wheel)", ar: "الأساسي / الثانوي (أو عجلة الفأرة)" } },
          { k: ["F"], a: { en: "Inspect your weapon", ar: "تفحّص سلاحك" } },
          { k: ["MMB"], a: { en: "Ping an enemy or a spot", ar: "تحديد عدو أو مكان" } },
        ] },
        { t: { en: "Gear", ar: "العتاد" }, keys: [
          { k: ["E"], a: { en: "Lethal · plant or defuse (hold) · pick up a gun", ar: "القاتل · زرع أو تفكيك (مطولًا) · التقاط سلاح" } },
          { k: ["Q"], a: { en: "Tactical", ar: "الأداة التكتيكية" } },
          { k: ["X"], a: { en: "Field upgrade (when the ring is full)", ar: "ترقية الميدان (عندما تمتلئ الحلقة)" } },
          { k: ["3"], a: { en: "Call the UAV killstreak", ar: "طلب طائرة UAV" } },
        ] },
        { t: { en: "Menus", ar: "القوائم" }, keys: [
          { k: ["B"], a: { en: "Create a class (in a match too)", ar: "إنشاء فئة (داخل المباراة أيضًا)" } },
          { k: ["Tab"], a: { en: "Scoreboard (hold)", ar: "لوحة النتائج (اضغط مطولًا)" } },
          { k: ["`"], a: { en: "Pause menu: settings, controls, leave", ar: "قائمة الإيقاف: الإعدادات، التحكم، الخروج" } },
        ] },
      ] },
      { id: "pad", name: { en: "Controller", ar: "يد التحكم" }, note: {
          en: "Xbox or PlayStation names, four ready layouts (Default, Tactical, Bumper Jumper, Flipped) or your own, aim assist, vibration and a response curve.",
          ar: "أسماء أزرار Xbox أو PlayStation، وأربعة ترتيبات جاهزة (Default وTactical وBumper Jumper وFlipped) أو ترتيبك الخاص، مع مساعد التصويب والاهتزاز ومنحنى الاستجابة." },
        groups: [
        { t: { en: "Fight", ar: "القتال" }, keys: [
          { k: ["RT"], a: { en: "Shoot / knife slash", ar: "إطلاق النار / ضربة السكين" } },
          { k: ["LT"], a: { en: "Aim / knife stab", ar: "التصويب / طعنة السكين" } },
          { k: ["X"], a: { en: "Reload", ar: "إعادة التعبئة" } },
          { k: ["Y"], a: { en: "Switch weapon", ar: "تبديل السلاح" } },
          { k: ["R3"], a: { en: "Secondary weapon", ar: "السلاح الثانوي" } },
        ] },
        { t: { en: "Move", ar: "الحركة" }, keys: [
          { k: ["A"], a: { en: "Jump, climb, vault", ar: "القفز والتسلق" } },
          { k: ["B"], a: { en: "Crouch / slide, hold to lie prone", ar: "انحناء / تزحلق، مطولًا للانبطاح" } },
          { k: ["L3"], a: { en: "Sprint, twice for tactical sprint", ar: "ركض، ومرتين للركض التكتيكي" } },
        ] },
        { t: { en: "Gear", ar: "العتاد" }, keys: [
          { k: ["RB"], a: { en: "Lethal · plant / defuse · pick up", ar: "القاتل · زرع / تفكيك · التقاط" } },
          { k: ["LB"], a: { en: "Tactical", ar: "الأداة التكتيكية" } },
          { k: ["▼"], a: { en: "Field upgrade (D-pad down)", ar: "ترقية الميدان (السهم السفلي)" } },
          { k: ["▶"], a: { en: "Ping (D-pad right)", ar: "التحديد (السهم الأيمن)" } },
          { k: ["◀"], a: { en: "Inspect (D-pad left)", ar: "التفحّص (السهم الأيسر)" } },
        ] },
        { t: { en: "Menus", ar: "القوائم" }, keys: [
          { k: ["VIEW"], a: { en: "Tap: UAV · hold: scoreboard", ar: "ضغطة: UAV · مطولًا: لوحة النتائج" } },
        ] },
      ] },
      { id: "touch", name: { en: "Phone & tablet", ar: "الجوال والتابلت" }, note: {
          en: "On-screen controls made for a phone. Change how fast you turn with TOUCH SENSITIVITY in Settings.",
          ar: "أزرار على الشاشة مصممة للجوال. غيّر سرعة الالتفات من TOUCH SENSITIVITY في الإعدادات." },
        items: [
          { t: { en: "Left thumb", ar: "الإبهام الأيسر" }, d: { en: "The move stick.", ar: "عصا الحركة." } },
          { t: { en: "Any other finger", ar: "أي إصبع آخر" }, d: { en: "Drag anywhere to look around. The finger on FIRE can drag too.", ar: "اسحب في أي مكان لتلتفت. وحتى الإصبع على زر الإطلاق يستطيع السحب." } },
          { t: { en: "AIM", ar: "التصويب" }, d: { en: "A tap stays aimed, a long press aims only while held.", ar: "ضغطة واحدة تبقيك مصوّبًا، والضغط المطوّل يصوّب ما دمت ضاغطًا." } },
          { t: { en: "Every action", ar: "كل الأفعال" }, d: { en: "Buttons for sprint, crouch, jump, reload, lethal, tactical, field upgrade and more.", ar: "أزرار للركض والانحناء والقفز والتعبئة والقاتل والتكتيكي وترقية الميدان وغيرها." } },
        ] },
    ],
    keyNames: { LMB: { en: "Left click", ar: "زر أيسر" }, RMB: { en: "Right click", ar: "زر أيمن" }, MMB: { en: "Middle click", ar: "زر الوسط" } },

    moveTitle: { en: "Movement", ar: "الحركة" },
    moveIntro: {
      en: "Speed is shown next to walking speed (100%). Your stamina bar is at the bottom left.",
      ar: "السرعة مكتوبة مقارنة بسرعة المشي (100%). شريط القدرة على التحمل أسفل يسار الشاشة.",
    },
    moves: [
      { t: { en: "Walk", ar: "المشي" }, n: "100%", d: { en: "Normal speed. Aiming slows you down.", ar: "السرعة العادية. التصويب يبطئك." } },
      { t: { en: "Crouch", ar: "الانحناء" }, n: "50%", d: { en: "Smaller target, quiet steps.", ar: "هدف أصغر وخطوات أهدأ." } },
      { t: { en: "Prone", ar: "الانبطاح" }, n: "28%", d: { en: "Flat on the ground, less recoil.", ar: "على الأرض تمامًا، وارتداد أقل." } },
      { t: { en: "Sprint", ar: "الركض" }, n: "150%", d: { en: "Uses stamina.", ar: "يستهلك القدرة على التحمل." } },
      { t: { en: "Tactical sprint", ar: "الركض التكتيكي" }, n: "181%", d: { en: "3 seconds of top speed, then it recharges.", ar: "3 ثوانٍ بأقصى سرعة، ثم يُشحن من جديد." } },
      { t: { en: "Slide", ar: "التزحلق" }, n: "213%", d: { en: "Crouch while sprinting. Jump or sprint to cancel it.", ar: "انحنِ أثناء الركض. القفز أو الركض يلغيه." } },
      { t: { en: "Jump-slide", ar: "قفزة مع تزحلق" }, n: "≤ 275%", d: { en: "Press crouch in the air after a sprint jump.", ar: "اضغط الانحناء في الهواء بعد قفزة ركض." } },
      { t: { en: "Dolphin dive", ar: "قفزة الدولفين" }, n: "≤ 250%", d: { en: "Prone while sprinting: dive forward and land flat.", ar: "انبطح أثناء الركض: تقفز للأمام وتهبط منبطحًا." } },
      { t: { en: "Climb & vault", ar: "التسلق والقفز" }, n: "≈ 2.2 m", d: { en: "Jump at a ledge. Low walls you vault, higher ledges you climb.", ar: "اقفز عند الحافة. الجدران المنخفضة تقفز فوقها، والأعلى تتسلقها." } },
    ],
    healthTitle: { en: "Health and damage", ar: "الصحة والضرر" },
    health: [
      { t: { en: "100 health", ar: "100 نقطة صحة" }, d: { en: "Your health bar sits at the bottom left, above your stamina.", ar: "شريط الصحة أسفل يسار الشاشة فوق شريط التحمل." } },
      { t: { en: "Healing", ar: "الشفاء" }, d: { en: "Take no damage for 4 seconds and you heal to full in 2 seconds.", ar: "إذا لم تتلقَّ ضررًا لمدة 4 ثوانٍ، تُشفى بالكامل خلال ثانيتين." } },
      { t: { en: "Fall damage", ar: "ضرر السقوط" }, d: { en: "Drops under about 4 m are safe. From 4 to 11 m you lose 10 to 90 health. Higher is death.", ar: "السقوط أقل من 4 أمتار تقريبًا آمن. من 4 إلى 11 مترًا تخسر من 10 إلى 90 نقطة. وأعلى من ذلك موت." } },
      { t: { en: "Getting hit", ar: "عند الإصابة" }, d: { en: "Red edges and an arrow show where the shot came from.", ar: "حواف حمراء وسهم يوضحان من أين أتت الطلقة." } },
    ],
  },

  /* SQUAD ----------------------------------------------------------------------------------------------- */
  squad: {
    kicker: { en: "Squad", ar: "الفريق" },
    title: { en: "Play with your friends", ar: "العب مع أصدقائك" },
    items: [
      { t: { en: "Party", ar: "مجموعة الأصدقاء" }, d: { en: "Invite friends from the party panel in the main menu. Your party is always on the same team. Up to 6 can join a public match.", ar: "ادعُ أصدقاءك من لوحة المجموعة في القائمة الرئيسية. مجموعتك دائمًا في الفريق نفسه. حتى 6 لاعبين يدخلون مباراة عامة." } },
      { t: { en: "Private match", ar: "مباراة خاصة" }, d: { en: "A party of up to 12 can start its own private server, 6 against 6.", ar: "مجموعة حتى 12 لاعبًا تستطيع فتح خادم خاص بها، 6 ضد 6." } },
      { t: { en: "Practice range", ar: "ميدان التدريب" }, d: { en: "While you wait for players, practise on the live map: targets that stand, crouch and walk, with free gear.", ar: "أثناء انتظار اللاعبين، تدرّب على الخريطة نفسها: أهداف تقف وتنحني وتمشي، مع عتاد مجاني." } },
      { t: { en: "Ping", ar: "التحديد" }, d: { en: "On an enemy: a red mark over their head for 5 s, seen through walls. Anywhere else: a spot mark for 15 s. Only your team sees them.", ar: "على عدو: علامة حمراء فوق رأسه لمدة 5 ثوانٍ تُرى خلف الجدران. في أي مكان آخر: علامة لمدة 15 ثانية. فريقك فقط يراها." } },
      { t: { en: "Spectate", ar: "المشاهدة" }, d: { en: "In a private match anyone can press SPECTATE: fly a free camera or follow a player. Made for filming.", ar: "في المباراة الخاصة يستطيع أي لاعب ضغط SPECTATE: كاميرا حرة أو متابعة لاعب. مناسبة للتصوير." } },
      { t: { en: "Kill feed, kill cam, scoreboard", ar: "سجل القتلى وإعادة القتل ولوحة النتائج" }, d: { en: "See who killed who, watch your death from the killer's eyes, and hold Tab for everyone's score and ping.", ar: "اعرف من قتل من، وشاهد موتك من عيون القاتل، واضغط مطولًا على Tab لترى نتيجة الجميع وسرعة اتصالهم." } },
    ],
  },

  /* SETTINGS -------------------------------------------------------------------------------------------- */
  settings: {
    kicker: { en: "Settings", ar: "الإعدادات" },
    title: { en: "Make it yours", ar: "اجعلها على مقاسك" },
    intro: {
      en: "Seven tabs, saved to your account. A few of the most useful ones:",
      ar: "سبعة أقسام تُحفظ في حسابك. وهذه بعض أهم الإعدادات:",
    },
    tabs: [
      { name: "CONTROLS", rows: [
        ["MOUSE SENSITIVITY", "1", { en: "How fast you turn when not aiming (0.1 to 3).", ar: "سرعة الالتفات بدون تصويب (من 0.1 إلى 3)." }],
        ["AIM SENSITIVITY", "0.7", { en: "How fast you turn while aiming or scoped.", ar: "سرعة الالتفات أثناء التصويب أو المنظار." }],
        ["TOUCH SENSITIVITY", "1", { en: "Phones and tablets: how fast dragging turns you.", ar: "الجوال والتابلت: سرعة الالتفات عند السحب." }],
        ["AIM DOWN SIGHTS", "HOLD", { en: "HOLD to aim, or TOGGLE with one press.", ar: "HOLD: اضغط مطولًا للتصويب. TOGGLE: ضغطة واحدة." }],
        ["CROUCH", "TOGGLE", { en: "TOGGLE: press to crouch, hold to lie prone. HOLD: crouch only while held.", ar: "TOGGLE: اضغط للانحناء ومطولًا للانبطاح. HOLD: انحناء ما دمت ضاغطًا." }],
        ["AUTO SPRINT MODE", "OFF", { en: "AUTO SPRINT runs when you walk forward. AUTO TAC SPRINT starts each sprint as a tactical sprint.", ar: "AUTO SPRINT: تركض عند المشي للأمام. AUTO TAC SPRINT: كل ركضة تبدأ ركضًا تكتيكيًا." }],
      ] },
      { name: "KEYBINDS", rows: [
        ["23 ACTIONS", "—", { en: "Click an action, then press the new key. Space is always Jump.", ar: "اضغط على الفعل ثم اضغط الزر الجديد. وزر Space للقفز دائمًا." }],
      ] },
      { name: "CONTROLLER", rows: [
        ["BUTTON LAYOUT", "DEFAULT", { en: "DEFAULT, TACTICAL, BUMPER JUMPER, FLIPPED or your own.", ar: "DEFAULT أو TACTICAL أو BUMPER JUMPER أو FLIPPED أو ترتيبك الخاص." }],
        ["BUTTON NAMES", "XBOX", { en: "XBOX (A, B, RT) or PLAYSTATION (CROSS, CIRCLE, R2).", ar: "XBOX أو PLAYSTATION." }],
        ["AIM ASSIST", "STANDARD", { en: "STANDARD, PRECISION, FOCUSING or OFF. Controller only.", ar: "STANDARD أو PRECISION أو FOCUSING أو OFF. ليد التحكم فقط." }],
        ["RESPONSE CURVE", "DYNAMIC", { en: "DYNAMIC, STANDARD or LINEAR.", ar: "DYNAMIC أو STANDARD أو LINEAR." }],
        ["VIBRATION", "ON", { en: "The controller shakes when you shoot, hit or get hurt.", ar: "يد التحكم تهتز عند الإطلاق والإصابة." }],
      ] },
      { name: "VIDEO", rows: [
        ["FIELD OF VIEW", "65", { en: "How much of the world you see (50 to 90).", ar: "كم ترى من العالم حولك (من 50 إلى 90)." }],
        ["WEAPON FIELD OF VIEW", "65", { en: "How big your gun looks. Lower = bigger gun.", ar: "حجم السلاح على الشاشة. أقل = سلاح أكبر." }],
        ["MAP DETAIL", "AUTO", { en: "LOW gives the most FPS. AUTO = LOW on phones, MEDIUM on computers.", ar: "LOW يعطي أعلى FPS. AUTO = منخفض على الجوال ومتوسط على الكمبيوتر." }],
        ["SHOW BODY", "ON", { en: "Look down to see your own legs and body.", ar: "انظر للأسفل لترى رجليك وجسمك." }],
        ["SHOW FPS", "OFF", { en: "Frames per second in the top right corner.", ar: "عدد الإطارات في الثانية أعلى يمين الشاشة." }],
      ] },
      { name: "AUDIO", rows: [
        ["MASTER VOLUME", "100%", { en: "Every sound in the game.", ar: "كل أصوات اللعبة." }],
        ["WEAPON VOLUME", "100%", { en: "Shots, reloads, bolts and knives.", ar: "الطلقات وإعادة التعبئة والسكاكين." }],
        ["HIT SOUNDS", "ON", { en: "Sounds for a hit, a headshot and a kill.", ar: "أصوات الإصابة وطلقة الرأس والقتلة." }],
      ] },
      { name: "CROSSHAIR", rows: [
        ["STYLE", "CROSS", { en: "CROSS, CROSS + DOT, DOT, CIRCLE or T-SHAPE.", ar: "صليب، صليب + نقطة، نقطة، دائرة، أو شكل T." }],
        ["COLOR", "WHITE", { en: "Six ready colors or your own mix.", ar: "ستة ألوان جاهزة أو لونك الخاص." }],
        ["CROSSHAIR CODE", "—", { en: "Copy your crosshair as a code and share it. Paste a friend's code to use theirs.", ar: "انسخ علامة التصويب ككود وشاركه. والصق كود صديقك لتستخدم علامته." }],
        ["HITMARKER COLORS", "WHITE · GOLD · RED", { en: "Pick the X's color for a hit, a headshot and a kill.", ar: "اختر لون علامة X للإصابة وطلقة الرأس والقتلة." }],
      ] },
      { name: "INTERFACE", rows: [
        ["MINIMAP", "ON", { en: "The small map in the top left.", ar: "الخريطة الصغيرة أعلى اليسار." }],
        ["MINIMAP ROTATION", "ROTATE", { en: "ROTATE with you, or NORTH UP.", ar: "تدور معك، أو الشمال دائمًا للأعلى." }],
        ["FRIENDLY / ENEMY COLOR", "BLUE / RED", { en: "Your team's and the enemy's color everywhere.", ar: "لون فريقك ولون العدو في كل مكان." }],
        ["MAP PLACE NAMES", "ON", { en: "Place names floating in the map.", ar: "أسماء الأماكن داخل الخريطة." }],
      ] },
    ],
  },

  /* UPDATES --------------------------------------------------------------------------------------------- */
  updates: {
    kicker: { en: "Updates", ar: "التحديثات" },
    title: { en: "Beta log", ar: "سجل النسخة التجريبية" },
    list: [
      { date: "2026-11-09", items: [
        { en: "A white trail behind the knife's blade when you slash.", ar: "أثر أبيض خلف نصل السكين عند الضربة." },
      ] },
      { date: "2026-11-07", items: [
        { en: "A big fairness pass: about 30 fixes to hits, movement checks and match rules.", ar: "مراجعة كبيرة للعدالة: حوالي 30 إصلاحًا للإصابات وفحص الحركة وقواعد المباراة." },
        { en: "The match screen fits small phone screens.", ar: "شاشة المباراة تناسب شاشات الجوال الصغيرة." },
        { en: "A prayer reminder when you join.", ar: "تذكير بالصلاة عند الدخول." },
      ] },
      { date: "2026-11-06", items: [
        { en: "Daily reward: a 7-day ladder of cash and XP.", ar: "المكافأة اليومية: سُلّم من 7 أيام من الكاش والخبرة." },
        { en: "Leaderboards for level, wins and kills, and your career stats.", ar: "لوحات الصدارة للمستوى والانتصارات والقتلات، وسجل مسيرتك." },
      ] },
      { date: "2026-11-05", items: [
        { en: "HOW TO PLAY screen with every control and the rules of every mode.", ar: "شاشة HOW TO PLAY فيها كل الأزرار وقواعد كل الأطوار." },
        { en: "A new results screen, match sounds, menu sounds and a loading screen.", ar: "شاشة نتائج جديدة، وأصوات للمباراة والقوائم، وشاشة تحميل." },
      ] },
      { date: "2026-11-04", items: [
        { en: "Field upgrades: Dead Silence, Ammo Box, Portable UAV, Deployable Cover and Battle Rage.", ar: "ترقيات الميدان: Dead Silence وصندوق الذخيرة وجهاز المسح والغطاء المتنقل وBattle Rage." },
        { en: "UAV killstreak and the minimap.", ar: "طائرة UAV كسلسلة قتل، والخريطة المصغّرة." },
        { en: "New perk system: vest, gloves, boots and gear.", ar: "نظام امتيازات جديد: سترة وقفازات وحذاء ومعدّة." },
        { en: "Throwing stars. Real throwing physics for every grenade and knife.", ar: "نجوم الرمي. وفيزياء رمي واقعية لكل القنابل والسكاكين." },
        { en: "A new feel for every gun: smoke, shell casings, bullet impacts and camera motion.", ar: "إحساس جديد لكل سلاح: دخان، وأظرف فارغة، وآثار الرصاص، وحركة الكاميرا." },
      ] },
      { date: "2026-11-02", items: [
        { en: "Four new modes: Team Deathmatch, Free for All, Domination and Hardpoint.", ar: "أربعة أطوار جديدة: ديثماتش الفرق والكل ضد الكل والسيطرة والنقطة الساخنة." },
        { en: "Vote before every match: map, mode, and all weapons or snipers only.", ar: "تصويت قبل كل مباراة: الخريطة والطور، وكل الأسلحة أو القناصات فقط." },
        { en: "Player level 1 to 55, and cash to unlock things early.", ar: "مستوى اللاعب من 1 إلى 55، والكاش لفتح الأشياء مبكرًا." },
        { en: "Frag grenade, semtex and the RPG-7. Explosions break walls.", ar: "القنبلة اليدوية والسمتكس وRPG-7. والانفجارات تهدم الجدران." },
        { en: "Firing Yard map. Gunsmith for secondary weapons, and paint.", ar: "خريطة ساحة الرماية. وورشة السلاح للأسلحة الثانوية، والطلاء." },
      ] },
      { date: "2026-11-01", items: [
        { en: "Five classes with a primary and a secondary weapon.", ar: "خمس فئات بسلاح أساسي وسلاح ثانوي." },
        { en: "Shotgun attachments and grips.", ar: "ملحقات ومقابض لبنادق الخرطوش." },
      ] },
      { date: "2026-10-31", items: [
        { en: "New weapons: AK-47, MP7, Olympia, Haymaker and M1911.", ar: "أسلحة جديدة: AK-47 وMP7 وOlympia وHaymaker وM1911." },
        { en: "Frostline Depot map.", ar: "خريطة محطة الصقيع." },
        { en: "Camos and gun levels for every weapon.", ar: "تمويهات ومستويات لكل سلاح." },
      ] },
      { date: "2026-10-30", items: [
        { en: "Scarlet map. Stun grenade, Dead Silence, team dots and spectate.", ar: "خريطة سكارلت. قنبلة الصعق وDead Silence ونقاط الفريق والمشاهدة." },
      ] },
      { date: "2026-10-29", items: [
        { en: "Create a class, stim shot, a full settings menu, healing and fall damage.", ar: "إنشاء فئة، حقنة التحفيز، قائمة إعدادات كاملة، الشفاء وضرر السقوط." },
      ] },
      { date: "2026-10-18", items: [
        { en: "Party invites, 6v6 teams, private matches, pings, the throwing knife and Skyline Tower.", ar: "دعوات المجموعة، فرق 6 ضد 6، مباريات خاصة، العلامات، سكين الرمي، وبرج الأفق." },
      ] },
      { date: "2026-10-14", items: [
        { en: "First playable beta: Search & Destroy with the Intervention, kill cam and tactical sprint.", ar: "أول نسخة قابلة للعب: البحث والتدمير مع Intervention وإعادة القتل والركض التكتيكي." },
      ] },
    ],
  },

  /* FAQ ------------------------------------------------------------------------------------------------- */
  faq: {
    kicker: { en: "FAQ", ar: "أسئلة شائعة" },
    title: { en: "Questions", ar: "أسئلة وأجوبة" },
    list: [
      { q: { en: "What do I need to play?", ar: "ماذا أحتاج لألعب؟" }, a: { en: "A free Roblox account. It plays on PC with keyboard and mouse, with a controller, and on phones and tablets with touch controls.", ar: "حساب Roblox مجاني. تعمل على الكمبيوتر بلوحة المفاتيح والفأرة، وبيد التحكم، وعلى الجوال والتابلت بالتحكم باللمس." } },
      { q: { en: "Is it free?", ar: "هل اللعبة مجانية؟" }, a: { en: "Yes. Everything opens by playing: levels, gun levels and cash you earn in matches.", ar: "نعم. كل شيء يُفتح باللعب: المستويات ومستويات الأسلحة والكاش الذي تكسبه من المباريات." } },
      { q: { en: "How many players are in a match?", ar: "كم لاعبًا في المباراة؟" }, a: { en: "Up to 12: two teams of 6, or 12 on their own in Free for All. A match needs at least 2 players to start; until then you can use the practice range.", ar: "حتى 12 لاعبًا: فريقان من 6، أو 12 لاعبًا كل واحد لنفسه في الكل ضد الكل. المباراة تحتاج لاعبين اثنين على الأقل، وحتى ذلك الوقت تستطيع استخدام ميدان التدريب." } },
      { q: { en: "Is it snipers only?", ar: "هل اللعبة قناصات فقط؟" }, a: { en: "Not any more. Before each match the players vote: ALL WEAPONS opens every gun, SNIPERS ONLY keeps the classic snipers-and-knife fight.", ar: "ليس بعد الآن. قبل كل مباراة يصوّت اللاعبون: ALL WEAPONS تفتح كل الأسلحة، وSNIPERS ONLY تبقي المواجهة الكلاسيكية بالقناصات والسكين." } },
      { q: { en: "How do I unlock weapons and perks?", ar: "كيف أفتح الأسلحة والامتيازات؟" }, a: { en: "Level up by playing. Or spend 1,000 cash to open anything early. Cash comes from XP, the daily reward and match wins.", ar: "ارفع مستواك باللعب. أو اصرف 1,000 كاش لتفتح أي شيء مبكرًا. والكاش يأتي من الخبرة والمكافأة اليومية والانتصارات." } },
      { q: { en: "How do I unlock attachments and camos?", ar: "كيف أفتح الملحقات والتمويهات؟" }, a: { en: "Get kills with that gun. Each kill gives 100 XP (150 for a headshot). Level 10 opens every attachment and the Gold and Damascus camos.", ar: "اقتل بذلك السلاح. كل قتلة تعطي 100 نقطة خبرة (150 لقتلة الرأس). المستوى 10 يفتح كل الملحقات وتمويه الذهب والدمشقي." } },
      { q: { en: "How do I play with friends?", ar: "كيف ألعب مع أصدقائي؟" }, a: { en: "Invite them from the party panel in the main menu. Up to 6 for a public match, up to 12 for a private match.", ar: "ادعُهم من لوحة المجموعة في القائمة الرئيسية. حتى 6 لمباراة عامة، وحتى 12 لمباراة خاصة." } },
      { q: { en: "My game feels slow. What can I do?", ar: "اللعبة ثقيلة عندي. ماذا أفعل؟" }, a: { en: "Set SETTINGS > VIDEO > MAP DETAIL to LOW. It hides small decoration and gives the most FPS.", ar: "اجعل SETTINGS ثم VIDEO ثم MAP DETAIL على LOW. يخفي الزينة الصغيرة ويعطي أعلى أداء." } },
      { q: { en: "Can I change the keys?", ar: "هل أستطيع تغيير الأزرار؟" }, a: { en: "Yes. SETTINGS > KEYBINDS for keyboard and mouse, SETTINGS > CONTROLLER for a controller.", ar: "نعم. من SETTINGS ثم KEYBINDS للوحة المفاتيح، ومن SETTINGS ثم CONTROLLER ليد التحكم." } },
    ],
  },
};

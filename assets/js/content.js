/* =====================================================================================================
   ALL THE WEBSITE'S TEXT AND NUMBERS LIVE IN THIS ONE FILE.
   Every text has two languages: { en: "English", ar: "عربي" }.
   To change something on the site, change it here and upload this file again.
   The numbers come from the game's own modules (WeaponStats, WeaponClasses, Attachments, Perks, MatchSettings,
   MovementSettings, HealthSettings, TacticalSettings, SettingsList) on 2026-10-30.
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
    navGame: "Game", navControls: "How to play", navArsenal: "Arsenal", navClasses: "Classes", navMap: "Map",
    navSquad: "Squad", navSettings: "Settings", navUpdates: "Updates", navFaq: "FAQ",
    play: "Play on Roblox", watch: "Watch the trailer", langSwitch: "عربي", menu: "Menu",
    heroTag: "Snipers only. One life a round. One bullet is enough.",
    heroText: "A tactical Search & Destroy shooter on Roblox. Two teams of six, two heavy snipers, a knife, and a rooftop high above the city.",
    trailerSoon: "The trailer is coming soon.",
    trailerSoonSub: "Real gameplay, real sounds, no music.",
    statsTitle: "Numbers", oneShot: "One-shot kill", twoShot: "Two shots",
    zoneHead: "Head", zoneChest: "Chest", zoneStomach: "Stomach", zoneUpperLimbs: "Upper arms & thighs", zoneLowerLimbs: "Forearms, hands, shins, feet",
    damageTitle: "Damage by body part (100 health)",
    level: "Gun level", slot: "Slot", effect: "What it does", unlock: "Unlocks at",
    perkSlot: "Perk", pickOne: "pick one",
    key: "Key", action: "Action",
    open: "Open", tip: "Tip", setting: "Setting", default: "Default", options: "Options",
    footerNote: "Bullet of Mercy is a Roblox game in beta. Everything on this page is taken from the game itself and can change in updates.",
    footerRoblox: "Not made or endorsed by Roblox Corporation.",
    backTop: "Back to top", soon: "Soon",
  },
  ar: {
    navGame: "اللعبة", navControls: "طريقة اللعب", navArsenal: "الأسلحة", navClasses: "الفئات", navMap: "الخريطة",
    navSquad: "الفريق", navSettings: "الإعدادات", navUpdates: "التحديثات", navFaq: "أسئلة",
    play: "العب على Roblox", watch: "شاهد الإعلان", langSwitch: "EN", menu: "القائمة",
    heroTag: "قناصات فقط. حياة واحدة في كل جولة. ورصاصة واحدة تكفي.",
    heroText: "لعبة تصويب تكتيكية بنظام البحث والتدمير على Roblox. فريقان من ستة لاعبين، قناصتان ثقيلتان، سكين، وسطح برج عالٍ فوق المدينة.",
    trailerSoon: "الإعلان قادم قريبًا.",
    trailerSoonSub: "لعب حقيقي وأصوات حقيقية، بدون موسيقى.",
    statsTitle: "الأرقام", oneShot: "قتل بطلقة واحدة", twoShot: "طلقتان",
    zoneHead: "الرأس", zoneChest: "الصدر", zoneStomach: "البطن", zoneUpperLimbs: "أعلى الذراع والفخذ", zoneLowerLimbs: "الساعد واليد والساق والقدم",
    damageTitle: "الضرر حسب مكان الإصابة (الصحة 100)",
    level: "مستوى السلاح", slot: "الخانة", effect: "ماذا يفعل", unlock: "يُفتح عند",
    perkSlot: "امتياز", pickOne: "اختر واحدًا",
    key: "الزر", action: "الفعل",
    open: "فتح", tip: "نصيحة", setting: "الإعداد", default: "الافتراضي", options: "الخيارات",
    footerNote: "رصاصة الرحمة لعبة على Roblox في مرحلة تجريبية. كل ما في هذه الصفحة مأخوذ من اللعبة نفسها وقد يتغير مع التحديثات.",
    footerRoblox: "هذا الموقع ليس من Roblox Corporation ولا تتبناه.",
    backTop: "إلى الأعلى", soon: "قريبًا",
  },
};

/* ---- Sections ---------------------------------------------------------------------------------------- */
window.CONTENT = {

  /* THE GAME ------------------------------------------------------------------------------------------- */
  game: {
    kicker: { en: "The game", ar: "اللعبة" },
    title: { en: "Search & Destroy. Snipers only.", ar: "البحث والتدمير. قناصات فقط." },
    intro: {
      en: "Attackers carry a bomb to site A or B and plant it. Defenders stop them or defuse it. You get one life each round, so every peek counts.",
      ar: "المهاجمون يحملون القنبلة إلى الموقع A أو B ويزرعونها. المدافعون يمنعونهم أو يفككونها. لك حياة واحدة في كل جولة، فكل خطوة لها ثمن.",
    },
    facts: [
      { n: "6v6", t: { en: "players per match", ar: "لاعبين في المباراة" } },
      { n: "6", t: { en: "rounds to win", ar: "جولات للفوز" } },
      { n: "2:00", t: { en: "per round", ar: "مدة الجولة" } },
      { n: "1", t: { en: "life per round", ar: "حياة في الجولة" } },
    ],
    rules: [
      { k: { en: "Plant the bomb", ar: "زرع القنبلة" }, v: { en: "Hold E for 5 s on a site", ar: "اضغط مطولًا على E لمدة 5 ثوانٍ في الموقع" } },
      { k: { en: "Bomb timer", ar: "مؤقت القنبلة" }, v: { en: "45 s, then it explodes", ar: "45 ثانية ثم تنفجر" } },
      { k: { en: "Defuse", ar: "التفكيك" }, v: { en: "Hold E for 7.5 s", ar: "اضغط مطولًا على E لمدة 7.5 ثانية" } },
      { k: { en: "Switch sides", ar: "تبديل الجهتين" }, v: { en: "After round 5", ar: "بعد الجولة الخامسة" } },
      { k: { en: "Friendly fire", ar: "إصابة الزملاء" }, v: { en: "Off", ar: "مغلقة" } },
      { k: { en: "Explosion", ar: "الانفجار" }, v: { en: "Blast radius about 8 m", ar: "نصف قطر الانفجار حوالي 8 أمتار" } },
    ],
    flow: [
      { t: { en: "Deploy", ar: "انطلق" }, d: { en: "Press DEPLOY in the main menu. You join a team of up to six.", ar: "اضغط DEPLOY في القائمة الرئيسية لتنضم إلى فريق من ستة لاعبين كحد أقصى." } },
      { t: { en: "Pre-round", ar: "قبل الجولة" }, d: { en: "Five seconds to get ready. A class you pick now is used this round.", ar: "خمس ثوانٍ للاستعداد. الفئة التي تختارها الآن تُستخدم في هذه الجولة." } },
      { t: { en: "Live", ar: "الجولة" }, d: { en: "Two minutes. Wipe the other team, or plant / defuse the bomb.", ar: "دقيقتان. اقضِ على الفريق الآخر، أو ازرع القنبلة أو فككها." } },
      { t: { en: "Kill cam", ar: "إعادة القتل" }, d: { en: "See how you died. The last kill of each round plays as the FINAL KILLCAM.", ar: "شاهد كيف قُتلت. آخر قتلة في الجولة تُعرض كـ FINAL KILLCAM." } },
    ],
    features: [
      { t: { en: "Movement that flows", ar: "حركة سلسة" }, d: { en: "Sprint, tactical sprint, slide, jump-slide, slide cancel, climb and vault.", ar: "ركض، ركض تكتيكي، تزحلق، قفزة مع تزحلق، إلغاء التزحلق، تسلق وقفز فوق الحواجز." } },
      { t: { en: "Real 3D scopes", ar: "مناظير ثلاثية الأبعاد" }, d: { en: "You look through the gun's own scope, with a full-screen zoom.", ar: "تنظر من خلال منظار السلاح نفسه، مع تقريب يملأ الشاشة." } },
      { t: { en: "Your class, your way", ar: "فئتك كما تريد" }, d: { en: "Five classes: sniper, knife, lethal, tactical, three perks and four attachments.", ar: "خمس فئات: قناصة، سكين، سلاح قاتل، أداة تكتيكية، ثلاثة امتيازات وأربعة ملحقات." } },
      { t: { en: "Play as a squad", ar: "العب مع فريقك" }, d: { en: "Party invites, private matches, pings and teammate markers.", ar: "دعوات الفريق، مباريات خاصة، علامات تحديد، ونقاط تُظهر زملاءك." } },
    ],
  },

  /* HOW TO PLAY ------------------------------------------------------------------------------------- */
  controls: {
    kicker: { en: "How to play", ar: "طريقة اللعب" },
    title: { en: "Controls", ar: "التحكم" },
    intro: {
      en: "These are the default keys for keyboard and mouse. You can change every key in SETTINGS > KEYBINDS.",
      ar: "هذه الأزرار الافتراضية للوحة المفاتيح والفأرة. تستطيع تغيير أي زر من SETTINGS ثم KEYBINDS.",
    },
    groups: [
      { t: { en: "Move", ar: "الحركة" }, keys: [
        { k: ["W", "A", "S", "D"], a: { en: "Walk", ar: "المشي" } },
        { k: ["Shift"], a: { en: "Sprint (hold)", ar: "الركض (اضغط مطولًا)" } },
        { k: ["Shift", "Shift"], a: { en: "Tactical sprint (double-tap)", ar: "الركض التكتيكي (ضغطتان سريعتان)" } },
        { k: ["C"], alt: ["Ctrl"], a: { en: "Crouch, or slide while sprinting", ar: "الانحناء، أو التزحلق أثناء الركض" } },
        { k: ["Space"], a: { en: "Jump, climb, vault, slide cancel", ar: "القفز، التسلق، القفز فوق الحاجز، إلغاء التزحلق" } },
      ] },
      { t: { en: "Fight", ar: "القتال" }, keys: [
        { k: ["LMB"], a: { en: "Shoot / knife slash", ar: "إطلاق النار / ضربة السكين" } },
        { k: ["RMB"], a: { en: "Aim (scope) / knife stab", ar: "التصويب بالمنظار / طعنة السكين" } },
        { k: ["R"], a: { en: "Reload", ar: "إعادة التعبئة" } },
        { k: ["1"], alt: ["2"], a: { en: "Sniper / knife (or the mouse wheel)", ar: "القناصة / السكين (أو عجلة الفأرة)" } },
        { k: ["F"], a: { en: "Inspect your weapon", ar: "تفحّص سلاحك" } },
      ] },
      { t: { en: "Gear", ar: "العتاد" }, keys: [
        { k: ["E"], a: { en: "Throwing knife (hold to wait, let go to throw)", ar: "سكين الرمي (اضغط مطولًا للتجهيز، واترك للرمي)" } },
        { k: ["E"], a: { en: "On a site: plant or defuse the bomb (hold)", ar: "في الموقع: زرع القنبلة أو تفكيكها (اضغط مطولًا)" } },
        { k: ["Q"], a: { en: "Tactical: stim shot or stun grenade", ar: "الأداة التكتيكية: حقنة التحفيز أو قنبلة الصعق" } },
        { k: ["MMB"], a: { en: "Ping an enemy or a spot", ar: "تحديد عدو أو مكان" } },
      ] },
      { t: { en: "Menus", ar: "القوائم" }, keys: [
        { k: ["B"], a: { en: "Create a class (works in a match too)", ar: "إنشاء فئة (يعمل داخل المباراة أيضًا)" } },
        { k: ["P"], a: { en: "Settings (main menu only)", ar: "الإعدادات (من القائمة الرئيسية فقط)" } },
        { k: ["G"], a: { en: "Armory: your weapon colors (main menu)", ar: "المستودع: ألوان سلاحك (القائمة الرئيسية)" } },
        { k: ["M"], a: { en: "Free the mouse (for chat and menus)", ar: "إظهار مؤشر الفأرة (للدردشة والقوائم)" } },
      ] },
    ],
    keyNames: { LMB: { en: "Left click", ar: "زر أيسر" }, RMB: { en: "Right click", ar: "زر أيمن" }, MMB: { en: "Middle click", ar: "زر الوسط" } },

    moveTitle: { en: "Movement", ar: "الحركة" },
    moveIntro: {
      en: "Speed is shown next to walking speed (100%). Your stamina bar is at the bottom left.",
      ar: "السرعة مكتوبة مقارنة بسرعة المشي (100%). شريط القدرة على التحمل أسفل يسار الشاشة.",
    },
    moves: [
      { t: { en: "Walk", ar: "المشي" }, n: "100%", d: { en: "Normal speed. Aiming slows you to about 60%.", ar: "السرعة العادية. التصويب يبطئك إلى 60% تقريبًا." } },
      { t: { en: "Crouch", ar: "الانحناء" }, n: "50%", d: { en: "Smaller target, quiet steps.", ar: "هدف أصغر وخطوات أهدأ." } },
      { t: { en: "Sprint", ar: "الركض" }, n: "150%", d: { en: "Uses stamina. Out of stamina? You can sprint again at 30%.", ar: "يستهلك القدرة على التحمل. إذا نفدت، تركض من جديد عند 30%." } },
      { t: { en: "Tactical sprint", ar: "الركض التكتيكي" }, n: "181%", d: { en: "3 seconds of top speed, then it recharges for 4 seconds.", ar: "3 ثوانٍ بأقصى سرعة، ثم يُشحن خلال 4 ثوانٍ." } },
      { t: { en: "Slide", ar: "التزحلق" }, n: "213%", d: { en: "Crouch while sprinting. A slide costs no stamina.", ar: "انحنِ أثناء الركض. التزحلق لا يستهلك القدرة على التحمل." } },
      { t: { en: "Jump-slide", ar: "قفزة مع تزحلق" }, n: "250%", d: { en: "Press crouch in the air after a sprint jump. Goes about 50% further.", ar: "اضغط الانحناء في الهواء بعد قفزة ركض. تقطع مسافة أطول بحوالي 50%." } },
      { t: { en: "Slide cancel", ar: "إلغاء التزحلق" }, n: "Space", d: { en: "Space while sliding: stand up fast and get your tactical sprint back.", ar: "Space أثناء التزحلق: تقف بسرعة ويرجع لك الركض التكتيكي." } },
      { t: { en: "Climb & vault", ar: "التسلق والقفز" }, n: "≈ 2.2 m", d: { en: "Space at a ledge. Low thin walls you vault over, higher ledges you climb.", ar: "Space عند الحافة. الجدران المنخفضة تقفز فوقها، والحواف الأعلى تتسلقها." } },
    ],

    healthTitle: { en: "Health and damage", ar: "الصحة والضرر" },
    health: [
      { t: { en: "100 health", ar: "100 نقطة صحة" }, d: { en: "Your health bar sits at the bottom left, above your stamina.", ar: "شريط الصحة أسفل يسار الشاشة فوق شريط التحمل." } },
      { t: { en: "Healing", ar: "الشفاء" }, d: { en: "Take no damage for 4 seconds and you heal to full in 2 seconds.", ar: "إذا لم تتلقَّ ضررًا لمدة 4 ثوانٍ، تُشفى بالكامل خلال ثانيتين." } },
      { t: { en: "Fall damage", ar: "ضرر السقوط" }, d: { en: "Drops under about 4 m are safe. From 4 to 11 m you lose 10 to 90 health. Higher is death.", ar: "السقوط أقل من 4 أمتار تقريبًا آمن. من 4 إلى 11 مترًا تخسر من 10 إلى 90 نقطة. وأعلى من ذلك موت." } },
      { t: { en: "Off the roof", ar: "السقوط من السطح" }, d: { en: "The map has no walls at the edge. Fall off and you die. If an enemy hit you in the 5 seconds before, it is their kill.", ar: "لا توجد حواجز على حافة الخريطة. إذا سقطت تموت. وإذا أصابك عدو قبلها بخمس ثوانٍ تُحسب القتلة له." } },
      { t: { en: "Getting hit", ar: "عند الإصابة" }, d: { en: "Red edges and an arrow show where the shot came from. At low health you hear your heartbeat.", ar: "حواف حمراء وسهم يوضحان من أين أتت الطلقة. وعند انخفاض صحتك تسمع نبضات قلبك." } },
    ],
  },

  /* ARSENAL ----------------------------------------------------------------------------------------- */
  arsenal: {
    kicker: { en: "Arsenal", ar: "الأسلحة" },
    title: { en: "Two snipers. One rule each.", ar: "قناصتان. ولكل واحدة قاعدتها." },
    intro: {
      en: "Both snipers fire a bolt-action shot every 1.1 seconds, hold 5 rounds with 25 spare, reload in 2.5 seconds and reach about 700 m. What sets them apart is where one bullet kills.",
      ar: "القناصتان تطلقان طلقة كل 1.1 ثانية بنظام الترباس، وفي كل مخزن 5 طلقات مع 25 احتياطية، وإعادة التعبئة 2.5 ثانية، والمدى حوالي 700 متر. الفرق بينهما في مكان القتل بطلقة واحدة.",
    },
    guns: [
      {
        id: "intervention", name: "INTERVENTION", img: "assets/img/intervention.png",
        role: { en: "The light sniper", ar: "القناصة الخفيفة" },
        rule: { en: "Only a headshot kills in one shot.", ar: "طلقة الرأس فقط تقتل بطلقة واحدة." },
        about: { en: "Faster to aim and lighter to carry. Reward for players who hit heads.", ar: "أسرع في التصويب وأخف في الحمل. مكافأة لمن يصيب الرؤوس." },
        stats: [
          { k: { en: "Damage", ar: "الضرر" }, v: "85", p: 85 },
          { k: { en: "Aim speed", ar: "سرعة التصويب" }, v: "0.20 s", p: 100 },
          { k: { en: "Mobility", ar: "خفة الحركة" }, v: "105%", p: 95 },
          { k: { en: "Kick", ar: "الارتداد" }, v: "3.5°", p: 70 },
          { k: { en: "Range", ar: "المدى" }, v: "≈ 700 m", p: 100 },
        ],
        zones: { head: 170, chest: 85, stomach: 77, upper: 68, lower: 60 },
      },
      {
        id: "hs50", name: "HS .50-M1", img: "assets/img/hs50.png",
        role: { en: "The heavy sniper", ar: "القناصة الثقيلة" },
        rule: { en: "Head or chest kills in one shot.", ar: "الرأس أو الصدر يقتل بطلقة واحدة." },
        about: { en: "A .50 calibre with an open bipod. Slower to aim and move, but more forgiving.", ar: "عيار 50 مع حامل مفتوح. أبطأ في التصويب والحركة، لكنها تسامحك أكثر." },
        stats: [
          { k: { en: "Damage", ar: "الضرر" }, v: "100", p: 100 },
          { k: { en: "Aim speed", ar: "سرعة التصويب" }, v: "0.32 s", p: 62 },
          { k: { en: "Mobility", ar: "خفة الحركة" }, v: "90%", p: 80 },
          { k: { en: "Kick", ar: "الارتداد" }, v: "5°", p: 100 },
          { k: { en: "Range", ar: "المدى" }, v: "≈ 700 m", p: 100 },
        ],
        zones: { head: 200, chest: 100, stomach: 80, upper: 70, lower: 60 },
      },
    ],
    meleeTitle: { en: "Melee", ar: "السلاح الأبيض" },
    melee: {
      name: "KARAMBIT", img: "assets/img/karambit.png",
      d: { en: "Out of bullets, or too close for a scope? Switch to the karambit. With it out you move 10% faster and your stamina lasts 50% longer.", ar: "نفدت الطلقات أو العدو قريب جدًا على المنظار؟ بدّل إلى الكارامبيت. معه تتحرك أسرع بـ 10% وتدوم قدرتك على التحمل أطول بـ 50%." },
      stats: [
        { k: { en: "Slash (left click)", ar: "ضربة (زر أيسر)" }, v: "55" },
        { k: { en: "Stab (right click)", ar: "طعنة (زر أيمن)" }, v: { en: "110 · kill", ar: "110 · قتل" } },
        { k: { en: "Reach", ar: "المدى" }, v: "≈ 1.8 m" },
      ],
    },
    gearTitle: { en: "Lethal and tactical", ar: "القاتل والتكتيكي" },
    gear: [
      {
        name: "THROWING KNIFE", img: "assets/img/throwing-knife.png", slot: { en: "Lethal · E", ar: "قاتل · E" },
        d: { en: "Kills in one hit. Hold E to keep it ready, let go to throw. You carry one: walk over it to take it back. It comes back to you by itself 3 s after it is lost.", ar: "يقتل بضربة واحدة. اضغط مطولًا على E لتجهيزه واتركه للرمي. معك سكين واحد: امشِ فوقه لتستعيده. وإذا ضاع يعود إليك بعد 3 ثوانٍ." },
        tip: { en: "Silent shot: press E within a quarter second after a sniper kill and the sound of your shot is cut off.", ar: "الطلقة الصامتة: اضغط E خلال ربع ثانية بعد قتلة بالقناصة فينقطع صوت طلقتك." },
      },
      {
        name: "STIM SHOT", img: "assets/img/stim.png", slot: { en: "Tactical · Q", ar: "تكتيكي · Q" },
        d: { en: "Stab it into your arm: full health in 0.6 seconds and a full stamina bar. One per life.", ar: "اغرسها في ذراعك: صحة كاملة خلال 0.6 ثانية وشريط تحمل ممتلئ. واحدة في كل حياة." },
      },
      {
        name: "STUN GRENADE", img: "assets/img/stun-grenade.png", slot: { en: "Tactical · Q", ar: "تكتيكي · Q" },
        d: { en: "Goes off 1.4 s after the throw. Enemies within about 6 m who can see it get a white screen, muffled sound, slow moves and slow aim for up to 4 s. It never stuns teammates, but it can stun you.", ar: "تنفجر بعد 1.4 ثانية من رميها. الأعداء في حدود 6 أمتار تقريبًا ممن يرونها: شاشة بيضاء، صوت مكتوم، حركة وتصويب بطيئان لمدة تصل إلى 4 ثوانٍ. لا تصعق زملاءك، لكنها قد تصعقك أنت." },
      },
    ],
  },

  /* CLASSES ----------------------------------------------------------------------------------------- */
  classes: {
    kicker: { en: "Create a class", ar: "إنشاء فئة" },
    title: { en: "Five classes. Build each one.", ar: "خمس فئات. جهّز كل واحدة." },
    intro: {
      en: "Press B in the main menu or in a match. Change your class in the pre-round and it is used right away; change it later and it is used next round.",
      ar: "اضغط B في القائمة الرئيسية أو أثناء المباراة. إذا غيّرت فئتك قبل بداية الجولة تُستخدم فورًا، وإذا غيّرتها بعد ذلك تُستخدم في الجولة القادمة.",
    },
    slots: [
      { k: { en: "Primary", ar: "السلاح الأساسي" }, v: "INTERVENTION / HS .50-M1" },
      { k: { en: "Melee", ar: "السلاح الأبيض" }, v: "KARAMBIT" },
      { k: { en: "Lethal", ar: "القاتل" }, v: "THROWING KNIFE" },
      { k: { en: "Tactical", ar: "التكتيكي" }, v: "STIM SHOT / STUN GRENADE" },
      { k: { en: "Perks", ar: "الامتيازات" }, v: { en: "3 (one from each group)", ar: "3 (واحد من كل مجموعة)" } },
      { k: { en: "Attachments", ar: "الملحقات" }, v: { en: "Up to 4 per sniper", ar: "حتى 4 لكل قناصة" } },
    ],
    levelTitle: { en: "Gun levels", ar: "مستوى السلاح" },
    levelText: {
      en: "Each sniper levels up on its own, from 1 to 10. A kill with it gives 100 XP, a headshot kill 50 more. Level 10 takes 6,300 XP, about 50 kills, and unlocks every attachment.",
      ar: "كل قناصة ترتفع في المستوى وحدها، من 1 إلى 10. القتلة بها تعطي 100 نقطة خبرة، وقتلة الرأس 50 نقطة إضافية. المستوى 10 يحتاج 6,300 نقطة، أي حوالي 50 قتلة، ويفتح كل الملحقات.",
    },
    attachTitle: { en: "Attachments", ar: "الملحقات" },
    attachNote: {
      en: "Attachments change handling only. They never change damage, so the one-shot rules stay the same.",
      ar: "الملحقات تغيّر طريقة التعامل مع السلاح فقط، ولا تغيّر الضرر أبدًا، فتبقى قواعد القتل بطلقة واحدة كما هي.",
    },
    slotNames: {
      Muzzle: { en: "Muzzle / barrel", ar: "الفوهة / السبطانة" },
      Optic: { en: "Optic", ar: "المنظار" },
      Magazine: { en: "Magazine", ar: "المخزن" },
      Stock: { en: "Stock / grip", ar: "الأخمص / المقبض" },
    },
    // good: true = green, false = red, null = neutral
    attachments: [
      { lvl: 1, slot: "Magazine", name: "FAST MAG", fx: [[{ en: "+25% reload speed", ar: "+25% سرعة التعبئة" }, true], [{ en: "-5 spare bullets", ar: "-5 طلقات احتياطية" }, false]] },
      { lvl: 2, slot: "Stock", name: "LIGHT STOCK", fx: [[{ en: "+12% aim speed", ar: "+12% سرعة التصويب" }, true], [{ en: "+3% mobility", ar: "+3% خفة الحركة" }, true], [{ en: "+15% kick", ar: "+15% ارتداد" }, false]] },
      { lvl: 3, slot: "Muzzle", name: "MUZZLE BRAKE", fx: [[{ en: "-30% kick", ar: "-30% ارتداد" }, true], [{ en: "-6% aim speed", ar: "-6% سرعة التصويب" }, false]] },
      { lvl: 4, slot: "Muzzle", name: "SHORT BARREL", fx: [[{ en: "+8% aim speed", ar: "+8% سرعة التصويب" }, true], [{ en: "+3% mobility", ar: "+3% خفة الحركة" }, true], [{ en: "-30% range", ar: "-30% المدى" }, false], [{ en: "+15% kick", ar: "+15% ارتداد" }, false]] },
      { lvl: 5, slot: "Optic", name: "LOW-ZOOM SCOPE", fx: [[{ en: "Less zoom, wider view", ar: "تقريب أقل ورؤية أوسع" }, null], [{ en: "+10% aim speed", ar: "+10% سرعة التصويب" }, true]] },
      { lvl: 6, slot: "Stock", name: "HEAVY STOCK", fx: [[{ en: "-20% kick", ar: "-20% ارتداد" }, true], [{ en: "-10% aim speed", ar: "-10% سرعة التصويب" }, false], [{ en: "-3% mobility", ar: "-3% خفة الحركة" }, false]] },
      { lvl: 7, slot: "Muzzle", name: "SUPPRESSOR", fx: [[{ en: "Quieter shot, heard less far", ar: "طلقة أهدأ تُسمع من مسافة أقل" }, true], [{ en: "-20% range", ar: "-20% المدى" }, false], [{ en: "-5% aim speed", ar: "-5% سرعة التصويب" }, false]] },
      { lvl: 8, slot: "Magazine", name: "EXTENDED MAG", fx: [[{ en: "+2 bullets in the mag", ar: "+2 طلقة في المخزن" }, true], [{ en: "+10 spare bullets", ar: "+10 طلقات احتياطية" }, true], [{ en: "-15% reload speed", ar: "-15% سرعة التعبئة" }, false], [{ en: "-2% mobility", ar: "-2% خفة الحركة" }, false]] },
      { lvl: 9, slot: "Muzzle", name: "LONG BARREL", fx: [[{ en: "+30% range", ar: "+30% المدى" }, true], [{ en: "-10% kick", ar: "-10% ارتداد" }, true], [{ en: "-8% aim speed", ar: "-8% سرعة التصويب" }, false], [{ en: "-3% mobility", ar: "-3% خفة الحركة" }, false]] },
      { lvl: 10, slot: "Optic", name: "HIGH-ZOOM SCOPE", fx: [[{ en: "More zoom, narrower view", ar: "تقريب أكثر ورؤية أضيق" }, null], [{ en: "-10% aim speed", ar: "-10% سرعة التصويب" }, false]] },
    ],
    perkTitle: { en: "Perks", ar: "الامتيازات" },
    perkGroups: [
      [
        { name: "LIGHTWEIGHT", d: { en: "Move 5% faster.", ar: "تتحرك أسرع بـ 5%." } },
        { name: "SCAVENGER", d: { en: "Walk over a fallen player's ammo pack to get a magazine of spare bullets and your lethal back. Packs stay 30 s.", ar: "امشِ فوق حقيبة ذخيرة لاعب سقط لتأخذ مخزنًا احتياطيًا وتستعيد سلاحك القاتل. الحقيبة تبقى 30 ثانية." } },
      ],
      [
        { name: "QUICK FIX", d: { en: "A kill starts your healing right away.", ar: "القتلة تبدأ شفاءك فورًا." } },
        { name: "STEADY AIM", d: { en: "Aim in 10% faster.", ar: "تصوّب أسرع بـ 10%." } },
      ],
      [
        { name: "COLD-BLOODED", d: { en: "Enemies can't ping you.", ar: "الأعداء لا يستطيعون تحديدك بالعلامة." } },
        { name: "TRACKER", d: { en: "See enemy footprints for 3 seconds.", ar: "ترى آثار أقدام الأعداء لمدة 3 ثوانٍ." } },
        { name: "DEAD SILENCE", d: { en: "Nobody hears your steps, jumps, landings or slides.", ar: "لا أحد يسمع خطواتك أو قفزاتك أو هبوطك أو تزحلقك." } },
      ],
    ],
  },

  /* MAP --------------------------------------------------------------------------------------------- */
  map: {
    kicker: { en: "Map", ar: "الخريطة" },
    title: { en: "Skyline Tower", ar: "برج الأفق" },
    intro: {
      en: "A rooftop under construction, high above a city in the haze. Defenders spawn in the north building, attackers in the south. There are no rails at the edge.",
      ar: "سطح برج تحت الإنشاء، عاليًا فوق مدينة يغطيها الضباب. المدافعون يبدأون في المبنى الشمالي، والمهاجمون في المبنى الجنوبي. ولا توجد حواجز على الحافة.",
    },
    shots: [
      { img: "assets/img/map-overview.jpg", c: { en: "The deck: helipad in the middle, site A to its right.", ar: "السطح: مهبط الطائرة في الوسط، والموقع A على يمينه." } },
      { img: "assets/img/map-helipad.jpg", c: { en: "The helipad, looking north.", ar: "مهبط الطائرة باتجاه الشمال." } },
      { img: "assets/img/map-crane.jpg", c: { en: "On top of the climbable crane.", ar: "فوق الرافعة التي يمكن تسلقها." } },
      { img: "assets/img/map-city.jpg", c: { en: "The city below the tower.", ar: "المدينة تحت البرج." } },
    ],
    areas: [
      { t: { en: "Site A", ar: "الموقع A" }, d: { en: "An open deck next to the AC units and the slanted tank. The defenders get there first.", ar: "سطح مكشوف بجانب وحدات التكييف والخزان المائل. المدافعون يصلون إليه أولًا." } },
      { t: { en: "Site B", ar: "الموقع B" }, d: { en: "A lane on the west side between two walled yards. A and B are only about 4 seconds apart.", ar: "ممر في الجهة الغربية بين ساحتين محاطتين بالجدران. والمسافة بين A وB حوالي 4 ثوانٍ فقط." } },
      { t: { en: "Helipad", ar: "مهبط الطائرة" }, d: { en: "A raised deck with a helicopter and a garage underneath. High ground over the middle.", ar: "سطح مرتفع عليه طائرة مروحية وتحته مرآب. أرض عالية تطل على الوسط." } },
      { t: { en: "Lower level", ar: "المستوى السفلي" }, d: { en: "Tunnels, an underpass and two open pits below the deck. A quiet way across the map.", ar: "أنفاق وممر سفلي وحفرتان مكشوفتان تحت السطح. طريق هادئ لعبور الخريطة." } },
      { t: { en: "Rooftops", ar: "الأسطح" }, d: { en: "Both spawn buildings have climb routes to their roofs: ledges, AC units and a fire escape.", ar: "في مبنى كل فريق طريق تسلق إلى سطحه: حواف ووحدات تكييف وسلم طوارئ." } },
      { t: { en: "The crane", ar: "الرافعة" }, d: { en: "Climb it step by step and walk out onto the arm for trick shots over the drop.", ar: "تسلقها خطوة بخطوة وامشِ على ذراعها لطلقات استعراضية فوق الهاوية." } },
    ],
    tip: {
      en: "Turn on MAP PLACE NAMES in Settings to see every area's name in the map, in Arabic and English.",
      ar: "فعّل MAP PLACE NAMES من الإعدادات لترى اسم كل منطقة داخل الخريطة بالعربي والإنجليزي.",
    },
  },

  /* SQUAD ------------------------------------------------------------------------------------------- */
  squad: {
    kicker: { en: "Squad", ar: "الفريق" },
    title: { en: "Play with your friends", ar: "العب مع أصدقائك" },
    items: [
      { t: { en: "Party", ar: "مجموعة الأصدقاء" }, d: { en: "Invite friends from the party panel at the top right of the main menu. Your party is always on the same team. Up to 6 can join a public match.", ar: "ادعُ أصدقاءك من لوحة المجموعة أعلى يمين القائمة الرئيسية. مجموعتك دائمًا في الفريق نفسه. حتى 6 لاعبين يدخلون مباراة عامة." } },
      { t: { en: "Private match", ar: "مباراة خاصة" }, d: { en: "A party of up to 12 can start its own private server, 6 against 6.", ar: "مجموعة حتى 12 لاعبًا تستطيع فتح خادم خاص بها، 6 ضد 6." } },
      { t: { en: "Spectate", ar: "المشاهدة" }, d: { en: "In a private match anyone can press SPECTATE: fly a free camera or follow a player. Made for filming.", ar: "في المباراة الخاصة يستطيع أي لاعب ضغط SPECTATE: كاميرا حرة أو متابعة لاعب. مناسبة للتصوير." } },
      { t: { en: "Ping", ar: "التحديد" }, d: { en: "Middle click. On an enemy: a red mark over their head for 5 s, seen through walls. Anywhere else: a spot mark for 15 s, up to 3 at once. Only your team sees them.", ar: "زر الفأرة الأوسط. على عدو: علامة حمراء فوق رأسه لمدة 5 ثوانٍ تُرى خلف الجدران. في أي مكان آخر: علامة لمدة 15 ثانية، حتى 3 علامات معًا. فريقك فقط يراها." } },
      { t: { en: "Team dots", ar: "نقاط الفريق" }, d: { en: "Blue dots show your teammates, even through walls. A red dot shows over an enemy only while you can see them.", ar: "نقاط زرقاء تُظهر زملاءك حتى خلف الجدران. والنقطة الحمراء تظهر فوق العدو فقط عندما تراه." } },
      { t: { en: "Kill feed and kill cam", ar: "سجل القتلى وإعادة القتل" }, d: { en: "See who killed who, then watch your death from the killer's eyes.", ar: "اعرف من قتل من، ثم شاهد موتك من عيون القاتل." } },
    ],
  },

  /* SETTINGS ---------------------------------------------------------------------------------------- */
  settings: {
    kicker: { en: "Settings", ar: "الإعدادات" },
    title: { en: "Make it yours", ar: "اجعلها على مقاسك" },
    intro: {
      en: "Open SETTINGS from the main menu (or press P there). Your settings are saved to your account.",
      ar: "افتح SETTINGS من القائمة الرئيسية (أو اضغط P هناك). إعداداتك تُحفظ في حسابك.",
    },
    tabs: [
      { name: "CONTROLS", rows: [
        ["MOUSE SENSITIVITY", "1", { en: "How fast you turn when not aiming (0.1 to 3).", ar: "سرعة الالتفات بدون تصويب (من 0.1 إلى 3)." }],
        ["AIM SENSITIVITY", "0.7", { en: "How fast you turn while scoped (0.1 to 1.5).", ar: "سرعة الالتفات أثناء التصويب بالمنظار (من 0.1 إلى 1.5)." }],
        ["INVERT MOUSE Y", "OFF", { en: "Moving the mouse up looks down.", ar: "تحريك الفأرة للأعلى ينظر للأسفل." }],
        ["AIM DOWN SIGHTS", "HOLD", { en: "HOLD right mouse to aim, or TOGGLE with one click.", ar: "HOLD: اضغط مطولًا للتصويب. TOGGLE: ضغطة واحدة." }],
        ["SPRINT", "HOLD", { en: "HOLD the sprint key, or TOGGLE it once.", ar: "HOLD: اضغط مطولًا للركض. TOGGLE: ضغطة واحدة." }],
        ["AUTO SPRINT MODE", "OFF", { en: "AUTO SPRINT runs when you walk forward. AUTO TAC SPRINT starts each sprint as a tactical sprint.", ar: "AUTO SPRINT: تركض عند المشي للأمام. AUTO TAC SPRINT: كل ركضة تبدأ ركضًا تكتيكيًا." }],
      ] },
      { name: "KEYBINDS", rows: [
        ["16 KEYS", "—", { en: "Click an action, then press the new key. A key already in use swaps with it. Space is always Jump.", ar: "اضغط على الفعل ثم اضغط الزر الجديد. إذا كان الزر مستخدمًا يتبادلان. وزر Space للقفز دائمًا." }],
      ] },
      { name: "VIDEO", rows: [
        ["FIELD OF VIEW", "65", { en: "How much of the world you see (50 to 90).", ar: "كم ترى من العالم حولك (من 50 إلى 90)." }],
        ["WEAPON FIELD OF VIEW", "65", { en: "How big your gun looks. Lower = bigger gun.", ar: "حجم السلاح على الشاشة. أقل = سلاح أكبر." }],
        ["CAMERA MOTION", "100%", { en: "Camera bob, landing dip and slide tilt. Lower it if motion bothers you.", ar: "اهتزاز الكاميرا عند المشي والهبوط والتزحلق. خففه إذا أزعجك." }],
        ["BRIGHTNESS", "0", { en: "Darker or brighter picture (-50 to 50).", ar: "صورة أغمق أو أفتح (من 50- إلى 50)." }],
        ["MAP DETAIL", "AUTO", { en: "How much map decoration is drawn. LOW gives the most FPS. AUTO = LOW on phones, MEDIUM on computers.", ar: "كمية الزينة المرسومة في الخريطة. LOW يعطي أعلى FPS. AUTO = منخفض على الجوال ومتوسط على الكمبيوتر." }],
        ["SHOW FPS", "OFF", { en: "Frames per second in the top right corner.", ar: "عدد الإطارات في الثانية أعلى يمين الشاشة." }],
      ] },
      { name: "AUDIO", rows: [
        ["MASTER VOLUME", "100%", { en: "Every sound in the game.", ar: "كل أصوات اللعبة." }],
        ["WEAPON VOLUME", "100%", { en: "Shots, reloads, bolts and knives.", ar: "الطلقات وإعادة التعبئة والترباس والسكاكين." }],
        ["EFFECTS VOLUME", "100%", { en: "Footsteps, pings, menus and the world.", ar: "الخطوات والعلامات والقوائم وأصوات العالم." }],
      ] },
      { name: "INTERFACE", rows: [
        ["CROSSHAIR COLOR", "WHITE", { en: "White, green, cyan, yellow or pink.", ar: "أبيض أو أخضر أو سماوي أو أصفر أو وردي." }],
        ["HITMARKERS", "ON", { en: "The small X when your shot hits.", ar: "علامة X الصغيرة عند إصابة طلقتك." }],
        ["MAP PLACE NAMES", "ON", { en: "Area names floating in the map.", ar: "أسماء المناطق داخل الخريطة." }],
        ["KILL FEED", "ON", { en: "The list of who killed who.", ar: "قائمة من قتل من." }],
      ] },
    ],
  },

  /* UPDATES ------------------------------------------------------------------------------------------ */
  updates: {
    kicker: { en: "Updates", ar: "التحديثات" },
    title: { en: "Beta log", ar: "سجل النسخة التجريبية" },
    list: [
      { date: "2026-10-30", items: [
        { en: "Stun grenade: a second tactical on Q.", ar: "قنبلة الصعق: أداة تكتيكية ثانية على Q." },
        { en: "Dead Silence perk.", ar: "امتياز Dead Silence." },
        { en: "New footstep, jump, landing and slide sounds for every floor type.", ar: "أصوات جديدة للخطوات والقفز والهبوط والتزحلق لكل نوع أرضية." },
        { en: "Team dots: blue teammates, red enemies in sight.", ar: "نقاط الفريق: زملاء بالأزرق، وأعداء ظاهرون بالأحمر." },
        { en: "SPECTATE in private matches.", ar: "وضع المشاهدة في المباريات الخاصة." },
      ] },
      { date: "2026-10-29", items: [
        { en: "Create a class: attachments, gun levels, perks, lethal and tactical slots.", ar: "إنشاء فئة: ملحقات، مستويات السلاح، امتيازات، وخانات القاتل والتكتيكي." },
        { en: "Stim shot on Q.", ar: "حقنة التحفيز على Q." },
        { en: "Each sniper got its own stats.", ar: "لكل قناصة أرقامها الخاصة." },
        { en: "A full settings menu with key binds and auto sprint.", ar: "قائمة إعدادات كاملة مع تغيير الأزرار والركض التلقائي." },
        { en: "Healing, fall damage, hit arrows and a new health and ammo display.", ar: "الشفاء وضرر السقوط وأسهم الإصابة وعرض جديد للصحة والذخيرة." },
        { en: "A higher, calmer jump.", ar: "قفزة أعلى وأهدأ." },
        { en: "Skyline Tower made bigger. MAP DETAIL setting for more FPS.", ar: "تكبير برج الأفق. وإعداد MAP DETAIL لرفع الأداء." },
      ] },
      { date: "2026-10-19", items: [
        { en: "Skyline Tower's final layout: helipad, garage, lower level, tunnels and the climbable crane.", ar: "الشكل النهائي لبرج الأفق: المهبط، المرآب، المستوى السفلي، الأنفاق والرافعة القابلة للتسلق." },
        { en: "Full art pass and a city skyline around the tower.", ar: "تفاصيل فنية كاملة وأبراج مدينة حول البرج." },
      ] },
      { date: "2026-10-18", items: [
        { en: "Party invites, 6v6 teams and private matches.", ar: "دعوات المجموعة، فرق 6 ضد 6، ومباريات خاصة." },
        { en: "Ping system on the middle mouse button.", ar: "نظام التحديد بزر الفأرة الأوسط." },
        { en: "Throwing knife, the first lethal.", ar: "سكين الرمي، أول سلاح قاتل." },
        { en: "First version of the Skyline Tower map.", ar: "أول نسخة من خريطة برج الأفق." },
      ] },
      { date: "2026-10-16", items: [
        { en: "The HS .50-M1 joins the Intervention.", ar: "قناصة HS .50-M1 تنضم إلى Intervention." },
        { en: "New main menu that matches the cover art.", ar: "قائمة رئيسية جديدة بنفس روح صورة الغلاف." },
        { en: "Faster weapon switching.", ar: "تبديل أسرع بين الأسلحة." },
        { en: "Fairer hit checks on the server.", ar: "فحص أعدل للإصابات على الخادم." },
      ] },
      { date: "2026-10-15", items: [
        { en: "The karambit knife.", ar: "سكين الكارامبيت." },
        { en: "A new blocky character.", ar: "شخصية جديدة بتصميم مكعبات." },
        { en: "Draw animations, jump-slide, and guns you can see in other players' hands.", ar: "حركات سحب السلاح، القفزة مع التزحلق، وظهور الأسلحة في أيدي اللاعبين الآخرين." },
      ] },
      { date: "2026-10-14", items: [
        { en: "Search & Destroy, snipers only.", ar: "وضع البحث والتدمير، قناصات فقط." },
        { en: "The Intervention with a real 3D scope.", ar: "قناصة Intervention بمنظار ثلاثي الأبعاد حقيقي." },
        { en: "Gun sounds, tactical sprint, kill cam and weapon colors.", ar: "أصوات الأسلحة، الركض التكتيكي، إعادة القتل وألوان السلاح." },
      ] },
      { date: "2026-10-13", items: [
        { en: "First shooting and the movement system: sprint, crouch, slide, climb.", ar: "أول نظام إطلاق نار ونظام الحركة: ركض، انحناء، تزحلق، تسلق." },
      ] },
    ],
  },

  /* FAQ ---------------------------------------------------------------------------------------------- */
  faq: {
    kicker: { en: "FAQ", ar: "أسئلة شائعة" },
    title: { en: "Questions", ar: "أسئلة وأجوبة" },
    list: [
      { q: { en: "What do I need to play?", ar: "ماذا أحتاج لألعب؟" }, a: { en: "A Roblox account. The game is made for PC with keyboard and mouse. Touch controls for phones and tablets are not ready yet.", ar: "حساب Roblox. اللعبة مصممة للكمبيوتر بلوحة المفاتيح والفأرة. التحكم باللمس للجوال والتابلت غير جاهز بعد." } },
      { q: { en: "How many players are in a match?", ar: "كم لاعبًا في المباراة؟" }, a: { en: "Up to 12: two teams of 6. A match needs at least 2 players to start.", ar: "حتى 12 لاعبًا: فريقان من 6. المباراة تحتاج لاعبين اثنين على الأقل لتبدأ." } },
      { q: { en: "Why only snipers?", ar: "لماذا القناصات فقط؟" }, a: { en: "The beta's mode is Search & Destroy with snipers only. Every fight is about one good shot.", ar: "وضع النسخة التجريبية هو البحث والتدمير بالقناصات فقط. كل مواجهة تُحسم بطلقة واحدة جيدة." } },
      { q: { en: "Which sniper should I pick?", ar: "أي قناصة أختار؟" }, a: { en: "Good at headshots and quick peeks? The Intervention. Want a kill on the chest too? The HS .50-M1, but it aims and moves slower.", ar: "إذا كنت تتقن طلقات الرأس والظهور السريع: Intervention. وإذا أردت القتل من الصدر أيضًا: HS .50-M1، لكنها أبطأ في التصويب والحركة." } },
      { q: { en: "How do I unlock attachments?", ar: "كيف أفتح الملحقات؟" }, a: { en: "Get kills with that sniper. Each kill gives 100 XP (150 for a headshot). Level 10 unlocks all ten attachments.", ar: "اقتل بتلك القناصة. كل قتلة تعطي 100 نقطة خبرة (150 لقتلة الرأس). المستوى 10 يفتح الملحقات العشرة كلها." } },
      { q: { en: "How do I play with friends?", ar: "كيف ألعب مع أصدقائي؟" }, a: { en: "Invite them from the party panel in the main menu. Up to 6 for a public match, up to 12 for a private match.", ar: "ادعُهم من لوحة المجموعة في القائمة الرئيسية. حتى 6 لمباراة عامة، وحتى 12 لمباراة خاصة." } },
      { q: { en: "My game feels slow. What can I do?", ar: "اللعبة ثقيلة عندي. ماذا أفعل؟" }, a: { en: "Set SETTINGS > VIDEO > MAP DETAIL to LOW. It hides small decoration and gives the most FPS.", ar: "اجعل SETTINGS ثم VIDEO ثم MAP DETAIL على LOW. يخفي الزينة الصغيرة ويعطي أعلى أداء." } },
      { q: { en: "Can I change the keys?", ar: "هل أستطيع تغيير الأزرار؟" }, a: { en: "Yes. SETTINGS > KEYBINDS has 16 actions you can move to any key.", ar: "نعم. في SETTINGS ثم KEYBINDS يوجد 16 فعلًا تستطيع نقلها إلى أي زر." } },
      { q: { en: "Why can't I open the settings in a match?", ar: "لماذا لا تفتح الإعدادات أثناء المباراة؟" }, a: { en: "Settings open only in the main menu, so a menu never covers your screen in a fight.", ar: "الإعدادات تفتح من القائمة الرئيسية فقط، حتى لا تغطي القائمة شاشتك أثناء القتال." } },
    ],
  },
};

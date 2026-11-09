/* Builds the page from content.js in the chosen language (Arabic or English). */
(function () {
  const C = window.CONTENT, S = window.SITE, UI = window.UI;
  let lang = pickLang();
  const openTab = {}; // remembers the open tab of each tab group across a language switch

  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "ar" || q === "en") return q;
    try { const saved = localStorage.getItem("bom-lang"); if (saved === "ar" || saved === "en") return saved; } catch (e) {}
    return "ar"; // Arabic first for everyone; the EN button switches.
  }

  // Text in the current language (a plain string is the same in both).
  const L = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] ?? v.en);
  const u = (k) => UI[lang][k] ?? UI.en[k] ?? "";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const T = (v) => esc(L(v));
  // Keeps "+25%" together and first in Arabic lines (otherwise the sign can jump to the other side).
  const signed = (s) => s.replace(/^([+-]?[\d.,]+%?)/, '<bdi dir="ltr">$1</bdi>');
  const unlockBadge = (lvl) => lvl > 0
    ? `<span class="badge" title="${esc(u("unlockAt"))} ${lvl}">${esc(u("level"))} <b dir="ltr">${lvl}</b></span>`
    : `<span class="badge badge-free">${esc(u("free"))}</span>`;

  function head(sec, extra = "") {
    return `<header class="sec-head">
      <p class="kicker"><span class="kicker-mark" aria-hidden="true"></span>${T(sec.kicker)}</p>
      <h2>${T(sec.title)}</h2>
      ${sec.intro ? `<p class="lead">${T(sec.intro)}</p>` : ""}${extra}
    </header>`;
  }

  // A tab strip + panels. group = unique name, tabs = [{label (html), panel (html)}]
  function tabs(group, items, cls = "") {
    const open = Math.min(openTab[group] || 0, items.length - 1);
    return `<div class="tabs ${cls}" role="tablist" data-group="${group}">
        ${items.map((t, i) => `<button role="tab" id="${group}-tab-${i}" aria-controls="${group}-panel-${i}" aria-selected="${i === open}" tabindex="${i === open ? 0 : -1}">${t.label}</button>`).join("")}
      </div>
      ${items.map((t, i) => `<div class="tab-panel" role="tabpanel" id="${group}-panel-${i}" aria-labelledby="${group}-tab-${i}" ${i === open ? "" : "hidden"}>${t.panel}</div>`).join("")}`;
  }

  /* ---- Key caps ----------------------------------------------------------------------------------- */
  function cap(k) {
    const named = C.controls.keyNames[k];
    return `<kbd class="${named ? "kbd-mouse" : ""}">${named ? T(named) : esc(k)}</kbd>`;
  }
  function keyRow(r) {
    let caps;
    if (r.k.length === 2 && r.k[0] === r.k[1]) caps = cap(r.k[0]) + `<i class="x2">×2</i>`;
    else caps = r.k.map(cap).join("");
    if (r.alt) caps += `<i class="or">/</i>` + r.alt.map(cap).join("");
    return `<li><span class="caps" dir="ltr">${caps}</span><span>${T(r.a)}</span></li>`;
  }

  /* ---- Damage figure (a blocky body like the game's character) ------------------------------------ */
  function figure(z) {
    const fill = (dmg) => (dmg >= 100 ? "var(--brass)" : `color-mix(in srgb, var(--bone) ${Math.round(18 + (dmg / 100) * 45)}%, var(--panel))`);
    const r = (x, y, w, h, d) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${fill(d)}"/>`;
    return `<svg class="fig" viewBox="0 0 120 222" role="img" aria-label="${esc(u("damageTitle"))}">
      ${r(44, 4, 32, 32, z.head)}
      ${r(34, 40, 52, 40, z.chest)}
      ${r(36, 82, 48, 24, z.stomach)}
      ${r(12, 42, 19, 38, z.arm)}${r(89, 42, 19, 38, z.arm)}
      ${r(10, 82, 19, 42, z.lower)}${r(91, 82, 19, 42, z.lower)}
      ${r(36, 108, 23, 52, z.thigh)}${r(61, 108, 23, 52, z.thigh)}
      ${r(36, 162, 23, 56, z.lower)}${r(61, 162, 23, 56, z.lower)}
    </svg>`;
  }
  function zoneList(z) {
    const rows = [["zoneHead", z.head], ["zoneChest", z.chest], ["zoneStomach", z.stomach], ["zoneThigh", z.thigh], ["zoneUpperArm", z.arm], ["zoneLowerLimbs", z.lower]];
    return `<ul class="zones">${rows.map(([k, d]) => `<li class="${d >= 100 ? "kill" : ""}"><span>${esc(u(k))}</span><b>${d}</b></li>`).join("")}</ul>
      <p class="legend"><span class="sw sw-kill"></span>${esc(u("oneShot"))}<span class="sw sw-two"></span>${esc(u("twoShot"))}</p>`;
  }

  /* ---- Sections ----------------------------------------------------------------------------------- */
  function trailer() {
    const id = (S.trailerYouTubeId || "").trim();
    const inner = id
      ? `<a class="trailer-card" href="https://www.youtube.com/watch?v=${encodeURIComponent(id)}" target="_blank" rel="noopener">
           <img src="https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg" alt="" loading="lazy"><span class="play-dot" aria-hidden="true"></span>
           <span class="trailer-label">${esc(u("watch"))}</span></a>`
      : `<div class="trailer-card soon"><img src="assets/img/shots/last-bullet.jpg" alt="" loading="lazy"><span class="play-dot" aria-hidden="true"></span>
           <span class="trailer-label">${esc(u("trailerSoon"))}<small>${esc(u("trailerSoonSub"))}</small></span></div>`;
    return `<div class="wrap trailer" id="trailer">${inner}</div>`;
  }

  function modes() {
    const m = C.modes;
    return `<section class="sec" id="modes"><div class="wrap">
      ${head(m)}
      <div class="modes">${m.list.map((x) => `<article class="mode">
        <p class="mode-short" dir="ltr">${esc(x.short)}</p>
        <h3 dir="ltr">${esc(x.name)}</h3>
        ${lang === "ar" ? `<p class="mode-ar">${esc(x.ar)}</p>` : ""}
        <p class="mode-tag">${T(x.tag)}</p>
        <p>${T(x.d)}</p>
        <ul class="chips">${x.facts.map((f) => `<li>${T(f)}</li>`).join("")}</ul>
      </article>`).join("")}</div>

      <h3 class="sub">${T(m.voteTitle)}</h3>
      <ol class="votes">${m.votes.map((v, i) => `<li><span class="flow-n">${i + 1}</span><div><h4>${T(v.t)}</h4><p>${T(v.d)}</p></div></li>`).join("")}</ol>

      <div class="split split-top">
        <div><h3 class="sub sub-tight">${T(m.flowTitle)}</h3>
          <ol class="flow">${m.flow.map((f, i) => `<li><span class="flow-n">${i + 1}</span><div><h4>${T(f.t)}</h4><p>${T(f.d)}</p></div></li>`).join("")}</ol></div>
        <div><h3 class="sub sub-tight">${T(m.sndTitle)}</h3>
          <dl class="rules">${m.sndRules.map((r) => `<div><dt>${T(r.k)}</dt><dd>${T(r.v)}</dd></div>`).join("")}</dl>
          <figure class="shot"><img src="assets/img/shots/plant.jpg" alt="" loading="lazy"></figure></div>
      </div>
    </div></section>`;
  }

  function maps() {
    const m = C.maps;
    return `<section class="sec sec-map" id="maps"><div class="wrap">
      ${head(m)}
      <div class="maps">${m.list.map((x) => `<article class="map-card">
        <figure><img src="${x.img}" alt="${esc(x.name)}" loading="lazy"><figcaption dir="ltr">${esc(x.name)}</figcaption></figure>
        <div class="map-body">
          <p class="gun-role">${T(x.tag)}</p>
          <h3>${lang === "ar" ? esc(x.ar) : esc(x.name)}</h3>
          <p>${T(x.d)}</p>
          <ul class="chips">${x.spots.map(([en, ar]) => `<li>${esc(lang === "ar" ? ar : en)}</li>`).join("")}</ul>
        </div>
      </article>`).join("")}</div>
      <p class="tip wide"><b>${esc(u("tip"))}</b> ${T(m.tip)}</p>
    </div></section>`;
  }

  function gunStats(s) {
    const dmgText = s.blast ? `${s.dmg}` : s.pel ? `${s.pel} × ${s.dmg}` : `${s.dmg}`;
    const rows = [
      [u("stDamage"), dmgText, Math.min(100, (s.pel || 1) * s.dmg)],
      [u("stRate"), `${s.rpm} ${u("rpm")}`, (s.rpm / 950) * 100],
      [u("stRange"), `~${s.rangeM} m`, Math.max(4, Math.min(100, (s.rangeM / 700) * 100))],
      [u("stMobility"), `${Math.round(s.mob * 100)}%`, ((s.mob - 0.8) / 0.3) * 100],
      [u("stAim"), `${s.aim.toFixed(2)} s`, (0.11 / s.aim) * 100],
    ];
    return `<div class="stats">${rows.map(([k, v, p]) => `<div class="stat"><span>${esc(k)}</span><b dir="ltr">${esc(v)}</b><i style="--p:${Math.round(p)}%"></i></div>`).join("")}
      <div class="stat stat-plain"><span>${esc(u("stMag"))}</span><b dir="ltr">${s.mag} / ${s.res}</b></div>
      <div class="stat stat-plain"><span>${esc(u("stReload"))}</span><b dir="ltr">${s.rel} s</b></div></div>`;
  }

  function arsenal() {
    const a = C.arsenal;
    const gun = (g) => `<article class="gun" id="gun-${g.id}">
      <figure class="gun-shot"><img src="${g.img}" alt="${esc(g.name)}" loading="lazy"></figure>
      <div class="gun-in">
        <div class="gun-title"><p class="gun-role">${T(g.cat)}</p>${unlockBadge(g.unlock)}</div>
        <h3 class="gun-name" dir="ltr">${esc(g.name)}</h3>
        <p class="gun-rule">${T(g.rule)}</p>
        <p class="gun-about">${T(g.about)}</p>
        ${gunStats(g.s)}
        ${g.zones ? `<details class="dmg"><summary>${esc(u("damageTitle"))}</summary><div class="dmg-in">${figure(g.zones)}<div>${zoneList(g.zones)}</div></div></details>` : ""}
      </div>
    </article>`;
    const m = a.melee;
    return `<section class="sec" id="arsenal"><div class="wrap">
      ${head(a)}
      <div class="guns">${a.guns.map(gun).join("")}</div>
      <article class="item item-wide melee">
        <img src="${m.img}" alt="${esc(m.name)}" loading="lazy">
        <div><div class="gun-title"><p class="item-slot">${T(m.slot)}</p>${unlockBadge(0)}</div><h3 dir="ltr">${esc(m.name)}</h3><p>${T(m.d)}</p>
        <dl class="mini">${m.stats.map((s) => `<div><dt>${T(s.k)}</dt><dd dir="auto">${T(s.v)}</dd></div>`).join("")}</dl></div>
      </article>
      <p class="tip wide">${T(a.snipersOnly)}</p>
    </div></section>`;
  }

  const starIcon = `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L60 40 L96 50 L60 60 L50 96 L40 60 L4 50 L40 40 Z" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="50" r="7" fill="currentColor"/></svg>`;

  function gear() {
    const g = C.gear;
    const card = (x, slot) => `<article class="item ${x.photo ? "item-photo" : ""}">
      ${x.img ? `<img src="${x.img}" alt="${esc(x.name)}" loading="lazy">` : `<div class="item-icon">${starIcon}</div>`}
      <div><div class="gun-title"><p class="item-slot">${T(slot)}</p>${unlockBadge(x.unlock)}</div><h3 dir="ltr">${esc(x.name)}</h3><p>${T(x.d)}</p></div>
    </article>`;
    return `<section class="sec sec-alt" id="gear"><div class="wrap">
      ${head(g)}
      <h3 class="sub sub-first">${T(g.lethalTitle)}</h3>
      <div class="kit kit-4">${g.lethals.map((x) => card(x, g.lethalTitle)).join("")}</div>
      <h3 class="sub">${T(g.tacticalTitle)}</h3>
      <div class="kit kit-2">${g.tacticals.map((x) => card(x, g.tacticalTitle)).join("")}</div>

      <h3 class="sub">${T(g.fieldTitle)}</h3>
      <p class="lead small">${T(g.fieldIntro)}</p>
      <div class="fus">${g.fieldUpgrades.map((f) => `<article class="fu">
        <div class="gun-title"><span class="fu-ring" aria-hidden="true"></span>${unlockBadge(f.unlock)}</div>
        <h4 dir="ltr">${esc(f.name)}</h4><p>${T(f.d)}</p>
        <dl class="mini"><div><dt>${esc(u("charge"))}</dt><dd dir="ltr">${f.charge} s</dd></div><div><dt>${esc(u("lasts"))}</dt><dd dir="auto">${T(f.lasts)}</dd></div></dl>
      </article>`).join("")}</div>

      <h3 class="sub">${T(g.streakTitle)}</h3>
      <div class="split">
        <div class="streak">${g.streak.map((s) => `<article><h4>${T(s.t)}</h4><p>${T(s.d)}</p></article>`).join("")}</div>
        <figure class="shot"><img src="${g.streakImg}" alt="" loading="lazy"></figure>
      </div>
    </div></section>`;
  }

  /* Attachment effects, worked out from the game's own multipliers. */
  function attFx(at, type) {
    const per = (at.per && at.per[type]) || {};
    const m = per.m || at.m || {}, a = per.a || at.a || {};
    const W = C.classes.fxWords, out = [];
    const pct = (n) => `${n > 0 ? "+" : ""}${n}%`;
    const push = (key, n, goodWhenUp) => { if (!n) return; out.push([`${pct(n)} ${L(W[key])}`, goodWhenUp ? n > 0 : n < 0]); };
    if (at.zoom) out.push([L(at.zoom === "more" ? W.zoomMore : W.zoomLess), null]);
    if (at.quiet) out.push([L(W.quiet), true]);
    for (const [k, v] of Object.entries(m)) {
      if (k === "AimTime" || k === "ReloadTime") push(k, Math.round((1 - v) * 100), true);
      else if (k === "Mobility" || k === "Range") push(k, Math.round((v - 1) * 100), true);
      else if (k === "RecoilUp" || k === "RecoilSide" || k === "HipSpread") push(k, Math.round((v - 1) * 100), false);
    }
    for (const [k, v] of Object.entries(a)) out.push([`${v > 0 ? "+" : ""}${v} ${L(W[k])}`, v > 0]);
    return out.sort((x, y) => (x[1] === y[1] ? 0 : x[1] === true ? -1 : y[1] === true ? 1 : x[1] === null ? -1 : 1));
  }

  function classes() {
    const c = C.classes;
    const slotRows = c.slots.map((s) => `<div><dt>${T(s.k)}</dt><dd dir="auto">${T(s.v)}</dd></div>`).join("");
    const perkCols = c.perkGroups.map((g) => `<div class="perk-group" style="--slot:${g.color}">
      <p class="perk-head">${T(g.slot)}</p>
      ${g.list.map((p) => `<article class="perk"><div class="gun-title"><h4 dir="ltr">${esc(p.name)}</h4>${unlockBadge(p.unlock)}</div><p>${T(p.d)}</p></article>`).join("")}
    </div>`).join("");
    const gsTabs = c.types.map((t) => {
      const rows = c.attachments.filter((at) => at.types.includes(t.id)).sort((x, y) => x.lvl - y.lvl).map((at) => `<tr>
        <td class="lvl"><span>${at.lvl}</span></td>
        <th scope="row" dir="ltr">${esc(at.name)}</th>
        <td class="slot">${T(c.slotNames[at.slot])}</td>
        <td><ul class="fx">${attFx(at, t.id).map(([txt, good]) => `<li class="${good === true ? "up" : good === false ? "down" : "flat"}">${signed(esc(txt))}</li>`).join("")}</ul></td>
      </tr>`).join("");
      return { label: `${T(t.label)}<small dir="ltr">${esc(t.guns)}</small>`, panel: `<div class="table-scroll"><table class="att">
        <thead><tr><th scope="col">${esc(u("unlock"))}</th><th scope="col">&nbsp;</th><th scope="col">${esc(u("slot"))}</th><th scope="col">${esc(u("effect"))}</th></tr></thead>
        <tbody>${rows}</tbody></table></div>` };
    });
    // Gun XP ladder: 300 + 100 (n - 1) per level.
    let total = 0; const steps = [];
    for (let n = 1; n <= 10; n++) { steps.push(total); total += 300 + 100 * (n - 1); }
    const ladder = steps.map((xp, i) => `<li style="--h:${Math.round((xp / 6300) * 100)}%"><i></i><b>${i + 1}</b><span dir="ltr">${xp.toLocaleString("en")}</span></li>`).join("");
    return `<section class="sec" id="classes"><div class="wrap">
      ${head(c)}
      <dl class="loadout">${slotRows}</dl>

      <h3 class="sub">${T(c.perkTitle)}</h3>
      <p class="lead small">${T(c.perkIntro)}</p>
      <div class="perks">${perkCols}</div>

      <h3 class="sub">${T(c.gunsmithTitle)}</h3>
      <div class="split split-gs">
        <p class="lead small">${T(c.gunsmithIntro)}</p>
        <ol class="ladder" aria-label="XP">${ladder}</ol>
      </div>
      ${tabs("gunsmith", gsTabs, "tabs-wrap")}

      <h3 class="sub">${T(c.paintTitle)}</h3>
      <div class="split">
        <div><p class="lead small">${T(c.paintText)}</p>
          <ul class="camos">${c.camos.map((k) => `<li><span class="swatch" style="--c:${k.c}"></span><b dir="ltr">${esc(k.n)}</b><small>${esc(u("level"))} ${k.l}</small></li>`).join("")}</ul></div>
        <figure class="shot"><img src="${c.paintImg}" alt="" loading="lazy"></figure>
      </div>
    </div></section>`;
  }

  function progress() {
    const p = C.progress;
    const maxL = 28;
    return `<section class="sec sec-alt" id="progress"><div class="wrap">
      ${head(p)}
      <div class="facts facts-6">${p.xp.map((f) => `<div class="fact"><b dir="ltr">${esc(f.n)}</b><span>${T(f.t)}</span></div>`).join("")}</div>

      <h3 class="sub">${T(p.unlockTitle)}</h3>
      <p class="lead small">${T(p.startWith)}</p>
      <ol class="unlocks">${p.unlocks.map(([lvl, name, kind]) => `<li class="k-${kind}" style="--x:${Math.round((lvl / maxL) * 100)}%">
        <span class="u-lvl" dir="ltr">${lvl}</span><b dir="ltr">${esc(name)}</b><small>${T(p.kinds[kind])}</small></li>`).join("")}</ol>

      <div class="cards">${p.cards.map((c) => `<article><h3>${T(c.t)}</h3><p>${T(c.d)}</p></article>`).join("")}</div>

      <h3 class="sub">${T(p.dailyTitle)}</h3>
      <p class="lead small">${T(p.dailyText)}</p>
      <ol class="daily">${p.daily.map(([cash, xp], i) => `<li class="${i === 6 ? "big" : ""}"><span>${esc(u("day"))} ${i + 1}</span><b dir="ltr">${cash}</b><small>${esc(u("cash"))}</small><em dir="ltr">+${xp} ${esc(u("xp"))}</em></li>`).join("")}</ol>
    </div></section>`;
  }

  function controls() {
    const c = C.controls;
    const devTabs = c.devices.map((d) => ({
      label: T(d.name),
      panel: `${d.note ? `<p class="lead small">${T(d.note)}</p>` : ""}${d.groups
        ? `<div class="keys">${d.groups.map((g) => `<div class="key-group"><h3>${T(g.t)}</h3><ul>${g.keys.map(keyRow).join("")}</ul></div>`).join("")}</div>`
        : `<div class="touch">${d.items.map((it) => `<article><h4>${T(it.t)}</h4><p>${T(it.d)}</p></article>`).join("")}</div>`}`,
    }));
    return `<section class="sec" id="controls"><div class="wrap">
      ${head(c)}
      ${tabs("device", devTabs)}

      <h3 class="sub">${T(c.moveTitle)}</h3>
      <p class="lead small">${T(c.moveIntro)}</p>
      <div class="moves">${c.moves.map((m) => `<article class="move"><span class="move-n" dir="ltr">${esc(m.n)}</span><h4>${T(m.t)}</h4><p>${T(m.d)}</p></article>`).join("")}</div>
      <div class="split split-top">
        <div><h3 class="sub sub-tight">${T(c.healthTitle)}</h3>
          <dl class="health">${c.health.map((h) => `<div><dt>${T(h.t)}</dt><dd>${T(h.d)}</dd></div>`).join("")}</dl></div>
        <figure class="shot shot-pair"><img src="assets/img/shots/slide.jpg" alt="" loading="lazy"><img src="assets/img/shots/dive.jpg" alt="" loading="lazy"></figure>
      </div>
    </div></section>`;
  }

  function squad() {
    const s = C.squad;
    return `<section class="sec sec-alt" id="squad"><div class="wrap">
      ${head(s)}
      <div class="split split-squad">
        <div class="squad">${s.items.map((it) => `<article><h3>${T(it.t)}</h3><p>${T(it.d)}</p></article>`).join("")}</div>
        <figure class="shot"><img src="assets/img/shots/squad.jpg" alt="" loading="lazy"></figure>
      </div>
    </div></section>`;
  }

  function settings() {
    const s = C.settings;
    const t = s.tabs.map((tab) => ({
      label: `<span dir="ltr">${esc(tab.name)}</span>`,
      panel: `<dl class="set-rows">${tab.rows.map(([name, def, help]) => `<div><dt dir="ltr">${esc(name)}</dt><dd class="def" dir="ltr">${esc(def)}</dd><dd class="help">${T(help)}</dd></div>`).join("")}</dl>`,
    }));
    return `<section class="sec" id="settings"><div class="wrap">
      ${head(s)}
      ${tabs("settings", t, "tabs-en")}
    </div></section>`;
  }

  function updates() {
    const up = C.updates;
    const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString(lang === "ar" ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    return `<section class="sec sec-alt" id="updates"><div class="wrap">
      ${head(up)}
      <ol class="log">${up.list.map((e) => `<li><time datetime="${e.date}">${esc(fmt(e.date))}</time><ul>${e.items.map((it) => `<li>${T(it)}</li>`).join("")}</ul></li>`).join("")}</ol>
    </div></section>`;
  }

  function faq() {
    const f = C.faq;
    return `<section class="sec" id="faq"><div class="wrap narrow">
      ${head(f)}
      <div class="faq">${f.list.map((x) => `<details><summary>${T(x.q)}</summary><p>${T(x.a)}</p></details>`).join("")}</div>
      <div class="end-cta"><a class="btn play-link" href="${esc(S.links.roblox || "#")}" target="_blank" rel="noopener">${esc(u("play"))}</a></div>
    </div></section>`;
  }

  /* ---- Fill the page ------------------------------------------------------------------------------ */
  function render() {
    const html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "رصاصة الرحمة | Bullet of Mercy" : "Bullet of Mercy | رصاصة الرحمة";

    document.querySelectorAll("[data-ui]").forEach((el) => { el.textContent = u(el.dataset.ui); });
    document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = L(S[el.dataset.site]); });

    document.getElementById("heroChips").innerHTML = C.heroFacts.map((f) => `<li><b dir="ltr">${esc(f.n)}</b> ${T(f.t)}</li>`).join("");
    document.getElementById("sections").innerHTML = trailer() + modes() + maps() + arsenal() + gear() + classes() + progress() + controls() + squad() + settings() + updates() + faq();
    document.querySelectorAll(".play-link").forEach((a) => { a.href = S.links.roblox || "#"; });

    const names = { roblox: "Roblox", youtube: "YouTube", tiktok: "TikTok", discord: "Discord" };
    document.getElementById("footLinks").innerHTML = Object.entries(S.links).filter(([, v]) => v)
      .map(([k, v]) => `<li><a href="${esc(v)}" target="_blank" rel="noopener">${names[k] || k}</a></li>`).join("");

    wireTabs();
    spy.disconnect();
    document.querySelectorAll(".sec").forEach((s) => spy.observe(s));
  }

  function wireTabs() {
    document.querySelectorAll(".tabs[data-group]").forEach((strip) => {
      const group = strip.dataset.group;
      const list = [...strip.querySelectorAll('[role="tab"]')];
      const show = (i, focus) => {
        openTab[group] = i;
        list.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; document.getElementById(`${group}-panel-${j}`).hidden = j !== i; });
        if (focus) list[i].focus();
      };
      list.forEach((t, i) => {
        t.addEventListener("click", () => show(i));
        t.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const step = (e.key === "ArrowRight") === (lang === "ar") ? -1 : 1; // arrows follow the reading direction
            show((i + step + list.length) % list.length, true);
          }
        });
      });
    });
  }

  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("bom-lang", lang); } catch (e) {}
    const y = scrollY; render(); scrollTo(0, y);
  });

  const burger = document.getElementById("burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", open); nav.classList.toggle("open", open);
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) { burger.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); } });

  // Underline the section you are reading in the top bar.
  const links = () => [...nav.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) links().forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id)); });
  }, { rootMargin: "-45% 0px -50% 0px" });

  render();
  if (location.hash) { const t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
})();

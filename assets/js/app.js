/* Builds the page from content.js in the chosen language (Arabic or English). */
(function () {
  const C = window.CONTENT, S = window.SITE, UI = window.UI;
  let lang = pickLang();

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

  function head(id, sec, extra = "") {
    return `<header class="sec-head">
      <p class="kicker"><span class="kicker-mark" aria-hidden="true"></span>${T(sec.kicker)}</p>
      <h2>${T(sec.title)}</h2>
      ${sec.intro ? `<p class="lead">${T(sec.intro)}</p>` : ""}${extra}
    </header>`;
  }

  /* ---- Key caps ----------------------------------------------------------------------------------- */
  function cap(k) {
    const named = C.controls.keyNames[k];
    return `<kbd class="${named ? "kbd-mouse" : ""}">${named ? T(named) : esc(k)}</kbd>`;
  }
  function keyRow(r) {
    let caps;
    if (r.k.length === 4) caps = r.k.map(cap).join("");
    else if (r.k.length === 2 && r.k[0] === r.k[1]) caps = cap(r.k[0]) + `<i class="x2">×2</i>`;
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
      ${r(12, 42, 19, 38, z.upper)}${r(89, 42, 19, 38, z.upper)}
      ${r(10, 82, 19, 42, z.lower)}${r(91, 82, 19, 42, z.lower)}
      ${r(36, 108, 23, 52, z.upper)}${r(61, 108, 23, 52, z.upper)}
      ${r(36, 162, 23, 56, z.lower)}${r(61, 162, 23, 56, z.lower)}
    </svg>`;
  }
  function zoneList(z) {
    const rows = [["zoneHead", z.head], ["zoneChest", z.chest], ["zoneStomach", z.stomach], ["zoneUpperLimbs", z.upper], ["zoneLowerLimbs", z.lower]];
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
      : `<div class="trailer-card soon"><img src="assets/img/cover-clean.jpg" alt="" loading="lazy"><span class="play-dot" aria-hidden="true"></span>
           <span class="trailer-label">${esc(u("trailerSoon"))}<small>${esc(u("trailerSoonSub"))}</small></span></div>`;
    return `<div class="wrap trailer" id="trailer">${inner}</div>`;
  }

  function game() {
    const g = C.game;
    return `<section class="sec" id="game"><div class="wrap">
      ${head("game", g)}
      <div class="facts">${g.facts.map((f) => `<div class="fact"><b>${esc(f.n)}</b><span>${T(f.t)}</span></div>`).join("")}</div>
      <div class="split">
        <ol class="flow">${g.flow.map((f, i) => `<li><span class="flow-n">${i + 1}</span><div><h3>${T(f.t)}</h3><p>${T(f.d)}</p></div></li>`).join("")}</ol>
        <dl class="rules">${g.rules.map((r) => `<div><dt>${T(r.k)}</dt><dd>${T(r.v)}</dd></div>`).join("")}</dl>
      </div>
      <div class="features">${g.features.map((f) => `<article><h3>${T(f.t)}</h3><p>${T(f.d)}</p></article>`).join("")}</div>
    </div></section>`;
  }

  function controls() {
    const c = C.controls;
    return `<section class="sec sec-alt" id="controls"><div class="wrap">
      ${head("controls", c)}
      <div class="keys">${c.groups.map((g) => `<div class="key-group"><h3>${T(g.t)}</h3><ul>${g.keys.map(keyRow).join("")}</ul></div>`).join("")}</div>

      <h3 class="sub">${T(c.moveTitle)}</h3>
      <p class="lead small">${T(c.moveIntro)}</p>
      <div class="moves">${c.moves.map((m) => `<article class="move"><span class="move-n" dir="ltr">${esc(m.n)}</span><h4>${T(m.t)}</h4><p>${T(m.d)}</p></article>`).join("")}</div>

      <h3 class="sub">${T(c.healthTitle)}</h3>
      <dl class="health">${c.health.map((h) => `<div><dt>${T(h.t)}</dt><dd>${T(h.d)}</dd></div>`).join("")}</dl>
    </div></section>`;
  }

  function arsenal() {
    const a = C.arsenal;
    const gun = (g) => `<article class="gun" id="gun-${g.id}">
      <div class="gun-top">
        <div><p class="gun-role">${T(g.role)}</p><h3 class="gun-name" dir="ltr">${esc(g.name)}</h3><p class="gun-rule">${T(g.rule)}</p><p>${T(g.about)}</p></div>
        <img class="gun-img" src="${g.img}" alt="${esc(g.name)}" loading="lazy">
      </div>
      <div class="gun-body">
        <div class="stats"><h4>${esc(u("statsTitle"))}</h4>${g.stats.map((s) => `<div class="stat"><span>${T(s.k)}</span><b dir="ltr">${esc(s.v)}</b><i style="--p:${s.p}%"></i></div>`).join("")}</div>
        <div class="dmg"><h4>${esc(u("damageTitle"))}</h4><div class="dmg-in">${figure(g.zones)}<div>${zoneList(g.zones)}</div></div></div>
      </div>
    </article>`;
    const m = a.melee;
    return `<section class="sec" id="arsenal"><div class="wrap">
      ${head("arsenal", a)}
      <div class="guns">${a.guns.map(gun).join("")}</div>
      <div class="kit">
        <article class="item item-wide">
          <img src="${m.img}" alt="${esc(m.name)}" loading="lazy">
          <div><p class="item-slot">${T(a.meleeTitle)} · 2</p><h3 dir="ltr">${esc(m.name)}</h3><p>${T(m.d)}</p>
          <dl class="mini">${m.stats.map((s) => `<div><dt>${T(s.k)}</dt><dd dir="auto">${T(s.v)}</dd></div>`).join("")}</dl></div>
        </article>
        ${a.gear.map((g) => `<article class="item">
          <img src="${g.img}" alt="${esc(g.name)}" loading="lazy">
          <div><p class="item-slot">${T(g.slot)}</p><h3 dir="ltr">${esc(g.name)}</h3><p>${T(g.d)}</p>
          ${g.tip ? `<p class="tip"><b>${esc(u("tip"))}</b> ${T(g.tip)}</p>` : ""}</div>
        </article>`).join("")}
      </div>
    </div></section>`;
  }

  function classes() {
    const c = C.classes;
    const slotRows = c.slots.map((s) => `<div><dt>${T(s.k)}</dt><dd dir="auto">${T(s.v)}</dd></div>`).join("");
    const attRows = c.attachments.map((at) => `<tr>
        <td class="lvl"><span>${at.lvl}</span></td>
        <th scope="row" dir="ltr">${esc(at.name)}</th>
        <td class="slot">${T(c.slotNames[at.slot])}</td>
        <td><ul class="fx">${at.fx.map(([t, good]) => `<li class="${good === true ? "up" : good === false ? "down" : "flat"}">${signed(T(t))}</li>`).join("")}</ul></td>
      </tr>`).join("");
    // XP needed to reach each level: 300 + 100 (n - 1) per level
    let total = 0; const steps = [];
    for (let n = 1; n <= 10; n++) { steps.push(total); total += 300 + 100 * (n - 1); }
    const ladder = steps.map((xp, i) => `<li style="--h:${Math.round((xp / 6300) * 100)}%"><i></i><b>${i + 1}</b><span dir="ltr">${xp.toLocaleString("en")}</span></li>`).join("");
    return `<section class="sec sec-alt" id="classes"><div class="wrap">
      ${head("classes", c)}
      <div class="split">
        <dl class="loadout">${slotRows}</dl>
        <div class="levels"><h3>${T(c.levelTitle)}</h3><p>${T(c.levelText)}</p><ol class="ladder" aria-label="XP">${ladder}</ol></div>
      </div>

      <h3 class="sub">${T(c.attachTitle)}</h3>
      <p class="lead small">${T(c.attachNote)}</p>
      <div class="table-scroll"><table class="att">
        <thead><tr><th scope="col">${esc(u("unlock"))}</th><th scope="col">&nbsp;</th><th scope="col">${esc(u("slot"))}</th><th scope="col">${esc(u("effect"))}</th></tr></thead>
        <tbody>${attRows}</tbody>
      </table></div>

      <h3 class="sub">${T(c.perkTitle)}</h3>
      <div class="perks">${c.perkGroups.map((grp, i) => `<div class="perk-group">
        <p class="perk-head">${esc(u("perkSlot"))} ${i + 1} <span>· ${esc(u("pickOne"))}</span></p>
        ${grp.map((p) => `<article class="perk"><h4 dir="ltr">${esc(p.name)}</h4><p>${T(p.d)}</p></article>`).join("")}
      </div>`).join("")}</div>
    </div></section>`;
  }

  function map() {
    const m = C.map;
    const [first, ...rest] = m.shots;
    return `<section class="sec sec-map" id="map"><div class="wrap">
      ${head("map", m)}
      <div class="gallery">
        <figure class="g-main"><img src="${first.img}" alt="${T(first.c)}" loading="lazy"><figcaption>${T(first.c)}</figcaption></figure>
        ${rest.map((s) => `<figure><img src="${s.img}" alt="${T(s.c)}" loading="lazy"><figcaption>${T(s.c)}</figcaption></figure>`).join("")}
      </div>
      <div class="areas">${m.areas.map((a) => `<article><h3>${T(a.t)}</h3><p>${T(a.d)}</p></article>`).join("")}</div>
      <p class="tip wide"><b>${esc(u("tip"))}</b> ${T(m.tip)}</p>
    </div></section>`;
  }

  function squad() {
    const s = C.squad;
    return `<section class="sec sec-alt" id="squad"><div class="wrap">
      ${head("squad", s)}
      <div class="squad">${s.items.map((it) => `<article><h3>${T(it.t)}</h3><p>${T(it.d)}</p></article>`).join("")}</div>
    </div></section>`;
  }

  function settings() {
    const s = C.settings;
    return `<section class="sec" id="settings"><div class="wrap">
      ${head("settings", s)}
      <div class="tabs" role="tablist" aria-label="${T(s.title)}">
        ${s.tabs.map((t, i) => `<button role="tab" id="tab-${i}" aria-controls="panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" dir="ltr">${esc(t.name)}</button>`).join("")}
      </div>
      ${s.tabs.map((t, i) => `<div class="tab-panel" role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}" ${i === 0 ? "" : "hidden"}>
        <dl class="set-rows">${t.rows.map(([name, def, help]) => `<div><dt dir="ltr">${esc(name)}</dt><dd class="def" dir="ltr">${esc(def)}</dd><dd class="help">${T(help)}</dd></div>`).join("")}</dl>
      </div>`).join("")}
    </div></section>`;
  }

  function updates() {
    const up = C.updates;
    const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString(lang === "ar" ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    return `<section class="sec sec-alt" id="updates"><div class="wrap">
      ${head("updates", up)}
      <ol class="log">${up.list.map((e) => `<li><time datetime="${e.date}">${esc(fmt(e.date))}</time><ul>${e.items.map((it) => `<li>${T(it)}</li>`).join("")}</ul></li>`).join("")}</ol>
    </div></section>`;
  }

  function faq() {
    const f = C.faq;
    return `<section class="sec" id="faq"><div class="wrap narrow">
      ${head("faq", f)}
      <div class="faq">${f.list.map((x) => `<details><summary>${T(x.q)}</summary><p>${T(x.a)}</p></details>`).join("")}</div>
    </div></section>`;
  }

  /* ---- Fill the page ------------------------------------------------------------------------------ */
  function render() {
    const html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "رصاصة الرحمة | Bullet of Mercy" : "Bullet of Mercy | رصاصة الرحمة";

    document.querySelectorAll("[data-ui]").forEach((el) => { el.textContent = u(el.dataset.ui); });
    document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = L(S[el.dataset.site]); });
    document.querySelectorAll(".play-link").forEach((a) => { a.href = S.links.roblox || "#"; });

    document.getElementById("heroChips").innerHTML = C.game.facts.map((f) => `<li><b dir="ltr">${esc(f.n)}</b> ${T(f.t)}</li>`).join("");
    document.getElementById("sections").innerHTML = trailer() + game() + controls() + arsenal() + classes() + map() + squad() + settings() + updates() + faq();

    const names = { roblox: "Roblox", youtube: "YouTube", tiktok: "TikTok", discord: "Discord" };
    document.getElementById("footLinks").innerHTML = Object.entries(S.links).filter(([, v]) => v)
      .map(([k, v]) => `<li><a href="${esc(v)}" target="_blank" rel="noopener">${names[k] || k}</a></li>`).join("");

    wireTabs();
    spy.disconnect();
    document.querySelectorAll(".sec").forEach((s) => spy.observe(s));
  }

  function wireTabs() {
    const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
    const show = (i, focus) => {
      tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; document.getElementById("panel-" + j).hidden = j !== i; });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => show(i));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); show((i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length, true); }
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

/* Bayan portfolio: language, navigation, scroll scenes and page renderers. Depends on js/content.js. */
(() => {
  'use strict';
  const D = window.BAYAN;
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) root.classList.add('rm');

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const lerp = (a, b, t) => a + (b - a) * t;
  /* progress through a tall sticky scene, 0 at its top, 1 when its end reaches the viewport bottom */
  const prog = el => { const r = el.getBoundingClientRect(), t = r.height - innerHeight; return t <= 0 ? 0 : clamp(-r.top / t); };
  /* progress from entering the viewport bottom to leaving its top */
  const view = el => { const r = el.getBoundingClientRect(); return clamp((innerHeight - r.top) / (r.height + innerHeight)); };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- language ---------- */
  const KEY = 'bayan-lang';
  function initialLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'en') return q;
    try { const s = localStorage.getItem(KEY); if (s === 'ar' || s === 'en') return s; } catch (_) { /* storage blocked */ }
    return (navigator.languages || [navigator.language || 'en']).some(l => String(l).toLowerCase().startsWith('ar')) ? 'ar' : 'en';
  }
  let lang = initialLang();
  const S = () => D[lang];
  const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  const t = key => { const v = get(S(), key); return v == null ? get(D.en, key) : v; };
  const P = p => p[lang];
  const hooks = [];
  const onLang = fn => { hooks.push(fn); };
  let titleOverride = null;

  function apply() {
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-t]').forEach(el => { const v = t(el.dataset.t); if (typeof v === 'string') el.textContent = v; });
    $$('[data-t-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.tAria)));
    $$('[data-t-ph]').forEach(el => { el.placeholder = t(el.dataset.tPh); });
    const brand = $('.mark span'); if (brand) brand.textContent = lang === 'ar' ? 'بيان' : 'bayan';
    hooks.forEach(fn => fn());
    document.title = titleOverride ? titleOverride() : t('title.' + (root.dataset.page || 'home'));
    const md = $('meta[name="description"]'); if (md) md.content = t('desc');
  }
  const langBtn = $('#lang');
  if (langBtn) langBtn.addEventListener('click', () => {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem(KEY, lang); } catch (_) { /* storage blocked */ }
    apply();
    resizeAll();
  });

  /* ---------- shared behaviours ---------- */
  const scenes = [];
  const resizers = [];
  const resizeAll = () => resizers.forEach(fn => fn());

  // word-by-word reveal
  function splitReveal() {
    $$('[data-reveal]').forEach(el => {
      const hot = new Set(t(el.dataset.revealHot || '') || []);
      el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span${hot.has(w) ? ' class="hot"' : ''}>${esc(w)}</span>`).join(' ');
    });
  }
  onLang(splitReveal);
  scenes.push(() => {
    if (reduce) return;
    $$('[data-reveal]').forEach(el => {
      const r = el.getBoundingClientRect(), c = clamp((innerHeight * .8 - r.top) / (r.height + innerHeight * .2));
      const words = el.children, n = Math.round(c * words.length);
      for (let i = 0; i < words.length; i++) words[i].classList.toggle('on', i < n);
    });
  });

  // timelines whose rail fills with scroll
  scenes.push(() => {
    $$('[data-rail]').forEach(box => {
      const r = box.getBoundingClientRect(), s = reduce ? 1 : clamp((innerHeight * .62 - r.top) / r.height);
      const fill = $('.rail i', box); if (fill && !reduce) fill.style.transform = `scaleY(${s})`;
      $$(':scope > .step, :scope li', box).forEach(st => st.classList.toggle('lit', reduce || st.getBoundingClientRect().top < innerHeight * .62));
    });
  });

  // drifting elements
  scenes.push(() => {
    if (reduce) return;
    $$('[data-drift]').forEach(el => {
      const amt = +el.dataset.drift || 20, v = view(el.parentElement);
      el.style.transform = `translateX(${lerp(-amt, amt, v) * (lang === 'ar' ? -1 : 1)}%)`;
    });
    $$('[data-rise]').forEach(el => {
      const v = view(el); el.style.transform = `translateY(${lerp(6, -6, v)}%) scale(1.06)`;
    });
    $$('[data-grow]').forEach(el => {
      const v = seg(view(el), 0, .45); el.style.transform = `scale(${lerp(.88, 1, ease(v))})`;
    });
    $$('[data-clip]').forEach(el => {
      const v = ease(seg(view(el), 0, .4)), i = lerp(10, 0, v);
      el.style.clipPath = `inset(${i}% ${i}% ${i}% ${i}% round 28px)`;
    });
  });

  // nav colour follows the section under it
  const nav = $('#nav');
  scenes.push(() => {
    if (!nav) return;
    const y = 40;
    const dark = $$('[data-dark]').some(el => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
    nav.dataset.tone = dark ? 'light' : 'dark';
  });

  // the dot of ب follows the pointer
  const dot = $('#dot');
  let dx = -60, dy = -60, tx = -60, ty = -60;
  const pointer = { x: -999, y: -999 };
  addEventListener('pointermove', e => {
    tx = e.clientX; ty = e.clientY; pointer.x = e.clientX; pointer.y = e.clientY;
    if (dot && e.pointerType === 'mouse') { dot.classList.add('on'); dot.classList.toggle('big', !!e.target.closest('a,button,input,textarea,select')); }
  }, { passive: true });
  scenes.push(() => {
    if (!dot || reduce) return;
    dx = lerp(dx, tx, .2); dy = lerp(dy, ty, .2);
    dot.style.transform = `translate(${dx}px,${dy}px)`;
  });

  // copy buttons
  $$('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    const src = $(btn.dataset.copy), text = src ? src.textContent.trim() : '';
    try { await navigator.clipboard.writeText(text); btn.textContent = t('cta.copied'); }
    catch (_) { const r = document.createRange(); r.selectNodeContents(src); getSelection().removeAllRanges(); getSelection().addRange(r); btn.textContent = t('cta.selected'); }
    setTimeout(() => { btn.textContent = t('cta.copy'); }, 2200);
  }));

  /* ---------- project helpers ---------- */
  const byId = id => D.projects.find(p => p.id === id);
  const kindLabel = p => t('kinds.' + p.kind);
  const metricVal = m => (lang === 'ar' && m.v_ar) || m.v;
  function media(p, cls) {
    if (p.id === 'folio') return `<div class="${cls} dark"><div class="viz-num">${esc(metricVal(p.metrics[0]))}<small>${esc(p.metrics[0][lang])}</small></div></div>`;
    if (!p.card) return `<div class="${cls} dark"><div class="viz-flu" aria-hidden="true">I <u>am agree</u> that the meeting <u>was went</u> well.<small>2 issues in Grammar, band B1</small></div></div>`;
    return `<div class="${cls}${p.cardDark ? ' dark' : ''}"><img src="${p.card}" alt="" loading="lazy" decoding="async"${cls === 'prow-media' ? ' data-rise' : ''}></div>`;
  }

  /* ---------- home ---------- */
  function home() {
    const hero = $('#hero');
    if (!hero) return;

    // hero: everyday work as noise, sorted into a table, collapsed into one dot
    const cv = $('#noise'), cx = cv.getContext('2d');
    const DEEP = [6, 24, 35], GROUND = [238, 243, 239], MIST = [143, 176, 182], INK = [11, 34, 48];
    const mix = (a, b, k, al = 1) => `rgba(${a.map((v, i) => Math.round(lerp(v, b[i], k))).join(',')},${al})`;
    let W = 0, H = 0, parts = [], L = null;
    function build() {
      const dpr = Math.min(2, devicePixelRatio || 1);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const hw = S().heroWords, small = W < 700, rtl = lang === 'ar';
      const colIdx = small ? [0, 2, 5] : [0, 1, 2, 3, 4, 5];
      const cols = colIdx.length, rowH = small ? 18 : 22;
      const rows = Math.max(8, Math.min(small ? 26 : 24, Math.floor((H - (small ? 250 : 280)) / rowH)));
      const lw = Math.min(1040, W * .9), lh = (rows + 1) * rowH;
      const lx = (W - lw) / 2, ly = Math.max(H * .5 - lh / 2 + 34, small ? 190 : 210), colW = lw / cols;
      const sec = rtl ? ' ث' : ' s';
      const cell = (c, r) => [
        hw.items[r % hw.items.length], hw.sources[(r * 7) % hw.sources.length], hw.actions[(r * 5) % hw.actions.length],
        hw.owner, (0.3 + (r * 37 % 40) / 10).toFixed(1) + sec, hw.status
      ][c];
      L = { lx, ly, lw, rowH, rows, colW, cols, small, rtl, head: colIdx.map(c => hw.cols[c]) };
      const cellX = c => rtl ? lx + lw - c * colW - 4 : lx + c * colW + 4;
      parts = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        parts.push({
          hx: Math.random() * W, hy: Math.random() * H, ph: Math.random() * 6.28, sp: .15 + Math.random() * .5, amp: 12 + Math.random() * 36,
          tx: cellX(c), ty: ly + (r + 1) * rowH + rowH * .72, raw: hw.raw[(Math.random() * hw.raw.length) | 0], val: cell(colIdx[c], r),
          size: (small ? 11 : 13) + Math.random() * (small ? 9 : 18), rot: (Math.random() - .5) * .7, ox: 0, oy: 0, w: colW - 10
        });
      }
      L.cellX = cellX;
    }
    const FONT = '"Schibsted Grotesk", "Noto Kufi Arabic", system-ui, sans-serif';
    function draw(p, time) {
      const order = ease(seg(p, .28, .56)), dawn = ease(seg(p, .32, .58)), fall = ease(seg(p, .74, .9));
      cx.fillStyle = mix(DEEP, GROUND, dawn); cx.fillRect(0, 0, W, H);
      const lineA = order * (1 - fall);
      cx.textAlign = L.rtl ? 'right' : 'left';
      if (lineA > 0) {
        cx.fillStyle = mix(INK, INK, 0, .1 * lineA);
        for (let r = 1; r <= L.rows + 1; r++) cx.fillRect(L.lx, L.ly + r * L.rowH, L.lw, 1);
        cx.fillStyle = mix(INK, INK, 0, .55 * lineA);
        cx.font = `700 ${L.small ? 10.5 : 12}px ${FONT}`;
        L.head.forEach((h, c) => cx.fillText(h, L.cellX(c), L.ly + L.rowH * .72, L.colW - 10));
      }
      const ordered = order > .55, size = L.small ? 10.5 : 12.5;
      for (const q of parts) {
        let x = q.hx + Math.sin(time * q.sp + q.ph) * q.amp, y = q.hy + Math.cos(time * q.sp * .8 + q.ph) * q.amp * .6;
        if (order < .2) {
          const ddx = x + q.ox - pointer.x, ddy = y + q.oy - pointer.y, d = Math.hypot(ddx, ddy);
          if (d < 140) { const f = (140 - d) / 140 * 6; q.ox += ddx / (d || 1) * f; q.oy += ddy / (d || 1) * f; }
        }
        q.ox *= .94; q.oy *= .94; x += q.ox; y += q.oy;
        const px = lerp(lerp(x, q.tx, order), W / 2, fall), py = lerp(lerp(y, q.ty, order), H / 2, fall);
        const a = (1 - fall) * lerp(L.small ? .3 : .42, .95, order);
        if (a <= .01) continue;
        cx.save(); cx.translate(px, py); cx.rotate(lerp(q.rot, 0, order));
        cx.font = `${ordered ? 500 : 400} ${lerp(q.size, size, order)}px ${FONT}`;
        cx.fillStyle = mix(MIST, INK, dawn, a);
        if (ordered) cx.fillText(q.val, 0, 0, q.w); else cx.fillText(q.raw, 0, 0);
        cx.restore();
      }
      if (fall > 0) {
        cx.fillStyle = '#E8552A'; cx.beginPath();
        cx.arc(W / 2, H / 2, lerp(2, L.small ? 16 : 24, ease(seg(p, .82, .94))), 0, 6.283); cx.fill();
      }
    }
    const l1 = $('#l1'), l2 = $('#l2'), l3 = $('#l3'), hint = $('#hint');
    resizers.push(build);
    scenes.push(now => {
      const r = hero.getBoundingClientRect();
      if (r.bottom <= 0) return;
      const p = reduce ? 0 : prog(hero);
      draw(p, reduce ? 0 : now / 1000);
      if (p < .5) hero.setAttribute('data-dark', ''); else hero.removeAttribute('data-dark');
      if (reduce) return;
      const a1 = 1 - seg(p, .14, .28), a2 = seg(p, .54, .6) * (1 - seg(p, .7, .75)), a3 = seg(p, .9, .97);
      l1.style.opacity = a1; l1.style.transform = `translateY(calc(-50% - ${seg(p, 0, .28) * 60}px))`;
      l2.style.opacity = a2; l3.style.opacity = a3; l3.style.transform = `translateY(${(1 - a3) * 24}px)`;
      l3.classList.toggle('live', a3 > .5); l1.classList.toggle('live', a1 > .5);
      hint.style.opacity = 1 - seg(p, 0, .08);
    });

    // services: the big word rolls through what I build
    const svc = $('#services');
    if (svc) {
      const words = $('#svc-words'), list = $('#svc-list'), desc = $('#svc-desc');
      let items = [], idx = -1, lineH = 0;
      onLang(() => {
        items = S().services.items;
        svc.style.setProperty('--n', items.length);
        words.innerHTML = items.map(i => `<li>${esc(i.name)}</li>`).join('');
        list.innerHTML = items.map((i, k) => `<li><button type="button" data-k="${k}">${esc(i.name)}</button></li>`).join('');
        idx = -1;
      });
      list.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        const k = +b.dataset.k, top = svc.getBoundingClientRect().top + scrollY;
        scrollTo({ top: top + (k + .5) / items.length * (svc.offsetHeight - innerHeight), behavior: reduce ? 'auto' : 'smooth' });
      });
      resizers.push(() => { lineH = words.firstElementChild ? words.firstElementChild.offsetHeight : 0; });
      scenes.push(() => {
        const n = items.length;
        const p = reduce ? 0 : prog(svc), x = p * n - .5;
        const i = clamp(Math.floor(x), 0, n - 1), f = x - Math.floor(x);
        const pos = x < 0 ? 0 : x >= n - 1 ? n - 1 : i + ease(seg(f, .35, .75));
        if (!reduce) words.style.transform = `translateY(${-pos * lineH}px)`;
        const k = reduce ? 0 : clamp(Math.round(pos), 0, n - 1);
        if (k !== idx) {
          idx = k; desc.textContent = items[k].desc;
          $$('button', list).forEach((b, j) => { b.classList.toggle('on', j === k); b.setAttribute('aria-current', j === k ? 'true' : 'false'); });
        }
      });
    }

    // proof: hours and people count down as you scroll
    const proof = $('#proof');
    if (proof) {
      const timeEl = $('#m-time'), pplEl = $('#m-ppl'), figs = $$('#people b');
      const run = q => {
        const m = Math.round(lerp(300, 15, ease(seg(q, .12, .55))) / 5) * 5;
        const k = Math.round(lerp(10, 1, ease(seg(q, .45, .85))));
        timeEl.textContent = S().units.time(m); pplEl.textContent = S().units.people(k);
        figs.forEach((b, i) => { b.classList.toggle('gone', i >= k); b.classList.toggle('one', k === 1 && i === 0); });
      };
      scenes.push(() => run(reduce ? 1 : prog(proof)));
    }

    // work: vertical scroll drives the horizontal track
    const work = $('#work'), track = $('#track');
    if (work && track) {
      let travel = 0;
      const order = ['receipt-snap', 'form-generator', 'the-margin', 'cinematch', 'fluentia'], fills = ['', ' c-tide', ' c-raised'];
      onLang(() => {
        track.innerHTML = order.map(byId).map((p, i) => `
          <a class="card${fills[i % 3]}" href="project.html?p=${p.id}">
            ${media(p, 'shot')}
            <div class="card-body"><h3>${esc(P(p).name)}</h3><p>${esc(P(p).line)}</p><p class="stack">${esc(p.stack.join(', '))}</p><span class="more">${esc(t('work.read'))}</span></div>
          </a>`).join('') + `
          <div class="card end"><h3>${esc(t('work.endTitle'))}</h3><p>${esc(t('work.endBody'))}</p><a class="btn solid" href="projects.html" style="align-self:flex-start">${esc(t('work.endCta'))}</a></div>`;
        $$('img', track).forEach(img => img.addEventListener('load', resizeAll, { once: true }));
      });
      resizers.push(() => {
        if (reduce) return;
        travel = Math.max(0, track.scrollWidth - innerWidth);
        work.style.height = (innerHeight + travel) + 'px';
      });
      scenes.push(() => { if (!reduce) track.style.transform = `translateX(${(lang === 'ar' ? 1 : -1) * travel * prog(work)}px)`; });
    }
  }

  /* ---------- projects page ---------- */
  function projectsPage() {
    const list = $('#plist');
    if (!list) return;
    let filter = 'all';
    const match = p => filter === 'all' || p.kind === filter || (filter === 'product' && p.kind === 'progress');
    function render() {
      list.innerHTML = D.projects.map(p => `
        <li class="prow" data-kind="${p.kind}"${match(p) ? '' : ' hidden'}>
          <a href="project.html?p=${p.id}">
            ${media(p, 'prow-media')}
            <div><p class="kind">${esc(kindLabel(p))}, ${esc(p.year)}</p><h2>${esc(P(p).name)}</h2><p class="line">${esc(P(p).line)}</p><p class="stack">${esc(p.stack.join(', '))}</p><span class="more">${esc(t('work.read'))}</span></div>
          </a>
        </li>`).join('');
      const n = D.projects.filter(match).length;
      $('#pcount').textContent = S().projectsPage.count(n);
      $$('#filters button').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === filter ? 'true' : 'false'));
    }
    $('#filters').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; filter = b.dataset.f; render(); });
    onLang(render);
  }

  /* ---------- case study page ---------- */
  function casePage() {
    const box = $('#case');
    if (!box) return;
    const id = new URLSearchParams(location.search).get('p');
    const p = byId(id);
    if (!p) {
      titleOverride = () => t('title.projects');
      onLang(() => { box.innerHTML = `<section class="cs-hero on-deep" data-dark><div class="wrap"><p class="lead">${esc(t('caseStudy.notFound'))}</p><div class="ctas" style="margin-top:32px"><a class="btn solid" href="projects.html">${esc(t('caseStudy.all'))}</a></div></div></section>`; });
      return;
    }
    titleOverride = () => `${P(p).name}, ${t('title.project')}`;
    const next = D.projects[(D.projects.indexOf(p) + 1) % D.projects.length];
    onLang(() => {
      const c = P(p), cs = S().caseStudy;
      const links = [
        p.links && p.links.live ? `<a class="btn sun" href="${p.links.live}" target="_blank" rel="noopener">${esc(cs.live)}</a>` : '',
        p.links && p.links.github ? `<a class="btn ghost" href="${p.links.github}" target="_blank" rel="noopener">${esc(cs.github)}</a>` : '',
        p.links && p.links.pypi ? `<a class="btn ghost" href="${p.links.pypi}" target="_blank" rel="noopener">${esc(cs.pypi)}</a>` : ''
      ].join('');
      const cover = p.card ? `<section class="cs-cover"><div class="wrap"><div class="tray${p.cardDark ? ' dark' : ''}" data-grow><img src="${p.card}" alt="${esc(c.name)}"></div></div></section>` : '';
      const shots = (p.shots || []).map(s => `<figure><div class="frame" data-clip><img src="${s.src}" alt="${esc(s[lang])}" loading="lazy" decoding="async"></div><figcaption>${esc(s[lang])}</figcaption></figure>`).join('');
      const vids = (p.videos || []).map(v => `<figure><div class="frame" data-clip><video src="${v.src}" controls muted playsinline loop preload="metadata" aria-label="${esc(v[lang])}"></video></div><figcaption>${esc(v[lang])}</figcaption></figure>`).join('');
      const note = p.kind === 'client' ? cs.privateNote : p.kind === 'progress' ? cs.progressNote : '';
      box.innerHTML = `
        <section class="cs-hero on-deep" data-dark><div class="wrap">
          <a class="back" href="projects.html">${esc(cs.all)}</a>
          <p class="kind">${esc(kindLabel(p))}</p>
          <h1>${esc(c.name)}</h1>
          <p class="lead">${esc(c.line)}</p>
          <dl class="meta">
            <div><dt>${esc(cs.year)}</dt><dd>${esc(p.year)}</dd></div>
            <div><dt>${esc(cs.role)}</dt><dd>${esc(c.role)}</dd></div>
            <div><dt>${esc(cs.duration)}</dt><dd>${esc(c.duration)}</dd></div>
          </dl>
          ${links ? `<div class="ctas">${links}</div>` : ''}
        </div></section>
        ${cover}
        <section class="section"><div class="wrap story">
          <div class="story-row"><h2>${esc(cs.problem)}</h2><p>${esc(c.problem)}</p></div>
          <div class="story-row"><h2>${esc(cs.built)}</h2><p>${esc(c.built)}</p></div>
          <div class="story-row"><h2>${esc(cs.result)}</h2><p>${esc(c.result)}</p></div>
        </div></section>
        <section class="section" style="padding-top:0"><div class="wrap metrics">
          ${p.metrics.map((m, i) => `<div><div class="metric-num${i === 0 ? ' sun' : ''}">${esc(metricVal(m))}</div><p class="metric-cap">${esc(m[lang])}</p></div>`).join('')}
        </div></section>
        <section class="section" style="padding-top:0"><div class="wrap">
          <h2>${esc(cs.features)}</h2>
          <ul class="features">${c.features.map(f => `<li><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></li>`).join('')}</ul>
        </div></section>
        <section class="section" style="padding-top:0"><div class="wrap">
          <h2>${esc(cs.stack)}</h2>
          <ul class="stack-list">${p.stack.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
          ${note ? `<p class="note" style="margin-top:40px">${esc(note)}</p>` : ''}
        </div></section>
        ${shots || vids ? `<section class="section" style="padding-top:0"><div class="wrap"><h2>${esc(cs.gallery)}</h2><div class="gallery">${vids}${shots}</div></div></section>` : ''}
        <section class="cs-next on-deep" data-dark><div class="wrap"><a href="project.html?p=${next.id}"><p class="kind">${esc(cs.next)}</p><h2>${esc(P(next).name)}</h2></a></div></section>`;
      $$('.gallery img', box).forEach(img => img.addEventListener('load', () => {
        if (img.naturalHeight / img.naturalWidth > 1) img.parentElement.classList.add('tall');
      }, { once: true }));
    });
  }

  /* ---------- contact page ---------- */
  function contactPage() {
    const form = $('#brief');
    if (!form) return;
    const sel = $('#f-when');
    onLang(() => {
      const keep = sel.selectedIndex;
      sel.innerHTML = S().contactPage.whenOpts.map((o, i) => `<option value="${i}">${esc(o)}</option>`).join('');
      sel.selectedIndex = Math.max(0, keep);
    });
    const fields = [['f-name', 'contactPage.errName'], ['f-repeats', 'contactPage.errRepeats']];
    const check = () => {
      let ok = true;
      fields.forEach(([id, err]) => {
        const el = $('#' + id), bad = el.value.trim().length < (id === 'f-repeats' ? 10 : 2), msg = $('#' + id + '-err');
        el.closest('.field').classList.toggle('bad', bad); el.setAttribute('aria-invalid', bad ? 'true' : 'false');
        msg.textContent = bad ? t(err) : '';
        if (bad && ok) { el.focus(); ok = false; }
      });
      return ok;
    };
    fields.forEach(([id]) => $('#' + id).addEventListener('input', e => {
      const f = e.target.closest('.field'); if (f.classList.contains('bad')) { f.classList.remove('bad'); $('#' + id + '-err').textContent = ''; }
    }));
    const body = () => {
      const L = S().contactPage.lines;
      return [
        `${L.name}: ${$('#f-name').value.trim()}`,
        $('#f-company').value.trim() ? `${L.company}: ${$('#f-company').value.trim()}` : '',
        `${L.when}: ${sel.options[sel.selectedIndex].text}`,
        '', `${L.repeats}:`, $('#f-repeats').value.trim()
      ].filter((l, i) => l !== '' || i === 3).join('\n');
    };
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!check()) return;
      const via = e.submitter && e.submitter.value;
      const text = body();
      if (via === 'wa') window.open(`https://wa.me/${D.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      else location.href = `mailto:${D.contact.email}?subject=${encodeURIComponent(t('contactPage.mailSubject') + ' ' + $('#f-name').value.trim())}&body=${encodeURIComponent(text)}`;
    });
  }

  /* ---------- boot ---------- */
  home(); projectsPage(); casePage(); contactPage();
  apply();
  addEventListener('resize', resizeAll);
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(resizeAll);
  resizeAll();
  const loop = now => { scenes.forEach(fn => fn(now)); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
})();

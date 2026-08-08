/**
 * Portfolio i18n: resolve locale, apply data-i18n, language toggle.
 * Depends on js/locales.js (window.PORTFOLIO_LOCALES).
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'portfolio-lang';
  const LOCALES = global.PORTFOLIO_LOCALES || { en: {}, ar: {} };

  function browserPrefersArabic() {
    const list = global.navigator && (global.navigator.languages || [global.navigator.language || 'en']);
    return Array.from(list || []).some((l) => String(l || '').toLowerCase().startsWith('ar'));
  }

  function resolveLocale() {
    try {
      const saved = global.localStorage && global.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
    } catch (_) { /* private mode */ }
    return browserPrefersArabic() ? 'ar' : 'en';
  }

  function getByPath(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }

  function t(key, vars) {
    const lang = getLocale();
    let val = getByPath(LOCALES[lang], key);
    if (val == null) val = getByPath(LOCALES.en, key);
    if (val == null) return key;
    if (typeof val !== 'string') return val;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        val = val.replace(new RegExp('\\{' + k + '\\}', 'g'), String(vars[k]));
      });
    }
    return val;
  }

  function getLocale() {
    const root = global.document && global.document.documentElement;
    const fromDom = root && (root.dataset.locale || root.lang);
    if (fromDom === 'ar' || fromDom === 'en') return fromDom;
    return resolveLocale();
  }

  function applyDocumentDirection(lang) {
    const root = global.document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    root.dataset.locale = lang;
  }

  function applyList(el, key) {
    const raw = t(key);
    if (typeof raw !== 'string') return;
    const items = raw.split('|');
    const lis = el.querySelectorAll('li');
    items.forEach((text, i) => {
      if (lis[i]) lis[i].textContent = text;
    });
  }

  function applyTranslations(root) {
    const scope = root || global.document;

    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (typeof val !== 'string') return;
      el.textContent = val;
      if (el.classList.contains('scramble-target') || el.matches('.brand-hero .word i')) {
        el.dataset.text = val;
      }
    });

    scope.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (typeof val === 'string') el.innerHTML = val;
    });

    scope.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    scope.querySelectorAll('[data-i18n-list]').forEach((el) => {
      applyList(el, el.getAttribute('data-i18n-list'));
    });

    scope.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (typeof val === 'string') el.setAttribute('title', val);
    });

    // Document title
    const titleEl = global.document.querySelector('title[data-i18n-doc-title]');
    if (titleEl) {
      const val = t(titleEl.getAttribute('data-i18n-doc-title'));
      if (typeof val === 'string') {
        titleEl.textContent = val;
        global.document.title = val;
      }
    }

    // Meta description
    global.document.querySelectorAll('meta[data-i18n-content]').forEach((el) => {
      const val = t(el.getAttribute('data-i18n-content'));
      if (typeof val === 'string') el.setAttribute('content', val);
    });

    updateToggleUI();
  }

  function updateToggleUI() {
    const lang = getLocale();
    global.document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const target = btn.getAttribute('data-lang-switch');
      const active = target === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    global.document.querySelectorAll('.lang-switch').forEach((wrap) => {
      wrap.setAttribute('aria-label', t('nav.langToggle'));
    });
  }

  function setLocale(lang, opts) {
    if (lang !== 'ar' && lang !== 'en') return;
    const options = opts || {};
    try {
      if (global.localStorage) global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) { /* ignore */ }

    applyDocumentDirection(lang);
    applyTranslations();

    global.dispatchEvent(new CustomEvent('portfolio:locale', { detail: { lang } }));

    if (options.reload) {
      global.location.reload();
    }
  }

  function getProjectStrings(projectId) {
    const data = t('projectsData.' + projectId);
    return data && typeof data === 'object' ? data : null;
  }

  function bindToggle() {
    global.document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      if (btn.dataset.i18nBound) return;
      btn.dataset.i18nBound = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const next = btn.getAttribute('data-lang-switch');
        if (next && next !== getLocale()) setLocale(next);
      });
    });
  }

  function init() {
    const lang = resolveLocale();
    applyDocumentDirection(lang);
    applyTranslations();
    bindToggle();
  }

  // Early apply if DOM already ready; otherwise wait
  if (global.document.readyState === 'loading') {
    global.document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.PortfolioI18n = {
    STORAGE_KEY,
    resolveLocale,
    getLocale,
    setLocale,
    t,
    applyTranslations,
    getProjectStrings,
    bindToggle,
    init
  };
})(typeof window !== 'undefined' ? window : globalThis);

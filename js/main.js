(function () {
  const nav = document.querySelector('.nav');
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');

  if (links && !links.querySelector('.mobile-nav-footer')) {
    const footer = document.createElement('div');
    footer.className = 'mobile-nav-footer';
    footer.innerHTML = `
      <div class="mobile-nav-status">
        <span class="status-pulse"></span>
        <span>Available for AI &amp; Full-Stack Projects</span>
      </div>
      <div class="mobile-nav-meta">Bayan Kallash — High-Reliability Architecture</div>
    `;
    links.appendChild(footer);
  }

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('solid', window.scrollY > 40);
  }, { passive: true });

  function closeMenu() {
    links?.classList.remove('open');
    toggle?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  toggle?.addEventListener('click', () => {
    const isOpen = links?.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', isOpen);
  });

  links?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });

  // Text scramble on hover / in view
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  function scramble(el) {
    const final = el.dataset.text || el.textContent;
    el.dataset.text = final;
    let frame = 0;
    const total = Math.min(final.length * 2, 24);
    clearInterval(el._scramble);
    el._scramble = setInterval(() => {
      el.textContent = final
        .split('')
        .map((c, i) => {
          if (c === ' ' || c === '\n') return c;
          if (i < frame / 2) return final[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      frame++;
      if (frame > total) {
        clearInterval(el._scramble);
        el.textContent = final;
      }
    }, 28);
  }

  document.querySelectorAll('.scramble-target, .brand-hero .word i').forEach((el) => {
    el.dataset.text = el.textContent;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        scramble(el);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    el.addEventListener('mouseenter', () => scramble(el));
  });

  // Reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Horizontal project rail mouse drag support
  const wrap = document.querySelector('.rail-wrap');
  if (wrap) {
    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    wrap.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
    });

    wrap.addEventListener('mouseleave', () => { isMouseDown = false; });
    wrap.addEventListener('mouseup', () => { isMouseDown = false; });

    wrap.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - wrap.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrap.scrollLeft = scrollLeft - walk;
    });
  }

  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // Polished Custom Cursor System
  if (window.matchMedia('(pointer: fine)').matches) {
    document.documentElement.classList.add('fine-pointer');
    document.body.classList.add('fine-pointer');

    const dot = document.createElement('div');
    dot.className = 'volt-cursor-dot';

    const ring = document.createElement('div');
    ring.className = 'volt-cursor-ring';

    document.documentElement.appendChild(dot);
    document.documentElement.appendChild(ring);

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;

    function updatePos(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    }

    window.addEventListener('mousemove', updatePos, { passive: true });
    window.addEventListener('pointermove', updatePos, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });

    document.addEventListener('pointerover', (e) => {
      if (e.target.closest('a, button, .rail-item, input, textarea, .magnetic, [role="button"]')) {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      }
    });

    document.addEventListener('pointerout', (e) => {
      if (e.target.closest('a, button, .rail-item, input, textarea, .magnetic, [role="button"]')) {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      }
    });

    document.addEventListener('mousedown', () => {
      dot.classList.add('clicking');
      ring.classList.add('clicking');
    });

    document.addEventListener('mouseup', () => {
      dot.classList.remove('clicking');
      ring.classList.remove('clicking');
    });

    function render() {
      if (isVisible) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  document.querySelector('.form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = e.target.querySelector('.form-status');
    if (status) status.textContent = 'Message fired. Reply within one business day.';
    e.target.reset();
  });

  // ==========================================================================
  // Project Case Study Data & Interactive Modal System
  // ==========================================================================
  const TECH_ICONS = {
    'Laravel': `<svg viewBox="0 0 24 24" fill="#FF2D20"><path d="M23.645 5.234a.784.784 0 0 0-.378-.384L12.44.134a.795.795 0 0 0-.69 0L.926 4.85a.783.783 0 0 0-.378.384.778.778 0 0 0 .01.761l10.825 17.5a.79.79 0 0 0 1.231 0l10.824-17.5a.778.778 0 0 0 .007-.761z"/></svg>`,
    'Livewire': `<svg viewBox="0 0 24 24" fill="#FB70A9"><path d="M19.167 1.5H4.833A3.333 3.333 0 0 0 1.5 4.833v14.334A3.333 3.333 0 0 0 4.833 22.5h14.334A3.333 3.333 0 0 0 22.5 19.167V4.833A3.333 3.333 0 0 0 19.167 1.5zm-3.08 14.567h-2.188l1.325-4.143h2.188l-1.325 4.143zm-4.375 0H9.524l1.325-4.143h2.188l-1.325 4.143zm-4.375 0H5.15l1.325-4.143h2.187L7.337 16.067zm11.5-6.25H6.663l.646-2.017h12.175l-.647 2.017z"/></svg>`,
    'Inertia.js': `<svg viewBox="0 0 24 24" fill="#9553E9"><path d="M2.5 12l6.5-6.5h4.5L7 12l6.5 6.5H9L2.5 12zm8 0l6.5-6.5h4.5L15 12l6.5 6.5H17L10.5 12z"/></svg>`,
    'Filament': `<svg viewBox="0 0 24 24" fill="#FDAE4B"><path d="M4 3h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 7h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 7h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/></svg>`,
    'OpenAI API': `<svg viewBox="0 0 24 24" fill="#10A37F"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4952 4.4953zM3.6047 18.2979a4.4707 4.4707 0 0 1-.5357-3.0044l.142.0854 4.779 2.7582a.7938.7938 0 0 0 .7902 0l5.8341-3.3688v2.3324a.0805.0805 0 0 1-.0332.0617L9.74 19.9504a4.4997 4.4997 0 0 1-6.1353-1.6525zM2.3444 8.2714a4.4707 4.4707 0 0 1 2.3407-1.9682l-.0047.1659v5.5164a.7938.7938 0 0 0 .3975.6861l5.8341 3.3688-2.02 1.1686a.0758.0758 0 0 1-.0711.0047l-4.836-2.7915a4.4949 4.4949 0 0 1-1.6405-6.1508zM18.995 10.3787l-5.8341-3.3688 2.02-1.1686a.0758.0758 0 0 1 .0711-.0047l4.836 2.7915a4.4997 4.4997 0 0 1-.659 8.119l-.142-.0854-4.779-2.7582a.7938.7938 0 0 0-.7902 0zm1.7454-3.3562l-.142-.0854-4.779-2.7582a.7938.7938 0 0 0-.7902 0L9.1951 7.5477V5.2153a.0805.0805 0 0 1 .0332-.0617L14.06 2.362a4.4997 4.4997 0 0 1 6.6804 4.6605zm-11.4552 4.4755l2.7163-1.5677 2.7163 1.5677v3.1355l-2.7163 1.5677-2.7163-1.5677z"/></svg>`,
    'OpenAI': `<svg viewBox="0 0 24 24" fill="#10A37F"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4952 4.4953zM3.6047 18.2979a4.4707 4.4707 0 0 1-.5357-3.0044l.142.0854 4.779 2.7582a.7938.7938 0 0 0 .7902 0l5.8341-3.3688v2.3324a.0805.0805 0 0 1-.0332.0617L9.74 19.9504a4.4997 4.4997 0 0 1-6.1353-1.6525zM2.3444 8.2714a4.4707 4.4707 0 0 1 2.3407-1.9682l-.0047.1659v5.5164a.7938.7938 0 0 0 .3975.6861l5.8341 3.3688-2.02 1.1686a.0758.0758 0 0 1-.0711.0047l-4.836-2.7915a4.4949 4.4949 0 0 1-1.6405-6.1508zM18.995 10.3787l-5.8341-3.3688 2.02-1.1686a.0758.0758 0 0 1 .0711-.0047l4.836 2.7915a4.4997 4.4997 0 0 1-.659 8.119l-.142-.0854-4.779-2.7582a.7938.7938 0 0 0-.7902 0zm1.7454-3.3562l-.142-.0854-4.779-2.7582a.7938.7938 0 0 0-.7902 0L9.1951 7.5477V5.2153a.0805.0805 0 0 1 .0332-.0617L14.06 2.362a4.4997 4.4997 0 0 1 6.6804 4.6605zm-11.4552 4.4755l2.7163-1.5677 2.7163 1.5677v3.1355l-2.7163 1.5677-2.7163-1.5677z"/></svg>`,
    'Tailwind': `<svg viewBox="0 0 24 24" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>`,
    'Vue': `<svg viewBox="0 0 24 24" fill="#4FC08D"><path d="M24 1.5h-4.5L12 14.5 4.5 1.5H0l12 21L24 1.5zM12 12.5L17.5 1.5h-3.2L12 5.5 9.7 1.5H6.5L12 12.5z"/></svg>`,
    'React': `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`,
    'Postgres': `<svg viewBox="0 0 24 24" fill="#336791"><path d="M11.968 0C5.358 0 0 5.358 0 11.968c0 6.61 5.358 11.968 11.968 11.968 6.61 0 11.968-5.358 11.968-11.968C23.936 5.358 18.578 0 11.968 0zm6.071 16.745c-.244.606-.826 1.01-1.489 1.01h-2.128v2.128c0 .663-.404 1.245-1.01 1.489a1.6 1.6 0 0 1-.585.111c-.425 0-.85-.159-1.173-.482l-3.719-3.719H5.789c-.883 0-1.6-.717-1.6-1.6V7.889c0-.883.717-1.6 1.6-1.6h12.25c.883 0 1.6.717 1.6 1.6v8.856z"/></svg>`,
    'Redis': `<svg viewBox="0 0 24 24" fill="#DC382D"><path d="M22.67 15.55l-10-5.77a1.34 1.34 0 0 0-1.34 0l-10 5.77a1.34 1.34 0 0 0 0 2.32l10 5.77c.41.24.93.24 1.34 0l10-5.77a1.34 1.34 0 0 0 0-2.32zM12 22.42L3.33 17.42 12 12.42l8.67 5-8.67 5zM22.67 8.22l-10-5.77a1.34 1.34 0 0 0-1.34 0l-10 5.77a1.34 1.34 0 0 0 0 2.32l10 5.77c.41.24.93.24 1.34 0l10-5.77a1.34 1.34 0 0 0 0-2.32zM12 15.09L3.33 10.09 12 5.09l8.67 5-8.67 5z"/></svg>`,
    'Python': `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M11.87 0c-5.28 0-4.95 2.29-4.95 2.29v2.37h5v.71H4.82S1.65 4.82 1.65 10.2c0 5.37 2.76 5.17 2.76 5.17h1.65v-2.43s-.09-2.88 2.84-2.88h4.94s2.78.04 2.78-2.69V4.67S17.15 0 11.87 0zm-2.73 1.6c.55 0 .99.44.99.99 0 .55-.44.99-.99.99-.55 0-.99-.44-.99-.99 0-.55.44-.99.99-.99zm2.73 22.4c5.28 0 4.95-2.29 4.95-2.29v-2.37h-5v-.71h7.1s3.17.55 3.17-4.82c0-5.37-2.76-5.17-2.76-5.17h-1.65v2.43s.09 2.88-2.84 2.88h-4.94s-2.78-.04-2.78 2.69v4.7s-.53 4.67 4.75 4.67zm2.73-1.6c-.55 0-.99-.44-.99-.99 0-.55.44-.99.99-.99.55 0 .99.44.99.99 0 .55-.44.99-.99.99z"/></svg>`,
    'Cloudflare': `<svg viewBox="0 0 24 24" fill="#F38020"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
    'TypeScript': `<svg viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.507 0 0 .507 0 1.125v21.75C0 23.493.507 24 1.125 24h21.75c.618 0 1.125-.507 1.125-1.125V1.125C24 .507 23.493 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.088-.408 6.21 6.21 0 0 0-1.387-.149c-.693 0-1.212.131-1.556.395-.344.263-.516.637-.516 1.12 0 .341.1.618.3.83.201.213.484.385.85.517.365.132.812.254 1.341.367.752.164 1.387.354 1.905.57.518.217.922.502 1.212.857.29.354.435.808.435 1.36 0 .762-.303 1.378-.908 1.848-.605.47-1.463.705-2.574.705a9.876 9.876 0 0 1-1.898-.182 8.7 8.7 0 0 1-1.639-.516v-2.57a6.227 6.227 0 0 0 1.543.593 6.942 6.942 0 0 0 1.815.234c.734 0 1.282-.132 1.644-.396.363-.264.544-.643.544-1.137 0-.361-.097-.647-.291-.857-.195-.21-.476-.381-.844-.513-.368-.132-.824-.256-1.368-.373-.752-.164-1.383-.357-1.893-.578a3.29 3.29 0 0 1-1.205-.863c-.29-.356-.435-.806-.435-1.35 0-.74.298-1.346.894-1.818.596-.472 1.433-.708 2.511-.708zm-9.066.177v2.247h-2.91v9.646H3.633v-9.646H.723V9.927h8.699z"/></svg>`,
    'Pgvector': `<svg viewBox="0 0 24 24" fill="#4169E1"><circle cx="12" cy="12" r="8" fill="#4169E1"/></svg>`,
    'Alpine.js': `<svg viewBox="0 0 24 24" fill="#8BC0D0"><path d="m24 12-5.72 5.719H6.857L12.576 12 6.857 6.281H18.28L24 12zM11.424 12 5.705 6.281H0l5.719 5.719L0 17.719h5.705l5.719-5.719z"/></svg>`,
    'MySQL': `<svg viewBox="0 0 24 24" fill="#00758F"><path d="M21.73 13.1c-.08-.18-.26-.3-.46-.3-.04 0-.08 0-.12.02l-2.04.75c-.32-.48-.75-.9-1.25-1.23l.97-1.95c.08-.16.06-.36-.06-.5-.12-.14-.32-.2-.5-.14l-2.1.7c-.55-.42-1.2-.72-1.9-.88V7.32c0-.22-.15-.42-.37-.47l-2.14-.53a.502.502 0 0 0-.61.42l-.24 2.13c-.66.12-1.28.38-1.84.75l-1.66-1.34a.502.502 0 0 0-.68.06l-1.5 1.5a.5.5 0 0 0 .06.75l1.34 1.66c-.37.56-.63 1.18-.75 1.84l-2.13.24a.5.5 0 0 0-.42.61l.53 2.14c.05.22.25.37.47.37H6.7c.16.7.46 1.35.88 1.9l-.7 2.1c-.06.18 0 .38.14.5.14.12.34.14.5.06l1.95-.97c.33.5.75.93 1.23 1.25l-.75 2.04c-.02.04-.02.08-.02.12 0 .2.12.38.3.46.06.03.13.04.2.04.14 0 .28-.06.37-.17l1.38-1.65c.67.23 1.38.35 2.1.35s1.43-.12 2.1-.35l1.38 1.65c.09.11.23.17.37.17.07 0 .14-.01.2-.04.18-.08.3-.26.3-.46 0-.04 0-.08-.02-.12l-.75-2.04c.48-.32.9-.75 1.23-1.25l1.95.97c.16.08.36.06.5-.06.14-.12.2-.32.14-.5l-.7-2.1c.42-.55.72-1.2.88-1.9h2.17c.22 0 .42-.15.47-.37l.53-2.14c.06-.24-.09-.49-.33-.55z"/></svg>`,
    'Gemini AI': `<svg viewBox="0 0 24 24" fill="#8E75FF"><path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/></svg>`,
    'Gemini': `<svg viewBox="0 0 24 24" fill="#8E75FF"><path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/></svg>`
  };

  const PROJECTS_DATA = {
    'form-generator': {
      id: 'form-generator',
      title: 'Form Generator',
      year: '2026',
      client: 'SaaS Form Builder Ecosystem',
      role: 'Lead Full-Stack Architect',
      duration: '3 Months',
      tagline: 'Laravel 12 & Livewire 3 dynamic form builder with Google Gemini AI conversational builder, sentiment analysis & anomaly detection.',
      status: 'Open-Source Production',
      demoUrl: 'https://formgenerator.me',
      githubUrl: 'https://github.com/bkallash/form-generator',
      metrics: [
        { val: '100%', lbl: 'Offline Sync' },
        { val: 'Gemini 2.5', lbl: 'Flash AI Engine' },
        { val: '<50ms', lbl: 'Livewire Response' }
      ],
      description: 'Form Generator is a modern, high-performance Laravel 12 + Livewire 3 application for building custom dynamic forms, sharing public links, collecting responses, and running advanced AI-driven analysis. Built on the TALL stack (Tailwind CSS, Alpine.js, Livewire 3, Flux UI) and MySQL, it leverages Google Gemini AI (gemini-2.5-flash) for chat-based form creation, background sentiment & emotion analysis, and automated traffic anomaly detection.',
      features: [
        { title: 'Conversational Gemini AI Builder', desc: 'Create, modify, and expand multi-step form schemas iteratively using natural language in the sidebar AI chat.' },
        { title: 'AI Sentiment & Sub-Tone Analysis', desc: 'Asynchronously evaluates open-ended responses to score sentiment (0.0–1.0) and detect sub-tones (frustrated, excited, satisfied).' },
        { title: 'Automated Anomaly & Traffic Alert Engine', desc: 'Monitors submission streams to flag 70%+ traffic drops, 150%+ spikes, negative review clusters, and quiet forms.' },
        { title: 'Visual Drag-and-Drop & Multi-Step Logic', desc: 'Arrange 15+ field types with conditional visibility rules, multi-page step layouts, and live previews.' },
        { title: 'PWA Offline Sync & Security', desc: 'Stages submissions locally when offline with background sync, Google OAuth, and automatic attachment cleanup.' }
      ],
      techStack: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind', 'MySQL', 'Gemini AI', 'JS PWA', 'Redis'],
      screenshot: 'img/form-generator/form_builder.webp',
      screenshots: [
        { id: 'builder', label: 'Form Builder', src: 'img/form-generator/form_builder.webp' },
        { id: 'dashboard', label: 'Analytics Dashboard', src: 'img/form-generator/dashboard.webp' },
        { id: 'public', label: 'Public Form View', src: 'img/form-generator/public_form.webp' },
        { id: 'submission', label: 'Submissions Data', src: 'img/form-generator/submission.webp' }
      ],
      videos: [
        { id: 'analytics_video', label: 'Analytics Walkthrough', src: 'img/form-generator/analytics.webm', log: 'GEMINI AI ENGINE: Executed sentiment & anomaly sweep across form submissions' },
        { id: 'sync_video', label: 'Offline PWA Sync Demo', src: 'img/form-generator/offline-sync-submissions.webm', log: 'PWA SERVICE WORKER: Reconnected — Synced 18 queued offline submissions (0 loss)' }
      ],
      videoLog: 'GEMINI AI CHAT: Interactive sidebar form schema builder active'
    },
    'ledgerline': {
      id: 'ledgerline',
      title: 'Ledgerline',
      year: '2025',
      client: 'Ledgerline Inc.',
      role: 'Lead Laravel & Full-Stack Engineer',
      duration: '4 Months',
      tagline: 'High-throughput financial reconciliation engine on Laravel 11 & Horizon.',
      status: 'Production Deployed',
      demoUrl: 'https://ledgerline.dev',
      githubUrl: 'https://github.com/bayankallash/ledgerline-ops',
      metrics: [
        { val: '-92%', lbl: 'Reconciliation Latency' },
        { val: '1.2M+', lbl: 'Daily Queue Jobs' },
        { val: '99.99%', lbl: 'Audit Accuracy' }
      ],
      description: 'Ledgerline replaced a legacy batch reconciliation system with a real-time event-driven Laravel application. Powered by Laravel Horizon queues, Redis, PostgreSQL pessimistic locking, and Inertia.js, it processes over 14,000 multi-currency transactions per second.',
      features: [
        { title: 'Laravel Horizon Queue System', desc: 'Distributed job processing across 12 queue workers with sub-second matching.' },
        { title: 'Inertia.js + Vue 3 Frontend', desc: 'Seamless single-page application experience with zero API duplication.' },
        { title: 'Cryptographic Audit Log', desc: 'Immutable ledger records for compliance and financial ops teams.' }
      ],
      techStack: ['Laravel', 'Inertia.js', 'Vue', 'Postgres', 'Redis'],
      screenshot: 'img/ledgerline.png',
      videoLog: 'LARAVEL HORIZON QUEUE: 14,280 txn/sec [ACTIVE STREAM - 0 ANOMALIES]'
    },
    'orbit': {
      id: 'orbit',
      title: 'Orbit AI Studio',
      year: '2024',
      client: 'Orbit Automation Group',
      role: 'Lead AI & Full-Stack Engineer',
      duration: '6 Months',
      tagline: 'Intelligent document processor & LLM agent orchestration platform.',
      status: 'Active SaaS Engine',
      demoUrl: 'https://orbitstudio.ai',
      githubUrl: 'https://github.com/bayankallash/orbit-ai-studio',
      metrics: [
        { val: '45k+', lbl: 'Docs Processed Daily' },
        { val: '<150ms', lbl: 'AI Agent Response' },
        { val: '99.4%', lbl: 'Extraction Precision' }
      ],
      description: 'Orbit AI Studio provides automated document ingestion, structured data extraction, and AI agent workflow execution. Built with Laravel 11 API backends, Python AI worker nodes, OpenAI API function calling, and Vue.js.',
      features: [
        { title: 'LLM Agent Pipelines', desc: 'Autonomous multi-step document processing agents with fallback logic.' },
        { title: 'Structured Data Extraction', desc: 'Converts unstructured PDFs and images into typed JSON objects via OpenAI.' },
        { title: 'Real-Time Workflow Console', desc: 'Live monitoring dashboard built with Tailwind & Vue.js.' }
      ],
      techStack: ['OpenAI API', 'Laravel', 'Vue', 'Python', 'Tailwind'],
      screenshot: 'img/orbit.png',
      videoLog: 'AI AGENT PIPELINE: Executed 1,420 invoice extractions [0 Errors]'
    },
    'northwind': {
      id: 'northwind',
      title: 'Northwind Ops',
      year: '2024',
      client: 'Northwind Freight Corp.',
      role: 'Principal Full-Stack Architect',
      duration: '5 Months',
      tagline: 'Real-time fleet route optimization and operator control console.',
      status: 'Live Dispatch Console',
      demoUrl: 'https://northwind.logistics',
      githubUrl: 'https://github.com/bayankallash/northwind-route-engine',
      metrics: [
        { val: '-18%', lbl: 'Idle Route Miles' },
        { val: '4.2k', lbl: 'Active Fleet Vehicles' },
        { val: '<50ms', lbl: 'Route Calculation' }
      ],
      description: 'Northwind Ops is a real-time reactive fleet dispatch dashboard built using Laravel, Livewire 3, Alpine.js, and Redis. Dispatchers dynamically re-route freight vehicles based on live traffic, weather, and delivery windows.',
      features: [
        { title: 'Livewire 3 Dynamic UI', desc: 'Reactive server-driven interfaces without full page reloads.' },
        { title: 'Fleet Diagnostic Telemetry', desc: 'Real-time telemetry streams and automated route alerts.' },
        { title: 'Operator Control Panel', desc: 'Tailwind CSS styled high-density dispatch workspace.' }
      ],
      techStack: ['Livewire', 'Laravel', 'Tailwind', 'Redis'],
      screenshot: 'img/northwind.png',
      videoLog: 'ROUTE OPTIMIZER: Re-routed 14 trucks around highway bottleneck (-42 min saved)'
    },
    'harbor': {
      id: 'harbor',
      title: 'Harbor CMS',
      year: '2023',
      client: 'Harbor Media Network',
      role: 'Lead Laravel & Filament Developer',
      duration: '3 Months',
      tagline: 'Filament 3 powered content management platform with edge caching.',
      status: 'Edge Production',
      demoUrl: 'https://harborcms.edge',
      githubUrl: 'https://github.com/bayankallash/harbor-filament-cms',
      metrics: [
        { val: '12ms', lbl: 'Edge TTFB' },
        { val: '100%', lbl: 'Cache Hit Ratio' },
        { val: '3.4x', lbl: 'Publishing Speed' }
      ],
      description: 'Harbor CMS features a sleek admin dashboard built with Filament 3 and Laravel. Authors publish content distributed instantly globally via Cloudflare Workers edge nodes.',
      features: [
        { title: 'Filament 3 Admin Suite', desc: 'Rich form builders, table actions, and permission management.' },
        { title: 'Global Edge Distribution', desc: 'Pre-rendered content cached across 275+ edge POPs.' },
        { title: 'Instant Content Previews', desc: 'Side-by-side authoring with draft invalidation.' }
      ],
      techStack: ['Laravel', 'Filament', 'Tailwind', 'Cloudflare'],
      screenshot: 'img/harbor.png',
      videoLog: 'DEPLOYMENT COMPLETE: Invalidated cache across 275 edge POPs in 87ms'
    }
  };

  // Modal DOM Ingestion
  let backdropEl = document.querySelector('.modal-backdrop');
  let modalEl = document.querySelector('.cs-modal');
  let videoTimer = null;
  let isVideoPlaying = false;
  let videoProgress = 0;

  if (!backdropEl) {
    backdropEl = document.createElement('div');
    backdropEl.className = 'modal-backdrop';
    document.body.appendChild(backdropEl);
  }

  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.className = 'cs-modal';
    document.body.appendChild(modalEl);
  }

  const TECH_ICON_SLUGS = {
    'Laravel': 'laravel/FF2D20',
    'Livewire': 'livewire/FB70A9',
    'Alpine.js': 'alpinedotjs/8BC0D0',
    'Tailwind': 'tailwindcss/06B6D4',
    'MySQL': 'mysql/4479A1',
    'Gemini AI': 'googlegemini/8E75FF',
    'Gemini': 'googlegemini/8E75FF',
    'Inertia.js': 'inertia/9553E9',
    'Filament': 'filament/FDAE4B',
    'OpenAI API': 'openai/412991',
    'OpenAI': 'openai/412991',
    'Vue': 'vuedotjs/4FC08D',
    'React': 'react/61DAFB',
    'Postgres': 'postgresql/4169E1',
    'Redis': 'redis/FF4438',
    'Python': 'python/3776AB',
    'Cloudflare': 'cloudflare/F38020',
    'TypeScript': 'typescript/3178C6',
    'Pgvector': 'postgresql/4169E1',
    'JS PWA': 'pwa/5A0FC8',
    'PWA': 'pwa/5A0FC8'
  };

  function getTechPillHtml(techName) {
    const slug = TECH_ICON_SLUGS[techName];
    if (slug) {
      return `<span class="tech-pill"><img src="https://cdn.simpleicons.org/${slug}" width="16" height="16" alt="${techName}" class="tech-pill-icon" /> <span>${techName}</span></span>`;
    }
    const iconSvg = TECH_ICONS[techName] || `<svg viewBox="0 0 24 24" fill="var(--orange)"><circle cx="12" cy="12" r="6"/></svg>`;
    return `<span class="tech-pill">${iconSvg} <span>${techName}</span></span>`;
  }

  function renderCaseStudyModal(data) {
    const techPillsHtml = data.techStack.map(t => getTechPillHtml(t)).join('');

    const metricsHtml = data.metrics.map(m => `
      <div class="cs-metric-card">
        <div class="cs-metric-val">${m.val}</div>
        <div class="cs-metric-lbl">${m.lbl}</div>
      </div>
    `).join('');

    const featuresHtml = data.features.map(f => `
      <div class="cs-feature-card">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `).join('');

    modalEl.innerHTML = `
      <div class="cs-modal-header">
        <div class="cs-modal-header-main">
          <h2 class="cs-modal-title">${data.title}</h2>
          <span class="cs-status-badge">${data.status}</span>
        </div>
        <button class="cs-modal-close" aria-label="Close modal">✕</button>
      </div>
      <div class="cs-modal-body">
        <div class="cs-meta-bar">
          <div class="cs-meta-details">
            <div class="cs-meta-item"><strong>Year</strong>${data.year}</div>
            <div class="cs-meta-item"><strong>Client</strong>${data.client}</div>
            <div class="cs-meta-item"><strong>Role</strong>${data.role}</div>
            <div class="cs-meta-item"><strong>Duration</strong>${data.duration}</div>
          </div>
          <div class="cs-action-links">
            ${data.demoUrl ? `<a class="cs-link-btn cs-link-demo" href="${data.demoUrl}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>` : ''}
            ${data.githubUrl ? `<a class="cs-link-btn cs-link-github" href="${data.githubUrl}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Repo
            </a>` : ''}
            <button class="cs-link-btn cs-link-share magnetic" id="csShareBtn" type="button">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>Share Link</span>
            </button>
          </div>
        </div>

        <div class="cs-metrics-grid">
          ${metricsHtml}
        </div>

        <div class="cs-section">
          <h3 class="cs-section-title">Overview &amp; Impact</h3>
          <p class="cs-description-text">${data.description}</p>
        </div>

        <div class="cs-section">
          <h3 class="cs-section-title">Key Capabilities</h3>
          <div class="cs-features-grid">
            ${featuresHtml}
          </div>
        </div>

        <div class="cs-section">
          <h3 class="cs-section-title">Technology Architecture</h3>
          <div class="cs-tech-list">
            ${techPillsHtml}
          </div>
        </div>

        <div class="cs-section">
          <h3 class="cs-section-title">Interface &amp; Demo Showcase</h3>
          <div class="cs-media-showcase">
            <div class="cs-media-tabs">
              <button class="cs-media-tab active" data-tab="screenshot">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                UI Screenshot
              </button>
              <button class="cs-media-tab" data-tab="video">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                ${data.videos && data.videos.length > 0 ? `Video Demos (${data.videos.length})` : 'Interactive Video Demo'}
              </button>
            </div>
            <div class="cs-media-view active" id="tab-screenshot">
              ${data.screenshots && data.screenshots.length > 0 ? `
                <div class="cs-submedia-tabs">
                  ${data.screenshots.map((s, idx) => `
                    <button class="cs-submedia-btn ${idx === 0 ? 'active' : ''}" data-shot-src="${s.src}">${s.label}</button>
                  `).join('')}
                </div>
              ` : ''}
              <img class="cs-screenshot-img" id="csMainScreenshot" src="${data.screenshot}" alt="${data.title} UI Showcase" />
            </div>
            <div class="cs-media-view" id="tab-video">
              ${data.videos && data.videos.length > 0 ? `
                <div class="cs-submedia-tabs">
                  ${data.videos.map((v, idx) => `
                    <button class="cs-submedia-btn ${idx === 0 ? 'active' : ''}" data-video-src="${v.src}" data-video-log="${v.log}">${v.label}</button>
                  `).join('')}
                </div>
                <div class="cs-video-player" style="aspect-ratio: auto; height: auto;">
                  <video class="cs-html5-video" id="csHtml5Video" src="${data.videos[0].src}" controls autoplay loop muted playsinline></video>
                  <div class="cs-video-overlay-log" style="position:relative; bottom:0; left:0; right:0; margin: 0.5rem 0.75rem 0.75rem 0.75rem;">
                    <span class="cs-video-status-dot"></span>
                    <span class="cs-video-log-text" id="csVideoLogText">${data.videos[0].log}</span>
                  </div>
                </div>
              ` : `
                <div class="cs-video-player">
                  <div class="cs-video-screen" style="background-image: url('${data.screenshot}');">
                    <div class="cs-video-overlay-log">
                      <span class="cs-video-status-dot"></span>
                      <span class="cs-video-log-text">${data.videoLog}</span>
                    </div>
                  </div>
                  <div class="cs-video-controls">
                    <button class="cs-video-play-btn" id="csPlayBtn">▶</button>
                    <div class="cs-video-progress-bar" id="csProgressBar">
                      <div class="cs-video-progress-fill" id="csProgressFill"></div>
                    </div>
                    <span class="cs-video-time" id="csTimeText">00:00 / 00:30</span>
                  </div>
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    // Sub-screenshot button switching listener
    modalEl.querySelectorAll('[data-shot-src]').forEach(btn => {
      btn.addEventListener('click', () => {
        modalEl.querySelectorAll('[data-shot-src]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mainImg = modalEl.querySelector('#csMainScreenshot');
        if (mainImg) mainImg.src = btn.dataset.shotSrc;
      });
    });

    // Sub-video button switching listener
    modalEl.querySelectorAll('[data-video-src]').forEach(btn => {
      btn.addEventListener('click', () => {
        modalEl.querySelectorAll('[data-video-src]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const html5Vid = modalEl.querySelector('#csHtml5Video');
        const logText = modalEl.querySelector('#csVideoLogText');
        if (html5Vid) {
          html5Vid.src = btn.dataset.videoSrc;
          html5Vid.play().catch(() => { });
        }
        if (logText && btn.dataset.videoLog) {
          logText.textContent = btn.dataset.videoLog;
        }
      });
    });

    // Tab switching logic
    modalEl.querySelectorAll('.cs-media-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        modalEl.querySelectorAll('.cs-media-tab').forEach(t => t.classList.remove('active'));
        modalEl.querySelectorAll('.cs-media-view').forEach(v => v.classList.remove('active'));
        tab.classList.add('active');
        const targetId = `tab-${tab.dataset.tab}`;
        modalEl.querySelector(`#${targetId}`)?.classList.add('active');
      });
    });

    // Close button listener
    modalEl.querySelector('.cs-modal-close')?.addEventListener('click', () => closeCaseStudy(true));

    // Share link button listener
    const shareBtn = modalEl.querySelector('#csShareBtn');
    shareBtn?.addEventListener('click', () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}#project-${data.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        const span = shareBtn.querySelector('span');
        if (span) {
          const orig = span.textContent;
          span.textContent = 'Copied!';
          shareBtn.classList.add('copied');
          setTimeout(() => {
            span.textContent = orig;
            shareBtn.classList.remove('copied');
          }, 2000);
        }
      }).catch(() => {
        // Fallback prompt if clipboard API blocked
        prompt('Copy project URL:', window.location.href);
      });
    });

    // Video play/pause simulation logic (fallback for projects without native HTML5 video)
    const playBtn = modalEl.querySelector('#csPlayBtn');
    const fillEl = modalEl.querySelector('#csProgressFill');
    const timeText = modalEl.querySelector('#csTimeText');

    videoProgress = 0;
    isVideoPlaying = false;
    clearInterval(videoTimer);

    function updateVideoUI() {
      if (fillEl) fillEl.style.width = `${(videoProgress / 30) * 100}%`;
      if (timeText) {
        const currentSec = Math.floor(videoProgress).toString().padStart(2, '0');
        timeText.textContent = `00:${currentSec} / 00:30`;
      }
      if (playBtn) playBtn.textContent = isVideoPlaying ? '❚❚' : '▶';
    }

    playBtn?.addEventListener('click', () => {
      isVideoPlaying = !isVideoPlaying;
      if (isVideoPlaying) {
        videoTimer = setInterval(() => {
          videoProgress += 0.25;
          if (videoProgress >= 30) {
            videoProgress = 0;
            isVideoPlaying = false;
            clearInterval(videoTimer);
          }
          updateVideoUI();
        }, 250);
      } else {
        clearInterval(videoTimer);
      }
      updateVideoUI();
    });
  }

  function openCaseStudy(projectId, updateUrl = true) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;
    renderCaseStudyModal(data);
    backdropEl.classList.add('open');
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (updateUrl && window.location.hash !== `#project-${projectId}`) {
      history.pushState({ project: projectId }, '', `#project-${projectId}`);
    }
  }

  function closeCaseStudy(updateUrl = true) {
    backdropEl.classList.remove('open');
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
    clearInterval(videoTimer);
    isVideoPlaying = false;

    if (updateUrl && window.location.hash && (window.location.hash.startsWith('#project-') || PROJECTS_DATA[window.location.hash.replace('#', '')])) {
      history.pushState({ project: null }, '', window.location.pathname + window.location.search);
    }
  }

  function checkUrlForProject() {
    const rawHash = window.location.hash.replace('#', '');
    const projectId = rawHash.startsWith('project-') ? rawHash.replace('project-', '') : rawHash;
    if (projectId && PROJECTS_DATA[projectId]) {
      openCaseStudy(projectId, false);
    } else if (modalEl.classList.contains('open')) {
      closeCaseStudy(false);
    }
  }

  backdropEl.addEventListener('click', () => closeCaseStudy(true));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('open')) {
      closeCaseStudy(true);
    }
  });

  window.addEventListener('popstate', checkUrlForProject);
  window.addEventListener('hashchange', checkUrlForProject);

  // Check URL on initial load
  checkUrlForProject();

  // Global click delegate for [data-case-study] triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-case-study]');
    if (trigger) {
      e.preventDefault();
      const id = trigger.dataset.caseStudy;
      openCaseStudy(id, true);
    }
  });
})();


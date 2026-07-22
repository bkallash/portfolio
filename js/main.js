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
    'Laravel': `<svg viewBox="0 0 24 24" fill="#FF2D20"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zM12 4.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z"/></svg>`,
    'Livewire': `<svg viewBox="0 0 24 24" fill="#FB70A9"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"/></svg>`,
    'Inertia.js': `<svg viewBox="0 0 24 24" fill="#9553E9"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>`,
    'Filament': `<svg viewBox="0 0 24 24" fill="#EAB308"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg>`,
    'OpenAI API': `<svg viewBox="0 0 24 24" fill="#10A37F"><circle cx="12" cy="12" r="9"/></svg>`,
    'OpenAI': `<svg viewBox="0 0 24 24" fill="#10A37F"><circle cx="12" cy="12" r="9"/></svg>`,
    'Tailwind': `<svg viewBox="0 0 24 24" fill="#38BDF8"><path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.6 2.5-2.2 4.1-1.7 1 .3 1.7 1.1 2.5 1.9C13.3 12.5 14.8 14 18 14c3.3 0 5.5-1.7 6.6-5-1.1 1.6-2.5 2.2-4.1 1.7-1-.3-1.7-1.1-2.5-1.9C16.7 7.5 15.2 6 12 6z"/></svg>`,
    'Vue': `<svg viewBox="0 0 24 24" fill="#4FC08D"><path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3zm4.5 0h3L12 8.5 14.5 3h3L12 13 6.5 3z"/></svg>`,
    'React': `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`,
    'Postgres': `<svg viewBox="0 0 24 24" fill="#4169E1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
    'Redis': `<svg viewBox="0 0 24 24" fill="#DC382D"><path d="M22 12l-10 5-10-5 10-5 10 5zm-10 7.5l-8-4v3l8 4 8-4v-3l-8 4z"/></svg>`,
    'Python': `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H5.2S2 7 2 12.3s2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.9s2.7 0 2.7-2.6V4.7S17.4 2 11.9 2zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9c0-.5.4-.9.9-.9zm2.9 18.4c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h6.8s3.2.4 3.2-4.9-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8h-4.9s-2.7 0-2.7 2.6v4.6s-.5 2.7 5 2.7zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9c0 .5-.4.9-.9.9z"/></svg>`,
    'Cloudflare': `<svg viewBox="0 0 24 24" fill="#F38020"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
    'TypeScript': `<svg viewBox="0 0 24 24" fill="#3178C6"><rect width="20" height="20" x="2" y="2" rx="4"/><path fill="#fff" d="M11.5 16.5h-2v-7h-3V8h8v1.5h-3v7zm3.5 0v-1.5c.8.6 1.8.9 2.7.9.9 0 1.3-.3 1.3-.7 0-1.2-3.8-.5-3.8-3.2 0-1.4 1.2-2.3 3.1-2.3 1.1 0 2.1.3 2.9.8l-.6 1.4c-.7-.4-1.5-.7-2.3-.7-.8 0-1.3.3-1.3.7 0 1.2 3.8.5 3.8 3.2 0 1.5-1.2 2.4-3.3 2.4-1.2 0-2.4-.4-3.2-1z"/></svg>`,
    'Pgvector': `<svg viewBox="0 0 24 24" fill="#4169E1"><circle cx="12" cy="12" r="8" fill="#4169E1"/></svg>`
  };

  const PROJECTS_DATA = {
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
    },
    'pulse': {
      id: 'pulse',
      title: 'Pulse AI Copilot',
      year: '2023',
      client: 'Pulse Analytics',
      role: 'Full-Stack & AI Engineer',
      duration: '4 Months',
      tagline: 'Natural language analytics copilot & custom RAG pipeline.',
      status: 'SaaS Deployed',
      demoUrl: 'https://pulsemetrics.io',
      githubUrl: 'https://github.com/bayankallash/pulse-ai-copilot',
      metrics: [
        { val: '<20ms', lbl: 'Vector Search Latency' },
        { val: '500M+', lbl: 'Events Indexed' },
        { val: '60fps', lbl: 'UI Dashboard' }
      ],
      description: 'Pulse AI Copilot allows product teams to query massive dataset funnels using plain natural language questions. Powered by Laravel API gateways, Pgvector vector embeddings, and OpenAI function calling.',
      features: [
        { title: 'Natural Language SQL Generation', desc: 'Converts user questions into optimized analytical queries.' },
        { title: 'Pgvector RAG Pipeline', desc: 'High-speed vector similarity search over schema documentation.' },
        { title: 'Zero-Latency Analytics SDK', desc: 'Lightweight client SDK connected to real-time dashboards.' }
      ],
      techStack: ['Laravel', 'OpenAI', 'Pgvector', 'Python'],
      screenshot: 'img/pulse.png',
      videoLog: 'QUERY ENGINE: Aggregated 48,291,000 raw log rows in 14.2ms'
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

  function getTechPillHtml(techName) {
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
        <div class="cs-modal-title">
          ${data.title}
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
                Interactive Video Demo
              </button>
            </div>
            <div class="cs-media-view active" id="tab-screenshot">
              <img class="cs-screenshot-img" src="${data.screenshot}" alt="${data.title} UI Dashboard" />
            </div>
            <div class="cs-media-view" id="tab-video">
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
            </div>
          </div>
        </div>
      </div>
    `;

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
    modalEl.querySelector('.cs-modal-close')?.addEventListener('click', closeCaseStudy);

    // Video play/pause simulation logic
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

  function openCaseStudy(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;
    renderCaseStudyModal(data);
    backdropEl.classList.add('open');
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    backdropEl.classList.remove('open');
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
    clearInterval(videoTimer);
    isVideoPlaying = false;
  }

  backdropEl.addEventListener('click', closeCaseStudy);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('open')) {
      closeCaseStudy();
    }
  });

  // Global click delegate for [data-case-study] triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-case-study]');
    if (trigger) {
      e.preventDefault();
      const id = trigger.dataset.caseStudy;
      openCaseStudy(id);
    }
  });
})();


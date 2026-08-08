/**
 * Portfolio locale dictionaries (EN / AR)
 * Nested keys resolved by PortfolioI18n.t('nav.home')
 */
(function (global) {
  'use strict';

  const en = {
    meta: {
      home: {
        title: 'Bayan Kallash - Full-Stack & Laravel AI Engineer',
        desc: 'Full-stack engineer specializing in Laravel ecosystems, modern web architecture, and AI workflows.'
      },
      about: { title: 'About - Bayan Kallash' },
      projects: { title: 'Projects - Bayan Kallash' },
      skills: { title: 'Skills - Bayan Kallash' },
      testimonials: { title: 'Testimonials - Bayan Kallash' },
      contact: { title: 'Contact - Bayan Kallash' }
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      testimonials: 'Testimonials',
      contact: 'Contact',
      menuToggle: 'Toggle navigation menu',
      langToggle: 'Switch language',
      langEn: 'EN',
      langAr: 'AR'
    },
    footer: {
      copy: '© 2026 Bayan Kallash',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
      projects: 'Projects'
    },
    mobile: {
      status: 'Available for AI & Full-Stack Projects',
      meta: 'Bayan Kallash - High-Reliability Architecture'
    },
    common: {
      caseStudy: 'Case Study →',
      viewCaseStudy: 'View Case Study →',
      copied: 'Copied!'
    },
    home: {
      heroHeadline: 'Bulletproof backends. Reactive interfaces. Autonomous AI.',
      heroSub: 'I engineer web applications built on rock-solid Laravel foundations, reactive frontends (Vue/Inertia/Livewire), and intelligent AI workflows designed for maximum uptime and sub-second performance.',
      ctaWork: 'See the work',
      ctaHire: 'Hire me',
      signalEyebrow: 'Signal',
      signalTitle: 'High-reliability architecture & AI engineering',
      signalLead: 'From PostgreSQL schema optimization and Laravel Horizon queue streams to AI agent integration - I transform mission-critical problems into clean, well-tested codebases built for production scale.',
      workEyebrow: 'Work',
      workTitle: 'Featured systems & projects',
      workLead: 'Drag or scroll sideways.',
      formTitle: 'Form Generator',
      formBadge: 'TALL & GEMINI AI',
      formDesc: 'Dynamic form builder with Google Gemini AI chat builder, sentiment analysis & anomaly alerts.',
      marginTitle: 'The Margin',
      marginBadge: 'LARAVEL 13 & AI VECTOR SEARCH',
      marginDesc: 'Modern essay publishing salon with AI vector embeddings, hybrid search & moderation.',
      allProjects: 'All projects',
      proofEyebrow: 'Proof',
      proofTitle: 'Clients talk',
      proofQuote: '“Bayan ships like a co-founder - deep Laravel mastery, clean full-stack architecture, and AI automation that doubled our workflow velocity.”',
      proofCite: 'Maya Chen · CTO, Ledgerline',
      moreTestimonials: 'More testimonials',
      startProject: 'Start a project'
    },
    about: {
      eyebrow: 'About',
      title: 'Disciplined Engineering. Clean Architecture.',
      p1: 'Full-stack developer with disciplined command of software engineering fundamentals - system design, data structures, algorithms, and clean architecture. I engineer Laravel and PHP solutions with precision, from well-modeled data layers and secure APIs to polished, intuitive interfaces.',
      p2: 'Holding work to a high standard of clarity, maintainability, and technical rigor. Open to remote full-stack and backend roles worldwide.',
      t0Year: '2026–Pres.',
      t0Title: 'SPOCS Agentic AI Course',
      t0Sub: 'Specialized Track (Ongoing) · spocs-coders/ai-agents',
      t0Body: 'Specialized program covering LLM-based agent architecture, prompt engineering & reflection, tool augmentation (MCP, search, Text-to-SQL), multi-agent collaboration, memory management, and agent evaluation frameworks.',
      t1Year: '2026–Pres.',
      t1Title: 'Advanced Laravel Bootcamp - UCASI',
      t1Sub: 'Certification (Ongoing) · UCASI',
      t1Body: 'Advanced PHP/Laravel: MVC, Eloquent ORM, middleware, authentication, and API development - pursuing alongside full-time studies.',
      t2Year: '2022–Pres.',
      t2Title: 'B.Sc. Software Engineering',
      t2Sub: 'Education · Islamic University of Gaza',
      t2Body: 'Focus on full-stack development and agile practices. Coursework: software architecture, data structures, algorithms, databases, OOP, and web engineering.'
    },
    projects: {
      eyebrow: 'Work',
      title: 'Featured projects',
      lead: 'Full-stack web applications, high-throughput Laravel backends, and custom AI agent pipelines.',
      p1Eyebrow: '01 / 2026',
      p1Title: 'Form Generator',
      p1Badge: 'TALL & GEMINI AI',
      p1Lead: 'Laravel 12 & Livewire 3 dynamic form builder featuring Google Gemini AI conversational builder, asynchronous sentiment analysis, and automated traffic anomaly detection.',
      p2Eyebrow: '02 / 2026',
      p2Title: 'The Margin',
      p2Badge: 'LARAVEL 13 & AI VECTOR SEARCH',
      p2Lead: 'Modern blogging & open publishing salon built on Laravel 13 & Tailwind CSS v4 featuring AI vector search, social follow graph, real-time Echo notifications, and moderation appeal workflows.'
    },
    skills: {
      eyebrow: 'Stack & Capabilities',
      title: 'Skills & craft',
      lead: 'Full-stack engineering, deep Laravel ecosystem mastery, and cutting-edge AI workflows - tools engineered for high velocity and production scale.',
      cat1: 'Laravel Ecosystem',
      cat1Items: 'Laravel 11+ Core Architecture|Inertia.js (Vue & React)|Livewire 3 & Alpine.js|Laravel Horizon & Redis Queues|Filament 3 Admin & Dashboards|Pest PHP & TDD',
      cat2: 'Full-Stack Web',
      cat2Items: 'PHP 8.3+ Modern OOP|Tailwind CSS & UI Systems|PostgreSQL & Query Optimization|Redis Caching & Pub/Sub|RESTful APIs & GraphQL',
      cat3: 'AI Workflows & Tools',
      cat3Items: 'OpenAI & Anthropic API Integration|Agentic Workflows & Function Calling|Cursor & AI-Driven Development DX|Structured Output & Prompt Engineering|Automated AI Content Pipelines',
      cat4: 'Architecture & DevOps',
      cat4Items: 'Docker Containerization|CI/CD (GitHub Actions)|Event-Driven Microservices|High-Availability Caching|Observability (Sentry & Bugsnag)'
    },
    testimonials: {
      eyebrow: 'Proof',
      title: 'Testimonials',
      lead: 'Feedback from founders and engineering leaders I’ve shipped with.',
      q1: '“Bayan ships like a co-founder - deep Laravel mastery, clean full-stack architecture, and AI automation that doubled our workflow velocity.”',
      c1: 'Maya Chen · CTO, Ledgerline',
      q2: '“We handed over a complex multi-tenant application and Bayan transformed it into a clean, modern Laravel + Vue platform with integrated AI document parsing.”',
      c2: 'Sam Okonkwo · Founder, Orbit AI Studio',
      q3: '“The best full-stack & Laravel partner we’ve worked with. Frontend polish with Livewire & Inertia, backend rigor, and queue infrastructure that never drops a task.”',
      c3: 'Elena Voss · VP Product, Northwind',
      q4: '“Bayan elevated our engineering culture while building custom AI workflows for our platform. Deep technical execution and rapid delivery.”',
      c4: 'Priya Nair · Engineering Manager, Harbor'
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: 'Let’s build together',
      lead: 'Connect via social networks or message me directly through email or WhatsApp.',
      socialHead: 'Social Profiles & Web',
      socialLead: 'Remote-first · Flexible hours · Select engagements',
      chatHead: 'Instant Messaging',
      emailBadge: 'Direct Mail',
      emailTitle: 'Email',
      emailAction: 'Send Email',
      waBadge: 'Instant Chat',
      waTitle: 'WhatsApp',
      waAction: 'Start WhatsApp Chat'
    },
    caseStudy: {
      close: 'Close modal',
      year: 'Year',
      client: 'Client',
      role: 'Role',
      duration: 'Duration',
      liveDemo: 'Live Demo',
      github: 'GitHub Repo',
      share: 'Share Link',
      overview: 'Overview & Impact',
      capabilities: 'Key Capabilities',
      tech: 'Technology Architecture',
      showcase: 'Interface & Demo Showcase',
      screenshot: 'UI Screenshot',
      video: 'Interactive Video Demo',
      videoCount: 'Video Demos ({n})'
    },
    form: {
      status: 'Message fired. Reply within one business day.'
    },
    projectsData: {
      'form-generator': {
        title: 'Form Generator',
        year: '2026',
        client: 'SaaS Form Builder Ecosystem',
        role: 'Lead Full-Stack Architect',
        duration: '3 Months',
        tagline: 'Laravel 12 & Livewire 3 dynamic form builder with Google Gemini AI conversational builder, sentiment analysis & anomaly detection.',
        status: 'Open-Source Production',
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
        screenshots: [
          { id: 'builder', label: 'Form Builder' },
          { id: 'dashboard', label: 'Analytics Dashboard' },
          { id: 'public', label: 'Public Form View' },
          { id: 'submission', label: 'Submissions Data' }
        ],
        videos: [
          { id: 'analytics_video', label: 'Analytics Walkthrough', log: 'GEMINI AI ENGINE: Executed sentiment & anomaly sweep across form submissions' },
          { id: 'sync_video', label: 'Offline PWA Sync Demo', log: 'PWA SERVICE WORKER: Reconnected - Synced 18 queued offline submissions (0 loss)' }
        ],
        videoLog: 'GEMINI AI CHAT: Interactive sidebar form schema builder active'
      },
      'the-margin': {
        title: 'The Margin',
        year: '2026',
        client: 'Open Publishing Salon & Editorial Platform',
        role: 'Lead Full-Stack & AI Architect',
        duration: '2 Months',
        tagline: 'Laravel 13, Livewire 3 & Tailwind CSS v4 open essay salon with Google Gemini AI vector embeddings, hybrid semantic search, and account moderation workflows.',
        status: 'Open-Source Production',
        metrics: [
          { val: 'Laravel 13', lbl: 'Modern Framework' },
          { val: 'Gemini AI', lbl: 'Vector Embeddings' },
          { val: 'Vector Search', lbl: 'AI Semantic Index' }
        ],
        description: 'The Margin is a modern, full-featured editorial essay salon and knowledge publishing platform engineered with Laravel 13, Livewire 3, MySQL, and Tailwind CSS v4. Designed as a distraction-free digital space for deep thoughts and long-form writing, it features AI-powered vector embeddings via Google Gemini AI & laravel/ai, hybrid semantic search, real-time Echo broadcasting, a social author graph, rich manuscript authoring with Intervention Image, and complete administrative moderation and account review workflows.',
        features: [
          { title: 'Google Gemini AI Vector & Hybrid Search Engine', desc: 'Integrates laravel/ai (EmbeddingService) with Google Gemini Embeddings to generate vector embeddings upon publishing, pairing semantic AI search with instant keyword autocomplete (/api/search/suggest).' },
          { title: 'Editorial Manuscript Authoring & WYSIWYG Salon', desc: 'Features a full manuscript editor with inline formatting, image processing via Intervention Image v3, custom tag taxonomies, article bookmarking, and nested discussion threads.' },
          { title: 'Social Author Graph & Curated Salon Feeds', desc: 'Custom author landing pages showcasing published essays, statistics, pinned pieces, and an interactive follow/unfollow graph to personalize home content feeds.' },
          { title: 'Moderation, Report Queues & Appeals Workflow', desc: 'Built-in administrative inspection tools to review user flags, suspend violating manuscripts, and manage structured account reinstatement appeals (/suspended/review).' },
          { title: 'Real-Time WebSockets & Notification Center', desc: 'Live event broadcasting via Laravel Echo and Pusher, coupled with an interactive in-app notification desk for likes, saves, new followers, and platform announcements.' }
        ],
        screenshots: [
          { id: 'hero', label: 'Salon Homepage' },
          { id: 'feed', label: 'Popular Reading & Topics' },
          { id: 'reader', label: 'Essay Reader View' },
          { id: 'editor', label: 'Manuscript Editor' },
          { id: 'moderation', label: 'Moderation & Appeals' }
        ],
        videoLog: 'AI VECTOR ENGINE: Generated 1,536-dim embeddings for article #42 [HYBRID SEARCH ACTIVE]'
      }
    }
  };

  const ar = {
    meta: {
      home: {
        title: 'بيان كلاش - مهندس Full-Stack وLaravel وAI',
        desc: 'مهندس Full-Stack متخصص في منظومات Laravel وهندسة الويب الحديثة وسير عمل الذكاء الاصطناعي.'
      },
      about: { title: 'نبذة - بيان كلاش' },
      projects: { title: 'المشاريع - بيان كلاش' },
      skills: { title: 'المهارات - بيان كلاش' },
      testimonials: { title: 'آراء العملاء - بيان كلاش' },
      contact: { title: 'تواصل - بيان كلاش' }
    },
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      projects: 'المشاريع',
      skills: 'المهارات',
      testimonials: 'آراء العملاء',
      contact: 'تواصل',
      menuToggle: 'فتح أو إغلاق قائمة التنقل',
      langToggle: 'تبديل اللغة',
      langEn: 'EN',
      langAr: 'عر'
    },
    footer: {
      copy: '© 2026 بيان كلاش',
      about: 'نبذة',
      skills: 'المهارات',
      contact: 'تواصل',
      projects: 'المشاريع'
    },
    mobile: {
      status: 'متاح لمشاريع الذكاء الاصطناعي وFull-Stack',
      meta: 'بيان كلاش - هندسة عالية الموثوقية'
    },
    common: {
      caseStudy: 'دراسة الحالة ←',
      viewCaseStudy: 'عرض دراسة الحالة ←',
      copied: 'تم النسخ!'
    },
    home: {
      heroHeadline: 'خلفيات متينة. واجهات تفاعلية. ذكاء اصطناعي مستقل.',
      heroSub: 'أبني تطبيقات ويب على أساسات Laravel صلبة، وواجهات تفاعلية (Vue / Inertia / Livewire)، وسير عمل ذكاء اصطناعي مصممة لأقصى وقت تشغيل وأداء دون الثانية.',
      ctaWork: 'شاهد الأعمال',
      ctaHire: 'وظّفني',
      signalEyebrow: 'الإشارة',
      signalTitle: 'هندسة عالية الموثوقية وذكاء اصطناعي',
      signalLead: 'من تحسين مخططات PostgreSQL وبث طوابير Laravel Horizon إلى دمج وكلاء الذكاء الاصطناعي - أحول المشكلات الحرجة إلى قواعد شيفرة نظيفة ومختبرة جاهزة للإنتاج.',
      workEyebrow: 'الأعمال',
      workTitle: 'أنظمة ومشاريع مختارة',
      workLead: 'اسحب أو مرّر أفقياً.',
      formTitle: 'Form Generator',
      formBadge: 'TALL وGEMINI AI',
      formDesc: 'منشئ نماذج ديناميكي مع دردشة Gemini AI وتحليل المشاعر وتنبيهات الشذوذ.',
      marginTitle: 'The Margin',
      marginBadge: 'LARAVEL 13 وبحث متجهي بالذكاء الاصطناعي',
      marginDesc: 'صالون نشر مقالات حديث مع تضمينات متجهية وبحث هجين وإشراف.',
      allProjects: 'كل المشاريع',
      proofEyebrow: 'الدليل',
      proofTitle: 'العملاء يتحدثون',
      proofQuote: '«بيان يسلّم كشريك مؤسس - إتقان عميق لـ Laravel، وهندسة Full-Stack نظيفة، وأتمتة ذكاء اصطناعي ضاعفت سرعة سير العمل.»',
      proofCite: 'مايا تشين · المديرة التقنية، Ledgerline',
      moreTestimonials: 'المزيد من الآراء',
      startProject: 'ابدأ مشروعاً'
    },
    about: {
      eyebrow: 'نبذة',
      title: 'هندسة منضبطة. معمارية نظيفة.',
      p1: 'مطور Full-Stack بإتقان منضبط لأساسيات هندسة البرمجيات - تصميم الأنظمة وهياكل البيانات والخوارزميات والمعمارية النظيفة. أبني حلول Laravel وPHP بدقة، من طبقات بيانات محكمة وواجهات API آمنة إلى واجهات مصقولة وسهلة الاستخدام.',
      p2: 'ألتزم بمعيار عالٍ من الوضوح وقابلية الصيانة والصرامة التقنية. منفتح على أدوار Full-Stack والخلفية عن بُعد حول العالم.',
      t0Year: '2026–الآن',
      t0Title: 'دورة SPOCS Agentic AI',
      t0Sub: 'مسار متخصص (جاري) · spocs-coders/ai-agents',
      t0Body: 'برنامج متخصص يغطي معمارية وكلاء الذكاء الاصطناعي، وهندسة الأوامر والانعكاس، وتعزيز الأدوات (MCP، البحث، Text-to-SQL)، والتعاون بين وكلاء متعددين، وإدارة الذاكرة، وأطر تقييم الوكلاء.',
      t1Year: '2026–الآن',
      t1Title: 'معسكر Laravel المتقدم - UCASI',
      t1Sub: 'شهادة (جارية) · UCASI',
      t1Body: 'PHP/Laravel متقدم: MVC وEloquent ORM والوسيط والمصادقة وتطوير API - بالتوازي مع الدراسة بدوام كامل.',
      t2Year: '2022–الآن',
      t2Title: 'بكالوريوس هندسة البرمجيات',
      t2Sub: 'تعليم · الجامعة الإسلامية بغزة',
      t2Body: 'تركيز على تطوير Full-Stack وممارسات Agile. المقررات: معمارية البرمجيات وهياكل البيانات والخوارزميات وقواعد البيانات وOOP وهندسة الويب.'
    },
    projects: {
      eyebrow: 'الأعمال',
      title: 'مشاريع مختارة',
      lead: 'تطبيقات ويب Full-Stack، وخلفيات Laravel عالية الإنتاجية، ومسارات وكلاء ذكاء اصطناعي مخصصة.',
      p1Eyebrow: '01 / 2026',
      p1Title: 'Form Generator',
      p1Badge: 'TALL وGEMINI AI',
      p1Lead: 'منشئ نماذج ديناميكي على Laravel 12 وLivewire 3 مع باني محادثة Google Gemini AI، وتحليل مشاعر غير متزامن، وكشف شذوذ حركة تلقائي.',
      p2Eyebrow: '02 / 2026',
      p2Title: 'The Margin',
      p2Badge: 'LARAVEL 13 وبحث متجهي',
      p2Lead: 'صالون تدوين ونشر مفتوح على Laravel 13 وTailwind CSS v4 مع بحث متجهي بالذكاء الاصطناعي، وشبكة متابعة اجتماعية، وإشعارات Echo فورية، ومسارات استئناف الإشراف.'
    },
    skills: {
      eyebrow: 'المكدس والقدرات',
      title: 'المهارات والحرفة',
      lead: 'هندسة Full-Stack، وإتقان عميق لمنظومة Laravel، وسير عمل ذكاء اصطناعي متقدمة - أدوات مصممة للسرعة العالية وحجم الإنتاج.',
      cat1: 'منظومة Laravel',
      cat1Items: 'معمارية Laravel 11+ الأساسية|Inertia.js (Vue وReact)|Livewire 3 وAlpine.js|Laravel Horizon وطوابير Redis|Filament 3 ولوحات الإدارة|Pest PHP وTDD',
      cat2: 'Full-Stack Web',
      cat2Items: 'PHP 8.3+ وOOP حديث|Tailwind CSS وأنظمة الواجهة|PostgreSQL وتحسين الاستعلامات|تخزين Redis وPub/Sub|واجهات RESTful وGraphQL',
      cat3: 'سير عمل وأدوات الذكاء الاصطناعي',
      cat3Items: 'تكامل OpenAI وAnthropic API|سير عمل وكلاء واستدعاء الدوال|Cursor وتطوير بمساعدة AI|المخرجات المنظمة وهندسة الأوامر|مسارات محتوى ذكاء اصطناعي آلية',
      cat4: 'المعمارية وDevOps',
      cat4Items: 'حاويات Docker|CI/CD (GitHub Actions)|خدمات مصغرة مدفوعة بالأحداث|تخزين عالي التوفر|المراقبة (Sentry وBugsnag)'
    },
    testimonials: {
      eyebrow: 'الدليل',
      title: 'آراء العملاء',
      lead: 'ملاحظات من مؤسسين وقادة هندسة عملت معهم على التسليم.',
      q1: '«بيان يسلّم كشريك مؤسس - إتقان عميق لـ Laravel، وهندسة Full-Stack نظيفة، وأتمتة ذكاء اصطناعي ضاعفت سرعة سير العمل.»',
      c1: 'مايا تشين · المديرة التقنية، Ledgerline',
      q2: '«سلمنا تطبيقاً معقداً متعدد المستأجرين فحوّله بيان إلى منصة Laravel + Vue حديثة ونظيفة مع تحليل مستندات بالذكاء الاصطناعي.»',
      c2: 'سام أوكونكو · مؤسس Orbit AI Studio',
      q3: '«أفضل شريك Full-Stack وLaravel عملنا معه. صقل واجهات بـ Livewire وInertia، وصرامة خلفية، وبنية طوابير لا تُسقط مهمة.»',
      c3: 'إلينا فوس · نائبة رئيس المنتج، Northwind',
      q4: '«رفع بيان ثقافة الهندسة لدينا أثناء بناء سير عمل ذكاء اصطناعي مخصصة لمنصتنا. تنفيذ تقني عميق وتسليم سريع.»',
      c4: 'بريا ناير · مديرة هندسة، Harbor'
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنبنِ معاً',
      lead: 'تواصل عبر الشبكات الاجتماعية أو راسلني مباشرة عبر البريد أو واتساب.',
      socialHead: 'الملفات الاجتماعية والويب',
      socialLead: 'عن بُعد أولاً · ساعات مرنة · مشاريع مختارة',
      chatHead: 'مراسلة فورية',
      emailBadge: 'بريد مباشر',
      emailTitle: 'البريد',
      emailAction: 'أرسل بريداً',
      waBadge: 'دردشة فورية',
      waTitle: 'واتساب',
      waAction: 'ابدأ محادثة واتساب'
    },
    caseStudy: {
      close: 'إغلاق النافذة',
      year: 'السنة',
      client: 'العميل',
      role: 'الدور',
      duration: 'المدة',
      liveDemo: 'عرض حي',
      github: 'مستودع GitHub',
      share: 'مشاركة الرابط',
      overview: 'نظرة عامة والأثر',
      capabilities: 'القدرات الأساسية',
      tech: 'معمارية التقنيات',
      showcase: 'الواجهة والعروض',
      screenshot: 'لقطة واجهة',
      video: 'عرض فيديو تفاعلي',
      videoCount: 'عروض فيديو ({n})'
    },
    form: {
      status: 'أُرسلت الرسالة. الرد خلال يوم عمل واحد.'
    },
    projectsData: {
      'form-generator': {
        title: 'Form Generator',
        year: '2026',
        client: 'منظومة منشئ نماذج SaaS',
        role: 'مهندس Full-Stack رئيسي',
        duration: '3 أشهر',
        tagline: 'منشئ نماذج ديناميكي على Laravel 12 وLivewire 3 مع باني محادثة Google Gemini AI وتحليل المشاعر وكشف الشذوذ.',
        status: 'إنتاج مفتوح المصدر',
        metrics: [
          { val: '100%', lbl: 'مزامنة دون اتصال' },
          { val: 'Gemini 2.5', lbl: 'محرك Flash AI' },
          { val: '<50ms', lbl: 'استجابة Livewire' }
        ],
        description: 'Form Generator تطبيق حديث عالي الأداء على Laravel 12 وLivewire 3 لبناء نماذج ديناميكية مخصصة، ومشاركة روابط عامة، وجمع الردود، وتشغيل تحليل متقدم بالذكاء الاصطناعي. مبني على مكدس TALL (Tailwind وAlpine وLivewire 3 وFlux UI) وMySQL، ويستفيد من Google Gemini AI (gemini-2.5-flash) لإنشاء النماذج عبر الدردشة، وتحليل المشاعر والعواطف في الخلفية، وكشف شذوذ الحركة تلقائياً.',
        features: [
          { title: 'باني Gemini AI الحواري', desc: 'إنشاء وتعديل وتوسيع مخططات نماذج متعددة الخطوات بشكل تكراري بلغة طبيعية عبر دردشة الذكاء الاصطناعي الجانبية.' },
          { title: 'تحليل المشاعر والنغمات الفرعية', desc: 'يقيّم الردود المفتوحة بشكل غير متزامن لتسجيل المشاعر (0.0–1.0) واكتشاف نغمات فرعية (إحباط، حماس، رضا).' },
          { title: 'محرك تنبيهات الشذوذ والحركة', desc: 'يراقب تدفقات الإرسال للإشارة إلى انخفاض حركة 70%+، وارتفاعات 150%+، وتجمعات مراجعات سلبية، والنماذج الهادئة.' },
          { title: 'سحب وإفلات ومنطق متعدد الخطوات', desc: 'ترتيب أكثر من 15 نوع حقل مع قواعد ظهور شرطية وتخطيطات صفحات متعددة ومعاينات حية.' },
          { title: 'مزامنة PWA دون اتصال والأمان', desc: 'تخزين الإرسالات محلياً عند الانقطاع مع مزامنة خلفية وGoogle OAuth وتنظيف المرفقات تلقائياً.' }
        ],
        screenshots: [
          { id: 'builder', label: 'منشئ النماذج' },
          { id: 'dashboard', label: 'لوحة التحليلات' },
          { id: 'public', label: 'عرض النموذج العام' },
          { id: 'submission', label: 'بيانات الإرسالات' }
        ],
        videos: [
          { id: 'analytics_video', label: 'جولة التحليلات', log: 'محرك GEMINI AI: نفّذ مسح مشاعر وشذوذ عبر إرسالات النماذج' },
          { id: 'sync_video', label: 'عرض مزامنة PWA دون اتصال', log: 'عامل خدمة PWA: أُعيد الاتصال - زامن 18 إرسالاً معلقاً (بدون فقدان)' }
        ],
        videoLog: 'دردشة GEMINI AI: باني مخطط النماذج الجانبي التفاعلي نشط'
      },
      'the-margin': {
        title: 'The Margin',
        year: '2026',
        client: 'صالون نشر مفتوح ومنصة تحريرية',
        role: 'مهندس Full-Stack وAI رئيسي',
        duration: 'شهران',
        tagline: 'صالون مقالات مفتوح على Laravel 13 وLivewire 3 وTailwind CSS v4 مع تضمينات Google Gemini المتجهية وبحث دلالي هجين ومسارات إشراف الحسابات.',
        status: 'إنتاج مفتوح المصدر',
        metrics: [
          { val: 'Laravel 13', lbl: 'إطار حديث' },
          { val: 'Gemini AI', lbl: 'تضمينات متجهية' },
          { val: 'Vector Search', lbl: 'فهرس دلالي بالذكاء الاصطناعي' }
        ],
        description: 'The Margin منصة صالون مقالات تحريرية ونشر معرفة حديثة ومتكاملة، مبنية على Laravel 13 وLivewire 3 وMySQL وTailwind CSS v4. صُممت كمساحة رقمية بلا تشتيت للتفكير العميق والكتابة الطويلة، وتضم تضمينات متجهية عبر Google Gemini وlaravel/ai، وبحثاً دلالياً هجيناً، وبث Echo فورياً، وشبكة مؤلفين اجتماعية، وتحريراً غنياً للمخطوطات مع Intervention Image، ومسارات إشراف ومراجعة حسابات كاملة.',
        features: [
          { title: 'محرك بحث متجهي وهجين بـ Gemini AI', desc: 'يدمج laravel/ai (EmbeddingService) مع Google Gemini Embeddings لتوليد تضمينات عند النشر، مع بحث دلالي وإكمال فوري للكلمات المفتاحية (/api/search/suggest).' },
          { title: 'تحرير المخطوطات وصالة WYSIWYG', desc: 'محرر مخطوطات كامل مع تنسيق مضمّن ومعالجة صور عبر Intervention Image v3 وتصنيفات وسوم وإشارات مقالات ونقاشات متداخلة.' },
          { title: 'شبكة مؤلفين وتغذيات صالون منسقة', desc: 'صفحات مؤلفين مخصصة تعرض المقالات المنشورة والإحصاءات والمثبتات وشبكة متابعة لتخصيص تغذية الصفحة الرئيسية.' },
          { title: 'إشراف وطوابير بلاغات واستئنافات', desc: 'أدوات إدارية لمراجعة البلاغات وتعليق المخطوطات المخالفة وإدارة استئنافات إعادة الحساب (/suspended/review).' },
          { title: 'WebSockets فورية ومركز إشعارات', desc: 'بث أحداث حي عبر Laravel Echo وPusher مع مكتب إشعارات تفاعلي للإعجابات والحفظ والمتابعين الجدد وإعلانات المنصة.' }
        ],
        screenshots: [
          { id: 'hero', label: 'الصفحة الرئيسية للصالون' },
          { id: 'feed', label: 'القراءة والمواضيع الشائعة' },
          { id: 'reader', label: 'عرض قراءة المقال' },
          { id: 'editor', label: 'محرر المخطوطات' },
          { id: 'moderation', label: 'الإشراف والاستئنافات' }
        ],
        videoLog: 'محرك المتجهات: وُلّدت تضمينات 1536 بُعداً للمقال #42 [بحث هجين نشط]'
      }
    }
  };

  global.PORTFOLIO_LOCALES = { en: en, ar: ar };
})(typeof window !== 'undefined' ? window : globalThis);

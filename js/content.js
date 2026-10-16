/* All site copy (English and Arabic) and project data. Pages read from here only. */
window.BAYAN = (function () {
  'use strict';

  const contact = {
    email: 'bayankallash@gmail.com',
    whatsapp: '970599756244',
    github: 'https://github.com/bkallash',
    linkedin: 'https://linkedin.com/in/bayankallash',
    upwork: 'https://www.upwork.com/freelancers/~0121e51312ace6f2ac',
    mostaql: 'https://mostaql.com/u/bayankallash'
  };

  const en = {
    title: {
      home: 'Bayan Kallash, AI systems engineer',
      projects: 'Work by Bayan Kallash',
      project: 'Bayan Kallash',
      about: 'About Bayan Kallash',
      contact: 'Contact Bayan Kallash'
    },
    desc: 'Bayan Kallash designs and builds automations, internal tools, AI assistants and integrations that take repetitive work off your team.',
    skip: 'Skip to content',
    nav: { work: 'Work', about: 'About', contact: 'Contact', start: 'Start a project', lang: 'عربي', langAria: 'اقرأ الموقع بالعربية', home: 'Bayan, home' },
    hero: {
      h1: 'Your team is buried in work a system could do.',
      sub: 'Emails, spreadsheets, copy and paste, the same questions every day. Scroll, and watch it sort itself out.',
      mid: 'Every request read, routed and answered. Every number where it belongs.',
      end: "I'm Bayan Kallash. I build the systems that do it for them.",
      start: 'Start a project',
      work: 'See the work'
    },
    cost: 'Somewhere in your business, skilled people spend hours every week copying data between systems, chasing the same approvals and answering the same questions. That time has a salary attached. A well built system takes it back.',
    costHot: ['salary', 'attached.', 'back.'],
    services: {
      kicker: 'What I build',
      lead: 'Five kinds of work, one goal: fewer hours on things a system can do.',
      items: [
        { name: 'Automations', desc: 'Work that runs on its own. Documents read, data entered, reports sent and reminders chased, on schedule and without anyone copying anything.' },
        { name: 'Internal tools', desc: 'Admin panels, approval flows and dashboards shaped around how your team actually works, not around a generic template.' },
        { name: 'AI assistants', desc: 'Chat that answers from your own documents, policies and data, and shows where every answer came from.' },
        { name: 'Integrations', desc: 'Your CRM, ERP, spreadsheets, inbox and payment tools talking to each other, so nobody moves data by hand.' },
        { name: 'Systems that scale', desc: 'Backends, queues and databases that stay fast and correct when the volume grows ten times.' }
      ]
    },
    proof: {
      kind: 'Client work in tax and compliance',
      name: 'Folio',
      body: "An AI pipeline that reads whole batches of invoices and pulls out what a tax exemption filing needs, plus an assistant that answers regulatory questions from the client's own library.",
      timeCap: 'to prepare one batch of invoices',
      peopleCap: 'needed to do the same work',
      read: 'Read the case study'
    },
    work: {
      title: 'Recent work',
      lead: 'Products I designed and built end to end, each one starting from a task people were doing by hand.',
      endTitle: 'Every project, in detail',
      endBody: 'The problem, the decisions and the result for each build.',
      endCta: 'See all projects',
      read: 'Read the case study'
    },
    approach: {
      title: 'Two to three months. One clear finish line.',
      lead: "I take on a few focused projects at a time. Scope is agreed up front, so you always know what you're getting and when.",
      steps: [
        { t: 'Map the work', dur: '1 to 2 weeks', d: 'I sit with the people doing the work, measure where the hours go, and we agree on scope, timeline and a fixed price.' },
        { t: 'Build in phases', dur: '6 to 10 weeks', d: 'You get working software every two weeks, tested on your real documents and data. Each phase ends with something you can use.' },
        { t: 'Hand it over', dur: 'Final week', d: 'It runs in your environment, your team knows how to use it, and everything is documented. Support continues as agreed.' }
      ]
    },
    band: {
      title: "Bayan means clarity. It's my name and my job.",
      p1: "In Arabic, bayan is a statement made plain. That's what I do with messy operations: find the work that repeats, and turn it into a system that runs on its own.",
      p2: "I'm a software engineer from Gaza, where the Mediterranean sits at the end of every street. I work mostly on the backend and on AI tooling, for clients in the Gulf, the US and Europe, in English and Arabic.",
      more: 'More about me'
    },
    cta: {
      title: 'Tell me what your team repeats every week.',
      lead: "I'll tell you plainly whether a system can do it, what it would take, and what it would save.",
      book: 'Send a project brief',
      copy: 'Copy email',
      copied: 'Copied',
      selected: 'Selected. Press copy.'
    },
    footer: { name: 'Bayan Kallash, AI systems engineer', langs: 'English and العربية', year: '© 2026' },
    kinds: { all: 'All', client: 'Client work', product: 'Products', oss: 'Open source', progress: 'In progress' },
    projectsPage: {
      h1: 'Systems that take work off people.',
      lead: 'Client systems and products I designed and built, from AI document processing to multi-agent apps. Each one starts with a real, repetitive problem.',
      filterAria: 'Filter projects',
      count: n => n === 1 ? '1 project' : n + ' projects'
    },
    caseStudy: {
      year: 'Year', role: 'Role', duration: 'Duration', type: 'Type',
      live: 'Visit the live site', github: 'View the code', pypi: 'Install from PyPI',
      problem: 'The problem', built: 'What I built', result: 'The result',
      features: 'What it does', stack: 'Built with', gallery: 'Inside the product',
      next: 'Next project', all: 'All projects',
      notFound: "That project doesn't exist. Here is the full list instead.",
      privateNote: 'Client work. Screens stay private; the numbers are measured on the client\'s real batches.',
      progressNote: 'In progress. Screens will be added when the first version ships.'
    },
    aboutPage: {
      h1: "Bayan means clarity. It's my name and my job.",
      p1: 'In Arabic, bayan is a statement made plain. I bring that to software: I find the work in a business that repeats, and replace it with a system that is clear to use and runs on its own.',
      p2: "I'm a software engineer from Gaza. I work mostly on the backend and on AI tooling: Python and LangGraph for agents and pipelines, MCP and integrations to connect them to real tools, and Laravel when a product needs a full web app around it.",
      p3: 'I work with business owners, startups and small teams in the Gulf, the US and Europe. Most projects run two to three months with a clear scope from the first week.',
      principlesTitle: 'What clients can expect',
      principles: [
        { t: 'Plain communication', d: 'You always know what I am building, why, and when it lands. Weekly updates in your language, no jargon.' },
        { t: 'Attention to detail', d: 'Edge cases, wrong inputs and the boring parts get the same care as the demo. That is where systems usually break.' },
        { t: 'Fast, with care', d: 'I move quickly because the scope is clear, not because corners are cut.' }
      ],
      pathTitle: 'Path',
      path: [
        { y: '2022 to now', t: 'B.Sc. Software Engineering', s: 'Islamic University of Gaza', d: 'Software architecture, data structures, algorithms, databases and web engineering.' },
        { y: '2026', t: 'Advanced Laravel Bootcamp', s: 'UCASTI', d: 'Advanced PHP and Laravel: Eloquent, middleware, authentication and API design, alongside full-time study.' },
        { y: '2026 to now', t: 'Agentic AI program', s: 'SPOCS', d: 'Agent architecture, tool use with MCP, search and Text-to-SQL, multi-agent collaboration, memory and evaluation.' }
      ],
      toolboxTitle: 'Toolbox',
      toolbox: [
        { t: 'AI and agents', i: 'LangGraph, MCP, RAG, embeddings and vector search, structured output, OpenAI, Anthropic and Gemini APIs' },
        { t: 'Backend', i: 'Python, PHP and Laravel, PostgreSQL, MySQL, Redis, queues and background workers, REST APIs' },
        { t: 'Product and web', i: 'React, Inertia, Livewire, Tailwind CSS, Textual for terminal apps' },
        { t: 'Delivery', i: 'Docker, GitHub Actions, automated tests with Pest and pytest, monitoring' }
      ],
      langsTitle: 'Languages',
      langs: 'Arabic, native. English, professional.'
    },
    contactPage: {
      h1: 'Tell me what your team repeats every week.',
      lead: "Send a short brief or reach me directly. I reply within one business day and tell you plainly whether a system can do the work.",
      channelsTitle: 'Reach me directly',
      email: 'Email', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub', upwork: 'Upwork', mostaql: 'Mostaql',
      briefTitle: 'Send a short brief',
      name: 'Your name', namePh: 'Sara Al Harbi',
      company: 'Company', companyPh: 'Al Rawabi Trading', optional: 'optional',
      repeats: 'What does your team repeat every week?', repeatsPh: 'Every Monday two people copy last week\'s orders from email into a spreadsheet and send a summary to the manager.',
      when: 'When do you want to start?', whenOpts: ['This month', 'In 1 to 3 months', 'Just exploring'],
      sendEmail: 'Send by email', sendWa: 'Send on WhatsApp',
      note: 'Both buttons open your own email or WhatsApp with the brief filled in. Nothing is sent until you press send there.',
      errName: 'Enter your name.', errRepeats: 'Describe the work in a sentence or two.',
      mailSubject: 'Project brief from',
      lines: { name: 'Name', company: 'Company', repeats: 'What repeats', when: 'Start' }
    },
    units: {
      time: m => m >= 60 ? Math.floor(m / 60) + ' h' + (m % 60 ? ' ' + (m % 60) + ' min' : '') : m + ' min',
      people: k => k + (k === 1 ? ' person' : ' people')
    },
    heroWords: {
      raw: ['Re: Re: Fwd: weekly report', 'copy of final_v3.xlsx', 'Ticket #4821', 'INV-2026-0418', 'Please update the CRM', 'Same question again', 'Who has the latest file?', 'Order #7781', 'Approve expense', 'Missing field', 'Lead from website', 'Monday status update', 'Reconcile bank', 'Check stock', 'scan_0042.pdf', 'Reminder: follow up', 'Paste into ERP', 'VAT 15%', 'Where is the PO?', 'Data entry', 'تقرير أسبوعي', 'طلب جديد', 'فاتورة', 'مراجعة الطلبات', 'نفس السؤال مرة أخرى', 'تحديث البيانات'],
      cols: ['Item', 'Source', 'Action', 'Owner', 'Time', 'Status'],
      items: ['Invoice 4180', 'Ticket 2210', 'Order 7781', 'Expense claim', 'Weekly report', 'New lead', 'Stock check', 'Bank match'],
      sources: ['Email', 'WhatsApp', 'Web form', 'ERP', 'Sheets', 'CRM'],
      actions: ['Extracted', 'Answered', 'Synced', 'Approved', 'Sent', 'Routed', 'Matched', 'Logged'],
      owner: 'System',
      status: 'Done'
    }
  };

  const ar = {
    title: {
      home: 'بيان كلاش، مهندس أنظمة ذكاء اصطناعي',
      projects: 'أعمال بيان كلاش',
      project: 'بيان كلاش',
      about: 'عن بيان كلاش',
      contact: 'تواصل مع بيان كلاش'
    },
    desc: 'بيان كلاش يصمم ويبني أنظمة أتمتة وأدوات داخلية ومساعدين بالذكاء الاصطناعي وتكاملات تتولى العمل المتكرر عن فريقك.',
    skip: 'انتقل إلى المحتوى',
    nav: { work: 'الأعمال', about: 'نبذة', contact: 'تواصل', start: 'ابدأ مشروعاً', lang: 'EN', langAria: 'Read the site in English', home: 'بيان، الرئيسية' },
    hero: {
      h1: 'فريقك غارق في عمل يمكن لنظام أن يقوم به.',
      sub: 'رسائل وجداول ونسخ ولصق، والأسئلة نفسها كل يوم. مرّر للأسفل وشاهدها ترتّب نفسها.',
      mid: 'كل طلب يُقرأ ويُوجَّه ويُجاب. وكل رقم في مكانه الصحيح.',
      end: 'أنا بيان كلاش. أبني الأنظمة التي تقوم بهذا العمل عنهم.',
      start: 'ابدأ مشروعاً',
      work: 'شاهد الأعمال'
    },
    cost: 'في مكان ما من عملك، يقضي أشخاص أكفاء ساعات كل أسبوع في نقل البيانات بين الأنظمة، وملاحقة الموافقات نفسها، والإجابة عن الأسئلة نفسها. هذا الوقت له راتب. والنظام المبني جيداً يستعيده.',
    costHot: ['راتب.', 'يستعيده.'],
    services: {
      kicker: 'ماذا أبني',
      lead: 'خمسة أنواع من العمل وهدف واحد: ساعات أقل في مهام يستطيع نظام أن ينجزها.',
      items: [
        { name: 'الأتمتة', desc: 'عمل يسير وحده: مستندات تُقرأ، وبيانات تُدخل، وتقارير تُرسل، وتذكيرات تُتابع في موعدها، دون أن ينسخ أحد شيئاً.' },
        { name: 'الأدوات الداخلية', desc: 'لوحات إدارة ومسارات موافقة ولوحات متابعة مصممة على طريقة عمل فريقك الفعلية، لا على قالب عام.' },
        { name: 'مساعدو الذكاء الاصطناعي', desc: 'محادثة تجيب من مستنداتك وسياساتك وبياناتك أنت، وتبيّن مصدر كل إجابة.' },
        { name: 'التكاملات', desc: 'نظام العملاء والمحاسبة والجداول والبريد وأدوات الدفع تتحدث مع بعضها، فلا ينقل أحد البيانات يدوياً.' },
        { name: 'أنظمة تتحمل النمو', desc: 'خوادم وطوابير وقواعد بيانات تبقى سريعة ودقيقة حين يتضاعف الحجم عشر مرات.' }
      ]
    },
    proof: {
      kind: 'عمل لعميل في الضرائب والامتثال',
      name: 'Folio',
      body: 'مسار ذكاء اصطناعي يقرأ دفعات كاملة من الفواتير ويستخرج ما يحتاجه ملف الإعفاء الضريبي، مع مساعد يجيب عن الأسئلة التنظيمية من مكتبة العميل نفسه.',
      timeCap: 'لتجهيز دفعة واحدة من الفواتير',
      peopleCap: 'للقيام بالعمل نفسه',
      read: 'اقرأ دراسة الحالة'
    },
    work: {
      title: 'أعمال حديثة',
      lead: 'منتجات صممتها وبنيتها من البداية إلى النهاية، وكل منها بدأ من مهمة كان الناس ينجزونها يدوياً.',
      endTitle: 'كل مشروع بالتفصيل',
      endBody: 'المشكلة والقرارات والنتيجة لكل مشروع.',
      endCta: 'شاهد كل المشاريع',
      read: 'اقرأ دراسة الحالة'
    },
    approach: {
      title: 'شهران إلى ثلاثة. وخط نهاية واضح.',
      lead: 'أعمل على عدد قليل من المشاريع المركّزة في الوقت نفسه. نتفق على النطاق من البداية، فتعرف دائماً ماذا ستحصل ومتى.',
      steps: [
        { t: 'فهم العمل', dur: 'أسبوع إلى أسبوعين', d: 'أجلس مع من يقومون بالعمل، وأقيس أين تذهب الساعات، ونتفق على النطاق والجدول الزمني وسعر ثابت.' },
        { t: 'البناء على مراحل', dur: '6 إلى 10 أسابيع', d: 'تحصل على نسخة تعمل كل أسبوعين، مختبرة على مستنداتك وبياناتك الحقيقية. وكل مرحلة تنتهي بشيء تستطيع استخدامه.' },
        { t: 'التسليم', dur: 'الأسبوع الأخير', d: 'يعمل النظام في بيئتك، ويعرف فريقك كيف يستخدمه، وكل شيء موثّق. ويستمر الدعم حسب الاتفاق.' }
      ]
    },
    band: {
      title: 'بيان تعني الوضوح. وهو اسمي وعملي.',
      p1: 'البيان في العربية هو الكلام الواضح المُفصِح. وهذا ما أفعله مع العمليات المتشابكة: أجد العمل الذي يتكرر، وأحوّله إلى نظام يعمل وحده.',
      p2: 'أنا مهندس برمجيات من غزة، حيث يقع البحر المتوسط في نهاية كل شارع. أعمل غالباً على الأنظمة الخلفية وأدوات الذكاء الاصطناعي، لعملاء في الخليج والولايات المتحدة وأوروبا، بالعربية والإنجليزية.',
      more: 'المزيد عني'
    },
    cta: {
      title: 'أخبرني ما الذي يكرره فريقك كل أسبوع.',
      lead: 'سأخبرك بوضوح إن كان نظام يستطيع القيام به، وماذا يحتاج، وكم سيوفر.',
      book: 'أرسل وصفاً للمشروع',
      copy: 'انسخ البريد',
      copied: 'تم النسخ',
      selected: 'تم التحديد. اضغط نسخ.'
    },
    footer: { name: 'بيان كلاش، مهندس أنظمة ذكاء اصطناعي', langs: 'العربية وEnglish', year: '© 2026' },
    kinds: { all: 'الكل', client: 'أعمال لعملاء', product: 'منتجات', oss: 'مفتوحة المصدر', progress: 'قيد التطوير' },
    projectsPage: {
      h1: 'أنظمة تحمل العمل عن الناس.',
      lead: 'أنظمة لعملاء ومنتجات صممتها وبنيتها، من معالجة المستندات بالذكاء الاصطناعي إلى تطبيقات متعددة الوكلاء. وكل منها يبدأ من مشكلة حقيقية متكررة.',
      filterAria: 'تصفية المشاريع',
      count: n => n === 1 ? 'مشروع واحد' : n === 2 ? 'مشروعان' : (n <= 10 ? n + ' مشاريع' : n + ' مشروعاً')
    },
    caseStudy: {
      year: 'السنة', role: 'الدور', duration: 'المدة', type: 'النوع',
      live: 'زر الموقع المباشر', github: 'شاهد الشيفرة', pypi: 'ثبّت من PyPI',
      problem: 'المشكلة', built: 'ما بنيته', result: 'النتيجة',
      features: 'ماذا يفعل', stack: 'التقنيات', gallery: 'من داخل المنتج',
      next: 'المشروع التالي', all: 'كل المشاريع',
      notFound: 'هذا المشروع غير موجود. إليك القائمة الكاملة.',
      privateNote: 'عمل لعميل. الشاشات تبقى خاصة، والأرقام مقاسة على دفعات العميل الحقيقية.',
      progressNote: 'قيد التطوير. ستُضاف الشاشات عند إطلاق النسخة الأولى.'
    },
    aboutPage: {
      h1: 'بيان تعني الوضوح. وهو اسمي وعملي.',
      p1: 'البيان في العربية هو الكلام الواضح المُفصِح. وأحمل هذا المعنى إلى البرمجيات: أجد العمل الذي يتكرر في المؤسسة، وأستبدله بنظام واضح الاستخدام يعمل وحده.',
      p2: 'أنا مهندس برمجيات من غزة. أعمل غالباً على الأنظمة الخلفية وأدوات الذكاء الاصطناعي: Python وLangGraph للوكلاء ومسارات المعالجة، وMCP والتكاملات لربطها بالأدوات الحقيقية، وLaravel حين يحتاج المنتج تطبيق ويب كاملاً حوله.',
      p3: 'أعمل مع أصحاب الأعمال والشركات الناشئة والفرق الصغيرة في الخليج والولايات المتحدة وأوروبا. ومعظم المشاريع تمتد شهرين إلى ثلاثة بنطاق واضح من الأسبوع الأول.',
      principlesTitle: 'ما يمكن للعملاء توقعه',
      principles: [
        { t: 'تواصل واضح', d: 'تعرف دائماً ماذا أبني ولماذا ومتى يصل. تحديثات أسبوعية بلغتك ودون مصطلحات معقدة.' },
        { t: 'اهتمام بالتفاصيل', d: 'الحالات الاستثنائية والمدخلات الخاطئة والأجزاء المملة تنال العناية نفسها التي ينالها العرض. فهناك تنهار الأنظمة عادة.' },
        { t: 'سرعة مع إتقان', d: 'أتحرك بسرعة لأن النطاق واضح، لا لأنني أختصر الطريق.' }
      ],
      pathTitle: 'المسيرة',
      path: [
        { y: '2022 حتى الآن', t: 'بكالوريوس هندسة البرمجيات', s: 'الجامعة الإسلامية بغزة', d: 'معمارية البرمجيات وهياكل البيانات والخوارزميات وقواعد البيانات وهندسة الويب.' },
        { y: '2026', t: 'معسكر Laravel المتقدم', s: 'UCASTI', d: 'PHP وLaravel المتقدم: Eloquent والوسطاء والمصادقة وتصميم الواجهات البرمجية، بالتوازي مع الدراسة.' },
        { y: '2026 حتى الآن', t: 'برنامج الوكلاء الأذكياء', s: 'SPOCS', d: 'معمارية الوكلاء، واستخدام الأدوات عبر MCP والبحث وText-to-SQL، والتعاون بين الوكلاء، والذاكرة، والتقييم.' }
      ],
      toolboxTitle: 'الأدوات',
      toolbox: [
        { t: 'الذكاء الاصطناعي والوكلاء', i: 'LangGraph وMCP وRAG، والتضمينات والبحث المتجهي، والمخرجات المنظمة، وواجهات OpenAI وAnthropic وGemini' },
        { t: 'الأنظمة الخلفية', i: 'Python وPHP وLaravel وPostgreSQL وMySQL وRedis، والطوابير والمهام الخلفية، وواجهات REST' },
        { t: 'المنتج والويب', i: 'React وInertia وLivewire وTailwind CSS، وTextual لتطبيقات الطرفية' },
        { t: 'التسليم', i: 'Docker وGitHub Actions، والاختبارات الآلية بـ Pest وpytest، والمراقبة' }
      ],
      langsTitle: 'اللغات',
      langs: 'العربية، اللغة الأم. الإنجليزية، مستوى مهني.'
    },
    contactPage: {
      h1: 'أخبرني ما الذي يكرره فريقك كل أسبوع.',
      lead: 'أرسل وصفاً قصيراً أو تواصل معي مباشرة. أرد خلال يوم عمل واحد، وأخبرك بوضوح إن كان نظام يستطيع القيام بالعمل.',
      channelsTitle: 'تواصل مباشرة',
      email: 'البريد', whatsapp: 'واتساب', linkedin: 'LinkedIn', github: 'GitHub', upwork: 'Upwork', mostaql: 'مستقل',
      briefTitle: 'أرسل وصفاً قصيراً',
      name: 'اسمك', namePh: 'سارة الحربي',
      company: 'الشركة', companyPh: 'شركة الروابي للتجارة', optional: 'اختياري',
      repeats: 'ما الذي يكرره فريقك كل أسبوع؟', repeatsPh: 'كل يوم اثنين ينسخ شخصان طلبات الأسبوع الماضي من البريد إلى جدول، ويرسلان ملخصاً إلى المدير.',
      when: 'متى تريد أن تبدأ؟', whenOpts: ['هذا الشهر', 'خلال شهر إلى ثلاثة', 'أستكشف فقط'],
      sendEmail: 'أرسل عبر البريد', sendWa: 'أرسل عبر واتساب',
      note: 'يفتح الزران بريدك أو واتساب لديك مع تعبئة الوصف. لا يُرسل شيء حتى تضغط إرسال هناك.',
      errName: 'اكتب اسمك.', errRepeats: 'صف العمل في جملة أو جملتين.',
      mailSubject: 'وصف مشروع من',
      lines: { name: 'الاسم', company: 'الشركة', repeats: 'ما الذي يتكرر', when: 'موعد البدء' }
    },
    units: {
      time: m => {
        if (m < 60) return m + ' دقيقة';
        const h = Math.floor(m / 60), r = m % 60, hs = h === 1 ? 'ساعة' : h === 2 ? 'ساعتان' : h + ' ساعات';
        return r ? hs + ' و' + r + ' د' : hs;
      },
      people: k => k === 1 ? 'شخص واحد' : k === 2 ? 'شخصان' : k + ' أشخاص'
    },
    heroWords: {
      raw: ['ردّ: ردّ: تقرير أسبوعي', 'نسخة نهائية 3.xlsx', 'تذكرة 4821', 'فاتورة INV-0418', 'حدّث نظام العملاء', 'نفس السؤال مرة أخرى', 'من معه آخر ملف؟', 'طلب 7781', 'اعتماد مصروف', 'حقل ناقص', 'عميل محتمل من الموقع', 'تحديث يوم الاثنين', 'مطابقة البنك', 'فحص المخزون', 'scan_0042.pdf', 'تذكير: متابعة', 'الصق في النظام', 'ضريبة 15%', 'أين أمر الشراء؟', 'إدخال بيانات', 'Weekly report', 'copy of final_v3.xlsx', 'Ticket #4821'],
      cols: ['البند', 'المصدر', 'الإجراء', 'المسؤول', 'الوقت', 'الحالة'],
      items: ['فاتورة 4180', 'تذكرة 2210', 'طلب 7781', 'مطالبة مصروف', 'تقرير أسبوعي', 'عميل جديد', 'فحص مخزون', 'مطابقة بنك'],
      sources: ['البريد', 'واتساب', 'نموذج الموقع', 'نظام المحاسبة', 'الجداول', 'نظام العملاء'],
      actions: ['استُخرج', 'أُجيب', 'زُامن', 'اعتُمد', 'أُرسل', 'وُجّه', 'طوبق', 'سُجّل'],
      owner: 'النظام',
      status: 'تم'
    }
  };

  const projects = [
    {
      id: 'folio', kind: 'client', year: '2026', featured: false,
      stack: ['Python', 'LangGraph', 'RAG', 'MCP'],
      metrics: [{ v: '5 h → 15 min', v_ar: '5 ساعات ← 15 دقيقة', en: 'per invoice batch', ar: 'لكل دفعة فواتير' }, { v: '10 → 1', v_ar: '10 ← 1', en: 'people for the same work', ar: 'أشخاص للعمل نفسه' }],
      en: {
        name: 'Folio', role: 'Lead engineer', duration: 'Client engagement',
        line: 'AI that reads invoice batches for tax exemption filings, and answers regulatory questions from the client\'s own library.',
        problem: 'A team of ten curated invoice batches by hand for every tax exemption filing. Each batch took about five hours of reading, checking and copying fields, and regulatory questions went to whoever had time to dig through the rules.',
        built: 'An AI pipeline that takes a whole batch of invoices, extracts the fields the filing needs, checks them, and prepares the batch for review. Next to it, a retrieval assistant answers tax and regulatory questions from the client\'s own library of laws and supplements, citing the article it used.',
        result: 'One batch now takes about fifteen minutes instead of five hours, and one person does the work that needed ten. The team spends its time on review and judgment instead of copying.',
        features: [
          { t: 'Batch invoice extraction', d: 'Whole batches go in at once; the fields a tax exemption filing needs come out structured and checked.' },
          { t: 'Validation before review', d: 'Missing or inconsistent values are flagged before a person looks at the batch.' },
          { t: 'Regulatory assistant', d: 'Answers questions on VAT, customs, excise and e-invoicing from the client\'s own regulation library, with the source article.' }
        ]
      },
      ar: {
        name: 'Folio', role: 'المهندس الرئيسي', duration: 'مشروع لعميل',
        line: 'ذكاء اصطناعي يقرأ دفعات الفواتير لملفات الإعفاء الضريبي، ويجيب عن الأسئلة التنظيمية من مكتبة العميل نفسه.',
        problem: 'كان فريق من عشرة أشخاص يجهز دفعات الفواتير يدوياً لكل ملف إعفاء ضريبي. كانت الدفعة الواحدة تستغرق نحو خمس ساعات من القراءة والتدقيق ونسخ الحقول، وكانت الأسئلة التنظيمية تذهب لمن لديه وقت للبحث في الأنظمة.',
        built: 'مسار ذكاء اصطناعي يستقبل دفعة كاملة من الفواتير، ويستخرج الحقول التي يحتاجها الملف، ويدققها، ويجهز الدفعة للمراجعة. وإلى جانبه مساعد يجيب عن الأسئلة الضريبية والتنظيمية من مكتبة العميل من الأنظمة واللوائح، مع ذكر المادة التي استند إليها.',
        result: 'أصبحت الدفعة الواحدة تستغرق نحو خمس عشرة دقيقة بدل خمس ساعات، وصار شخص واحد ينجز عمل عشرة. ويقضي الفريق وقته في المراجعة واتخاذ القرار بدل النسخ.',
        features: [
          { t: 'استخراج دفعات الفواتير', d: 'تدخل الدفعة كاملة مرة واحدة، وتخرج الحقول التي يحتاجها ملف الإعفاء منظمة ومدققة.' },
          { t: 'تدقيق قبل المراجعة', d: 'تُعلَّم القيم الناقصة أو المتعارضة قبل أن ينظر أي شخص في الدفعة.' },
          { t: 'مساعد تنظيمي', d: 'يجيب عن أسئلة ضريبة القيمة المضافة والجمارك والضريبة الانتقائية والفوترة الإلكترونية من مكتبة العميل، مع المادة المرجعية.' }
        ]
      }
    },
    {
      id: 'receipt-snap', kind: 'product', year: '2026', featured: true, card: 'img/receipt-snap/card.webp',
      links: { github: 'https://github.com/bkallash/receipt-snap' },
      stack: ['Laravel', 'React 19', 'Inertia', 'Gemini Vision', 'Sanctum'],
      metrics: [{ v: '< 2.5 s', v_ar: '< 2.5 ث', en: 'to read a receipt', ar: 'لقراءة إيصال' }, { v: '5', en: 'role-based portals', ar: 'بوابات حسب الدور' }, { v: '4', en: 'accounting exports', ar: 'تصدير لأنظمة محاسبة' }],
      shots: [
        { src: 'img/receipt-snap/receipt_scan.webp', en: 'Receipt scan with extracted line items', ar: 'مسح الإيصال مع البنود المستخرجة' },
        { src: 'img/receipt-snap/manager_approvals.webp', en: 'Manager approvals with policy alerts', ar: 'موافقات المدير مع تنبيهات السياسة' },
        { src: 'img/receipt-snap/finance_reimbursement.webp', en: 'Batch reimbursements', ar: 'دفعات التعويض المجمعة' },
        { src: 'img/receipt-snap/finance_gl.webp', en: 'General ledger export', ar: 'تصدير دفتر الأستاذ العام' },
        { src: 'img/receipt-snap/finance_tax_ledger.webp', en: 'Tax and VAT ledger', ar: 'دفتر الضرائب والقيمة المضافة' },
        { src: 'img/receipt-snap/finance_audit_log.webp', en: 'Tamper-evident audit trail', ar: 'سجل تدقيق غير قابل للتلاعب' },
        { src: 'img/receipt-snap/admin_overview.webp', en: 'Admin overview', ar: 'لوحة الإدارة' },
        { src: 'img/receipt-snap/admin_departments.webp', en: 'Department budgets', ar: 'ميزانيات الأقسام' },
        { src: 'img/receipt-snap/admin_members.webp', en: 'Team roles', ar: 'أدوار الفريق' }
      ],
      en: {
        name: 'ReceiptSnap', role: 'Lead full-stack and AI engineer', duration: '4 months',
        line: 'Staff snap a receipt and AI fills in the expense, checks it against policy and sends it for approval.',
        problem: 'Expense reports eat hours on both sides. Employees type receipts into forms, managers chase missing ones, and finance re-enters everything into the accounting system at month end.',
        built: 'A multi-company expense platform. AI vision reads each receipt into merchant, tax and line items, policy rules flag problems the moment a claim is submitted, managers approve in one screen, and finance pays out in batches and exports straight to QuickBooks, Xero, NetSuite or SAP.',
        result: 'A receipt becomes a checked, approvable expense in seconds. Duplicate receipts are blocked, every change lands in a tamper-evident audit log, and month-end export is one click.',
        features: [
          { t: 'Receipt reading with AI', d: 'Gemini Vision turns a photo into merchant, currency, taxes and itemized lines, with retries in the background.' },
          { t: 'Policy checks on submit', d: 'Missing receipts over a limit, weekend spend and budget overruns are flagged instantly. Re-submitted images are caught by perceptual hashing.' },
          { t: 'Portals for every role', d: 'Separate views for employees, managers, accountants, admins and owners, with strict separation between companies.' },
          { t: 'Accounting and audit', d: 'Exports for QuickBooks, Xero, NetSuite and SAP, batch payout files, and an audit log where every entry is checksummed.' }
        ]
      },
      ar: {
        name: 'ReceiptSnap', role: 'مهندس Full-Stack وذكاء اصطناعي رئيسي', duration: '4 أشهر',
        line: 'يصوّر الموظف الإيصال، فيملأ الذكاء الاصطناعي المصروف ويدققه وفق السياسة ويرسله للموافقة.',
        problem: 'تقارير المصروفات تستهلك ساعات من الجميع. الموظفون يكتبون الإيصالات في النماذج، والمديرون يلاحقون الناقص منها، والمالية تعيد إدخال كل شيء في نظام المحاسبة نهاية الشهر.',
        built: 'منصة مصروفات لعدة شركات. تقرأ رؤية الذكاء الاصطناعي كل إيصال إلى المتجر والضريبة والبنود، وتنبّه قواعد السياسة إلى المشكلات لحظة تقديم المطالبة، ويوافق المدير من شاشة واحدة، وتصرف المالية التعويضات على دفعات وتصدّرها مباشرة إلى QuickBooks أو Xero أو NetSuite أو SAP.',
        result: 'يتحول الإيصال إلى مصروف مدقق جاهز للموافقة خلال ثوانٍ. وتُمنع الإيصالات المكررة، ويُسجَّل كل تغيير في سجل تدقيق غير قابل للتلاعب، ويصبح تصدير نهاية الشهر بنقرة واحدة.',
        features: [
          { t: 'قراءة الإيصالات بالذكاء الاصطناعي', d: 'يحوّل Gemini Vision الصورة إلى المتجر والعملة والضرائب والبنود المفصلة، مع إعادة المحاولة في الخلفية.' },
          { t: 'تدقيق السياسة عند التقديم', d: 'تُعلَّم الإيصالات الناقصة فوق الحد ومصروفات العطل وتجاوز الميزانية فوراً، وتُكتشف الصور المعاد رفعها.' },
          { t: 'بوابة لكل دور', d: 'واجهات منفصلة للموظفين والمديرين والمحاسبين والمشرفين والمالكين، مع فصل صارم بين الشركات.' },
          { t: 'المحاسبة والتدقيق', d: 'تصدير إلى QuickBooks وXero وNetSuite وSAP، وملفات صرف مجمعة، وسجل تدقيق موقّع لكل إدخال.' }
        ]
      }
    },
    {
      id: 'form-generator', kind: 'product', year: '2026', featured: true, card: 'img/form-generator/card.webp',
      links: { live: 'https://formgenerator.me', github: 'https://github.com/bkallash/form-generator' },
      stack: ['Laravel 12', 'Livewire 3', 'Gemini', 'Queues', 'PWA'],
      metrics: [{ v: '4', en: 'automatic alerts', ar: 'تنبيهات آلية' }, { v: '0', en: 'responses lost offline', ar: 'ردود تضيع دون اتصال' }],
      shots: [
        { src: 'img/form-generator/form_builder.webp', en: 'Form builder with AI chat', ar: 'منشئ النماذج مع محادثة الذكاء الاصطناعي' },
        { src: 'img/form-generator/dashboard.webp', en: 'Analytics and sentiment', ar: 'التحليلات والمشاعر' },
        { src: 'img/form-generator/public_form.webp', en: 'Public form', ar: 'النموذج العام' },
        { src: 'img/form-generator/submission.webp', en: 'Submissions', ar: 'الردود' }
      ],
      videos: [
        { src: 'img/form-generator/analytics.webm', en: 'Analytics walkthrough', ar: 'جولة في التحليلات' },
        { src: 'img/form-generator/offline-sync-submissions.webm', en: 'Offline submissions syncing', ar: 'مزامنة الردود بعد انقطاع الاتصال' }
      ],
      en: {
        name: 'Form Generator', role: 'Lead full-stack engineer', duration: '3 months',
        line: 'Describe a form in chat and it builds itself, then reads every response for you.',
        problem: 'Teams build forms by hand, then someone reads every response to spot unhappy customers or a form that quietly stopped working.',
        built: 'A form platform where you describe what you need in chat and AI builds the form. Every open answer is scored for sentiment in the background, and an alert engine watches the numbers so nobody has to.',
        result: 'Forms go from idea to live link in minutes. Drops, spikes, waves of negative feedback and silent forms are flagged automatically, and submissions made offline sync when the connection returns.',
        features: [
          { t: 'Build by chatting', d: 'Create and edit multi-step forms in plain language from a sidebar chat.' },
          { t: 'Sentiment on every answer', d: 'Open answers are scored and tagged with tones like frustrated or satisfied, in background queues.' },
          { t: 'Four automatic alerts', d: 'Weekly drops of 70%, spikes of 150%, negative feedback above 40% and forms quiet for 14 days.' },
          { t: 'Works offline', d: 'Submissions are kept on the device and sync when the connection is back.' }
        ]
      },
      ar: {
        name: 'Form Generator', role: 'مهندس Full-Stack رئيسي', duration: '3 أشهر',
        line: 'صف النموذج في محادثة فيبني نفسه، ثم يقرأ كل الردود عنك.',
        problem: 'تبني الفرق النماذج يدوياً، ثم يقرأ أحدهم كل رد ليكتشف العملاء غير الراضين أو نموذجاً توقف عن العمل بصمت.',
        built: 'منصة نماذج تصف فيها ما تحتاجه في محادثة فيبني الذكاء الاصطناعي النموذج. وتُقيَّم مشاعر كل إجابة مفتوحة في الخلفية، ويراقب محرك تنبيهات الأرقام كي لا يضطر أحد لذلك.',
        result: 'ينتقل النموذج من فكرة إلى رابط مباشر خلال دقائق. وتُعلَّم حالات الهبوط والارتفاع وموجات التقييم السلبي والنماذج الصامتة تلقائياً، وتتزامن الردود المرسلة دون اتصال عند عودته.',
        features: [
          { t: 'البناء بالمحادثة', d: 'أنشئ وعدّل نماذج متعددة الخطوات بلغة عادية من محادثة جانبية.' },
          { t: 'مشاعر كل إجابة', d: 'تُقيَّم الإجابات المفتوحة وتُوسم بنبرات مثل الإحباط أو الرضا في طوابير خلفية.' },
          { t: 'أربعة تنبيهات آلية', d: 'هبوط أسبوعي 70%، وارتفاع 150%، وتقييم سلبي فوق 40%، ونماذج صامتة 14 يوماً.' },
          { t: 'يعمل دون اتصال', d: 'تُحفظ الردود على الجهاز وتتزامن عند عودة الاتصال.' }
        ]
      }
    },
    {
      id: 'the-margin', kind: 'product', year: '2026', featured: true, card: 'img/the-margin/card.webp',
      links: { github: 'https://github.com/bkallash/the-margin' },
      stack: ['Laravel 13', 'Livewire 3', 'Tailwind CSS 4', 'Gemini embeddings', 'Echo'],
      metrics: [{ v: '2', en: 'kinds of search, meaning and keywords', ar: 'نوعان من البحث، بالمعنى وبالكلمات' }, { v: 'Live', v_ar: 'فوري', en: 'notifications over WebSockets', ar: 'إشعارات فورية' }],
      shots: [
        { src: 'img/the-margin/hero.webp', en: 'Home page', ar: 'الصفحة الرئيسية' },
        { src: 'img/the-margin/feed.webp', en: 'Reading feed and topics', ar: 'القراءة والمواضيع' },
        { src: 'img/the-margin/reader.webp', en: 'Essay reader', ar: 'عرض المقال' },
        { src: 'img/the-margin/editor.webp', en: 'Manuscript editor', ar: 'محرر المقالات' },
        { src: 'img/the-margin/search_results.webp', en: 'Search by meaning', ar: 'البحث بالمعنى' },
        { src: 'img/the-margin/admin_flags.webp', en: 'Moderation queue', ar: 'طابور الإشراف' }
      ],
      en: {
        name: 'The Margin', role: 'Lead full-stack and AI engineer', duration: '2 months',
        line: 'A publishing platform for long essays, with search that understands meaning, not just keywords.',
        problem: 'Writing communities live or die by discovery and moderation. Keyword search misses good essays, and moderation usually means a pile of reports and no clear process.',
        built: 'A publishing platform with a full manuscript editor, author pages and a follow graph. Every essay gets a vector embedding when it is published, so search matches meaning and keywords together. Moderators get a report queue, suspensions and a structured appeals flow.',
        result: 'Readers find related essays even when they use different words. Moderation runs as a clear workflow, and authors get live notifications for likes, saves and new followers.',
        features: [
          { t: 'Search by meaning', d: 'Gemini embeddings on publish, combined with instant keyword suggestions.' },
          { t: 'Manuscript editor', d: 'Rich text, images, tags, bookmarks and threaded discussion.' },
          { t: 'Moderation and appeals', d: 'Report queues, suspensions and a reinstatement process users can follow.' },
          { t: 'Live notifications', d: 'Likes, saves and followers broadcast in real time with Laravel Echo.' }
        ]
      },
      ar: {
        name: 'The Margin', role: 'مهندس Full-Stack وذكاء اصطناعي رئيسي', duration: 'شهران',
        line: 'منصة نشر للمقالات الطويلة، ببحث يفهم المعنى لا الكلمات فقط.',
        problem: 'مجتمعات الكتابة تعيش أو تموت بالاكتشاف والإشراف. البحث بالكلمات يفوّت مقالات جيدة، والإشراف غالباً كومة بلاغات دون عملية واضحة.',
        built: 'منصة نشر بمحرر مقالات كامل وصفحات للكتّاب وشبكة متابعة. يحصل كل مقال على تمثيل متجهي عند نشره، فيطابق البحث المعنى والكلمات معاً. ويحصل المشرفون على طابور بلاغات وتعليق للحسابات ومسار استئناف منظم.',
        result: 'يجد القراء المقالات المرتبطة حتى حين يستخدمون كلمات مختلفة. ويسير الإشراف كمسار عمل واضح، ويتلقى الكتّاب إشعارات فورية بالإعجابات والحفظ والمتابعين الجدد.',
        features: [
          { t: 'البحث بالمعنى', d: 'تمثيلات Gemini عند النشر، مع اقتراحات فورية بالكلمات.' },
          { t: 'محرر المقالات', d: 'نص منسق وصور ووسوم وإشارات مرجعية ونقاشات متداخلة.' },
          { t: 'الإشراف والاستئناف', d: 'طوابير بلاغات وتعليق حسابات ومسار إعادة تفعيل واضح للمستخدم.' },
          { t: 'إشعارات فورية', d: 'الإعجابات والحفظ والمتابعون تُبث لحظياً عبر Laravel Echo.' }
        ]
      }
    },
    {
      id: 'cinematch', kind: 'oss', year: '2026', featured: true, card: 'img/cinematch/card.webp',
      links: { github: 'https://github.com/bkallash/cinematch' },
      stack: ['Python', 'OpenRouter', 'Embeddings', 'LLM ranking'],
      metrics: [{ v: '1', en: 'command to install and run', ar: 'أمر واحد للتثبيت والتشغيل' }, { v: 'Local', v_ar: 'محلي', en: 'your ratings stay on your machine', ar: 'تقييماتك تبقى على جهازك' }],
      shots: [
        { src: 'img/cinematch/movies-cards-deck.webp', en: 'Rate movies and series', ar: 'قيّم الأفلام والمسلسلات' },
        { src: 'img/cinematch/for-you.webp', en: 'Picks for you', ar: 'اختيارات لك' },
        { src: 'img/cinematch/library.webp', en: 'Your library', ar: 'مكتبتك' },
        { src: 'img/cinematch/chat.webp', en: 'Chat for recommendations', ar: 'محادثة للترشيحات' }
      ],
      en: {
        name: 'CineMatch', role: 'Solo developer', duration: 'Open source',
        line: 'A private recommender that learns from your ratings and understands "something like this".',
        problem: 'Recommendation feeds push what is popular and ignore what you actually mean when you ask for something like a film you loved.',
        built: 'A local app that learns your taste from quick ratings, keeps a watchlist, and adds a chat assistant. Ask for something like La La Land and it reads that film\'s tone, themes and style, not just its genre. You bring your own model key.',
        result: 'Picks that feel personal, from one install command, with your data kept on your own machine.',
        features: [
          { t: 'Rate in seconds', d: 'A card deck for rating movies and series quickly.' },
          { t: 'Taste-aware picks', d: 'Recommendations ranked against a profile built from your ratings.' },
          { t: 'Chat by reference', d: 'Ask for titles like one you love; genre, years and format you name stay as filters.' }
        ]
      },
      ar: {
        name: 'CineMatch', role: 'مطور منفرد', duration: 'مفتوح المصدر',
        line: 'نظام ترشيح خاص يتعلم من تقييماتك ويفهم طلب "شيء مثل هذا".',
        problem: 'خوارزميات الترشيح تدفع الرائج وتتجاهل ما تقصده فعلاً حين تطلب شيئاً يشبه فيلماً أحببته.',
        built: 'تطبيق محلي يتعلم ذوقك من تقييمات سريعة، ويحفظ قائمة مشاهدة، ويضيف مساعد محادثة. اطلب شيئاً يشبه La La Land فيقرأ نبرة الفيلم وموضوعاته وأسلوبه، لا نوعه فقط. وتستخدم مفتاح النموذج الخاص بك.',
        result: 'ترشيحات شخصية من أمر تثبيت واحد، مع بقاء بياناتك على جهازك.',
        features: [
          { t: 'تقييم في ثوانٍ', d: 'مجموعة بطاقات لتقييم الأفلام والمسلسلات بسرعة.' },
          { t: 'ترشيحات تعرف ذوقك', d: 'ترتيب الترشيحات وفق ملف مبني من تقييماتك.' },
          { t: 'محادثة بالمرجع', d: 'اطلب أعمالاً تشبه عملاً تحبه، مع بقاء النوع والسنوات والصيغة التي تحددها كمرشحات.' }
        ]
      }
    },
    {
      id: 'fluentia', kind: 'progress', year: '2026', featured: true,
      stack: ['Laravel', 'Inertia', 'TypeScript', 'AI sub-agents'],
      metrics: [{ v: '7', en: 'feedback categories per piece', ar: 'فئات تقييم لكل نص' }],
      en: {
        name: 'Fluentia', role: 'Solo developer', duration: 'In progress',
        line: 'A writing coach for English learners that grades each piece across seven categories and tracks the mistakes you repeat.',
        problem: 'Learners get vague feedback like "good job, watch your grammar" and keep making the same mistakes without noticing a pattern.',
        built: 'A writing app built on realistic scenarios with a set audience, tone and purpose. AI sub-agents grade each submission across seven categories, annotate the exact words with suggested fixes, and write a corrected version. A weakness profile tracks recurring patterns over time.',
        result: 'Feedback that names the problem, shows the fix and remembers it next time. Scenarios are generated from your own weak spots.',
        features: [
          { t: 'Scenario writing', d: 'Prompts with a real audience, register, purpose and word count.' },
          { t: 'Seven-category grading', d: 'Each submission gets a band per category, an overall score and an estimated CEFR level.' },
          { t: 'Weakness profile', d: 'Recurring patterns are tracked, and new scenarios target them.' }
        ]
      },
      ar: {
        name: 'Fluentia', role: 'مطور منفرد', duration: 'قيد التطوير',
        line: 'مدرّب كتابة لمتعلمي الإنجليزية يقيّم كل نص في سبع فئات ويتتبع الأخطاء التي تكررها.',
        problem: 'يحصل المتعلمون على ملاحظات عامة مثل "عمل جيد، انتبه للقواعد"، ويكررون الأخطاء نفسها دون أن يلاحظوا نمطها.',
        built: 'تطبيق كتابة مبني على مواقف واقعية بجمهور ونبرة وغرض محددين. يقيّم وكلاء ذكاء اصطناعي فرعيون كل نص في سبع فئات، ويعلّمون الكلمات نفسها مع التصحيح المقترح، ويكتبون نسخة مصححة. ويتتبع ملف نقاط الضعف الأنماط المتكررة مع الوقت.',
        result: 'ملاحظات تسمي المشكلة وتعرض التصحيح وتتذكره في المرة القادمة، ومواقف كتابة تُولَّد من نقاط ضعفك أنت.',
        features: [
          { t: 'الكتابة بالمواقف', d: 'مهام بجمهور حقيقي ومستوى لغة وغرض وعدد كلمات.' },
          { t: 'تقييم في سبع فئات', d: 'لكل نص درجة في كل فئة ودرجة كلية ومستوى CEFR تقديري.' },
          { t: 'ملف نقاط الضعف', d: 'تُتتبع الأنماط المتكررة، وتستهدفها المواقف الجديدة.' }
        ]
      }
    },
    {
      id: 'ytui', kind: 'oss', year: '2026', featured: false, card: 'img/ytui/format_screen.svg', cardDark: true,
      links: { github: 'https://github.com/bkallash/YTUI', pypi: 'https://pypi.org/project/ytui-media/' },
      stack: ['Python', 'Textual', 'Rich', 'yt-dlp', 'FFmpeg'],
      metrics: [{ v: '1,000+', en: 'supported sites', ar: 'موقع مدعوم' }, { v: '17', en: 'handmade themes', ar: 'سمة مصممة يدوياً' }],
      shots: [
        { src: 'img/ytui/format_screen.svg', en: 'Pick video and audio side by side', ar: 'اختر الصورة والصوت جنباً إلى جنب' },
        { src: 'img/ytui/download_screen.svg', en: 'Download queue', ar: 'طابور التنزيل' },
        { src: 'img/ytui/settings_screen.svg', en: 'Settings and themes', ar: 'الإعدادات والسمات' }
      ],
      en: {
        name: 'YTUI', role: 'Solo developer', duration: '2 months',
        line: 'A keyboard-driven terminal app that makes yt-dlp easy: pick streams visually, queue downloads, resume after drops.',
        problem: 'yt-dlp can download almost anything, but only if you remember dozens of command-line flags.',
        built: 'A terminal interface on top of yt-dlp and FFmpeg: a side-by-side stream picker, a background download queue with live progress, a playlist selector, automatic resume on unstable networks, and right-to-left text support for Arabic metadata.',
        result: 'The full power of yt-dlp without memorizing flags. Published on PyPI.',
        features: [
          { t: 'Stream picker', d: 'Choose exact video and audio quality side by side, or one-click presets.' },
          { t: 'Download queue', d: 'Concurrent downloads with speed, time left, logs, pause and retry.' },
          { t: 'Resilient on bad networks', d: 'Byte-offset resume and backoff retries.' }
        ]
      },
      ar: {
        name: 'YTUI', role: 'مطور منفرد', duration: 'شهران',
        line: 'تطبيق طرفية يعمل بلوحة المفاتيح ويجعل yt-dlp سهلاً: اختر المسارات بصرياً، وانتظم التنزيلات، واستأنف بعد الانقطاع.',
        problem: 'يستطيع yt-dlp تنزيل أي شيء تقريباً، لكن فقط إن تذكرت عشرات الخيارات في سطر الأوامر.',
        built: 'واجهة طرفية فوق yt-dlp وFFmpeg: اختيار المسارات جنباً إلى جنب، وطابور تنزيل في الخلفية بتقدم مباشر، واختيار من قوائم التشغيل، واستئناف تلقائي على الشبكات غير المستقرة، ودعم النص من اليمين لليسار للبيانات العربية.',
        result: 'كل قوة yt-dlp دون حفظ الخيارات. ومنشور على PyPI.',
        features: [
          { t: 'اختيار المسارات', d: 'اختر جودة الصورة والصوت بدقة جنباً إلى جنب، أو بإعدادات جاهزة بنقرة.' },
          { t: 'طابور التنزيل', d: 'تنزيلات متزامنة مع السرعة والوقت المتبقي والسجلات والإيقاف وإعادة المحاولة.' },
          { t: 'متين على الشبكات الضعيفة', d: 'استئناف من موضع التوقف وإعادة محاولة متدرجة.' }
        ]
      }
    }
  ];

  return { en, ar, projects, contact };
})();

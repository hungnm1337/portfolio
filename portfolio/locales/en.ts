const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Nguyen Manh Hung',
    role: 'Full Stack Developer',
    sub: 'Passionate about building scalable web apps with ASP.NET Core & Next.js',
    cta_projects: 'View Projects',
    cta_contact: 'Contact Me',
    cta_cv: 'Download CV',
    open: 'Open to new opportunities',
  },
  about: {
    title: 'About',
    summary: `Full Stack developer passionate about building scalable web applications with ASP.NET Core and Next.js. Experienced in managing the full software development lifecycle and orchestrating cloud/VPS environments across diverse projects.`,
    info: [
      { label: 'Date of birth', value: '18/12/2003' },
      { label: 'Gender', value: 'Male' },
      { label: 'Location', value: 'Hanoi, Vietnam' },
      { label: 'Email', value: 'hungnm1337@gmail.com' },
      { label: 'Phone', value: '+84 37 341 1812' },
      { label: 'GitHub', value: 'github.com/hungnm1337' },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'Backend',
        items: ['.NET Core 8', 'ASP.NET MVC', 'ASP.NET Web API', 'WinForms', 'Node.js'],
      },
      {
        label: 'Database',
        items: ['MS SQL Server', 'Supabase', 'MySQL', 'PostgreSQL'],
      },
      {
        label: 'Frontend',
        items: ['TypeScript (ES6)', 'Angular 18', 'Next.js'],
      },
      {
        label: 'DevOps',
        items: ['Docker', 'VPS (aaPanel)', 'IIS', 'Nginx'],
      },
      {
        label: 'Testing',
        items: ['xUnit', 'NUnit', 'Selenium WebDriver'],
      },
      {
        label: 'Tools',
        items: ['Git / GitHub', 'Jira', 'Agile / Scrum'],
      },
      {
        label: 'Language',
        items: ['English — B1 Intermediate'],
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        position: 'Full Stack Developer',
        company: 'Nemark',
        period: 'Nov 2025 — Feb 2026',
        location: 'Hanoi',
        bullets: [
          'Project Coordination: Managed the development process to deliver 5+ diverse software solutions and MVPs.',
          'Technical Implementation: Developed core backend with ASP.NET Core and optimized frontend with Next.js/Angular.',
          'DevOps: Set up deployment pipelines on Windows/Linux VPS using Docker and aaPanel.',
          'QA & Standards: Enforced strict Code Review (StyleCop) and Unit Testing (xUnit) to ensure a maintainable codebase.',
        ],
      },
      {
        position: 'Software Engineering Intern (Team Lead)',
        company: 'FPT Software',
        period: 'Sep 2024 — Jan 2025',
        location: 'Hanoi',
        bullets: [
          'Leadership: Led development of a "Mobile E-commerce" platform to enterprise technical standards.',
          'Management: Optimized team performance using Agile/Scrum and contributed to System Architecture design.',
          'Project Delivery: Successfully delivered a stable product demo meeting all business requirements and user flows.',
        ],
      },
    ],
    education: {
      sectionTitle: 'Education',
      degree: 'Bachelor of Software Engineering',
      school: 'FPT University',
      period: 'Sep 2021 — Dec 2025',
      location: 'Hanoi',
      detail: 'Major: .NET Technology · GPA: 3.02/4.0',
    },
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'Lumina',
        sub: 'AI-Powered TOEIC Practice System',
        type: 'Graduation Project · FPT University',
        period: 'Sep 2024 — Dec 2025',
        role: 'Team Lead & Full Stack Developer (Full ownership)',
        description: 'Comprehensive TOEIC practice platform with AI-powered auto-grading for all 4 skills (Listening, Reading, Speaking, Writing).',
        highlights: [
          'Designed system architecture and RESTful API with ASP.NET Core; built database schema with SQL Server.',
          'Built entire Angular 18 frontend including exam UI, results dashboard, and admin panel.',
          'Developed Reading flow — question sets, timed practice, and automated score tracking.',
          'Developed Writing flow — essay submission with AI scoring and auto-generated feedback.',
          'Built Mock Test module — full 4-skill simulation aligned with real TOEIC structure and scoring.',
          'Wrote 500+ test cases (Unit, Integration, System, AI result) to validate grading logic.',
          'Led sprint planning, task assignment, and code review for a team of 5.',
        ],
        tech: ['ASP.NET Core API', 'Angular 18', 'SQL Server', 'xUnit', 'Azure AI', 'Docker'],
        link: null,
      },
      {
        name: 'MediMate',
        sub: 'AI-Powered Medical E-commerce',
        type: 'Personal Project',
        period: 'Jan 2026 — Feb 2026',
        role: 'Sole Developer (Design, Development & Deployment)',
        description: 'Full-stack pharmaceutical e-commerce platform with AI health consultation, real-time payment webhooks, admin analytics, and role-based access control.',
        highlights: [
          'Built full-stack pharmaceutical e-commerce with Next.js 16 API Routes, product catalog, cart, and checkout.',
          'Integrated SePay payment gateway with real-time webhooks for automatic order status updates.',
          'Implemented Google Gemini AI health consultation chatbot with conversation history.',
          'Developed admin dashboard with revenue/order analytics (Recharts) and Excel export.',
          'Applied role-based access control via Next.js Middleware to protect admin routes.',
          'Optimized performance with parallel Supabase queries and SWR client-side caching; avg load time 1.8s.',
          'Deployed on Vercel with automated CI/CD from GitHub.',
        ],
        tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL (Supabase)', 'Google Gemini AI', 'SePay / VietQR', 'Recharts', 'SWR', 'Vercel'],
        link: 'https://www.medimate-socuuyte.com/',
      },
    ],
  },
  contact: {
    title: 'Contact',
    sub: "I'm looking for new opportunities. Feel free to reach out!",
    email_label: 'Email',
    phone_label: 'Phone',
    github_label: 'GitHub',
  },
  footer: {
    copy: '© 2026 Nguyen Manh Hung. All rights reserved.',
  },
};

export default en;

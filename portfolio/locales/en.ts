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
      }
      
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
      major: 'Major: .NET Technology',
      gpa: 'GPA: 3.02/4.0',
    },
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'Hades Epay',
        id: 'hadesepay',
        sub: 'Digital Payment Platform',
        type: 'Fintech',
        period: 'Oct 2025 — Present',
        role: 'Full Stack Developer',
        description: 'A comprehensive digital payment platform providing virtual accounts, e-wallets, and payment gateway solutions for businesses in Vietnam.',
        images: [
          '/project/hadesepay/Screenshot_11-6-2026_221016_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_221035_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_221054_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_221123_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_221144_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_22128_www.hadesepay.com.jpeg',
          '/project/hadesepay/Screenshot_11-6-2026_22949_www.hadesepay.com.jpeg'
        ],
        highlights: [
          'Implemented secure virtual account management system.',
          'Developed e-wallet features with real-time transaction tracking.',
          'Integrated with multiple bank partners for seamless payments.',
          'Built responsive and user-friendly merchant dashboard.'
        ],
        tech: ['.NET Core 8', 'SQL Server', 'Next.js', 'Tailwind CSS', 'Redux'],
        link: 'https://www.hadesepay.com/',
      },
      {
        name: 'MediMate',
        id: 'medimate',
        sub: 'Medical Supplies & First Aid E-commerce',
        type: 'Healthcare E-commerce',
        period: 'Jun 2025 — Sep 2025',
        role: 'Full Stack Developer',
        description: 'An specialized e-commerce platform for high-quality medical equipment and first aid supplies, designed to provide fast access to essential healthcare tools.',
        images: [
          '/project/medimate/Screenshot_11-6-2026_221326_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22228_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_2231_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22355_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22612_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22646_www.medimate-socuuyte.com.jpeg'
        ],
        highlights: [
          'Developed robust product catalog with advanced search and filtering.',
          'Implemented secure checkout process with multiple payment options.',
          'Built a first aid guide system for emergency situations.',
          'Optimized platform performance for mobile users.'
        ],
        tech: ['.NET Core 8', 'PostgreSQL', 'Angular 18', 'Tailwind CSS', 'Docker'],
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

const vi = {
  nav: {
    about: 'Giới thiệu',
    skills: 'Kỹ năng',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
  },
  hero: {
    greeting: 'Xin chào, tôi là',
    name: 'Nguyen Manh Hung',
    role: 'Full Stack Developer',
    sub: 'Đam mê xây dựng web với ASP.NET Core & Next.js',
    cta_projects: 'Xem dự án',
    cta_contact: 'Liên hệ',
    cta_cv: 'Tải CV',
    open: 'Sẵn sàng cho cơ hội mới',
  },
  about: {
    title: 'Giới thiệu',
    summary: `Lập trình viên Full Stack đam mê xây dựng các ứng dụng web có khả năng mở rộng với ASP.NET Core và Next.js. Có kinh nghiệm thực tế trong quản lý vòng đời phát triển đầy đủ và điều phối môi trường cloud/VPS cho các dự án đa dạng.`,
    info: [
      { label: 'Ngày sinh', value: '18/12/2003' },
      { label: 'Giới tính', value: 'Nam' },
      { label: 'Địa chỉ', value: 'Hà Nội, Việt Nam' },
      { label: 'Email', value: 'hungnm1337@gmail.com' },
      { label: 'Điện thoại', value: '037 341 1812' },
      { label: 'GitHub', value: 'github.com/hungnm1337' },
    ],
  },
  skills: {
    title: 'Kỹ năng',
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
    title: 'Kinh nghiệm',
    items: [
      {
        position: 'Lập trình viên Full Stack',
        company: 'Nemark',
        period: 'Tháng 11/2025 — Tháng 02/2026',
        location: 'Hà Nội',
        bullets: [
          'Điều phối dự án: Quản lý quy trình phát triển để bàn giao 5+ giải pháp phần mềm và MVP đa dạng.',
          'Triển khai kỹ thuật: Phát triển backend cốt lõi bằng ASP.NET Core và tối ưu hóa frontend với Next.js/Angular.',
          'DevOps: Triển khai pipeline trên VPS Windows/Linux sử dụng Docker và aaPanel.',
          'QA & Tiêu chuẩn: Áp dụng nghiêm ngặt Code Review (StyleCop) và Unit Testing (xUnit) để đảm bảo codebase dễ bảo trì.',
        ],
      },
      {
        position: 'Thực tập sinh Kỹ thuật phần mềm (Trưởng nhóm)',
        company: 'FPT Software',
        period: 'Tháng 9/2024 — Tháng 1/2025',
        location: 'Hà Nội',
        bullets: [
          'Lãnh đạo: Dẫn dắt phát triển nền tảng "Thương mại điện tử điện thoại di động" theo tiêu chuẩn kỹ thuật doanh nghiệp.',
          'Quản lý: Tối ưu hóa hiệu suất nhóm bằng Agile/Scrum và đóng góp vào thiết kế Kiến trúc hệ thống.',
          'Bàn giao dự án: Bàn giao thành công demo sản phẩm ổn định đáp ứng đầy đủ yêu cầu nghiệp vụ và luồng người dùng.',
        ],
      },
    ],
    education: {
      sectionTitle: 'Học vấn',
      degree: 'Cử nhân Kỹ thuật phần mềm',
      school: 'FPT University',
      period: 'Tháng 9/2021 — Tháng 12/2025',
      location: 'Hà Nội',
      major: 'Chuyên ngành: Công nghệ .NET',
      gpa: 'GPA: 3.02/4.0',
    },
  },
  projects: {
    title: 'Dự án',
    items: [
      {
        name: 'Hades Epay',
        id: 'hadesepay',
        sub: 'Nền tảng thanh toán số',
        type: 'Fintech',
        period: 'Tháng 10/2025 — Hiện tại',
        role: 'Lập trình viên Full Stack',
        description: 'Một nền tảng thanh toán số toàn diện cung cấp giải pháp tài khoản định danh, ví điện tử và cổng thanh toán cho doanh nghiệp tại Việt Nam.',
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
          'Triển khai hệ thống quản lý tài khoản định danh bảo mật.',
          'Phát triển tính năng ví điện tử với theo dõi giao dịch thời gian thực.',
          'Tích hợp với nhiều đối tác ngân hàng để thanh toán liền mạch.',
          'Xây dựng dashboard quản trị thân thiện và tương thích đa thiết bị.'
        ],
        tech: ['.NET Core 8', 'SQL Server', 'Next.js', 'Tailwind CSS', 'Redux'],
        link: 'https://www.hadesepay.com/',
      },
      {
        name: 'MediMate',
        id: 'medimate',
        sub: 'Thương mại điện tử Vật tư Y tế & Sơ cứu',
        type: 'Healthcare E-commerce',
        period: 'Tháng 6/2025 — Tháng 9/2025',
        role: 'Lập trình viên Full Stack',
        description: 'Nền tảng thương mại điện tử chuyên biệt cho thiết bị y tế chất lượng cao và dụng cụ sơ cứu, được thiết kế để cung cấp khả năng tiếp cận nhanh chóng các công cụ y tế thiết yếu.',
        images: [
          '/project/medimate/Screenshot_11-6-2026_221326_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22228_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_2231_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22612_www.medimate-socuuyte.com.jpeg',
          '/project/medimate/Screenshot_11-6-2026_22646_www.medimate-socuuyte.com.jpeg'
        ],
        highlights: [
          'Phát triển danh mục sản phẩm mạnh mẽ với tìm kiếm và lọc nâng cao.',
          'Triển khai quy trình thanh toán bảo mật với nhiều lựa chọn.',
          'Xây dựng hệ thống hướng dẫn sơ cứu cho các tình huống khẩn cấp.',
          'Tối ưu hóa hiệu suất nền tảng cho người dùng di động.'
        ],
        tech: ['.NET Core 8', 'PostgreSQL', 'Angular 18', 'Tailwind CSS', 'Docker'],
        link: 'https://www.medimate-socuuyte.com/',
      },
    ],
  },
  contact: {
    title: 'Liên hệ',
    sub: 'Tôi đang tìm kiếm cơ hội mới. Hãy liên hệ với tôi!',
    email_label: 'Email',
    phone_label: 'Điện thoại',
    github_label: 'GitHub',
  },
  footer: {
    copy: '© 2026 Nguyen Manh Hung. All rights reserved.',
  },
};

export default vi;

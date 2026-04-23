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
    summary: `Lập trình viên Full Stack đam mê xây dựng các ứng dụng web có khả năng mở rộng với ASP.NET Core và Next.js. Có kinh nghiệm thực tế trong quản lý vòng đời phát triển đầy đủ và điều phối môi trường cloud/VPS cho các dự án đa dạng. Tìm kiếm môi trường chuyên nghiệp để phát huy chuyên môn kỹ thuật trong việc giải quyết các thách thức kinh doanh thực tế.`,
    info: [
      { label: 'Ngày sinh', value: '18/12/2003' },
      { label: 'Giới tính', value: 'Nam' },
      { label: 'Địa chỉ', value: 'Hà Nội, Việt Nam' },
      { label: 'Email', value: 'hungnm1337@gmail.com' },
      { label: 'Điện thoại', value: '+84 037 341 1812' },
      { label: 'GitHub', value: 'github.com/hungnm1337' },
    ],
  },
  skills: {
    title: 'Kỹ năng',
    groups: [
      {
        label: 'Backend',
        items: ['C#', '.NET Core 8', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'LINQ', 'WinForms'],
      },
      {
        label: 'Database',
        items: ['MS SQL Server', 'T-SQL', 'Stored Procedures', 'Triggers', 'Transactions', 'Index', 'View'],
      },
      {
        label: 'Frontend',
        items: ['TypeScript (ES6)', 'Angular 18', 'Next.js', 'HTML5/CSS3', 'Bootstrap', 'jQuery', 'AJAX'],
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
        label: 'Ngoại ngữ',
        items: ['Tiếng Anh — B1 Trung cấp'],
      },
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
      detail: 'Chuyên ngành: Công nghệ .NET · GPA: 3.02/4.0',
    },
  },
  projects: {
    title: 'Dự án',
    items: [
      {
        name: 'Lumina',
        sub: 'AI-Powered TOEIC Practice System',
        type: 'Đồ án tốt nghiệp · Đại học FPT',
        period: 'Tháng 9/2024 — Tháng 12/2025',
        role: 'Trưởng nhóm & Lập trình viên Full Stack (Toàn bộ trách nhiệm)',
        description: 'Nền tảng luyện thi TOEIC toàn diện với chấm điểm tự động bằng AI cho cả 4 kỹ năng (Nghe, Đọc, Nói, Viết).',
        highlights: [
          'Thiết kế kiến trúc hệ thống và RESTful API với ASP.NET Core; xây dựng schema cơ sở dữ liệu với SQL Server.',
          'Xây dựng toàn bộ frontend Angular 18 gồm giao diện thi, dashboard kết quả và trang quản trị.',
          'Phát triển luồng Reading — bộ câu hỏi, luyện tập có tính giờ và theo dõi kết quả chấm điểm tự động.',
          'Phát triển luồng Writing — nộp bài luận với chấm điểm bằng AI và tạo phản hồi tự động.',
          'Xây dựng module Mock Test — bài thi mô phỏng 4 kỹ năng đầy đủ theo cấu trúc và thang điểm TOEIC.',
          'Viết 500+ test case (Unit, Integration, System, AI result) để kiểm tra logic chấm điểm.',
          'Dẫn dắt lập kế hoạch sprint, phân công nhiệm vụ và code review cho nhóm 5 người.',
        ],
        tech: ['ASP.NET Core API', 'Angular 18', 'SQL Server', 'xUnit', 'Azure AI', 'Docker'],
        link: null,
      },
      {
        name: 'MediMate',
        sub: 'AI-Powered Medical E-commerce',
        type: 'Dự án cá nhân',
        period: 'Tháng 1/2026 — Tháng 2/2026',
        role: 'Lập trình viên duy nhất (Thiết kế, Phát triển & Triển khai)',
        description: 'Nền tảng thương mại điện tử dược phẩm full-stack với tư vấn sức khỏe AI, webhook thanh toán thời gian thực, phân tích dữ liệu quản trị và kiểm soát truy cập theo vai trò.',
        highlights: [
          'Xây dựng thương mại điện tử dược phẩm full-stack với Next.js 16 API Routes, danh mục sản phẩm, giỏ hàng và quy trình thanh toán.',
          'Tích hợp cổng thanh toán SePay với webhook thời gian thực để tự động cập nhật trạng thái đơn hàng.',
          'Triển khai chatbot tư vấn sức khỏe Google Gemini AI với lịch sử hội thoại.',
          'Phát triển dashboard quản trị với phân tích doanh thu/đơn hàng (Recharts) và xuất file Excel.',
          'Áp dụng kiểm soát truy cập theo vai trò bằng Next.js Middleware để bảo vệ các route quản trị.',
          'Tối ưu hiệu suất với truy vấn Supabase song song và SWR cache; thời gian tải trung bình 1.8s.',
          'Triển khai trên Vercel với CI/CD tự động từ GitHub.',
        ],
        tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL (Supabase)', 'Google Gemini AI', 'SePay / VietQR', 'Recharts', 'SWR', 'Vercel'],
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

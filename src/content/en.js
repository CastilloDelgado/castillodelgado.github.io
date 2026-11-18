export default {
  meta: {
    title: 'Marco Castillo · Full Stack Developer',
    description: 'Marco Castillo, Full Stack Developer based in Guadalajara, Mexico. Experience with Vue.js, React, Node.js, Java Spring, Laravel, real-time applications and cloud deployment.',
  },
  header: {
    skip: 'Skip to content', home: 'Marco Castillo, home', navigation: 'Main navigation',
    language: 'Select language', menu: 'Menu', close: 'Close', contact: 'Let’s talk',
    sections: [
      { id: 'proyectos', label: 'Projects' }, { id: 'perfil', label: 'Profile' },
      { id: 'experiencia', label: 'Experience' }, { id: 'conocimientos', label: 'Skills' },
    ],
  },
  profile: {
    intro: ['From business logic', 'to interfaces that work'],
    summary: 'Software developer based in Guadalajara, Mexico. I build applications with Vue.js, React, Node.js, Laravel and Java Spring, with experience in real-time systems and cloud deployment.',
    explore: 'Explore my experience', downloads: { es: 'CV in Spanish', en: 'CV in English' }, location: 'GUADALAJARA, MEXICO', stackLabel: 'Core technologies',
  },
  experience: {
    heading: { eyebrow: '02 / EXPERIENCE', title: ['Experience that', 'ships to production.'], note: 'Business applications, real-time interfaces and problem-solving in production environments.' },
    jobs: [
      {
        company: 'Lagersoft Games', role: 'Frontend Developer', date: '2023 — 2026',
        intro: 'Interfaces that keep up with live sports.',
        summary: 'Frontend development with Vue.js for a sports betting platform serving approximately 10,000 daily active users.',
        tags: ['Vue.js', 'JavaScript', 'Real-time', 'Sentry', 'LogRocket'],
        details: [
          ['Real-time updates', 'Implemented sports event updates, connection management and automatic reconnection to keep information on the interface up to date.'],
          ['Frontend business logic', 'Handled odds changes, event cancellations and postponements, and their effects on related bets, keeping displayed information consistent.'],
          ['Troubleshooting and quality', 'Investigated production issues using Sentry traces and LogRocket session replays. Fixes underwent QA validation before release, in a codebase with unit tests.'],
        ],
      },
      {
        company: 'Emergys', role: 'Web Developer', date: '2021', intro: 'From the frontend to payroll calculations.',
        summary: 'Developed a payroll application for a gas distributor, with responsibilities across both frontend and backend.',
        tags: ['React', 'Java Spring', 'MySQL', 'Docker', 'Google Cloud'],
        details: [
          ['Frontend and integration', 'Built React interfaces and integrated APIs for user administration and payroll workflows.'],
          ['Payment rules and persistence', 'Took on backend responsibilities with Java Spring: payment table management and calculation rules based on sales, employee rank and tenure. Integrated these features with the frontend and used MySQL for persistence.'],
          ['Deployment', 'Participated in deploying the application with Docker on Google Cloud Platform.'],
        ],
      },
      {
        company: 'KronosoftMX', role: 'ReactJS Frontend Developer', date: '2020', intro: 'Tools for bulk invoicing.',
        summary: 'Built a React frontend to manage invoicing workflows and connect them to backend services.',
        tags: ['React', 'JavaScript', 'API integration'],
        details: [
          ['Administration and invoicing', 'Implemented interfaces for managing users, invoices and files within a bulk invoicing tool.'],
          ['Service integration', 'Integrated backend services supporting the invoice certification workflow.'],
        ],
      },
    ],
    additional: {
      label: 'ALSO IN MY BACKGROUND', title: 'Engineering and electronics diagnostics',
      paragraphs: [
        'Product Engineer (2020–2022), Product Technician (2017–2019) and Debug Technician (2016–2017).',
        'Experience in PCBA new product introduction, engineering changes, customer coordination and electronics diagnostics.',
      ],
    },
  },
  projects: {
    links: { site: 'Visit website', repository: 'View repository' },
    heading: { eyebrow: '01 / PROJECTS', title: ['Personal and client projects.', 'End-to-end development.'], note: 'Projects that connect interfaces, data and infrastructure, and explore new ways to interact.' },
    items: [
      {
        id: 'saldo', number: '01', label: 'APPLICATION / PERSONAL FINANCE', title: 'Saldo',
        site: 'https://mieconomia.tech',
        art: { domain: 'mieconomia.tech', label: 'PERSONAL FINANCE', title: ['Saldo.', 'Your finances in order.'], categories: ['Credit cards', 'Savings', 'Expenses'] },
        paragraphs: [
          'A personal finance application I built to manage credit cards, organize savings and track expenses.',
          'Built with Flask and connected to Google Cloud Platform (GCP) for user management. Deployed with Docker on a Hostinger VPS.',
        ],
        tags: ['Flask', 'Google Cloud Platform', 'Docker', 'Hostinger', 'VPS'],
      },
      {
        id: 'blog', number: '02', label: 'BLOG / ART PROJECT', title: 'Metachromatic',
        site: 'https://metachromatic.online',
        art: { domain: 'metachromatic.online', stack: 'Laravel + Vue.js', label: 'ART / PROCESS / DOCUMENTATION', title: ['Metachromatic.', 'An artistic process.'] },
        paragraphs: [
          'A blog I built to document an art project and share its process.',
          'Built with Laravel and Vue.js, using MariaDB as the database. Deployed in a Docker container on a private VPS.',
        ],
        tags: ['Laravel', 'Vue.js', 'MariaDB', 'Docker', 'VPS'],
      },
      {
        id: 'mjf', number: '03', label: 'BUSINESS WEBSITE / ELECTRICAL INSTALLATIONS', title: 'MJF-SE',
        site: 'https://mjf-se.com',
        art: { domain: 'mjf-se.com', stack: 'Lovable + Hostinger', label: 'INSTALLATIONS / COMPANY / SERVICES', title: ['MJF-SE.', 'Electrical installations.'] },
        paragraphs: [
          'A website I created with Lovable for an electrical installation company, published on Hostinger hosting.',
          'I also administered the company’s Google Cloud Platform (GCP) environment for email, storage and some internal processes.',
        ],
        tags: ['Lovable', 'Hostinger', 'Google Cloud Platform'],
      },
      {
        id: 'cti', number: '04', label: 'BUSINESS WEBSITE / THERMAL INSULATION', title: 'CTI Aislamientos',
        site: 'https://cti-aislamientos.com',
        art: { domain: 'cti-aislamientos.com', stack: 'Lovable + Hostinger', label: 'INSTALLATIONS / COMPANY / SERVICES', title: ['CTI Aislamientos.', 'Thermal insulation.'] },
        paragraphs: [
          'A website I created with Lovable for a thermal insulation installation company, published on Hostinger hosting.',
          'I also administered the company’s Google Cloud Platform (GCP) environment for email, storage and some internal processes.',
        ],
        tags: ['Lovable', 'Hostinger', 'Google Cloud Platform'],
      },
      {
        id: 'hue', number: '05', label: 'IOT / IN DEVELOPMENT', title: 'Philips Hue animation editor',
        art: { title: ['LIGHT', 'IN MOTION'] },
        paragraphs: [
          'A visual interface for creating lighting animations and saving them to a user profile, with account registration.',
          'Integrated Philips Hue Bridge to play animations on physical lights, tested on a local network.',
        ],
        tags: ['Nuxt.js', 'JavaScript', 'MySQL', 'Philips Hue Bridge'],
      },
    ],
  },
  skills: {
    heading: { eyebrow: '03 / SKILLS', title: ['My toolkit.'], note: 'Technologies and practices I bring together to develop, deliver and maintain applications.' },
    items: [
      { number: '01', title: 'Frontend', tags: ['JavaScript', 'Vue.js', 'React', 'Nuxt.js', 'Inertia.js'], text: 'Web interfaces, API integration, administration workflows and business logic. Experience with real-time updates and connection management.' },
      { number: '02', title: 'Backend and data', tags: ['Node.js', 'Laravel', 'Java Spring', 'MySQL', 'Cloud Firestore', 'Realtime Database', 'Go (Golang)'], text: 'Full-stack applications, user accounts, content management, data persistence and calculation rules integrated with the frontend. Additional experience with Firebase Cloud Firestore for application data and Firebase Realtime Database for live chat. Go (Golang) in personal projects.' },
      { number: '03', title: 'Delivery and quality', tags: ['Git', 'Docker', 'AWS EC2', 'Google Cloud', 'Sentry', 'LogRocket', 'Unit testing'], text: 'Cloud deployment, production troubleshooting and work in codebases with unit tests and QA validation.' },
      { number: '04', title: 'AI tools', tags: ['Claude Code', 'Codex (ChatGPT)', 'Lovable'], text: 'I am currently integrating Claude Code and Codex into development and testing workflows. I also use Lovable to create landing pages for clients.' },
    ],
  },
  education: {
    heading: { eyebrow: '04 / EDUCATION', title: ['A technical foundation.', 'Continuous learning.'] },
    schoolLocation: 'CETI · Guadalajara, Mexico',
    courses: [
      { date: '2017 — 2020', title: 'Software Development Engineering', note: 'Undergraduate studies · Degree not completed' },
      { date: '2012 — 2016', title: 'Technician in Electricity and Electronics' },
    ],
    languages: [{ name: 'Spanish', level: 'Native' }, { name: 'English', level: 'Proficient' }, { name: 'German', level: 'Basic' }],
  },
  contact: {
    label: '05 / CONTACT', title: ['Let’s build', 'what’s next'], emailLabel: 'Email Marco Castillo',
    downloads: { es: 'CV in Spanish', en: 'CV in English' }, backToTop: 'Back to top',
  },
}

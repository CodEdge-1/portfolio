export type ProjectStatus = "Live" | "In Development";

export interface Project {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  category: string;
  status: ProjectStatus;
  overview: string;
  contribution: string[];
  stack: string[];
  process: string[];
  liveUrl?: string;
  githubUrl?: string;
  size: "primary" | "secondary" | "support";
}

export const projects: Project[] = [
  {
    id: "fredviv",
    index: "01",
    eyebrow: "Primary Full-Stack Project",
    title: "Fredviv Oil & Gas",
    category: "Full-Stack Web Application",
    status: "Live",
    overview:
      "A business website for Fredviv Oil & Gas, built independently from a Figma enterprise UI design through to a deployed, production site. The project pairs a React front end with a dedicated backend service.",
    contribution: [
      "Built the frontend from an enterprise Figma design system using React, TypeScript and Vite",
      "Developed the backend service that powers the site (separate /backend service in the repository)",
      "Integrated REST APIs and real-time updates with Socket.IO",
      "Configured the production deployment and custom domain on Vercel",
      "Tested and debugged across the stack ahead of client handover",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Radix UI",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js backend",
      "Vercel",
    ],
    process: [
      "Requirements from client + Figma UI design",
      "Component-driven frontend build",
      "Backend & API integration",
      "Testing & debugging",
      "Vercel deployment + domain configuration",
    ],
    liveUrl: "https://www.fredvivoil.com/",
    githubUrl: "https://github.com/CodEdge-1/FREDVIV-OIL-GAS-WEBSITE",
    size: "primary",
  },
  {
    id: "fpe",
    index: "02",
    eyebrow: "Recent Client Project",
    title: "Fashion Photo Exhibition — SHADOWS",
    category: "Client Landing Page",
    status: "Live",
    overview:
      "A landing page for FPE 2026, a fashion and creative-arts exhibition. The site covers the event, its history, the 2026 theme, volunteer sign-up, sponsorship information, testimonials and an FAQ, deployed to production for the client.",
    contribution: [
      "Designed and developed the full landing page from client requirements",
      "Built out multi-section content: event overview, history, volunteer teams, sponsorship and FAQ",
      "Wired up WhatsApp contact actions for each volunteer track",
      "Deployed the finished site to Netlify",
    ],
    stack: ["React", "TypeScript", "Netlify"],
    process: [
      "Client requirements gathering",
      "Content & section structure",
      "Frontend build",
      "Netlify deployment",
    ],
    liveUrl: "https://fashion-photo-exhibition2026.netlify.app/",
    size: "secondary",
  },
  {
    id: "exam-help",
    index: "03",
    eyebrow: "Supporting Application Project",
    title: "Exam Help App",
    category: "Cross-Platform Desktop Application",
    status: "In Development",
    overview:
      "A desktop application packaged for both Windows and macOS, with a GitHub Actions workflow set up for continuous integration. The project is an active build rather than a finished, documented release.",
    contribution: [
      "Set up Windows and macOS installer packaging",
      "Configured a GitHub Actions CI workflow for the repository",
    ],
    stack: ["Desktop packaging (Windows & macOS)", "GitHub Actions"],
    process: ["In development"],
    githubUrl: "https://github.com/CodEdge-1/Exam-Help-App",
    size: "support",
  },
];

export interface AndroidProject {
  name: string;
  url: string;
  note: string;
}

export const androidProjects: AndroidProject[] = [
  {
    name: "To_do_App",
    url: "https://github.com/CodEdge-1/To_do_App",
    note: "Android task-management practice app",
  },
  {
    name: "my_project",
    url: "https://github.com/CodEdge-1/my_project",
    note: "Android coursework project",
  },
  {
    name: "weekly_assessment",
    url: "https://github.com/CodEdge-1/weekly_assessment",
    note: "Weekly Android assessment exercise",
  },
  {
    name: "android-class-works",
    url: "https://github.com/CodEdge-1/android-class-works",
    note: "Collected Android class exercises",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"] },
  { label: "Backend", items: ["Node.js", "REST APIs", "Authentication", "API Integration"] },
  { label: "Database", items: ["PostgreSQL", "Neon"] },
  { label: "Mobile", items: ["Kotlin", "Android Studio"] },
  {
    label: "Development & Deployment",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Domain / DNS configuration", "Testing", "Debugging"],
  },
  { label: "AI-Assisted Development", items: ["ChatGPT", "Claude", "Gemini", "Grok"] },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  emphasis?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "CODEGDE TECHNOLOGIES",
    role: "Founder / Technology & Business Solutions",
    period: "2025 — Present",
    points: [
      "Gather client requirements and scope website & digital-solution projects",
      "Develop and deploy client websites end to end",
      "Handle domain and hosting configuration",
      "Manage client communication and project delivery",
      "Troubleshoot and resolve technical issues",
    ],
    emphasis: true,
  },
  {
    company: "ATROIM TECHNOLOGIES",
    role: "Part-Time Mobile Front-End Developer",
    period: "2025 — Present",
    points: [
      "Android application development with Kotlin and Android Studio",
      "Frontend implementation, debugging and testing",
      "Uses AI-assisted development tools as part of the workflow",
    ],
    emphasis: true,
  },
  {
    company: "ENABRITECH LIMITED",
    role: "Tech Support, Graphics/Media Officer",
    period: "December 2024 — June 2025",
    points: [
      "Provided technical support and troubleshooting",
      "Assisted with website-related activities",
      "Investigated network and system problems",
      "Supported graphics and media production",
    ],
  },
  {
    company: "JAD Catering",
    role: "Stock Officer",
    period: "July 2025 — Present",
    points: ["Stock and inventory management"],
  },
];

export const education = [
  {
    title: "Higher National Diploma (HND), Computer Engineering",
    place: "Delta State Polytechnic, Otefe-Oghara",
    year: "2021",
  },
  {
    title: "National Diploma (ND), Computer Engineering",
    place: "Delta State Polytechnic, Otefe-Oghara",
    year: "2014",
  },
  {
    title: "Mobile Application Development Training",
    place: "Delta State Ministry of Science & Technology",
    year: "January 2022",
  },
];

export const buildProcess = [
  {
    index: "01",
    title: "Understand",
    detail: "Gather requirements and understand the problem the project needs to solve.",
  },
  {
    index: "02",
    title: "Design",
    detail: "Work out the structure, flows and user experience before writing code.",
  },
  {
    index: "03",
    title: "Build",
    detail: "Implement the frontend, backend and integrations.",
  },
  {
    index: "04",
    title: "Test",
    detail: "Debug and validate the application against real use.",
  },
  {
    index: "05",
    title: "Deploy",
    detail: "Ship to production and iterate from there.",
  },
];

export const contact = {
  name: "Ogbe Alexander",
  title: "Full-Stack Developer | Web & Mobile Application Developer",
  location: "Warri, Delta State, Nigeria",
  email: "alexanderogbe@gmail.com",
  phone: "+234 810 585 8915",
  github: "https://github.com/CodEdge-1",
  company: "CODEGDE TECHNOLOGIES",
};

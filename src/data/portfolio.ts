import {
  HeroData,
  AboutData,
  SkillCategory,
  ExperienceItem,
  ContactData,
} from "@/types/portfolio";

export const heroData: HeroData = {
  greeting: "$ whoami",
  name: "Zoheir Kabuli",
  title: "DevOps Engineer & Developer",
  tagline:
    "I build and automate cloud infrastructure. Started as a frontend developer, now passionate about making deployments smoother and systems more efficient.",
  terminalCommand: "$ cd ~/work",
  terminalComment: "Building efficient systems",
  ctaButtons: [
    { text: "Get in touch", href: "#contact" },
    {
      text: "View GitHub",
      href: "https://github.com/zoheirkabuli",
      external: true,
    },
    {
      text: "Download Resume",
      href: "/resume.pdf",
      external: true,
    },
  ],
};

export const aboutData: AboutData = {
  paragraphs: [
    "I'm a DevOps engineer based in Sydney who bridges the gap between development and operations. My journey started in frontend development with React and Next.js, which gave me a solid understanding of what developers need from their infrastructure.",
    "Now I focus on building and managing cloud infrastructure on Azure, automating deployments with CI/CD pipelines, and ensuring systems are scalable, secure, and monitored. I enjoy the challenge of making complex systems simple and reliable.",
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "$ ls cloud/",
    tags: ["Azure", "AKS", "Azure Key Vault", "Virtual Networks"],
  },
  {
    title: "$ ls devops/",
    tags: ["Kubernetes", "Docker", "Terraform", "Helm", "GitHub Actions"],
  },
  {
    title: "$ ls monitoring/",
    tags: ["Grafana", "Prometheus", "Logging", "Alerts"],
  },
  {
    title: "$ ls development/",
    tags: ["JavaScript", "Golang", "Python", "Bash", "React", "Next.js"],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    title: "DevOps/Cloud Engineer",
    company: "Plan & Publish",
    date: "April 2024 - Present • Sydney, Australia",
    responsibilities: [
      "Deployed and managed AKS clusters with auto-scaling and network configuration for microservices",
      "Built automated CI/CD pipelines using GitHub Actions for testing, building, and deployment",
      "Created Docker images and Helm charts for seamless deployments across environments",
      "Managed Azure infrastructure including VNets, storage accounts, and AKS using Terraform",
      "Configured Grafana dashboards and alerts for comprehensive cluster monitoring",
      "Implemented secure secret management using Azure Key Vault",
    ],
  },
  {
    title: "IT Assistant",
    company: "Yaama Tech",
    date: "April 2023 - Present • Sydney, Australia",
    responsibilities: [
      "Set up and maintain VPN infrastructure using xray-core for secure remote access",
      "Managed website deployments and server configurations for production environments",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Dijlah IT",
    date: "October 2021 - March 2023 • Qom, Iran",
    responsibilities: [
      "Built responsive web applications using React.js with modern hooks and state management",
      "Developed websites with Next.js framework including server-side rendering",
      "Created responsive user interfaces using HTML5, CSS3, and modern CSS frameworks",
      "Integrated APIs and built interactive features with JavaScript",
      "Improved website performance through code optimization and lazy loading",
    ],
  },
];

export const contactData: ContactData = {
  description:
    "I'm always interested in new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!",
  links: [
    { icon: "📧", text: "zoheyrk@gmail.com", href: "mailto:zoheyrk@gmail.com" },
    {
      icon: "💻",
      text: "GitHub",
      href: "https://github.com/zoheirkabuli",
      external: true,
    },
    {
      icon: "💼",
      text: "LinkedIn",
      href: "https://linkedin.com/in/zoheirkabuli",
      external: true,
    },
    { icon: "📱", text: "+98-933-606-3038", href: "tel:+989336063038" },
  ],
};

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    title: "Infrastructure as Code",
    description:
      "Terraform modules for Azure infrastructure including AKS, networking, and security configurations. Reusable and production-ready.",
    tags: ["Terraform", "Azure", "IaC"],
    links: {
      github: "https://github.com/zoheirkabuli",
    },
  },
  {
    title: "CI/CD Pipeline Templates",
    description:
      "GitHub Actions workflows for automated testing, building, and deployment of containerized applications to Kubernetes.",
    tags: ["GitHub Actions", "Docker", "Kubernetes"],
    links: {
      github: "https://github.com/zoheirkabuli",
    },
  },
  {
    title: "Monitoring Stack",
    description:
      "Complete monitoring solution with Grafana dashboards and Prometheus alerts for Kubernetes clusters and applications.",
    tags: ["Grafana", "Prometheus", "Kubernetes"],
    links: {
      github: "https://github.com/zoheirkabuli",
    },
  },
];

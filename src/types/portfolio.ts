export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  terminalCommand: string;
  terminalComment: string;
  ctaButtons: {
    text: string;
    href: string;
    external?: boolean;
  }[];
}

export interface AboutData {
  paragraphs: string[];
}

export interface SkillCategory {
  title: string;
  tags: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export interface ContactLink {
  icon: string;
  text: string;
  href: string;
  external?: boolean;
}

export interface ContactData {
  description: string;
  links: ContactLink[];
}

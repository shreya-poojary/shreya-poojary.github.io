import type { LucideIcon } from 'lucide-react';

export type ColorVariant =
  | 'cyan' | 'emerald' | 'purple' | 'blue'
  | 'pink' | 'orange' | 'indigo' | 'amber' | 'rose';

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  experience: string;
  specialty: string;
  photoUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  color: ColorVariant;
}

export interface Achievement {
  icon: LucideIcon;
  text: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  icon: LucideIcon;
  color: ColorVariant;
  status: string;
  type: string;
  repo?: string;
  demo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
  icon?: string;
  detail?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: ColorVariant;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  gpa?: string | null;
  location?: string | null;
}

export interface RecognitionEntry {
  title: string;
  org: string | null;
  period: string;
  description: string;
  Icon: LucideIcon;
}

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  color: ColorVariant;
  download?: boolean;
}

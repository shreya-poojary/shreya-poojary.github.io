import {
  Briefcase, Award, TrendingUp, Rocket, Database, Brain,
  Cloud, Server, GitBranch, Container, Activity, Code2, Users,
  Mic, Trophy,
  Mail, Linkedin, Github, MapPin, FileText,
} from 'lucide-react';
import profilePhoto from '../../assets/Portfolio_Image.png';
import type {
  PersonalInfo, Experience, Achievement, Project, Certification,
  SkillCategory, EducationEntry, RecognitionEntry, ContactLink,
} from '../types/portfolio';

// ─── Personal ────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name:       'Shreya Jayaram Poojary',
  title:      'Cloud & DevOps Engineer',
  subtitle:   'Open to Solutions Engineering, DevSecOps, Cloud Architecture & Consulting roles',
  location:   'Chicago, IL',
  experience: '6+ years cloud & DevOps experience',
  specialty:  'Bridging cloud engineering and business value — graduating MS MIS at UIC, May 2026',
  photoUrl:   profilePhoto,
};

// ─── Experience ──────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    title:    'Senior DevOps Engineer',
    company:  'OneAdvanced',
    period:   'Oct 2023 – Dec 2024',
    color:    'cyan',
    highlights: [
      'Architected AWS cloud migration for 3 enterprise applications using CloudFormation & CDK → 40% faster deployments, 20% infrastructure cost reduction',
      'Standardized CI/CD pipelines in Harness & GitHub Actions across multiple teams → 30% fewer release failures, 50% faster deployments',
      'Built monitoring & alerting with CloudWatch, SNS, Lambda, Prometheus, Grafana → 25% less production downtime, 30% lower MTTR',
      'Trusted technical advisor to directors across 4 engineering teams; drove tooling decisions saving 200+ engineering hours per quarter',
    ],
  },
  {
    title:    'DevOps Engineer',
    company:  'OneAdvanced',
    period:   'Jul 2020 – Sep 2023',
    color:    'emerald',
    highlights: [
      'Automated CI/CD for 20+ projects with Jenkins, GitHub Actions & YAML → 40% faster deployments',
      'Led M&A toolchain integration migrating acquired orgs from Azure DevOps to Jira & Aha! with custom data-mapping scripts',
      'Built microservices CI/CD pipelines in GitHub Actions & Harness → halved release cycle time',
      'Automated infrastructure via CloudFormation, EC2, S3, IAM & CDK with Python/Bash → 80% more efficient provisioning',
    ],
  },
  {
    title:    'Associate DevOps Engineer',
    company:  'OneAdvanced',
    period:   'Jul 2018 – Jun 2020',
    color:    'purple',
    highlights: [
      'Architected enterprise toolchain (AWS, Terraform, Harness, GitHub) and SDLC suite (Aha!, Jira, Confluence, SonarQube, Black Duck)',
      'Developed full-stack custom Jira plugins automating KPI reporting from DevOps toolchain data',
      'Engineered Jira lifecycle automations via custom scripts and webhooks for real-time card updates',
      'Authored operational runbooks & incident response documentation',
    ],
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  { icon: Award,     text: '3x SPOT Award Winner',         description: 'Automation, migration, cloud process improvements' },
  { icon: TrendingUp, text: '50% Deployment Speed Increase', description: 'Through standardized CI/CD pipelines' },
  { icon: Briefcase,  text: '20+ Projects Automated',        description: 'Across healthcare technology applications' },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title:       'NLP-Based Multi-Database Query System',
    description: 'AI-enabled operations tool using Amazon Bedrock & FastAPI — an NLP-to-SQL interface for AI-driven log and data querying',
    tech:        ['Amazon Bedrock', 'FastAPI', 'Terraform', 'GitHub Actions'],
    highlights:  [
      'Built natural language to SQL translation interface',
      'Provisioned AWS infrastructure via Terraform',
      'Automated deployments with GitHub Actions CI/CD',
      'Presented at UIC Denodo AI Learning Day & AWS Imagine',
    ],
    icon:   Brain,
    color:  'cyan',
    status: 'Deployed',
    type:   'Personal / Demo',
    repo:   'https://github.com/shreya-poojary',
  },
  {
    title:       'Healthcare Cloud Migration',
    description: 'Enterprise-scale AWS migration for 3 regulated SaaS healthcare applications with full compliance',
    tech:        ['AWS', 'CloudFormation', 'CDK', 'Python'],
    highlights:  [
      '40% improvement in deployment speed',
      '20% reduction in infrastructure costs',
      'Zero-downtime migration strategy',
      'HIPAA-compliant architecture design',
    ],
    icon:   Rocket,
    color:  'emerald',
    status: 'Production',
    type:   'Work Project',
  },
  {
    title:       'Enterprise CI/CD Standardization',
    description: 'Designed and standardized pipelines across multiple teams using Harness and GitHub Actions',
    tech:        ['Harness CI/CD', 'GitHub Actions', 'YAML', 'Bash'],
    highlights:  [
      '30% reduction in release failures',
      '50% faster deployment times',
      'Standardized across 20+ projects',
      'Custom pipeline templates & reusable workflows',
    ],
    icon:   Database,
    color:  'purple',
    status: 'Active',
    type:   'Work Project',
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    name:   'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    date:   'Mar 2026',
    link:   'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon:   'aws',
  },
  {
    name:   'Harness Certified Expert – Continuous Integration Developer',
    issuer: 'Harness',
    date:   'Nov 2025',
    link:   'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon:   'harness',
  },
  {
    name:   'SnowPro Associate: Platform Certification',
    issuer: 'Snowflake',
    date:   '2026',
    link:   'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon:   'snowflake',
  },
  {
    name:   'AWS Academy Graduate — 6 Tracks',
    issuer: 'AWS Academy',
    date:   '2025',
    link:   'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon:   'aws',
    detail: 'Cloud Architecting · Developing · Operations · Security · Data Engineering · ML Foundations',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title:  'Cloud & Infrastructure',
    icon:   Cloud,
    color:  'cyan',
    skills: ['AWS', 'Azure DevOps', 'Terraform', 'CloudFormation', 'AWS CDK'],
  },
  {
    title:  'CI/CD & DevOps',
    icon:   GitBranch,
    color:  'emerald',
    skills: ['Harness CI/CD', 'GitHub Actions', 'Jenkins', 'CodePipeline', 'AWS CodeBuild', 'JFrog', 'SonarQube'],
  },
  {
    title:  'Containers & Orchestration',
    icon:   Container,
    color:  'purple',
    skills: ['Docker', 'Kubernetes', 'EKS', 'Lambda', 'Serverless'],
  },
  {
    title:  'Monitoring & Observability',
    icon:   Activity,
    color:  'orange',
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'NewRelic', 'PagerDuty', 'Opsgenie'],
  },
  {
    title:  'Languages & Scripting',
    icon:   Code2,
    color:  'pink',
    skills: ['Python', 'Bash/Shell', 'Node.js', 'YAML', 'Groovy', 'Java', 'SQL', 'JSON'],
  },
  {
    title:  'Systems & Platforms',
    icon:   Server,
    color:  'blue',
    skills: ['Linux Systems', 'Healthcare Tech', 'AIOps', 'AI-enabled Platforms'],
  },
  {
    title:  'Collaboration & SDLC',
    icon:   Users,
    color:  'indigo',
    skills: ['Jira', 'Confluence', 'Aha!', 'Git', 'Agile/Scrum'],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const educationData: EducationEntry[] = [
  {
    degree:      'M.S., Management Information Systems',
    institution: 'University of Illinois at Chicago',
    period:      'Jan 2025 – May 2026',
    gpa:         '4.0',
    location:    'Chicago, IL',
  },
  {
    degree:      'B.E., Computer Science',
    institution: 'Sahyadri College of Engineering and Management',
    period:      'Aug 2014 – May 2018',
    gpa:         null,
    location:    null,
  },
];

// ─── Recognition ──────────────────────────────────────────────────────────────

export const recognitions: RecognitionEntry[] = [
  {
    title:       '3x SPOT Award Recipient',
    org:         'OneAdvanced',
    period:      '2019–2024',
    description: 'Recognized for automation, data migration, and cloud process improvements',
    Icon:        Award,
  },
  {
    title:       'AWS Imagine Panelist',
    org:         null,
    period:      '2025',
    description: 'Presented architecture decisions and live demo for NLP-to-SQL system built on Amazon Bedrock to a technical audience',
    Icon:        Mic,
  },
  {
    title:       'President, INFORMS Student Chapter at UIC',
    org:         null,
    period:      '2025–2026',
    description: 'Organize technical events and industry panels; coordinate speakers and facilitate discussions between academic researchers and industry practitioners',
    Icon:        Users,
  },
  {
    title:       "Chancellor's Student Service Award",
    org:         'University of Illinois at Chicago',
    period:      '2026',
    description: 'Campus-wide recognition for contributions to the student community and leadership',
    Icon:        Trophy,
  },
];

// ─── Contact Links ─────────────────────────────────────────────────────────────

export const contactLinks: ContactLink[] = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'shreyapoojary147@gmail.com',
    href:  'mailto:shreyapoojary147@gmail.com',
    color: 'cyan',
  },
  {
    icon:     FileText,
    label:    'Resume',
    value:    'Download PDF',
    href:     '/ShreyaJayaram_Poojary_Resume_Portfolio.pdf',
    color:    'amber',
    download: true,
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href:  'https://www.linkedin.com/in/shreyapoojary31',
    color: 'blue',
  },
  {
    icon:  Github,
    label: 'GitHub',
    value: 'Check out my code',
    href:  'https://github.com/shreya-poojary',
    color: 'purple',
  },
  {
    icon:  MapPin,
    label: 'Location',
    value: 'Chicago, IL',
    href:  null,
    color: 'emerald',
  },
];

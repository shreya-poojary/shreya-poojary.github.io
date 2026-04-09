import { Briefcase, Award, TrendingUp, Rocket, Database, Brain } from 'lucide-react';
import profilePhoto from '../../assets/a29a43855bbc5d958764660764e539590155572a.png';

export const personalInfo = {
  name: "Shreya Jayaram Poojary",
  title: "Cloud & DevOps Engineer",
  subtitle: "Open to Solutions Engineering, DevSecOps, Cloud Architecture & Consulting roles",
  location: "Chicago, IL",
  experience: "6+ years cloud & DevOps experience",
  specialty: "Bridging cloud engineering and business value — graduating MS MIS at UIC, May 2026",
  photoUrl: profilePhoto,
};

export const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'OneAdvanced',
    period: 'Oct 2023 – Dec 2024',
    highlights: [
      'Architected AWS cloud migration for 3 enterprise applications using CloudFormation & CDK → 40% faster deployments, 20% infrastructure cost reduction',
      'Standardized CI/CD pipelines in Harness & GitHub Actions across multiple teams → 30% fewer release failures, 50% faster deployments',
      'Built monitoring & alerting with CloudWatch, SNS, Lambda, Prometheus, Grafana → 25% less production downtime, 30% lower MTTR',
      'Trusted technical advisor to directors across 4 engineering teams; drove tooling decisions saving 200+ engineering hours per quarter',
    ],
    color: 'cyan',
  },
  {
    title: 'DevOps Engineer',
    company: 'OneAdvanced',
    period: 'Jul 2020 – Sep 2023',
    highlights: [
      'Automated CI/CD for 20+ projects with Jenkins, GitHub Actions & YAML → 40% faster deployments',
      'Led M&A toolchain integration migrating acquired orgs from Azure DevOps to Jira & Aha! with custom data-mapping scripts',
      'Built microservices CI/CD pipelines in GitHub Actions & Harness → halved release cycle time',
      'Automated infrastructure via CloudFormation, EC2, S3, IAM & CDK with Python/Bash → 80% more efficient provisioning',
    ],
    color: 'emerald',
  },
  {
    title: 'Associate DevOps Engineer',
    company: 'OneAdvanced',
    period: 'Jul 2018 – Jun 2020',
    highlights: [
      'Architected enterprise toolchain (AWS, Terraform, Harness, GitHub) and SDLC suite (Aha!, Jira, Confluence, SonarQube, Black Duck)',
      'Developed full-stack custom Jira plugins automating KPI reporting from DevOps toolchain data',
      'Engineered Jira lifecycle automations via custom scripts and webhooks for real-time card updates',
      'Authored operational runbooks & incident response documentation',
    ],
    color: 'purple',
  },
];

export const achievements = [
  { icon: Award, text: '3x SPOT Award Winner', description: 'Automation, migration, cloud process improvements' },
  { icon: TrendingUp, text: '50% Deployment Speed Increase', description: 'Through standardized CI/CD pipelines' },
  { icon: Briefcase, text: '20+ Projects Automated', description: 'Across healthcare technology applications' },
];

export const projects = [
  {
    title: 'NLP-Based Multi-Database Query System',
    description: 'AI-enabled operations tool using Amazon Bedrock & FastAPI — an NLP-to-SQL interface for AI-driven log and data querying',
    tech: ['Amazon Bedrock', 'FastAPI', 'Terraform', 'GitHub Actions'],
    highlights: [
      'Built natural language to SQL translation interface',
      'Provisioned AWS infrastructure via Terraform',
      'Automated deployments with GitHub Actions CI/CD',
      'Presented at UIC Denodo AI Learning Day & AWS Imagine',
    ],
    icon: Brain,
    color: 'cyan',
    status: 'Deployed',
    type: 'Personal / Demo',
  },
  {
    title: 'Healthcare Cloud Migration',
    description: 'Enterprise-scale AWS migration for 3 regulated SaaS healthcare applications with full compliance',
    tech: ['AWS', 'CloudFormation', 'CDK', 'Python'],
    highlights: [
      '40% improvement in deployment speed',
      '20% reduction in infrastructure costs',
      'Zero-downtime migration strategy',
      'HIPAA-compliant architecture design',
    ],
    icon: Rocket,
    color: 'emerald',
    status: 'Production',
    type: 'Work Project',
  },
  {
    title: 'Enterprise CI/CD Standardization',
    description: 'Designed and standardized pipelines across multiple teams using Harness and GitHub Actions',
    tech: ['Harness CI/CD', 'GitHub Actions', 'YAML', 'Bash'],
    highlights: [
      '30% reduction in release failures',
      '50% faster deployment times',
      'Standardized across 20+ projects',
      'Custom pipeline templates & reusable workflows',
    ],
    icon: Database,
    color: 'purple',
    status: 'Active',
    type: 'Work Project',
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon: 'aws',
  },
  {
    name: 'Harness Certified Expert – Continuous Integration Developer',
    issuer: 'Harness',
    date: 'Nov 2025',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon: 'harness',
  },
  {
    name: 'SnowPro Associate: Platform Certification',
    issuer: 'Snowflake',
    date: '2026',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon: 'snowflake',
  },
  {
    name: 'AWS Academy Graduate — 6 Tracks',
    issuer: 'AWS Academy',
    date: '2025',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges',
    icon: 'aws',
    detail: 'Cloud Architecting · Developing · Operations · Security · Data Engineering · ML Foundations',
  },
];

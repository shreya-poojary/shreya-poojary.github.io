import { Briefcase, Award, TrendingUp, Rocket, Database, Brain } from 'lucide-react';
import profilePhoto from '../../assets/a29a43855bbc5d958764660764e539590155572a.png';
export const personalInfo = {
  name: "Shreya Jayaram Poojary",
  title: "Senior DevOps Engineer",
  location: "Chicago, IL",
  experience: "6+ years automating the cloud",
  specialty: "Making deployments go brrr 🚀",
  photoUrl: profilePhoto,
};

export const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Advanced Business and Healthcare Solutions',
    period: 'Oct 2023 – Dec 2024',
    highlights: [
      'Architected AWS cloud migration for 3 healthcare apps → 40% faster deployments, 20% cost reduction',
      'Designed CI/CD pipelines in Harness & GitHub Actions → 30% fewer release failures, 50% faster deployments',
      'Built monitoring with CloudWatch, Prometheus, Grafana → 25% less downtime',
      'Primary on-call escalation point for 5 healthcare products',
    ],
    color: 'cyan', // Try 'cyan', 'emerald', 'purple', 'pink'
  },
  {
    title: 'DevOps Engineer',
    company: 'Advanced Business and Healthcare Solutions',
    period: 'Jul 2020 – Sep 2023',
    highlights: [
      'Automated CI/CD for 20+ projects → 40% faster deployments',
      'Led M&A toolchain integration from Azure DevOps to Jira/Aha!',
      'Built microservices pipelines → halved release cycle time',
      'Automated infrastructure with CloudFormation → 80% more efficient provisioning',
    ],
    color: 'emerald',
  },
  {
    title: 'Associate DevOps Engineer',
    company: 'Advanced Business and Healthcare Solutions',
    period: 'Jul 2018 – Jun 2020',
    highlights: [
      'Architected enterprise toolchain (AWS, Terraform, Harness, GitHub)',
      'Built custom Jira plugins for KPI reporting',
      'Engineered Jira lifecycle automations with webhooks',
      'Authored operational runbooks & incident response docs',
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
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges#credly',
    icon: 'aws'
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: '2022',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges#credly',
    icon: 'aws'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2021',
    link: 'https://www.credly.com/users/shreya-jayaram-poojary/badges#credly',
    icon: 'aws'
  }
];

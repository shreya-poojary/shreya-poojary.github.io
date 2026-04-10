import { useMemo } from 'react';
import { motion } from 'motion/react';

const KEYWORDS = [
  // DevOps
  'Kubernetes', 'Terraform', 'Helm', 'ArgoCD', 'GitOps', 'Jenkins', 'Harness',
  'CI/CD', 'Docker', 'Ansible', 'Prometheus', 'Grafana', 'EKS', 'Packer', 'Vault',
  // DevSecOps
  'Snyk', 'Trivy', 'SAST', 'DAST', 'SBOM', 'Shift-Left', 'IAM', 'Zero-Trust',
  'Secrets Mgmt', 'Policy-as-Code',
  // SRE
  'SLO', 'SLI', 'Error Budgets', 'Observability', 'Chaos Engineering',
  'Blameless Postmortems', 'Toil Reduction', 'MTTR', 'Runbooks', 'On-Call',
  // Cloud Engineering
  'AWS', 'CloudFormation', 'CDK', 'Lambda', 'VPC', 'Route53', 'EC2', 'S3', 'RDS', 'Bedrock',
  // Solutions Architecture
  'Well-Architected', 'Event-Driven', 'Microservices', 'Serverless', 'Multi-Region',
  'Cost Optimization', 'FinOps', 'Reference Architecture', 'Data Mesh', 'API Gateway',
];

export function HeroBackground() {
  const positionedKeywords = useMemo(() => {
    const COLS = 10;
    const ROWS = 5;

    const shuffled = [...KEYWORDS].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, COLS * ROWS).map((word, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);

      const cellW = 100 / COLS;
      const cellH = 100 / ROWS;
      const baseLeft = col * cellW + cellW / 2;
      const baseTop  = row * cellH + cellH / 2;

      const jitterX = (Math.random() - 0.5) * cellW * 0.7;
      const jitterY = (Math.random() - 0.5) * cellH * 0.7;

      return {
        word,
        left:     `${baseLeft + jitterX}%`,
        top:      `${baseTop  + jitterY}%`,
        duration: 8  + Math.random() * 8,
        delay:    Math.random() * 6,
        opacity:  0.08 + Math.random() * 0.12,
        fontSize: 11  + Math.random() * 5,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {positionedKeywords.map((kw, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-cyan-400 whitespace-nowrap"
          style={{
            left:     kw.left,
            top:      kw.top,
            fontSize: `${kw.fontSize}px`,
            opacity:  kw.opacity,
          }}
          animate={{
            y:       [0, -8, 0, 6, 0],
            x:       [0,  4, 0, -4, 0],
            opacity: [kw.opacity, kw.opacity * 1.6, kw.opacity],
          }}
          transition={{
            duration: kw.duration,
            delay:    kw.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        >
          {kw.word}
        </motion.span>
      ))}
    </div>
  );
}

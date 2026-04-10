import { motion } from 'motion/react';

// ✏️ Add or remove keywords here — positions and animations are computed automatically
export const keywords = [
  'terraform',       'kubernetes',    'docker',         'AWS',
  'CI/CD',           'helm',          'prometheus',     'ansible',
  'bash',            'pipeline',      'GitOps',         'yaml',
  'lambda',          'nginx',         'IaC',            'observability',
  'microservices',   'cloudwatch',    'python',         'DevSecOps',
  'harness',         'sonarqube',     'EKS',            'linux',
  'CDK',             'grafana',       'vault',          'jfrog',
  'SRE',             'jenkins',       'CodePipeline',   'S3',
  'IAM',             'Jira',          'Confluence',     'Terraform',
  'GitHub Actions',  'CloudFormation','Snowflake',      'Bedrock',
];

const COLORS = [
  'text-cyan-400',
  'text-emerald-400',
  'text-purple-400',
  'text-blue-400',
  'text-pink-400',
  'text-orange-400',
  'text-indigo-400',
];

const SIZES = ['text-sm', 'text-base', 'text-sm', 'text-base', 'text-sm'];

// Deterministic spread — golden-ratio shuffle guarantees even distribution
function getProps(i: number, seed: number) {
  const n = (i + seed) % (keywords.length * 7); // large enough to vary
  const phi  = 0.618033988749895;
  const phi2 = 0.381966011250105;
  const left = ((n * phi  * 100) % 88) + 2;
  const top  = ((n * phi2 * 100) % 86) + 4;
  const dxAmt = 25 + (n % 40);
  const dyAmt = 20 + (n % 45);
  const dxDir = n % 2 === 0 ? 1 : -1;
  const dyDir = n % 3 === 0 ? 1 : -1;
  return {
    left,
    top,
    color: COLORS[n % COLORS.length],
    size:  SIZES[n % SIZES.length],
    dur:   10 + (n % 10),
    delay: (n * 0.65) % 6,
    dx:    [0, dxDir * dxAmt, 0] as [number, number, number],
    dy:    [0, dyDir * dyAmt, 0] as [number, number, number],
  };
}

interface Props {
  /** Offset seed — use a different value per section so each looks unique */
  seed?: number;
}

export function FloatingKeywords({ seed = 0 }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {keywords.map((word, i) => {
        const p = getProps(i, seed);
        return (
          <motion.span
            key={`${word}-${i}`}
            className={`absolute font-mono ${p.size} ${p.color}`}
            style={{ left: `${p.left}%`, top: `${p.top}%`, opacity: 0.15 }}
            animate={{ x: p.dx, y: p.dy }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

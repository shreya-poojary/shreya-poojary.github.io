import { motion } from 'motion/react';
import { Cloud, Server, GitBranch, Container, Activity, Code2, Users } from 'lucide-react';
import { FloatingKeywords } from './FloatingKeywords';

const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'cyan',
    skills: ['AWS', 'Azure DevOps', 'Terraform', 'CloudFormation', 'AWS CDK'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: GitBranch,
    color: 'emerald',
    skills: ['Harness CI/CD', 'GitHub Actions', 'Jenkins', 'CodePipeline', 'AWS CodeBuild', 'JFrog', 'SonarQube'],
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    color: 'purple',
    skills: ['Docker', 'Kubernetes', 'EKS', 'Lambda', 'Serverless'],
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    color: 'orange',
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'NewRelic', 'PagerDuty', 'Opsgenie'],
  },
  {
    title: 'Languages & Scripting',
    icon: Code2,
    color: 'pink',
    skills: ['Python', 'Bash/Shell', 'Node.js', 'YAML', 'Groovy', 'Java', 'SQL', 'JSON'],
  },
  {
    title: 'Systems & Platforms',
    icon: Server,
    color: 'blue',
    skills: ['Linux Systems', 'Healthcare Tech', 'AIOps', 'AI-enabled Platforms'],
  },
  {
    title: 'Collaboration & SDLC',
    icon: Users,
    color: 'indigo',
    skills: ['Jira', 'Confluence', 'Aha!', 'Git', 'Agile/Scrum'],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const colorClasses: Record<string, string> = {
  cyan:    'border-cyan-500/30 hover:border-cyan-500/60 group-hover:text-cyan-400',
  emerald: 'border-emerald-500/30 hover:border-emerald-500/60 group-hover:text-emerald-400',
  purple:  'border-purple-500/30 hover:border-purple-500/60 group-hover:text-purple-400',
  orange:  'border-orange-500/30 hover:border-orange-500/60 group-hover:text-orange-400',
  pink:    'border-pink-500/30 hover:border-pink-500/60 group-hover:text-pink-400',
  blue:    'border-blue-500/30 hover:border-blue-500/60 group-hover:text-blue-400',
  indigo:  'border-indigo-500/30 hover:border-indigo-500/60 group-hover:text-indigo-400',
};

const bgColorClasses: Record<string, string> = {
  cyan:    'bg-cyan-500/10',
  emerald: 'bg-emerald-500/10',
  purple:  'bg-purple-500/10',
  orange:  'bg-orange-500/10',
  pink:    'bg-pink-500/10',
  blue:    'bg-blue-500/10',
  indigo:  'bg-indigo-500/10',
};

export function Skills() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <FloatingKeywords seed={7} />
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 font-mono text-sm">
              $ cat tech-stack.yaml
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">
            Tech Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build resilient, scalable infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-6 bg-slate-900/50 backdrop-blur-sm border ${colorClasses[category.color]} rounded-lg transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${bgColorClasses[category.color]} rounded-lg`}>
                    <Icon className={`w-6 h-6 text-slate-400 ${colorClasses[category.color]} transition-colors`} />
                  </div>
                  <div>
                    <h3 className="text-slate-100 text-lg mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded border border-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
              <div className="text-cyan-400 font-mono text-sm">AWS Solutions Architect</div>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
              <div className="text-purple-400 font-mono text-sm">Harness Certified Expert</div>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-blue-400 font-mono text-sm">SnowPro Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

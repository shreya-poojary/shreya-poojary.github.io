import { motion } from 'motion/react';
import { CheckCircle2, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import { colorClasses } from '../lib/colorClasses';
import { fadeInUp } from '../lib/animations';
import { FloatingKeywords } from './FloatingKeywords';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <FloatingKeywords seed={28} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-full text-purple-400 font-mono text-sm">
              $ ls projects/
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">Deployed Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world solutions built for scale, reliability, and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const c = colorClasses[project.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`group flex flex-col p-6 bg-slate-950/50 backdrop-blur-sm border ${c.border} rounded-lg transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${c.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div className={`px-3 py-1 ${c.badge} border rounded-full text-xs font-mono`}>
                    {project.status}
                  </div>
                </div>

                <h3 className={`text-2xl ${c.text} mb-3`}>{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 flex-1">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-slate-400 text-sm flex gap-2 items-start">
                      <CheckCircle2 className={`w-4 h-4 ${c.text} flex-shrink-0 mt-0.5`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

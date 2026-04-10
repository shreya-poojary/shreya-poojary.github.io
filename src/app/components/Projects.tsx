import { motion } from 'motion/react';
import { Presentation, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { FloatingKeywords } from './FloatingKeywords';

const colorClasses: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-500/60',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
  },
};

export function Projects() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <FloatingKeywords seed={28} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
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
            <div className="px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-full text-purple-400 font-mono text-sm">
              $ ls projects/
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">
            Deployed Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world solutions built for scale, reliability, and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`group p-6 bg-slate-950/50 backdrop-blur-sm border ${colorClasses[project.color].border} rounded-lg transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${colorClasses[project.color].bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colorClasses[project.color].text}`} />
                  </div>
                  <div className={`px-3 py-1 ${colorClasses[project.color].badge} border rounded-full text-xs font-mono`}>
                    {project.status}
                  </div>
                </div>

                <h3 className={`text-2xl ${colorClasses[project.color].text} mb-3`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-slate-400 text-sm flex gap-2 items-start">
                      <CheckCircle2 className={`w-4 h-4 ${colorClasses[project.color].text} flex-shrink-0 mt-0.5`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Additional accomplishment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <Presentation className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl text-slate-100 mb-2">
                Leadership & Community
              </h3>
              <p className="text-slate-400 mb-3">
                President, INFORMS Student Chapter at UIC (2025–Present)
              </p>
              <p className="text-slate-500 text-sm">
                Organize technical events and industry panels, coordinating speakers and facilitating discussions between academic researchers and industry practitioners.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

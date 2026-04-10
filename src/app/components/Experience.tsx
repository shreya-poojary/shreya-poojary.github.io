import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { experiences, achievements } from '../data/portfolio';
import { colorClasses } from '../lib/colorClasses';
import { fadeInUp } from '../lib/animations';
import { FloatingKeywords } from './FloatingKeywords';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <FloatingKeywords seed={14} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded-full text-emerald-400 font-mono text-sm">
              $ git log --reverse
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">Journey So Far</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            6+ years of building, breaking, and automating things in the cloud
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, idx) => {
            const c = colorClasses[exp.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative"
              >
                {idx < experiences.length - 1 && (
                  <div className={`absolute left-6 top-16 w-0.5 h-full ${c.glow} ${c.border} border-l-2`} />
                )}

                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${c.glow} border-2 ${c.border} flex items-center justify-center`}
                  >
                    <Briefcase className={`w-5 h-5 ${c.text}`} />
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex-1 pb-8">
                    <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-slate-600 transition-colors">
                      <div className="mb-4">
                        <h3 className={`text-2xl ${c.text} mb-1`}>{exp.title}</h3>
                        <div className="text-slate-300 mb-1">{exp.company}</div>
                        <div className="text-slate-500 text-sm font-mono">{exp.period}</div>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-slate-400 flex gap-2">
                            <span className={`${c.text} flex-shrink-0`}>▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-center hover:border-cyan-500/30 transition-all"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-slate-100 text-lg mb-1">{achievement.text}</div>
                <div className="text-slate-500 text-sm">{achievement.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

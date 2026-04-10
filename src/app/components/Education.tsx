import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { FloatingKeywords } from './FloatingKeywords';
import { educationData } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 relative overflow-hidden border-t border-slate-800/50">
      <FloatingKeywords seed={21} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-amber-500/30 rounded-full text-amber-400 font-mono text-sm">
              $ ./education.sh
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">Education</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic foundation behind the engineering mindset
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative"
            >
              {idx < educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-amber-500/10 border-l-2 border-amber-500/30" />
              )}

              <div className="flex gap-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center"
                >
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex-1 pb-8">
                  <div className="p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-slate-600 transition-colors">
                    <h3 className="text-2xl text-amber-400 mb-1">{edu.degree}</h3>
                    <div className="text-slate-300 mb-1">{edu.institution}</div>
                    <div className="text-slate-500 text-sm font-mono mb-3">{edu.period}</div>
                    {(edu.gpa || edu.location) && (
                      <div className="flex flex-wrap gap-3 mt-2">
                        {edu.gpa && (
                          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-sm font-mono">
                            GPA: {edu.gpa}
                          </span>
                        )}
                        {edu.location && (
                          <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-slate-400 text-sm font-mono">
                            {edu.location}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

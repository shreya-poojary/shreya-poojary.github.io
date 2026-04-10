import { motion } from 'motion/react';
import { FloatingKeywords } from './FloatingKeywords';
import { skillCategories } from '../data/portfolio';
import { colorClasses } from '../lib/colorClasses';
import { staggerContainer, staggerItem } from '../lib/animations';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      <FloatingKeywords seed={7} />
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
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">Tech Arsenal</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build resilient, scalable infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const c = colorClasses[category.color];
            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-6 bg-slate-900/50 backdrop-blur-sm border ${c.skillBorder} rounded-lg transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${c.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 text-slate-400 transition-colors`} />
                  </div>
                  <h3 className="text-slate-100 text-lg mt-2">{category.title}</h3>
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

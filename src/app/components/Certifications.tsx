import { motion } from 'motion/react';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/portfolio';

export function Certifications() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden border-t border-slate-800/50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            <div className="px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded-full text-emerald-400 font-mono text-sm">
              $ cat certifications.json
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Verified technical credentials and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg group hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-4 border border-slate-700/50 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl text-slate-100 mb-2 leading-tight">
                  {cert.name}
                </h3>
                <div className="text-slate-400 font-medium mb-1">
                  {cert.issuer}
                </div>
                <div className="text-slate-500 text-sm font-mono mb-6">
                  Issued: {cert.date}
                </div>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Verify on Credly</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.credly.com/users/shreya-jayaram-poojary/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Full Credly Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
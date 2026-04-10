import { motion } from 'motion/react';
import { Award, Mic, Users, Trophy } from 'lucide-react';
import { FloatingKeywords } from './FloatingKeywords';

const recognitions = [
  {
    title: '3x SPOT Award Recipient',
    org: 'OneAdvanced',
    period: '2019–2024',
    description: 'Recognized for automation, data migration, and cloud process improvements',
    Icon: Award,
  },
  {
    title: 'AWS Imagine Panelist',
    org: null,
    period: '2025',
    description: 'Presented architecture decisions and live demo for NLP-to-SQL system built on Amazon Bedrock to a technical audience',
    Icon: Mic,
  },
  {
    title: 'President, INFORMS Student Chapter at UIC',
    org: null,
    period: '2025–2026',
    description: 'Organize technical events and industry panels; coordinate speakers and facilitate discussions between academic researchers and industry practitioners',
    Icon: Users,
  },
  {
    title: "Chancellor's Student Service Award",
    org: 'University of Illinois at Chicago',
    period: '2026',
    description: 'Campus-wide recognition for contributions to the student community and leadership',
    Icon: Trophy,
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden border-t border-slate-800/50 scroll-mt-20">
      <FloatingKeywords seed={42} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />
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
            <div className="px-4 py-2 bg-slate-800/50 border border-rose-500/30 rounded-full text-rose-400 font-mono text-sm">
              $ ./achievements.sh
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">
            Recognition & Leadership
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Awards, panels, and community impact beyond the codebase
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recognitions.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg group hover:border-rose-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700/50 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-colors">
                    <Icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-slate-100 leading-snug mb-1">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {item.org && (
                        <span className="text-slate-400 text-sm">{item.org}</span>
                      )}
                      {item.org && (
                        <span className="text-slate-600 text-xs">·</span>
                      )}
                      <span className="text-slate-500 text-sm font-mono">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

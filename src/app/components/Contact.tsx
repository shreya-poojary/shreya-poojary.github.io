import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FloatingKeywords } from './FloatingKeywords';
import { contactLinks } from '../data/portfolio';
import { colorClasses } from '../lib/colorClasses';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <FloatingKeywords seed={49} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 font-mono text-sm">
              $ ./reach-out.sh
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Always interested in challenging DevOps problems, cloud architecture discussions, or just geeking out about infrastructure automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            const c = colorClasses[link.color];
            const Component = link.href ? motion.a : motion.div;
            const extraProps = link.href
              ? { href: link.href, ...(link.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' }) }
              : {};

            return (
              <Component
                key={idx}
                {...(extraProps as object)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: link.href ? 1.05 : 1, y: link.href ? -5 : 0 }}
                className={`group p-6 bg-slate-900/50 backdrop-blur-sm border ${c.border} rounded-lg transition-all ${link.href ? 'cursor-pointer' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${c.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-400 text-sm mb-1">{link.label}</div>
                    <div className={`${c.text} flex items-center gap-2`}>
                      <span>{link.value}</span>
                      {link.href && (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>
                </div>
              </Component>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg font-mono text-sm"
        >
          <div className="text-slate-500 mb-2">~/shreya-portfolio $</div>
          <div className="text-slate-400 space-y-1">
            <div><span className="text-emerald-400">Success:</span> Portfolio loaded successfully</div>
            <div><span className="text-cyan-400">Status:</span> Currently pursuing M.S. in MIS at UIC</div>
            <div><span className="text-purple-400">Next:</span> Looking for exciting DevOps opportunities</div>
            <div className="mt-4 text-slate-500">Made with ⚡ and lots of ☕ — Deployed on the cloud, naturally.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

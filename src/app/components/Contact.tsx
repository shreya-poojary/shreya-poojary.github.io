import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, FileText } from 'lucide-react';
import { FloatingKeywords } from './FloatingKeywords';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shreyapoojary147@gmail.com',
    href: 'mailto:shreyapoojary147@gmail.com',
    color: 'cyan',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download PDF',
    href: '/ShreyaJayaram_Poojary_Resume_Portfolio.pdf',
    color: 'amber',
    download: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/shreyapoojary31',
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Check out my code',
    href: 'https://github.com/shreya-poojary',
    color: 'purple',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chicago, IL',
    href: null,
    color: 'emerald',
  },
];

const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500/60',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-500/60',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  amber: {
    border: 'border-amber-500/30 hover:border-amber-500/60',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
};

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
          <h2 className="text-4xl md:text-5xl text-slate-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Always interested in challenging DevOps problems, cloud architecture discussions, or just geeking out about infrastructure automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {links.map((link, idx) => {
            const Icon = link.icon;
            const Component = link.href ? motion.a : motion.div;
            const props = link.href
              ? { href: link.href, ...('download' in link && link.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' }) }
              : {};

            return (
              <Component
                key={idx}
                {...props}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: link.href ? 1.05 : 1, y: link.href ? -5 : 0 }}
                className={`group p-6 bg-slate-900/50 backdrop-blur-sm border ${colorClasses[link.color].border} rounded-lg transition-all ${link.href ? 'cursor-pointer' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${colorClasses[link.color].bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colorClasses[link.color].text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-400 text-sm mb-1">{link.label}</div>
                    <div className={`${colorClasses[link.color].text} flex items-center gap-2`}>
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

        {/* Fun terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg font-mono text-sm"
        >
          <div className="text-slate-500 mb-2">~/shreya-portfolio $</div>
          <div className="text-slate-400 space-y-1">
            <div>
              <span className="text-emerald-400">Success:</span> Portfolio loaded successfully
            </div>
            <div>
              <span className="text-cyan-400">Status:</span> Currently pursuing M.S. in MIS at UIC
            </div>
            <div>
              <span className="text-purple-400">Next:</span> Looking for exciting DevOps opportunities
            </div>
            <div className="mt-4 text-slate-500">
              Made with ⚡ and lots of ☕ — Deployed on the cloud, naturally.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

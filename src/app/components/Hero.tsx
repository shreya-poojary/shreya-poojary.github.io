import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cloud, GitBranch } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '$ whoami';
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setPhase(1), 500);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-sm bg-slate-900/50 border border-slate-700/50 rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-slate-400 text-sm font-mono">
              shreya@devops:~
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base">
            <div className="space-y-4">
              <div className="text-cyan-400">
                {displayText}
                <span className={`inline-block w-2 h-5 ml-1 bg-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col-reverse md:flex-row gap-8 items-start md:items-center mt-6"
                >
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="text-emerald-400 text-3xl md:text-5xl lg:text-6xl mb-2">
                        {personalInfo.name}
                      </div>
                      <div className="text-slate-300 text-lg md:text-xl">
                        {personalInfo.title}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mt-3 flex items-start gap-2"
                      >
                        <span className="w-1 h-4 mt-0.5 bg-cyan-500/60 rounded-full flex-shrink-0" />
                        <span className="text-slate-400 text-sm md:text-base leading-snug">
                          {personalInfo.subtitle}
                        </span>
                      </motion.div>
                    </div>

                    <div className="text-slate-400 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">location:</span>
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">experience:</span>
                        <span>{personalInfo.experience}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 flex-shrink-0">specialty:</span>
                        <span>{personalInfo.specialty}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded text-cyan-400 hover:border-cyan-500/60 transition-colors"
                      >
                        <Cloud className="w-4 h-4" />
                        <span>AWS Certified</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded text-emerald-400 hover:border-emerald-500/60 transition-colors"
                      >
                        <Terminal className="w-4 h-4" />
                        <span>Infrastructure as Code</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded text-purple-400 hover:border-purple-500/60 transition-colors"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span>CI/CD Pipeline Wizard</span>
                      </motion.div>
                    </div>

                    <div className="pt-6">
                      <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 rounded hover:from-cyan-400 hover:to-emerald-400 transition-all transform hover:scale-105"
                      >
                        <span className="font-mono">$ contact --now</span>
                      </a>
                    </div>
                  </div>

                  {/* Profile Photo Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 mx-auto md:mx-0 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative w-full h-full p-1 bg-slate-900 rounded-2xl border border-slate-700/50">
                      <ImageWithFallback
                        src={personalInfo.photoUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-slate-800 border border-slate-700 text-cyan-400 text-xs px-2 py-1 rounded font-mono shadow-lg">
                        status: online
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500 text-sm font-mono"
          >
            ↓ scroll to explore ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

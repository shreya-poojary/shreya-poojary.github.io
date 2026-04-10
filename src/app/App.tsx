import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-900 focus:rounded focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="content" className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Recognition />
        <Contact />
      </main>
    </div>
  );
}

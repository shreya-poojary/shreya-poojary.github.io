import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { CursorFX } from './components/CursorFX';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pt-16">
      <CursorFX />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Recognition />
      <Contact />
    </div>
  );
}

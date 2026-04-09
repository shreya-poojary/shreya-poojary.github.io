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
    <div className="min-h-screen bg-slate-950 text-slate-100">
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

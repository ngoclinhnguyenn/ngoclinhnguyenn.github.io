import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/ui/SectionDivider';

import { GlobalBackground } from './components/ui/GlobalBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent text-text-primary selection:bg-accent-soft selection:text-accent font-sans relative">
        <GlobalBackground />
        <Navbar />

        <main>
          <Hero />

          <div className="relative z-10">
            <SectionDivider />
            <Experience />

            <SectionDivider />
            <Education />

            <SectionDivider />
            <Projects />

            <SectionDivider />
            <About />
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

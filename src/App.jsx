import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/ui/SectionDivider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text-primary selection:bg-accent-soft selection:text-accent font-sans">
        <Navbar />

        <main>
          <Hero />

          <div className="relative z-10 bg-bg">
            <SectionDivider />
            <Experience />

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

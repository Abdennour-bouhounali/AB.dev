import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white font-body selection:bg-accent-blue selection:text-white">
      
      {/* Background Ambient Glow Lights */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <WhyWorkWithMe />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

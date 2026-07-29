import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const pathToIdMap = {
      '/solutions': 'services',
      '/realisations': 'projects',
      '/a-propos': 'about',
      '/contact': 'contact'
    };

    const targetId = pathToIdMap[location.pathname];
    if (targetId) {
      // Add a slight delay to allow the DOM/images to stabilize on direct navigation
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen font-body selection:bg-accent-blue selection:text-white">
      
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


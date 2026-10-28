import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Header } from './components/Header';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { HomeSection } from './sections/HomeSection';
import { WorkSection } from './sections/WorkSection';

const sectionIds = ['home', 'about', 'work', 'contact'];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressSpring = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const progressScale = useTransform(progressSpring, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-paper font-mono text-ink antialiased selection:bg-accent selection:text-paper">
      <motion.div
        style={{ scaleX: progressScale, transformOrigin: 'left' }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-accent"
      />

      <Header
        sectionIds={sectionIds}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className={`transition-all duration-300 ease-out ${mobileMenuOpen ? 'scale-[0.98] blur-sm' : ''}`}>
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

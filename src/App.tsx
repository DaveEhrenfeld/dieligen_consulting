import { HeroVideo } from './components/HeroVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ValueSection } from './components/ValueSection';
import { HowSection } from './components/HowSection';
import { ForWhomSection } from './components/ForWhomSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();
  return (
    <>
      <HeroVideo />
      <Navbar />
      <main className="above-video">
        <Hero />
        <ProblemSection />
        <ValueSection />
        <HowSection />
        <ForWhomSection />
        <AboutSection />
        <PricingSection />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}

export default App;

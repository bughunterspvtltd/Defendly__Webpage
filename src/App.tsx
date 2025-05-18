import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProductPreview from './components/ProductPreview';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
import DefendlyLite from './components/DefendlyLite';
import WhyDefendly from './components/WhyDefendly';
import WhoItsFor from './components/WhoItsFor';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { initAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    initAnimations();
    
    // Update page title
    document.title = "Defendly | AI-Powered Security Risk Platform";
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ProductPreview />
        <Features />
        <CodeDemo />
        <DefendlyLite />
        <WhyDefendly />
        <WhoItsFor />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
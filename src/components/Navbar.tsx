import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Fixed white top navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white py-4">
        <div className="w-[95%] max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary-blue" />
            <span className="text-lg md:text-xl font-sora font-bold text-gray-900">Defendly</span>
          </a>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:block text-gray-900 font-medium hover:text-primary-blue transition-colors">
              LOGIN TO DASHBOARD
            </button>
            <button className="text-sm md:text-base bg-[#0A2540] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#0A2540]/90 transition-all">
              REQUEST NOW
            </button>
            <button 
              className="md:hidden text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable glass navigation menu - Desktop */}
      <div className="hidden md:flex w-[95%] max-w-[1440px] mx-auto justify-center mt-28">
        <nav className="backdrop-blur-md bg-white/10
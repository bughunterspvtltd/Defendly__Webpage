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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top white navbar */}
      <div className="bg-white py-4">
        <div className="w-[95%] max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary-blue" />
            <span className="text-lg md:text-xl font-sora font-bold text-gray-900">Defendly</span>
          </a>
          
          <div className="flex items-center gap-2 md:gap-4">
<button className="hidden md:block text-gray-900 text-sm font-medium hover:text-primary-blue transition-colors">
  LOGIN TO DASHBOARD
</button>
<button className="text-xs md:text-sm bg-[#0A2540] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#0A2540]/90 transition-all">
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

      {/* Glass effect navigation menu - Desktop */}
      <div className="hidden md:flex w-[95%] max-w-[1440px] mx-auto justify-center mt-8">
        <nav className="backdrop-blur-md bg-white/10 rounded-full px-8 py-4">
          <ul className="flex space-x-8">
            {['Home', 'Discover', 'Key Features', 'Why Defendly', "Who It's Built For", 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-[95%] max-w-[1440px] mx-auto mt-2">
          <nav className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden">
            <ul className="flex flex-col">
              {['Home', 'Discover', 'Key Features', 'Why Defendly', "Who It's Built For", 'Contact'].map((item) => (
                <li key={item} className="border-b border-white/10 last:border-b-0">
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-6 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3 border-t border-white/10">
                <button className="w-full text-sm text-white/90 font-medium hover:text-white transition-colors text-left">
                  LOGIN TO DASHBOARD
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
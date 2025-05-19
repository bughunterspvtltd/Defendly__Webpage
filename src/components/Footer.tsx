import { Shield, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-[95%] max-w-[1920px] mx-auto py-8">
      <div className="bg-[linear-gradient(140deg,_#000000_22%,_#00457F_65%)] rounded-[24px] px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary-blue" />
              <span className="text-xl font-sora font-bold text-white">Defendly</span>
            </div>
            <p className="text-text-gray mb-4 max-w-xs">
              Making cybersecurity effortless with AI-powered risk analysis and remediation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-[#008bff] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#008bff] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#008bff] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="fade-in delay-100">
            <h3 className="text-lg font-sora font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Product', 'Key Features', 'Why Defendly', "Who It's For", 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-gray hover:text-[#008bff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="fade-in delay-200">
            <h3 className="text-lg font-sora font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-text-gray mb-2">Ready to secure your digital assets?</p>
            <a href="mailto:hello@bughunters.io" className="text-white hover:text-[#008bff] transition-colors">
              hello@bughunters.io
            </a>
            <div className="mt-6">
              <button
                className="primary-button text-sm py-3"
                onClick={() => window.open('https://www.bughunters.io/contact-us', '_blank', 'noopener,noreferrer')}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/10 my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-gray">
          <p>© 2025 Defendly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
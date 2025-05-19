import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-[95%] max-w-[1920px] mx-auto pt-20">
      <div className="bg-gradient-to-l from-sky-900 to-black rounded-[32px] overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full opacity-40 bg-[radial-gradient(ellipse_33.70%_50.00%_at_50.00%_0.00%,_rgba(255,_255,_255,_0)_68%)]" />
         
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 pt-28 pb-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#fcfcfc]/80">Your</span> AI-Powered<br />Security <span className="text-[#fcfcfc]/80">Risk Platform</span>
            </h1>
            <p className="text-base text-[#fcfcfc] max-w-3xl mx-auto mb-8 leading-relaxed">
              Defendly discovers assets, identifies misconfigurations, and transforms raw scan data into prioritized, 
              actionable risk metrics. Get instant visibility, threat scoring, and smart remediation — all mapped to your 
              business-critical assets.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="primary-button">
                Try for free
              </button>
              <button className="secondary-button">
                Get a demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { stat: '78 %', label: 'OF WEB APPLICATIONS', desc: 'Scanned help to ease out critical security misconfiguration' },
                { stat: '65%', label: 'FASTER REMEDIATION', desc: 'Achieved with AI-powered fix suggestions' },
                { stat: '3 x', label: 'VISIBILITY IMPROVEMENT', desc: 'Asset inventory post defendly\'s asset discovery implementation' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl font-sora font-bold mb-2">{item.stat}</h3>
                  <p className="text-sm font-semibold text-white mb-2">{item.label}</p>
                  <p className="text-xs text-[#fcfcfc]/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 w-full bg-[linear-gradient(to_top,_black_40%,_#00457F_100%)] rounded-t-[130px] blur-[2px] overflow-hidden">
  <div className="w-full h-6 mt-0 bg-white/15 blur-md" />
</div>



      </div>
    </section>
  );
};

export default Hero;
import { Users, Code, Terminal, Shield, UserCog, Briefcase } from 'lucide-react';

const WhoItsFor = () => {
  const personas = [
    {
      icon: <Users className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "CISOs & Security Leaders",
      description: "Get executive-level visibility and metrics for communicating risk to the board."
    },
    {
      icon: <Code className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "AppSec & Security Engineers",
      description: "Optimize scanning and remediation workflows with actionable findings."
    },
    {
      icon: <Terminal className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "DevSecOps Teams",
      description: "Fix security issues earlier with integration into your CI/CD pipeline."
    },
    {
      icon: <Shield className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "Security Consultants & MSSPs",
      description: "Scale security assessments and deliver more value to your clients."
    },
    {
      icon: <UserCog className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "Product Owners & CTOs",
      description: "Understand security implications of product decisions and technology choices."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "Security Consultants & Auditors",
      description: "Streamline compliance audits with automated evidence collection and reporting."
    }
  ];

  return (
    <section id="who-it's-for" className="w-[95%] max-w-[1920px] mx-auto">
      <div style={{ background: 'linear-gradient(18deg, #000000  36%, #000000 65%)' }} className="rounded-b-[24px] px-8 py-16">       
        <h2 className="section-title text-white">Who It's Built For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl p-3 w-fit mb-6">
                {persona.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3 text-white">{persona.title}</h3>
              <p className="text-text-gray">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
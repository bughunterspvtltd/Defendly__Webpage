import { Search, MessageSquare, BarChart3, AlertTriangle, Brain, Layers } from 'lucide-react';

const WhyDefendly = () => {
  const reasons = [
    {
      icon: <Search className="w-8 h-8 text-accent-purple" />,
      title: "Go Beyond Vulnerability Lists",
      description: "We don't just identify threats - we prioritize them based on exploitability and business impact."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-purple" />,
      title: "Ask in Natural Language",
      description: "Query your security data like you'd ask a colleague. Get plain-English answers to complex security questions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent-purple" />,
      title: "Measure Security Posture",
      description: "Track your security standing with quantifiable metrics that evolve as your environment changes."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-accent-purple" />,
      title: "Instant Misconfiguration Detection",
      description: "Find misconfigurations across cloud services, containers, and infrastructure before attackers do."
    },
    {
      icon: <Brain className="w-8 h-8 text-accent-purple" />,
      title: "Smarter Remediation with AI",
      description: "Our AI analyzes findings and recommends the most effective fixes based on your specific environment."
    },
    {
      icon: <Layers className="w-8 h-8 text-accent-purple" />,
      title: "Seamless Integration",
      description: "Connect with your existing security tools and DevOps pipeline without disrupting workflows."
    }
  ];

  return (
    <section id="why-defendly" className="w-[95%] max-w-[1440px] mx-auto">
      <div className="bg-black px-8 py-16">
        <h2 className="section-title text-white">Why Defendly?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 rounded-xl p-3 w-fit mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3 text-white">{reason.title}</h3>
              <p className="text-text-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDefendly;
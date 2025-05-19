import { ShieldCheck, TrendingUp, Zap, LineChart, Cpu, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors" />,
      title: "Cyber Hygiene Score",
      description: "Get a clear view ranking factors for both internal and external attack surfaces across your digital assets."
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Asset Risk Rating",
      description: "Understand which assets pose the highest risk with automatically generated severity ratings based on AI analysis."
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Attack Surface Index",
      description: "Know your exposure at a glance with centralized visibility across all potential attack vectors and vulnerabilities."
    },
    {
      icon: <LineChart className="feature-icon" />,
      title: "Threat Intelligence Score",
      description: "Stay ahead of emerging threats with real-time intelligence from our global security network and partner feeds."
    },
    {
      icon: <Cpu className="feature-icon" />,
      title: "AI-Powered Remediation Suggestions",
      description: "Receive prioritized, actionable fixes and recommendations from our advanced AI to efficiently address vulnerabilities."
    },
    {
      icon: <CheckCircle className="feature-icon" />,
      title: "Compliance Readiness Mapping",
      description: "Map your tech stack against SOC 2, GDPR, and other frameworks to see compliance gaps and recommendations."
    }
  ];

  return (
    <section id="key-features" className="w-[95%] max-w-[1920px] mx-auto">
      <div className="bg-black px-8 py-16">
        <h2 className="section-title text-white">Key Features That Set Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className=" rounded-xl p-3 w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
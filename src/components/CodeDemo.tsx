import { Shield, Star, FileText, Download } from 'lucide-react';

const CodeDemo = () => {
  return (
    <section className="w-[95%] max-w-[1920px] mx-auto">
      <div className="bg-black px-8 py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-12">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400">Chrome Extension</span>
            </div>

            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4 text-white">
                Defendly Lite <br></br> Free & Open Source Chrome Extension
              </h2>
              <p className="text-text-gray text-lg">
                A lightweight, browser-based version of Defendly that brings instant security checks to your fingertips — no login required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in visible group">
                <Shield className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors mb-4" />
                <h3 className="text-xl font-sora font-semibold mb-3 text-white">
                  Instant Website Security Grades
                </h3>
                <p className="text-text-gray">
                  Get a quick security score for any website you visit based on misconfigurations, missing headers, and exposure risks.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in delay-100 group">
                <Star className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors mb-4" />
                <h3 className="text-xl font-sora font-semibold mb-3 text-white">
                  One-Click Vulnerability Scan
                </h3>
                <p className="text-text-gray">
                  Scan websites in real-time from your browser — perfect for quick assessments without logging into the main platform.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in delay-200 group">
                <FileText className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors mb-4" />
                <h3 className="text-xl font-sora font-semibold mb-3 text-white">
                  Exportable Security Reports
                </h3>
                <p className="text-text-gray">
                  Download detailed scan results in a single click for further review or documentation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-in delay-300 group">
                <Download className="w-8 h-8 text-white group-hover:text-[#008bff] transition-colors mb-4" />
                <h3 className="text-xl font-sora font-semibold mb-3 text-white">
                  Completely Free & Open Source
                </h3>
                <p className="text-text-gray">
                  Use it without restrictions. No sign-up. No tracking. Fully transparent and community-friendly.
                </p>
              </div>
            </div>
            <div className="text-center fade-in">
              <a 
                href="https://chromewebstore.google.com/detail/defendly/aefmpomeojdaegmpddinpfifebnccmgi?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0A2540] text-white px-6 py-3 rounded-full font-medium hover:bg-[#00457F] transition-all shadow-md hover:shadow-xl"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                  alt="Chrome Icon"
                  className="w-5 h-5 mr-2"
                />
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
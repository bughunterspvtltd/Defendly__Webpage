const CallToAction = () => {
  return (
    <section className="w-[95%] max-w-[1440px] mx-auto py-8">
      <div className="relative overflow-hidden rounded-[24px] px-8 py-16 bg-gradient-to-r from-black via-[#001d3d] to-[#00457F]">
  {/* Background decorative elements */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

  {/* Techy Wavy Line SVG */}
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-10"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill="url(#gradient)"
      fillOpacity="1"
      d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,112C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#00A8E8" />
      </linearGradient>
    </defs>
  </svg>
</div>
    </div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
<h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-white italic">
  Defendly doesn't just scan —{" "}
  <span className="text-[20px] font-normal italic">
    it tells you where to focus, why it matters, and how to fix it.
  </span>
</h2>

            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button className="primary-button flex items-center justify-center gap-2">
                <span>Try It Free</span>
              </button>
              <button className="secondary-button flex items-center justify-center gap-2">
                <span>Talk to Sales</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
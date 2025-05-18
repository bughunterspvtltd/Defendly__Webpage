const CallToAction = () => {
  return (
    <section className="w-[95%] max-w-[1440px] mx-auto py-8">
      <div className="bg-hero-gradient rounded-[24px] px-8 py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
<h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-white">
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
const CallToAction = () => {
  return (
    <section className="w-[95%] max-w-[14920px] mx-auto pt-8">
      <div className="relative overflow-hidden rounded-[24px] px-8 py-16 bg-[linear-gradient(140deg,_#000000_22%,_#00457F_65%)]">

  {/* Background decorative elements */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>



        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
<h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-white italic">
  Defendly doesn't just scan —{" "}
  <span className="text-[20px] font-normal italic">
    it tells you where to focus, why it matters, and how to fix it.
  </span>
</h2>

            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
                  className="primary-button flex items-center justify-center gap-2"
                  onClick={() => window.open('https://www.bughunters.io/contact-us', '_blank', 'noopener,noreferrer')}
                >
                  <span>Try It Free</span>
                </button>

              <button
                className="secondary-button flex items-center justify-center gap-2"
                onClick={() => window.open('https://www.bughunters.io/contact-us', '_blank', 'noopener,noreferrer')}
              >
                <span>Get Demo</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
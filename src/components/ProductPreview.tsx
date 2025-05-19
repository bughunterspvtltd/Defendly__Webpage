import { Shield } from 'lucide-react';

const ProductPreview = () => {
  return (
    <section className="w-[95%] max-w-[1920px] mx-auto">
      <div style={{ background: 'linear-gradient(18deg, #000000 26%, #1A2D52  65%)' }} className="rounded-t-[24px] px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title text-white">See Defendly AI Assistant in Action</h2>
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-glow transition-all duration-500 fade-in bg-white/5 backdrop-blur-sm">
            {/* Browser mockup header */}
            <div className="bg-[#0A2540] py-3 px-4 flex items-center border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-white/10 backdrop-blur-sm rounded-full text-xs px-4 py-1 text-gray-300">
                defendly_scan.json
              </div>
            </div>
            
            {/* Product video */}
            <div className="w-full h-auto aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                muted
                autoPlay
                loop
              >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <p className="mt-8 text-text-gray max-w-2xl mx-auto fade-in">
            Our intuitive interface makes it easy to visualize security risks and take action on AI-powered recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
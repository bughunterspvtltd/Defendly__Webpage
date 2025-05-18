const TrustedBy = () => {
  const logos = [
    // { name: 'Brand1', url: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' },
    { name: 'Brand2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' },
    { name: 'Brand3', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' },
    { name: 'Brand4', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { name: 'Brand5', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png' },
    { name: 'Brand6', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-padding">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 fade-in">TRUSTED BY INDUSTRY LEADERS</h3>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-accent-purple rounded-full mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
const cardInfo = [
  {
    img: "./Images/jackma.png",
    title: "Co-Founder, AliBaba",
    quote: "Players should never fight. A real businessman or entrepreneur has no enemies. Once he understands this, the sky's the limit.",
    author: "JACK MA"
  },
  {
    img: "./Images/stevejobs.png",
    title: "Co-Founder, Apple",
    quote: "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
    author: "STEVE JOBS"
  },
  {
    img: "./Images/larrypage.png",
    title: "Co-Founder, Google",
    quote: "I think it is often easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition.",
    author: "LARRY PAGE"
  }
];

export default function Banner() {
  return (
    <section className="py-8 my-8 relative">
      {/* Subtle gray background with geometric pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-95 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Text section on the left */}
          <div className="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Featured Insights</h2>
            <p className="text-gray-600">
              Discover our curated collection of trending articles and popular reads.
            </p>
          </div>
          
          {/* Cards section */}
          <div className="w-full lg:w-3/4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cardInfo.map((card, index) => (
                <div 
                  key={index} 
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-full flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-gray-800/20 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200">
                    {/* Image with hover effect */}
                    <div className="w-full flex justify-center mb-4">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="rounded-full h-20 w-20 object-cover border-2 border-indigo-600 shadow-md transition-all duration-300"
                      />
                    </div>
                    
                    {/* Text content aligned left */}
                    <div className="text-left">
                      <h5 className="text-gray-800 font-semibold text-sm mb-2">
                        {card.title}
                      </h5>
                      <p className="text-gray-600 italic text-xs mb-3">
                        "{card.quote}"
                      </p>
                      <p className="text-gray-500 text-xs">
                        — {card.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
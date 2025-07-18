import { useState } from 'react';

const categories = [
  { id: 1, 
    image: "./Images/automobile.jpg", 
    title: "Automobile",
    subtext: "Driving Innovation Forward - The Future of Mobility!" 
  },
  { id: 2
    , image: "./Images/entertainment.jpg"
    , title: "Arts & Entertainment"
    ,subtext: "Where Creativity Meets Technology - The Future of Entertainment!" 
  },
  { id: 3, 
    image: "./Images/appliances.jpg"
    ,title: "Home Appliances"
    ,subtext: "Smarter Homes, Simpler Lives - Next-Gen Appliances!" 
  },
  { id: 4
    , image: "./Images/electronics.jpg"
    , title: "Electronics"
    ,subtext: "Smaller, Faster, Smarter - The Evolution of Electronics!" 
  },
  { id: 5
    , image: "./Images/education.jpg"
    , title: "Education"
    ,subtext: "Smart Learning, Brighter Futures - EdTech Revolution!" 
  },
  { id: 6
    , image: "./Images/selfcare.jpg"
    , title: "Personal Care"
    ,subtext: "Wellness Reinvented - Self-Care for the Modern World!" 
  },
  { id: 7
    , image: "./Images/medical.jpg"
    , title: "Medical"
    ,subtext: "Innovate to Save Lives - Next-Gen Medical Solutions!" 
  },
  { id: 8
    , image: "Images/food.jpg"
    , title: "Food & Beverages"
    ,subtext: "From Farm to Future - Disrupting the Food Industry!" 
  },
  { id: 9
    , image: "./Images/sports.jpg"
    , title: "Sports"
    ,subtext: "Game-Changing Innovations - Elevate Performance!" 
  }
];


export default function Cards() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 6);

  return (
    <section className="min-h animate-fade-in-screen mt-10 max-w-7xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="mb-12 text-left">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl font-bold italic text-[#002748] relative z-10">
            Find Your Niche:
          </h2>
        </div>
        <p className="mt-4 italic  text-gray-600 text-lg max-w-2xl">
          Explore our diverse range of product categories to find what inspires you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col items-center justify-center p-5 text-center">
              <h3 className="text-white text-2xl lg:text-3xl font-bold drop-shadow-lg px-4">
                {category.title}
              </h3>
              <hr className="w-16 border-yellow-400 border-2 my-3 opacity-90" />
              <p className="text-white/80 italic text-sm md:text-base">
                "{category.subtext}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {categories.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-md cursor-pointer"
          >
            {showAllCategories ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}
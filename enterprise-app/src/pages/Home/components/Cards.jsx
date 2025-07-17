import { useState } from 'react';

const categories = [
  { id: 1, image: "./Images/automobile.jpg", title: "Automobile" },
  { id: 2, image: "./Images/entertainment.jpg", title: "Arts & Entertainment" },
  { id: 3, image: "./Images/appliances.jpg", title: "Home Appliances" },
  { id: 4, image: "./Images/electronics.jpg", title: "Electronics" },
  { id: 5, image: "./Images/education.jpg", title: "Education" },
  { id: 6, image: "./Images/selfcare.jpg", title: "Personal Care" },
  { id: 7, image: "./Images/medical.jpg", title: "Medical" },
  { id: 8, image: "Images/food.jpg", title: "Food & Beverages" },
  { id: 9, image: "./Images/sports.jpg", title: "Sports" }
];


export default function Cards() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 6);
  
  return (
    <section className="min-h-screen font-literata max-w-7xl mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-5xl font-bold text-blue-950 text-center mb-12">Browse Categories</h2>
      
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
            </div>
          </div>
        ))}
      </div>

      {categories.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-md cursor-pointer" /* Added cursor-pointer */
          >
            {showAllCategories ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}
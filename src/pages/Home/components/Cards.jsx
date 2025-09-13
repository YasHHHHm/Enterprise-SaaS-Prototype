import { useState } from "react";
import images from "../../../assets/images/images";

const categories = [
  {
    id: 1,
    image: images.automobile,
    title: "Automobile",
    subtext: "Driving Innovation Forward - The Future of Mobility!",
  },
  {
    id: 2,
    image: images.entertainment,
    title: "Arts & Entertainment",
    subtext: "Where Creativity Meets Technology - The Future of Entertainment!",
  },
  {
    id: 3,
    image: images.appliances,
    title: "Home Appliances",
    subtext: "Smarter Homes, Simpler Lives - Next-Gen Appliances!",
  },
  {
    id: 4,
    image: images.electronics,
    title: "Electronics",
    subtext: "Smaller, Faster, Smarter - The Evolution of Electronics!",
  },
  {
    id: 5,
    image: images.education,
    title: "Education",
    subtext: "Smart Learning, Brighter Futures - EdTech Revolution!",
  },
  {
    id: 6,
    image: images.personalcare,
    title: "Personal Care",
    subtext: "Wellness Reinvented - Self-Care for the Modern World!",
  },
  {
    id: 7,
    image: images.medical,
    title: "Medical",
    subtext: "Innovate to Save Lives - Next-Gen Medical Solutions!",
  },
  {
    id: 8,
    image: images.food,
    title: "Food & Beverages",
    subtext: "From Farm to Future - Disrupting the Food Industry!",
  },
  {
    id: 9,
    image: images.sports,
    title: "Sports",
    subtext: "Game-Changing Innovations - Elevate Performance!",
  },
];

export default function Cards() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 6);

  return (
    <section className="min-h animate-fade-in-screen mt-10 max-w-7xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="mb-12 text-left">
        <div className="inline-block relative">
          <h2 className="text-4xl cursor-default md:text-5xl font-bold  text-[#002748] relative z-10">
            Find Your Niche:
          </h2>
        </div>
        <p className="mt-4 italic cursor-default text-gray-600 text-lg max-w-2xl">
          Explore our diverse range of product categories to find what inspires
          you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {visibleCategories.map((category) => (
          <div
  key={category.id}
  className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
>
  {/* Image */}
  <img
  src={category.image}
  alt={category.title}
  loading="lazy"          // ✅ native lazy loading
  decoding="async"        // ✅ decode off main thread when possible
  className="w-full h-full object-cover opacity-90 group-hover:opacity-50 transition-opacity duration-300"
/>

  {/* --- CORNER: triangle + arrow + Discover --- */}
  {/* Triangle (top-right). White -> indigo-600 on hover */}
  <span
    className="
      pointer-events-none absolute right-0 top-0 z-20
      w-0 h-0
      border-t-[52px] border-l-[52px]
      border-t-white border-l-transparent
      transition-all duration-300
      group-hover:border-t-indigo-600
      group-hover:border-l-transparent
      group-hover:border-t-[68px] group-hover:border-l-[68px]
    "
  />

  {/* Arrow (tilted toward top-right). White -> indigo-600 on hover */}
  <span
    className="
      pointer-events-none absolute z-30
      right-3 top-3
      transition-all duration-300
      opacity-90 group-hover:opacity-100
      text-white group-hover:text-white
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    "
    aria-hidden="true"
  >
    {/* NE arrow (stroke uses currentColor) */}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>

  {/* 'Discover' label (unchanged behavior) */}
  <span
    className="
      absolute z-20 top-3 right-[76px]
      text-indigo-600 text-lg font-bold tracking-wide
      opacity-0 translate-x-2
      transition-all duration-300
      group-hover:opacity-100 group-hover:translate-x-0
    "
  >
    Discover
  </span>

  {/* Overlay content (your original) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col items-center justify-center p-5 text-center z-10">
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
            {showAllCategories ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

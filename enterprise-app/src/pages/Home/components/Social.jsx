"use client"

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { 
  EyeIcon,
  ChatBubbleLeftIcon,
  ArrowUpTrayIcon,
  HeartIcon,
  BookmarkIcon,
  ShareIcon
} from "@heroicons/react/24/outline";

const cards = [
  {
    id: 1,
    img: "Images/pexels-cottonbro-4842573 1.png",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
    views: 200,
    comments: 200,
    shares: 200,
    likes: 200,
    vectorIcon: "Images/fa-solid_praying-hands.png",
    profileImages: [
      "Images/Ellipse 10.png",
      "Images/Ellipse 4.png",
      "Images/Ellipse 8.png"
    ]
  },
  {
    id: 1,
    img: "Images/pexels-cottonbro-4842573 1.png",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
    views: 200,
    comments: 200,
    shares: 200,
    likes: 200,
    vectorIcon: "Images/fa-solid_praying-hands.png",
    profileImages: [
      "Images/Ellipse 10.png",
      "Images/Ellipse 4.png",
      "Images/Ellipse 8.png"
    ]
  },
  {
    id: 1,
    img: "Images/pexels-cottonbro-4842573 1.png",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
    views: 200,
    comments: 200,
    shares: 200,
    likes: 200,
    vectorIcon: "Images/fa-solid_praying-hands.png",
    profileImages: [
      "Images/Ellipse 10.png",
      "Images/Ellipse 4.png",
      "Images/Ellipse 8.png"
    ]
  },
  {
    id: 1,
    img: "Images/pexels-cottonbro-4842573 1.png",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
    views: 200,
    comments: 200,
    shares: 200,
    likes: 200,
    vectorIcon: "Images/fa-solid_praying-hands.png",
    profileImages: [
      "Images/Ellipse 10.png",
      "Images/Ellipse 4.png",
      "Images/Ellipse 8.png"
    ]
  },
];

export default function SocialScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="bg-indigo-600 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 font-literal">Discover Our New Features</h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our latest offerings designed to enhance your experience and 
            provide you with cutting-edge solutions for your needs.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Content - Scrolling Cards */}
        <div 
          ref={containerRef} 
          className="relative h-[600px] overflow-hidden"
        >
          <motion.div 
            className="space-y-8 absolute top-0 w-full"
            style={{ y: scrollYProgress }}
          >
            {cards.map((card, index) => (
              <motion.div 
                key={`${card.id}-${index}`}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  className="w-full h-64 object-cover" 
                  src={card.img} 
                  alt="Business" 
                />
                
                <div className="relative w-[90%] mx-auto bg-white rounded-md shadow-lg px-6 py-5 -mt-10 mb-6">
                  {/* Vector Icon */}
                  <div className="absolute -top-5 left-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md p-2">
                    <img 
                      className="w-full h-4 object-contain" 
                      src={card.vectorIcon} 
                      alt="Vector" 
                    />
                  </div>
                  
                  {/* Interaction Icons */}
                  <div className="flex justify-between items-center mb-5 mt-2">
                    <div className="flex space-x-4 text-gray-500">
                      <span className="flex items-center space-x-1">
                        <EyeIcon className="h-4 w-4" />
                        <span className="text-xs">{card.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ChatBubbleLeftIcon className="h-4 w-4" />
                        <span className="text-xs">{card.comments}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ArrowUpTrayIcon className="h-4 w-4" />
                        <span className="text-xs">{card.shares}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <HeartIcon className="h-4 w-4" />
                        <span className="text-xs">{card.likes}</span>
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                        <BookmarkIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                        <ShareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <h5 className="text-left font-medium text-gray-700 font-literal text-sm mb-3">
                    {card.title}
                  </h5>
                  <p className="text-left text-gray-500 text-xs mb-6 line-clamp-2">
                    {card.text}
                  </p>
                  
                  {/* Profile Images */}
                  <div className="flex items-center -space-x-3 pl-2 mb-10">
                    {card.profileImages.map((profileImg, i) => (
                      <img 
                        key={i} 
                        src={profileImg} 
                        alt={`Profile ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white" 
                      />
                    ))}
                  </div>
                  
                  {/* Discover Button */}
                  <div className="text-right -mt-8">
                    <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md text-sm font-literal hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                      Discover Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  EyeIcon,
  ChatBubbleLeftIcon,
  ArrowUpTrayIcon,
  HeartIcon,
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import icons from "../../../assets/icons/icons";
import images from "../../../assets/images/images";

const profileImages = [icons.user1, icons.user2, icons.user3];
const cards = [
  {
    id: 1,
    img: images.social1,
    title: "How TechCorp Pivoted to AI and Increased Revenue by 300%",
    text: "In this exclusive case study, we examine TechCorp's bold decision to shift their entire product line to AI-powered solutions. Learn how their leadership team identified the market shift, overcame internal resistance, and executed a flawless transition that positioned them as industry leaders.",
    views: 1243,
    comments: 86,
    shares: 215,
    likes: 542,
  },
  {
    id: 2,
    img: images.social2,
    title:
      "The Green Revolution: How EcoStart Disrupted Traditional Manufacturing",
    text: "EcoStart's sustainable manufacturing process didn't just reduce their carbon footprint - it increased their profit margins by 45%. Discover the innovative techniques and partnerships that made this possible, and how you can apply these principles to your business.",
    views: 987,
    comments: 64,
    shares: 178,
    likes: 421,
  },
  {
    id: 3,
    img: images.social3,
    title: "From Bankruptcy to Market Leader: The Phoenix Corp Turnaround",
    text: "When Phoenix Corp filed for Chapter 11, most wrote them off. Two years later, they dominate their sector. This detailed analysis reveals the 5 key decisions that saved the company and the leadership principles that drove their remarkable recovery.",
    views: 1562,
    comments: 112,
    shares: 298,
    likes: 723,
  },
  {
    id: 4,
    img: images.social4,
    title: "The Silent Disruptor: How FemTech Startups Are Changing Healthcare",
    text: "While mainstream media focuses on flashy tech unicorns, FemTech startups are quietly revolutionizing healthcare. We analyze the market forces, demographic shifts, and product innovations driving this $50B sector and highlight the key players to watch.",
    views: 845,
    comments: 73,
    shares: 164,
    likes: 387,
  },
  {
    id: 5,
    img: images.social5,
    title: "The Silent Disruptor: How FemTech Startups Are Changing Healthcare (Part 2)",
    text: "More insights and follow-ups on the rapid FemTech evolution and new case studies from global teams.",
    views: 412,
    comments: 22,
    shares: 58,
    likes: 199,
  },
];

export default function BusinessBreakthroughsSection() {
  const cardsContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (cardsContainerRef.current) {
          cardsContainerRef.current.style.height = "auto";
          cardsContainerRef.current.style.overflow = "visible";
        }
      } else {
        if (cardsContainerRef.current) {
          cardsContainerRef.current.style.height = "80vh";
          cardsContainerRef.current.style.overflow = "auto";
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="animate-fade-in overflow-x-hidden bg-indigo-600 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Enhanced Text Section */}
        <div className="text-white lg:sticky lg:top-20 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 font-literal">
              Business Frontiers: This Month's Defining Moments
            </h1>
            <h2 className="text-2xl text-cool-gray-200 font-semibold mb-6 opacity-90">
              From billion-dollar pivots to grassroots market shifts - witness
              the strategies reshaping industries
            </h2>
            <p className="text-lg text-cool-gray-200 mb-8">
              Explore unfiltered case studies of leadership decisions that
              created measurable impact across global markets and local
              ecosystems.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">
              Behind Every Business Breakthrough is
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex italic items-start">
                <span className="mr-2">•</span>
                <span>"Real-world strategy analysis"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"Crisis-to-opportunity case studies"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"Leadership decision frameworks"</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex-1">
              Discover Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors flex-1">
              View All Case Studies
            </button>
          </div>
        </div>

        {/* Cards Section with Fixed Image Display */}
        <div ref={cardsContainerRef} style={{ position: "relative" }} className="lg:h-[80vh] lg:overflow-y-auto overflow-x-hidden no-scrollbar lg:pr-4">

          <motion.div className="space-y-8 w-full" style={{ y }}>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={card.img}
                    alt={card.title}
                  />
                </div>

                <div className="relative w-[90%] mx-auto bg-white rounded-md shadow-lg px-6 py-5 -mt-10 mb-6">
                  <div className="absolute -top-5 left-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md p-2">
                    <img
                      className="w-full h-4 object-contain"
                      src={icons.socialLogo}
                      alt="Vector"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-5 mt-2">
                    <div className="flex space-x-4 text-gray-500">
                      <span className="flex items-center space-x-1">
                        <EyeIcon className="h-4 w-4 hover:text-red-500 cursor-pointer" />
                        <span className="text-xs">
                          {card.views.toLocaleString()}
                        </span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ChatBubbleLeftIcon className="h-4 hover:text-red-500 w-4 cursor-pointer" />
                        <span className="text-xs">{card.comments}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ArrowUpTrayIcon className="h-4 hover:text-red-500 w-4 cursor-pointer" />
                        <span className="text-xs">{card.shares}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <HeartIcon className="h-4 hover:text-red-500 w-4 cursor-pointer" />
                        <span className="text-xs">
                          {card.likes.toLocaleString()}
                        </span>
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <button aria-label="Save article"  className=" text-gray-500 hover:text-indigo-600 transition-colors">
                        <BookmarkIcon className="h-4 w-4" />
                      </button>
                      <button aria-label="Share article"  className="text-gray-500 hover:text-indigo-600 transition-colors">
                        <ShareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <h5 className="text-left font-medium text-gray-700 font-literal text-[18px] mb-3">
                    {card.title}
                  </h5>
                  <p className="text-left text-gray-500 text-sm mb-6 line-clamp-2">
                    {card.text}
                  </p>

                  {/* Updated layout: avatars on left, button on right, same line */}
                  <div className="flex items-center justify-between pl-2 mb-10">
                    <div className="flex items-center -space-x-3">
                      {profileImages.map((profileImg, i) => (
                        <img
                          key={i}
                          src={profileImg}
                          alt={`Profile ${i + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>

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

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 1023px) {
          .lg\\:sticky {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

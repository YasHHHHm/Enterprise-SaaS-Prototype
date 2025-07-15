import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white py-2.5 px-5 shadow-md sticky top-0 z-50 w-full">
      {/* Main Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/Images/TI Final Logo pdf version-01 1.png"
                alt="AI Brain"
                className="h-10 md:h-12"
              />
              <span className="ml-2 text-lg md:text-xl font-bold text-[#3c4852] whitespace-nowrap">
                AI Brain.co
              </span>
            </a>
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a href="/business" className="text-[#3c4852] hover:text-[#be0006] transition-colors duration-300 whitespace-nowrap">
                Business
              </a>
              <a href="/knowledge" className="text-[#3c4852] hover:text-[#be0006] transition-colors duration-300 whitespace-nowrap">
                Knowledge
              </a>
              <a href="/culture" className="text-[#3c4852] hover:text-[#be0006] transition-colors duration-300 whitespace-nowrap">
                Culture
              </a>
              <a href="/startups" className="text-[#3c4852] hover:text-[#be0006] transition-colors duration-300 whitespace-nowrap">
                Start Ups
              </a>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSubmit}
              className="ml-6 w-64 flex items-center border border-gray-300 bg-gray-100 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-[#be0006] transition-all duration-200"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Quick Search"
                className="w-full h-10 pl-4 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 w-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Buttons */}
            <div className="ml-6 flex items-center space-x-3">
              <a
                href="/launch"
                className="whitespace-nowrap border-2 border-[#be0006] text-[#be0006] px-3 py-1.5 rounded-md hover:bg-[#be0006] hover:text-white transition-colors duration-300"
              >
                Launch Your Project
              </a>
              <a
                href="/login"
                className="whitespace-nowrap bg-[#be0006] text-white px-3 py-1.5 rounded-md hover:bg-[#a80005] transition-colors duration-300"
              >
                Login/SignUp
              </a>
            </div>
          </div>

          {/* Mobile menu button (hidden on desktop) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6 transform rotate-180 transition duration-150 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 transition duration-150 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth dropdown transition */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-200 px-4 pb-3">
          {/* Search in mobile menu */}
          <form onSubmit={handleSubmit} className="pt-2 mb-2">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Quick Search"
                className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#be0006] transition duration-150"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700 transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Navigation Links with staggered animation */}
          <div className="space-y-1">
            {[
              { href: "/business", text: "Business" },
              { href: "/knowledge", text: "Knowledge" },
              { href: "/culture", text: "Culture" },
              { href: "/startups", text: "Start Ups" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium text-[#3c4852] hover:text-[#be0006] hover:bg-gray-50 transition duration-150 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Buttons with staggered animation */}
          <div className="pt-2 space-y-2">
            <a
              href="/launch"
              className={`block w-full text-center border-2 border-[#be0006] text-[#be0006] px-3 py-2 rounded-md hover:bg-[#be0006] hover:text-white transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Launch Your Project
            </a>
            <a
              href="/login"
              className={`block w-full text-center bg-[#be0006] text-white px-3 py-2 rounded-md hover:bg-[#a80005] transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
              style={{ transitionDelay: '250ms' }}
            >
              Login/SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2.5 px-5">
      <div className="flex items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a className="navbar-brand pl-4 md:pl-10 mr-7" href="/">
          <img 
            src="/Images/TI Final Logo pdf version-01 1.png" 
            alt="AI Brain" 
            className="h-[75px]"
          />
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden ml-auto" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className="w-6 space-y-1.5">
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </div>
        </button>

        {/* Navbar content */}
        <div 
          className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center md:w-full`} 
        >
          {/* Navigation links */}
          <ul className="navbar-nav mx-4 gap-3 flex flex-col md:flex-row py-4 md:py-0">
            <li className="nav-item">
              <a className="nav-link text-[#3c4852] hover:text-[#be0006]" href="/business">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-[#3c4852] hover:text-[#be0006]" href="/knowledge">Knowledge</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-[#3c4852] hover:text-[#be0006]" href="/culture">Culture</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-[#3c4852] hover:text-[#be0006]" href="/startups">Start Ups</a>
            </li>
          </ul>

          {/* Search form */}
          <form 
            role="search" 
            className="mx-4 border border-gray-400 bg-gray-100 w-[280px] h-10 rounded shadow-md flex items-center my-4 md:my-0"
          >
            <input
              type="search"
              placeholder="Quick Search"
              aria-label="Search through site content"
              className="w-full h-full pl-6 bg-transparent text-gray-400 placeholder-gray-400 placeholder-opacity-80 placeholder:text-base focus:outline-none"
            />
            <button 
              type="submit" 
              className="w-11 h-11 cursor-pointer flex items-center justify-center"
              aria-label="Search"
            >
              {/* Custom search icon using Tailwind */}
              <div className="relative w-5 h-5">
                <div className="absolute w-3 h-3 border-2 border-gray-400 rounded-full top-0 left-0"></div>
                <div className="absolute w-2 h-1 bg-gray-400 transform rotate-45 bottom-0 right-0"></div>
              </div>
            </button>
          </form>

          {/* Buttons */}
          <div className="flex ms-3 gap-3 flex-col md:flex-row items-center pb-4 md:pb-0">
            <button className="border-2 border-[#be0006] text-[#be0006] py-1.5 px-3 rounded hover:bg-[#be0006] hover:text-white transition duration-500 mb-2 md:mb-0">
              Launch Your Project
            </button>
            <button className="bg-[#be0006] text-white py-1.5 px-3 rounded hover:bg-[#a80005] transition duration-500">
              Login/SignUp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
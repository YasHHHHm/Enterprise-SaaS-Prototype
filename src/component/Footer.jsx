import icons from "../assets/icons/icons";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 w-full mt-auto">
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-12">
                    {/* Logo and About */}
                    <div className="md:w-1/4">
                        <div className="flex items-center mb-4 md:mb-6">
                            <img
                                src = {icons.Logo}
                                alt="Company Logo"
                                className="h-8 md:h-10 mr-3"
                            />
                            <span className="text-xl md:text-2xl font-bold text-white">KickstartHQ</span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base mb-4">
                            We provide innovative solutions to help your business grow in the digital era.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                                <a 
                                    key={social}
                                    href="/" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label={social}
                                >
                                    <i className={`fab fa-${social} text-lg md:text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:w-1/4">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Subscribe Our Newsletter</h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-800 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded-l-lg w-full focus:outline-none focus:ring-0 border-0 placeholder-gray-400"
                            />
                            <button 
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-r-lg transition-colors duration-200"
                                aria-label="Subscribe"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <button className="mt-4 md:mt-6 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-1.5 md:px-6 md:py-2 rounded-lg transition-colors duration-200 text-sm md:text-base">
                            Launch Your Product
                        </button>
                    </div>

                    {/* Quick Links - Now in single row on mobile */}
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                            <div className="min-w-[120px]">
                                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Company</h4>
                                <ul className="space-y-1 md:space-y-2">
                                    {['About Us', 'Vision', 'Mission', 'Contact Us'].map((item) => (
                                        <li key={item}>
                                            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Products</h4>
                                <ul className="space-y-1 md:space-y-2">
                                    {['Business', 'Culture', 'Knowledge', 'Startups'].map((item) => (
                                        <li key={item}>
                                            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Resources</h4>
                                <ul className="space-y-1 md:space-y-2">
                                    {['News', 'Blogs', 'FAQ', 'Videos'].map((item) => (
                                        <li key={item}>
                                            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-xs md:text-sm mb-3 md:mb-0">
                        &copy; {new Date().getFullYear()} AI Brain.co. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {['Terms & Conditions', 'Privacy Policy', 'Cookies Policy'].map((item) => (
                            <a 
                                key={item}
                                href="/" 
                                className="text-gray-500 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
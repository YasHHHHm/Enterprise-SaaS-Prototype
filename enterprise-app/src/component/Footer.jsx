export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full mt-auto">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                    {/* Logo and About */}
                    <div className="md:w-1/4">
                        <div className="flex items-center mb-6">
                            <img
                                src="Images/TI Final Logo pdf version-01 1.png" // Replace with your logo path
                                alt="Company Logo"
                                className="h-10 mr-3"
                            />
                            <span className="text-2xl font-bold text-white">AI Brain.co</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            We provide innovative solutions to help your business grow in the digital era.
                        </p>
                        <div className="flex space-x-4">
                            <a href="/" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:w-1/4">
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe Our Newsletter</h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-0 border-0"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <button className="mt-6 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition-colors">
                            Launch Your Product
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Vision</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Mission</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Business</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Culture</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Knowledge</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Startups</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-white transition">News</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Blogs</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition">Videos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="/" className="text-gray-500 hover:text-white transition text-sm">Terms & Conditions</a>
                        <a href="/" className="text-gray-500 hover:text-white transition text-sm">Privacy Policy</a>
                        <a href="/" className="text-gray-500 hover:text-white transition text-sm">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
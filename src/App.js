import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Router>
      {/* Background pattern wrapper - added this div */}
      <div className="relative min-h-screen">
        {/* Geometric background pattern */}
        <div className="fixed inset-0 -z-10 bg-gray-50 opacity-95">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Your existing app structure */}
        <div className="App flex flex-col min-h-screen relative z-10">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}
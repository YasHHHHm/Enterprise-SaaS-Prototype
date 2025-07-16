import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
            {/* Example:
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
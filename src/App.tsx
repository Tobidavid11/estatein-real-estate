import '@fontsource/urbanist';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MediaFooter from './Components/MediaFooter';

// Import the new pages
import AboutUs from './Pages/AboutUs';
import Properties from './Pages/Properties';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './Components/HeroSection';
import HeroBody from './Components/HeroBody';
import Features from './Components/Features';
import ClientsTalk from './Components/ClientsTalk';
import FAQ from './Components/FAQ';
import Conclusion from './Components/Conclusion';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div>
        <main>
          <Routes>
            {/* Define the routes for the pages */}
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/about" element={<AboutUs />} /> {/* About Us Page */}
            <Route path="/properties" element={<Properties />} /> {/* Properties Page */}
            <Route path="/services" element={<Services />} /> {/* Services Page */}
            <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Placeholder component for Home
function Home() {
  return (
    <div>
   <Header/>
   <Navbar/>
   <main>
    <HeroSection/>
    <HeroBody/>
    <Features/>
    <ClientsTalk/>
    <FAQ/>
    <Conclusion/>
    <Footer/>
    <MediaFooter/>
   </main>
    </div>
  );
}

export default App;

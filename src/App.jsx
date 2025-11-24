import React from 'react';
import Navbar from "./Components/Navabr"

import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Services from './Pages/Services';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Gallery from './Pages/Gallery';
// Import all 12 service pages
import Bridal from './Category_images_page/Bridal';
import EngagementRoka from './Category_images_page/EngagementRoka';
import SangeetWeddingGuest from './Category_images_page/SangeetWeddingGuest';
import Arabic from './Category_images_page/Arabic';
import IndianTraditional from './Category_images_page/IndianTraditional';
import IndoArabicFusion from './Category_images_page/IndoArabicFusion';
import Portrait from './Category_images_page/Portrait';
import BabyShowerGodhBharai from './Category_images_page/BabyShowerGodhBharai';
import Festival from './Category_images_page/Festival';
import Customized from './Category_images_page/Customized';
import MehendiForKids from './Category_images_page/MehendiForKids';
import MehendiClassesWorkshops from './Category_images_page/MehendiClassesWorkshops';
import PageNotFound from './Pages/PageNotFound';




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Define all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/bridal-images" element={<Bridal />} />
           
        <Route path="/engagement-roka-images" element={<EngagementRoka />} />
        <Route path="/sangeet-weddingguest-images" element={<SangeetWeddingGuest />} />
        <Route path="/arabic-images" element={<Arabic />} />
        <Route path="/indian-traditional-images" element={<IndianTraditional />} />
        <Route path="/indo-arabic-fusion-images" element={<IndoArabicFusion />} />
        <Route path="/portrait-images" element={<Portrait />} />
        <Route path="/babyshower-godhbharai-images" element={<BabyShowerGodhBharai />} />
        <Route path="/festival-images" element={<Festival />} />
        <Route path="/customized-images" element={<Customized />} />
        <Route path="/mehendi-for-kids-images" element={<MehendiForKids />} />
        <Route path="/mehendi-classes-workshops-images" element={<MehendiClassesWorkshops />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;

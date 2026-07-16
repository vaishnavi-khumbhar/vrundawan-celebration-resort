import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import MobileBottomBar from "../components/MobileBottomBar/MobileBottomBar";

const AppRoutes = () => {
  return (
    <>
     <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

 <MobileBottomBar />
      <Footer />
    </>
  );
};

export default AppRoutes;
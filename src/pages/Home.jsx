import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Services from "../components/Services/Services";
import WeddingSection from "../components/WeddingSection/WeddingSection";
import Venues from "../components/Venues/Venues";
import ResortExperience from "../components/ResortExperience/ResortExperience";
import Activities from "../components/Activities/Activities";
import Gallery from "../components/Gallery/Gallery";
import Counters from "../components/Counters/Counters";
import Testimonials from "../components/Testimonials/Testimonials";
import Packages from "../components/Packages/Packages";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <WeddingSection />
      <Venues />
      <ResortExperience />
      <Activities />
      <Gallery />
      <Counters />
      <Testimonials />
      <Packages />
      <Contact />
    </>
  );
};

export default Home;
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";

import InnerBanner from "../components/InnerBanner";

const GalleryPage = () => {
  const [active, setActive] = useState("All");

  const images = [
    { image: gallery1, category: "Wedding" },
    { image: gallery2, category: "Resort" },
    { image: gallery3, category: "Swimming" },
    { image: gallery4, category: "Events" },
    { image: gallery5, category: "Picnic" },
    { image: gallery6, category: "Wedding" },
    { image: gallery7, category: "Family Picnic" },
    { image: gallery8, category: "Hurda Party" },
  ];

  const filteredImages =
    active === "All"
      ? images
      : images.filter((item) => item.category === active);

  const filters = ["All", "Wedding", "Resort", "Swimming", "Picnic", "Events"];

  return (
    <>
      <InnerBanner
        badge="Our Gallery"
        title="Moments That Last Forever"
        subtitle="Explore beautiful memories from weddings, receptions, events and celebrations at Vrundawan Resort."
        currentPage="Gallery"
      />

      {/* ================= Gallery Section ================= */}

      <section className="py-14 sm:py-16 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[#D4AF37] uppercase tracking-[3px] sm:tracking-[4px] text-sm font-semibold">
              Gallery
            </p>

            <h1
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143D28] px-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Explore The Beauty Of{" "}
              <span className="text-[#D4AF37]">Vrundawan</span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-7 sm:leading-8 px-2">
              Discover unforgettable weddings, celebrations, luxurious stays
              and beautiful memories created at Vrundawan Celebration &
              Resort.
            </p>
          </div>

          {/* Filter Buttons — scrollable pill-tabs on mobile, attractive underline glow */}
          <div className="mt-10 sm:mt-14">
            <div
              className="flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4
              overflow-x-auto sm:overflow-visible pb-2 sm:pb-0
              px-1 -mx-1 sm:mx-0 sm:px-0
              scrollbar-hide"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`relative shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base
                  transition-all duration-300 border
                  ${
                    active === item
                      ? "bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] text-[#143D28] border-transparent shadow-[0_10px_25px_rgba(212,175,55,0.45)] scale-105"
                      : "bg-white text-[#143D28] border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#143D28] hover:text-white hover:shadow-lg"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
            {filteredImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[30px] group shadow-lg sm:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-[160px] sm:h-[260px] md:h-[330px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay — always faintly visible so badge stays readable, deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 group-hover:opacity-100 transition duration-500" />

                {/* Category badge — always visible, sits safely inside the rounded card, no clipping */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 md:p-6">
                  <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#D4AF37] text-[#143D28] text-[10px] sm:text-xs font-semibold shadow-md">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden mt-16 sm:mt-20 md:mt-24 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#143D28] via-[#1B5138] to-[#0E2A1C] p-8 sm:p-10 md:p-12 text-center shadow-[0_25px_60px_rgba(20,61,40,.45)]">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <h2
              className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold px-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Capture Your Beautiful Moments
            </h2>

            <p className="relative mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-6 sm:leading-8 px-2">
              Visit Vrundawan Celebration & Resort and create unforgettable
              memories with your loved ones.
            </p>

            <Link to="/contact">
              <button className="group relative overflow-hidden mt-8 sm:mt-10 rounded-full bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#143D28] shadow-[0_15px_35px_rgba(212,175,55,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition duration-700" />
                <span className="relative">Book Your Visit</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Sections */}
     
    </>
  );
};

export default GalleryPage;
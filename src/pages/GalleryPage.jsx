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

  return (
    <>
      {/* ================= Gallery Section ================= */}

      <section className="py-24 bg-[#FAF7F2]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/15 text-[#143D28] uppercase tracking-[4px] text-sm font-semibold">
              Gallery
            </span>

            <h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#143D28]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Explore The Beauty Of{" "}
              <span className="text-[#D4AF37]">
                Vrundawan
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              Discover unforgettable weddings,
              celebrations, luxurious stays and
              beautiful memories created at
              Vrundawan Celebration & Resort.
            </p>

          </div>

          {/* Filter Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-14">

            {[
              "All",
              "Wedding",
              "Resort",
              "Swimming",
              "Picnic",
              "Events",
            ].map((item) => (

              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  active === item
                    ? "bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] text-[#143D28] shadow-lg"
                    : "bg-white text-[#143D28] border border-[#D4AF37]/30 hover:bg-[#143D28] hover:text-white"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

            {filteredImages.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[30px] group shadow-2xl"
              >

                <img
                  src={item.image}
                  alt={item.category}
                  className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition duration-500">

                  <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#143D28] text-xs font-semibold">
                    {item.category}
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

          {/* CTA */}

          <div className="relative overflow-hidden mt-24 rounded-[40px] bg-gradient-to-br from-[#143D28] via-[#1B5138] to-[#0E2A1C] p-12 text-center shadow-[0_25px_60px_rgba(20,61,40,.45)]">

            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <h2
              className="relative text-4xl lg:text-5xl text-white font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Capture Your Beautiful Moments
            </h2>

            <p className="relative mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-8">
              Visit Vrundawan Celebration &
              Resort and create unforgettable
              memories with your loved ones.
            </p>

            <Link to="/contact">

              <button
                className="group relative overflow-hidden mt-10 rounded-full bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] px-10 py-4 font-semibold text-[#143D28] shadow-[0_15px_35px_rgba(212,175,55,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105"
              >

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition duration-700" />

                <span className="relative">
                  Book Your Visit
                </span>

              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* Other Sections */}

      <Testimonials />
      <Contact />

    </>
  );
};

export default GalleryPage;
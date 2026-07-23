import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import service1 from "../assets/services/1.jpg";
import service2 from "../assets/services/2.jpg";
import service3 from "../assets/services/3.jpg";
import service4 from "../assets/services/4.jpg";
import service5 from "../assets/services/5.jpg";
import service6 from "../assets/services/6.jpg";
import service7 from "../assets/services/7.jpg";
import service8 from "../assets/services/8.jpg";
import service9 from "../assets/services/9.jpg";
import service10 from "../assets/services/10.jpg";
import service11 from "../assets/services/11.jpg";
import service13 from "../assets/services/13.jpg";

import service20 from "../assets/services/20.jpeg";
import service21 from "../assets/services/21.jpeg";
import service22 from "../assets/services/22.jpeg";

import pool from "../assets/services/pool.jpeg";

import InnerBanner from "../components/InnerBanner";

const GalleryPage = () => {
  const [active, setActive] = useState("All");

  const images = [

{
 image: service1,
 category:"Wedding",
 title:"Grand Lawn"
},

{
 image: service2,
 category:"Wedding",
 title:"Mangal Karyalay"
},

{
 image: service3,
 category:"Resort",
 title:"Resort Rooms"
},

{
 image: pool,
 category:"Swimming",
 title:"Swimming Pool"
},

{
 image: service4,
 category:"Events",
 title:"Rain Dance"
},

{
 image: service5,
 category:"Events",
 title:"DJ Night"
},

{
 image: service6,
 category:"Resort",
 title:"Camping"
},

{
 image: service7,
 category:"Picnic",
 title:"Family Picnic"
},

{
 image: service8,
 category:"Picnic",
 title:"One Day Picnic"
},

{
 image: service9,
 category:"Events",
 title:"Corporate Events"
},

{
 image: service10,
 category:"Events",
 title:"Bonfire"
},

{
 image: service11,
 category:"Activities",
 title:"Adventure Park"
},

{
 image: service13,
 category:"Activities",
 title:"Sports Zone"
},

{
 image: service20,
 category:"Events",
 title:"Hurda Party"
},

{
 image: service21,
 category:"Picnic",
 title:"Family Experience"
},

{
 image: service22,
 category:"Food",
 title:"Food Experience"
}

];
  const filteredImages =
    active === "All"
      ? images
      : images.filter((item) => item.category === active);

const filters = [
"All",
"Wedding",
"Resort",
"Swimming",
"Picnic",
"Events",
"Activities",
"Food"
];
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
<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">          {/* Heading */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
  {filteredImages.map((item, index) => (



   <motion.div
  key={index}
  whileHover={{ y: -8 }}
  className="group relative bg-white rounded-[30px] p-3 shadow-xl overflow-hidden"
>
    <div className="bg-[#FAF7F2] rounded-[22px] overflow-hidden flex items-center justify-center p-2">
  <img
    src={item.image}
    alt={item.category}
    className="w-full h-auto max-h-[280px] object-contain transition-transform duration-700 group-hover:scale-105"
  />
</div>

      <div className="absolute inset-3 rounded-[22px] bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute bottom-8 left-8">
        <span className="px-4 py-2 rounded-full bg-[#D4AF37] text-[#143D28] font-semibold text-sm">
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
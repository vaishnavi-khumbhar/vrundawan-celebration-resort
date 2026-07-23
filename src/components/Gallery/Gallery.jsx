import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4];

const Gallery = () => {
  return (
    <section className="py-12 bg-[#FAF7F2]" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#143D28]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Explore Our Beautiful Moments
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            A glimpse of unforgettable weddings, celebrations and luxury
            experiences at Vrundawan Celebration & Resort.
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Images */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden p-3"
              >
<div className="h-[240px] sm:h-[260px] lg:h-[280px] flex items-center justify-center rounded-2xl bg-[#FAF7F2] overflow-hidden">
                    <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-28 bg-gradient-to-br from-[#143D28] via-[#1B5138] to-[#0E2A1C] rounded-[35px] p-10 text-center shadow-2xl"
          >
            <h3
              className="text-3xl text-white font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Discover More
            </h3>

            <p className="text-gray-300 mt-6 leading-8">
              Explore our complete gallery and experience the elegance of
              weddings, celebrations, picnics and memorable moments at
              Vrundawan Celebration & Resort.
            </p>

            <Link to="/gallery">
              <button
                className="
                  mt-10
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#C99A1A]
                  via-[#D4AF37]
                  to-[#F3D98B]
                  px-8
                  py-4
                  font-semibold
                  text-[#143D28]
                  shadow-[0_15px_35px_rgba(212,175,55,0.35)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:scale-105
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                  "
                />

                <span className="relative z-10">
                  View Gallery
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
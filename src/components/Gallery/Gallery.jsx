import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4];

const Gallery = () => {
  return (
    <section className="py-10 bg-[#FAF7F2]" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-10">
         

          <h2
            className="mt-6 text-4xl lg:text-5xl font-bold text-[#143D28]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Explore Our Beautiful Moments
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600">
            A glimpse of unforgettable weddings,
            celebrations and luxury experiences at
            Vrundawan Celebration & Resort.
          </p>
        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Images */}

          <div className="lg:col-span-2 grid grid-cols-2 gap-5">

            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="overflow-hidden rounded-3xl shadow-xl group"
              >
                <img
                  src={img}
                  alt=""
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}

          </div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-[#143D28] to-[#1F5A3D] rounded-[35px] p-10 text-center shadow-2xl"
          >
            <h3
              className="text-3xl text-white font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Discover More
            </h3>

            <p className="text-gray-300 mt-5 leading-8">
              Explore our complete gallery and
              experience the elegance of weddings,
              celebrations and memorable moments.
            </p>

            <Link to="/gallery">
              <button
                className="
                  mt-8
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
                    absolute inset-0
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
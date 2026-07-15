import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import room1 from "../../assets/resort/room1.jpg";
import room2 from "../../assets/resort/room2.jpg";
import pool from "../../assets/resort/pool.jpg";
import bonfire from "../../assets/resort/bonfire.jpg";
import breakfast from "../../assets/resort/breakfast.jpg";

const ResortExperience = () => {
  const images = [
    room1,
    room2,
    pool,
    bonfire,
    breakfast,
  ];

  return (
    <section
      className="py-15 bg-[#143D28]"
      id="resort"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p
            className="
            text-[#D4AF37]
            uppercase
            tracking-[5px]
            font-semibold"
          >
            Resort Experience
          </p>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-white
            mt-4"
          >
            Luxury, Comfort & Nature
          </h2>

          <p
            className="
            text-gray-300
            mt-5
            max-w-3xl
            mx-auto"
          >
            Enjoy premium stays, relaxing amenities,
            and unforgettable experiences amidst
            nature and luxury.
          </p>

        </div>


        {/* Resort Slider */}

        <div className="mt-10">

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >

            {images.map((img, index) => (

              <SwiperSlide key={index}>

                <img
                  src={img}
                  alt="resort"
                  className="
                  w-full
                  h-[400px]
                  object-cover
                  rounded-[30px]"
                />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>



        {/* Features */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-10"
        >

          {/* Card */}

          {[
            "Luxury Resort Rooms",
            "Swimming Pool Access",
            "Couple Friendly Stay",
            "Bonfire Experience",
            "Dinner & Breakfast",
            "Peaceful Nature View",
          ].map((item, index) => (

           <motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -12,
    scale: 1.03,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    p-8
    text-center
    bg-gradient-to-br
    from-[#0E2A1D]
    via-[#143D28]
    to-[#1E4B34]
    border border-[#D4AF37]/20
    shadow-[0_15px_40px_rgba(0,0,0,0.35)]
    transition-all duration-500
    hover:border-[#D4AF37]
    hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)]
  "
>
  {/* Golden Glow */}
  <div
    className="
      absolute
      -top-12
      -right-12
      h-28
      w-28
      rounded-full
      bg-[#D4AF37]/20
      blur-3xl
      opacity-0
      group-hover:opacity-100
      transition-all duration-500
    "
  />

  {/* Bottom Accent Line */}
  <div
    className="
      absolute
      bottom-0
      left-0
      h-1
      w-0
      bg-[#D4AF37]
      group-hover:w-full
      transition-all duration-500
    "
  />

  <h3
    className="
      relative
      z-10
      text-[#F5E6A9]
      text-xl
      font-semibold
      tracking-wide
      group-hover:text-white
      transition-colors duration-300
    "
  >
    {item}
  </h3>
</motion.div>

          ))}

        </div>


        {/* CTA Button */}

        <div className="text-center mt-15">

         <Link to="/contact">
  <button
    className="
      bg-[#D4AF37]
      text-black
      px-10
      py-4
      rounded-full
      font-semibold
      shadow-[0_10px_30px_rgba(212,175,55,0.35)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(212,175,55,0.55)]
    "
  >
    Book Your Stay
  </button>
</Link>

        </div>

      </div>
    </section>
  );
};

export default ResortExperience;
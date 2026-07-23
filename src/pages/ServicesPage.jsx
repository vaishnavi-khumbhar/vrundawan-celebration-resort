import Services from "../components/Services/Services";
import WeddingSection from "../components/WeddingSection/WeddingSection";
import Venues from "../components/Venues/Venues";
import ResortExperience from "../components/ResortExperience/ResortExperience";
import Activities from "../components/Activities/Activities";
import Packages from "../components/Packages/Packages";
import Contact from "../components/Contact/Contact";
import { useState } from "react";

import InnerBanner from "../components/InnerBanner";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import lawn from "../assets/services/1.jpg";
import mangal from "../assets/services/2.jpg";
import room from "../assets/services/3.jpg";
import pool from "../assets/services/pool.jpeg";
import rain from "../assets/services/4.jpg";
import dj from "../assets/services/5.jpg";
import camping from "../assets/services/6.jpg";
import hurda from "../assets/services/20.jpeg";
import picnic from "../assets/services/21.jpeg";
import oneday from "../assets/services/8.jpg";
import corporate from "../assets/services/9.jpg";
import bonfire from "../assets/services/10.jpg";
import food from "../assets/services/22.jpeg";
import adventurepark from "../assets/services/11.jpg";
import sportszone from "../assets/services/13.jpg";



  const services = [


    {
      image: lawn,
      title: "Grand Lawn",
      desc: "Spacious outdoor celebration venue."
    },

    {
      image: mangal,
      title: "Mangal Karyalay",
      desc: "Traditional wedding destination."
    },

    {
      image: room,
      title: "Resort Rooms",
      desc: "Luxury and comfortable stay."
    },

    {
      image: pool,
      title: "Swimming Pool",
      desc: "Relax and refresh yourself."
    },

    {
      image: rain,
      title: "Rain Dance",
      desc: "Enjoy music and rain fun."
    },

    {
      image: dj,
      title: "DJ Night",
      desc: "Party all night with music."
    },

    {
      image: camping,
      title: "Tent Camping",
      desc: "Experience nature beautifully."
    },

    {
      image: hurda,
      title: "Hurda Party",
      desc: "Authentic Maharashtrian experience."
    },

    {
      image: picnic,
      title: "Family Picnic",
      desc: "Perfect weekend outing."
    },

    {
      image: oneday,
      title: "One Day Picnic",
      desc: "Complete day outing package."
    },

    {
      image: corporate,
      title: "Corporate Events",
      desc: "Professional event arrangements."
    },

    {
      image: bonfire,
      title: "Bonfire Experience",
      desc: "Enjoy cozy evenings together."
    },

    {
      image: food,
      title: "Dinner & Breakfast",
      desc: "Delicious food with hospitality."
    },

  ];

const ServicesPage = () => {

  const [selectedService, setSelectedService] = useState(null);

const openGallery = (service) => {
  setSelectedService(service);
};

const closeGallery = () => {
  setSelectedService(null);
};

  return (
    <>
    <InnerBanner
    badge="Our Services"
    title="Luxury Experiences We Offer"
    subtitle="From grand weddings to corporate events, discover premium services crafted for unforgettable celebrations."
    currentPage="Services"
/>
      

<section
      className="py-15 bg-[#FAF7F2]"
      id="services"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p
            className="text-[#D4AF37]
            uppercase tracking-[4px]
            font-semibold"
          >
            Our Services
          </p>

          <h2
            className="text-4xl lg:text-5xl
            font-bold text-[#143D28]
            mt-4"
          >
            Premium Experiences Await You
          </h2>

          <p
            className="mt-5 text-gray-600
            max-w-3xl mx-auto"
          >
            From weddings and celebrations to luxury
            stays and unforgettable experiences,
            Vrundawan has everything you need.
          </p>

        </div>


        {/* Cards */}


        <div
          className="grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20"
        >

          {services.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .5,
                delay: index * .05,
              }}

              whileHover={{
                y: -10,
              }}

              className="relative
              rounded-3xl
              overflow-hidden
              shadow-xl
              group"

            >

              {/* Image */}

             <div className="bg-[#f8f8f8] flex items-center justify-center">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full
      h-[260px]
      sm:h-[300px]
      md:h-[340px]
      lg:h-[380px]
      object-contain
      p-2
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />
</div>



              {/* Overlay */}

              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent"
              />


              {/* Content */}

              <div
  className="
    absolute inset-0
    flex flex-col
    justify-end
    items-center
    text-center
    px-6
    pb-8
    bg-gradient-to-t
    from-black/85
    via-black/35
    to-transparent"
>
  <h3
    className="
      text-white
      text-2xl
      lg:text-3xl
      font-bold
      mb-3"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    {item.title}
  </h3>

  <p
    className="
      text-gray-200
      max-w-sm
      leading-7
      mb-6"
  >
    {item.desc}
  </p>

 <button
  onClick={() => openGallery(item)}
  className="
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-full
    border border-[#D4AF37]
    bg-gradient-to-r
    from-[#D4AF37]
    via-[#E7C45A]
    to-[#D4AF37]
    px-7
    py-3
    font-semibold
    text-[#143D28]
    shadow-[0_12px_30px_rgba(212,175,55,0.35)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-[0_18px_40px_rgba(212,175,55,0.55)]
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

  <span className="relative z-10 flex items-center gap-2">
    Show Images

    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8" cy="10" r="1.5" />
      <path
        d="M21 16l-5-5-5 5-3-3-5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>

</div>
            
            </motion.div>

          ))}

        </div>

      </div>

    </section>







      <WeddingSection />

    

      <ResortExperience />
      <Activities />
      <Packages />
      

      {/* img popup code services img  */}
{selectedService && (
  <div
    className="
      fixed inset-0 z-[999]
      bg-gradient-to-br
      from-black/90
      via-[#143D28]/80
      to-black/90
      backdrop-blur-md
      flex items-center justify-center
      p-4
    "
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    className="
relative
w-full
max-w-4xl
bg-white
rounded-[24px]
overflow-hidden
shadow-2xl
max-h-[88vh]
"
    >
      {/* Close Button */}
      <button
        onClick={closeGallery}
        className="
          absolute
          top-4
          right-4
          w-11
          h-11
          rounded-full
          bg-white
          shadow-lg
          text-2xl
          font-bold
          text-[#143D28]
          hover:bg-red-500
          hover:text-white
          transition
          z-20
        "
      >
        ×
      </button>

      <div className="grid lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
         <div className="bg-[#f7f7f7] flex items-center justify-center p-4">
  <img
    src={selectedService.image}
    alt={selectedService.title}
    className="
      w-full
      max-h-[250px]
      sm:max-h-[350px]
      md:max-h-[450px]
      lg:max-h-[600px]
      object-contain
    "
  />
</div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Right Content */}
        <div
          className="
            flex
            flex-col
            justify-center
            p-6
            sm:p-10
            bg-[#FAF7F2]
          "
        >
          <span
            className="
              inline-block
              w-fit
              px-4
              py-2
              rounded-full
              bg-[#D4AF37]/20
              text-[#D4AF37]
              font-semibold
              tracking-[3px]
              uppercase
              text-xs
            "
          >
            Premium Service
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-5xl
              font-bold
              text-[#143D28]
            "
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {selectedService.title}
          </h2>

          <p
            className="
              mt-6
              text-gray-600
              leading-8
              text-base
              sm:text-lg
            "
          >
            {selectedService.desc}
          </p>

         <a
  href="https://wa.me/918180877750?text=Hello%20Vrundawan%20Celebration%20%26%20Resort,%20I%20am%20interested%20in%20the%20service%20'${selectedService.title}'.%20Please%20share%20more%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-6
    w-fit
    px-8
    py-3
    rounded-full
    bg-[#143D28]
    text-white
    font-semibold
    hover:bg-[#D4AF37]
    hover:text-[#143D28]
    transition-all
    duration-300
  "
>
  Contact Us
</a>
        </div>

      </div>
    </motion.div>
  </div>
)}






      <Contact />
    </>
  );
};

export default ServicesPage;
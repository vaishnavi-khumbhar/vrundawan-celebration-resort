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

import wedding from "../assets/services/wedding.jpg";
import banquet from "../assets/services/banquet.jpg";
import lawn from "../assets/services/lawn.jpg";
import mangal from "../assets/services/mangal.jpg";
import room from "../assets/services/room.jpg";
import pool from "../assets/services/pool.jpg";
import rain from "../assets/services/rain.jpg";
import dj from "../assets/services/dj.jpg";
import camping from "../assets/services/camping.jpg";
import hurda from "../assets/services/hurda.jpg";
import picnic from "../assets/services/picnic.jpg";
import oneday from "../assets/services/oneday.jpg";
import corporate from "../assets/services/corporate.jpg";
import bonfire from "../assets/services/bonfire.jpg";
import food from "../assets/services/food.jpg";



const venues = [
    {
      image: banquet,
      title: "Banquet Hall",
      guests: "200 Guests",
      desc: "Perfect for birthdays, engagements, receptions and private celebrations.",
    },

    {
      image: lawn,
      title: "Grand Lawn",
      guests: "2500 Guests",
      desc: "Luxury outdoor venue for grand weddings and large celebrations.",
    },

    {
      image: mangal,
      title: "Mangal Karyalay",
      guests: "1200 Guests",
      desc: "Traditional and elegant wedding venue for unforgettable moments.",
    },
  ];

  const services = [


    
    {
      image: wedding,
      title: "Wedding Venue",
      desc: "Celebrate your dream wedding."
    },

    {
      image: banquet,
      title: "Banquet Hall",
      desc: "Perfect for private celebrations."
    },

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

              <img

                src={item.image}
                alt={item.title}

                className="
                w-full
                h-[380px]
                object-cover
                group-hover:scale-110
                transition duration-700"

              />



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

      {/* {event venu code } */}
       <section
      className="py-15 bg-[#FAF7F2]"
      id="venues"
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
            Event Venues
          </p>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#143D28]
            mt-4"
          >
            Elegant Spaces For Every Celebration
          </h2>

          <p
            className="
            text-gray-600
            max-w-3xl
            mx-auto
            mt-5"
          >
            From intimate gatherings to grand wedding celebrations,
            we offer luxurious and spacious venues tailored for every occasion.
          </p>

        </div>

        {/* Venue Cards */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          mt-20"
        >

          {venues.map((venue, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -12,
              }}

              className="
              overflow-hidden
              rounded-[30px]
              shadow-2xl
              group
              relative"
            >

              {/* Image */}

              <img
                src={venue.image}
                alt={venue.title}
                className="
                w-full
                h-[550px]
                object-cover
                group-hover:scale-110
                transition duration-700"
              />

              {/* Gradient Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent"
              />

              {/* Capacity Badge */}

              <div
                className="
                absolute
                top-6
                right-6
                bg-[#D4AF37]
                text-black
                px-5
                py-2
                rounded-full
                font-semibold"
              >
                {venue.guests}
              </div>

              {/* Content */}

              <div
                className="
                absolute
                bottom-0
                p-8"
              >

                <h3
                  className="
                  text-white
                  text-3xl
                  font-bold"
                >
                  {venue.title}
                </h3>

                <p
                  className="
                  text-gray-200
                  mt-4
                  leading-7"
                >
                  {venue.desc}
                </p>

                {/* Buttons */}

<div className="flex items-center mt-8">

  {/* Book Now */}
  <Link to="/contact">
    <button
      className="
        rounded-l-full
        rounded-r-none
        bg-gradient-to-r
        from-[#D4AF37]
        to-[#E7C45A]
        px-8
        py-3.5
        font-semibold
        text-[#143D28]
        shadow-lg
        transition-all
        duration-300
        hover:brightness-110
        hover:-translate-y-1
      "
    >
      Book Now
    </button>
  </Link>

  {/* Explore */}
  <Link to="/contact">
    <button
      className="
        rounded-r-full
        rounded-l-none
        border
        border-[#D4AF37]
        border-l-0
        bg-[#143D28]/90
        px-8
        py-3.5
        font-semibold
        text-[#D4AF37]
        transition-all
        duration-300
        hover:bg-[#D4AF37]
        hover:text-[#143D28]
        hover:-translate-y-1
      "
    >
     Quick Enquiry
    </button>
  </Link>

</div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>



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
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="
              w-full
              h-[280px]
              sm:h-[420px]
              lg:h-[620px]
              object-cover
            "
          />

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
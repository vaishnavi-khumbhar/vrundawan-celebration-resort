import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images

import lawn from "../../assets/services/1.jpg";
import mangal from "../../assets/services/2.jpg";
import room from "../../assets/services/3.jpg";
import pool from "../../assets/services/pool.jpeg";
import rain from "../../assets/services/4.jpg";
import dj from "../../assets/services/5.jpg";
import camping from "../../assets/services/6.jpg";
import hurda from "../../assets/services/20.jpeg";
import picnic from "../../assets/services/21.jpeg";
import oneday from "../../assets/services/8.jpg";
import corporate from "../../assets/services/9.jpg";
import bonfire from "../../assets/services/10.jpg";
import food from "../../assets/services/22.jpeg";
// TODO: replace these two with actual photos once available
import adventurepark from "../../assets/services/11.jpg";
import sportszone from "../../assets/services/13.jpg";
import banquetHall from "../../assets/services/BanquetHall.jpg";


const Services = () => {

  const services = [

     {
    image: banquetHall,
    title: "Premium Banquet Hall",
    desc: "Elegant indoor banquet hall with a seating capacity of 200 guests for weddings, receptions, and special events.",
  },
    {
      image: lawn,
      title: "Grand Lawn",
      desc: "17,000 sq.ft. spacious outdoor celebration venue."
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
      image: adventurepark,
      title: "Adventure Park",
      desc: "Exciting rides & activities for kids."
    },

    {
      image: sportszone,
      title: "Sports Zone",
      desc: "Cricket turf & badminton hall for fun matches."
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
      desc: "Authentic Maharashtrian farm experience."
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
      title: "Group & Corporate Events",
      desc: "Professional arrangements for group bookings."
    },

    {
      image: bonfire,
      title: "Bonfire Experience",
      desc: "Enjoy cozy evenings together."
    },

    {
      image: food,
      title: "Dinner & Breakfast",
      desc: "Delicious farm-fresh food with hospitality."
    },

  ];

  return (

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
            From weddings and celebrations to farm-stay
            adventures and luxury comfort, Vrundawan Resort
            &amp; Agro Tourism has everything you need.
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
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: index * 0.05,
  }}
  whileHover={{ y: -10 }}
  className="
    relative
    w-[90%]
    sm:w-[95%]
    md:w-full
    mx-auto
    rounded-3xl
    overflow-hidden
    shadow-xl
    group
    bg-white
  "
>
              {/* Image */}

             <div className="bg-[#f8f8f8] flex items-center justify-center overflow-hidden">

  <img
    src={item.image}
    alt={item.title}
    className="
      w-[88%]
      sm:w-[92%]
      md:w-full
      h-[220px]
      sm:h-[260px]
      md:h-[300px]
      lg:h-[340px]
      object-contain
      transition-transform
      duration-700
      group-hover:scale-105
      mx-auto
      p-2
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

  <Link to="/services">
    <button
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
          duration-700"
      />

      <span className="relative z-10 flex items-center gap-2">
        Explore More

        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  </Link>
</div>
            
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;
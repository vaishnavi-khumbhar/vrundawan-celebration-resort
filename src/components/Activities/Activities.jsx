import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Images

import raindance from "../../assets/activities/raindance.jpg";
import djnight from "../../assets/services/5.jpg";
import camping from "../../assets/services/6.jpg";
import hurda from "../../assets/services/20.jpeg";
import bonfire from "../../assets/services/10.jpg";
import pool from "../../assets/activities/pool.jpeg";
import cricket from "../../assets/activities/cricket.jpg";

const Activities = () => {
  const activities = [
    {
      image: raindance,
      title: "Rain Dance",
      desc: "Dance to energetic beats and enjoy unforgettable moments.",
    },

    {
      image: pool,
      title: "Swimming Pool",
      desc: "Relax and refresh in our clean, family-friendly swimming pool.",
    },

    {
      image: cricket,
      title: "Cricket Turf",
      desc: "Enjoy a friendly match on our open cricket ground with friends and family.",
    },

    {
      image: djnight,
      title: "DJ Night",
      desc: "Celebrate with music, lights, and entertainment.",
    },

    {
      image: camping,
      title: "Tent Camping",
      desc: "Reconnect with nature under the stars.",
    },

    {
      image: hurda,
      title: "Hurda Party",
      desc: "Enjoy authentic Maharashtrian Hurda experiences.",
    },

    {
      image: bonfire,
      title: "Bonfire Experience",
      desc: "Spend magical evenings around a cozy bonfire.",
    },
  ];

  return (
    <section
  className="pt-10 pb-4 sm:pt-12 sm:pb-6 lg:pt-15 lg:pb-5 bg-[#FAF7F2]"
  id="activities"
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[5px]
            text-[#D4AF37]
            font-semibold"
          >
            Activities & Experiences
          </p>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#143D28]
            mt-4"
          >
            Create Memories Beyond Celebrations
          </h2>

          <p
            className="
            text-gray-600
            max-w-3xl
            mx-auto
            mt-5"
          >
            Experience exciting activities designed
            for families, couples, and groups.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20"
        >

          {activities.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .5,
                delay: index * .1,
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
                src={item.image}
                alt={item.title}
                className="
                w-full
                h-[450px]
                object-cover
                group-hover:scale-110
                transition duration-700"
              />


              {/* Gradient Overlay */}

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
                  {item.title}
                </h3>

                <p
                  className="
                  text-gray-200
                  mt-4
                  leading-7"
                >
                  {item.desc}
                </p>


               <Link to="/contact">
  <button
    className="
      mt-6
      bg-gradient-to-r
      from-[#C99A1A]
      via-[#D4AF37]
      to-[#F3D98B]
      text-[#143D28]
      px-6
      py-3
      rounded-full
      font-semibold
      shadow-[0_10px_30px_rgba(212,175,55,0.35)]
      transition-all
      duration-300
      hover:scale-105
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(212,175,55,0.55)]
    "
  >
    Book Activities
  </button>
</Link>

              </div>

            </motion.div>

          ))}

        </div>



        {/* CTA */}

       <div
  className="
    relative
    mt-10
    overflow-hidden
    rounded-[40px]
    bg-gradient-to-br
    from-[#143D28]
    via-[#1A5136]
    to-[#0F2D1F]
    p-10
    sm:p-14
    text-center
    shadow-[0_25px_60px_rgba(20,61,40,0.45)]
  "
>
  {/* Decorative Glow */}
  <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl" />

  {/* Gold Line */}
  <div className="relative z-10 flex items-center justify-center gap-3 mb-6">
    <span className="h-[2px] w-12 bg-[#D4AF37]" />
    <span className="uppercase tracking-[4px] text-[#F3D98B] text-sm font-semibold">
      Adventure Awaits
    </span>
    <span className="h-[2px] w-12 bg-[#D4AF37]" />
  </div>

  <h2
    className="
      relative
      z-10
      text-white
      text-4xl
      lg:text-5xl
      font-bold
      leading-tight
    "
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    Plan Your Perfect {" "}
    <span className="text-[#D4AF37]">Day Out Today!</span>
  </h2>

  <p
    className="
      relative
      z-10
      mt-6
      max-w-2xl
      mx-auto
      text-gray-300
      text-lg
      leading-8
    "
  >
    Create unforgettable memories with exciting outdoor
    adventures, fun-filled activities, and relaxing experiences
    for your friends and family at हृदय Resort &amp; Agro Tourism.
  </p>

  <Link to="/contact">
    <button
      className="
        group
        relative
        z-10
        mt-10
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-[#C99A1A]
        via-[#D4AF37]
        to-[#F3D98B]
        px-10
        py-4
        font-semibold
        text-[#143D28]
        shadow-[0_15px_35px_rgba(212,175,55,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_20px_45px_rgba(212,175,55,0.55)]
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
        Book Activity
      </span>
    </button>
  </Link>
</div>



      </div>
    </section>
  );
};

export default Activities;
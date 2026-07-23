import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import lawn from "../../assets/venues/lawn1.jpg";
import ground from "../../assets/venues/ground.jpg";

import camping from "../../assets/venues/camping.jpg";

const Venues = () => {
  const venues = [
    {
      image: lawn,
      title: "Grand Lawn",
      guests: "17,000 sq.ft",
      desc: "Spacious open-air lawn on the banks of Manjra River — perfect for grand weddings, receptions and large celebrations.",
    },

    {
      image: ground,
      title: "Open Function Ground",
      guests: "500+ Guests",
      desc: "Ideal for haldi, sangeet, birthdays, engagements and family functions amidst nature.",
    },

    {
      image: camping,
      title: "Camping & Bonfire Zone",
      guests: "Tent Stay",
      desc: "Enjoy an unforgettable night under the stars with camping tents, bonfire and music.",
    },
  ];

  return (
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
            Our Venues
          </p>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#143D28]
            mt-4"
          >
            Spaces For Every Celebration
          </h2>

          <p
            className="
            text-gray-600
            max-w-3xl
            mx-auto
            mt-5"
          >
            From intimate family gatherings to grand weddings and lively
            camping nights, Vrundawan Resort offers the perfect setting for
            every occasion.
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
             relative
overflow-hidden
rounded-[24px]
shadow-xl
group
bg-white
w-full
max-w-[420px]
mx-auto"
            >

              {/* Image */}

             <div className="overflow-hidden">

<img
src={venue.image}
alt={venue.title}
className="
w-full
aspect-[4/5]
sm:aspect-[4/5]
lg:h-[500px]
object-cover
object-center
transition-transform
duration-700
group-hover:scale-105
"
/>

</div>

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
  <Link to="/services">
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
      Explore
    </button>
  </Link>

</div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Venues;
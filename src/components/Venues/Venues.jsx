import { motion } from "framer-motion";
              import { Link } from "react-router-dom";

import banquet from "../../assets/venues/banquet.jpg";
import lawn from "../../assets/venues/lawn.jpg";
import mangal from "../../assets/venues/mangal.jpg";

const Venues = () => {
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
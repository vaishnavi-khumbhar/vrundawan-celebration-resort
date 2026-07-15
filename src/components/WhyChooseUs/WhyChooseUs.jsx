import { motion } from "framer-motion";

import {
  MapPin,
  HeartHandshake,
  Waves,
  Trees,
  Building2,
  ParkingCircle,
  BriefcaseBusiness,
  UtensilsCrossed,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: "Prime Location",
      desc: "Located on Latur-Ambejogai Road.",
    },

   {
  icon: <Trees size={32} />,
  title: "Majara River View",
  desc: "Scenic and peaceful surroundings.",
},
  {
    icon: <HeartHandshake size={32} />, // Wedding
    title: "Wedding Destination",
    desc: "Perfect venue for grand celebrations.",
  },

  {
  icon: <Waves size={32} />,
  title: "Swimming Pool",
  desc: "Relax and enjoy luxury amenities.",
},

    {
      icon: <Building2 size={32} />,
      title: "Resort Stay",
      desc: "Premium rooms for comfortable stays.",
    },

    {
      icon: <ParkingCircle size={32} />,
      title: "Spacious Parking",
      desc: "Ample parking space for all guests.",
    },

    {
      icon: <BriefcaseBusiness size={32} />,
      title: "Corporate Events",
      desc: "Ideal destination for business gatherings.",
    },

    {
      icon: <UtensilsCrossed size={32} />,
      title: "Delicious Food",
      desc: "Authentic and freshly prepared meals.",
    },
  ];

  return (
    <section
      className="py-15 bg-[#143D28]"
      id="why-us"
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
            Why Choose Us
          </p>

          <h2
            className="
            text-white
            text-4xl
            lg:text-5xl
            font-bold
            mt-4"
          >
            Why Choose Vrundawan?
          </h2>

          <p
            className="
            text-gray-300
            mt-6
            max-w-3xl
            mx-auto"
          >
            Experience luxury, celebration, and
            hospitality at one of the most beautiful
            destinations in Latur.
          </p>

        </div>


        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-20"
        >

          {features.map((item, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -10,
              }}

              className="
              group
              relative
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              rounded-3xl
              p-8
              text-center
              hover:border-[#D4AF37]/60
              transition-all
              duration-300
              shadow-xl
              overflow-hidden"
            >

              {/* Soft gold glow that appears on hover, behind the icon */}
              <div
                className="
                pointer-events-none
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                w-32
                h-32
                rounded-full
                bg-[#D4AF37]/0
                group-hover:bg-[#D4AF37]/20
                blur-2xl
                transition-all
                duration-500"
              />

              {/* Icon — bigger, in a gold gradient badge with ring */}

              <div className="relative flex justify-center mb-6">
                <div
                  className="
                  relative
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#D4AF37]
                  to-[#a8842a]
                  text-[#143D28]
                  shadow-lg
                  shadow-[#D4AF37]/30
                  ring-1
                  ring-[#D4AF37]/40
                  rotate-3
                  group-hover:rotate-0
                  group-hover:scale-110
                  transition-all
                  duration-300"
                >
                  {item.icon}
                </div>
              </div>


              {/* Title */}

              <h3
                className="
                relative
                text-white
                text-xl
                font-semibold
                group-hover:text-[#D4AF37]
                transition-colors
                duration-300"
              >
                {item.title}
              </h3>


              {/* Description */}

              <p
                className="
                relative
                text-gray-300
                mt-3
                leading-7"
              >
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
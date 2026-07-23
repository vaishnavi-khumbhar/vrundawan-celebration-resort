import { motion } from "framer-motion";

import {
  MapPin,
  HeartHandshake,
  Hotel,
  Tent,
  Ruler,
  UtensilsCrossed,
  Trees,
  WavesLadder,
  Rocket,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
  {
    icon: <MapPin size={32} strokeWidth={2.2} />,
    title: "Prime Location",
    desc: "Mahapur, Chame Farm — just 6 km from Latur city on Latur–Ambajogai Road.",
  },

  {
    icon: <Trees size={32} strokeWidth={2.2} />,
    title: "Manjara River View",
    desc: "Nature-rich riverside setting along the Manjara river.",
  },

  {
    icon: <HeartHandshake size={32} strokeWidth={2.2} />,
    title: "Wedding Destination",
    desc: "Perfect venue for grand celebrations & pre-wedding shoots.",
  },

  {
    icon: <WavesLadder size={32} strokeWidth={2.2} />,
    title: "Swimming Pool",
    desc: "Relax and enjoy luxury amenities.",
  },

  {
    icon: <Hotel size={32} strokeWidth={2.2} />,
    title: "Resort Stay",
    desc: "Premium AC rooms & tent camping for comfortable stays.",
  },

  {
    icon: <Rocket size={32} strokeWidth={2.2} />,
    title: "Adventure Park",
    desc: "Fun-filled rides and activities for kids.",
  },

  {
    icon: <Tent size={32} strokeWidth={2.2} />,
    title: "Camping & Bonfire",
    desc: "Evening bonfire nights with tent camping by the river.",
  },

  {
    icon: <UtensilsCrossed size={32} strokeWidth={2.2} />,
    title: "Farm-Fresh Food",
    desc: "Authentic meals, hurda parties & seasonal corn festival treats.",
  },

  {
    icon: <Ruler size={32} strokeWidth={2.2} />,
    title: "17,000 Sq.ft. Lawn",
    desc: "A grand spacious lawn for large gatherings & events.",
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
            Experience nature, celebration, and warm
            hospitality at one of Latur's most beautiful
            riverside resort &amp; agro tourism destinations.
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
    via-[#E9C75B]
    to-[#B88A1A]
    text-[#143D28]
    shadow-[0_12px_30px_rgba(212,175,55,0.35)]
    ring-2
    ring-[#F4E4A1]/40
    group-hover:scale-110
    group-hover:-translate-y-1
    transition-all
    duration-300
  "
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
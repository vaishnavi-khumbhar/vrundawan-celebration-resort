import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      title: "Wedding Package",
      features: [
        "Grand Wedding Venue",
        "Luxury Decoration",
        "Premium Hospitality",
        "Customized Catering",
      ],
    },

    {
      title: "One Day Picnic",
      features: [
        "Swimming Pool Access",
        "Rain Dance",
        "Meals Included",
        "Fun Activities",
      ],
    },

    {
      title: "Hurda Party",
      features: [
        "Traditional Food",
        "Bonfire Experience",
        "Music & Entertainment",
        "Family Gathering",
      ],
    },

    {
      title: "Resort Stay",
      features: [
        "Luxury Rooms",
        "Breakfast Included",
        "Swimming Pool",
        "Couple Friendly Stay",
      ],
    },

    {
      title: "Corporate Events",
      features: [
        "Team Outings",
        "Conference Setup",
        "Annual Gathering",
        "Dinner Packages",
      ],
    },
  ];

  return (
    <section
      className="py-15 bg-[#143D28]"
      id="packages"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
            Packages
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Our Premium Packages
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            Customized packages designed for weddings,
            celebrations, family outings and corporate events.
          </p>

        </div>


        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {packages.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              rounded-[30px]
              p-8
              shadow-2xl
              hover:border-[#D4AF37]
              transition-all
              duration-300"
            >

              {/* Title */}

              <h3 className="text-2xl font-bold text-[#D4AF37]">

                {item.title}

              </h3>


              {/* Custom Package */}

              <p className="text-white mt-3 font-medium">

                Customized Package Available

              </p>


              {/* Features */}

              <ul className="mt-8 space-y-4">

                {item.features.map((feature, i) => (

                  <li
                    key={i}
                    className="text-gray-300 flex gap-3"
                  >
                    ✓ {feature}
                  </li>

                ))}

              </ul>


              {/* Button */}

             <Link to="/contact#contact-form">
  <button
    className="
      mt-10
      w-full
      bg-[#D4AF37]
      text-black
      py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition duration-300
    "
  >
    Enquire Now
  </button>
</Link>
            </motion.div>

          ))}

        </div>



        {/* CTA Banner */}


<div
  className="
    relative
    mt-24
    max-w-5xl
    mx-auto
    overflow-hidden
    rounded-[40px]
    bg-white
    border
    border-[#D4AF37]/20
    p-8
    sm:p-12
    text-center
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  "
>
  {/* Gold Glow */}
  <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  {/* Top Label */}
  <div className="relative z-10 flex items-center justify-center gap-3 mb-6">
    <span className="w-12 h-[2px] bg-[#D4AF37]" />
    <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold">
      Get In Touch
    </span>
    <span className="w-12 h-[2px] bg-[#D4AF37]" />
  </div>

  {/* Heading */}
  <h2
    className="relative z-10 text-4xl lg:text-5xl font-bold text-[#143D28]"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    Need A <span className="text-[#D4AF37]">Customized Package?</span>
  </h2>

  {/* Description */}
  <p className="relative z-10 mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
    Whether you're planning a wedding, corporate event, birthday,
    picnic or private celebration, our team will create a package
    tailored to your needs and budget.
  </p>

  {/* Button */}
  <Link to="/contact">
    <button
      className="
        group
        relative
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
          absolute inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-700
        "
      />
      <span className="relative z-10">
        Contact Us Today
      </span>
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default Packages;
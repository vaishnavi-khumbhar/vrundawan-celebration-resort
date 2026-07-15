import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { Link } from "react-router-dom";

import weddingBanner from "../../assets/wedding-section/wedding-banne.jpg";

const WeddingSection = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      id="wedding"
    >
      {/* Background Image */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${weddingBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Golden Glow */}

      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        rounded-full
        bg-[#D4AF37]/20
        blur-[120px]"
      />

      <div
        className="
        absolute
        bottom-10
        right-10
        w-72
        h-72
        rounded-full
        bg-[#143D28]/40
        blur-[120px]"
      />

      {/* Content */}

      <div
        className="
        relative
        max-w-6xl
        mx-auto
        px-6
        lg:px-10
        text-center"
      >
        {/* Small Heading */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          uppercase
          tracking-[5px]
          text-[#D4AF37]
          font-semibold"
        >
          Destination Wedding in Latur
        </motion.p>

        {/* Main Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="
          text-white
          text-4xl
          lg:text-6xl
          font-bold
          mt-6
          leading-tight"
        >
          Make Your Dream Wedding
          <br />
          Truly Magical
        </motion.h2>

        {/* Paragraph */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="
          text-gray-200
          mt-8
          max-w-4xl
          mx-auto
          text-lg
          leading-8"
        >
          Celebrate your wedding amidst luxury,
          nature, and unforgettable hospitality.
          Experience elegant decorations, spacious
          venues, and premium services at Vrundawan
          Celebration & Resort.
        </motion.p>

        {/* Highlights */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-10"
        >
          <span
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            px-6
            py-3
            rounded-full
            text-white"
          >
            2500 Guest Capacity
          </span>

          <span
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            px-6
            py-3
            rounded-full
            text-white"
          >
            Luxury Wedding Lawn
          </span>

          <span
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            px-6
            py-3
            rounded-full
            text-white"
          >
            Premium Hospitality
          </span>
        </div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
          className="
          flex
          flex-wrap
          justify-center
          gap-5
          mt-12"
        >
         <Link to="/contact">
  <button
    className="
      group
      relative
      overflow-hidden
      rounded-full
      bg-gradient-to-r
      from-[#C99A1A]
      via-[#D4AF37]
      to-[#F3D98B]
      px-8
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
    {/* Shine Effect */}
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

    <span className="relative z-10">
      Book Your Wedding
    </span>
  </button>
</Link>

            <a href="tel:8087415366">
    <button
      className="
        group
        flex
        items-center
        gap-3
        rounded-full
        border-2
        border-[#D4AF37]
        bg-[#143D28]/90
        px-8
        py-4
        font-semibold
        text-[#D4AF37]
        backdrop-blur-md
        transition-all
        duration-500
        hover:bg-[#D4AF37]
        hover:text-[#143D28]
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(212,175,55,0.35)]
      "
    >
      <Phone
        size={20}
        className="transition-transform duration-300 group-hover:rotate-12"
      />
      Call Now
    </button>
  </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingSection;
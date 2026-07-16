import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const chips = ["Weddings", "Banquet Hall", "Grand Lawn", "Resort Stay"];

const About = () => {
  return (
    <section id="about" className="relative py-13 sm:py-13 bg-[#FAF7F2] overflow-hidden">

      {/* Soft decorative blobs — green & gold, kept subtle */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#143D28]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Ornament above eyebrow */}
       

        {/* Eyebrow as a pill badge instead of plain text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#143D28] bg-[#D4AF37]/15 px-5 py-1.5 rounded-full
          uppercase tracking-[3px] text-xs sm:text-sm font-semibold"
        >
          About Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-[#143D28] mt-6 leading-[1.1]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          Welcome To{" "}
          <span className="text-[#D4AF37]">
  Vrundawan
</span>
          <br className="hidden sm:block" /> Celebration &amp; Resort
        </motion.h2>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-gray-600 text-lg leading-8 max-w-2xl mx-auto"
        >
          Nestled amidst nature on Latur–Ambejogai Road,{" "}
          <span className="font-semibold text-[#143D28]">
            Vrundawan Celebration &amp; Resort
          </span>{" "}
          is a premium destination for weddings, celebrations, family outings
          and luxurious stays.
        </motion.p>

        {/* Feature chips — quick visual scan, no extra prose needed */}
        <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="mt-10 flex flex-wrap items-center justify-center gap-4"
>
  {chips.map((chip, index) => (
    <motion.span
      key={chip}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        px-6
        py-3
        text-sm
        font-medium
        tracking-wide
        text-[#143D28]
        bg-gradient-to-r
        from-[#FFF8E7]
        via-[#F8E7B5]
        to-[#FFF8E7]
        border
        border-[#D4AF37]/40
        shadow-[0_8px_20px_rgba(212,175,55,0.15)]
        transition-all
        duration-500
        hover:border-[#D4AF37]
        hover:shadow-[0_10px_30px_rgba(212,175,55,0.35)]
      "
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          top-0
          -left-full
          h-full
          w-1/2
          bg-white/40
          skew-x-[-20deg]
          transition-all
          duration-700
          group-hover:left-[130%]
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
        {chip}
      </span>
    </motion.span>
  ))}
</motion.div>


        {/* Button */}
     {/* Button */}
{/* Premium Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="mt-10 flex justify-center"
>
  <Link to="/about">
    <button
      className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-full
      border
      border-[#D4AF37]
      bg-gradient-to-r
      from-[#D4AF37]
      via-[#E7C45A]
      to-[#D4AF37]
      px-8
      py-4
      font-semibold
      text-[#143D28]
      shadow-[0_12px_35px_rgba(212,175,55,0.35)]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-[0_18px_45px_rgba(212,175,55,0.55)]
    "
    >
      {/* Shine Effect */}
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

      {/* Text */}
      <span className="relative z-10 flex items-center gap-2 tracking-wide">
        Learn More

        <svg
          className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2"
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
</motion.div>

      </div>
    </section>
  );
};

export default About;
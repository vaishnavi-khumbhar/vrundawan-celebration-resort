import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from "../assets/about-banner/b2.jpg"; // Change to your image

const InnerBanner = ({ badge, title, subtitle, currentPage }) => {
  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] md:h-[95vh] overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark green tint over the image */}
      <div className="absolute inset-0 bg-[#04231c]/70 mix-blend-multiply"></div>

      {/* Green gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04231c]/90 via-[#04231c]/60 to-[#04231c]/80"></div>

      {/* Extra vertical gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

      {/* Decorative glow accents — smaller/repositioned on mobile so they don't overpower */}
      <div className="absolute top-0 left-1/4 w-60 sm:w-80 md:w-[30rem] h-60 sm:h-80 md:h-[30rem] bg-[#D4AF37]/10 rounded-full blur-[80px] md:blur-[140px] -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-400/10 rounded-full blur-[70px] md:blur-[120px]" />

      {/* Frame + content wrapped together, starting below navbar */}
      <div className="absolute top-20 left-3 right-3 bottom-4 sm:top-24 sm:left-6 sm:right-6 sm:bottom-6 md:top-28 md:left-10 md:right-10 md:bottom-10">
        {/* Thin gold border frame */}
        <div className="absolute inset-0 border border-[#D4AF37]/25 rounded-xl sm:rounded-2xl pointer-events-none"></div>

        {/* Content — centered both vertically and horizontally inside the frame */}
        <div className="relative h-full flex items-center justify-center py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl px-4 sm:px-8 md:px-12 text-center flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] tracking-[2px] sm:tracking-[4px] uppercase text-[10px] sm:text-xs md:text-sm font-semibold bg-[#D4AF37]/5 backdrop-blur-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              {badge}
            </span>

            {/* Title */}
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white leading-[1.15] sm:leading-[1.1] px-1">
              {title}
            </h1>

            {/* Decorative divider */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3">
              <span className="w-8 sm:w-14 h-[2px] bg-[#D4AF37]" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#D4AF37]" />
              <span className="w-8 sm:w-14 h-[2px] bg-[#D4AF37]" />
            </div>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 leading-6 sm:leading-8 max-w-[22rem] sm:max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* Breadcrumb */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-lg">
              <Link to="/" className="hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span className="text-[#D4AF37]">/</span>
              <span className="text-[#D4AF37] font-semibold">{currentPage}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
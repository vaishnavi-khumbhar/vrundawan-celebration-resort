import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.webp";
import hero3 from "../../assets/hero/hero3.jpg";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];

  return (
    <section className="relative h-screen overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-[#D4AF37] !w-8",
          bulletClass:
            "swiper-pagination-bullet !bg-white/50 !w-2.5 !h-2.5 !rounded-full !transition-all !duration-300",
        }}
        className="h-screen"
      >

        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-screen">

              {/* Background Image */}
              <img
                src={image}
                alt="Vrundawan Celebration & Resort"
                className="w-full h-full object-cover"
              />

              {/* Deep overlay for bold text contrast */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60" />

              {/* Thin gold hairline top border — quiet luxury signal */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

              {/* Content — bottom-anchored, huge type, no card */}
              <div className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-28 lg:pb-32">

                <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">

                  {/* Eyebrow with number/index */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .6 }}
                    className="flex items-center gap-4 mb-5"
                  >
                    <span className="h-px w-10 bg-[#D4AF37]" />
                    <span
                      className="text-[#D4AF37] font-serif text-sm tracking-[4px] uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Latur–Ambejogai Road · Beside Majara River
                    </span>
                  </motion.div>

                  {/* Massive Heading — Vrundawan as the hero signature */}
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1, duration: .9, ease: "easeOut" }}
                    className="font-bold uppercase leading-[0.9] tracking-tight
                    text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[6.5rem]"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
                  >
                    <span
                      className="bg-clip-text text-transparent bg-[length:200%_auto] animate-[shine_6s_linear_infinite]"
                      style={{
                        backgroundImage:
                          "linear-gradient(110deg, #F3D98B 10%, #D4AF37 30%, #FFF6DC 45%, #D4AF37 60%, #B9902A 80%)",
                      }}
                    >
                      Vrundawan
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .25, duration: .7 }}
                    className="mt-2 text-white/80 uppercase tracking-[6px] text-xs sm:text-sm font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Celebration &amp; Resort
                  </motion.p>

                  {/* Bottom row: description left, buttons right */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .35, duration: .7 }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-8 pt-8 border-t border-white/20"
                  >
                    <p className="text-gray-300 max-w-md text-sm sm:text-base font-light leading-relaxed">
                      Premium Wedding Venue, Banquet Hall &amp; Resort in
                      Latur — where every celebration becomes an
                      unforgettable story.
                    </p>

                 

  {/* Book Venue */}
 <div className="mt-8 flex flex-nowrap sm:flex-wrap items-center gap-3">

  {/* Book Venue */}
  {/* Book Venue */}
<Link
  to="/contact"
  className="
    group relative overflow-hidden
    w-1/2 sm:w-auto
    rounded-full
    bg-gradient-to-r
    from-[#C99A1A]
    via-[#D4AF37]
    to-[#F3D98B]
    px-4 sm:px-8
    py-3 sm:py-4
    text-sm sm:text-base
    font-semibold
    text-[#143D28]
    shadow-[0_15px_35px_rgba(212,175,55,0.35)]
    transition-all duration-500
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-[0_20px_45px_rgba(212,175,55,0.55)]
    inline-flex items-center justify-center
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
      duration-700
    "
  />
  <span className="relative z-10">Book Venue</span>
</Link>

{/* Explore Resort */}
<Link
  to="/about"
  className="
    group relative overflow-hidden
    w-1/2 sm:w-auto
    rounded-full
    border border-[#D4AF37]/70
    bg-white/10
    backdrop-blur-md
    px-4 sm:px-8
    py-3 sm:py-4
    text-sm sm:text-base
    font-semibold
    text-white
    transition-all duration-500
    hover:-translate-y-1
    hover:bg-[#143D28]
    hover:border-[#D4AF37]
    hover:text-[#D4AF37]
    hover:shadow-[0_15px_35px_rgba(20,61,40,0.45)]
    inline-flex items-center justify-center
  "
>
  <span className="relative z-10">Explore Resort</span>
</Link>
</div>
                  </motion.div>

                </div>
              </div>

              {/* Slide index, top right — minimal editorial touch */}
              <div className="absolute top-24 right-6 sm:right-10 lg:right-16 z-20 text-right">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .5 }}
                  className="text-white/50 text-xs tracking-[3px] uppercase"
                >
                  0{index + 1} / 0{heroImages.length}
                </motion.p>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;

/*
  Add this keyframe once to your global CSS (e.g. index.css):

  @keyframes shine {
    to { background-position: -200% center; }
  }
*/
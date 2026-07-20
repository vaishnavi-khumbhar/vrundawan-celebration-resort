import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

import video1 from "../../assets/hero/video1.mp4";
import video2 from "../../assets/hero/video2.mp4";

const Hero = () => {
  const videos = [video1, video2];
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (playingIndex === index) {
      // Pause the currently playing video
      vid.pause();
      setPlayingIndex(null);
    } else {
      // Pause any other video, then play this one with sound on
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause();
          v.muted = true;
        }
      });
      vid.muted = false;
      vid.play().catch(() => {});
      setPlayingIndex(index);
    }
  };

  return (
    <section
      className="relative w-full py-10 sm:py-16 px-4 sm:px-8"
      id="home"
    >
      {/* Themed background - matches site's dark green gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#143D28] via-[#0F2E1D] to-[#0B2417] rounded-none sm:rounded-3xl sm:mx-6" />

      {/* Decorative glow accents */}
      <div className="pointer-events-none absolute -top-10 left-1/4 h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center mb-6 sm:mb-10 pt-6 sm:pt-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-[#D4AF37]/60" />
          <p className="text-[11px] sm:text-xs tracking-[3px] text-[#D4AF37] uppercase font-semibold">
            Watch &amp; Explore
          </p>
          <span className="h-px w-8 bg-[#D4AF37]/60" />
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          A Glimpse of <span className="text-[#D4AF37]">Nature &amp; Luxury</span>
        </h2>
        <p className="mt-3 max-w-md sm:max-w-xl text-sm sm:text-base text-gray-300">
          Tap a video to play with sound and feel the beauty of Champe Farm, Latur
        </p>
      </motion.div>

      {/* Videos */}
      <div
        className="
          relative z-10
          grid
          grid-cols-2
          gap-3 sm:gap-10
          max-w-3xl sm:max-w-5xl
          mx-auto
          pb-6 sm:pb-4
        "
      >
        {/* Center divider between the two videos */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-px">
          <span className="flex-1 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/70 to-transparent" />
          <span className="my-1.5 sm:my-2 h-2 w-2 sm:h-2.5 sm:w-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
          <span className="flex-1 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/70 to-transparent" />
        </div>

        {videos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
              relative
              w-full
              max-w-[230px] sm:max-w-[420px]
              mx-auto
             h-[300px]
sm:h-[420px]
lg:h-[520px]
              rounded-2xl
              overflow-hidden
              cursor-pointer
              group
              bg-black
              border-2 border-[#D4AF37]/50
              shadow-[0_15px_35px_rgba(0,0,0,0.5)]
              transition-all duration-500
              hover:border-[#D4AF37]
              hover:-translate-y-1.5
              hover:shadow-[0_20px_45px_rgba(212,175,55,0.3)]
            "
            onClick={() => togglePlay(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              loop
              muted={playingIndex !== index}
              playsInline
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0
                bg-gradient-to-t from-black/60 via-transparent to-black/10
                transition-opacity duration-300
                ${playingIndex === index ? "opacity-30" : "opacity-70"}
              `}
            />

            {/* Center Play / Pause button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  flex items-center justify-center
                  h-11 w-11 sm:h-14 sm:w-14
                  rounded-full
                  bg-[#D4AF37]
                  shadow-[0_8px_20px_rgba(212,175,55,0.5)]
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {playingIndex === index ? (
                  <Pause className="h-4 w-4 sm:h-6 sm:w-6 text-black" fill="black" />
                ) : (
                  <Play className="h-4 w-4 sm:h-6 sm:w-6 text-black ml-0.5" fill="black" />
                )}
              </div>
            </div>

            {/* Bottom label strip */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-[10px] sm:text-xs tracking-[2px] text-[#F5E6A9] uppercase">
                {index === 0 ? "Resort Tour" : "Farm Experience"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
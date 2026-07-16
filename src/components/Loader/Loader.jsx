import { motion } from "framer-motion";
import logo from "../../assets/logo/logo.jpeg";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F2D1D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/20 blur-[130px]" />
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#143D28]/60 blur-[110px]" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#143D28]/60 blur-[110px]" />

      {/* Subtle grain / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

      {/* Floating gold particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-20, -120],
            x: (i % 2 === 0 ? 1 : -1) * (20 + i * 10),
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
          className="absolute bottom-1/3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
        />
      ))}

      {/* Loader Container */}
      <div className="relative flex flex-col items-center px-6">
        <div className="relative flex items-center justify-center">
          {/* Outer thin static ring */}
          <div className="absolute w-60 h-60 rounded-full border border-[#D4AF37]/20" />

          {/* Golden Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-52 h-52 rounded-full border-[3px] border-t-[#D4AF37] border-r-[#D4AF37]/40 border-b-transparent border-l-transparent"
          />

          {/* Counter-rotating ring for depth */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-44 h-44 rounded-full border-2 border-t-transparent border-r-transparent border-b-[#F3D98B]/50 border-l-[#F3D98B]/50"
          />

          {/* Logo badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-xl scale-110" />
            <img
              src={logo}
              alt="Vrundawan Logo"
              className="relative w-30 h-30 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            />
          </motion.div>
        </div>

        {/* Decorative divider above text */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
        </motion.div>

        {/* Welcome Text — pushed further down, with glow + subtle breathing scale */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: { delay: 0.6, duration: 0.8 },
            y: { delay: 0.6, duration: 0.8 },
            scale: {
              delay: 1.4,
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative mt-6 md:mt-8 font-serif font-bold text-3xl md:text-5xl text-center tracking-wide bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#F3D98B] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          Welcome to Vrundawan
        </motion.h2>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="flex items-center gap-3 mt-4 md:mt-5"
        >
          <span className="h-[1px] w-6 bg-[#D4AF37]/60" />
          <p className="text-white/90 text-sm md:text-base tracking-[0.35em] uppercase font-light">
            Celebration &amp; Resort
          </p>
          <span className="h-[1px] w-6 bg-[#D4AF37]/60" />
        </motion.div>

        {/* Loading bar */}
        <div className="mt-10 md:mt-12 w-52 md:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* Loading Animation */}
        <div className="flex gap-2 mt-6">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.span
              key={delay}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }}
              transition={{ duration: 1, repeat: Infinity, delay }}
              className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
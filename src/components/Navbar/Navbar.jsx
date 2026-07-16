import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.jpeg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Gallery",
    path: "/gallery",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#0F2D1D]/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-0"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md scale-110 group-hover:bg-[#D4AF37]/50 transition duration-300" />
              <img
                src={logo}
                alt="logo"
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <h2
                className="font-serif font-bold text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#F3D98B] bg-clip-text text-transparent bg-[length:200%_auto] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:bg-[position:100%_center]"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Vrundawan
              </h2>

              <p className="text-white text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Celebration &amp; Resort
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}

         <ul className="hidden lg:flex items-center gap-8">
  {navLinks.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        `relative font-medium transition duration-300 group/link ${
          isActive
            ? "text-[#D4AF37]"
            : "text-white hover:text-[#D4AF37]"
        }`
      }
    >
      {item.name}

      <span
        className="
        absolute
        left-0
        -bottom-1
        w-0
        h-[1.5px]
        bg-[#D4AF37]
        transition-all
        duration-300
        group-hover/link:w-full"
      />
    </NavLink>
  ))}
</ul>

          {/* Buttons */}

          <div className="hidden lg:flex gap-4">

            <a href="tel:+918180877750">

              <button
                className="flex items-center gap-2 border border-[#D4AF37]
                text-[#D4AF37] px-5 py-3 rounded-full
                hover:bg-[#D4AF37] hover:text-black transition duration-300"
              >
                <Phone size={18} />
                Call Now
              </button>

            </a>

           <Link
  to="/contact"
  className="inline-block"
>
  <button
    className="bg-[#D4AF37]
    text-black
    px-6 py-3
    rounded-full
    font-semibold
    shadow-[0_6px_20px_rgba(212,175,55,0.35)]
    hover:scale-105
    hover:shadow-[0_6px_25px_rgba(212,175,55,0.55)]
    transition-all duration-300"
  >
    Book Venue
  </button>
</Link>

          </div>

          {/* Mobile Icon */}

          <div
            className="lg:hidden cursor-pointer text-white bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: .35, ease: "easeOut" }}
            className="lg:hidden
            bg-[#0F2D1D]/98
            backdrop-blur-xl
            border-t border-[#D4AF37]/20
            px-6
            pb-8
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >

            <ul className="pt-6 divide-y divide-white/10">

             {navLinks.map((item, i) => (
  <NavLink
    key={item.name}
    to={item.path}
    onClick={() => setOpen(false)}
  >
    <motion.li
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: i * 0.06,
        duration: 0.3,
      }}
      className="
      text-white
      text-lg
      font-medium
      py-4
      flex
      items-center
      justify-between
      hover:text-[#D4AF37]
      transition
      duration-300"
    >
      {item.name}

      <span className="text-[#D4AF37]/60 text-xl">
        &rsaquo;
      </span>
    </motion.li>
  </NavLink>
))}

            </ul>

            <div className="flex flex-col gap-3 mt-6">

              <a href="tel:+918180877750" className="w-full">

                <button
                  className="w-full flex items-center justify-center gap-2
                  border border-[#D4AF37]
                  text-[#D4AF37]
                  py-3.5 rounded-full
                  font-medium
                  active:scale-95
                  transition duration-200"
                >
                  <Phone size={17} />
                  Call Now
                </button>

              </a>

              <button
                className="w-full
                bg-gradient-to-r from-[#D4AF37] to-[#F3D98B]
                text-black
                py-3.5 rounded-full font-semibold
                shadow-[0_6px_20px_rgba(212,175,55,0.4)]
                active:scale-95
                transition duration-200"
              >
                Book Venue
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>




      

    </nav>
  );
};

export default Navbar;
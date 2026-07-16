import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/logo/logo.jpeg";

const Footer = () => {
  return (
    <footer
      className="
      relative
      bg-gradient-to-b
      from-[#081C15]
      to-[#0a2818]
      text-white
      pt-12
      md:pt-15
      pb-10
      overflow-hidden"
    >

      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">

        {/* Logo */}

        <div className="text-center">
          <div
            className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            sm:gap-4
            text-center
            sm:text-left"
          >

            <div
              className="
              w-20
              h-20
              md:w-24
              md:h-24
              rounded-full
              p-[3px]
              shrink-0
              bg-gradient-to-br
              from-[#D4AF37]
              via-[#F3D98B]
              to-[#C99A1A]
              shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
            >
              <img
                src={logo}
                alt="Vrundawan Celebration & Resort Logo"
                className="
                w-full
                h-full
                rounded-full
                object-cover
                border-2
                border-[#081C15]"
              />
            </div>

            <div className="text-center sm:text-left">
              <h2
                className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-[#D4AF37]
                tracking-wide"
              >
                VRUNDAWAN
              </h2>

              <p className="mt-1 text-gray-300 tracking-[3px] uppercase text-[10px] sm:text-[11px] md:text-xs">
                Celebrate • Stay • Experience
              </p>
            </div>

          </div>
        </div>


        {/* Grid */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          mt-12
          md:mt-16
          text-center
          md:text-left"
        >

          {/* About */}

          <div className="flex flex-col items-center md:items-start">

            <h3
              className="
              text-xl
              font-bold
              text-[#D4AF37]
              relative
              inline-block
              pb-2"
            >
              About Us
              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]" />
            </h3>

            <p
              className="
              text-gray-300
              mt-5
              leading-8
              max-w-xs
              md:max-w-none"
            >
              Premium Wedding Venue,
              Resort Stay, Family Picnic,
              Corporate Events and
              unforgettable celebrations
              in Latur.
            </p>

          </div>



          {/* Links */}

          <div className="flex flex-col items-center md:items-start">

            <h3
              className="
              text-xl
              font-bold
              text-[#D4AF37]
              relative
              inline-block
              pb-2"
            >
              Quick Links
              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]" />
            </h3>

            <ul
              className="
              mt-5
              space-y-4
              flex
              flex-col
              items-center
              md:items-start"
            >

              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (link, i) => (
                  <li
                    key={i}
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-300
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:text-[#D4AF37]
                    hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70" />
                    {link}
                  </li>
                )
              )}

            </ul>

          </div>



          {/* Services */}

          <div className="flex flex-col items-center md:items-start">

            <h3
              className="
              text-xl
              font-bold
              text-[#D4AF37]
              relative
              inline-block
              pb-2"
            >
              Our Services
              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]" />
            </h3>

            <ul
              className="
              mt-5
              space-y-4
              flex
              flex-col
              items-center
              md:items-start"
            >

              {[
                "Wedding Venue",
                "Grand Lawn",
                "Resort Stay",
                "Swimming Pool",
                "Corporate Events",
              ].map((service, i) => (
                <li
                  key={i}
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-300
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:text-[#D4AF37]
                  hover:translate-x-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70" />
                  {service}
                </li>
              ))}

            </ul>

          </div>




          {/* Contact */}

          <div className="flex flex-col items-center md:items-start">

            <h3
              className="
              text-xl
              font-bold
              text-[#D4AF37]
              relative
              inline-block
              pb-2"
            >
              Contact Info
              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]" />
            </h3>


            <div
              className="
              mt-5
              space-y-4
              flex
              flex-col
              items-center
              md:items-start"
            >

              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#143D28] transition">
                  <Phone size={16} />
                </div>
                <p className="text-gray-300">+91 81808 77750</p>
              </div>


              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#143D28] transition">
                  <Phone size={16} />
                </div>
                <p className="text-gray-300">+91 80874 15366</p>
              </div>


              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#143D28] transition">
                  <Phone size={16} />
                </div>
                <p className="text-gray-300">+91 94054 00914</p>
              </div>


              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#143D28] transition">
                  <Mail size={16} />
                </div>
                <p className="text-gray-300 break-all">info@vrundawan.com</p>
              </div>

            </div>

          </div>

        </div>


        {/* Divider */}

        <div
          className="
          border-t
          border-white/10
          my-10
          md:my-12"
        />



        {/* Address */}

        <div className="text-center px-4">

          <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
            <MapPin
              size={22}
              className="text-[#D4AF37]"
            />
          </div>

          <p
            className="
            mt-3
            text-gray-300
            text-sm
            md:text-base
            leading-6
            md:leading-4
            max-w-xs
            md:max-w-none
            mx-auto
            whitespace-normal
            md:whitespace-nowrap"
          >
            Latur-Ambejogai Road, Beside Majara River, Mahapur, Taluka & District Latur, Maharashtra.
          </p>

        </div>



        {/* Social Media */}

        <div
          className="
          flex
          justify-center
          gap-4
          sm:gap-6
          mt-7
          flex-wrap"
        >
          <a
            href="#"
            className="
            bg-white/10
            p-3.5
            sm:p-4
            rounded-full
            hover:bg-[#D4AF37]
            hover:text-[#143D28]
            hover:scale-110
            hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)]
            transition-all
            duration-300"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="#"
            className="
            bg-white/10
            p-3.5
            sm:p-4
            rounded-full
            hover:bg-[#D4AF37]
            hover:text-[#143D28]
            hover:scale-110
            hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)]
            transition-all
            duration-300"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="#"
            className="
            bg-white/10
            p-3.5
            sm:p-4
            rounded-full
            hover:bg-[#D4AF37]
            hover:text-[#143D28]
            hover:scale-110
            hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)]
            transition-all
            duration-300"
          >
            <FaYoutube size={18} />
          </a>
        </div>

        {/* Bottom */}

        <div
          className="
          border-t
          border-white/10
          mt-8
          pt-2
          text-center
          px-4"
        >

          <p className="text-gray-400 text-sm md:text-base">

            © 2026 Vrundawan Celebration &
            Resort | All Rights Reserved.

          </p>

        <p
  className="
    text-gray-500
    mt-3
    text-xs
    sm:text-sm"
>
  Designed & Developed By{" "}
  <a
    href="https://www.advertisingandbrandingmarketing.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-[#D4AF37]
      font-bold
      tracking-wide
      hover:text-[#F3D98B]
      transition-colors
      duration-300
    "
  >
    Advertising Branding & Marketing
  </a>
</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
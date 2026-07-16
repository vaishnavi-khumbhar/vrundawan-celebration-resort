import { motion } from "framer-motion";
import * as CountUpModule from "react-countup";

import aboutImage from "../assets/about/about.avif";
import { Phone, MessageCircle } from "lucide-react";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Counters from "../components/Counters/Counters";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import InnerBanner from "../components/InnerBanner";

const CountUp =
  CountUpModule.default?.default ||
  CountUpModule.default ||
  CountUpModule;

const AboutPage = () => {
  return (
    <>

    <InnerBanner
        badge="About Us"
        title="Welcome To Vrundawan"
        subtitle="Experience luxury, celebration and nature together at one of the finest wedding and resort destinations in Latur."
        currentPage="About"
      />

      {/* इथे About component ऐवजी तुझा पूर्ण About section paste कर */}
      <section className="py-10 bg-[#FAF7F2] overflow-hidden">
       <section
      className="py-10 bg-[#FAF7F2] overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
            About Us
          </p>

         

          <p className="text-gray-600 max-w-3xl mx-auto mt-5">
            Experience luxury, celebration, and nature together at one of the
            finest wedding and resort destinations in Latur.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <img
              src={aboutImage}
              alt="about"
              className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-[#143D28]">
              Premium Wedding Venue, Banquet Hall & Resort
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Located beside the scenic Majara River on Latur–Ambejogai Road,
              Vrundawan Celebration & Resort offers a perfect blend of luxury,
              hospitality, and unforgettable experiences.
              Whether you're planning a grand wedding, family celebration,
              one-day picnic, corporate event, or weekend getaway, Vrundawan
              has everything under one roof.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-xl">✔</span>
                <p>Luxury Wedding Destination</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-xl">✔</span>
                <p>Swimming Pool & Resort Stay</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-xl">✔</span>
                <p>Corporate Events & Family Picnics</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-xl">✔</span>
                <p>Grand Lawn & Mangal Karyalay</p>
              </div>
            </div>

            {/* Button */}
            
          </motion.div>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              <CountUp end={2500} duration={3} />+
            </h3>
            <p className="mt-3">Guest Capacity</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              <CountUp end={1200} duration={3} />+
            </h3>
            <p className="mt-3">Wedding Capacity</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              <CountUp end={15} duration={3} />+
            </h3>
            <p className="mt-3">Activities</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              <CountUp end={100} duration={3} />+
            </h3>
            <p className="mt-3">Happy Events</p>
          </div>

        </div>
      </div>
    </section>
      </section>

      <WhyChooseUs />
      
      <section>
  {/* CTA Banner */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mt-0 text-center relative bg-white rounded-[40px] py-16 px-6 shadow-xl border border-[#143D28]/5"
  >
    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

    <h2 className="text-4xl font-bold text-[#143D28] relative">
      Book Your Site Visit Today
    </h2>

    <p className="text-gray-600 mt-5 relative">
      Visit Vrundawan Celebration &amp; Resort and experience luxury in person.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10 relative">
      
      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group inline-flex items-center gap-2 bg-[#143D28] text-white
        px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#143D28]/20
        transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <Phone size={18} />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Vrundawan%20Celebration%20%26%20Resort,%20I%20would%20like%20to%20enquire%20about%20your%20wedding%20venue,%20resort%20stay%20and%20event%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 bg-[#D4AF37] text-[#143D28]
        px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#D4AF37]/30
        transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <MessageCircle size={18} />
        WhatsApp Now
      </a>

    </div>
  </motion.div>
</section>
      <Counters />
    </>
  );
};

export default AboutPage;
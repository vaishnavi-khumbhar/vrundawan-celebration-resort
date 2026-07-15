import * as CountUpModule from "react-countup";
import { motion } from "framer-motion";
import {
  Trees,
  Building2,
  UtensilsCrossed,
  Sparkles,
  CalendarDays,
  Award,
} from "lucide-react";

// Handles CJS/ESM interop so CountUp always resolves to the actual
// component, not the module object (this was causing "Element type
// is invalid" in the render).
const CountUp = CountUpModule.default?.default || CountUpModule.default || CountUpModule;

const Counters = () => {
  const stats = [
    {
      number: 2500,
      suffix: "+",
      title: "Grand Lawn",
      subtitle: "Guest Capacity",
      icon: <Trees size={26} />,
    },
    {
      number: 1200,
      suffix: "+",
      title: "Mangal Karyalay",
      subtitle: "Guest Capacity",
      icon: <Building2 size={26} />,
    },
    {
      number: 200,
      suffix: "+",
      title: "Banquet Hall",
      subtitle: "Guest Capacity",
      icon: <UtensilsCrossed size={26} />,
    },
    {
      number: 15,
      suffix: "+",
      title: "Premium",
      subtitle: "Experiences",
      icon: <Sparkles size={26} />,
    },
    {
      number: 365,
      suffix: "",
      title: "Celebration",
      subtitle: "Days Open",
      icon: <CalendarDays size={26} />,
    },
    {
      number: 100,
      suffix: "%",
      title: "Premium",
      subtitle: "Hospitality",
      icon: <Award size={26} />,
    },
  ];

  return (
    <section className="py-24 bg-[#143D28] relative overflow-hidden" id="counters">

      {/* Ambient gold glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
            Vrundawan By The Numbers
          </p>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4">
            Where Every Celebration Becomes Magical
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            Premium venues, unforgettable experiences, and luxurious
            hospitality—all under one roof.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/10
              rounded-[30px] p-10 text-center shadow-xl overflow-hidden
              hover:border-[#D4AF37]/60 transition duration-300"
            >
              {/* Soft glow behind icon on hover */}
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-28
                rounded-full bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 blur-2xl transition-all duration-500" />

              {/* Icon badge */}
              <div className="relative flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br from-[#D4AF37] to-[#a8842a] text-[#143D28]
                  shadow-lg shadow-[#D4AF37]/30 ring-1 ring-[#D4AF37]/40
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Number */}
              <h2 className="text-5xl font-bold bg-gradient-to-b from-[#D4AF37] to-[#a8842a]
                bg-clip-text text-transparent">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={200}
                  useEasing
                />
                {item.suffix}
              </h2>

              {/* Title */}
              <h3 className="text-white text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              {/* Gold underline that grows on hover */}
              <div className="w-8 h-[2px] bg-[#D4AF37] mx-auto mt-3 mb-3 group-hover:w-14 transition-all duration-300" />

              {/* Subtitle */}
              <p className="text-gray-300">
                {item.subtitle}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Counters;
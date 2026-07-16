import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  User,
  Calendar,
  Users,
  PartyPopper,
  Send,
  ArrowRight,
} from "lucide-react";

import InnerBanner from "../components/InnerBanner";

const WHATSAPP_NUMBER = "918180877750"; // country code + number, no + or spaces

const ContactPage = () => {
  // Quick side-form (in place of the old cards grid)
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleQuickChange = (e) => {
    setQuickForm({ ...quickForm, [e.target.name]: e.target.value });
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();

    if (!quickForm.name || !quickForm.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const text =
      `Hello Vrundawan Celebration & Resort! 🌿\n\n` +
      `I would like to enquire about a booking.\n\n` +
      `*Name:* ${quickForm.name}\n` +
      `*Phone:* ${quickForm.phone}\n` +
      `*Message:* ${quickForm.message || "-"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Detailed enquiry form (unchanged, at the bottom)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const text =
      `Hello Vrundawan Celebration & Resort! 🌿\n\n` +
      `I would like to enquire about a booking.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Event Type:* ${formData.eventType || "-"}\n` +
      `*Guest Count:* ${formData.guests || "-"}\n` +
      `*Preferred Date:* ${formData.date || "-"}\n` +
      `*Message:* ${formData.message || "-"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 81808 77750",
      href: "tel:+918180877750",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Enquiries",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@vrundawan.com",
      href: "mailto:info@vrundawan.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Latur-Ambejogai Road, Beside Majara River, Mahapur, Taluka & District Latur, Maharashtra.",
      href: "https://maps.google.com/?q=Vrundawan+Celebration+Resort+Latur",
    },
  ];

  const eventTypes = [
    "Wedding",
    "Reception",
    "Engagement",
    "Birthday Party",
    "Corporate Event",
    "Family Picnic",
    "Hurda Party",
    "Resort Stay",
    "Other",
  ];

  return (
    <>
      <InnerBanner
        badge="Get In Touch"
        title="Let's Plan Your Celebration"
        subtitle="Reach out to us for venue bookings, event inquiries or personalized assistance."
        currentPage="Contact"
      />

      <section className="py-14 sm:py-16 md:py-20 bg-[#FAF7F2]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#D4AF37] font-semibold text-sm">
              Contact Us
            </p>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143D28] mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let's Plan Your Celebration
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto px-2">
              Weddings, Picnics, Corporate Events, Resort Stay and
              unforgettable memories begin here.
            </p>
          </div>

          

          {/* ===== Contact Info + Quick Form (replaces old cards grid) ===== */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Left: Contact Info stacked cards */}
            <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="group relative flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Hover fill */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#143D28] to-[#1B5138] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors duration-500">
                      <Icon size={22} className="text-[#D4AF37]" />
                    </div>

                    <div className="relative text-left">
                    <h3
  className="font-bold text-xl sm:text-2xl text-[#143D28] group-hover:text-white transition-colors duration-500"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  {item.title}
</h3>
                      <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500 break-words">
                        {item.value}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="relative ml-auto text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 shrink-0"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Right: Compact contact form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-[#143D28] via-[#1B5138] to-[#0E2A1C] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(20,61,40,.4)]"
            >
              {/* Decorative glows */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] tracking-[2px] uppercase text-[10px] sm:text-xs font-semibold bg-[#D4AF37]/5">
                 
                  Contact Form
                </span>

                <h3
                  className="mt-4 text-2xl sm:text-3xl text-white font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Send Us a Message
                </h3>

                <p className="mt-2 text-gray-300 text-sm">
                  We'll respond to you on WhatsApp as soon as possible.
                </p>

                <form
                  onSubmit={handleQuickSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                      />
                      <input
                        type="text"
                        name="name"
                        value={quickForm.name}
                        onChange={handleQuickChange}
                        placeholder="Your Name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={quickForm.phone}
                        onChange={handleQuickChange}
                        placeholder="Phone Number"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    value={quickForm.message}
                    onChange={handleQuickChange}
                    rows="3"
                    placeholder="Your Message"
                    className="p-4 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300 resize-none"
                  />

                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] px-8 py-3.5 font-semibold text-[#143D28] shadow-[0_12px_28px_rgba(212,175,55,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] self-start"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition duration-700" />
                    <span className="relative">Send </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>


          {/* Google Maps */}
<div className="mt-12 sm:mt-16 md:mt-20 relative rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
  <iframe
    title="Vrundawan Celebration & Resort Location"
    className="w-full h-[280px] sm:h-[380px] md:h-[450px]"
    src="https://maps.google.com/maps?q=Latur-Ambejogai%20Road%2C%20Beside%20Majara%20River%2C%20Mahapur%2C%20Taluka%20%26%20District%20Latur%2C%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          {/* Form Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 relative overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#143D28] via-[#1B5138] to-[#0E2A1C] p-6 sm:p-10 md:p-14 shadow-[0_25px_60px_rgba(20,61,40,.45)]">
            {/* Decorative glows */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] tracking-[2px] sm:tracking-[3px] uppercase text-[10px] sm:text-xs font-semibold bg-[#D4AF37]/5">
              
                Quick Enquiry
              </span>

              <h2
                className="mt-5 text-3xl sm:text-4xl md:text-5xl text-white font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Tell Us About Your Event
              </h2>

              <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                Fill the details below — we'll get your enquiry directly on
                WhatsApp for a quick response.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative grid sm:grid-cols-2 gap-4 sm:gap-6 mt-10"
            >
              {/* Name */}
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                  required
                />
              </div>

              {/* Event Type */}
              <div className="relative">
                <PartyPopper
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] z-10"
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/95 text-[#143D28] outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Count */}
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                />
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Approx. Guest Count"
                  className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                />
              </div>

              {/* Preferred Date */}
              <div className="relative sm:col-span-2">
                <Calendar
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] z-10"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/95 text-[#143D28] outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us more about your event..."
                className="sm:col-span-2 p-4 rounded-xl bg-white/95 text-[#143D28] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#D4AF37] transition-colors duration-300 resize-none"
              />

              {/* Submit */}
              <div className="sm:col-span-2 text-center mt-2">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] px-8 sm:px-10 py-3.5 sm:py-4 font-semibold text-[#143D28] shadow-[0_15px_35px_rgba(212,175,55,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition duration-700" />
                  <MessageCircle size={20} className="relative" />
                  <span className="relative">Send Enquiry on WhatsApp</span>
                </button>

                <p className="mt-3 text-gray-400 text-xs sm:text-sm">
                  Clicking this will open WhatsApp with your details filled in.
                </p>
              </div>
            </form>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 sm:mt-20 md:mt-24 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143D28]">
              Book Your Site Visit Today
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-5 max-w-xl mx-auto px-2">
              Visit Vrundawan Celebration & Resort and experience luxury in
              person.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-10">
              <a href="tel:+918180877750">
                <button className="flex items-center gap-2 bg-[#143D28] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#0E2A1C] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <Phone size={18} />
                  Call Now
                </button>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 bg-gradient-to-r from-[#C99A1A] via-[#D4AF37] to-[#F3D98B] text-[#143D28] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <MessageCircle size={18} />
                  WhatsApp Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
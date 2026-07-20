import { motion } from "framer-motion";
import { useState } from "react";

import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Send,
  User,
  PartyPopper,
  Users,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "+91 94054 00914",
  },
  {
    icon: <Mail size={22} />,
    label: "Email Us",
    value: "info@vrundawan.com",
  },
  {
    icon: <MapPin size={22} />,
    label: "Visit Us",
    value: "Chabhe Farm, Latur–Ambajogai Road, Mahapur, Latur",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🏡 *NEW ENQUIRY - VRUNDAWAN RESORT & AGRO TOURISM*

━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${form.name}

📞 *Mobile:* ${form.phone}

🎉 *Event Type:* ${form.event}

👥 *Guest Count:* ${form.guests}

💬 *Message:*
${form.message}

━━━━━━━━━━━━━━━━━━━━
Thank you 🙏`;

    window.open(
      `https://wa.me/919405400914?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setForm({
      name: "",
      phone: "",
      event: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section className="py-15 bg-[#FAF7F2] relative overflow-hidden" id="contact">

      {/* Ambient background accents */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#143D28]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Eyebrow + Heading */}
        <div className="text-center">
          <p className="text-[#D4AF37] uppercase tracking-[5px] font-semibold">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#143D28] mt-4">
            Let's Plan Your Celebration
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Share a few details and our team will get back to you with
            everything you need to know.
          </p>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid lg:grid-cols-5 bg-[#143D28] rounded-[40px] overflow-hidden shadow-2xl"
        >

          {/* Left: contact info panel */}
          <div className="lg:col-span-2 p-10 lg:p-12 bg-[#0f2e1d] relative">
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <h3 className="text-white text-2xl font-bold relative">
              Quick Enquiry
            </h3>
            <p className="text-gray-300 mt-3 relative">
              Reach out directly, or fill the form and we'll contact you
              within a few hours.
            </p>

            <div className="mt-10 space-y-6 relative">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-5"
            >
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/95 text-[#143D28]
                  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/95 text-[#143D28]
                  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="relative">
                <PartyPopper size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="event"
                  value={form.event}
                  onChange={handleChange}
                  placeholder="Event Type"
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/95 text-[#143D28]
                  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="relative">
                <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="Guest Count"
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/95 text-[#143D28]
                  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="sm:col-span-2 p-4 rounded-xl bg-white/95 text-[#143D28]
                placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />

              <div className="sm:col-span-2 flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="
                    group
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#C99A1A]
                    via-[#D4AF37]
                    to-[#F3D98B]
                    px-10
                    py-4
                    font-semibold
                    text-[#143D28]
                    shadow-[0_12px_30px_rgba(212,175,55,0.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-[0_18px_40px_rgba(212,175,55,0.55)]
                  "
                >
                  Send Enquiry
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>

        </motion.div>


        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-15 text-center relative bg-white rounded-[40px] py-16 px-6 shadow-xl border border-[#143D28]/5"
        >
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <h2 className="text-4xl font-bold text-[#143D28] relative">
            Book Your Site Visit Today
          </h2>

          <p className="text-gray-600 mt-5 relative">
            Visit Vrundawan Resort &amp; Agro Tourism and experience nature
            in person.
          </p>

         <div className="flex flex-wrap justify-center gap-5 mt-10 relative">
  {/* Call Button */}
  <a
    href="tel:+919405400914"
    className="group inline-flex items-center gap-2 bg-[#143D28] text-white
      px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#143D28]/20
      transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <Phone size={18} />
    Call Now
  </a>

  {/* WhatsApp Button */}
  <a
    href={`https://wa.me/919405400914?text=${encodeURIComponent(
      "Hello, I would like to enquire about Vrundawan Resort & Agro Tourism."
    )}`}
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

      </div>
    </section>
  );
};

export default Contact;
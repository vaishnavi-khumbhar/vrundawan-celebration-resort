import { motion } from "framer-motion";

import {

Phone,
MapPin,
Mail,
MessageCircle,

} from "lucide-react";

const ContactPage = () => {
  return (
    <section
      className="py-24 bg-[#FAF7F2]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">


        {/* Heading */}

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[5px]
            text-[#D4AF37]
            font-semibold"
          >
            Contact Us
          </p>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#143D28]
            mt-4"
          >
            Let's Plan Your Celebration
          </h2>

          <p
            className="
            text-gray-600
            mt-5"
          >
            Weddings, Picnics, Corporate Events,
            Resort Stay and unforgettable memories
            begin here.
          </p>

        </div>



        {/* Google Maps */}

        <div className="mt-20">

          <iframe
            title="map"
            className="
            w-full
            h-[450px]
            rounded-[30px]
            shadow-xl"
            src="YOUR_GOOGLE_MAP_LINK"
            loading="lazy"
          />

        </div>



        {/* Contact Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-20"
        >

          {/* Call */}

          <div
            className="
            bg-white
            p-8
            rounded-[30px]
            shadow-xl
            text-center"
          >
            <Phone
              size={40}
              className="mx-auto text-[#D4AF37]"
            />

            <h3 className="mt-5 font-bold text-xl">
              Call Us
            </h3>

            <p className="mt-3 text-gray-600">
              +91 81808 77750
            </p>

          </div>



          {/* WhatsApp */}

          <div
            className="
            bg-white
            p-8
            rounded-[30px]
            shadow-xl
            text-center"
          >
            <MessageCircle
              size={40}
              className="mx-auto text-[#D4AF37]"
            />

            <h3 className="mt-5 font-bold text-xl">
              WhatsApp
            </h3>

            <p className="mt-3 text-gray-600">
              Quick Enquiries
            </p>

          </div>



          {/* Email */}

          <div
            className="
            bg-white
            p-8
            rounded-[30px]
            shadow-xl
            text-center"
          >
            <Mail
              size={40}
              className="mx-auto text-[#D4AF37]"
            />

            <h3 className="mt-5 font-bold text-xl">
              Email Us
            </h3>

            <p className="mt-3 text-gray-600">
              info@vrundawan.com
            </p>

          </div>



          {/* Location */}

          <div
            className="
            bg-white
            p-8
            rounded-[30px]
            shadow-xl
            text-center"
          >
            <MapPin
              size={40}
              className="mx-auto text-[#D4AF37]"
            />

            <h3 className="mt-5 font-bold text-xl">
              Location
            </h3>

            <p className="mt-3 text-gray-600">
              Latur, Maharashtra
            </p>

          </div>

        </div>






        {/* Form Section */}

        <div
          className="
          mt-24
          bg-[#143D28]
          rounded-[40px]
          p-12"
        >

          <h2
            className="
            text-center
            text-white
            text-4xl
            font-bold"
          >
            Quick Enquiry
          </h2>


          <form
            className="
            grid
            lg:grid-cols-2
            gap-6
            mt-10"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
              p-4
              rounded-xl"
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="
              p-4
              rounded-xl"
            />

            <input
              type="text"
              placeholder="Event Type"
              className="
              p-4
              rounded-xl"
            />

            <input
              type="number"
              placeholder="Guest Count"
              className="
              p-4
              rounded-xl"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="
              lg:col-span-2
              p-4
              rounded-xl"
            />

          </form>


          <div className="text-center">

            <button
              className="
              mt-8
              bg-[#D4AF37]
              text-black
              px-10
              py-4
              rounded-full
              font-semibold"
            >
              Send Enquiry
            </button>

          </div>

        </div>



        {/* CTA Banner */}

        <div
          className="
          mt-24
          text-center"
        >

          <h2
            className="
            text-4xl
            font-bold
            text-[#143D28]"
          >
            Book Your Site Visit Today
          </h2>

          <p
            className="
            text-gray-600
            mt-5"
          >
            Visit Vrundawan Celebration &
            Resort and experience luxury
            in person.
          </p>


          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-10"
          >

            <button
              className="
              bg-[#143D28]
              text-white
              px-8
              py-4
              rounded-full"
            >
              Call Now
            </button>


            <button
              className="
              bg-[#D4AF37]
              text-black
              px-8
              py-4
              rounded-full"
            >
              WhatsApp Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;










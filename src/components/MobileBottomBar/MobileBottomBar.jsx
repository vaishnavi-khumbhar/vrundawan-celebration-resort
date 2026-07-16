import { Phone, MapPinned } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-[9999] flex justify-center lg:hidden">

      <div
        className="
          w-[94%]
          max-w-sm
          bg-[#ffffffee]
          backdrop-blur-2xl
          rounded-3xl
          border border-[#D4AF37]/40
          shadow-[0_15px_40px_rgba(0,0,0,0.25)]
          px-3
          py-2
        "
      >

        <div className="grid grid-cols-3 items-center gap-2">


          {/* CALL */}
          <a
            href="tel:+918180877750"
            className="
            group
            flex flex-col items-center justify-center
            py-2
            rounded-2xl
            hover:bg-[#0F2D1D]/5
            transition
            "
          >

            <div
              className="
              w-10 h-10
              rounded-full
              bg-[#0F2D1D]
              text-[#D4AF37]
              flex items-center justify-center
              shadow-lg
              group-hover:scale-110
              transition
              "
            >
              <Phone size={18}/>
            </div>

            <span className="
            text-[11px]
            mt-1
            font-semibold
            text-[#0F2D1D]
            ">
              Call
            </span>

          </a>



          {/* WHATSAPP */}
          <a
            href="https://wa.me/918180877750?text=Hello%20Vrundawan%20Celebration%20%26%20Resort,%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="
            relative
            -mt-4
            flex flex-col items-center justify-center
            "
          >

            <div
              className="
              w-16 h-16
              rounded-full
              bg-gradient-to-br
              from-[#25D366]
              to-[#128C7E]
              border-[5px]
              border-white
              shadow-[0_8px_25px_rgba(37,211,102,0.45)]
              flex items-center justify-center
              animate-pulse
              "
            >

              <FaWhatsapp
                size={32}
                className="text-white"
              />

            </div>


            <span
              className="
              text-[11px]
              mt-1
              font-bold
              text-[#128C7E]
              "
            >
              WhatsApp
            </span>

          </a>




          {/* LOCATION */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            flex flex-col items-center justify-center
            py-2
            rounded-2xl
            hover:bg-[#0F2D1D]/5
            transition
            "
          >

            <div
              className="
              w-10 h-10
              rounded-full
              bg-[#0F2D1D]
              text-[#D4AF37]
              flex items-center justify-center
              shadow-lg
              group-hover:scale-110
              transition
              "
            >

              <MapPinned size={18}/>

            </div>


            <span
              className="
              text-[11px]
              mt-1
              font-semibold
              text-[#0F2D1D]
              "
            >
              Location
            </span>

          </a>


        </div>

      </div>

    </div>
  );
};


export default MobileBottomBar;
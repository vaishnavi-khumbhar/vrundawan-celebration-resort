import { Phone, MapPin } from "lucide-react";

const LOCATION_URL =
  "https://maps.google.com/?q=Vrundawan+Celebration+%26+Resort+Mahapur+Latur";

const MobileActionBar = () => {
  return (
    <div
      className="lg:hidden fixed bottom-4 left-4 right-20 z-40 flex gap-2"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Call */}
      <a
        href="tel:+918180877750"
        className="flex-1 flex items-center justify-center gap-2
        py-2 rounded-xl
        bg-gradient-to-b from-[#123522] to-[#0A2016]
        border border-[#D4AF37]/60
        shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)]
        text-[#F3D98B]
        font-semibold text-[12px]
        active:scale-95
        transition-transform duration-150"
      >
        <span className="h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
          <Phone size={15} strokeWidth={2.4} className="text-[#0A2016]" />
        </span>
        Call Now
      </a>

      {/* Location */}
      <a
        href={LOCATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2
        py-2 rounded-xl
        bg-gradient-to-b from-[#123522] to-[#0A2016]
        border border-[#D4AF37]/60
        shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)]
        text-[#F3D98B]
        font-semibold text-[12px]
        active:scale-95
        transition-transform duration-150"
      >
        <span className="h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
          <MapPin size={15} strokeWidth={2.4} className="text-[#0A2016]" />
        </span>
        Location
      </a>
    </div>
  );
};

export default MobileActionBar;
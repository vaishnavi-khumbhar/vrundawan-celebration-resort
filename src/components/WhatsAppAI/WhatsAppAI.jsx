import { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  CalendarDays,
  Users,
  Heart,
  Building2,
  TreePine,
  Waves,
  Briefcase,
  Home,
  Tent,
  Wheat,
  ArrowLeft,
} from "lucide-react";

// Real WhatsApp glyph — lucide-react only has a generic chat bubble (MessageCircle),
// not the actual WhatsApp logo, so this is a hand-drawn inline SVG of it.
export const WhatsAppGlyph = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.004 0C7.166 0 0 7.163 0 16c0 2.82.738 5.566 2.14 7.982L0 32l8.223-2.116A15.93 15.93 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0Zm0 29.09c-2.5 0-4.943-.672-7.075-1.943l-.508-.301-4.878 1.256 1.303-4.754-.331-.489A13.03 13.03 0 0 1 2.91 16c0-7.216 5.874-13.09 13.094-13.09 7.216 0 13.086 5.874 13.086 13.09 0 7.219-5.87 13.09-13.086 13.09Zm7.17-9.803c-.393-.196-2.324-1.146-2.684-1.277-.36-.131-.622-.196-.884.196-.262.393-1.014 1.277-1.243 1.539-.229.262-.458.295-.851.098-.393-.196-1.658-.61-3.16-1.949-1.168-1.042-1.957-2.329-2.186-2.722-.229-.393-.024-.605.172-.8.177-.176.393-.458.59-.687.196-.229.262-.393.393-.655.131-.262.065-.491-.033-.687-.098-.196-.884-2.13-1.211-2.918-.319-.766-.643-.662-.884-.674-.229-.01-.491-.012-.753-.012-.262 0-.687.098-1.047.491-.36.393-1.374 1.343-1.374 3.276s1.407 3.801 1.603 4.063c.196.262 2.769 4.229 6.71 5.929.937.405 1.669.647 2.239.828.941.3 1.798.257 2.475.156.755-.113 2.324-.95 2.652-1.868.327-.917.327-1.703.229-1.868-.098-.164-.36-.262-.753-.458Z" />
  </svg>
);

const OPTIONS = [
  { label: "Wedding Booking", icon: Heart },
  { label: "Banquet Hall", icon: Building2 },
  { label: "Family Picnic", icon: TreePine },
  { label: "Swimming Pool", icon: Waves },
  { label: "Corporate Event", icon: Briefcase },
  { label: "Resort Stay", icon: Home },
  { label: "Tent Camping", icon: Tent },
  { label: "Hurda Party", icon: Wheat },
];

// The 5 quick questions the mini "AI assistant" asks after the user
// picks a category — kept generic so they read naturally for any category.
const QUESTIONS = [
  { key: "date", text: "Sure! What date are you planning this for? " },
  { key: "guests", text: "Nice. Roughly how many guests are you expecting? " },
  { key: "budget", text: "Got it. What's your approximate budget range? " },
  { key: "requirements", text: "Any specific requirements — catering, decor, stay, DJ, and other services? " },
  { key: "contact", text: "Last one — your name & best number to reach you on? " },
];

// Event name used to open this widget from ANYWHERE else in the app
// (navbar icon, mobile Call/WhatsApp/Location bar, any custom button, etc.)
export const VW_OPEN_EVENT = "vrundawan-open-whatsapp-assistant";

// Call this from any other component to open the assistant:
//   import { openWhatsAppAssistant } from "./WhatsAppAI";
//   <button onClick={openWhatsAppAssistant}>WhatsApp</button>
export const openWhatsAppAssistant = () => {
  window.dispatchEvent(new Event(VW_OPEN_EVENT));
};

const WhatsAppAI = () => {
  const [open, setOpen] = useState(false);

  // conversation state
  const [activeType, setActiveType] = useState(null); // which option was picked
  const [messages, setMessages] = useState([]); // {from:'bot'|'user', text}
  const [qIndex, setQIndex] = useState(0); // which question we're on
  const [answers, setAnswers] = useState({}); // collected answers
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [finished, setFinished] = useState(false);

  const scrollRef = useRef(null);

  // listen for the global "open" event fired by other buttons on the site
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(VW_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(VW_OPEN_EVENT, handleOpen);
  }, []);

  // lock background scroll on mobile when the sheet is open
  useEffect(() => {
    if (open && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // auto-scroll chat to bottom on new message / typing indicator
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const resetConversation = () => {
    setActiveType(null);
    setMessages([]);
    setQIndex(0);
    setAnswers({});
    setInputValue("");
    setFinished(false);
    setTyping(false);
  };

  const closePanel = () => {
    setOpen(false);
    // small delay so the closing animation doesn't visibly reset mid-way
    setTimeout(resetConversation, 300);
  };

  // fired when the user taps one of the category buttons on the intro screen
  const startFlow = (type) => {
    setActiveType(type);
    setAnswers({});
    setQIndex(0);
    setFinished(false);
    setMessages([
      { from: "bot", text: `Great choice — ${type}! 🙌 Let me grab a few quick details so our team can help you faster.` },
    ]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: QUESTIONS[0].text }]);
    }, 700);
  };

  // sends the final compiled message to WhatsApp
  const finishAndSendToWhatsApp = (type, finalAnswers) => {
  const message = `• Hello Vrundawan Celebration & Resort,

I am interested in:
• ${type}

• Date: ${finalAnswers.date || "-"}
• Guests: ${finalAnswers.guests || "-"}
• Budget: ${finalAnswers.budget || "-"}
• Requirements: ${finalAnswers.requirements || "-"}
• Contact: ${finalAnswers.contact || "-"}

Please share complete details, availability and pricing.

Thank you.`;

    window.open(
      `https://wa.me/7083895978?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // handles both Enter-key and Send-button submissions during the Q&A flow
  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || typing || finished) return;

    const currentKey = QUESTIONS[qIndex].key;
    const updatedAnswers = { ...answers, [currentKey]: trimmed };
    setAnswers(updatedAnswers);
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInputValue("");

    const nextIndex = qIndex + 1;

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      if (nextIndex < QUESTIONS.length) {
        setQIndex(nextIndex);
        setMessages((prev) => [...prev, { from: "bot", text: QUESTIONS[nextIndex].text }]);
      } else {
        setFinished(true);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Perfect, that's everything I need! ✅ Opening WhatsApp now so our team can take it from here.",
          },
        ]);
        finishAndSendToWhatsApp(activeType, updatedAnswers);
      }
    }, 700);
  };

  // quick shortcuts that skip the Q&A and go straight to WhatsApp
  const quickSend = (type) => {
    const message = `▪️ Hello Vrundawan Celebration & Resort,

I am interested in:
▪️ ${type}

Please share complete details, availability and pricing.

Thank you.`;

    window.open(
      `https://wa.me/7083895978?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const inChat = activeType !== null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .vw-root * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
        .vw-serif { font-family: 'Cormorant Garamond', serif; }

        .vw-fab {
          position: fixed;
          bottom: 22px;
          right: 22px;
          z-index: 999;
          height: 62px;
          width: 62px;
          border-radius: 999px;
          background: linear-gradient(145deg, #25D366, #1DA851);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px -6px rgba(20, 61, 40, 0.55), 0 0 0 0 rgba(37,211,102,0.6);
          animation: vw-pulse 2.4s ease-out infinite;
          transition: transform 0.25s ease;
        }
        .vw-fab:hover { transform: scale(1.08); }

        @keyframes vw-pulse {
          0%   { box-shadow: 0 10px 30px -6px rgba(20,61,40,0.55), 0 0 0 0 rgba(37,211,102,0.45); }
          70%  { box-shadow: 0 10px 30px -6px rgba(20,61,40,0.55), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 10px 30px -6px rgba(20,61,40,0.55), 0 0 0 0 rgba(37,211,102,0); }
        }

        .vw-badge {
          position: absolute;
          top: -4px;
          left: -4px;
          background: #D4AF37;
          color: #143D28;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 7px;
          border-radius: 999px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
          white-space: nowrap;
        }

        .vw-panel {
          position: fixed;
          z-index: 999;
          right: 22px;
          bottom: 96px;
          width: 360px;
          max-width: calc(100vw - 24px);
          max-height: min(620px, calc(100vh - 120px));
          background: #FDFBF7;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 60px -12px rgba(20,61,40,0.4), 0 0 0 1px rgba(20,61,40,0.06);
          display: flex;
          flex-direction: column;
          animation: vw-rise 0.32s cubic-bezier(.2,.8,.2,1);
        }

        @keyframes vw-rise {
          from { opacity: 0; transform: translateY(14px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .vw-header {
          position: relative;
          background: linear-gradient(135deg, #143D28 0%, #0D2B1B 100%);
          padding: 22px 22px 26px;
          color: #F4EFE3;
          flex-shrink: 0;
        }
        .vw-header::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -1px;
          height: 20px;
          background: #FDFBF7;
          border-radius: 20px 20px 0 0;
        }
        .vw-header-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
        .vw-header-left { display: flex; align-items: center; gap: 10px; }
        .vw-back {
          background: rgba(255,255,255,0.1);
          border: none;
          color: #F4EFE3;
          width: 30px; height: 30px;
          border-radius: 999px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .vw-back:hover { background: rgba(255,255,255,0.18); }
        .vw-title { font-size: 26px; font-weight: 700; line-height: 1.1; letter-spacing: 0.2px; }
        .vw-title-sm { font-size: 19px; font-weight: 700; line-height: 1.1; }
        .vw-sub { font-size: 13px; color: #C9BFA0; margin-top: 6px; line-height: 1.5; }
        .vw-close {
          background: rgba(255,255,255,0.1);
          border: none;
          color: #F4EFE3;
          width: 30px; height: 30px;
          border-radius: 999px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .vw-close:hover { background: rgba(255,255,255,0.18); }

        .vw-online {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          font-size: 11px;
          color: #9FD8B4;
        }
        .vw-dot { width: 7px; height: 7px; border-radius: 999px; background: #4ADE80; box-shadow: 0 0 0 3px rgba(74,222,128,0.25); }
        .vw-dot.typing { background: #F3D98B; box-shadow: 0 0 0 3px rgba(243,217,139,0.25); }

        .vw-body {
          padding: 14px 16px 6px;
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }
        .vw-body::-webkit-scrollbar { width: 5px; }
        .vw-body::-webkit-scrollbar-thumb { background: #E4DCC5; border-radius: 999px; }

        .vw-opt {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          padding: 12px 10px;
          border-radius: 14px;
          border: 1px solid #EDE6D2;
          background: #FBF8F0;
          cursor: pointer;
          text-align: left;
          transition: all 0.18s ease;
          font-size: 12.5px;
          font-weight: 600;
          color: #2B2B28;
        }
        .vw-opt:hover {
          background: #143D28;
          border-color: #143D28;
          color: #F4EFE3;
          transform: translateY(-2px);
        }
        .vw-opt-icon {
          width: 30px; height: 30px;
          border-radius: 9px;
          background: #F0E6C8;
          display: flex; align-items: center; justify-content: center;
          color: #A8802E;
          transition: all 0.18s ease;
        }
        .vw-opt:hover .vw-opt-icon { background: #D4AF37; color: #143D28; }

        .vw-row-full { grid-column: 1 / -1; }
        .vw-visit {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 14px;
          border-radius: 14px;
          border: 1px dashed #C9A227;
          background: #FCF6E4;
          color: #7A5C0E;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .vw-visit:hover { background: #F7EBC0; }

        .vw-manager {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 14px;
          border-radius: 14px;
          background: #143D28;
          color: #F4EFE3;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          border: none;
          transition: all 0.18s ease;
        }
        .vw-manager:hover { background: #0D2B1B; }

        .vw-footer {
          padding: 14px 16px 18px;
          flex-shrink: 0;
        }
        .vw-cta {
          width: 100%;
          background: linear-gradient(135deg, #25D366, #1DA851);
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          cursor: pointer;
          box-shadow: 0 10px 24px -8px rgba(37,211,102,0.6);
          transition: transform 0.18s ease;
        }
        .vw-cta:hover { transform: scale(1.02); }

        /* ---- chat mode ---- */
        .vw-chat {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .vw-chat-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vw-chat-scroll::-webkit-scrollbar { width: 5px; }
        .vw-chat-scroll::-webkit-scrollbar-thumb { background: #E4DCC5; border-radius: 999px; }

        .vw-msg {
          max-width: 82%;
          padding: 10px 13px;
          border-radius: 16px;
          font-size: 13.5px;
          line-height: 1.45;
          animation: vw-msg-in 0.25s ease;
        }
        @keyframes vw-msg-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vw-msg-bot {
          align-self: flex-start;
          background: #F0E9D8;
          color: #2B2B28;
          border-bottom-left-radius: 4px;
        }
        .vw-msg-user {
          align-self: flex-end;
          background: #143D28;
          color: #F4EFE3;
          border-bottom-right-radius: 4px;
        }

        .vw-typing {
          align-self: flex-start;
          display: flex;
          gap: 4px;
          padding: 12px 14px;
          background: #F0E9D8;
          border-radius: 16px;
          border-bottom-left-radius: 4px;
        }
        .vw-typing span {
          width: 6px; height: 6px;
          border-radius: 999px;
          background: #A8802E;
          animation: vw-bounce 1.2s infinite ease-in-out;
        }
        .vw-typing span:nth-child(2) { animation-delay: 0.15s; }
        .vw-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes vw-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }

        .vw-chat-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-top: 1px solid #EDE6D2;
          flex-shrink: 0;
        }
        .vw-chat-input {
          flex: 1;
          border: 1px solid #EDE6D2;
          background: #FBF8F0;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 13.5px;
          color: #2B2B28;
          outline: none;
        }
        .vw-chat-input:focus { border-color: #D4AF37; }
        .vw-chat-send {
          flex-shrink: 0;
          width: 40px; height: 40px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #25D366, #1DA851);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .vw-chat-send:disabled { opacity: 0.45; cursor: not-allowed; }
        .vw-chat-send:not(:disabled):active { transform: scale(0.92); }

        .vw-restart {
          margin: 0 14px 14px;
          padding: 12px;
          border-radius: 12px;
          border: 1px dashed #C9A227;
          background: #FCF6E4;
          color: #7A5C0E;
          font-weight: 600;
          font-size: 12.5px;
          text-align: center;
          cursor: pointer;
        }

        .vw-root {
          display: block;
        }

        .vw-overlay {
          display: none;
        }

        @media (max-width: 640px) {
          .vw-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(10, 24, 16, 0.55);
            backdrop-filter: blur(2px);
            z-index: 998;
            animation: vw-fade 0.25s ease;
          }
          @keyframes vw-fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .vw-fab { bottom: 16px; right: 16px; height: 54px; width: 54px; }

          .vw-panel {
            right: 0; left: 0; bottom: 0;
            width: 100%; max-width: 100%;
            max-height: 86vh;
            border-radius: 24px 24px 0 0;
            margin: 0 auto;
          }
          .vw-handle {
            display: block;
          }
          .vw-header { padding: 14px 18px 22px; }
          .vw-title { font-size: 22px; }
          .vw-title-sm { font-size: 17px; }
          .vw-body { grid-template-columns: 1fr 1fr; gap: 10px; padding: 14px 14px 8px; }
          .vw-opt { padding: 14px 11px; font-size: 13px; }
          .vw-footer { padding-bottom: max(16px, env(safe-area-inset-bottom)); }
          .vw-chat-input-row { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
        }

        .vw-handle {
          display: none;
          width: 40px;
          height: 4px;
          border-radius: 999px;
          background: rgba(244,239,227,0.35);
          margin: 0 auto 10px;
        }
      `}</style>

      {open && (
        <div
          className="vw-overlay"
          onClick={closePanel}
          aria-hidden="true"
        />
      )}

      <div className="vw-root">
        {/* Floating Button */}
        <button
          onClick={() => (open ? closePanel() : setOpen(true))}
          className="vw-fab"
          aria-label={open ? "Close chat" : "Chat on WhatsApp"}
        >
          {!open && <span className="vw-badge vw-serif">Ask us</span>}
          {open ? <X size={26} /> : <WhatsAppGlyph size={30} />}
        </button>

        {/* Chat Panel */}
        {open && (
          <div className="vw-panel" role="dialog" aria-label="Vrundawan Assistant">
            {/* Header */}
            <div className="vw-header">
              <div className="vw-handle" />
              <div className="vw-header-row">
                <div className="vw-header-left">
                  {inChat && (
                    <button className="vw-back" onClick={resetConversation} aria-label="Back">
                      <ArrowLeft size={16} />
                    </button>
                  )}
                  <div>
                    <div className={inChat ? "vw-title-sm vw-serif" : "vw-title vw-serif"}>
                      {inChat ? `${activeType}` : "Vrundawan Assistant"}
                    </div>
                    {!inChat && (
                      <div className="vw-sub">Namaste 🙏 What are you planning today?</div>
                    )}
                    <div className="vw-online">
                      <span className={`vw-dot ${typing ? "typing" : ""}`} />
                      {typing ? "Assistant is typing…" : "Replies within minutes"}
                    </div>
                  </div>
                </div>
                <button className="vw-close" onClick={closePanel} aria-label="Close">
                  <X size={16} />
                </button>
              </div>
            </div>

            {!inChat ? (
              <>
                {/* Options grid */}
                <div className="vw-body">
                  {OPTIONS.map(({ label, icon: Icon }) => (
                    <button key={label} onClick={() => startFlow(label)} className="vw-opt">
                      <span className="vw-opt-icon">
                        <Icon size={16} />
                      </span>
                      {label}
                    </button>
                  ))}

                  <button
                    onClick={() => startFlow("Site Visit")}
                    className="vw-visit vw-row-full"
                  >
                    <CalendarDays size={18} />
                    Book a Site Visit
                  </button>

                  <button
                    onClick={() => quickSend("Talk to Manager")}
                    className="vw-manager vw-row-full"
                  >
                    <Users size={18} />
                    Talk to Manager
                  </button>
                </div>

                {/* Footer */}
                <div className="vw-footer">
                  <button
                    onClick={() => quickSend("General Enquiry")}
                    className="vw-cta"
                  >
                    <Send size={16} />
                    Continue on WhatsApp
                  </button>
                </div>
              </>
            ) : (
              <div className="vw-chat">
                <div className="vw-chat-scroll" ref={scrollRef}>
                  {messages.map((m, i) => (
                    <div key={i} className={`vw-msg ${m.from === "bot" ? "vw-msg-bot" : "vw-msg-user"}`}>
                      {m.text}
                    </div>
                  ))}
                  {typing && (
                    <div className="vw-typing">
                      <span /><span /><span />
                    </div>
                  )}
                </div>

                {!finished ? (
                  <div className="vw-chat-input-row">
                    <input
                      className="vw-chat-input"
                      type="text"
                      placeholder="Type your answer…"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSend();
                      }}
                      disabled={typing}
                    />
                    <button
                      className="vw-chat-send"
                      onClick={handleSend}
                      disabled={typing || !inputValue.trim()}
                      aria-label="Send"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                ) : (
                  <button className="vw-restart" onClick={resetConversation}>
                    Ask about something else →
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppAI;
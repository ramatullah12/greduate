import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { FaPaperPlane } from "react-icons/fa";
import cuteImage from "../assets/images/cute.png";

export default function Ending() {
  const [kissed, setKissed] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendReply = async () => {
    if (!replyMessage.trim()) return;
    setIsSending(true);
    
    try {
      // Rahasia di background tanpa memberitahu Bebii
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ac5d4b3a-53f2-470a-a1fa-023c1b903615",
          subject: "💌 Balasan Surat Kelulusan dari Bebii!",
          name: "Bebii",
          message: replyMessage,
        }),
      });
      setIsSending(false);
      setIsSent(true);
      // Confetti khusus surat
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#ffb3c6", "#ff8fab", "#fb6f92", "#ffffff"]
      });
    } catch (error) {
      console.error(error);
      setIsSending(false);
      setIsSent(true); // Animasi tetap sukses biar Bebii tidak curiga
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#ffb3c6", "#ff8fab", "#fb6f92", "#ffffff"]
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      {/* Subtle glow ring */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-[var(--color-elegant-pink)] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="glass-card w-full max-w-sm p-8 md:p-12 text-center flex flex-col items-center gap-5 z-10"
      >
        {/* Pulsing icon */}
        <motion.div
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-4xl"
        >
          🌸
        </motion.div>

        {/* Label */}
        <p className="section-label">Selamat lulus komprehensif, Bebii. Gelar S.Ak-mu resmi! 🎓</p>

        {/* Main heading — 1 line */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="font-cursive text-4xl sm:text-5xl text-[var(--color-elegant-pink)] leading-snug text-center drop-shadow-[0_0_20px_rgba(232,160,176,0.45)]"
        >
          I Love You💖
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-serif text-[var(--color-elegant-muted)] text-sm md:text-base italic leading-relaxed text-center max-w-xs"
        >
          Kompre sudah selesai — perjuanganmu terbayarkan! Wisuda tinggal menunggu, dan Abang akan selalu ada menemanimu sampai hari itu tiba.
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-px bg-[var(--color-elegant-pink)] opacity-25" />

        {/* Interactive CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => {
            if (!kissed) {
              setKissed(true);
              // Confetti burst dari dua sisi
              confetti({ particleCount: 80, angle: 60,  spread: 70, origin: { x: 0, y: 0.7 }, colors: ["#e8a0b0","#f5c8d4","#c97a8e","#fff0f3","#ffd700"] });
              confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors: ["#e8a0b0","#f5c8d4","#c97a8e","#fff0f3","#ffd700"] });
              setTimeout(() => confetti({ particleCount: 50, spread: 100, origin: { x: 0.5, y: 0.5 }, colors: ["#e8a0b0","#fff0f3","#c97a8e"] }), 400);
            }
          }}
          className={`btn-pill transition-all duration-500 ${kissed ? "!bg-[var(--color-elegant-pink)] !text-[var(--color-elegant-dark)] shadow-[0_0_24px_rgba(232,160,176,0.5)]" : ""
            }`}
        >
          {kissed ? "💖 Terima Kasih, Bebii 💖" : "Kirim Cinta Untukmu"}
        </motion.button>

        <AnimatePresence>
          {kissed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="w-full flex flex-col items-center gap-4 border-t border-[rgba(232,160,176,0.2)] pt-6 mt-3"
            >
              {!isSent ? (
                <>
                  <p className="font-serif italic text-sm text-[var(--color-elegant-muted)] mb-1">
                    Ada balasan untuk Abang? 💌
                  </p>
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Tulis balasan manis untuk Abang di sini..."
                    className="w-full bg-[rgba(20,10,15,0.4)] border border-[rgba(232,160,176,0.3)] rounded-xl p-4 text-sm text-[var(--color-elegant-text)] placeholder-[rgba(232,160,176,0.4)] focus:outline-none focus:border-[var(--color-elegant-pink)] focus:ring-1 focus:ring-[var(--color-elegant-pink)] transition-all resize-none min-h-[100px]"
                  />
                  <motion.button
                    whileHover={!isSending && replyMessage.trim() ? { scale: 1.05 } : {}}
                    whileTap={!isSending && replyMessage.trim() ? { scale: 0.95 } : {}}
                    onClick={handleSendReply}
                    disabled={isSending || !replyMessage.trim()}
                    className={`btn-pill w-full flex items-center justify-center gap-2 overflow-hidden relative !bg-[var(--color-elegant-pink)] !text-[var(--color-elegant-dark)] shadow-[0_0_15px_rgba(232,160,176,0.4)] transition-all duration-300 ${
                      isSending || !replyMessage.trim() ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSending ? (
                      <>
                        <motion.div
                          animate={{ 
                            x: [0, 30, 80, 150, 300], 
                            y: [0, -15, 10, -40, -80],
                            rotate: [0, -15, 15, -20, -10],
                            opacity: [1, 1, 1, 0.5, 0]
                          }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute z-10"
                        >
                          <FaPaperPlane className="text-2xl text-[var(--color-elegant-dark)]" />
                        </motion.div>
                        <motion.span 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="font-semibold opacity-70 ml-4"
                        >
                          Menerbangkan surat...
                        </motion.span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span className="font-semibold">Kirim Balasan</span>
                      </>
                    )}
                  </motion.button>
                </>
              ) : (
                <motion.div
  initial={{ opacity: 0, scale: 0.5, y: 30 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
  className="flex flex-col items-center gap-6 bg-[rgba(232,160,176,0.08)] p-8 rounded-3xl w-full border border-[rgba(232,160,176,0.25)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] mt-2"
>

  {/* Foto Cute */}
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 0.3,
      type: "spring",
      stiffness: 180,
    }}
    className="relative"
  >
    <div className="absolute inset-0 rounded-full bg-pink-300 blur-2xl opacity-40"></div>

    <img
      src={cuteImage}
      alt="Cute"
      className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-pink-300 shadow-[0_0_35px_rgba(232,160,176,.45)]"
    />
  </motion.div>

  {/* Judul */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="font-cursive text-5xl text-[var(--color-elegant-pink)] text-center leading-tight"
  >
    Mendarat
    <br />
    dengan
    <br />
    Selamat! 💌
  </motion.h2>

  {/* Pesan */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="font-serif italic text-center text-[var(--color-elegant-muted)] leading-8 max-w-xs"
  >
    Pesannya sudah terbang dan
    mendarat di hati Abang.
    <br />
    Terima kasih ya Bebii. ❤️
  </motion.p>

</motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

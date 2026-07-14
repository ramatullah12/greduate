import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Ending() {
  const [kissed, setKissed] = useState(false);

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

        {kissed && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-cursive text-3xl text-[var(--color-elegant-pink)]"
          >
            Selamat ya Bebii ❤️
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

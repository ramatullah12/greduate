import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Hero from "./Hero";
import Letter from "./Letter";
import Gallery from "./Gallery";
import Ending from "./Ending";
import MusicPlayer from "./MusicPlayer";

const HEARTS = Array.from({ length: 16 });
const PARTICLES = [
  { emoji: "✦", x: 8,  y: 12, delay: 0,   dur: 4   },
  { emoji: "🌸", x: 88, y: 8,  delay: 0.5, dur: 5   },
  { emoji: "✦", x: 92, y: 75, delay: 1,   dur: 3.5 },
  { emoji: "💕", x: 5,  y: 80, delay: 1.5, dur: 4.5 },
  { emoji: "✦", x: 50, y: 5,  delay: 2,   dur: 3   },
  { emoji: "🌸", x: 20, y: 90, delay: 2.5, dur: 5.5 },
  { emoji: "✦", x: 75, y: 88, delay: 0.8, dur: 4   },
  { emoji: "💕", x: 15, y: 45, delay: 3,   dur: 5   },
  { emoji: "✦", x: 80, y: 40, delay: 1.2, dur: 3.8 },
  { emoji: "🌸", x: 45, y: 92, delay: 3.5, dur: 4.2 },
];

const page = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  enter:  { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  exit:   { opacity: 0, y: -24, filter: "blur(6px)", transition: { duration: 0.5 } },
};

export default function LandingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[var(--color-elegant-dark)] relative overflow-hidden flex items-center justify-center">

      {/* ── Decorative blobs ── */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#6b2240] opacity-[0.07] rounded-full blur-[130px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#b05070] opacity-[0.07] rounded-full blur-[130px] pointer-events-none translate-x-1/2 translate-y-1/2" />
      <div className="fixed top-1/2 left-1/2 w-[700px] h-[400px] bg-[var(--color-elegant-rose)] opacity-[0.04] rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* ── Music Player ── */}
      <MusicPlayer />

      {/* ── Animated particles (stars & petals) ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          className="fixed pointer-events-none select-none z-0"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.55, 0.15],
            rotate: p.emoji === "✦" ? [0, 180, 360] : [0, 10, -10, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: p.dur,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <span className={`${p.emoji === "✦" ? "text-[var(--color-elegant-pink)] text-lg" : "text-xl"}`}>
            {p.emoji}
          </span>
        </motion.div>
      ))}
      {HEARTS.map((_, i) => (
        <div
          key={i}
          className="heart fixed"
          style={{
            left: `${(i * 6.5) % 100}%`,
            animationDelay: `${i * 1.1}s`,
            animationDuration: `${16 + (i % 6) * 3}s`,
            width:  `${5 + (i % 4) * 2}px`,
            height: `${5 + (i % 4) * 2}px`,
          }}
        />
      ))}

      {/* ── Step dots (only after envelope) ── */}
      {step > 1 && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex gap-2 items-center">
          {[2, 3, 4, 5].map(s => (
            <div
              key={s}
              className="rounded-full transition-all duration-500"
              style={{
                width:  step === s ? "20px" : "6px",
                height: "6px",
                background: step >= s ? "var(--color-elegant-pink)" : "rgba(255,255,255,0.2)",
                boxShadow: step === s ? "0 0 8px rgba(232,160,176,0.7)" : "none",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Pages ── */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">

          {step === 1 && (
            <motion.div
              key="envelope"
              variants={page}
              initial="hidden" animate="enter" exit="exit"
              className="glass-card w-full max-w-md md:max-w-lg"
            >
              {/* Header stripe */}
              <div className="bg-gradient-to-r from-transparent via-[var(--color-elegant-pink)] to-transparent py-3 text-center text-[var(--color-elegant-dark)] font-bold text-[0.6rem] tracking-[0.45em] uppercase">
                ✦ A Special Message ✦
              </div>

              <div className="px-10 pt-8 pb-10 flex flex-col items-center gap-5 text-center">
                <p className="section-label">Untuk Bebiiku</p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="font-cursive text-5xl md:text-6xl text-[var(--color-elegant-pink)] drop-shadow-[0_0_20px_rgba(232,160,176,0.4)]"
                >
                  Selamat, Bebii 🌸
                </motion.h1>

                <p className="font-serif text-[var(--color-elegant-muted)] text-sm md:text-base italic leading-relaxed max-w-xs">
                  Ada sebuah kejutan kecil yang menunggumu di balik amplop ini.
                </p>

                {/* Divider */}
                <div className="w-20 h-px bg-[var(--color-elegant-pink)] opacity-20" />

                {/* Envelope */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -5 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setStep(2)}
                  className="cursor-pointer"
                >
                  <div className="w-64 h-[155px] md:w-72 md:h-[170px] bg-gradient-to-br from-[#3d2030] to-[#1a0f16] rounded-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[rgba(232,160,176,0.1)]">
                    {/* Flap top */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #5a2d42, transparent)", clipPath: "polygon(0 0,100% 0,50% 53%)", zIndex: 2 }} />
                    {/* Flap bottom */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1a0f16, #2d1a24)", clipPath: "polygon(0 100%,50% 47%,100% 100%)", zIndex: 1 }} />
                    {/* Left & right triangles */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #331527 50%, transparent 50%)", clipPath: "polygon(0 0,0 100%,50% 50%)", zIndex: 1, opacity: 0.7 }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(225deg, #331527 50%, transparent 50%)", clipPath: "polygon(100% 0,100% 100%,50% 50%)", zIndex: 1, opacity: 0.7 }} />
                    {/* Heart seal */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f8d0d8] to-[var(--color-elegant-rose)] flex items-center justify-center shadow-[0_0_28px_rgba(232,160,176,0.55)] border-2 border-white/25"
                      >
                        <span className="text-[var(--color-elegant-dark)] text-xl font-bold">♥</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="section-label"
                >
                  Ketuk untuk membuka
                </motion.p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="hero" variants={page} initial="hidden" animate="enter" exit="exit" className="w-full">
              <Hero onNext={() => setStep(3)} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="letter" variants={page} initial="hidden" animate="enter" exit="exit" className="w-full">
              <Letter onNext={() => setStep(4)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="gallery" variants={page} initial="hidden" animate="enter" exit="exit" className="w-full">
              <Gallery onNext={() => setStep(5)} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="ending" variants={page} initial="hidden" animate="enter" exit="exit" className="w-full">
              <Ending />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
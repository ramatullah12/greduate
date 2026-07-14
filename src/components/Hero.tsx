import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  onNext: () => void;
}

export default function Hero({ onNext }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
        transition={{ duration: 0.9 }}
        className="glass-card w-full max-w-xl p-8 md:p-14 text-center flex flex-col items-center gap-5"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="section-label"
        >
          Sebuah Pesan Untukmu
        </motion.p>

        {/* Typewriter */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-elegant-text)] min-h-[2.8rem] flex items-center justify-center drop-shadow">
          <TypeAnimation
            sequence={[
              'Selamat Lulus Kompre! 🎓', 2000,
              'Resmi Jadi S.Ak 🌸', 2000,
              'Abang Bangga Sama Bebii ❤️', 2000,
            ]}
            wrapper="span"
            speed={55}
            cursor
            repeat={Infinity}
          />
        </h1>

        {/* Cursive headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          className="font-cursive text-3xl sm:text-4xl md:text-5xl text-[var(--color-elegant-pink)] leading-snug drop-shadow-[0_0_18px_rgba(232,160,176,0.4)]"
        >
          Abang Bangga Sama Bebii 🤍
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-[var(--color-elegant-muted)] text-base md:text-lg font-light italic leading-relaxed max-w-sm"
        >
          Tiap peluhmu kini terbayar lunas. Abang sangat bangga melihat betapa kerasnya Bebii berjuang hingga titik ini.
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-px bg-[var(--color-elegant-pink)] opacity-30 my-1" />

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={onNext}
          className="btn-pill"
        >
          Baca Surat Abang ↓
        </motion.button>
      </motion.div>
    </div>
  );
}

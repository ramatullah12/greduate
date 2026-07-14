import { motion } from "framer-motion";

interface LetterProps {
  onNext?: () => void;
}

const paragraphs = [
  "Hai Bebii... 🤍 Kalau Bebii sedang membaca surat ini, berarti ada sesuatu yang ingin Abang sampaikan dari lubuk hati yang paling dalam.",
  "Selamat atas gelar barunya, Bebii. 🎓❤️",
  "Hari ini menjadi salah satu momen yang sangat membahagiakan. Melihat nama Bebii kini dihiasi dengan gelar S.Ak. membuat hati Abang dipenuhi rasa bangga. Gelar itu bukan hanya sekadar tambahan di belakang nama, tetapi juga menjadi bukti dari semua kerja keras, pengorbanan, doa, dan semangat yang selama ini Bebii perjuangkan.",
  "Abang tahu perjalanan Bebii tidak selalu mudah. Ada banyak tantangan, rasa lelah, dan hari-hari yang mungkin terasa begitu berat. Namun, Bebii tidak pernah berhenti berjuang. Semua usaha yang Bebii lakukan akhirnya membuahkan hasil yang sangat membanggakan.",
  "Semoga gelar baru ini menjadi awal dari perjalanan yang lebih indah. Semoga setiap langkah Bebii selalu dipenuhi kebahagiaan, kesehatan, rezeki yang melimpah, serta kesuksesan dalam setiap impian yang ingin Bebii raih.",
  "Terima kasih sudah menjadi perempuan yang kuat, baik hati, dan selalu berusaha memberikan yang terbaik. Terima kasih juga karena sudah hadir dalam hidup Abang dan membuat setiap hari terasa lebih berarti.",
  "Abang ingin Bebii tahu bahwa apa pun yang terjadi nanti, Abang akan selalu mendukung setiap langkah dan impian Bebii. Semoga semua yang Bebii cita-citakan bisa tercapai, dan semoga kebahagiaan selalu menyertai setiap perjalanan hidup Bebii.",
];

export default function Letter({ onNext }: LetterProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
        transition={{ duration: 0.9 }}
        className="glass-card w-full max-w-2xl p-8 md:p-12 relative"
      >
        {/* Floating heart seal */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--color-elegant-dark)] border border-[var(--color-elegant-pink)] shadow-[0_0_16px_rgba(232,160,176,0.4)] flex items-center justify-center">
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[var(--color-elegant-pink)] text-base leading-none"
          >
            ♥
          </motion.span>
        </div>

        {/* Label */}
        <p className="section-label text-center mb-6 mt-2">❤️ Untuk Bebii Tersayang ❤️</p>

        {/* Salutation */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-cursive text-5xl md:text-6xl text-[var(--color-elegant-pink)] mb-6"
        >
          Bebii,
        </motion.h3>

        {/* Letter body — scrollable on mobile */}
        <div className="letter-scroll overflow-y-auto max-h-[44vh] md:max-h-none pr-1 space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.65 }}
              className={
                i === 1
                  ? "text-center font-serif text-lg md:text-xl font-semibold text-[var(--color-elegant-pink)] italic"
                  : "font-serif text-[var(--color-elegant-text)] text-base md:text-lg leading-relaxed text-justify opacity-90 font-light"
              }
            >
              {p}
            </motion.p>
          ))}

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 + paragraphs.length * 0.12 }}
            className="pt-5 border-t border-white/10 space-y-2 text-center"
          >
            <p className="font-serif italic text-[var(--color-elegant-muted)] text-sm">
              ✨ Selamat atas gelar barunya, Bebii. ✨
            </p>
            <p className="font-serif italic text-[var(--color-elegant-muted)] text-sm leading-relaxed">
              Abang bangga sama Bebii, bukan hanya karena gelar yang berhasil diraih, tetapi juga karena perjuangan, keteguhan, dan hati baik yang selalu Bebii miliki.
            </p>
            <p className="font-serif italic text-[var(--color-elegant-muted)] text-sm leading-relaxed">
              Teruslah bersinar, teruslah menjadi perempuan hebat yang selalu Abang kagumi.
            </p>
            <p className="font-serif text-[var(--color-elegant-pink)] italic font-semibold text-base md:text-lg pt-1">
              I love you today, tomorrow, and always. ❤️
            </p>
          </motion.div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mt-8">
          <button onClick={onNext} className="btn-pill">
            Lanjut →
          </button>
          <div className="text-right">
            <p className="font-serif italic text-xs text-[var(--color-elegant-muted)] mb-1">Dengan penuh cinta,</p>
            <p className="font-cursive text-4xl text-[var(--color-elegant-pink)]">— Abang 🤍</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";
import photo3 from "../assets/images/photo3.png";

interface GalleryProps {
  onNext?: () => void;
}

const memories = [
  { id: 1, src: photo1, caption: "Kebersamaan Bersama Sahabat", message: "Orang-orang hebat yang selalu menemanimu di kala susah maupun senang. Abang ikut bahagia melihat tawamu lepas bersama mereka." },
  { id: 2, src: photo2, caption: "Senyum Manismu Malam Itu",   message: "Tidak ada hadiah kelulusan yang lebih indah daripada melihat senyuman lepas sebahagia ini di wajah cantikmu, Bebii." },
  { id: 3, src: photo3, caption: "Momen Hangat Berdua",        message: "Ke depannya, ke manapun mimpimu membawamu, Abang akan selalu berusaha menjadi tempat bersandar paling nyaman untukmu." },
];

export default function Gallery({ onNext }: GalleryProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <p className="section-label mb-3">Koleksi Kenangan</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--color-elegant-text)]">
          Momen yang Terbingkai
        </h2>
      </motion.div>

      {/* Photo grid */}
      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-4xl justify-center items-stretch mb-10">
        {memories.map((img, i) => (
          <motion.div
            layoutId={`photo-${img.id}`}
            key={img.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18, type: "spring" }}
            whileHover={{ scale: 1.04, y: -4 }}
            onClick={() => setSelectedId(img.id)}
            className="relative flex-1 min-h-[280px] sm:min-h-0 sm:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-[rgba(232,160,176,0.10)] shadow-[0_16px_36px_rgba(0,0,0,0.55)] group"
          >
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5 text-center">
              <p className="font-cursive text-2xl text-[var(--color-elegant-pink)] leading-tight">{img.caption}</p>
              <p className="section-label mt-1 text-white/60">Ketuk untuk pesan</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Next button */}
      {onNext && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="btn-pill"
        >
          Selesai →
        </motion.button>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {memories.filter(m => m.id === selectedId).map(img => (
              <motion.div
                key="modal"
                layoutId={`photo-${img.id}`}
                onClick={e => e.stopPropagation()}
                className="glass-card w-full max-w-sm overflow-hidden flex flex-col"
              >
                <div className="relative h-[45vh]">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[var(--color-elegant-pink)] hover:text-[var(--color-elegant-dark)] transition-colors font-bold text-lg shadow"
                  >
                    ×
                  </button>
                </div>
                <div className="p-6 text-center bg-gradient-to-b from-[#2a1520] to-[var(--color-elegant-dark)]">
                  <h3 className="font-cursive text-3xl text-[var(--color-elegant-pink)] mb-3">{img.caption}</h3>
                  <p className="font-serif italic text-[var(--color-elegant-muted)] text-sm leading-relaxed">"{img.message}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

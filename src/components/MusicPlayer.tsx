import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Musik romantis gratis — bisa diganti dengan file MP3 sendiri nanti
// Caranya: taruh file MP3 di src/assets/music/love.mp3 dan ganti URL di bawah
const MUSIC_SRC = "/src/assets/music/love.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show button after 1 second
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);
  // Auto-play music on component mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.35;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => { });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" autoPlay crossOrigin="anonymous" />
      <AnimatePresence>
        {visible && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <AnimatePresence>
              {!playing && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(232,160,176,0.2)] text-[var(--color-elegant-pink)] font-medium text-sm pointer-events-none"
                >
                  Nyalahin lagunya dlu <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>👉</motion.span>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              key="music-btn"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              title={playing ? "Pause musik" : "Putar musik"}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center shadow-[0_0_20px_rgba(232,160,176,0.3)] border border-[rgba(232,160,176,0.25)] hover:border-[var(--color-elegant-pink)] transition-all duration-300"
            >
              {/* Equalizer bars when playing */}
              {playing ? (
                <div className="flex items-end gap-[2px] h-5">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded-full bg-[var(--color-elegant-pink)]"
                      animate={{ height: ["4px", "16px", "4px"] }}
                      transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.15, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              ) : (
                <span className="text-[var(--color-elegant-pink)] text-lg">♪</span>
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="text-8xl cursor-pointer"
      >
        💌
      </motion.button>

      <p className="mt-6 text-pink-700 font-semibold text-xl">
        Tap amplopnya ❤️
      </p>
    </motion.div>
  );
}
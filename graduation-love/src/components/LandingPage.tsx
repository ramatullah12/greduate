import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 flex justify-center items-center">

      <motion.div
        initial={{ opacity:0, scale:0.8 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:1 }}
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-[380px] text-center"
      >

        <h3 className="text-pink-500 text-xl font-semibold">
          🎀 A Special Gift 🎀
        </h3>

        <h1 className="text-4xl font-bold mt-4 text-pink-700">
          For My Love ❤️
        </h1>

        <p className="mt-5 text-gray-600">
          Ada hadiah kecil yang ingin aku berikan untukmu.
        </p>

        <button
          className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition duration-300"
        >
          Open 💌
        </button>

      </motion.div>

    </div>
  );
}
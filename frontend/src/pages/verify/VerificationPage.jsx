import React from "react";
import { FaShieldAlt, FaFingerprint, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VerificationPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#192048] via-[#0d1640] to-[#080e31]">
      {/* Card */}
      <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-2xl p-12 flex flex-col items-center text-white w-full max-w-2xl scale-110">
        
        {/* Animated Shield + Fingerprint Icon */}
        <div className="relative flex justify-center items-center mb-10">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl relative"
          >
            <FaShieldAlt className="text-6xl text-blue-300" />
            <FaFingerprint className="absolute text-3xl text-black opacity-90" />
          </motion.div>
        </div>  

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">Biometric Verification</h1>
        <p className="text-lg text-gray-300 mb-10">Secure Bio-Identity Vault</p>

        {/* Form */}
        <form className="w-full space-y-8">
          <div>
            <label className="block text-base font-medium mb-3 flex items-center gap-2">
              <span className="text-indigo-400 text-lg">User ID</span>
            </label>
            <input
              type="text"
              placeholder="Enter your User ID..."
              className="w-full px-5 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-3 flex items-center gap-2">
              <span className="text-indigo-400 text-lg">Public Key</span>
            </label>
            <textarea
              placeholder="Enter your Public Key..."
              className="w-full px-5 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base h-28 resize-none"
            ></textarea>
          </div>

          {/* Button with Arrow */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-lg text-white flex items-center justify-center gap-3 hover:opacity-90 transition"
          >
            Verify Identity <FaArrowRight className="text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
}

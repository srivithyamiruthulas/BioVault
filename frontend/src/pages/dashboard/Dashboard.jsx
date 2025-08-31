import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0d1117] via-[#0a0f2c] to-[#000000] text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
      
      {/* Background Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-blue-900 rounded-full blur-3xl opacity-20 top-0 right-0 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-900 rounded-full blur-3xl opacity-20 bottom-0 left-0 animate-pulse" />

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6 text-center drop-shadow-lg animate-fadeIn">
        Bio-Digital Identity Vault
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl text-center mb-12 leading-relaxed animate-slideUp">
        Welcome to the <span className="text-blue-400 font-bold">future of digital identity</span> —
        a blockchain-powered platform for secure, privacy-first biometric data
        storage and passwordless authentication.
      </p>

      {/* Image Section */}
      <div className="relative w-full max-w-4xl mb-16">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-10 rounded-3xl" />
        <img
          src="/finger2.png"
          alt="Biometric Illustration"
          className="w-full h-auto   transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-16">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg">
            We bring you **unmatched security** with blockchain technology. 
            Your biometric identity is **tamper-proof, decentralized, and verifiable**. 
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl font-semibold mb-4 text-green-400">How It Works</h2>
          <p className="text-gray-300 text-lg">
            Your biometric data is **hashed & encrypted** before being stored on 
            a blockchain, ensuring **complete privacy and security**. 
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-8">
        <button
          onClick={() => navigate("/access")}
          className="px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-900 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_#3b82f6]"
        >
        Access Vault
        </button>
        <button
          onClick={() => navigate("/verification")}
          className="px-10 py-4 bg-gradient-to-r  from-blue-950 to-blue-900 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_#3b82f6]"
        >
          Verify Identity
        </button>
      </div>
    </div>
  );
}

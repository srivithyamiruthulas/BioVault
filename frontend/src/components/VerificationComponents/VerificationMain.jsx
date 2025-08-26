import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Key, Fingerprint } from "lucide-react";

export default function VerificationMain() {
  const [userId, setUserId] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // dummy logic (replace with actual verification)
    if (userId.trim() === "123" && publicKey.trim() === "abc") {
      navigate("/success");
    } else {
      navigate("/failure");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center">
          <Fingerprint size={48} className="text-blue-400" />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-semibold">Biometric Verification</h1>
          <p className="text-gray-300 text-sm">Secure Bio-Identity Vault</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 w-[350px] space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm mb-2">
              <User size={18} /> User ID
            </label>
            <input
              type="text"
              placeholder="Enter your User ID ....."
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="bg-white/20 w-full px-4 py-2 rounded-md text-black outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm mb-2">
              <Key size={18} /> Public Key
            </label>
            <textarea
              placeholder="Enter your Public Key ....."
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
              className="bg-white/20 w-full px-4 py-2 rounded-md text-black outline-none"
              rows={3}
            />
          </div>

          <button
            onClick={handleVerify}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600"
          >
            <Fingerprint size={18} /> Verify Identity →
          </button>
        </div>
      </div>
    </div>
  );
}

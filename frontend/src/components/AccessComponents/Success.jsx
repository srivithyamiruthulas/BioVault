import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { BadgeCheck, ArrowLeft } from "lucide-react";

export default function Success() {
  const navigate = useNavigate();
  const [cid, setCid] = useState(null);

  useEffect(() => {
    const storeFingerprint = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const fingerprintData = "dummy-fingerprint-scan";

        const { data } = await API.post("/ipfs/store", { userId, fingerprintData });
        setCid(data.cid);
      } catch (err) {
        console.error("Failed to store fingerprint", err);
      }
    };

    storeFingerprint();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white px-6 text-center">
      {/* Success Icon */}
      <div className="mb-6">
        <BadgeCheck size={100} className="text-green-500" />
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-3xl font-bold text-green-400">Seamless registration!</h2>
      <p className="text-lg text-green-200 mt-2">
        Your details stored on decentralised IPFS
      </p>

      {/* CID Section */}
      {cid && (
        <div className="mt-6 px-6 py-3 bg-[#101737] rounded-lg shadow-lg max-w-4xl break-all">
          <p className="text-sm text-blue-300">
            <span className="font-semibold text-green-400">CID:</span> {cid}
          </p>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mt-10 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
      >
        <ArrowLeft size={18} /> Go Back
      </button>
    </div>
  );
}

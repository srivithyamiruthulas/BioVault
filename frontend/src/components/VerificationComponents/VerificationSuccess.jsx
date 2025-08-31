import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BadgeCheck, ArrowLeft } from "lucide-react";
import API from "../../api/axios";

export default function VerificationSuccess() {
  const navigate = useNavigate();
  const [cid, setCid] = useState(null); // ✅ store CID here

  useEffect(() => {
    const storeFingerprint = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const fingerprintData = "dummy-fingerprint-scan"; 

        const { data } = await API.post("/ipfs/store", { userId, fingerprintData });

        setCid(data.cid); // ✅ update state
      } catch (err) {
        console.error("Failed to store fingerprint", err);
      }
    };

    storeFingerprint();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white space-y-6">
      <BadgeCheck size={100} className="text-green-500" />
      <h2 className="text-2xl font-semibold text-green-500">Verification Successful !</h2>
      <p className="text-green-300">Matched With The Existing Template</p>

      {/* ✅ Show CID if available */}
      {cid && (
        <div className="bg-[#101737] px-4 py-2 rounded-md text-blue-300 break-all text-sm">
          <strong>CID:</strong> {cid}
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <ArrowLeft size={18} /> Go Back
      </button>
    </div>
  );
}

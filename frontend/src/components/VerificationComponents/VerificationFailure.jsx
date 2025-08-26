import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertOctagon, ArrowLeft } from "lucide-react";

export default function VerificationFailure() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white space-y-6">
      <AlertOctagon size={100} className="text-red-500" />
      <h2 className="text-2xl font-semibold text-red-500">Verification Failed !</h2>
      <p className="text-red-300">Mismatch With The Existing Template</p>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <ArrowLeft size={18} /> Return To Verification Page
      </button>
    </div>
  );
}
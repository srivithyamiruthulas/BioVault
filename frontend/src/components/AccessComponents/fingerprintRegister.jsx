import { Fingerprint, User } from "lucide-react";

function FingerprintRegister({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white px-8 md:px-16">
      
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-4">Register Fingerprint</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-10">
        Secure and decentralized storage of student identity
      </p>

      {/* Inputs + Button */}
      <div className="w-full max-w-md space-y-6">
        <div>
          <label className="flex items-center gap-2 mb-2 text-base md:text-lg font-medium">
            <User size={22} /> Student Reg.No
          </label>
          <input
            type="text"
            placeholder="Enter Student Registration Number..."
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white outline-none"
          />
        </div>

        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-md"
        >
          <Fingerprint size={20} /> Register Fingerprint
        </button>
      </div>
    </div>
  );
}

export default FingerprintRegister;

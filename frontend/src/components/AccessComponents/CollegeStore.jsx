import { Building2 } from "lucide-react";

function CollegeStore({ onNext, onBack }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white px-8 md:px-16">
      
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-4">College Storage</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-10">
        Trusted decentralized storage for institutional identity
      </p>

      {/* Inputs + Buttons */}
      <div className="w-full max-w-md space-y-6">
        <div>
          <label className="flex items-center gap-2 mb-2 text-base md:text-lg font-medium">
            <Building2 size={22} /> College Private ID
          </label>
          <input
            type="text"
            placeholder="Enter College Private ID"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-black outline-none"
          />
        </div>

        <div className="flex gap-6">
          <button
            onClick={onNext}
            className="flex-1 py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Store
          </button>
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollegeStore;

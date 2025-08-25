function CollegeStore({ onNext,onBack }) {
  return (
    <div className="bg-blue-900 flex flex-col items-center  space-y-12 py-16 px-12 rounded-2xl">
      
      {/* Heading */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Marvel at the storage</h2>
        <p className="text-gray-300">
          Store once. Trust forever. The decentralized fingerprint way
        </p>
      </div>

      
      {/* Card */}
      <div className="p-10 space-y-5 flex flex-col justify-center rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg">
        <input
          type="text"
          placeholder="College's private ID"
          className="w-64 px-4 py-2 rounded-lg mb-4 bg-gray-800 text-white "
        />
        <button
          onClick={onNext}
          className="w-64 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Store
        </button>
      </div>
      <button
          onClick={onBack}
          className="w-64 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
           Back
        </button>
      
    </div>
    
  );
}

export default CollegeStore;

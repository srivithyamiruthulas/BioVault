function Success(onBack) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold text-center">Seamless registration!</h2>
      <p className="text-center text-gray-300">Amazing decentralised storage</p>

      <div className="mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg">
        <p className="text-gray-200 text-center">
          ✅ Your details stored successfully <br /> on decentralised IPFS storage
        </p>
        <t></t>
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

export default Success;
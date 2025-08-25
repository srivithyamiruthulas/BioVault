function FingerprintRegister({ onNext }) {
  return (
    <div className="bg-blue-900 flex flex-col items-center space-y-12 py-16 px-16 rounded-2xl">
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-semibold text-center">Enjoy your registration!</h2>
      <p className="text-center text-gray-300">
        Be amazed by its decentralized storage
      </p>
     </div>
      <div className="p-10 space-y-5 flex flex-col justify-center rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg">
        <input
          type="text"
          placeholder="Student's Reg_no"
          className="w-64 px-4 py-2 rounded-lg mb-4 bg-gray-800 text-white "
        />
        <button
          onClick={onNext}
          className="w-64 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Register fingerprint
        </button>
      </div>
    </div>
  );
}

export default FingerprintRegister;

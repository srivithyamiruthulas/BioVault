import { useEffect } from "react";

function FingerprintLoading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // simulate 3s fingerprint scanning
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold text-center">Marvel at the storage</h2>
      <p className="text-center text-gray-300">
        Store once. Trust forever. The decentralized fingerprint way
      </p>

      <div className="mt-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300">Scanning your fingerprint...</p>
      </div>
    </div>
  );
}

export default FingerprintLoading;

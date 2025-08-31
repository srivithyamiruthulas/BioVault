import { useEffect } from "react";

function FingerprintLoading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // simulate scanning
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white px-8 md:px-16">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-4">Fingerprint Scanning</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-10">
        Store once. Trust forever. The decentralized way
      </p>

      {/* Spinner */}
      <div className="flex flex-col items-center space-y-6">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-300 text-lg">Scanning your fingerprint...</p>
      </div>
    </div>
  );
}

export default FingerprintLoading;

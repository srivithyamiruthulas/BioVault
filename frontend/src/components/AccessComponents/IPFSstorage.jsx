import { useEffect } from "react";

function IPFSstorage({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // simulate 2s IPFS storing
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold text-center">Seamless registration!</h2>
      <p className="text-center text-gray-300">Amazing decentralised storage</p>

      <div className="mt-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300">Storing to IPFS...</p>
      </div>
    </div>
  );
}

export default IPFSstorage;

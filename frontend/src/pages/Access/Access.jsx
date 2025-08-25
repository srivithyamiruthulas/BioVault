import { useState } from "react";
import FingerprintRegister from "./../../components/AccessComponents/fingerprintRegister"
import FingerprintLoading from "./../../components/AccessComponents/fingerprintLoading";
import CollegeStore from "./../../components/AccessComponents/CollegeStore";
import IPFSstorage from "./../../components/AccessComponents/IPFSstorage";
import Success from "./../../components/AccessComponents/Success";

function Access() {
  const [step, setStep] = useState("register");

  return (
    <div className=" flex items-center justify-center h-screen bg-gradient-to-b from-[#0f172a] to-[#1e3a8a] text-white">
      {step === "register" && <FingerprintRegister onNext={() => setStep("loading")} />}
      {step === "loading" && <FingerprintLoading onFinish={() => setStep("college")} />}
      {step === "college" && <CollegeStore onNext={() => setStep("ipfs")} />}
      {step === "ipfs" && <IPFSstorage onFinish={() => setStep("success")} />}
      {step === "success" && <Success />}
    </div>
  );
}

export default Access;

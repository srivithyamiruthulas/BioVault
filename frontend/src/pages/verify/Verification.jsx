import React from "react";
import { Routes, Route } from "react-router-dom";

import VerificationMain from "./../../components/VerificationComponents/VerificationMain.jsx";
import VerificationSuccess from "./../../components/VerificationComponents/VerificationSuccess.jsx";
import VerificationFailure from "./../../components/VerificationComponents/VerificationFailure.jsx";

export default function Verification() {
  return (
    <Routes>
      <Route index element={<VerificationMain />} /> 
      <Route path="success" element={<VerificationSuccess />} /> 
      <Route path="failure" element={<VerificationFailure />} /> 
    </Routes>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ADJUST this path if you put components in a different folder
import VerificationMain from "./../../components/VerificationComponents/VerificationMain.jsx";
import VerificationSuccess from "./../../components/VerificationComponents/VerificationSuccess.jsx";
import VerificationFailure from "./../../components/VerificationComponents/VerificationFailure.jsx";

export default function Verification() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerificationMain />} />
        <Route path="/success" element={<VerificationSuccess />} />
        <Route path="/failure" element={<VerificationFailure />} />
      </Routes>
    </Router>
  );
}
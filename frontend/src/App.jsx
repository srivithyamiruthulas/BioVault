import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Access from "./pages/Access/Access";
import Verification from "./pages/verify/Verification";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";
import Success from "./components/AccessComponents/Success"; // ✅ Added import
import Dashboard from "./pages/dashboard/Dashboard";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
         <Route path="/dashboard" element={<Dashboard />} />
        {/* Access page */}
        <Route path="/access" element={<Access />} />

        {/* Verification with nested routes */}
        <Route path="/verification/*" element={<Verification />} />

        {/* Auth pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ✅ Success page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

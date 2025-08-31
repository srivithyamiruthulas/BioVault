import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Access from "./pages/Access/Access";
import Verification from "./pages/verify/Verification";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access />} />

        {/*Add /* so nested routes work */}
        <Route path="/verification/*" element={<Verification />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./../../components/HomeComponents/Navbar"
import Features from '../../components/HomeComponents/Features';
import Hero from '../../components/HomeComponents/Hero';
import Why from '../../components/HomeComponents/Why';
import Footer from '../../components/HomeComponents/Footer';
export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Why />
      <Footer />
    </div>
  )
}

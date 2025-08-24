import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-20 md:px-10 py-10 relative"
      data-aos="fade-up"
    >
      {/* LEFT SIDE - Text Content */}
      <div className="flex-2 text-center md:text-left ">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
  <ReactTyped
    strings={["Redefining Biometric Security"]}
    typeSpeed={60}
    backSpeed={40}
    showCursor={true}   // shows blinking cursor
    cursorChar="|"      // customize cursor
  />
</h2>


        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          Your fingerprint templates are encrypted, stored on decentralized networks, 
          and safeguarded against tampering. No raw data. No central leaks. Only trusted verification.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <button className="px-6 py-3 bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-800 rounded-md font-semibold hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Hero Image */}
      <div className="flex-1 flex h-140 justify-center md:justify-end mt-10 md:mt-0 mr-0">
        <img
          src="/finger1.png"
          alt="Biometric Illustration"
          className="w-92 md:w-[500px] lg:w-[900px] rounded-xl animate-zoom"
        />
      </div>
    </section>
  );
}

export default Hero;

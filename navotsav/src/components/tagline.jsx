import React from "react";

export const Tagline = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0">
        <img
          src="./Navotsav.gif"
          alt="Event Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-center px-6 space-y-6 z-10">
        {/* Navotsav Heading */}
        <div className="mb-64 md:mb-80">
          <h1
            className="text-8xl font-extrabold mb-4 text-white"
            style={{
              textShadow:
                "0 0 10px rgba(0, 112, 255, 0.8), 0 0 20px rgba(0, 112, 255, 0.8)", // Blue glow effect
            }}
          >
            Navotsav
          </h1>
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-black">
            2024
          </h1>
        </div>

        {/* Main Tagline */}
        <h1 className="text-3xl md:text-6xl font-extrabold mb-24">
          <span className="text-orange-500">Connect.</span>
          <span className="text-blue-500"> Collaborate.</span>
          <span className="text-green-500"> Contribute.</span>
        </h1>

        {/* CTA Button */}
        <a
          href="https://id-card-generator-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-8">
            Register Now
          </button>
        </a>

        {/* Decorative Line */}
        <div className="h-1 w-40 mx-auto bg-blue-600 rounded-lg mt-4"></div>
      </div>
    </section>
  );
};

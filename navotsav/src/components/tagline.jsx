import React from "react";
import gif from "../../public/Navotsav.gif";

export const Tagline = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0">
        <img
          src={gif}
          alt="Event Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-center px-6 space-y-3 z-10">
        {/* Navotsav Heading */}
        <div className="mb-96">
          <h1
            className="text-8xl font-extrabold text-white"
            style={{
              textShadow:
                "0 0 10px rgba(0, 112, 255, 0.8), 0 0 20px rgba(0, 112, 255, 0.8)", // Blue glow effect
            }}
          >
            Navotsav
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold font-serif text-black">
            2024
          </h1>
        </div>

        {/* Main Tagline */}
        <h1 className="text-3xl md:text-6xl font-extrabold">
          <span className="text-orange-500">Connect.</span>
          <span className="text-blue-500"> Collaborate.</span>
          <span className="text-green-500"> Contribute.</span>
        </h1>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-pink-500 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Register Now
        </button>

        {/* Decorative Line */}
        <div className="h-1 w-40 mx-auto bg-blue-600 rounded-lg mt-8"></div>
      </div>
    </section>
  );
};

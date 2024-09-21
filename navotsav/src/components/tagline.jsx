import React from "react";

export const Tagline = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-100 via-white to-indigo-100 h-screen flex items-center justify-center">
      <div className="text-center px-6 space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Connect. Collaborate. Contribute.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
          Experience the future of seamless event management. Your vision, our
          expertise—creating extraordinary moments together.
        </p>

        {/* CTA Button */}
        <button className="bg-purple-600 hover:bg-pink-500 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Register Now
        </button>

        {/* Decorative Line */}
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg mt-8"></div>
      </div>
    </section>
  );
};

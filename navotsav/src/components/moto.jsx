import React from "react";

const Moto = () => {
  return (
    <section className="bg-gradient-to-r from-orange-200 via-white to-green-200 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connect Section */}
          <div className="rounded-lg bg-orange-300 p-6 shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="mb-4 text-xl font-semibold text-white">Connect</h2>
            <p className="text-black">
              Navotsav 2024 aims to reconnect Navodaya alumni, fostering a sense
              of community and shared identity, and rekindling bonds to build a
              stronger network.
            </p>
          </div>

          {/* Collaborate Section */}
          <div className="rounded-lg bg-blue-500 p-6 shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Collaborate
            </h2>
            <p className="text-black">
              Bringing together diverse talents, this event will facilitate
              collaborations, enabling alumni to share resources, ideas, and
              opportunities for mutual growth and societal impact.
            </p>
          </div>

          {/* Contribute Section */}
          <div className="rounded-lg bg-green-500 p-6 shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Contribute
            </h2>
            <p className="text-black">
              Encouraging alumni to give back, Navotsav 2024 focuses on
              contributions that uplift current JNV students, support their
              education, and drive positive change in society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moto;

import React from "react";
import { FaMapMarkedAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const EventDetails = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-700 via-purple-700 to-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Event Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            U.P. STATE NAVODAYA ALUMNI OPEN MEET 2024
          </h1>
          <p className="text-gray-300 text-lg">
            Join us for a grand reunion, meet fellow alumni, and relive the
            golden days!
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Mandal & Date */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl text-purple-400 transition-transform duration-300 transform hover:scale-110">
                <FaMapMarkedAlt />
              </div>
              <div className="text-2xl text-gray-200">
                <span className="font-bold">Meerut Mandal</span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl text-purple-400 transition-transform duration-300 transform hover:scale-110">
                <FaClock />
              </div>
              <div className="text-lg text-gray-200">
                <span className="font-semibold">Time:</span> 09:00 AM - 5:00 PM
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl text-purple-400 transition-transform duration-300 transform hover:scale-110">
                <FaMapMarkerAlt />
              </div>
              <div className="text-lg text-gray-200">
                <span className="font-semibold">Venue:</span> Gautam Buddha
                University, Greater Noida (U.P.)
              </div>
            </div>

            {/* Event Description */}
            <p className="text-gray-300 text-md leading-relaxed mt-6">
              Connect with old friends and make new ones. Celebrate our shared
              experiences and explore opportunities for future collaborations.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-indigo-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Register for the Event
            </a>
          </div>

          {/* Event Image Section with Interactive Design */}
          <div className="relative space-y-6">
            {/* Larger Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl ">
              <img
                src="https://example.com/event-image-1.jpg"
                alt="Event"
                className="w-full border-4 border-white h-80 object-cover transition-transform duration-300"
              />
              {/* Smaller Image inside Larger Image */}
              <div className="absolute bottom-2 left-2 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-lg border-2 border-white transition-transform duration-300 transform hover:scale-110">
                <img
                  src="https://example.com/event-image-2.jpg"
                  alt="Event Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

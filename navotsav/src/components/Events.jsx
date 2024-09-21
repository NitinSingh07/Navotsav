import React from "react";
import { FaMapMarkedAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const EventDetails = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-12">
        {/* Event Header */}
        <div className="flex flex-col md:flex-row">
          {/* Left Div: Text Details */}
          <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center">
            <div className="text-center md:text-left mb-12 space-y-4">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                U.P. STATE NAVODAYA ALUMNI OPEN MEET 2024
              </h1>
              <p className="text-blue-800 text-lg">
                Join us for a grand reunion, meet fellow alumni, and relive the
                golden days!
              </p>
            </div>

            <div className="space-y-6">
              {/* Mandal */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaMapMarkedAlt />
                </div>
                <div className="text-2xl text-gray-800">
                  <span className="font-bold">Meerut Mandal</span>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaClock />
                </div>
                <div className="text-lg text-gray-800">
                  <span className="font-semibold">Time:</span> 09:00 AM - 5:00
                  PM
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-lg text-gray-800">
                  <span className="font-semibold">Venue:</span> Gautam Buddha
                  University, Greater Noida (U.P.)
                </div>
              </div>
            </div>
          </div>

          {/* Right Div: Image Section */}
          <div className="md:w-1/2 pl-24 flex justify-center items-center">
            <div className="relative overflow-hidden rounded-lg h-96 w-full">
              {" "}
              {/* Increased height */}
              <img
                src="https://example.com/event-image-1.jpg"
                alt="Event"
                className="w-3/4 h-full object-cover border-2 border-blue-600 transition-transform duration-300"
              />
              {/* Smaller Image inside Larger Image */}
              <div className="absolute bottom-2 left-2 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-lg border-2 border-blue-600 transition-transform duration-300 transform hover:scale-110">
                <img
                  src="https://example.com/event-image-2.jpg"
                  alt="Event Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:rotate-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
        </div> */}
      </div>
    </section>
  );
};

import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    position: "Project Manager",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Smith",
    position: "Frontend Developer",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Charlie Brown",
    position: "Backend Developer",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "David Wilson",
    position: "UI/UX Designer",
    photo: "https://via.placeholder.com/150",
  }
];

const TeamMembers = () => {
  return (
    <div className="flex bg-white p-8">
      <div className="flex-1">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-24">
          {/* Small "Eminent Guests" text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl ml-16 font-bold text-center text-black">
            Eminent Guests
          </h2>
          {/* Gradient Line */}
          <div className="hidden md:flex flex-grow h-1 mx-8 sm:mx-24 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500"></div>
          {/* Large "Guests" text (hidden on small screens) */}
          <h2 className="hidden md:block text-6xl lg:text-8xl font-bold text-center text-gray-200">
            Guests
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-80 h-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-500">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

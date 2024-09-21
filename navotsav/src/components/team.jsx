import React from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    position: 'Project Manager',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    position: 'Frontend Developer',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Charlie Brown',
    position: 'Backend Developer',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'David Wilson',
    position: 'UI/UX Designer',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Eva Green',
    position: 'DevOps Engineer',
    photo: 'https://via.placeholder.com/150',
  },
];

const TeamMembers = () => {
  return (
    <div className="flex bg-gradient-to-r from-lightblue-200 to-lightorange-200 p-8">
      <div className="flex-1">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mr-2">Our Team</h2>
          <div className="hidden md:flex flex-grow h-1 mx-4 bg-gradient-to-r from-orange-400 via-white to-blue-400"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-96 h-96 mb-4 shadow-md" // Increased size
              />
              <h3 className="text-xl font-semibold text-blue-500">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default TeamMembers;

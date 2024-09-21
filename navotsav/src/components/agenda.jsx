import React from "react";

export const EventAgenda = () => {
  const agendaItems = [
    { time: "09:00 AM - 10:00 AM", title: "Registration and Welcome" },
    { time: "10:00 AM - 11:00 AM", title: "Opening Ceremony" },
    { time: "11:00 AM - 12:30 PM", title: "Keynote Speech by Alumni" },
    { time: "12:30 PM - 01:30 PM", title: "Networking Lunch" },
    {
      time: "01:30 PM - 03:00 PM",
      title: "Panel Discussion: Alumni Success Stories",
    },
    { time: "03:00 PM - 04:00 PM", title: "Workshops and Breakout Sessions" },
    { time: "04:00 PM - 05:00 PM", title: "Closing Remarks and Future Plans" },
    { time: "05:00 PM", title: "Networking and Departure" },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-24">
          <h2 className="text-6xl ml-6 font-bold text-center text-indigo-800 ">
            Agenda
          </h2>
          <div className="hidden md:flex flex-grow h-1 mx-48 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500"></div>
          <h2 className="text-8xl ml-6 font-bold text-center text-gray-200">
            Agenda
          </h2>
        </div>
        <div className="space-y-6">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:bg-indigo-50"
            >
              <span className="text-xl font-semibold text-indigo-600">
                {item.time}
              </span>
              <span className="text-xl text-gray-800">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

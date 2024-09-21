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
    <section className="bg-gradient-to-r from-gray-100 via-indigo-200 to-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8 text-indigo-700">
          Event Agenda
        </h2>
        <div className="space-y-4">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="text-lg font-semibold text-indigo-600">
                {item.time}
              </span>
              <span className="text-lg text-gray-700">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

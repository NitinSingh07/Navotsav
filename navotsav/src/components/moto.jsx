import React from 'react'

const Moto = () => {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
    <div className="mx-auto max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-center">Navotsav 2024</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Connect Section */}
        <div className="rounded-lg bg-gradient-to-r from-orange-100 to-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Connect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Navotsav 2024 aims to reconnect Navodaya alumni, fostering a sense of community and shared identity, and rekindling bonds to build a stronger network.
          </p>
        </div>

        {/* Collaborate Section */}
        <div className="rounded-lg bg-gradient-to-r from-orange-100 to-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Collaborate</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Bringing together diverse talents, this event will facilitate collaborations, enabling alumni to share resources, ideas, and opportunities for mutual growth and societal impact.
          </p>
        </div>

        {/* Contribute Section */}
        <div className="rounded-lg bg-gradient-to-r from-orange-100 to-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Contribute</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Encouraging alumni to give back, Navotsav 2024 focuses on contributions that uplift current JNV students, support their education, and drive positive change in society.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Moto
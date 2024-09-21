import React from "react";

const Payment = () => {
  return (
    <section className="antialiased bg-orange-100 py-8">
      <div className="container mx-auto grid lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        {/* QR Code Section */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <img
            className="mb-4 h-56 w-56 rounded-3xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-full lg:w-full"
            src="/qr.png"
            alt="QR Code"
          />
        </div>

        {/* Main Content Section */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
            Support Our Cause Today
          </h1>
          <p className="mb-6 text-gray-700 ">
            Contribute to the Up State Alumni Meet and help us make a
            difference. Your donation will ensure the success of our initiatives
            and support the community. Thank you for your generosity!
          </p>

          {/* Financial Support Section */}
          <div className="mt-10 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Financial Support
            </h2>
            <p className="mb-2 text-gray-700 dark:text-gray-400">
              <span className="font-bold">Account Name :</span> NAVODAYA WELFARE
              ASSOCIATION
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400">
              <span className="font-bold">Account Number :</span> 77190100014464
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400">
              <span className="font-bold">IFSC :</span> BARB0VJCAAG
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400">
              <span className="font-bold">Bank :</span> BANK OF BARODA (BOB)
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-400">
              <span className="font-bold">Branch :</span> AGRA CANTONMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

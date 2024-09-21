import React from 'react';
import qr from '../../public/qr.png';

const Payment = () => {
  return (
    <section className="px-4 py-8 antialiased md:py-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gradient-to-r from-orange-100 to-white p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <img
              className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
              src={qr}
              alt="QR Code"
            />
            <img
              className="mb-4 hidden dark:block md:h-full"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
              alt="peripherals"
            />
          </a>
        </div>
        
        <div className="lg:col-span-7 me-auto place-self-center">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Support Our Cause Today
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Contribute to the Up State Alumni Meet and help us make a difference. Your donation will ensure the success of our initiatives and support the community. Thank you for your generosity!
          </p>

          <a
            className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-grey hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Below are  Details
          </a>
          
          {/* Financial Support Section */}
          <div className="mt-10 rounded-lg bg-gray-100 p-6 dark:bg-gray-700">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Financial Support
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Up State Alumni Meet
            </p>
            <h1 className="mb-4 text-xl text-gray-700 dark:text-gray-300">
              ACC: 77190100014464
            </h1>
            <h1 className="mb-4 text-xl text-gray-700 dark:text-gray-300">
              IFSC: BARB0VJCAAG
            </h1>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              NAVODAYA WELFARE ASSOCIATION
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              BANK: BANK OF BARODA (BOB)
            </p>
            <p className="mb-5 text-gray-700 dark:text-gray-300">
              BRANCH: AGRA CANTONMENT 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

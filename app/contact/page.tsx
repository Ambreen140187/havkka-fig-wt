
import Image from "next/image";
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';


const Contact = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative w-full h-60 bg-cover bg-center"
        style={{ backgroundImage: 'url("/bg-shop.png")' }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[77px] w-[77px]"
          />
          <h1 className="text-3xl text-black">Contact</h1>
          <p className="text-sm text-black">Home &gt; contact</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-center mt-4 max-w-2xl mx-auto">
          For more information about our product & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Contact Information */}
          {/* <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div> */}
          <div className="flex items-center flex-col gap-4 space-x-2">
            <div>
  <MapPinIcon className="h-6 w-6 text-gray-600" />
  <p>236 5th SE Avenue, New York NY10000, United States</p>
</div>
<div className="flex items-center space-x-2">
  <PhoneIcon className="h-6 w-6 text-gray-600" />
  <p>Mobile: (+84) 546-6789</p>
</div>
<div className="flex items-center space-x-2">
  <ClockIcon className="h-6 w-6 text-gray-600" />
  <p>Monday-Friday: 9:00 - 22:00</p>
</div>
</div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Abc"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Abc@def.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="This is optional"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Hi! I'd like to ask about..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-transparent text-black py-2 px-4 rounded-md hover:bg-slate-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-pink-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p className="text-gray-500">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">90 Days Return</h3>
            <p className="text-gray-500">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Secure Payment</h3>
            <p className="text-gray-500">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

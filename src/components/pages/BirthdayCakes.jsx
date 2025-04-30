import React from "react";

const BirthdayCakes = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 py-20 px-10 gap-10 items-center">
      {/* Image Section */}
      <div className="flex gap-4">
        <img
          src="/images/birthday-cake-1.jpg"
          alt="Birthday Cake 1"
          className="w-45 h-60 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col gap-4">
          <img
            src="/images/birthday-cake-2.jpg"
            alt="Birthday Cake 2"
            className="h-24 w-32 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/birthday-cake-3.jpg"
            alt="Birthday Cake 3"
            className="h-24 w-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Birthday Cakes</h1>
        <p className="text-gray-700 text-lg mb-6">
          Are you ready to channel the magic of birthdays and make your
          celebrations complete? The missing wow factor is exquisite birthday
          cakes baked in a design unique to you to create memories that last.
          We can help!
        </p>
        <button className="font-bold rounded-xl text-xl py-3 px-6 bg-red-400 text-white hover:bg-red-500 transition">
          Shop Birthday Cakes
        </button>
      </div>
    </div>
  );
};

export default BirthdayCakes; 
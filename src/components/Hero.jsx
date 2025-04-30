import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/images/hero-cake.jpg"
          alt="Beautiful cake display"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fresh and Yummy Cakes for You
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Your taste buds never had it so good. Order our delicious cakes and pastries for any occasion.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/254723174434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
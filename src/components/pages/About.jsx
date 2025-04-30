import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Nillavee
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Your trusted partner for delicious cakes and pastries
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Nillavee Cakes and Pastries was founded with a passion for creating delicious, 
              high-quality baked goods that bring joy to every occasion. Our journey began 
              with a simple mission: to make every celebration special with our handcrafted 
              cakes and pastries.
            </p>
            <p className="text-gray-600">
              Today, we continue to uphold our commitment to quality, using only the finest 
              ingredients and traditional baking techniques to create memorable treats for 
              our customers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Quality ingredients and traditional baking methods
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Custom designs to match your vision
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Freshly baked goods for every order
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Excellent customer service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl text-red-500 mb-4">🎂</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Custom Designs
              </h3>
              <p className="text-gray-600">
                We bring your cake ideas to life with custom designs and decorations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-red-500 mb-4">✨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We use only the finest, freshest ingredients in all our products
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-red-500 mb-4">🚚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reliable Delivery
              </h3>
              <p className="text-gray-600">
                Timely delivery to ensure your cakes arrive fresh and perfect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
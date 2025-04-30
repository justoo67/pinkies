import React from 'react';

const CakeCategory = ({ title, description, images, features }) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <a
                href="https://wa.me/254723174434"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-300"
              >
                Order Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-w-1 aspect-h-1 group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Small</h3>
              <p className="mt-2 text-3xl font-bold text-red-500">Ksh 2,500</p>
              <p className="mt-4 text-gray-600">Perfect for small gatherings</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Medium</h3>
              <p className="mt-2 text-3xl font-bold text-red-500">Ksh 4,500</p>
              <p className="mt-4 text-gray-600">Ideal for medium-sized events</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Large</h3>
              <p className="mt-2 text-3xl font-bold text-red-500">Ksh 6,800</p>
              <p className="mt-4 text-gray-600">Great for large celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCategory; 
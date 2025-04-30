import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Birthday Cakes',
    image: '/images/birthday-cake.jpg',
    description: 'Celebrate special moments with our custom birthday cakes',
    path: '/cakes/birthday',
  },
  {
    name: 'Wedding Cakes',
    image: '/images/wedding-cake.jpg',
    description: 'Elegant and stunning wedding cakes for your big day',
    path: '/cakes/wedding',
  },
  {
    name: 'Cupcakes',
    image: '/images/cupcakes.jpg',
    description: 'Delicious cupcakes in various flavors and designs',
    path: '/cakes/cupcakes',
  },
  {
    name: 'Fruit Cakes',
    image: '/images/fruit-cake.jpg',
    description: 'Rich and moist fruit cakes for any occasion',
    path: '/cakes/fruit',
  },
];

const CakeCategories = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Cake Categories
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide range of delicious cakes and pastries
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link to={category.path} className="block">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={category.image}
                    alt={category.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeCategories; 
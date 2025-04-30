import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto"
                src="/logo1.png"
                alt="Nillavee Logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/cakes" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Cakes
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <a
              href="https://wa.me/254723174434"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
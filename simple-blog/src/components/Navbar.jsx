import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r bg-white border-b border-blue-200 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img src="https://images.unsplash.com/photo-1702741179903-f962e08c809e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" className="inline-block mr-2 w-10 h-10 rounded-full border-2 border-white" />
            Simple Blog
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 font-semibold hover:text-blue-600 px-3 py-2 rounded transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-gray-700 font-semibold hover:text-blue-600 px-3 py-2 rounded transition-colors duration-300">About</Link>
          <Link to="/contact" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-200">
          <Link to="/" className="block text-gray-800 font-semibold px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block text-gray-800 font-semibold px-4 py-2 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block text-blue-600 font-semibold px-4 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

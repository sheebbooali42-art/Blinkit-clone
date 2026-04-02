import React from 'react'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full shadow-md bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">ShopEase</h1>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded px-2 bg-white text-black">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 py-1"
            />
          </div>

          <FaUser className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
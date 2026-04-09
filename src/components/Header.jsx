 import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Store } from "../Context/Context";

const Header = () => {
  const { cart =  [] } = useContext(Store); // safe default
  const { pathname } = useLocation();

  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="w-full shadow-md bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link to="/">MIN.</Link>
        </h1>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`uppercase transition ${
                pathname === item.path
                  ? "bg-amber-600 px-4 py-1.5 rounded-lg"
                  : "hover:text-amber-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="hidden md:flex items-center bg-white text-black px-2 py-1 rounded-lg">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm"
            />
          </div>

          {/* User */}
          <FaUser className="text-xl cursor-pointer hover:text-amber-400" />

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center"
          >
            <CiShoppingCart className="text-2xl cursor-pointer hover:text-amber-400" />

            {/* Cart Count Badge */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">({cart.length || 0})
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
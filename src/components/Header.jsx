 import React from 'react'
 import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  const  {pathname}=useLocation()
  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
    { name: "Abcd", path: "/abcd" },
  
  ]

  return (
    <header className="w-full shadow-md bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">MIN.

        </h1>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {
            items.map((item, index) => (
              <Link key={index} className={`upercase ${pathname==item.path ? "font-medium text-white bg-amber-800 px-4 py-1.5 rounded-[10px] " :""}`} to={item.path}>{item.name}
              </Link>
            ))
          }
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
  )
}

export default Header
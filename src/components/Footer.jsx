import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


  const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">ShopEase</h2>
          <p>Your one-stop shop for everything.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li> <Link to={"/"} >Home </Link>  </li>  
            <li> <Link to={"About"} >About </Link>  </li>  
            <li> <Link to={"Contact"}> Contact </Link> </li>  
            <li> <Link to={"services"}> services </Link> </li>  
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-t border-gray-700">
        © 2026 ShopEase. All rights reserved.
      </div>
    </footer>
  );
};


 export default Footer;
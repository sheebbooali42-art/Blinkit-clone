 import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      
      <Link to={`/dynamic-page/${product.id}`}>
        <img 
          src={product.thumbnail}
          alt={product.title} 
          className="w-full h-40 object-cover mb-4"
        />
      </Link>

      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-500">₹{product.price}</p>

      <button className="mt-3 w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
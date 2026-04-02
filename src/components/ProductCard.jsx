import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-gray-500">₹{product.price}</p>

      <button
        className="mt-3 w-full py-2 rounded text-white"
   
      >
        Add to Cart
      </button>
    </div>
  );
};

 export  default ProductCard;
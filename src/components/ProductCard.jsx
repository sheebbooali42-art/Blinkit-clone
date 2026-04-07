 import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover mb-4"
        />

        <h2 className="font-semibold">{product.title}</h2>

        <div className="w-full flex justify-between">

        <p className="text-green-600 font-bold">₹{product.price}</p>
        <button className="me-20 bg-amber-400 px-3 rounded">Add To Card</button>

        </div>
       
       
      </div>
    </Link>
  );
};

export default ProductCard;
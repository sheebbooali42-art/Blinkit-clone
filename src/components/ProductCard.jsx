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
        <p className="text-green-600 font-bold">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
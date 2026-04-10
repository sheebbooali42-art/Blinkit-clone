 import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Context/Context";

const ProductCard = ({ product }) => {
  const { AddToCart } = useContext(Store)
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4">

      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Title */}
      <h2 className="font-semibold mt-2">{product.title}</h2>

      {/* Price */}
      <p className="text-green-600 font-bold">₹{product.price}</p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">

        {/* View Details */}
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
        >
          View Details
        </button>

        {/* Add to Cart */}
        <button onClick={() => AddToCart({
              id: product.id,
              title: product.title,
              thumbnail: product.thumbnail,
              price: product.price,
              qua:1
            })
          }
          className="flex-1 bg-amber-400 py-2 rounded-lg hover:bg-amber-500"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
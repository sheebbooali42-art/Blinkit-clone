 import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../Context/Context";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { AddToCart } = useContext(Store);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-5">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="shadow p-4 rounded-xl">

        <img
          src={product.thumbnail}
          className="w-full h-80 object-cover rounded"
        />

        <h1 className="text-2xl font-bold mt-3">
          {product.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <h2 className="text-xl text-green-600 mt-3">
          ₹{product.price}
        </h2>

        {/* 🔥 Buttons Side by Side */}
        <div className="flex gap-4 mt-5">

          {/* 🛒 Add to Cart */}
          <button
            onClick={() =>
              AddToCart({
                id: product.id,
                title: product.title,
                thumbnail: product.thumbnail,
                price: product.price,
              })
            }
            className="bg-amber-400 px-6 py-2 rounded-lg hover:bg-amber-500"
          >
            Add to Cart
          </button>

          {/* 🔙 Go Back */}
          <button onClick={() => navigate(-1)} className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400">
Go Back
          </button>

        </div>

      </div>
    </div>
  );
}
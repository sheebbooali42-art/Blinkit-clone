 import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DynamicPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-cover rounded"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

      <p className="text-gray-600 mt-2">{product.description}</p>

      <p className="text-green-600 text-xl font-bold mt-3">
        ₹{product.price}
      </p>

      <p className="mt-2">⭐ Rating: {product.rating}</p>
    </div>
  );
}
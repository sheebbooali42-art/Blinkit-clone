 import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DynamicPage() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mainImage, setMainImage] = useState("")

  async function fetchProduct() {
    setLoading(true)

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        setMainImage(res.data.thumbnail)
      })
      .catch(() => {
        setProduct(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  // 🔄 Loading
  if (loading) {
    return <h1 className="text-center text-xl mt-10">Loading...</h1>
  }

  // ❌ Error
  if (!product) {
    return <h1 className="text-center text-xl mt-10">Product Not Found</h1>
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGES */}
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />

          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover rounded border cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.price}
            </span>

            <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            ⭐ Rating: {product.rating}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Stock: {product.stock}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Brand: {product.brand}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>

          {/* EXTRA INFO */}
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <p>📦 Shipping: {product.shippingInformation}</p>
            <p>🔁 Return Policy: {product.returnPolicy}</p>
            <p>🛡 Warranty: {product.warrantyInformation}</p>
          </div>

          {/* REVIEWS */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

            {product.reviews.map((review, index) => (
              <div key={index} className="border-b py-3">
                <p className="font-medium">{review.reviewerName}</p>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-yellow-500">⭐ {review.rating}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
import React, { useContext } from "react";
import { Store } from "../Context/Context";

export default function Cart() {
  const { cart, quyHandeler,Total,removeItem } = useContext(Store);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Cart</h1>

      {cart.map((data) => (
        <div className="flex items-center gap-4 bg-white shadow-lg rounded-2xl p-4 mb-4">
          {/* Image */}
          <img
            src={data.thumbnail}
            alt="product"
            className="w-24 h-24 rounded-xl object-cover"
          />

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <p className="text-gray-500">{data.price}</p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => quyHandeler(data.id, 2)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                -
              </button>

              <span className="font-medium">{data.qua}</span>

              <button
                onClick={() => quyHandeler(data.id, 1)} 
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                {" "}
                +
              </button>
            </div>

            {/* Total */}
            <p className="mt-2 font-medium">{data.qua * data.price}</p>
          </div>

          {/* Remove Button */}
          <button onClick={() => removeItem(data.id)} className="bg-gray-200 px-4 py-2 rounded-lg">Remove</button>
          {/* <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
            Remove
          </button> */}
        </div>
      ))}

      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">
          Clear Cart
        </button>

        <h2 className="text-xl font-bold">{Total}</h2>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
}

 import React from "react";
import { Link } from "react-router-dom";

export default function Forzerofor() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center">
      
      <h1 className="text-6xl font-bold text-blue-700">404</h1>
      
      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
      >
        Go Back Home
      </Link>

    </div>
  );
}
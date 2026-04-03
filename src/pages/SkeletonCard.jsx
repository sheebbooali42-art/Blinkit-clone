import React from "react";

const SkeletonCard = () => {
  return (
    <div className="border rounded-lg shadow p-4 animate-pulse">
      
      {/* Image */}
      <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Price */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Button */}
      <div className="h-8 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default SkeletonCard;
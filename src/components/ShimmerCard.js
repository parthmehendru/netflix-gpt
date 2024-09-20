import React from "react";

const ShimmerCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg w-52 h-72 animate-pulse m-4">
      {/* Movie Poster */}
      <div className="bg-gray-700 h-3/4 rounded-t-lg"></div>
      
      {/* Movie Title */}
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;

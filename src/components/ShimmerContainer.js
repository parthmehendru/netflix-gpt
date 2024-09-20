import React from "react";
import ShimmerCard from "./ShimmerCard";

const ShimmerContainer = () => {
  return (
    <div className="flex flex-wrap ml-3">
      {Array(13).fill().map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerContainer;

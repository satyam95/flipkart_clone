import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

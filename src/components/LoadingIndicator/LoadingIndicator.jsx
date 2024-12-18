import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="p-40 grid grid-cols-2 gap-4">
      <div
        className="inline-block w-24 h-24 
            border-8 
            border-t-amber-500 
            border-r-blue-500 
            border-b-rose-500 
            border-l-green-500 
            rounded-full 
            animate-spin"
      ></div>
    </div>
  );
};
export default LoadingIndicator;

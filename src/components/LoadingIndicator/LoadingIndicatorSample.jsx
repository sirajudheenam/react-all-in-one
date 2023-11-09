import React from 'react';

const LoadingIndicatorSample = () => {
  return (
    <div class="p-20 grid grid-cols-3 gap-4">
      <div
        class="inline-block w-24 h-24 
            border-t-8 
            border-t-indigo-500  
            rounded-full 
            animate-spin"
      ></div>

      <div
        class="inline-block w-24 h-24 
            border-8 
            border-t-amber-500 
            border-r-blue-500 
            border-b-rose-500 
            border-l-green-500 
            rounded-full 
            animate-spin"
      ></div>

      <div class="w-24 h-24 p-5 bg-indigo-600 rounded-full flex items-center justify-center">
        <div class="w-24 h-2 bg-white animate-spin rounded-lg"></div>
      </div>
    </div>
  );
};
export default LoadingIndicatorSample;

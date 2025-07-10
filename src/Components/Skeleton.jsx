// components/SkeletonLoader.jsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Video Card Skeleton */}
      <div className="mb-4">
        <div className="bg-gray-700 h-40 w-full rounded-lg"></div>
        <div className="mt-3 flex space-x-3">
          <div className="bg-gray-700 h-10 w-10 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
            <div className="bg-gray-700 h-4 w-1/4 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Repeat for multiple items */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="mb-4">
          <div className="bg-gray-700 h-40 w-full rounded-lg"></div>
          <div className="mt-3 flex space-x-3">
            <div className="bg-gray-700 h-10 w-10 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
              <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
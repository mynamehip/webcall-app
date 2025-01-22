import React from 'react';

import { BiLoaderAlt } from 'react-icons/bi';

const LoadingScreen = ({ size, color }) => {
  return (
    <div className=" w-full h-full center">
      <div className={` animate-spin text-${color}`} style={{ fontSize: `${size}rem` }}>
        <BiLoaderAlt />
      </div>
    </div>
  );
};

export default LoadingScreen;

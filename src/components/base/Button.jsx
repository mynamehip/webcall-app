import React from 'react';

const Button = ({ size, color, colorHover, handleClick, children }) => {
  return (
    <div>
      <div
        onClick={() => (handleClick ? handleClick() : null)}
        className={` bg-${color} rounded-full min-w-[5rem] text-[${size}rem] font-semibold text-white 
        hover:cursor-pointer hover:bg-${colorHover} p-[${size - 1}rem] select-none`}>
        {children}
      </div>
    </div>
  );
};

export default Button;

import React from "react";

const IconButton = ({ size, color, bgColor, rotate, children }) => {
  return (
    <div
      style={{
        fontSize: `${size}rem`,
        width: `${size + 2}rem`,
        height: `${size + 2}rem`,
        color: color,
        backgroundColor: bgColor,
        transform: `rotate(${rotate}deg)`,
      }}
      // Tailwind yêu cầu các lớp CSS phải được xác định cụ thể tại thời điểm biên dịch.
      // => Dùng inline style
      className="flex justify-center items-center rounded-full hover:cursor-pointer;"
    >
      {children}
    </div>
  );
};

export default IconButton;

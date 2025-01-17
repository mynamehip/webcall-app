import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Input = ({ size, color, type, label, required, onChange, password }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* label */}
      {label ? (
        <label className={` text-[${size}rem] font-semibold text-${color}`} htmlFor={`${type}`}>
          {label}
        </label>
      ) : null}
      <br />
      <div className="relative">
        {/* input */}
        <input
          className={` bg-transparent outline-none border-b-[1px] border-${color} dark:text-white w-full h-[${
            size + 1
          }rem] text-[${size}rem] focus:border-b-[2px] ${password ? 'pr-[3.5rem]' : ''}`}
          type={`${showPassword ? 'text' : type}`}
          id={`${type}`}
          // pattern={`${pattern}`}
          required={required}
          onChange={(e) => onChange(e)}
        />
        {/* nếu là password thì hiện icon */}
        {password ? (
          <span
            onClick={togglePassword}
            className={` absolute right-[0.5rem] bottom-[1rem] text-${color} text-[${size}rem]`}>
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;

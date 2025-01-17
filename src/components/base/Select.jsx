import React, { useState, useEffect, useRef } from 'react';

const Select = ({ size, value, data, onSelect }) => {
  const [isSelecting, setSelecting] = useState(false);
  const selectRef = useRef();
  const [isDropdownAbove, setIsDropdownAbove] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setSelecting((pre) => !pre);
  };

  const checkDropdownPosition = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const isAbove = rect.top > window.innerHeight / 2;
      setIsDropdownAbove(isAbove);
    }
  };

  //hàm kiểm tra sự kiện click khỏi select thì đóng select
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setSelecting(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className=" select-none relative bg-white dark:bg-darkBase" ref={selectRef}>
      <div
        className={` text-[${size}rem] leading-[${size}rem] p-[0.5rem] border rounded-md`}
        onClick={() => {
          setSelecting((pre) => !pre);
          checkDropdownPosition();
        }}>
        {value ?? 'Select'}
      </div>
      <div
        style={{
          [isDropdownAbove ? 'bottom' : 'top']: `${size + 1.5}rem`,
        }}
        className={` absolute w-full bg-white dark:bg-darkBase border rounded-md max-h-[15rem] overflow-y-auto ${
          isSelecting ? 'block' : 'hidden'
        }`}>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className={` text-[${size}rem] leading-[${size}rem] hover:bg-primary p-[0.5rem] hover:text-white dark:hover:bg-darkPrimary rounded-md`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;

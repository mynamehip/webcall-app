import React, { useState, useRef, useEffect } from 'react';

const SearchableSelect = ({ size, value, data, onSelect }) => {
  const [isActive, setActive] = useState(false);
  const [listData, setListData] = useState(data);
  const [inputValue, setInputValue] = useState(value);
  const [isDropdownAbove, setIsDropdownAbove] = useState(false);

  const selectRef = useRef();

  const combineList = (item) => {
    if (item) {
      onSelect(item);
    }
    setInputValue(value);
    setListData(data);
    setActive(false);
  };

  const handleChangeInput = (e) => {
    setInputValue(e);
    setListData(data.filter((item) => item === e || item.toString().includes(e)));
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
      combineList();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className=" w-full relative">
      <input
        type="text"
        className={` w-full border outline-none p-[0.5rem] rounded-md text-[${size}rem]`}
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        value={inputValue}
        onFocus={() => {
          setActive(true);
          checkDropdownPosition();
        }}
        ref={selectRef}
      />
      <div
        className={` absolute w-full bg-white dark:bg-darkBase border rounded-md max-h-[15rem] overflow-y-auto ${
          isActive ? 'block' : 'hidden'
        }`}
        style={{
          [isDropdownAbove ? 'bottom' : 'top']: `${size + 2}rem`,
        }}>
        {listData.map((item) => (
          <div
            className={` text-[${size}rem] leading-[${size}rem] hover:bg-primary p-[0.5rem] hover:text-white dark:hover:bg-darkPrimary rounded-md`}
            onClick={() => combineList(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableSelect;

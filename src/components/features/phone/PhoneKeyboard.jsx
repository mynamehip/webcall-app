import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import connectionState from '../../../enum/connectionState';

import { FaBackspace } from 'react-icons/fa';

const PhoneKeyboard = ({ onCall }) => {
  const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  const [value, setValue] = useState('');
  const state = useSelector((state) => state.connectionState.value);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (inputValue.length <= 10) {
      setValue(inputValue);
    }
  };

  const handleDelete = () => {
    const words = value.split('');
    words.pop();
    setValue(words.join(''));
  };

  const handleDial = (value) => {
    setValue((prev) => {
      if (prev.length < 10) {
        return prev + '' + value;
      } else {
        return prev;
      }
    });
  };

  return (
    <div
      className="bg-white dark:bg-darkBase rounded-2xl shadow-md w-[25rem] h-[40rem] relative overflow-hidden"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onCall(value);
        }
      }}>
      <div className="circle w-[30rem] h-[30rem] bg-gradient-to-tl from-primary to-white dark:from-darkPrimary dark:to-darkBase rounded-full absolute translate-x-[20%] translate-y-[30%] z-30 blur-[20rem]"></div>
      <div className="absolute top-0 left-0 pt-[1rem] w-full h-full z-40 flex flex-col items-center justify-start gap-[1rem]">
        <div
          className={` flex justify-end items-center gap-[0.25rem] w-full pr-[1rem] text-[1.25rem] font-medium ${
            state === connectionState.connected ? 'text-green' : 'text-red'
          }`}>
          <div
            className={`w-[1rem] h-[1rem] ${
              state === connectionState.connected ? 'bg-green' : 'bg-red'
            } rounded-full`}></div>
          {state}
        </div>
        <div className=" px-[1rem]">
          <input
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            value={value}
            onChange={handleInputChange}
            className={`outline-none bg-blur border border-white shadow-md text-primary font-black w-full h-[5rem] text-[3rem] text-right px-[1rem] rounded-xl }`}
          />
        </div>
        <div className=" flex-1 w-full bg-transparent grid grid-cols-3">
          <div
            onClick={() => setValue('')}
            className=" flex justify-center items-center text-[2rem] text-white bg-primary rounded-md hover:cursor-pointer shadow-md m-[0.75rem] select-none">
            C
          </div>
          <div
            onClick={() => handleDelete()}
            className=" col-start-3 flex justify-center items-center text-[2rem] text-white bg-primary rounded-md hover:cursor-pointer shadow-md m-[0.75rem] select-none">
            <FaBackspace />
          </div>
          {number.map((item, index) => (
            <div
              onClick={() => handleDial(item)}
              key={index}
              className=" flex justify-center items-center text-[3rem] bg-blur text-primary rounded-md hover:cursor-pointer hover:shadow-xl hover:text-[3.5rem] hover:font-medium shadow-md m-[0.75rem] select-none">
              {item}
            </div>
          ))}
        </div>
        <div
          onClick={() => onCall(value)}
          className=" w-full flex justify-center items-center h-[5rem] text-[2.5rem] font-bold select-none bg-primary text-white">
          Gọi
        </div>
      </div>
    </div>
  );
};

export default PhoneKeyboard;

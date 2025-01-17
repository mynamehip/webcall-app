import React from 'react';
import IconButton from '../../base/IconButton';
import { FaPhoneFlip } from 'react-icons/fa6';
import { answerCall, rejectCall } from '../../../session/JsSIP-session';

const PhoneModal = () => {
  return (
    <div className=" w-[30rem] h-[15rem] bg-white/10 backdrop-blur-xl flex flex-col rounded-md relative p-[0.5rem] shadow-md">
      <div className=" h-[50%] w-full flex justify-center items-center text-[2.5rem] pr-[2rem]">
        <span className=" after:absolute after:animate-dots dark:text-white">Someone calling</span>
      </div>
      <div className=" h-[50%] flex justify-around items-center animate-bounce-up-shot">
        <div onClick={() => rejectCall()}>
          <IconButton size={3} color={'#fff'} bgColor={'#d50000'} rotate={225}>
            <FaPhoneFlip />
          </IconButton>
        </div>
        <div onClick={() => answerCall()}>
          <IconButton size={3} color={'#fff'} bgColor={'#00d552'}>
            <FaPhoneFlip />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;

import React, { useState, useEffect, useRef } from 'react';
import { initSIP, makeCall } from '../../../session/JsSIP-session';
import { useSelector, useDispatch } from 'react-redux';
import phoneState from '../../../enum/phoneState';

import PhoneKeyboard from './PhoneKeyboard';
import PhoneModal from './PhoneModal';
import CallInfor from './CallInfor';

import { FaPhone, FaPhoneVolume } from 'react-icons/fa6';

const Phone = () => {
  const [isActive, setActive] = useState(false);
  const state = useSelector((state) => state.phoneState.value);
  const audioRef = useRef();
  const dispatch = useDispatch();

  const handleCall = (value) => {
    if (value.length === 0) {
      return;
    }
    makeCall(dispatch, value);
  };

  const phoneStyle = (x) => {
    switch (x) {
      case true: {
        return 'bg-main text-white rotate-[135deg] w-[3.5rem] h-[3.5rem]';
      }
      case phoneState.receiveCall:
      case phoneState.ringing: {
        return 'bg-green text-white h-[3.5rem]';
      }
      case phoneState.calling: {
        return 'bg-green text-white h-[3.5rem]';
      }
      default: {
        return 'bg-white text-second w-[3.5rem] h-[3.5rem]';
      }
    }
  };

  const phoneICon = (x) => {
    switch (x) {
      case phoneState.receiveCall:
      case phoneState.ringing: {
        return (
          <div className=" flex justify-center items-center gap-[2.5rem] px-[1rem]">
            <div className=" text-[1.75rem] after:absolute after:animate-dots">Ringing</div>
            <div className=" animate-shake rotate-[135deg]">
              <FaPhone />
            </div>
          </div>
        );
      }
      case phoneState.calling: {
        return (
          <div className=" flex justify-center items-center gap-[2.5rem] px-[1rem]">
            <div className=" text-[1.75rem] after:absolute after:animate-dots">Calling</div>
            <div className=" rotate-[270deg]">
              <FaPhoneVolume />
            </div>
          </div>
        );
      }
      default: {
        return (
          <div
            className={`w-[3.5rem] h-[3.5rem] rotate-[135deg] flex justify-center items-center rounded-full 
              text-[2rem] transition-all duration-300
              ${
                isActive
                  ? ' text-primary bg-white rotate-[270deg]'
                  : ' text-main bg-white dark:text-white dark:bg-darkSecond'
              }`}
            onClick={() => setActive((prev) => !prev)}>
            <FaPhone />
          </div>
        );
      }
    }
  };

  useEffect(() => {
    const ua = initSIP(dispatch, audioRef);

    return () => {
      ua.stop();
      console.log('SIPPhone disconnected');
    };
  }, [dispatch]);

  return (
    <div className=" flex flex-row-reverse gap-[2rem] justify-center items-center relative">
      <audio ref={audioRef} autoPlay></audio>
      <div
        className={` ${phoneStyle(
          state
        )} text-[2rem] rounded-full transition-all duration-300 flex justify-center items-center`}>
        {phoneICon(state)}
      </div>
      <div
        className={`absolute transition-transform duration-300 origin-[95%_0%] top-[4rem] right-0 ${
          isActive && state === phoneState.idle ? 'scale-100' : 'scale-0'
        }`}>
        <PhoneKeyboard onCall={handleCall}></PhoneKeyboard>
      </div>
      <div
        className={`absolute transition-transform duration-300 origin-[90%_0%] top-[4rem] right-0 ${
          state === phoneState.receiveCall ? 'scale-100' : 'scale-0'
        }`}>
        <PhoneModal></PhoneModal>
      </div>
      <div>{state === phoneState.calling ? <CallInfor></CallInfor> : ''}</div>
    </div>
  );
};

export default Phone;

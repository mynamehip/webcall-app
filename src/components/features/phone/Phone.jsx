import React, { useState, useEffect, useRef } from 'react';
import { initSIP, makeCall, rejectCall } from '../../../session/JsSIP-session';
import { useSelector, useDispatch } from 'react-redux';
import phoneState from '../../../enum/phoneState';

import PhoneKeyboard from './PhoneKeyboard';
import PhoneModal from './PhoneModal';
import CallInfor from './CallInfor';
import CallPopup from './CallPopup';

import { FaPhone, FaPhoneVolume } from 'react-icons/fa6';

const Phone = () => {
  const [isActive, setActive] = useState(false);
  const [openPopup, setPopup] = useState(false);
  const [popUpData, setPopupData] = useState({ name: '', address: '', phone: '', note: '' });
  const [modalValue, setModalValue] = useState('');
  const state = useSelector((state) => state.phoneState.value);
  const user = useSelector((state) => state.authState.user);
  const audioRef = useRef();
  const dispatch = useDispatch();

  const handleCall = (value) => {
    if (value.length === 0) {
      return;
    }
    makeCall(dispatch, value);
  };

  const handlePopup = (value) => {
    setPopupData(value);
    setPopup(true);
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
          <div className=" center gap-[2.5rem] px-[1rem]">
            <div className=" text-[1.75rem] after:absolute after:animate-dots">Ringing</div>
            <div className=" animate-shake rotate-[135deg]">
              <FaPhone />
            </div>
          </div>
        );
      }
      case phoneState.calling: {
        return (
          <div className=" center gap-[2.5rem] px-[1rem]">
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
            className={`w-[3.5rem] h-[3.5rem] rotate-[135deg] center rounded-full 
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
    const ua = initSIP(dispatch, audioRef, handlePopup, user, setModalValue);

    return () => {
      ua.stop();
      console.log('SIPPhone disconnected');
    };
  }, [dispatch, user]);

  return (
    <div className=" center flex-row-reverse gap-[2rem] relative">
      {openPopup ? (
        <CallPopup header={'Thông tin nguoi goi'} data={popUpData} onClose={setPopup}></CallPopup>
      ) : null}
      <audio ref={audioRef} autoPlay></audio>
      <div
        className={` ${phoneStyle(
          state
        )} text-[2rem] rounded-full transition-all duration-300 center`}>
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
        <PhoneModal value={modalValue}></PhoneModal>
      </div>
      <div>
        {state === phoneState.ringing ? (
          <div
            onClick={() => rejectCall()}
            className="h-[3.5rem] w-[3.5rem] text-[2rem] bg-red text-white rounded-full center rotate-[135deg]">
            <FaPhone />
          </div>
        ) : null}
      </div>
      <div>{state === phoneState.calling ? <CallInfor></CallInfor> : null}</div>
    </div>
  );
};

export default Phone;

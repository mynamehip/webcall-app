import React from 'react';
import IconButton from '../../base/IconButton';
import TimeCount from '../../base/TimeCount';
import { rejectCall } from '../../../session/JsSIP-session';

import { FaPhoneFlip } from 'react-icons/fa6';

const CallInfor = () => {
  return (
    <div>
      <div className=" min-w-[10rem] h-[4rem] bg-white rounded-full flex flex-row-reverse items-center gap-[1rem] px-[0.6rem]">
        <div
          onClick={() => rejectCall()}
          className="h-[3rem] w-[3rem] text-[1.5rem] bg-red text-white rounded-full center">
          <IconButton rotate={225}>
            <FaPhoneFlip />
          </IconButton>
        </div>
        <div>
          <TimeCount size={1.5}></TimeCount>
        </div>
      </div>
    </div>
  );
};

export default CallInfor;

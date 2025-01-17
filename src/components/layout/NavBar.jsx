import React from 'react';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import AvatarPopup from '../features/AvatarPopup';
import Phone from '../features/phone/Phone';

const NavBar = ({ openMenu }) => {
  return (
    <div className="w-full h-full px-[1.5rem] bg-primary dark:bg-darkPrimary flex justify-between items-center">
      <div>
        <FaBars className=" text-[3rem] text-white" onClick={openMenu} />
      </div>
      <div className="flex gap-[2rem] items-center">
        <Phone></Phone>
        <div className="group relative">
          <FaCircleUser className=" text-[3.5rem] text-white bg-main dark:text-darkSecond dark:bg-white rounded-full" />
          <div className=" group-hover:block hidden">
            <AvatarPopup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

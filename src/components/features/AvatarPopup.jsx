import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../redux/slice/themeSlice';

import ToggleButton from '../base/ToggleButton';

const beforeStyle =
  "before:content-[''] before:absolute before:top-[-1rem] before:right-0 before:w-[50%] before:h-[2rem] before:bg-transparent before:z-[-1]";

const AvatarPopup = () => {
  const theme = useSelector((state) => state.themeState.value);
  const dispath = useDispatch();

  return (
    <div
      className={`w-[20rem] p-[0.5rem] bg-white text-main dark:bg-darkSecond dark:text-white rounded-xl shadow-md absolute top-[4rem] right-0 ${beforeStyle} z-20 select-none`}>
      <Link
        className=" block leading-[1.5rem] p-[1rem] w-full text-[1.5rem] hover:text-[1.75rem] hover:bg-main hover:text-white hover:dark:bg-white hover:dark:text-darkPrimary rounded-xl"
        to={'/login'}>
        Logout
      </Link>
      <div
        onClick={() => dispath(change())}
        className=" leading-[1.5rem] p-[1rem] w-full text-[1.5rem] hover:text-[1.75rem]
        hover:bg-second hover:text-white hover:dark:bg-white hover:dark:text-darkPrimary 
          rounded-xl flex justify-between items-center">
        Dark mode
        <span>
          <ToggleButton size={2} active={theme} border></ToggleButton>
        </span>
      </div>
    </div>
  );
};

export default AvatarPopup;

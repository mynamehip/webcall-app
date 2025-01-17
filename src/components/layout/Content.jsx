import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = ({ isOpen }) => {
  return (
    <div
      className={` sm:block flex-1 bg-base dark:bg-darkBase transition-colors duration-300 p-[4rem] overflow-auto ${
        isOpen ? 'hidden' : ''
      }`}>
      <Outlet></Outlet>
    </div>
  );
};

export default Content;

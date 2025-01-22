import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHouse, FaCircleInfo, FaShield } from 'react-icons/fa6';

const SideMenu = ({ isOpen }) => {
  const menuList = [
    { icon: <FaHouse />, label: 'Home', path: '/' },
    { icon: <FaCircleInfo />, label: 'About', path: '/about' },
    { icon: <FaShield />, label: 'Privacy', path: '/privacy' },
  ];

  return (
    <div
      className={`h-full bg-white dark:bg-darkSecond ${`${
        isOpen ? 'w-full sm:w-[25rem]' : 'w-0 sm:w-[6rem]'
      }`} shadow-md transition-width duration-300 select-none overflow-hidden z-40`}>
      {menuList.map((item, index) => (
        <NavLink
          key={index}
          className={({ isActive, isPending }) => `
            ${isActive ? 'text-white dark:bg-darkPrimary bg-primary' : 'text-main dark:text-white'} 
            p-[1rem] m-[1rem] flex items-center rounded-3xl transition-colors duration-300
          `}
          to={item.path}>
          <div className=" center text-[2rem]">{item.icon}</div>
          <div
            className={`text-[1.5rem] pl-[1rem] font-normal transition-transform duration-300 origin-left ${
              isOpen ? ' scale-100' : ' scale-0'
            }`}>
            {item.label}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;

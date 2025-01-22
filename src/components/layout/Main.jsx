import React, { useState } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import Content from './Content';

const Main = () => {
  const [openSideMenu, setSideMenu] = useState(false);

  const handleOpenSideMenu = () => {
    setSideMenu((pre) => {
      return !pre;
    });
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col">
      <div className=" h-[6rem] shadow-md z-50">
        <NavBar openMenu={handleOpenSideMenu} />
      </div>
      <div style={{ height: 'calc(100vh - 6rem)' }} className=" flex z-40">
        <SideMenu isOpen={openSideMenu}></SideMenu>
        <Content isOpen={openSideMenu}></Content>
      </div>
    </div>
  );
};

export default Main;

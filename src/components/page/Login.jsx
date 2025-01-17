import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../base/Input';
import Button from '../base/Button';
import { loginAction } from '../../actions/login';
import { logout } from '../../redux/slice/authSlice';

import logo from '../../asset/img/gtel_cts_logo.png';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(logout());

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    loginAction(navigate, dispatch, data.username, data.password);
  };

  return (
    <div className=" w-[100vw] h-[100vh] relative overflow-hidden bg-white dark:bg-darkBase z-20">
      <div className=" absolute top-[-50vh] left-[-25vw] w-[50vw] h-[50vw] bg-primary dark:bg-darkPrimary rounded-full blur-[25rem] z-10"></div>
      <div className=" absolute top-[25%] right-[0] w-[50vw] h-[50vw] bg-primary dark:bg-darkPrimary rounded-full blur-[25rem] z-10"></div>
      <div className=" absolute w-[100vw] h-[100vh] top-0 left-0 z-20 flex">
        <div className=" flex-1 h-[full] xl:block hidden">
          <div className=" w-full h-full flex justify-center items-center select-none">
            <img className=" w-[75%] h-[75%] object-contain" src={logo} alt="" />
          </div>
        </div>
        <div className=" flex-1 h-[full]">
          <div className=" w-full h-full flex justify-center items-center">
            <div className=" w-[75%] h-[75%] shadow-2xl border bg-blur border-white backdrop-blur-3xl flex flex-col items-center gap-[2rem] p-[2rem]">
              <div className=" text-[4rem] leading-[4rem] font-bold text-main select-none">
                LOG<span className=" text-red">IN</span>
              </div>
              <form action="" className=" flex-1 flex flex-col items-center gap-[2rem] w-full">
                <div className=" flex-1 flex flex-col items-center w-full pt-[6rem]">
                  <div className="w-[75%] mb-[6rem]">
                    <Input
                      color={'main'}
                      size={2}
                      label={'User Name'}
                      type={'username'}
                      onChange={handleChangeData}></Input>
                  </div>
                  <div className="w-[75%]">
                    <Input
                      color={'main'}
                      size={2}
                      label={'Password'}
                      type={'password'}
                      password
                      onChange={handleChangeData}></Input>
                  </div>
                </div>
                <div>
                  <Button size={2} color={'main'} colorHover={'primary'} handleClick={handleSubmit}>
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

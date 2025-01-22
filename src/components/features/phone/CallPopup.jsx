import React, { useState } from 'react';

const CallPopup = ({ header, data, onClose }) => {
  const [inputData, setData] = useState(data);

  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 shadow-2xl">
      <div className=" bg-white dark:bg-darkBase dark:text-darkMain dark:border dark:border-white rounded-md">
        <div className=" z-10">
          <div className=" flex flex-col relative rounded-md">
            <div className=" p-[1rem] pt-[1.5rem] pb-[1.5rem] text-center text-[2.5rem] font-semibold text-primary rounded-t-md">
              {header}
            </div>
            <div>
              <form className=" text-[1.75rem] grid grid-cols-3 gap-[2rem] p-[2rem]">
                <div className="">
                  <label htmlFor="name" className=" col-span-3 font-semibold">
                    Họ tên:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className=" border-b text-[1.75rem] pt-[1rem] w-full bg-transparent"
                    onChange={(e) => handleChangeInput(e)}
                    value={inputData.name}
                  />
                </div>
                <div className="">
                  <label htmlFor="address" className=" font-semibold">
                    Địa chỉ:
                  </label>
                  <input
                    type="text"
                    id="address"
                    className=" border-b text-[1.75rem] pt-[1rem] w-full bg-transparent"
                    onChange={(e) => handleChangeInput(e)}
                    value={inputData.address}
                  />
                </div>
                <div className="">
                  <label htmlFor="phone" className=" font-semibold ">
                    Số điện thoại:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className=" border-b text-[1.75rem] pt-[1rem] w-full bg-transparent"
                    onChange={(e) => handleChangeInput(e)}
                    value={inputData.email}
                  />
                </div>
                <div className=" mt-[1rem] col-span-3 flex">
                  <label htmlFor="note" className=" col-span-3 font-semibold">
                    Mô tả:
                  </label>
                  <textarea
                    name=""
                    id="note"
                    className=" flex-1 outline-none border p-[1rem] ml-[1rem] bg-transparent"
                    value={inputData.note}
                    onChange={(e) => handleChangeInput(e)}
                    rows={8}></textarea>
                </div>
              </form>
            </div>
            <div className=" flex justify-around text-[2rem] font-semibold mb-[2rem] select-none rounded-md">
              <div
                className=" bg-transparent text-primary border border-primary lg:w-[20rem] w-auto p-[1rem] 
              text-center hover:text-[2.25rem] hover:border-white hover:bg-red hover:text-white"
                onClick={() => onClose(false)}>
                Thoát
              </div>
              <div className=" bg-primary text-white p-[1rem] text-center lg:w-[20rem] w-auto hover:text-[2.25rem] hover:bg-green">
                Lưu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPopup;

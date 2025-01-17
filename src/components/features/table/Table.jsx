import React from 'react';

const Table = ({ header, data }) => {
  const displayNumber = header.length;

  console.log(data);

  if (data.length === 0) {
    return (
      <div className=" w-full flex justify-center items-center p-[2rem] text-[2rem] leading-[2rem]">
        Không có dữ liệu
      </div>
    );
  }

  return (
    <div className=" select-none bg-white dark:bg-darkBase shadow-lg w-full flex">
      <table className=" flex-1">
        <thead className=" bg-main text-white dark:bg-darkPrimary text-[2rem] leading-[2.25rem]">
          <tr>
            {header.map((item, index) => (
              <th key={index} className=" select-text p-[1rem]">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" text-[1.5rem] leading-[2rem]">
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map(
                (value, i) =>
                  i < displayNumber && (
                    <td
                      key={i}
                      className={`text-center select-text p-[1rem] ${
                        index % 2 === 1 ? 'bg-main/5' : ''
                      }`}>
                      {value}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

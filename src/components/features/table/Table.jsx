import React from 'react';

const Table = ({ header, data, special }) => {
  if (data.length === 0) {
    return (
      <div className=" w-full center p-[2rem] text-[2rem] leading-[2rem]">Không có dữ liệu</div>
    );
  }

  const handleClick = (value, i, row) => {
    const f = special.find((item) => item.index === i) ?? null;
    if (f != null) {
      switch (f.type) {
        case 'button':
          return (
            <td
              key={i}
              className={`text-center select-text p-[1rem] hover:bg-primary/20 hover:cursor-pointer ${
                row % 2 === 1 ? 'bg-main/5' : ''
              }`}
              onClick={() => f.callback(value)}
              title="Gọi">
              {value}
            </td>
          );
        case 'audio':
          return (
            <td
              key={i}
              className={` center select-text p-[1rem] ${row % 2 === 1 ? 'bg-main/5' : ''}`}>
              <audio src={value} controls></audio>
            </td>
          );
        default:
          break;
      }
    } else {
      return (
        <td
          key={i}
          className={`text-center select-text p-[1rem] ${row % 2 === 1 ? 'bg-main/5' : ''}`}>
          {value}
        </td>
      );
    }
  };

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
              {Object.values(item).map((value, i) => handleClick(value, i, index))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

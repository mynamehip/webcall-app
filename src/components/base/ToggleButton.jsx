import React, { useEffect, useState } from 'react';

const ToggleButton = ({ size, active, border }) => {
  const [isActive, setActive] = useState(active);

  useEffect(() => {
    setActive(active);
  }, [active]);

  return (
    <div>
      <div
        className={` bg-white relative rounded-full border border-primary dark:border-darkPrimary select-none`}
        onClick={() => setActive((pre) => !pre)}
        style={{
          width: `${size * 2}rem`,
          height: `${size}rem`,
          boxSizing: 'content-box',
        }}>
        <div
          className={` absolute top-[0.25rem] left-[0.25rem] transition-all duration-300 bg-primary dark:bg-darkPrimary rounded-full`}
          style={{
            width: `${size - 0.5}rem`,
            height: `${size - 0.5}rem`,
            transform: isActive ? `translateX(${size}rem)` : 'translateX(0)',
          }}></div>
      </div>
    </div>
  );
};

export default ToggleButton;

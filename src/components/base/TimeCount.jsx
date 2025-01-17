import React, { useState, useEffect } from "react";

const Timer = ({ size }) => {
  const [time, setTime] = useState(0); // time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format time to hh:mm:ss
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      <span style={{ fontSize: `${size}rem` }}>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;

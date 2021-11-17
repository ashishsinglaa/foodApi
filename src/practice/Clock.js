import React, { useState, useEffect } from "react";

const Clock = () => {
  let today = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(today);

  useEffect(() => {
    setInterval(() => {
      const currTime = new Date().toLocaleTimeString();
      setTimer(currTime);
    }, 1000);
  });
  return <div>{timer}</div>;
};

export default Clock;

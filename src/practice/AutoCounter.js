import React, { useState, useEffect } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  console.log("component renders");

  useEffect(() => {
    console.log("inside useEffect");
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("component unmounting code");
      clearInterval(interval);
    };
  }, []);

  return <div>Counter - {count}</div>;
};

export default AutoCounter;

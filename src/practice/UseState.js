import React, { useState } from "react";

console.log("Outside UseState component function");
const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState component renders");

  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
};
export default UseState;

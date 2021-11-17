import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

//   const changeHandler = (event) => {
//       console.log({event})
//     if (event.target.value === "inc") {
//       setCount((prev) => prev + 1);
//     } else if (event.target.value === "dec") {
//       setCount((prev) => prev - 1);
//     } else if (event.target.value === "reset") {
//       setCount((prev) => 0);
//     }
//   };

  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick={(prev) => setCount(prev+1)}>
        Increment
      </button>
      <button onClick={(prev) => setCount(prev-1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
export default HookCounter;

import React, { useState, useEffect } from "react";

const HookTItle = () => {
  const [coord, setCord] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    console.log("inside useEffect");
    window.addEventListener("mousemove", changeCord);

    return () => {
      console.log("component unmounting code executed");
      window.removeEventListener("mousemove", changeCord);
    };
  }, []);

  const changeCord = (e) => {
    console.log("inside changeCord ...");
    setCord({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div>
      mouse x : {coord.x} mouse y : {coord.y}
    </div>
  );
};

export default HookTItle;

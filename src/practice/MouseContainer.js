import React, { useState } from "react";
import HookTitle from "./HookTItle";

const MouseContainer = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Button</button>
      {visible && <HookTitle />}
    </div>
  );
};

export default MouseContainer;

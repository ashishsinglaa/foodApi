import axios from "axios";
import React, { useState, useEffect } from "react";

const Test = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      //   .then((resp) => {
      //     console.log(resp);
      //     setResponse(resp);
      //   })
      .catch((err) => console.log(err));
  }, [response]);

  return <div>Test</div>;
};

export default Test;

import axios from "axios";
import React, { useState, useEffect } from "react";

const FetchingData = () => {
  const [tempId, setTempId] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    setId(tempId);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={tempId}
          onChange={(e) => setTempId(e.target.value)}
        />
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
};

export default FetchingData;

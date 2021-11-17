import React from "react";

const AsyncComp = () => {
  const fetchData = async () => {
    const response = await fetch("http://api.github.com/users");
    const data = await response.json();
    return data;
  };

  fetchData().then((resp) => {
    console.log(resp);
  });
  return <div>Async</div>;
};

export default AsyncComp;

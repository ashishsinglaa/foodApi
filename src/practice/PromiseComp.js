import React from "react";

const PromiseComp = () => {
  //first promise
  const isWatchMovie = () => {
    return new Promise((resolve, reject) => {
      let busy = true;
      if (!busy) {
        resolve("Going to movie");
      } else {
        reject("Busy have some work");
      }
    });
  };

  // second promise
  const isEating = () => {
    return new Promise((resolve, reject) => {
      const havingMoney = true;
      if (havingMoney) {
        resolve("Its yummy");
      } else {
        reject("You are lier");
      }
    });
  };

  isWatchMovie()
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));

  return <div>Promise</div>;
};

export default PromiseComp;

import axios from "axios";
import React from "react";

const AxiosComp = () => {
  const getRequest = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  //   const getRequest = async () => {
  //     const resp = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=5"
  //     );
  //     return resp;
  //   };

  //   const postRequest = () => {
  //     axios({
  //       method: "post",
  //       url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
  //       data: {
  //         title: "Buy food",
  //         completed: false,
  //       },
  //     })
  //       .then((resp) => console.log(resp))
  //       .catch((err) => console.log(err));
  //   };

  const postRequest = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        data: {
          title: "buy breakfast",
          completed: "false",
        },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const putRequest = () => {
    axios
      .patch("https://jsonplaceholder.typicode.com/todos/1", {
        title: "updated todo",
        completed: true,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const simRequest = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
      ])
      .then(
        axios.spread((todos, posts) => {
          console.log(todos.data);
          console.log(posts.data);
        })
      );
  };

  return (
    <div>
      <button onClick={getRequest}>Get</button>
      <button onClick={postRequest}>Post</button>
      <button onClick={putRequest}>Put/Patch</button>
      <button onClick={simRequest}>Simul</button>
    </div>
  );
};

export default AxiosComp;

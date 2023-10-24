import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/sourabhk08")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-orange-700 text-white p-3 text-3xl text-center">
      GitHub followers : {data.followers}
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <img src={data.avatar_url} alt="Github profile picture" width={300} />
      </div>
      <br />
      <br />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sourabhk08");
  return response.json();
};

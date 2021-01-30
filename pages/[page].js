import React, { useEffect, useState } from "react";
import { newFunc, apidata } from "../apiCalls";
import * as axios from "axios";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
function Page({ res }) {
  const showSettings = (e) => {
    e.preventDefault();
  };
  // console.log(props);
  // if (!props.isValid) {
  //   return <h1>Page Not Found</h1>;
  // } else {
  return (
    <>
      <button
        onClick={() => {
          console.log("dfgh");
        }}
      >
        The current state is New.
      </button>
      {/* <ul>
        {res.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul> */}
      {/* <div id="burger-menu" style={{ display: "none" }}> */}

      {/* </div> */}
    </>
  );
}
// }

export async function getStaticPaths() {
  const allUrls = await apidata();

  let arr = [];

  console.log(allUrls.urls);

  allUrls.urls.forEach((item) => {
    arr.push({ params: { page: item } });
  });

  return {
    paths: [...arr],
    fallback: false, // See the "fallback" section below
  };
}

export const getStaticProps = async (ctx) => {
  // const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  const res1 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res2 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res3 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res4 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res5 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res6 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res7 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  // const res8 = await axios.get(`https://jsonplaceholder.typicode.com/comments`);

  // console.log(res1.data);
  // const post = await res.json();

  // console.log(res.data.data);

  let isValid = true;
  // if (ctx.query.page !== "rohit") {
  //   isValid = false;
  // }
  return { props: { res: [...res1.data] } };
};

export default Page;

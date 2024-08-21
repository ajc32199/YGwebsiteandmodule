import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <p1>
        Welcome to the homepage of TKE Duluth: Upsilon Gamma. Here you can view
        and edit member status.{" "}
      </p1>
    </div>
  );
};

export default Home;

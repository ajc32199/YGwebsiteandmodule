import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effect ran");
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Network response was not ok");
        }
        return res.json(); // Return the parsed JSON
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

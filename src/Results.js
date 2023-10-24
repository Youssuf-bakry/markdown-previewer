import React, { useEffect, useRef } from "react";

function Results() {
  // console.log(results);
  let dataApi = useRef(null);
  useEffect(() => {
    async function fetchMD() {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.markdownguide.org/api/v1/basic-syntax.json"
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      dataApi.current = data;
      console.log(dataApi.current);
      // return null;
    }
    fetchMD();
  }, []);
  // const data = dataApi.current;

  return <div></div>;
}

export default Results;

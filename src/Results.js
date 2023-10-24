import React, { useEffect, useRef } from "react";

function Results() {
  // console.log(results);
  let dataApi = useRef(null);
  useEffect(() => {
    async function fetchMD() {
      const res = await fetch(
        "https://cors-com/Youssuf-bakry/markdown-previewer/db.json"
      );
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

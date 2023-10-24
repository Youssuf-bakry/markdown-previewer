import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import Results from "./Results";
import useLocalStorage from "./useStorage";

const App = () => {
  const [code, setCode] = useState("## Hello");
  // const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  // const [resultsState, setResults] = useState([]);
  const [markdownContent, setMarkdownContent] = useLocalStorage(
    "markdownContent",
    ""
  );

  // const handleMarkdownChange = (event) => {
  //   setMarkdownContent(event.target.value);
  // };

  const [showMd, setShowMd] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [docs, setdocs] = useState(false);
  const openMD = () => {
    setShowMd(true);
    setShowPreview(false);
    setdocs(false);
  };

  const openPreview = () => {
    setShowMd(false);
    setdocs(false);
    setShowPreview(true);
  };
  const handledocs = () => {
    setShowMd(false);
    setShowPreview(false);
    setdocs(true);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setMarkdownContent(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview} className="btn">
            Preview
          </button>
          <button onClick={handledocs} className="btn">
            Results
          </button>
        </div>

        {showMd && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {showPreview && (
          <div>
            <textarea value={markdownContent} readOnly />
          </div>
        )}

        {docs && <Results />}
      </div>
    </>
  );
};

export default App;

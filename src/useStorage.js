import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// function App() {
//   const [markdownContent, setMarkdownContent] = useLocalStorage('markdownContent', '');

//   const handleMarkdownChange = (event) => {
//     setMarkdownContent(event.target.value);
//   };

//   return (
//     <div>
//       <textarea value={markdownContent} onChange={handleMarkdownChange} />
//       <p>You entered: {markdownContent}</p>
//     </div>
//   );

export default useLocalStorage;

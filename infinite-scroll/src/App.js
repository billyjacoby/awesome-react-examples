import { useState, useEffect, useCallback, useRef } from "react";

import "./App.css";

import { useFetch } from "./hooks/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    //* loader.current only exists when the node is rendered on the page
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <h2>with IntersectionObserver</h2>
      <div>
        {list.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={item.url}
                style={{ height: 100, width: 100 }}
                alt="alt"
              />
              {item.title}
            </div>
          );
        })}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default App;

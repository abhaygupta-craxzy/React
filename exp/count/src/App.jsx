import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <div id="center">
          <h1>React Counter</h1>
          <div className="count">{count}</div>

          <button
            type="button"
            className="increase"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment(+)
          </button>

          <button
            type="button"
            className="decrease"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement(-)
          </button>

          <button type="button" className="reset" onClick={() => setCount(0)}>
            Reset(0)
          </button>

          <p>Simple counter app using React <br /> useState Hook</p>
        </div>
      </div>
    </div>
  );
}

export default App;

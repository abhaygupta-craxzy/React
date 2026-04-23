import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <div className="container">
        <h1>
          React Counter <span>Application</span>
        </h1>

        <h2>{count}</h2>

        <div className="button-row">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="btn btn-primary"
          >
            Increment (+)
          </button>

          <button
            onClick={() => setCount((c) => c - 1)}
            className="btn btn-secondary"
          >
            Decrement (-)
          </button>
        </div>

        <button onClick={() => setCount(0)} className="btn btn-reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
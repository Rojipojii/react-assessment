// App.jsx
import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  const isNegative = () => count < 0;
  return (
    <div className="App">
      <h1>{count}</h1>
      <Child count={count} setCount={setCount} />
      <p>{isNegative() ? "Why so negative?" : " "}</p>
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(!loaded);
    console.log(loaded);
  }, [count]); // useEffect runs when count changes

  useEffect(() => {
    alert("hello side effect")
    return () => alert("good bye component") // runs when component is destroyed
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>useState Hook</code>
        </p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>
          <span>Count: {count}</span>
        </p>
      </header>
    </div>
  );
}

export default App;

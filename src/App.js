import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(!loaded);
    console.log(loaded);
  }, [count]); // useEffect runs when count changes

  const btn = useRef(null);
  const clickBtn = () => btn.current.click();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>useState Hook</code>
        </p>
        <button ref={btn} onClick={() => setCount(count + 1)}>Click Me</button>
        <p>
          <span>Count: {count}</span>
        </p>
        <button onClick={() => clickBtn()}>Click Me 2</button>
      </header>
    </div>
  );
}

export default App;

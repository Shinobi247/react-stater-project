import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>useState Hook</code>
        </p>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(!loaded);
    console.log(loaded);
  }, [count]); // useEffect runs when count changes

  useEffect(() => {
    alert("hello side effect");
    return () => alert("good bye component"); // runs when component is destroyed
  });

  let moods = {
    happy: "happy",
    sad: "sad"
  };
  const MoodContext = createContext(moods);

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
        <MoodContext.Provider value={moods}>
          {/* Components will have access to the moods */}
        </MoodContext.Provider>
      </header>
    </div>
  );
}

function MoodEmoji() {
  const Mood = useContext(MoodContext);
  return <p>{Mood}</p>;
}

export default App;

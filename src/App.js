import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;

    default:
      throw new Error("Invalid action type");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>useState Hook</code>
        </p>
        Count: {state}
        <button onClick={() => dispatch({ type: "plus" })}></button>
        <button onClick={() => dispatch({ type: "minus" })}></button>
      </header>
    </div>
  );
}

export default App;

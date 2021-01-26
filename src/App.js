import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";
import "./App.css";

import About from "./pages/about.js";
import Home from "./pages/home.js";
import Navbar from "./components/Navbar.js";

axios.defaults.baseURL =
  "https://vyw9s8b2x1.execute-api.us-east-1.amazonaws.com/dev";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;

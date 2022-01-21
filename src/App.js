import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Edit from "./Pages/Edit";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Compnents/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Route path/>
        </main>
      </Router>
      
    </div>
  );
}

export default App;

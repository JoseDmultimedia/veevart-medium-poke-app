import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Move } from "./pages/Move/Move.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/move" element={<Move />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

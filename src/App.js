import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import Home from "./components/home/home";
import Logicgates from "./components/Logic-gates/Logic-gates";
import TruthTables from "./components/Truth-Tables/Truth-tables";
import AND from "./components/AND/AND";

function App() {
  return (
      <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/logic-gates" element={<Logicgates />} />
      <Route exact path="/truth-table" element={<Logicgates />} />
      <Route exact path="/and" element={<AND />} />
      <Route exact path="/or" element={<Logicgates />} />
      <Route exact path="/not" element={<Logicgates />} />
      <Route exact path="/nand" element={<Logicgates />} />
      <Route exact path="/nor" element={<Logicgates />} />
      <Route exact path="/exor" element={<Logicgates />} />
      <Route exact path="/exnor" element={<Logicgates />} />
      
      </Routes>
    </Router>
      </div>
  );
}

export default App;

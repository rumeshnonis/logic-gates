import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import Home from "./components/home/home";
import Logicgates from "./components/Logic-gates/Logic-gates";
import TruthTables from "./components/Truth-Tables/Truth-tables";
import AND from "./components/AND/AND";
import Or from "./components/OR/OR";
import Not from "./components/NOT/NOT";
import Nand from "./components/NAND/NAND";
import Nor from "./components/NOR/NOR";
import Xor from "./components/XOR/XOR";
import Xnor from "./components/XNOR/XNOR";

function App() {
  return (
      <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/logic-gates" element={<Logicgates />} />
      <Route exact path="/truth-table" element={<TruthTables />} />
      <Route exact path="/and" element={<AND />} />
      <Route exact path="/or" element={<Or />} />
      <Route exact path="/not" element={<Not />} />
      <Route exact path="/nand" element={<Nand />} />
      <Route exact path="/nor" element={<Nor />} />
      <Route exact path="/xor" element={<Xor />} />
      <Route exact path="/xnor" element={<Xnor />} />
      
      </Routes>
    </Router>
      </div>
  );
}

export default App;

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import Search from "./Search";
import Review from "./Review";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/review" element={<Review />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

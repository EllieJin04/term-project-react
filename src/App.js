import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Home from "./Home";
import Search from "./Search";
import Review from "./Review";
import Login from "./Login";
import Register from "./Register";
import AddReview from "./AddReview";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080")
    .then(res => res.json)
    .then(data => data.json)
    .catch(err => console.log(err.message))
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/review" element={<Review />}/>
          <Route path="/add_review" element={<AddReview />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

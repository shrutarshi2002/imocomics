// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ComicDetail from "./ComicDetail";

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>😂 Joke Comics</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic/:id" element={<ComicDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

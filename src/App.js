import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Default route is Signup */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

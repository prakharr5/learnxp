import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/courses";
import Index from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;

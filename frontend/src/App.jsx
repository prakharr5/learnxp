// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Courses from "./pages/courses";
// import Index from "./pages";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/courses" element={<Courses />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

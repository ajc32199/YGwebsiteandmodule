import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import EditMember from "./EditMember";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-member/:id" element={<EditMember />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

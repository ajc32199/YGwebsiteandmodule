import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./SignIn";
import Members from "./Members";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
    console.log(backendData);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/SignIn" element={<Create />} />
            <Route exact path="/Members" element={<Members />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new module";
  const likes = 50;
  const link = "http://www.google.com";

  const person = { name: "name", age: 30 };
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

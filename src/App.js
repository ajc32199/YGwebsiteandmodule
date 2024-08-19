import './App.css';

function App() {
  const title = "Welcome to the new module";
  const likes = 50;
  const link = "http://www.google.com";

  const person = {name: 'name', age: 30};
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked  {likes} times</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

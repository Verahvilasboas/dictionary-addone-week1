import React from "react";
import bird from "./bird_2.jpg"
import './App.css';

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bird} className="logo img-fluid" alt="logo" />

        <a href="#" className="btn btn-primary">
          Search   </a>
      </header>
    </div>
  );
}



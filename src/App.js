import bird from "./bird_2.jpg"
import './App.css';
import Dictionary from "./Dictionary"

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bird} className="logo img-fluid" alt="logo" />
      </header>
      <div className="container">
        <h1>Dictionary</h1>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="app-footer">
        <small>coded by vera Vilas Boas </small>
        <a
          href="https://github.com/Verahvilasboas/dictionary-addone-week1" > github </a>
      </footer>
    </div>
  );
}



import "./App.css";
import logo from "./logoss.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p className="btn btn-primary">Hellllo</p>
          <img src={logo} alt="logosylwia" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

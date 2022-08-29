import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p className="title-header">Dictionary</p>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <footer>Coded by Sylwia Stolz</footer>
    </div>
  );
}

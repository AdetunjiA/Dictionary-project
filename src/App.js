import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <main>
          <Dictionary defaultSearchText="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}

import logo from "./logo2.png.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/AdetunjiA/Dictionary-project"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Adeola Adetunji and{" "}
            <a
              href="https://nostalgic-cray-06d85a.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

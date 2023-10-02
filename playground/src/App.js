import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editando el parrafo inicial
        </p>
        <a
          className="App-link"
          href="https://github.com/Jeremy2710/Proyecto-React/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio de Git
        </a>
      </header>
    </div>
  );
}

export default App;

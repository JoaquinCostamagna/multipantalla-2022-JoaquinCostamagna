import logo from './logo.svg';
import './App.css';


function saludo(fullName){
  return(
    <h1>Hola {fullName}!</h1>
  )
}

function App({nombre, apellido}) {
  let nombreCompleto = nombre + " " + apellido;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {saludo(nombreCompleto)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

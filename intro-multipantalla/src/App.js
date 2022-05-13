import logo from './logo.svg';
import './App.css';


function Saludo({nombre, apellido}){
  return(
    <h1>Hola {nombre} {apellido}!</h1>
  )
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo nombre={props.nombre} apellido={props.apellido}> </Saludo>
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

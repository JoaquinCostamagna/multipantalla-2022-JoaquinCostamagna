import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toggle from './toggle';
import Clock from './Clock';

function Saludo(props){
  const {nombre, apellido} = props;
  return(
    <h1>Hola {nombre} {apellido}!</h1>
  )
}

function App(props) {

  const [onOff, setOnOff] = useState('On');
  function toggleButton(){
      if (onOff == 'On') {
          setOnOff('Off');
      }
      else setOnOff('On');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo nombre={props.nombre} apellido={props.apellido}/>
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
        <Toggle onToggleClick={toggleButton}  text={onOff} />
        <Clock/>
      </header>

    </div>
  );
}

export default App;

import Nome from './Nome.js'
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
function soma(y,z){
  return y+z+10
=======
function soma(c,d){
  return c+d
>>>>>>> abc212a4f5a49b9e8411b2e7248e30d1c989cdc1
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nome/>
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

import React from 'react';
import logo from './logo.svg';
import set from 'lodash'
import './App.css';

const testParam = {
  name: 'tate',
  age: 18,
}
function App() {
  const onchange = () => {
    set(testParam, 'name', 'snow')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onchange}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://shein.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit shein
        </a>
      </header>
    </div>
  );
}

export default App;

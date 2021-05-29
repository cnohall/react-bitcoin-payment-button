# react-bitcoin-payment-button
Receive Bitcoin Payments on your React website through the Blockonomics Payment Button

### Installation

`npm i react-bitcoin-payment-button`

### Usage


Example:
```
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BitcoinPaymentButton } from 'react-bitcoin-payment-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BitcoinPaymentButton uid="7a5869957040403d"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

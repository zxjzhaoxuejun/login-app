import React from "react";
import store from "./../../store";
import {
  addToCart,
  updateToCart,
  delToCart
} from "./../../actions/cart-actions";
import logo from "./img/logo.svg";
import "./App.css";

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToCart("coff 500gm", 2, 260));
store.dispatch(addToCart("dangao", 3, 300));
store.dispatch(updateToCart("dangao", 5, 6000));
store.dispatch(delToCart("coff 500gm"));
unsubscribe();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

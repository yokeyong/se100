import { useEffect } from "react";
import './App.css';

function App() {

  function handleClick() {
    alert('Hello World!')
  }

  useEffect(() => {
    console.log("Making API Request");
  }, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onChange={handleClick}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  )
}

export default App;

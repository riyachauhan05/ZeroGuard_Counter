import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    if (count>0){
    setCount(count - 1);
    }
  };

  // Function to reset the counter to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

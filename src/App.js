import React from "react";
import { useState } from 'react';

function App(){
  return (
    <React.Fragment>
      <h1 className="title">Trevor Hunter</h1>
      <Campfire  />
      <hr/>
    </React.Fragment>
  );
}

function Campfire() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
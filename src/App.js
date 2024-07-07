import React , { useState } from 'react';

function App() {

  const [data, setData] = useState(0);

  const handleInc = ()=>{
    setData(prevData => prevData + 1)
    // console.log(data);
  }

  const handleDec = ()=>{
    setData(prevData => prevData -1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {data}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default App;

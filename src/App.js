import React , { useState } from 'react';

function App() {

  const [data, setData] = useState(0);

  const handleInc = ()=>{
    setData(prevData => prevData + 1)
  }

  const handleDec = ()=>{
    setData(prevData => prevData -1)
  }

  const buttonStyle = {
    fontSize: '20px',
    padding: '10px 20px',
    margin: '0 10px', 
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Count: {data}</p>
      <button onClick={handleInc} style={buttonStyle}>
        +
      </button>
      <button onClick={handleDec} style={buttonStyle}>
        -
      </button>
    </div>
  );
}

export default App;

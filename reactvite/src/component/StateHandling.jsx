import React, { useState } from 'react'

function StateHandling() {
const [counter, setCounter]=useState(20);
const [red, setRed]=useState(20);
const [green, setGreen]=useState(20);
const [blue, setBlue]=useState(20);

function increment () {
    setCounter(counter+10);
}

return (
    <div style= {{border: '2px solid red', height: '300px', width: '300px', marginLeft: '200px'}}>
      <h2 style={{color: 'brown', backgroundColor: 'black'}}>Counter App</h2>
    <h2>Counter={counter}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={()=>setCounter(counter-5)}>Decrement</button>
    </div>
)
    }
export default StateHandling
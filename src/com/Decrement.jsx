import React, { useState } from 'react'

const Decrement = () => {
  const [count, setCount]=useState(0)
  
    const handleButtononCount = () => {
      setCount(count-1);
      console.log(count-1)
    }
    return (
      <>
      <h1>{count}</h1>
      <button onClick={handleButtononCount}>Decrement</button>
      </>
    )
}

export default Decrement

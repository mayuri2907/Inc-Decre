import React, { useState } from 'react';
import Decrement from './com/Decrement';
import Increment from './com/Increment';

const App = () => {
  // let count = 0

  // const [count, setCount]=useState(0)

  // const handleButtononCount = () => {
  //   setCount(count+1);
  //   console.log(count+1)
  // }
  return (
    <>
    <h1>This is For A Demo....!</h1>
    <Increment />
    <Decrement />
    
    </>
  )
}

export default App

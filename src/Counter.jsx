import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const DecrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const ClearCounter = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={IncrementHandler}>Increment</button>
      <div>{count}</div>
      <button onClick={DecrementHandler}>Decrement</button>
      <button onClick={ClearCounter} style={{ marginTop: '3rem' }}>
        Clear Counter
      </button>
    </>
  );
};

export default Counter;

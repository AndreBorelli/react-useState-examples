
// In this project we use useState, assigning the original value to the number 0 and initially we created three buttons, one that decreases by 1, another that resets
// the value to 0 and the other that increases by 1. Then we create a slightly more complex button, which increases by 1, the original value after two seconds using 
// setTimeOut. The setTimeOut by definition receives two parameters, the first being the function to be executed and the second the value in milliseconds that should
// be waited until executing the function defined as the first parameter. However, it is noticed that by simply assigning the value as a reference value of useState + 1,
//  if you click more than 1x on the button before it is updated, it only increases by 1. In this case, the solution is to create a function passing the value previous 
// (prevState) nd returning it + 1, thus solves the problem.

import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

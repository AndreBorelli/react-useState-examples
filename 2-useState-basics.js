// In this project we use useState, assigning the initial value as a string with the value "random title" and we create a handleClick function that uses the "if" 
// to check if the title is the same or different from the one passed in the function and changing it according to the value that it is dynamically presenting, making 
// it have two possible values.

import React, { useState } from 'react';

const UseStateBasics = () => {


  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

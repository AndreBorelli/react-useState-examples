// In this project we use the useState, assigning an object as the original value to the person. We create the changeMessage function that accesses the original 
// values ​​of person through a Spread Operator, and changes the value of the "message" of this object and calls it in the onClick event of the button. Commented 
// in the code, another way of doing the same thing, where instead of assigning a single useState an object, we assign several useStates, each one containing a 
// different value that complete each other.


import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' });
    // setMessage('hello world')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

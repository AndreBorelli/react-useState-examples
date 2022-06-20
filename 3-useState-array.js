// in this project we import the useState directly in the code (React.useState), we import the API {data} 
// and assign to the original state, the array provided by the API and through the map function, we dynamically
// list the value {name}, assigning in the parent div a key as the id of that name. We create a button that clears
// the list, assigning setPeople an empty array, consequently clearing its values, and another button that clears
// the given item, creating a new variable that receives all items, except the item with id equal to that button,
// thus clearing just that item

import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;

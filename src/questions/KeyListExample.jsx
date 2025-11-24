//making a list of fruit with id so they can easily remove and uniquely identify also more fruits can be  added 
import React, { useState } from 'react';
//fruits: array of fruit objects (state).
//setFruits: function to update the fruit list.
const KeyListExample = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: '🍎 Apple' },
    { id: 2, name: '🍌 Banana' },
    { id: 3, name: '🍇 Grape' },
  ]);
//newFruit: stores what user types in the input box.
//setNewFruit: updates that value.
  const [newFruit, setNewFruit] = useState('');

  // Add a new fruit with a unique ID
  const addFruit = () => {
    if (newFruit.trim() === '') return;//Prevents adding blank values.
//creating id for new fruit. 0 refers that if list is empty so maxid will be 0..
//all ids will add then +1 to get new unique id
    const newId = Math.max(...fruits.map(f => f.id), 0) + 1;//Finds the highest id[sum of all id] in the current list and adds 1 to create a unique new ID.
    setFruits([...fruits, { id: newId, name: newFruit }]);//Adds a new fruit object to the end of the fruits array using the spread operator (...fruits).
    setNewFruit('');//Clears the input box after adding.
  };

  // Remove a fruit from the fruits array based on its ID
  const removeFruit = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));//It keeps the fruit only if its id is not equal to the id we want to remove.
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2"> Keys in Lists</h2>
      <p className="mb-2">Dynamic list rendering with proper keys, and add/remove functionality:</p>

      {/* Add New Fruit through input box*/}
      <div className="flex mb-4">
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter fruit name (e.g., 🍉 Watermelon)"
          className="border p-2 flex-grow rounded-l"
        />
        <button
          onClick={addFruit}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/*this part is showing list of fruits we are seeing in ui.
       Fruit List with id .list-disc: shows bullets,pl-6: padding left  
       fruit here is just a variable that is pointing to id and name.
       dynamic list rendering */}
      
      <ul className="list-disc pl-6">
        {fruits.map((fruit) => (//mapping over fruits array.
          <li key={fruit.id} className="mb-2 flex justify-between items-center">{/*key is used to make id unique.*/ }
            <span>{fruit.name}</span>{/*Shows the name of the fruit.*/}
            <button
              onClick={() => removeFruit(fruit.id)}
              className="ml-4 text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default KeyListExample;
//If you change key={fruit.id} to key={index}, you may start seeing weird behavior like:
//Removing the wrong fruit.
//Reordering bugs.
//React misidentifying which item changed.
import React, { useState } from "react";
//made a child component
//({ count, increment,decrement }) is called props destructing. 
//Child expects three props: count (a number) and increment (a function),decrement from parent.
//Child: Receives and updates the count via props.
function Child({ count, increment ,decrement}) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg">Child Component</h2>
      <p className="text-xl">Count from Parent: {count}</p>{/*same line in both parent and child */}
      <div className="space-x-4"></div>
      <button 
        onClick={increment} //increment function is from parent
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment Count
      </button> 
       <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
    </div> 

  );
}
//parent component
export default function PropsLiftingExample() {
  const [count, setCount] = useState(0);//useState: Handles count state in the parent.
//0 is the current value of count
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Props & Lifting State Up</h1>
      <p className="mb-4">Parent Count: {count}</p>
      <Child 
       count={count}  
       increment={handleIncrement} 
       decrement={handleDecrement}
       /> 
      {/*two props parent send to child is count,increment. This is lifting state up — the parent controls the state, and the child uses props to read and change it.*/}
    </div>
  );
}

import { useState } from 'react';

function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h2>Counter Example using useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseStateCounter;

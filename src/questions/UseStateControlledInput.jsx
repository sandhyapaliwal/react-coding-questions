import { useState } from 'react';

export default function UseStateControlledInput() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.trim() === '') return alert('Input cannot be empty');
    setSubmitted(input);
  };

  const handleClear = () => {
    setInput('');
    setSubmitted('');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-xl mb-4">Controlled Input</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Type something..."
      />
      <div className="flex gap-2 mb-4">
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        <button onClick={handleClear} className="bg-red-600 text-white px-4 py-2 rounded">Clear</button>
      </div>
      {submitted && <p className="text-lg">You typed: <strong>{submitted}</strong></p>}
    </div>
  );
}

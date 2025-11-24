import { useState, useEffect } from "react";
//array of objects
const cards = [
  { title: "Card 1", description: "This is card 1." },
  { title: "Card 2", description: "This is card 2." },
  { title: "Card 3", description: "This is card 3." },
  { title: "Card 4", description: "This is card 4." },
];

export default function FlexGridLayout() {
  //Initializes a boolean state
  //darkmode is a state
  const [darkMode, setDarkMode] = useState(false);
//setDarkMode is used to toggle dark mode on/off.
//useEffect runs whenever darkMode changes so anywhere in code where dark class is used it will convert that into black dark colour.
//dark is classname and darkMode is condition
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (//duration-300= transition time 300ms
    //dark:bg-gray-900 and  dark:text-white to applied when dark mode is on 
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-colors duration-300">
      {/*div is parent flex container and <h1> AND <BUTTON> is its two children */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Responsive Card Layout</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}//!darkMode flips the current value if vale is true its becomes false and viceversa
          className="bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 transition"//hover:bg-indigo-600 transition= when cursor go above button it will become dark blue
        >
          {/* text displayed inside the button */}
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
{/*making inside cards
 creates a responsive grid layout using Tailwind CSS utilities.
 A grid layout arranges child items into rows and columns, like a table
 index is used as a key  and it is just a variable name for the current item’s position in the array (0, 1, 2...)*/}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"//hover:shadow-xl creates a visual pop effect on hover.
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
{/*because we are inside map function and cards is an array not a single object whereas card is a single object will point to each title in cards array and same for description */}
            <p className="text-gray-700 dark:text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// questions/LineChartStock.jsx
import React, { useState } from 'react';
//useState lets the component manage dynamic data (in this case, the selected stock).
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
//Each stock has an array of objects with date and price
const stockData = {
  AAPL: [
    { date: 'Mon', price: 150 },
    { date: 'Tue', price: 155 },
    { date: 'Wed', price: 153 },
    { date: 'Thu', price: 158 },
    { date: 'Fri', price: 160 },
  ],
  MSFT: [
    { date: 'Mon', price: 280 },
    { date: 'Tue', price: 285 },
    { date: 'Wed', price: 290 },
    { date: 'Thu', price: 295 },
    { date: 'Fri', price: 300 },
  ],
  GOOG: [
    { date: 'Mon', price: 125 },
    { date: 'Tue', price: 130 },
    { date: 'Wed', price: 128 },
    { date: 'Thu', price: 132 },
    { date: 'Fri', price: 135 },
  ],
};
//selectedStock is state that holds the currently selected stock.Default is 'AAPL'.
const LineChartStock = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📈 Stock Price Chart</h2>

      {/* Dropdown to select stock */}
      <select
        className="mb-6 p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        value={selectedStock}
        onChange={(e) => setSelectedStock(e.target.value)}
      >
        {/*Object.keys(stockData) gives: ['AAPL', 'MSFT', 'GOOG'] 
        .map(...) loops through this array to create <option> tags dynamically*/}
        {Object.keys(stockData).map((stock) => (
          <option key={stock} value={stock}>{stock}</option>
        ))}
      </select>

      {/* Responsive Recharts Line Chart */}
      <ResponsiveContainer width="100%" height={300}>{/*Makes chart adapt to screen size (mobile-friendly). */}
        <LineChart data={stockData[selectedStock]}>
          <CartesianGrid strokeDasharray="3 3" />{/*Adds a dashed grid background */}
          <XAxis dataKey="date" />{/*Uses date as horizontal labels (Mon, Tue...) */}
          <YAxis domain={['auto', 'auto']} />{/*Auto-adjusts min and max values */}
          <Tooltip />{/*Shows a popup on hover (date + price ) ON LINE */}
{/*Draws the actual line of the chart and stroke="#8884d8" = line color and strokeWidth={2} makes line thicker */}
          <Line  
           type="monotone" 
            dataKey="price" 
             stroke="#8884d8" 
              strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 

export default LineChartStock;

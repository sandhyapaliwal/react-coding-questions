import { Routes, Route, Link } from 'react-router-dom';
import UseStateCounter from './questions/UseStateCounter';
import PropsLiftingExample from './questions/PropsLiftingExample';
import UseEffectTimer from './questions/UseEffectTimer';
import ConditionalRenderingExample from './questions/ConditionalRenderExample';
import KeyListExample from './questions/KeyListExample';
import GitHubUsers from './questions/GitHubUsers';
import './App.css';
import FlexGridLayout from './questions/FlexGridLayout';
import LineChartStock from './questions/LineChartStock';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">React Practice questions</h1>
      <nav className="space-x-4 mb-6">
        <Link to="/usestate-counter" className="text-blue-500 underline">useState Counter</Link><br></br>
         <Link to="/useeffect-timer" className="text-blue-500 underline">useEffect timer</Link><br></br>
         <Link to="/props-lifting" className="text-blue-500 underline block">Props & Lifting State Up</Link><br></br>
         <Link to="/conditional-rendering" className="text-blue-500 underline">Conditional Rendering</Link><br />
         <Link to="/q5" className="text-blue-500 hover:underline"> Keys in Lists</Link><br></br>
         <Link to="/github-users" className="text-blue-500 underline">GitHub Users API</Link><br />
         <Link to="/layout" className="text-blue-500 underline">flex-grid layout</Link><br></br>
         <Link to="/chart" className="text-blue-500 underline">Line Chart</Link><br />
      </nav>

      <Routes>
        <Route path="/usestate-counter" element={<UseStateCounter />} />
        <Route path="/useeffect-timer" element={<UseEffectTimer />} />
        <Route path="/props-lifting" element={<PropsLiftingExample />} />
        <Route path="/" element={<div>Select a component from above.</div>} />
        <Route path="/conditional-rendering" element={<ConditionalRenderingExample />} />
        <Route path="/q5" element={<KeyListExample />} />
         <Route path="/github-users" element={<GitHubUsers />} />
         <Route path="/layout" element={<FlexGridLayout />} />
         <Route path="/chart" element={<LineChartStock />} />
      </Routes>
    </div>
  );
}

export default App;

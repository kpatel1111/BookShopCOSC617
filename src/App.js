import './App.css';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='App'>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Components/Reviews" element={<Reviews />} />
        </Routes>
      </div>
  );
}

export default App;
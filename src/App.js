import './App.css';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Components/Reviews" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
const [user, setUser]=useState("");
useEffect(()=>{
  axios.get("http://localhost:3001/login")
  .then(response=>setUser(response.data.data));
}, []);
  return (
    <div className="App">
     <h1>{user}</h1>
    </div>
  );
}

export default App;

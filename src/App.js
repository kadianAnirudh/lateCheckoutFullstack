import logo from './logo.svg';
import './App.css';
import Frontend from './components/frontend'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Create from './components/create';

function App() {
  return (
<div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Frontend/>}/>
<Route path="/create" element={<Create/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

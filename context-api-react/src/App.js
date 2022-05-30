import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home'
import History from './pages/History'
import Cat from './pages/Cat'

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

// 2 - navegação entre páginas
import Navbar from './pages/Navbar/Navbar';
import Paises from './pages/Paises/Paises';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paises/:id" element={<Paises />} />
          {/* 6 - nested routes */}
          <Route path="/paises/:id/info" element={<Info />} />
          {/* 7 - not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

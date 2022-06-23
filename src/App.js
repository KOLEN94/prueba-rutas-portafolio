import logo from './logo.svg';
import './App.css';
import { Routes, Route  } from "react-router-dom";
import Home from './Pagina/Home';
import Navbar from './Componentes/NavBar/NavBar';
function App() {
  return (
      <Routes>
        
        <Route path="/"  element={<Home />}/>
      </Routes>
  );
}

export default App;

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { Routes, Route, Link } from "react-router-dom";
import Catalogo from "./pages/Catalogo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/catalogo' element={<Catalogo/>} />
    </Routes>
    
  );
}

export default App;

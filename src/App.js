import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    
  );
}

export default App;

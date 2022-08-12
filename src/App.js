import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Canteiro from "./pages/Canteiro";
import { Routes, Route} from "react-router-dom";
import Catalogo from "./pages/Catalogo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/catalogo' element={<Catalogo/>} />
      <Route path='/canteiro' element={<Canteiro/>} />
    </Routes>
    
  );
}

export default App;

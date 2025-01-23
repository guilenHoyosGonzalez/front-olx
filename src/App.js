import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListarComerciantes from "./comerciantes/ListarComerciantes";
import AgregarComerciante from "./comerciantes/AgregarComerciante";
import Login from "./login/Login";
import Navegacion from "./plantilla/Navegacion";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListarComerciantes />} />
          <Route exact path="/inicio" element={<Login />} />
          <Route exact path="/agregrar" element={<AgregarComerciante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

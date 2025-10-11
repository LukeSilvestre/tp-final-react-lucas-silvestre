import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import HomePage from "./pages/HomePage";
import PokemonListPage from "./pages/PokemonListPage";

import "./styles/App.css";
import FavoritosPage from "./components/Favoritos";
import CarritoPage from "./components/CarritoPage";
import PokeDetalle from "./components/PokeDetalle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lista" element={<PokemonListPage />} />
        <Route path="/lista/:id" element={<PokeDetalle />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;

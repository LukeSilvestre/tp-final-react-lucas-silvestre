import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import HomePage from "./pages/HomePage";
import PokemonListPage from "./pages/PokemonListPage";

import "./styles/App.css";
import FavoritosPage from "./components/Favoritos";

// @context: Estamos construyendo una Pokédex con 3 páginas (Home, Listado, Detalle).
// HomePage ya está creada. Ahora necesito las rutas en App.jsx
// Usamos Bootstrap para Navbar, sin custom hooks, explicar cada paso
// @ref: Diagrama Pokedex.excalidraw en RepoLS
// Seguir estructura: Navbar reutilizable, 3 páginas, estado global para favoritos/carrito
// @decisions:
// - Bootstrap Navbar componente reutilizable
// - Página /carrito aparte
// - Favoritos como "deseados" con filtro
// - Search en listado
// - Sin custom hooks, explicaciones detalladas

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lista" element={<PokemonListPage />} />
        {/* <Route path="/pokemon/:id" element={<PokemonDetailPage />} /> */}
        <Route path="/favoritos" element={<FavoritosPage />} />
      </Routes>
    </Router>
  );
}

export default App;

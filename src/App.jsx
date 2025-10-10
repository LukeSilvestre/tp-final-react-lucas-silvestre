import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import HomePage from "./pages/HomePage";
import PokemonListPage from "./pages/PokemonListPage";

import "./styles/App.css";
import FavoritosPage from "./components/Favoritos";
import CarritoPage from "./components/CarritoPage";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonListPage />} />
        {/* <Route path="/pokemon/:id" element={<PokemonDetailPage />} /> */}
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

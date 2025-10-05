import { Link } from "react-router-dom";

/* import iconoAcceso from "../assets/acceso.png"; */

function HomePage() {
  return (
    <div className="home-page">
      <h2 id="hp-titulo">Comercio de Pokemones</h2>
      <p id="hp-parrafo">¡Tu sitio de compras de Pokemons Cards!</p>
      <br />
      <Link to={"/PokemonListPage"} className="btn btn-primary btn-lg">
        <i className="bi bi-grid me-2"> Entrar </i>
      </Link>
    </div>
  );
}

export default HomePage;

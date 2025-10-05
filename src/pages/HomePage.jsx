import { Link } from "react-router-dom";

/* import iconoAcceso from "../assets/acceso.png"; */

function HomePage() {
  return (
    <div className="home-page">
      <h2 id="hp-titulo">Comercio de Pokemones</h2>
      <p id="hp-parrafo">Explorá el mundo Pokémon desde la mirada comercial</p>
      <br />
      <Link to={"/ListaPokes"} className="btn btn-primary btn-lg">
        <i className="bi bi-grid me-2"> Entrar </i>
      </Link>
    </div>
  );
}

export default HomePage;

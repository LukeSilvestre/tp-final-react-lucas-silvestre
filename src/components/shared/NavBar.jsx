import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { favoritos, cart, cartTotal } = useSelector((state) => state.pokemon);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(135deg, #e3350d 0%, #ffcb05 100%)",
      }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-shop me-2"></i>
          Comercio Pokémon
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            <i className="bi bi-house me-1"></i>
            Inicio
          </Link>
          <Link className="nav-link" to="/pokemons">
            <i className="bi bi-grid me-1"></i>
            Pokémons
          </Link>
          <Link className="nav-link" to="/favoritos">
            <i className="bi bi-heart me-1"></i>
            Favoritos
            {favoritos.length > 0 && (
              <span className="badge bg-danger ms-1">
                {favoritos.length}
              </span> /* ---> Con esto miro el acumulado de favs */
            )}
          </Link>
          <Link className="nav-link" to="/carrito">
            <i className="bi bi-cart me-1"></i>
            Carrito{" "}
            {cart.length > 0 && (
              <span className="badge bg-secondary ms-1">
                {cart.length} - ${cartTotal}
              </span>
            )}
            {cart.length === 0 && (
              <span className="badge bg-secondary ms-1">0</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

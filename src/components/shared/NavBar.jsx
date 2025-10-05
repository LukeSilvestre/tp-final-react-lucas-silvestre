function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(135deg, #e3350d 0%, #ffcb05 100%)",
      }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="bi bi-shop me-2"></i>
          Comercio Pokémon
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="/">
            <i className="bi bi-house me-1"></i>
            Inicio
          </a>
          <a className="nav-link" href="/pokemons">
            <i className="bi bi-grid me-1"></i>
            Pokémons
          </a>
          <a className="nav-link" href="/carrito">
            <i className="bi bi-cart me-1"></i>
            Carrito <span className="badge bg-secondary">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorito, agregarAlCarrito } from "../store/slices/pokemonSlice";

function PokemonCard({ pokemon }) {
  const precio = Math.floor(Math.random() * 100) + 50; // Precio entre 50 y 150

  const dispatch = useDispatch();
  const { favoritos } = useSelector((state) => state.pokemon);

  // Verificar si este Pokémon es favorito
  const esFavorito = favoritos.some(
    (favorito) => favorito.name === pokemon.name
  );

  //manejador de favoritos
  const handleFavorito = () => {
    dispatch(toggleFavorito(pokemon));
  };

  //manejador del carrito
  const handleAgregarAlCarrito = () => {
    console.log(
      "🎯 CLICK - Agregando al carrito:",
      pokemon.name,
      "Precio:",
      precio
    );
    dispatch(agregarAlCarrito({ pokemon, precio }));
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize">{pokemon.name}</h5>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon.url.split("/")[6]
            }.svg`}
            alt={pokemon.name}
            className="img-fluid"
            style={{ width: "96px", height: "96px" }}
          />

          <p className="fw-bold text-success">${precio}</p>
          <div className="card-footer bg-transparent border-0 mt-3">
            {/* ❤️ Corazón Favoritos */}
            <div className="d-flex justify-content-between align-items-center">
              <button
                className={`btn btn-sm ${
                  esFavorito ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleFavorito}
              >
                {esFavorito ? "❤️" : "🤍"}
              </button>
              {/* <button className="btn btn-outline-danger btn-sm">♥</button> */}
              {/* 🛒 Carrito + Precio */}
              <button
                className="btn btn-outline-success btn-sm"
                onClick={handleAgregarAlCarrito}
              >
                🛒
              </button>
              {/* ✅ Checkbox Comparación */}
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label small">Comparar</label>
              </div>
            </div>
          </div>
          {/* <p className="text-muted small mt-2">ID: {index + 1}</p> */}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

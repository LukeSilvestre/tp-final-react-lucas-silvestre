import React from "react";

function PokemonCard({ pokemon, index }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize">{pokemon.name}</h5>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={pokemon.name}
            className="img-fluid"
            style={{ width: "96px", height: "96px" }}
          />
          <div className="card-footer">
            {/* ❤️ Corazón Favoritos */}
            <button className="btn btn-outline-danger btn-sm">♥</button>
            {/* 🛒 Carrito + Precio */}
            <button className="btn btn-outline-success btn-sm">
              🛒 ${/* {precio} */}
            </button>
            {/* ✅ Checkbox Comparación */}
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label small">Comparar</label>
            </div>
          </div>
          {/* <p className="text-muted small mt-2">ID: {index + 1}</p> */}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

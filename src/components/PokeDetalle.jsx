import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerPokes } from "../services/pokeAPI";

function PokeDetalle() {
  /* le mando el parámetro id a useParams */
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  /* const [error, setError] = useState(null); */

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await obtenerPokes(null, null, id);
        /* Data trae toda la info del pokemon, como sprites. */
        setPokemon(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    /* llamo a la función fetchPokemon */
    fetchPokemon();
  }, [id]);
  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando Pokémon...</p>
        </div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">Pokémon no encontrado</div>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          {/* COLUMNA IZQUIERDA - IMAGEN */}
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="img-fluid"
                style={{ width: "170px" }}
              />
              <h2 className="text-capitalize">{pokemon.name}</h2>
            </div>
            {/* COLUMNA DERECHA - INFO */}
            <div className="col-md-6 ms-auto">
              <div className="row mb-2">
                <div className="col-6">
                  <p>
                    <strong>Altura:</strong> {pokemon.height / 10} m
                  </p>
                  <p>
                    <strong>Peso:</strong> {pokemon.weight / 10} kg
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <h5>Tipos</h5>
                <div className="mb-3">
                  {pokemon.types.map((tipoInfo, index) => (
                    <span key={index} className="badge bg-primary me-2">
                      {tipoInfo.type.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <h5>Habilidades</h5>
                <div className="mb-3">
                  {pokemon.abilities.map((habilidadesInfo, index) => (
                    <span key={index} className="badge bg-secondary me-2">
                      {habilidadesInfo.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* NUEVO: ESTADÍSTICAS */}
            <div className="mt-1">
              <h5>Estadísticas de Combate</h5>
              <div className="row">
                {pokemon.stats.map((estadisticasInfo, index) => (
                  <div key={index} className="col-6 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-capitalize small">
                        {estadisticasInfo.stat.name.replace("-", " ")}:
                      </span>
                      <span className="fw-bold">
                        {estadisticasInfo.base_stat}
                      </span>
                    </div>
                    <div className="progress" style={{ height: "4px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{
                          width: `${(estadisticasInfo.base_stat / 255) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <Link to="/lista" className="btn btn-primary text-center">
                Volver al listado
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeDetalle;

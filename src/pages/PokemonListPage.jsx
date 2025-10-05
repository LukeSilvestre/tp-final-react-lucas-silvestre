import { useState, useEffect } from "react";
import { obtenerPokes } from "../services/pokeAPI";

import PokemonCard from "../components/PokemonCard";

function PokemonListPage() {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true); // ← Empezamos a cargar

      //Pongo un TimeOut porque carga muy rápido y no se ve el Spinner.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const data = await obtenerPokes(20);
      setPokemones(data.results);
      setLoading(false); // ← Terminamos de cargar
    };

    loadPokemons();
  }, []);

  //Implementación del spinner traído desde Bootstrap
  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Buscando pokémons...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h2 className="pklistpg-titulo">Listado de Pokémones</h2>
      <br />
      <p className="pklistpg-parrafo">Navegá por el catálogo disponible</p>
      <div className="row">
        {/* Armé un mapeo para que cada pokemon caiga en una card de Bootstrap. */}
        {pokemones.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
      </div>
    </div>
  );
}

export default PokemonListPage;

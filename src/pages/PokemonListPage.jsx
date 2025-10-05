import { useState, useEffect } from "react";
import { obtenerPokes } from "../services/pokeAPI";

function ListaPokes() {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true); // ← Empezamos a cargar
      const data = await obtenerPokes(20);
      setPokemones(data.results);
      setLoading(false); // ← Terminamos de cargar
    };

    loadPokemons();
  }, []);

  //Implementación del spinner traído desde Bootstrap
  if (loading === true) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          {/* SPINNER DE BOOTSTRAP */}
          <div className="spinner-border text-primary" role="status">
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
      {/* Aquí después va el grid de Pokémon */}
      <div className="alert alert-info">
        ⏳ Próximamente: Grid de Pokémon aquí...
      </div>
    </div>
  );
}

export default ListaPokes;

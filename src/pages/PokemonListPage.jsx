import { useEffect } from "react";
import { obtenerPokes } from "../services/pokeAPI";

import PokemonCard from "../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setPokemones,
  setLoading,
  setInitialLoad,
  cargarMasPokemones,
} from "../store/slices/pokemonSlice";

function PokemonListPage() {
  /* const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
 */

  //Mando "pokemones, loading, initialLoad, paginacion" a ser recogidos del store a traves del "reducer"
  //llamado 'pokemon'
  const { pokemones, loading, initialLoad, paginacion } = useSelector(
    (state) => state.pokemon
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const loadPokemons = async () => {
      if (initialLoad) {
        dispatch(setLoading(true)); // Acción de cargar sólo si es la primera vez.
        /* console.log("Cargando Pokémon por primera vez..."); */
        //Pongo un TimeOut porque carga muy rápido y no se ve el Spinner.
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await obtenerPokes(20);

        //Ejecuto acciones del slice "pokemon"
        dispatch(setPokemones(data.results));
        dispatch(setLoading(false)); // Pongo en false Loading para que no vuelva a cargar
        dispatch(setInitialLoad(false));
      } else {
        console.log("Los Pokemones YA ESTAN cargados, no volver a cargar");
      }
    };
    loadPokemons();
  }, [dispatch, initialLoad]);

  const handleCargarMas = async () => {
    dispatch(setLoading(true));

    try {
      /* Llamo a la función obtenerPokes de la PokeAPI */
      const data = await obtenerPokes(
        paginacion.limit,
        paginacion.offset + paginacion.limit
      );
      dispatch(cargarMasPokemones(data.results));
    } catch (error) {
      console.error("Error cargando más Pokémon:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  //Implementación del spinner traído desde Bootstrap
  if (loading && initialLoad) {
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
        {/* Armé un mapeo para que cada pokemon caiga en una card de Bootstrap. Obtiene los datos del store */}
        {pokemones.map((pokemon, index) => (
          <PokemonCard key={`${pokemon.name}-${index}`} pokemon={pokemon} />
        ))}
      </div>

      {/* Botón para cargar mas pokes */}
      <div className="text-center mt-4">
        {paginacion.hayMas && (
          /* disable es para que cuando esté cagando la primera vez, no aparezca */
          <button
            className="btn btn-primary"
            onClick={handleCargarMas}
            disabled={loading && !initialLoad}
          >
            {loading && initialLoad ? (
              <>
                <div className="spinner-border spinner-border-sm me-2"></div>
                Cargando...
              </>
            ) : (
              "Cargar más Pokémon"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default PokemonListPage;

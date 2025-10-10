import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

function FavoritosPage() {
  const { favoritos } = useSelector((state) => state.pokemon);
  /* Sección favoritos --- si hay algún poke en el array favoritos, 
  se renderiza esta parte del código. Si no, queda en blanco. */
  if (favoritos.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <h2>❤️ Tu lista de Favoritos</h2>
          <div className="alert alert-info mt-4">
            <i className="bi bi-bag-heart me-2"></i>
            <strong>!Aún no tenes favoritos elegilos de la lista!</strong>
            <br />
            <small>¡Animate y elegí los pokemones que más deseas tener!</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {favoritos.length > 0 && (
        <>
          <div className="mt-5">
            <h3 className="text-center">
              <i className="bi bi-heart-fill text-danger me-2"></i>
              Sección de Favoritos
            </h3>
            <p className="text-center">
              Tenes seleccionados {favoritos.length} Pokémon en favoritos
            </p>
            <div className="row justify-content-center">
              {favoritos.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FavoritosPage;

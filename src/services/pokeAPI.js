const POKEAPIBASE = "https://pokeapi.co/api/v2";

export async function obtenerPokes(limit = 20) {
  try {
    const resp = await fetch(`${POKEAPIBASE}/pokemon?limit=${limit}`);
    //Hasta que no se genera el json, no me entrega nada.
    const datos = await resp.json();
    return datos;
  } catch (error) {
    //manejo de error ante algún problema en el consumo de la API
    console.error("Error en el fetch de Pokemones", error);
    //Si falla el fetch, devuelve el array results que viene de la API, vacío.
    return { results: [] };
  }
}

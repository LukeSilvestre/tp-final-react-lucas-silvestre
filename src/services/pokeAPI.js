const POKEAPIBASE = "https://pokeapi.co/api/v2";

export async function obtenerPokes(limit = 20, offset = 0) {
  /* Valores por defecto: 20 pal limite y 0 pal offset */
  try {
    const resp = await fetch(
      `${POKEAPIBASE}/pokemon?limit=${limit}&offset=${offset}`
    );
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

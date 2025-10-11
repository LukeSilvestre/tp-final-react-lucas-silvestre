/* const POKEAPIBASE = "https://pokeapi.co/api/v2"; */

export async function obtenerPokes(limit = 20, offset = 0, id = null) {
  /* Valores por defecto: 20 pal limite y 0 pal offset */
  try {
    let url;

    if (id) {
      //para los detalles necesito la url con id
      url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    } else {
      //para listar, necesito la url pero con limit y offset, así que la pokeApi tiene ambas maneras.
      url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    }

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
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

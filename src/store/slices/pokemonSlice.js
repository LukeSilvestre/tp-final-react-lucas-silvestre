import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Los datos de inicialización de los POKES
  pokemones: [],
  loading: false,
  initialLoad: true,

  //Favoritos
  favoritos: [],

  //El carrito de compras
  cart: [],
  //cartTotal: 0,

  //Comparación de los POKES
  compara: [],
};

//Creo la porción del estado global que necesito para saber si vuelvo a cargar o no los pokemones
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemones: (state, action) => {
      /* console.log(
        "🔍 SLICE - setPokemones ejecutándose, payload:",
        action.payload
      ); */
      state.pokemones = action.payload;
      /*       console.log("🔍 SLICE - pokemones después de set:", state.pokemones); */
    },
    setLoading: (state, action) => {
      /* console.log(
        "🔍 SLICE - setLoading ejecutándose, payload:",
        action.payload
      ); */
      state.loading = action.payload;
    },
    setInitialLoad: (state, action) => {
      /* console.log(
        "🔍 SLICE - setInitialLoad ejecutándose, payload:",
        action.payload
      ); */
      state.initialLoad = action.payload;
    },
    //Boton activar - desactivar el estado del corazon.
    toggleFavorito: (state, action) => {
      const pokemon = action.payload;
      const existe = state.favoritos.find(
        (favorito) => favorito.name === pokemon.name
      );
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (favorito) => favorito.name !== pokemon.name
        );
      } else {
        state.favoritos.push(pokemon);
      }
    },
  },
});

export const { setPokemones, setLoading, setInitialLoad, toggleFavorito } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

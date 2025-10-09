import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import { cargarEstado, guardarEstado } from "../utils/localStorage";

// Cargar estado desde localStorage (si existe)
const estadoPrecargado = cargarEstado();

//Creo el store dentro del browser
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  //Esta línea sirve para que el estado se mantenga entre navegaciones,
  //tanto para cuando está todo vaccío y en cero, como para cuando está cargado y tiene
  //que llevar los datos entre la navegación.
  preloadedState: estadoPrecargado,
});

//
store.subscribe(() => {
  guardarEstado(store.getState());
});

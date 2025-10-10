import { createSlice } from "@reduxjs/toolkit";

//Estado global inicial
const initialState = {
  //Los datos de inicialización de los estados de los POKES
  pokemones: [],
  loading: false,
  initialLoad: true,

  //Favoritos: Estado está vacío.
  favoritos: [],

  //El carrito de compras es para acumular
  cart: [],
  cartTotal: 0,

  //Comparación de los POKES
  compara: [],

  //Estado de Paginación para la acción de traer mas pokemones
  paginacion: {
    offset: 0,
    limit: 20,
    hayMas: true,
  },
};

//Creo la porción del estado global que necesito para saber si vuelvo a cargar o no los pokemones
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemones: (state, action) => {
      state.pokemones = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setInitialLoad: (state, action) => {
      state.initialLoad = action.payload;
    },
    //FAVORITOS: Boton activar - desactivar el estado del corazon.
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
    //CARRITO: reducers para trabajar con el carrito
    agregarAlCarrito: (state, action) => {
      const { pokemon, precio } = action.payload;
      //busco dentro del array 'cart' si hay algún elemento con el nombre del pokemon. Si existe
      //acumulo y si no, pusheo el la primera vez.
      const itemExiste = state.cart.find(
        (item) => item.pokemon.name === pokemon.name
      );
      console.log("Item existe?:", itemExiste);

      if (itemExiste) {
        itemExiste.cantidad += 1;
      } else {
        console.log("Agregando nuevo item...");
        state.cart.push({
          pokemon,
          precio,
          cantidad: 1,
        });
      }
      //para actualizar el carrito automáticamente uso el método 'reduce' de los arrays
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
      );
    },
    quitarDelCarrito: (state, action) => {
      const { pokemon } = action.payload;
      //el estado del carrito se actualiza mediante un filtro que deje sólo el/los
      //pokemones que quiero matener en el nuevo array.
      state.cart = state.cart.filter(
        (item) => item.pokemon.name !== pokemon.name
      );
    },
    actualizarCantidadCarrito: (state, action) => {
      const { pokemon, nuevaCantidad } = action.payload;
      const itemEncontrado = state.cart.find(
        (item) => item.pokemon.name === pokemon.name
      );

      if (itemEncontrado && nuevaCantidad > 0) {
        itemEncontrado.cantidad = nuevaCantidad;
        //actualizo el carrito
        state.cartTotal = state.cart.reduce(
          (total, cartItem) => total + cartItem.precio * cartItem.cantidad,
          0
        );
      }
    },
    //Por último limpio el carrito, si quiero.
    limpiaCarrito: (state) => {
      state.cart = [];
      state.cartTotal = 0;
    },

    //Reducer para modificar el estado de la carga de mas pokemones
    cargarMasPokemones: (state, action) => {
      const nuevosPokemones = action.payload;

      if (nuevosPokemones.length === 0) {
        state.paginacion.hayMas = false;
      }
      //Agrego/mergeo los nuevos pokes al estado existente que contiene los primeros 20 pokes, con spread operator
      state.pokemones = [...state.pokemones, ...nuevosPokemones];

      //Actualizo el offset para la próxima carga, si no, no va a pasar de los primeros 20
      state.paginacion.offset =
        state.paginacion.offset + state.paginacion.limit;
    },
    setHayMas: (state, action) => {
      state.paginacion.hayMas = action.payload;
    },
  },
});

export const {
  setPokemones,
  setLoading,
  setInitialLoad,
  toggleFavorito,
  agregarAlCarrito,
  quitarDelCarrito,
  actualizarCantidadCarrito,
  limpiaCarrito,
  cargarMasPokemones,
  setHayMas,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

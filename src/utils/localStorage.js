export const cargarEstado = () => {
  try {
    const estadoGuardado = localStorage.getItem("pokemonState");
    if (estadoGuardado === null) {
      return undefined;
    }
    let parseoEstGuardado = JSON.parse(estadoGuardado);
    return parseoEstGuardado;
  } catch (error) {
    console.log("Error al cargar el Estado (localStorage.js): ", error);
    return undefined;
  }
};

export const guardarEstado = (estado) => {
  try {
    const estadoSerializado = JSON.stringify(estado);
    localStorage.setItem("pokemonState", estadoSerializado);
  } catch (error) {
    console.log("Error al guardar el estado (localStorage.js): ", error);
  }
};

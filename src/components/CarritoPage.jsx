import { useDispatch, useSelector } from "react-redux";
import {
  quitarDelCarrito,
  actualizarCantidadCarrito,
  limpiaCarrito,
} from "../store/slices/pokemonSlice";

/* Genero un componente para poder reutilizarlo en la medida que vaya agregando pokemones al carrito */

function CarritoPage() {
  /* Dispatcher para enviar a cada Slice con su acción  */
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => state.pokemon);

  const handleQuitarItem = (pokemon) => {
    dispatch(quitarDelCarrito({ pokemon }));
  };

  const handleActualizarCantidad = (pokemon, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      handleQuitarItem(pokemon);
    } else {
      dispatch(actualizarCantidadCarrito({ pokemon, nuevaCantidad }));
    }
  };

  const handleLimpiarCarrito = () => {
    dispatch(limpiaCarrito());
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <h1>🛒 Tu Carrito</h1>
          <div className="alert alert-info mt-4">
            <i className="bi bi-cart-x me-2"></i>
            <strong>Tu carrito está vacío</strong>
            <br />
            <small>¡Animate y elegí los pokemones que queres comprar!</small>
          </div>
        </div>
      </div>
    );
  }
  //Uso de bootstrap
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>🛒 Tu Carrito</h1>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleLimpiarCarrito}
        >
          <i className="bi bi-trash me-1"></i>
          Limpiar Carrito
        </button>
      </div>

      <div className="row">
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item.pokemon.name} className="card mb-3">
              <div className="card-body bg-light">
                <div className="row align-items-center">
                  <div className="col-12 col-md-2 text-center text-md-start mb-2 mb-md-0">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                        item.pokemon.url.split("/")[6]
                      }.svg`}
                      alt={item.pokemon.name}
                      className="img-fluid"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>
                  <div className="col-12 col-md-4 text-center text-md-start mb-2 mb-md-0">
                    <h5 className="card-title text-capitalize">
                      {item.pokemon.name}
                    </h5>
                    <p className="text-muted mb-0">
                      Precio unitario: ${item.precio}
                    </p>
                  </div>

                  <div className="col-12 col-md-3 mb-2 mb-md-0">
                    <div className="d-flex justify-content-center">
                      <div
                        className="input-group input-group-sm"
                        style={{ maxWidth: "130px" }}
                      >
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleActualizarCantidad(
                              item.pokemon,
                              item.cantidad - 1
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          value={item.cantidad}
                          onChange={(e) =>
                            handleActualizarCantidad(
                              item.pokemon,
                              parseInt(e.target.value)
                            )
                          }
                          min="1"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleActualizarCantidad(
                              item.pokemon,
                              item.cantidad + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/*Precio */}
                  <div className="col-md-2 text-center">
                    <h6 className="text-success">
                      ${item.precio * item.cantidad}
                    </h6>
                  </div>

                  {/* Tachito de la basura por unidad */}
                  <div className="col-12 col-md-1 text-center">
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleQuitarItem(item.pokemon)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* El pedido hecho */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Resumen del Pedido</h5>
            </div>
            <div className="card-body bg-light">
              <div className="d-flex justify-content-between mb-2">
                <span>Items:</span>
                <span>
                  {/* La variable "total" se genera en el momento porque es el acumulador */}
                  {cart.reduce((total, item) => total + item.cantidad, 0)}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${cartTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong className="text-success">${cartTotal}</strong>
              </div>
              <button className="btn btn-success w-100">
                <i className="bi bi-credit-card me-2"></i>
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarritoPage;

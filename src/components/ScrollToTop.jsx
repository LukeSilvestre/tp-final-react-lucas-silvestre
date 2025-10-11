import { useState, useEffect } from "react";

function ScrollToTop() {
  const [visibilidad, setVisibilidad] = useState(false);

  //uso el useEffect para ejecutar la aparición del botón "Ir Arriba" + incorporacion del listener.
  useEffect(() => {
    const toggleVisibilidad = () => {
      //window.pageYOffset son la cantidad de px que fuí para abajo
      if (window.pageYOffset > 300) {
        setVisibilidad(true);
      } else {
        setVisibilidad(false);
      }
    };

    //agrego el listener al montarse el componente
    window.addEventListener("scroll", toggleVisibilidad);
    //borro el listener al desmontar el componente - sugerencia de Gemini
    return () => {
      window.removeEventListener("scroll", toggleVisibilidad);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visibilidad && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "20%",
            width: "50px",
            height: "50px",
          }}
          title="Volver arriba"
        >
          ↑
        </button>
      )}
    </>
  );
}
export default ScrollToTop;

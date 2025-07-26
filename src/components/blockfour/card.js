// Agregar event listener cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const contenedor = document.querySelector("#AbrirContenedor");
  let cartaAbierta = false;

  // Función para alternar el estado de la carta
  function alternarCarta() {
    if (cartaAbierta) {
      cerrarCarta();
    } else {
      abrirCarta();
    }
  }

  // Abrir Carta
  function abrirCarta() {
    const ElementoSuperior = document.querySelector(".superior");
    if (ElementoSuperior) {
      ElementoSuperior.classList.add("abrir-superior");
    }

    const IconoCorazon = document.querySelector(".bx");
    if (IconoCorazon) {
      IconoCorazon.classList.add("bx-rotada");
    }

    setTimeout(() => {
      if (ElementoSuperior) {
        ElementoSuperior.style.zIndex = "-1";
      }
      const ElementoMensaje = document.querySelector(".mensaje");
      if (ElementoMensaje) {
        ElementoMensaje.classList.add("abrir-mensaje");
      }
    }, 600);

    cartaAbierta = true;
  }

  // Cerrar Carta
  function cerrarCarta() {
    const ElementoSuperior = document.querySelector(".superior");
    const ElementoMensaje = document.querySelector(".mensaje");
    
    if (ElementoMensaje) {
      ElementoMensaje.classList.add("guardar-mensaje");
    }

    setTimeout(() => {
      if (ElementoMensaje) {
        ElementoMensaje.classList.remove("abrir-mensaje", "guardar-mensaje");
      }
      if (ElementoSuperior) {
        ElementoSuperior.style.zIndex = "0";
        ElementoSuperior.classList.remove("abrir-superior");
      }

      const IconoCorazon = document.querySelector(".bx");
      if (IconoCorazon) {
        IconoCorazon.classList.remove("bx-rotada");
      }
    }, 600);

    cartaAbierta = false;
  }

  // Event listener para alternar la carta al hacer click
  if (contenedor) {
    contenedor.addEventListener("click", alternarCarta);
  }

  // Event listener para cerrar la carta cuando se hace click en ella
  const mensaje = document.querySelector(".mensaje");
  if (mensaje) {
    mensaje.addEventListener("click", function(e) {
      e.stopPropagation(); // Evitar que se propague al contenedor
      if (cartaAbierta) {
        cerrarCarta();
      }
    });
  }
}); 
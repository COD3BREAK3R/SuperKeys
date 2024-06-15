/*=============================================
=          MARK:Varibales Generales           =
=============================================*/

const popUpContenedor = document.querySelector(".popup");

const popUpError = document.querySelector(".error");
const aceptarError = document.getElementById("aceptarError");

const popUpRegistro = document.querySelector(".registro");
const aceptarRegistro = document.getElementById("aceptarRegistro");

let tipoPopUp;

/*============  End of Varibales Generales  =============*/

lanzarPopUp = (tipo, tituloError, mensajeError) => {
  popUpContenedor.style.display = "flex";

  if (tipo === "registro") {
    tipoPopUp = popUpRegistro;
    mostrarPopUp(tipoPopUp);
  } else {
    tipoPopUp = popUpError;
    mostrarPopUp(tipoPopUp);
    insertarErrorPopUp(tituloError, mensajeError);
  }
};

insertarErrorPopUp = (tituloError, mensajeError) => {
  let tituloPopUp = tipoPopUp.firstElementChild.nextElementSibling;
  let errorPopUp = tipoPopUp.firstElementChild.nextElementSibling.nextElementSibling;

  tituloPopUp.innerHTML = tituloError;
  errorPopUp.innerHTML = mensajeError;
};

/*=============================================
=        MARK:Mostrar/Ocultar Pop Up          =
=============================================*/

mostrarPopUp = (tipoPopUp) => {

  setTimeout(() => {
    tipoPopUp.classList.remove("ocultarPopUp");
  }, 10);

  setTimeout(() => {
    tipoPopUp.classList.remove("opacidadPopUp");
  }, 20);
};

/* Subsection
-------------------------------------------------- */

ocultarPopUp = () => {
  tipoPopUp.classList.add("opacidadPopUp");

  setTimeout(() => {
    tipoPopUp.classList.add("ocultarPopUp");
  }, 300);
  setTimeout(() => {
    popUpContenedor.style.display = "none";
  }, 300);
};

/*=============================================
=             MARK:Eventos Pop Up             =
=============================================*/

aceptarError.addEventListener("click", () => ocultarPopUp());
if (aceptarRegistro) {
  aceptarRegistro.addEventListener("click", () => ocultarPopUp("registro"));
}

popUpContenedor.style.display = "none";

/*============  End of Eventos Pop Up  =============*/

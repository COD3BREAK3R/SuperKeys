/*=============================================
=             MARK:Validar Formulario         =
=============================================*/

const descripcion = document.querySelector(".login__Formulario__Descripcion");
const descripcionError = document.querySelector(".login__Formulario__Error");
const parrafoError = document.querySelectorAll(
  ".login__Formulario__Error__Parrafo"
);
const botonFormulario = document.querySelector(".login__Formulario__Boton");
const inputsFormulario = document.querySelectorAll("input");

/* Subsection
-------------------------------------------------- */

let errorUsuario = false;
let errorContrasena = false;

let validarLongitudAlEscribir = false;
let errorLongitud = false;

let escritoEnUsuario = false;
let escritoEnContrasena = false;

validarEntrada = (input) => {
  let valorInput = input.value.trim();

  const patron = /^[a-zA-Z0-9\sñáéíóúÁÉÍÓÚ]+$/;

  if (!patron.test(valorInput) && valorInput !== "") {
    descripcionError.classList.remove("oculto");
    agregarError(input);
  } else {
    quitarError(input);
  }

  if (validarLongitudAlEscribir === true) {
    validarLongitudEscribiendo(valorInput, input);
  }
};

/* Subsection
-------------------------------------------------- */

agregarError = (input) => {
  let tipoInput = input.id;
  descripcion.classList.add("oculta");

  funcionAgregarError = () => {
    parrafoError[0].classList.remove("oculto");
    input.classList.add("error");
  };

  if (tipoInput === "inputUsuario") {
    if (errorUsuario === false) {
      funcionAgregarError();
      errorUsuario = true;
    }
  } else {
    if (errorContrasena === false) {
      funcionAgregarError();
      errorContrasena = true;
    }
  }
  estiloBotonFormulario();
};

/*Subsection
-------------------------------------------------- */

quitarError = (input) => {
  let tipoInput = input.id;

  if (tipoInput === "inputUsuario") {
    errorUsuario = false;
    input.classList.remove("error");

    if (errorContrasena === false) {
      parrafoError[0].classList.add("oculto");
    }
  } else {
    errorContrasena = false;
    input.classList.remove("error");

    if (errorUsuario === false) {
      parrafoError[0].classList.add("oculto");
    }
  }
  eliminarCartelError();
};

/* Subsection
-------------------------------------------------- */

eliminarCartelError = () => {
  if (
    errorUsuario === false &&
    errorContrasena === false &&
    errorLongitud === false
  ) {
    descripcion.classList.remove("oculta");
    descripcionError.classList.add("oculto");
    estiloBotonFormulario();
  }
};

/* Subsection
-------------------------------------------------- */

estiloBotonFormulario = () => {
  if (
    errorUsuario === false &&
    errorContrasena === false &&
    errorLongitud === false
  ) {
    botonFormulario.classList.remove("deshabilitado");
  } else {
    botonFormulario.classList.add("deshabilitado");
  }
};

/* Subsection
-------------------------------------------------- */

validarLongitud = () => {
  errorLongitud = false;

  inputsFormulario.forEach((element, i) => {
    if (element.value.trim().length < 3) {
      errorLongitud = true;
      validarLongitudAlEscribir = true;
    }

    if (element.value.length > 0) {
      if (i === 0) {
        escritoEnUsuario = true;
      } else {
        escritoEnContrasena = true;
      }
    }
  });
};

validarLongitudEscribiendo = (valorInput, input) => {
  let tipoInput = input.id;

  if (valorInput.length < 3) {
    if (tipoInput === "inputUsuario" && escritoEnUsuario === true) {
      agregarErrorLongitud(input);
    }
    if (tipoInput === "inputContrasena" && escritoEnContrasena === true) {
      agregarErrorLongitud(input);
    }
  } else {
    if (tipoInput === "inputUsuario" && escritoEnUsuario === true) {
      quitarErrorLongitud(input);
    }
    if (tipoInput === "inputContrasena" && escritoEnContrasena === true) {
      quitarErrorLongitud(input);
    }
  }
};

agregarErrorLongitud = (input) => {
  if (errorUsuario === false && errorContrasena === false) {
    botonFormulario.classList.add("deshabilitado");
    descripcionError.classList.remove("oculto");
    descripcion.classList.add("oculta");
  }
  parrafoError[1].classList.remove("oculto");
  input.classList.add("error");
};

quitarErrorLongitud = (input) => {
  validarLongitud();

  if (errorUsuario === false && errorContrasena === false) {
    if (errorLongitud === false) {
      descripcionError.classList.add("oculto");
      descripcion.classList.remove("oculta");
      botonFormulario.classList.remove("deshabilitado");
    }

    input.classList.remove("error");
  }
  if (errorLongitud === false) {
    parrafoError[1].classList.add("oculto");
  }
};

/* End of Subsection
-------------------------------------------------- */

inputUsuario.addEventListener("input", () => validarEntrada(inputUsuario));

inputContrasena.addEventListener("input", () =>
  validarEntrada(inputContrasena)
);

inputsFormulario.forEach((element) => {
  element.addEventListener("blur", () => validarLongitud());
});

/*============  End of Validar Formulario  =============*/

/**
 * Este código evalua los inputs usuario y contraseña al escribir buscando si el usuario introduce caracteres que no sean de letras o números. Además, luego de escribir y salir de un input evalua si la longitud es menor a 3 caracteres para luego evaluar en el input previamente escrito si el usuario cumple o no la condición de introducir mínimo 3 caracteres al escribir en el input con el error. Ya que los inputs comparten estilos de error y párrafos de error se evalúa si uno de ellos aún tiene error para no eliminar estilos necesarios para otro input con error y evitar agregar clases innecesarias que afecten el correcto funcionamiento de los estilos CSS de los inputs, por eso el código tiene tantas condicionales. Además se aplican estilos al botón de Acceder o Registrarse si alguno de los inputs tiene un error para indicarle al usuario que debe corregirlos antes y también se evita el evento clic para solo enviar los datos del formulario cuando estos estén correctos.
 *
 **/

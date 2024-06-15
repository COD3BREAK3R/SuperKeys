/*=============================================
=              MARK:Inputs Visible Movil      =
=============================================*/

let alturaViewport = window.innerHeight;

window.addEventListener("resize", () => {
  const nuevaAlturaViewport = window.innerHeight;

  if (nuevaAlturaViewport < alturaViewport) {
    window.scroll({
      left: 0,
      top: alturaViewport - nuevaAlturaViewport,
    });
  }
});

/*=============================================
= MARK:Quitar Border Radius Condicionalmente  =
=============================================*/

function chequearAlturayPadding() {
  /* Subsection
    -------------------------------------------------- */
  const elemento = document.querySelector(".login");
  const estilosElemento = window.getComputedStyle(elemento);
  const padre = elemento.parentNode;

  /* Subsection
    -------------------------------------------------- */
  const loginImagenContenedor = document.querySelector(
    ".login__Imagen__Contenedor"
  );
  const loginFormulario = document.querySelector(".login__Formulario");

  /* Subsection
    -------------------------------------------------- */
  const alturaElemento = elemento.offsetHeight;
  const alturaPadre = padre.clientHeight;

  /* Subsection
    -------------------------------------------------- */
  const paddingElemento = estilosElemento.getPropertyValue("padding-right");
  const tienePadding = paddingElemento !== "0px";

  // Compara las alturas para ver si el elemento ocupa el 100% de la altura de su contenedor
  const ocupaTodoAlto = alturaElemento === alturaPadre;

  /* Subsection
    -------------------------------------------------- */
  if (ocupaTodoAlto && !tienePadding) {
    loginImagenContenedor.classList.add("quitarBorderRadius");
    loginFormulario.classList.add("quitarBorderRadius");
  } else {
    loginImagenContenedor.classList.remove("quitarBorderRadius");
    loginFormulario.classList.remove("quitarBorderRadius");
  }
}

chequearAlturayPadding();
window.addEventListener("resize", chequearAlturayPadding);

/*=============================================
=              MARK:Boton Regístrate          =
=============================================*/

const btnCambioFormulario = document.querySelector(
  ".login__Formulario__Change"
);

/* Subsection
-------------------------------------------------- */

const inputUsuario = document.querySelector("#inputUsuario");
const inputContrasena = document.querySelector("#inputContrasena");

const tituloForm = document.querySelector(".login__Formulario__Titulo");
const tituloBtnForm = document.querySelector(".login__Formulario__Boton");

const formularioDescripcion = document.querySelector(
  ".login__Formulario__Descripcion"
);

/* Subsection
-------------------------------------------------- */

const tituloRegistroForm = `
  Registrarse
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
      />
    </svg>
  </span>
`;

const tituloLoginForm = `
  Iniciar Sesión
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
      />
    </svg>
  </span>
`;

const inputFormularioAcceder = `
  Acceder
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"
      />
    </svg>
  </span>
`;

const inputFormularioRegistro = `
  Crear Cuenta&nbsp;
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24">
      <path
        d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"
      />
    </svg>
  </span>
`;

const descripcionLoginForm = `
  Puede generar un máximo de 3 licencias para Windows y Office por usuario.
  Crédito a <a href="https://www.freepik.es/vector-gratis/pagina-inicio-sesion-ondas-abstractas_5481485.htm#fromView=search&page=1&position=0&uuid=2c6d60c6-70f8-4d8f-bd22-b17adc44fbda">esta plantilla</a> alojada en Freepik. Web programada por Luis Enrique
`;

const descripcionRegistroForm = `
  Límite de 15 caracteres en el usuario y 20 en la contraseña, mínimo 3 caracteres; solo se aceptan
  letras y números. Crédito a <a href="https://www.freepik.es/vector-gratis/pagina-inicio-sesion-ondas-abstractas_5481485.htm#fromView=search&page=1&position=0&uuid=2c6d60c6-70f8-4d8f-bd22-b17adc44fbda">esta plantilla</a> alojada Freepik. Web programada por Luis Enrique
`;

/*=============================================
=        MARK:Funcion Cambio Formulario       =
=============================================*/

btnCambioFormulario.addEventListener("click", () => {
  let valorAtributo = btnCambioFormulario.getAttribute("form");

  if (valorAtributo === "login") {
    // ---------------------------
    inputUsuario.setAttribute("placeholder", "Nuevo Usuario");
    inputContrasena.setAttribute("placeholder", "Nueva Contraseña");

    tituloForm.innerHTML = tituloRegistroForm;
    tituloBtnForm.innerHTML = inputFormularioRegistro;

    btnCambioFormulario.setAttribute("form", "registro");
    tituloBtnForm.setAttribute("form", "registro");

    btnCambioFormulario.innerText = "¿Ya tienes una cuenta? Inicia Sesión";

    formularioDescripcion.innerHTML = descripcionRegistroForm;
  } else {
    // ---------------------------
    inputUsuario.setAttribute("placeholder", "Usuario");
    inputContrasena.setAttribute("placeholder", "Contraseña");

    tituloForm.innerHTML = tituloLoginForm;
    tituloBtnForm.innerHTML = inputFormularioAcceder;

    btnCambioFormulario.setAttribute("form", "login");
    tituloBtnForm.setAttribute("form", "login");

    btnCambioFormulario.innerText = "¿No tienes una cuenta? Regístrate";

    formularioDescripcion.innerHTML = descripcionLoginForm;
  }
});

/*=============================================
=              MARK:Animacion Carga           =
=============================================*/

const htmlBotonFormulario = `
  {{titulo}}
  <span>
    <svg viewBox="0 0 24 24" width='24' xmlns="http://www.w3.org/2000/svg" class='loading'>
      <path d="M12,3V6M5.64,5.64,7.76,7.76M3,12H6m-.36,6.36,2.12-2.12M12,18v3m6.36-2.64-2.12-2.12M21,12H18m.36-6.36L16.24,7.76"/>
    </svg>
  </span>
`;

/* Subsection
-------------------------------------------------- */

animacionCarga = (tipo) => {
  const contenidoHTML = htmlBotonFormulario.replace(
    "{{titulo}}",
    tipo === "login" ? "Iniciando Sesión" : "Registrando"
  );
  tituloBtnForm.innerHTML = contenidoHTML;
};

quitarAnimacionCarga = (tipo) => {
  if (tipo === "login") {
    tituloBtnForm.innerHTML = inputFormularioAcceder;
  } else {
    tituloBtnForm.innerHTML = inputFormularioRegistro;
  }
};

/*============  End of Animacion Carga  =============*/

/*=============================================
=            MARK:HTML Boton Copiar           =
=============================================*/

const htmlSinCopiar = `
  Copiar
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path
        d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
      />
    </svg>
  </span>
`;

const htmlCopiado = `
  Copiado
  <span>
    <svg
      class="check"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d="M17 5L8 15l-5-4" />
    </svg>
  </span>
`;

/*=============================================
=            MARK:HTML Eliminar               =
=============================================*/

const htmlEliminar = `
  Eliminar
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path
        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
      />
    </svg>
  </span>
`;

const htmlEliminando = `
  Eliminando
  <span>
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="eliminando"
    >
      <path
        d="M12,3V6M5.64,5.64,7.76,7.76M3,12H6m-.36,6.36,2.12-2.12M12,18v3m6.36-2.64-2.12-2.12M21,12H18m.36-6.36L16.24,7.76"
      />
    </svg> </span
  >
`;

/* End of Estilos Boton Eliminar
-------------------------------------------------- */

/*=============================================
=              MARK:Agregar Estado            =
=============================================*/

agregarEstado = (elementoClickeado, tipo) => {
  if (tipo === "copiar") {
    elementoClickeado.innerHTML = htmlCopiado;
    elementoClickeado.classList.add("copiaExitosa");

    setTimeout(() => {
      elementoClickeado.innerHTML = htmlSinCopiar;
      elementoClickeado.classList.remove("copiaExitosa");
    }, 2000);
  } else if (tipo === "eliminar") {
    elementoClickeado.innerHTML = htmlEliminando;
  } else if ("quitarEstadoEliminando") {
    elementoClickeado.innerHTML = htmlEliminar;
  }
};

/*=============================================
=             MARK:Función Copiar             =
=============================================*/

copiarTexto = (elementoClickeado) => {
  // Obtiene la referencia al elemento p superior
  let textoLicencia = elementoClickeado.parentElement.previousElementSibling;

  // Copia el texto al portapapeles
  let textoCopia = textoLicencia.innerText;

  try {
    navigator.clipboard.writeText(textoCopia).then(function () {
      agregarEstado(elementoClickeado, "copiar");
    });
  } catch (error) {
    lanzarPopUp(
      "error",
      "Error al Copiar Texto",
      "Parece ser que hubo un error por falta de disponibilidad de un certificado SSL"
    );
  }
};

/*============  End of Función Copiar  =============*/

/*=============================================
=               Funcion Eliminar              =
=============================================*/

eliminarLicencia = (elementoClickeado) => {
  let idLicenciaEliminar = elementoClickeado.getAttribute("id");
  generarBodyFetchEliminarLicencia(idLicenciaEliminar, elementoClickeado);
};

/*=============================================
=  MARK:Número de Licencias en Contenedores   =
=============================================*/
const contenedoresLicencias = document.querySelectorAll(
  ".usuario__LicenciasContenedor"
);

const htmlSinLiencias = `
  <div class="usuario__SinLicencia">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#819ac6" stroke-width="1.5" />
      <path
        d="M12 17V11"
        stroke="#819ac6"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        transform="matrix(1 0 0 -1 11 9)"
        fill="#819ac6"
      />
    </svg>
    No tienes licencias de este producto
  </div>
`;

mostrarCartelNoTienesLicencia = () => {
  // ----------------------------------
  contenedoresLicencias.forEach((element) => {
    /* Subsection
    -------------------------------------------------- */
    const hijosContenedoresLicencias = element.querySelectorAll(
      ".usuario__LicenciaMostrada"
    );
    const cartelSinLicenciasProducto = element.querySelectorAll(
      ".usuario__SinLicencia"
    );
    /* End of Subsection
    -------------------------------------------------- */
    if (hijosContenedoresLicencias.length === 0) {
      if (cartelSinLicenciasProducto.length === 0) {
        element.insertAdjacentHTML("beforeend", htmlSinLiencias);
      }
    } else {
      if (cartelSinLicenciasProducto.length > 0) {
        cartelSinLicenciasProducto[0].remove();
      }
    }
  });

  //__Descripción___ Esta función recorre todos los contenedores de licencias, verifica si cada uno no tiene un hijo con la clase .usuario__LicenciaMostrada, si es así agrega la clase .usuario__SinLicencia, de lo contrario la elimina
};

/*============  End of Número de Licencias en Contenedores  =============*/

on("click", ".copiar", function () {
  copiarTexto(this);
});

on("click", ".eliminar", function () {
  agregarEstado(this, "eliminar");
  eliminarLicencia(this);
});
//se llama a la función y se le pasa como parámetro el elemento div desde el cual se ejecutó la función

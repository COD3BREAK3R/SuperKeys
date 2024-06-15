/*=============================================
=           MARK:Variables Generales          =
=============================================*/

const urlFetchObtenerLicencias = "../app/models/usuario/obtener_licencias.php";

const plantillaLicencia = (licenciaClave, licenciaID) => {
  const htmlLicencia = `
    <div class="usuario__LicenciaMostrada">
      <p>${licenciaClave}</p>
      <div class="usuario__Licencia__Acciones">
        <div class="copiar">
          Copiar
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path
                d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
              />
            </svg>
          </span>
        </div>
        <div class="eliminar" id="${licenciaID}">
          Eliminar
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;

  return htmlLicencia;
};

/*=============================================
=          MARK:Limpiar Licencias             =
=============================================*/

limpiarLicencias = () => {
  const licenciasMostradas = document.querySelectorAll(
    ".usuario__LicenciaMostrada"
  );

  licenciasMostradas.forEach((element) => {
    element.remove();
  });
};

/*=============================================
=            MARK:Mostrar Licencias           =
=============================================*/

mostrarLicencias = async () => {

  /* Subsection
  -------------------------------------------------- */

  const licenciasWindows = respuestaServidor.windows;
  const contenedorLicenciasWindows =
    document.getElementById("licenciasWindows");

  const licenciasOffice = respuestaServidor.office;
  const contenedorLicenciasOffice = document.getElementById("licenciasOffice");

  /* Subsection
  -------------------------------------------------- */
  
  licenciasWindows.forEach((licencia) => {
    let licenciaID = licencia.id;
    let licenciaClave = licencia.clave;

    contenedorLicenciasWindows.insertAdjacentHTML(
      "beforeend",
      plantillaLicencia(licenciaClave, licenciaID)
    );
  });

  licenciasOffice.forEach((licencia) => {
    let licenciaID = licencia.id;
    let licenciaClave = licencia.clave;

    contenedorLicenciasOffice.insertAdjacentHTML(
      "beforeend",
      plantillaLicencia(licenciaClave, licenciaID)
    );
  });
  
  /* End of Subsection
  -------------------------------------------------- */

  mostrarCartelNoTienesLicencia();
};

/*=============================================
=           MARK:Obtener Licencias            =
=============================================*/

obtenerLicencias = async () => {
  try {
    const respuesta = await fetch(`${urlFetchObtenerLicencias}`);

    const textoRespuesta = await respuesta.text();
    
    if (respuesta.ok) {
      filtrarRespuesta(textoRespuesta);
      limpiarLicencias();
      mostrarLicencias();
    } else {
      filtrarRespuesta(textoRespuesta);
      lanzarPopUp("error", "Error al obtener Licencias", respuestaServidor.error);
    }
  } catch (error) {
    lanzarPopUp("error", "Error Desconocido", respuestaServidor.error);
  }
};

obtenerLicencias();

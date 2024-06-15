/*=============================================
=          MARK:Variables Generales           =
=============================================*/

let valorSeleccionado;
let valoresFetchGenerarLicencia;

const urlFetchGenerarLicencia = "../app/models/usuario/generar_licencia.php";

/*=============================================
=    MARK:Obtener Input Radio Seleccionado    =
=============================================*/

obtenerInputRadioSeleccionado = () => {
  let radios = document.getElementsByName("grupo");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valorSeleccionado = radios[i].value;
      break;
    }
  }
  if (valorSeleccionado !== undefined) {
    generarBodyFetch();
  }
};

/*=============================================
=           MARK:Generar Body Fecth           =
=============================================*/

generarBodyFetch = () => {
  const bodyFetch = {
    tipoLicencia: valorSeleccionado,
  };

  valoresFetchGenerarLicencia = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyFetch),
  };
  generarLiencia();
};

/*=============================================
=              MARK:Filtrar Respuesta         =
=============================================*/

let respuestaServidor;

filtrarRespuesta = (res) => {
  let jsonMatch = res.match(/{(.|n)*}/);

  if (jsonMatch) {
    let respuestaString = jsonMatch[0];
    respuestaServidor = JSON.parse(respuestaString);
  }
};

/*=============================================
=            MARK:Generar Licencia            =
=============================================*/

generarLiencia = async () => {
  try {
    const respuesta = await fetch(
      `${urlFetchGenerarLicencia}`,
      valoresFetchGenerarLicencia
    );
    
    const textoRespuesta = await respuesta.text();

    if (respuesta.ok) {
      obtenerLicencias().then(() => {
        mostrarEstadoLicenciaGenerada();
      });
    } else {
      filtrarRespuesta(textoRespuesta);

      lanzarPopUp(
        "error",
        "Error al Generar la Licencia",
        respuestaServidor.error
      );

      quitarAnimacionCarga("generar");
    }
  } catch (error) {
    lanzarPopUp("error", "Error Desconocido", error);
  }
};

/*=============================================
=       MARK:Estado Licencia Generada         =
=============================================*/

const htmlBtnLicenciaGenerada = `
  <span>Generada &nbsp;</span>

  <svg
    class="check"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path d="M17 5L8 15l-5-4" />
  </svg>
`;

const htmlBtnGenerarLicencia = `
  <span>Generar &nbsp;</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.4883 15.2496 11.6283 15.4016 11.8589 15.652C11.9551 15.7565 12.0672 15.8781 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876L5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C19.1708 2 22 4.81767 22 8.29344ZM15.681 10.4889C16.8984 10.4889 17.8853 9.50601 17.8853 8.29353C17.8853 7.08105 16.8984 6.09814 15.681 6.09814C14.4635 6.09814 13.4766 7.08105 13.4766 8.29353C13.4766 9.50601 14.4635 10.4889 15.681 10.4889Z"
    />
  </svg>
`;
mostrarEstadoLicenciaGenerada = () => {
  btnGenerar.innerHTML = htmlBtnLicenciaGenerada;
  btnGenerar.classList.add("copiaExitosa");

  setTimeout(() => {
    btnGenerar.innerHTML = htmlBtnGenerarLicencia;
    btnGenerar.classList.remove("copiaExitosa");
  }, 2000);
};

/*============  End of Estado Licencia Generada  =============*/

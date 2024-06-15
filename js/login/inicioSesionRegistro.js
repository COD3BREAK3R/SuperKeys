/*=============================================
=               MARK:Comprobacion             =
=============================================*/

botonFormulario.addEventListener("click", () => {
  if (escritoEnUsuario === true && escritoEnContrasena === true) {
    let tipoFormulario = botonFormulario.getAttribute("form");

    if (tipoFormulario === "login") {
      inicioRegistro(urlLogin, "login");
    } else {
      inicioRegistro(urlRegistro, "registro");
    }
  }
});

/*=============================================
=            MARK:Variables Generales         =
=============================================*/

const urlLogin = "./app/models/login.php";
const urlRegistro = "./app/models/registro.php";
const urlUsuario = "./pages/usuario.php";

/*=============================================
=               MARK:Parametros Fetch         =
=============================================*/

obtenerValoresInput = () => {
  const body = {
    usuario: inputUsuario.value,
    contrasena: inputContrasena.value,
  };

  return (initFetch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
/* End of Obtener Valores Input
------------------------------------------- */

/*=============================================
=              MARK: Acciones                  =
=============================================*/

accionInicioRegistro = (metodo, exitoso, mensajeError) => {
  if (metodo === "login") {
    if (exitoso) {
      location.href = urlUsuario;
    } else {
      lanzarPopUp("error", "Inicio de Sesión Fallido", mensajeError);
    }
  } else {
    if (exitoso) {
      lanzarPopUp("registro");
      quitarAnimacionCarga(metodo);
    } else {
      lanzarPopUp("error", "Registro Fallido", mensajeError);
    }
  }
};

/*=============================================
=              MARK:Filtrar Respuesta         =
=============================================*/

let respuestaServidor;

filtrarRespuesta = (res) => {
  let jsonMatch = res.match(/{(.|n)*}/);

  if (jsonMatch) {
    respuestaString = jsonMatch[0];
    respuestaServidor = JSON.parse(respuestaString);
  }
};

/*=============================================
=           MARK: Incio/Registro              =
=============================================*/

inicioRegistro = async (url, metodo) => {
  obtenerValoresInput();
  animacionCarga(metodo);

  try {
    const respuesta = await fetch(`${url}`, initFetch);

    if (respuesta.ok) {
      accionInicioRegistro(metodo, true);
    } else {
      const textoRespuesta = await respuesta.text();

      filtrarRespuesta(textoRespuesta);
      accionInicioRegistro(metodo, false, respuestaServidor.error);
      quitarAnimacionCarga(metodo);
    }
  } catch (error) {
    lanzarPopUp("error", "Error Desconocido", error);

    quitarAnimacionCarga(metodo);
  }
};

/*============  End of Incio/Registro  =============*/

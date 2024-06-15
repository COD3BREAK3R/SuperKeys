/*=============================================
=         MARK:Variables Generales            =
=============================================*/

let valoresFetchEliminarLicencia = {};
const urlFetchEliminarLicencia = "../app/models/usuario/eliminar_licencia.php";

/*=============================================
=   MARK:Parametros Fetch Eliminar Licencia   =
=============================================*/

generarBodyFetchEliminarLicencia = (idLicencia, elementoClickeado) => {
  const bodyFetch = {
    idLicenciaEliminar: idLicencia,
  };

  valoresFetchEliminarLicencia = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyFetch),
  };

  eliminarLiencia(elementoClickeado);
};

/*=============================================
=            MARK:Eliminar Licencia           =
=============================================*/

eliminarLiencia = async (elementoClickeado) => {
  try {
    const respuesta = await fetch(
      `${urlFetchEliminarLicencia}`,
      valoresFetchEliminarLicencia
    );

    if (respuesta.ok) {
      obtenerLicencias();
    } else {
      const textoRespuesta = await respuesta.text();

      filtrarRespuesta(textoRespuesta);

      lanzarPopUp(
        "error",
        "Error al Eliminar la Licencia",
        respuestaServidor.error
      );

      agregarEstado(elementoClickeado, "quitarEstadoEliminando");
    }
  } catch (error) {
    lanzarPopUp("error", "Error Desconocido", error);
    agregarEstado(elementoClickeado, "quitarEstadoEliminando");
  }
};

/*============  End of Eliminar Licencia  =============*/

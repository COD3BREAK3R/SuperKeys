document
    .getElementById("cerrarSesion")
    .addEventListener("click", async function () {
        try {
            const respuesta = await fetch(
                "../app/models/usuario/cerrar_sesion.php"
            );

            if (respuesta.ok) {
                window.location.reload();
            }
        } catch (error) {
            lanzarPopUp("error", "Error al intentar Cerrar Sesión", error);
        }
    });

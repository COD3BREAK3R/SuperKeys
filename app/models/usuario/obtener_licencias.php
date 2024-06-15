<?php
require_once '../../config/credenciales.php';
require_once '../usuario/validacion_general_usuario.php';
require_once '../usuario/tryCatchWrapper.php';

$id_usuario = $_SESSION['id_usuario'];

if (validacion_general()) {
    tryCatchWrapper(function () {
        obtenerLicencias();
    });
}
/*=============================================
=            MARK:Obtener Licencias           =
=============================================*/

function obtenerLicencias()
{
    global $conexion, $id_usuario;

    try {
        $sql_obtener_licencias = "SELECT id, windows, office FROM claves WHERE usuario_id = ?";

        $stmt = $conexion->prepare($sql_obtener_licencias);
        $stmt->bind_param("i", $id_usuario);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $licencias = array(
            'windows' => array(),
            'office' => array()
        );

        while ($row = $resultado->fetch_assoc()) {

            if (!empty($row['windows'])) {

                $licencias['windows'][] = array(
                    'id' => $row['id'],
                    'clave' => $row['windows']
                );
            }
            if (!empty($row['office'])) {

                $licencias['office'][] = array(
                    'id' => $row['id'],
                    'clave' => $row['office']
                );
            }
        }

        echo json_encode($licencias);

    } catch (Exception) {
        throw new Exception('Error al obtener las licencias del usuario');
    }
}

/*============  End of Obtener Licencias  =============*/
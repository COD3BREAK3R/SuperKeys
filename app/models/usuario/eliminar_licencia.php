<?php

require_once '../../config/credenciales.php';
require_once '../usuario/validacion_general_usuario.php';
require_once '../usuario/tryCatchWrapper.php';

/*=============================================
=            MARK:Variables Generales         =
=============================================*/

$data = json_decode(file_get_contents('php://input'), true);

$id_usuario = $_SESSION['id_usuario'];
$id_licencia = $data['idLicenciaEliminar'];

/*============  End of Variables Generales  =============*/

if (validacion_general()) {
    tryCatchWrapper(function () use ($id_usuario, $id_licencia) {
        validar_eliminacion_licencia($id_usuario, $id_licencia);
    });
}

/*=============================================
=         MARK:Validar Eliminacion            =
=============================================*/

function validar_eliminacion_licencia($id_usuario, $id_licencia)
{
    global $conexion;

    try {
        $sql_verificar_id = "SELECT id FROM claves WHERE id = ? AND usuario_id = ?";
        $stmt = $conexion->prepare($sql_verificar_id);
        $stmt->bind_param("ii", $id_licencia, $id_usuario);
        $stmt->execute();
        $stmt->store_result();
    } catch (Exception) {
        throw new Exception("Hubo un error al intentar verificar si puede eliminar la licencia");
    }

    if ($stmt->num_rows > 0) {
        eliminacion_licencia_bd($id_licencia);
    } else {
        throw new Exception("Usted no tiene permiso para eliminar la licencia");
    }
}

/*=============================================
=           MARK:Eliminacion Licencia         =
=============================================*/

function eliminacion_licencia_bd($id_licencia)
{
    global $conexion;

    try {
        $sql_eliminar_licencia = "DELETE FROM claves WHERE id = ?";
        $stmt_eliminar = $conexion->prepare($sql_eliminar_licencia);
        $stmt_eliminar->bind_param("i", $id_licencia);
        $stmt_eliminar->execute();
    } catch (Exception) {
        throw new Exception("Hubo un error al intentar eliminar la licencia de la base de datos");
    }
}
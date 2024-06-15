<?php

require_once '../../config/credenciales.php';
require_once '../usuario/validacion_general_usuario.php';
require_once '../usuario/tryCatchWrapper.php';
require_once '../usuario/insertar_licencia.php';

/*=============================================
=            MARK:Variables Generales         =
=============================================*/

$data = json_decode(file_get_contents('php://input'), true);

$id_usuario = $_SESSION['id_usuario'];
$tipo_licencia = $data['tipoLicencia'];

$clave_generada = '';

/*============  End of Variables Generales  =============*/

if (validacion_general()) {
    tryCatchWrapper(function () use ($id_usuario, $tipo_licencia) {
        validar_cantidad_licencias($id_usuario, $tipo_licencia);
    });
}

/*=============================================
=     MARK:Validacion Cantidad Licencias      =
=============================================*/
function validar_cantidad_licencias($id_usuario, $tipo_licencia)
{
    global $conexion, $clave_generada;

    $tipo_licencia === 'windows' ? 'windows' : 'office';

    $sql_licencias_usuario = "SELECT COUNT(*) as cantidad FROM claves WHERE usuario_id = ? AND $tipo_licencia IS NOT NULL";

    try {
        $stmt = $conexion->prepare($sql_licencias_usuario);
        $stmt->bind_param("s", $id_usuario);
        $stmt->execute();
        $resultado = $stmt->get_result();
    } catch (Exception) {

        throw new Exception('Se ha producido un error al intentar validar la cantidad de licencias del usuario');
    }

    if ($resultado && $resultado->num_rows > 0) {
        $row = $resultado->fetch_assoc();
        $cantidad_licencias = $row['cantidad'];

        if ($cantidad_licencias < 3) {
            $clave_generada = generar_clave(strtoupper(substr($tipo_licencia, 0, 1)));
            insertar_licencia($clave_generada, $tipo_licencia);
        } else {
            throw new Exception('No se permite generar más de 3 Licencias para cada producto');
        }
    }
}

/*=============================================
=           MARK:Generar Licencia             =
=============================================*/

function generar_clave($caracter_inicial_tipo_licencia)
{
    $caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $numeros = '0123456789';

    $clave = '';

    // Generar grupos de 4 caracteres
    for ($i = 0; $i < 4; $i++) {
        $grupo = '';

        $grupo .= $caracteres[rand(0, strlen($caracteres) - 1)];
        $grupo .= $numeros[rand(0, strlen($numeros) - 1)];
        $grupo .= $caracteres[rand(0, strlen($caracteres) - 1)];
        $grupo .= $numeros[rand(0, strlen($numeros) - 1)];

        $clave .= $grupo . '-';
    }

    // Eliminar el guion al final
    $clave = substr($clave, 0, -1);

    // Cambiar el primer caracter por el especificado
    $clave[0] = $caracter_inicial_tipo_licencia;

    return $clave;
}

/*============  End of Generar Licencia  =============*/

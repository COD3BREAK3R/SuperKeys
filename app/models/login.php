<?php
require_once '../config/credenciales.php';
require_once '../models/validacion_general.php';

$registro = false;

/*=============================================
=             MARK:Iniciar Sesion             =
=============================================*/

function iniciar_sesion($usuario, $id_usuario)
{

    if (isset($_SESSION['usuario'])) {
        unset($_SESSION['usuario']);
    }

    $_SESSION['usuario'] = $usuario;
    $_SESSION['id_usuario'] = $id_usuario;
}

/*=============================================
=           MARK:Error Credenciales           =
=============================================*/

function error_credenciales()
{
    http_response_code(400);

    throw new Exception('El nombre de usuario o la contraseña son incorrectos');
}

/*============  End of Error Credenciales  =============*/

/*=============================================
=             MARK:Verificar Datos            =
=============================================*/

function verificar_datos()
{
    global $usuario, $password, $conexion;

    //sensible a mayusculas y minusculas
    $sql_obtener_usuario = "SELECT * FROM usuarios WHERE BINARY usuario = ?";
    $stmt = $conexion->prepare($sql_obtener_usuario);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $fila = $resultado->fetch_assoc();
        $contrasena_hash = $fila['contrasena'];
        $usuario_bd = $fila['usuario'];
        $id_usuario = $fila['id'];

        if (password_verify($password, $contrasena_hash) && $usuario_bd === $usuario) {
            iniciar_sesion($usuario, $id_usuario);
        } else {
            error_credenciales();
        }
    } else {
        error_credenciales();
    }
}

/*============  End of Verificar Datos  =============*/

echo validacion_general();
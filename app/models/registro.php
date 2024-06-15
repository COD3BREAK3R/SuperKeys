<?php

require_once '../config/credenciales.php';
require_once '../models/validacion_general.php';

$passwordHasheado = '';
$registro = true;


/*=============================================
=             MARK:Ingresar Usuario           =
=============================================*/
function ingresar_usuario()
{
    global $conexion, $usuario, $passwordHasheado;

    $sql_nuevo_usuario = "INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)";

    try {
        $stmt = $conexion->prepare($sql_nuevo_usuario);
        $stmt->bind_param("ss", $usuario, $passwordHasheado);
        $stmt->execute();
        $stmt->close();

    } catch (Exception) {
        throw new Exception('Ocurrió un error al intentar realizar el registro en la base de datos');
    }
}

/*=============================================
=      MARK:Verificar si Exsite Usuario       =
=============================================*/

function verificar_existencia_usuario()
{
    global $conexion, $usuario;

    //sensible a mayusculas y minusculas
    $sql_verificar_existencia_usuario = "SELECT usuario FROM usuarios WHERE BINARY usuario = ?";
    $stmt = $conexion->prepare($sql_verificar_existencia_usuario);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 0) {
        return false;
    }

}

/*=============================================
=            MARK:Hasehar Contraseña          =
=============================================*/
function hashear_contrasena()
{
    if (verificar_existencia_usuario() === false) {

        global $password, $passwordHasheado, $registro;

        $passwordHasheado = password_hash($password, PASSWORD_BCRYPT);
        ingresar_usuario();

    } else {

        throw new Exception('El nombre de usuario que intentas registrar ya existe');
    }

}

/*============  End of Hasehar Contraseña  =============*/

echo validacion_general();


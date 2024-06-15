<?php
/*=============================================
=           MARK:Valores Recibidos            =
=============================================*/

$data = json_decode(file_get_contents('php://input'), true);


$usuario = $data['usuario'];
$password = $data['contrasena'];
$token = $_COOKIE['csrf_token'];

session_start();

/*=============================================
=        MARK:Evaluar Usuario Contrasena      =
=============================================*/

$usuarioCorrecto = false;
$contrasenaCorrecta = false;
function evaluar_usuario_contrasena()
{
    global $registro, $usuario, $password, $usuarioCorrecto, $contrasenaCorrecta;

    $comprobar_letras_numeros = '/^[a-zA-Z0-9\sñáéíóúÁÉÍÓÚ]+$/';

    if (preg_match($comprobar_letras_numeros, $usuario) && strlen($usuario) <= 15) {
        $usuarioCorrecto = true;
    }
    if (preg_match($comprobar_letras_numeros, $password) && strlen($password) <= 20) {
        $contrasenaCorrecta = true;
    }

    if ($usuarioCorrecto && $contrasenaCorrecta) {
        if ($registro) {
            hashear_contrasena();
        } else {
            verificar_datos();
        }

    } else {
        throw new Exception('El usuario o contraseña fueron manipulados, no toque el código de la aplicación');
    }
}

/*=============================================
=             MARK:Evaluar Peticion           =
=============================================*/

function evaluar_peticion()
{
    $csrf_token = $_SESSION['csrf_token'];

    global $token;

    if ($csrf_token === $token) {
        evaluar_usuario_contrasena();

    } else {
        throw new Exception('El token de acceso no es válido');
    }
}

/*============  End of Evaluar Peticion  =============*/

function validacion_general()
{
    try {
        evaluar_peticion();

    } catch (Exception $e) {

        http_response_code(400);
        return json_encode(['error' => $e->getMessage()]);
    }

    global $conexion;
    $conexion->close();
}
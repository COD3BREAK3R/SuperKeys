<?php 
session_start();

$token = $_COOKIE['csrf_token'];
$csrf_token = $_SESSION['csrf_token'];

function validacion_general()
{
    global $token, $csrf_token;

    if ($token === $csrf_token) {
        return true;
    } else {
        throw new Exception('Error de validación CSRF');
    }
    
}

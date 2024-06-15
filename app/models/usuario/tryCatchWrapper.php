<?php
function tryCatchWrapper($funcion)
{
    try {
        $funcion();
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(['error' => $e->getMessage()]);
    }

    global $conexion;
    $conexion->close();
    exit;
}
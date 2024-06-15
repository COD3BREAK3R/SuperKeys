<?php
require_once '../../config/credenciales.php';

function insertar_licencia($licencia, $tipo)
{
    try {
        global $conexion, $id_usuario;

        $sql_insertar_licencia = "INSERT INTO claves (usuario_id, $tipo) VALUES (?, ?)";

        $stmt = $conexion->prepare($sql_insertar_licencia);
        $stmt->bind_param("ss", $id_usuario, $licencia);
        $stmt->execute();

    } catch (Exception) {
        throw new Exception('Error al insertar la licencia generada en la base de datos');
    }
}

<?php
global $conexion;

$sql_tabla_usuarios = "CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(15),
    contrasena VARCHAR(255)
)";

$conexion->prepare($sql_tabla_usuarios)->execute();

$sql_tabla_claves = "CREATE TABLE IF NOT EXISTS claves (
    id INT AUTO_INCREMENT PRIMARY KEY,
    windows VARCHAR(20),
    office VARCHAR(20),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
)";

$conexion->prepare($sql_tabla_claves)->execute();

mysqli_close($conexion);
<?php

$host = '127.0.0.1';
$usuario = 'root';
$contrasena = '1234';
$base_datos = 'login_php';

$conexion = new mysqli($host, $usuario, $contrasena);

$crear_bd = "CREATE DATABASE IF NOT EXISTS $base_datos";
$conexion->prepare($crear_bd)->execute();

$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);
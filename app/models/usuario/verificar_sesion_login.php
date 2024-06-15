<?php
if (isset($_SESSION['usuario'])) {
    header("Location: /Login_PHP/pages/usuario.php");
}
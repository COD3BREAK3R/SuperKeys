<?php

if (!isset($_SESSION['usuario'])) {
    header("Location: /Clipcuote");
    exit();
}
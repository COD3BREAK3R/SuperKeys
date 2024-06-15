<?php

session_start();

if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$csrf_token = $_SESSION['csrf_token'];

setcookie(
    'csrf_token',
    $csrf_token,
    [
        'expires' => time() + 3600,
        'path' => '/',
        'domain' => '',
        'httpOnly' => true,
        // 'secure' => true,
        'samesite' => 'strict'
    ]
);
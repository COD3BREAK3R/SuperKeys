<?php
// CORS 
header("Access-Control-Allow-Origin: localhost");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// CSP
header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com");

// X-Frame-Opciones
header("X-Frame-Options: SAMEORIGIN");

// X-XSS-Proteccion
header("X-XSS-Protection: 1");

// X-Content
header("X-Content-Type-Options: nosniff");

// Referrer-Policy 
header("Referrer-Policy: same-origin");

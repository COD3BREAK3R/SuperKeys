CREATE DATABASE IF NOT EXISTS login_PHP;

CREATE TABLE IF NOT EXISTS login_php.usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, usuario VARCHAR(15), contrasena VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS login_php.claves (
    id INT AUTO_INCREMENT PRIMARY KEY, windows VARCHAR(255), office VARCHAR(255), usuario_id INT, FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);
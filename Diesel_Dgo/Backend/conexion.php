<?php
$host = "localhost";     
$usuario = "root";       
$contraseña = "";        
$base_datos = "diesel_service_dgo"; 

$conexion = new mysqli($host, $usuario, $contraseña, $base_datos);

// Verificar si hay error en la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

?>

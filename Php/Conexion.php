<?php
$host = "localhost";
$usuario = "root";
$contrasenia = "";
$base_de_datos = "taqueria";

$con = mysqli_connect($host, $usuario, $contrasenia, $base_de_datos);

if (mysqli_connect_errno()) {
    echo "Error al conectar";
    exit();
}

echo "Conexion exitosa";

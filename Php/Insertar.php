<?php
header('Access-Control-Allow-Origin: http://localhost:5173'); // Replace with your React app's origin
header('Access-Control-Allow-Methods: GET, POST'); // Add allowed methods if needed
header('Access-Control-Allow-Headers: Content-Type'); // Add allowed headers if needed

include("Conexion.php");
$nombre = $_POST["nombre"];
$apeP = $_POST["apellidoP"];
$apeM = $_POST["apellidoM"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$contra = $_POST["password"];
$fecha = $_POST["fecha"];
$perfil = $_POST["perfil"];
$estatus = $_POST["estatus"];
$telefono = $_POST["telefono"];

$sql = "INSERT INTO usuario (`nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono`)
        VALUES ('" . $nombre . "', '" . $apeP . "', '" . $apeM . "', '" . $correo . "', '" . $usuario . "', '" . $contra . "', '" . $fecha . "', '" . $perfil . "', " . $estatus . ", '" . $telefono . "')";
$resultado = mysqli_query($con, $sql);
if ($resultado) {
    echo "Conexion exitosa";
} else {
    echo "Error al conectar";
}
mysqli_close($con);

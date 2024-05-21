<?php
function listarEmpleado(){
    try{
$mysqli = include_once "./Conexion.php";
$resultado = $mysqli->query("SELECT `id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono` FROM usuario");
$videojuegos = $resultado->fetch_all(MYSQLI_ASSOC);
    }
}
function login(){
    $mysqli = include_once "./Conexion.php";
$usuario = $_GET["usuario"];
$pass = $_GET["contrasena"]
$sentencia = $mysqli->prepare("SELECT `id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono` FROM usuario WHERE usuario = ? and contrasena = ?");
$sentencia->bind_param("ss", $usuario,$pass);
$sentencia->execute();
$resultado = $sentencia->get_result();
$Empleado = $resultado->fetch_assoc();
}
?>
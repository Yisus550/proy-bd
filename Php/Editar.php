<?php
$mysqli = include_once "./Conexion.php";
$id = $_GET["id"];
$sentencia = $mysqli->prepare("SELECT `id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono` FROM usuario WHERE id = ?");
$sentencia->bind_param("i", $id);
$sentencia->execute();
$resultado = $sentencia->get_result();
$Empleado = $resultado->fetch_assoc();
if (!$Empleado) {
    exit("No hay resultados para ese ID");
}

?>
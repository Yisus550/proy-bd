<?php
function InsertarEmp(){
    try{
$mysqli = include_once "./Conexion.php";
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$apeP = $_POST["preciapellido_paterno"];
$apeM = $_POST["apellido_materno"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$contra = $_POST["contrasena"];
$fecha = $_POST["fecha_registro"];
$perfil = $_POST["perfil"];
$estatus = $_POST["estatus"];
$telefono = $_POST["telefono"];
$sentencia = $mysqli->prepareINSERT INTO usuario (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono`) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?,?)");
$sentencia->bind_param("issssssdsis", $id,$nombre, $apeP,$apeM,$correo,$usuario,$contra,$fecha ,$perfil,$estatus,$telefono);
$sentencia->execute();
    }
}

?>
<?php
function BorrarEmpleado()
{
  try {
    if (!isset($_GET["id"])) {
      exit("No hay id");
    }
    $mysqli = include_once "Conexion.php";
    $id = $_GET["id"];
    $sentencia = $mysqli->prepare("DELETE FROM usuario WHERE id = ?");
    $sentencia->bind_param("i", $id);
    $sentencia->execute();
  } catch (Exception) {
    echo "Error: " . $e->getMessage();
  }
}

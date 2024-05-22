<?php
header('Access-Control-Allow-Origin: http://localhost:5173'); // Replace with your React app's origin
header('Access-Control-Allow-Methods: GET, POST'); // Add allowed methods if needed
header('Access-Control-Allow-Headers: Content-Type'); // Add allowed headers if needed
header('Content-Type: application/json');

include("Conexion.php");
$id = $_POST["clave"];
$sql = "SELECT * FROM usuario WHERE id=" . $id;
$result = mysqli_query($con, $sql);
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $nombre = $row["nombre"];
        $apeP = $row["apellido_paterno"];
        $apeM = $row["apellido_materno"];
        $correo = $row["correo"];
        $usuario = $row["usuario"];
        $contra = $row["contrasena"];
        $fecha = $row["fecha_registro"];
        $perfil = $row["perfil"];
        $estatus = $row["estatus"];
        $telefono = $row["telefono"];
    }
    $user = [
        "nombre" => $nombre,
        "apellidoP" => $apeP,
        "apellidoM" => $apeM,
        "correo" => $correo,
        "usuario" => $usuario,
        "contrasena" => $contra,
        "fecha" => $fecha,
        "perfil" => $perfil,
        "estatus" => $estatus,
        "telefono" => $telefono
    ];
    echo json_encode($user);
}
mysqli_close($con);
?>
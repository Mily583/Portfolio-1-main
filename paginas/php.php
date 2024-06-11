<?php
// Recibir los datos del formulario
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// Conectar a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar los datos del formulario en la tabla
$sql = "INSERT INTO usuarios (usuario, contraseña) VALUES ('$usuario', '$contraseña')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>

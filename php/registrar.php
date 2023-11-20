<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);
    $tel = mysqli_real_escape_string($conexion, $_POST["tel"]);
    $correo = mysqli_real_escape_string($conexion, $_POST["correo"]);
    $mensaje = mysqli_real_escape_string($conexion, $_POST["mensaje"]);

    $verificar_correo = mysqli_query($conexion, "SELECT * FROM tblcontacto WHERE correo = '$correo'");

    if(mysqli_num_rows($verificar_correo) > 0){
        echo '<script>
                alert("El correo ya existe");
                window.history.go(-1);
                </script>';
        exit;
    }

    $insertar = "INSERT INTO tblcontacto (nombre, tel, correo, mensaje) VALUES ('$nombre','$tel','$correo','$mensaje')";

    $resultado = mysqli_query($conexion, $insertar);

    if(!$resultado){
        echo '<script>
                alert("Error de registro: ' . mysqli_error($conexion) . '");
                window.history.go(-1);
                </script>';
    } else {
        echo '<script>
                alert("Registro efectuado correctamente");
                window.history.go(-1);
              </script>';
    }
} else {
    echo "No se ha enviado ningún formulario.";
}

mysqli_close($conexion);
?>

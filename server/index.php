<?php 

	$mysqli = new mysqli("localhost", "root", "root", "tincan_recognition");
    if ($mysqli->connect_errno) {
        echo "Conexión fallida a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }

	$obtencion = "SELECT * FROM users";
    $resultado = mysqli_query($mysqli,$obtencion);
    	
    $usuarios = $resultado->fetch_all(MYSQLI_ASSOC);

	foreach ($usuarios as $u) {
		echo $u['nombre'].'<br>';
	}
	
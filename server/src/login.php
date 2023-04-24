<?php 
	use models\Usuarios;

	$modelo = new Usuarios;

	$usuario = $_POST['user'];
	$correo = $_POST['correo'];
	$password = $_POST['password'];


	$resp = $modelo->login($usuario, $correo, $password);

	if($resp == true){
		echo json_encode([
			'ok' => True
		]);
	}else if($resp == false){
		echo json_encode([
			'ok' => False
		]);
	}
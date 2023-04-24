<?php 
	use models\Usuarios;

	$modelo = new Usuarios;

	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

	$modelo->add_user($_POST['nombre'], $_POST['apellidoP'], $_POST['apellidoM'], $_POST['telefono'], $_POST['correo'], $password);

	echo json_encode([
		'ok' => True
	]);
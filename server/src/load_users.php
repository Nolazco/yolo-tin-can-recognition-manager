<?php 
	use models\Usuarios;

	$modelo = new Usuarios;

	$users = $modelo->load_users();

	echo json_encode([
		'type' => 'data',
		'data' => $users
	]);
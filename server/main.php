<?php 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Methods: *");
	header("Content-Type: application/json");

	require_once("autoloader.php");

	$file = "./src{$_SERVER['REQUEST_URI']}.php";
	if(file_exists($file)){
		require_once($file);
	}else{
		http_response_code(500);
		echo json_encode([
			"ok" => false,
			"type" => "Error",
			"data" => "Archivo no encontrado"
		]);
	}
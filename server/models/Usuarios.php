<?php 
	namespace models;
	use libraries\ConectionProvider;

	class Usuarios{
		private $conection;

		public function __construct(){

			$this->conection = ConectionProvider::getInstance();
		}

		function login($usuario, $correo, $password){
			$obtencion = "SELECT nombre, apellidoP, apellidoM, telefono, correo, rol, estatus, password FROM users WHERE nombre = '{$usuario}' AND correo = '{$correo}'";
			$resultado = mysqli_query($this->conection->mysqli,$obtencion);
			$resultado = $resultado->fetch_all(MYSQLI_ASSOC);
    		    		
    		$success = password_verify($password, $resultado[0]['password']);

    		return $success;
		}

		function load_users(){

			$obtencion = "SELECT nombre, apellidoP, apellidoM, telefono, correo, rol, estatus FROM users";
    		$resultado = mysqli_query($this->conection->mysqli,$obtencion);
    		
    		return $resultado->fetch_all(MYSQLI_ASSOC);
		}

		function add_user($nombre, $apellidoP, $apellidoM, $telefono, $correo, $password){

			$add_user = $this->conection->mysqli->prepare("INSERT INTO users (nombre, apellidoP, apellidoM, telefono, correo, password) VALUES (?, ?, ?, ?, ?, ?)");
			$add_user->bind_param("ssssss", $nombre, $apellidoP, $apellidoM, $telefono, $correo, $password);

			return $add_user->execute();
		}

		function delete_user($id){

			$delete_user = $this->conection->mysqli->prepare("UPDATE TABLE users SET estatus = 2 WHERE id = ?");
			$delete_user->bind_param("i", $id);

			return $delete_user->execute();
		}
	}
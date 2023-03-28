<?php 
	spl_autoload_register(
		function ($class){
			$class = "./" . str_replace("\\", "/", $class) . '.php';
			if(!file_exists($class)){
				throw new Exception("Error, clase no encontrada" . $class, 1);
			}
			require_once $class;
		}
	);
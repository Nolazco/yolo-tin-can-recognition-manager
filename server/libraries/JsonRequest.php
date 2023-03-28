<?php 
	namespace libraries;

	class JsonRequest{
		static function parseInput(){
			$input = file_get_contents("php://input");
			return json_decode($input);
		}
	}
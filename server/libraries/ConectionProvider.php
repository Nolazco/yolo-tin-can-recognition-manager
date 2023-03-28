<?php 
	namespace libraries;
	class ConectionProvider{
		protected static $instance = null;
		public $mysqli = null;
		private function __construct(){
			$this->mysqli = mysqli_connect("localhost", "root", "root", "tincan_recognition");
		}

		public static function getInstance(){
			if(self::$instance == null){
				self::$instance = new self;
			}
			return self::$instance;
		}
	}
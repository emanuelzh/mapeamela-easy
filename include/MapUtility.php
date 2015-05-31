<?php

class MapUtility {

	private $conn;
	private $save_stm;

	function __construct() {

		try {
			//conexion
			$this->conn = new PDO('mysql:host=localhost;dbname=mapeo','mapeo','password');
			//save statement
			$this->save_stm = $this->conn->prepare('INSERT INTO mapeos(lat, lng, tipo, fecha_hora, created) VALUES(?,?,?,NOW(),NOW())');
		}catch(Exception $ex){
			var_dump($ex);
			die();
		}
	}

	public function save($lat, $lng, $tipo) {
		try {
			$this->save_stm->execute([$lat,$lng,$tipo]);
		}catch(Exception $ex){
			var_dump($ex);
			die();
		}
	}

}
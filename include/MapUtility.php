<?php

class MapUtility {

	private $conn;
	private $save_stm;
	private $data_stm;

	function __construct() {

		try {
			//conexion
			$this->conn = new PDO('mysql:host=localhost;dbname=mapeo','mapeo','password');
			//save statement
			$this->save_stm = $this->conn->prepare('INSERT INTO mapeos(lat, lng, tipo, fecha_hora, created) VALUES(?,?,?,NOW(),NOW())');
			//data statement
			$this->data_stm = $this->conn->prepare('SELECT * FROM mapeos');
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

	public function data() {

		$output = [];
		try {
			
			if($this->data_stm->execute()){
				while($row = $this->data_stm->fetch(PDO::FETCH_OBJ)) {
					$output[] = $row;
				}
			}
			return $output;
		} catch(Exception $ex) {
			print("error");
			return $output;
		}
		
		

	}

}
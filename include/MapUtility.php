<?php

class MapUtility {

	private $conn;
	private $save_stm;
	private $data_stm;

	function __construct($db_name, $db_user, $db_pass) {

		try {
			//conexion
			$this->conn = new PDO('mysql:host=localhost;dbname='.$db_name,$db_user,$db_pass);
			//save statement
			$this->save_stm = $this->conn->prepare('INSERT INTO mapeos(lat, lng, tipo, fecha_hora, created, descripcion) VALUES(?,?,?,?,NOW(),?)');
			//data statement
			$this->data_stm = $this->conn->prepare('SELECT mapeos.*, tipos.nombre as tipo_nombre FROM mapeos INNER JOIN tipos ON tipos.id = mapeos.tipo');
		}catch(Exception $ex){
			var_dump($ex);
			die();
		}
	}

	public function save($lat, $lng, $tipo, $fecha, $desc) {
		try {
			$this->save_stm->execute([$lat,$lng,$tipo, $fecha, $desc]);
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
		} catch(Exception $ex) {
			$output = [];
		}
		return $output;
	}

}
<?php

//db and shit
require('vendor/autoload.php');
require('include/MapUtility.php');

//envs
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

//data utility
$utility = new MapUtility(getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));

//procesar los datos de PHP
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$tipo = $_POST['tipo'];
$utility->save($lat, $lng, $tipo);

header('Content-Type: application/json');
$out = json_encode(["status"=>200,'message'=>"ok"]);
print($out);
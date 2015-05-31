<?php

//db and shit
require('include/MapUtility.php');

//procesar los datos de PHP
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$tipo = $_POST['tipo'];

$utility = new MapUtility;
$utility->save($lat, $lng, $tipo);
$utility = null;

header('Content-Type: application/json');

$out = json_encode(["status"=>200,'message'=>"ok"]);
print($out);
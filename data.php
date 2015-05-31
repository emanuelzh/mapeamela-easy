<?php
error_reporting(E_ALL);

//db and shit
require('include/MapUtility.php');

//obtener los datos
$utility = new MapUtility;
$datos = $utility->data();

header('Content-Type: application/json');

$out = json_encode(["status"=>200,'message'=>"ok",'data'=>$datos],true);
print($out);
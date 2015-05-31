<?php

//db and shit
require('vendor/autoload.php');
require('include/MapUtility.php');

//envs
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

//data utility
$utility = new MapUtility(getenv('DB_USER'), getenv('DB_PASS'));
$datos = $utility->data();

header('Content-Type: application/json');

$out = json_encode(["status"=>200,'message'=>"ok",'data'=>$datos],true);
print($out);
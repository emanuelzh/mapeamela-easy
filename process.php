<?php

header('Content-Type: application/json');

$out = json_encode(["status"=>200,'message'=>"ok"]);
print($out);
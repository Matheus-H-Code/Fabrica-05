<?php

// session_start();

$bd = "calendarioescolar";
$servidor = "localhost";	
$usuario = "root";
$senha = "";

global $pdo;

try {

  $pdo = new PDO("mysql:dbname=".$bd."; host=".$servidor, $usuario, $senha);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
} catch (Exception $e) {

  echo "ERRO: ".$e->getMessage();
  exit;
  
}
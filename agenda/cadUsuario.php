<?php

require_once("config.php");
	
    $idTipoUsuario = 3;
    $status = 'A';
    $campoNull = null;
	extract($_POST);

    $sql = "INSERT INTO usuario (idUsuario, nome, email, senha, idTipoUsuario, status, dataInsercao, 	usuarioInsercao, dataAlteracao, usuarioAtualizacao) 
                VALUES(0, ?, ?, ?, ?, ?, NOW(), null, null, null)";
    $comando = $pdo->prepare($sql);
    $comando->bindParam(1, $nome);
    $comando->bindParam(2, $email);
    $comando->bindParam(3, $senha);
    $comando->bindParam(4, $idTipoUsuario);
    $comando->bindParam(5, $status);
    $comando->execute();

    header("Location: painel-controle/painel-controle.php");

?>
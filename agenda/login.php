<?php 

if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['senha']) && !empty($_POST['senha'])){

	require 'config.php';
	require 'ClassLogin.php';

	$u = new Usuario();

	$email = addslashes($_POST['email']);
	$senha = addslashes($_POST['senha']);

	if($u->login($email, $senha) == true){

		if(isset($_SESSION['iduser'])){
			header("Location: painel-controle/painel-controle.php");
		}else{

			header("Location: acesso.php");
			
		}

	}else{

		header("Location: acesso.php");
        
	}

}else{

	header("Location: acesso.php");
}

 ?>
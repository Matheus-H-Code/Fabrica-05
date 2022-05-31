<?php 

class Usuario{

	public function login($email, $senha){
		global $pdo;

		session_start();

		$sql = "SELECT * FROM usuario WHERE email = :email AND senha = :senha";
		$sql = $pdo->prepare($sql);
		$sql->bindValue("email", $email);
		$sql->bindValue("senha", $senha);
		$sql->execute();

		if($sql->rowCount() > 0){

			$dado = $sql->fetch();

			//comeca aqui a ociosidade
			$tempolimite = 5;
			$_SESSION['registro'] = time();
			$_SESSION['limite'] = $tempolimite; 

			$_SESSION['iduser'] = $dado['idUsuario'];

			return true;

		}else{

			return false;
		}


	}
}


 ?>
<?php 
require_once("../config.php");


if (!empty($_POST["TIPO"])) {
    $tipo = $_POST["TIPO"];
} else {
    $tipo = '';
}
if (!empty($_POST["IDSUSUARIO"])) {
    $idsUsuario = $_POST["IDSUSUARIO"];
} else {
    $idsUsuario = '';
}
if (!empty($_POST["IDSTURMA"])) {
    $idsTurma = $_POST["IDSTURMA"];
} else {
    $idsTurma = '';
}
if (!empty($_POST["IDSCURSO"])) {
    $idsCurso = $_POST["IDSCURSO"];
} else {
    $idsCurso = '';
}
if (!empty($_POST["EMAIL"])) {
    $email = $_POST["EMAIL"];
} else {
    $email = '';
}
if (!empty($_POST["NOME"])) {
    $nome = $_POST["NOME"];
} else {
    $nome = '';
}
if (!empty($_POST["DESCRICAO"])) {
    $descricao = $_POST["DESCRICAO"];
} else {
    $descricao = '';
}
if (!empty($_POST["TIPOUSUARIO"])) {
    $tipoUsuario = $_POST["TIPOUSUARIO"];
} else {
    $tipoUsuario = '';
}

$filtroQuery = '';


if ($tipo == 'buscarUsuarios') {

    $sql = "SELECT 
                U.idUsuario AS IDUSUARIO, 
                U.nome AS NOME, 
                U.email AS EMAIL, 
                U.status AS STATUS,
                TU.nome AS TIPOUSUARIO
            FROM usuario U
            INNER JOIN tipousuario TU ON TU.idTipoUsuario = U.idTipoUsuario
            WHERE U.status = 'A'
            $filtroQuery";

    $result = $pdo->query( $sql );
    
    $retorno = $result->fetchAll(PDO::FETCH_ASSOC);
}

else if ($tipo == 'buscarUsuariosPorIdeTipoUsuario') {

    $values = implode(",",  $idsUsuario);
    $filtroQuery = 'AND U.idUsuario IN ('.$values.')';

    $sqlUsuario = " SELECT 
                        U.idUsuario AS IDUSUARIO, 
                        U.nome AS NOME, 
                        U.email AS EMAIL, 
                        U.status AS STATUS,
                        TU.idTipoUsuario AS IDTIPOUSUARIO,
                        TU.nome AS TIPOUSUARIO
                    FROM usuario U
                    INNER JOIN tipousuario TU ON TU.idTipoUsuario = U.idTipoUsuario
                    WHERE U.status = 'A'
                    $filtroQuery";

    $resultUsuario = $pdo->query( $sqlUsuario );
    $retornoUsuario = $resultUsuario->fetchAll(PDO::FETCH_ASSOC);

    $sqlTipoUsuario = " SELECT  TU.idTipoUsuario AS IDTIPOUSUARIO,
                                TU.nome AS TIPOUSUARIO
                        FROM tipousuario TU
                        WHERE TU.status = 'A'";

    $resultTipoUsuario = $pdo->query( $sqlTipoUsuario );
    $retornoTipoUsuario = $resultTipoUsuario->fetchAll(PDO::FETCH_ASSOC);

    $retorno =  array(
        "USUARIOS" => $retornoUsuario,
        "TIPOUSUARIOS" => $retornoTipoUsuario,
    );

}

else if ($tipo == 'CadastrarCursos') {

    $sql = "INSERT INTO curso 
                (idCurso, nome, descricao, idCoordenador, status, dataInsercao, usuarioInsercao, dataAlteracao, usuarioAlteracao) 
                    VALUES(0, ?, ?, ?, 'A', NOW(), null, null, null)";
    $comando = $pdo->prepare($sql);
    $comando->bindParam(1, $nome);
    $comando->bindParam(2, $descricao);
    $comando->bindParam(3, $idsUsuario);
    $comando->execute();

    $retorno = 'Cadastrado com sucesso';
}

else if ($tipo == 'buscarCursos') {

    $sql = "SELECT 
                C.idCurso AS IDCURSO, 
                C.nome AS NOME, 
                C.descricao AS DESCRICAO, 
                C.status AS STATUS,
                U.nome AS COORDENADOR
            FROM curso C
            INNER JOIN usuario U ON U.idUsuario = C.idCoordenador
            WHERE C.status = 'A'";

    $result = $pdo->query( $sql );
    $retorno = $result->fetchAll(PDO::FETCH_ASSOC);
}

else if ($tipo == 'buscarCursosPorIdeUsuario') {
 
    $values = implode(",",  $idsCurso);
    $filtroQuery = 'AND C.idCurso IN ('.$values.')';

    $sqlCurso = "SELECT 
                C.idCurso AS IDCURSO, 
                C.nome AS NOME, 
                C.descricao AS DESCRICAO,
                C.idCoordenador AS IDCOORDENADOR
            FROM curso C
            WHERE C.status = 'A' 
                $filtroQuery";

    $resultCurso = $pdo->query( $sqlCurso );
    $retornoCurso = $resultCurso->fetchAll(PDO::FETCH_ASSOC);

    $sqlUsuario = " SELECT  U.idUsuario AS IDUSUARIO, 
                            U.nome AS NOME
                        FROM usuario U
                        WHERE U.status = 'A' 
                            AND U.idTipoUsuario = 2";

    $resultUsuario = $pdo->query( $sqlUsuario );
    $retornoUsuario = $resultUsuario->fetchAll(PDO::FETCH_ASSOC);

    $retorno =  array(
        "CURSOS" => $retornoCurso,
        "COORDENADORES" => $retornoUsuario,
    );


}

else if ($tipo == 'buscarTurmas') {

    $sql = "SELECT 
                T.idTurma AS IDTURMA, 
                T.nome AS NOME, 
                T.status AS STATUS
            FROM turma T
            WHERE T.status = 'A'";

    $result = $pdo->query( $sql );
    $retorno = $result->fetchAll(PDO::FETCH_ASSOC);
}

else if ($tipo == 'buscarTurmasPorIdCurso') {

    $sqlCurso = "SELECT 
                T.idTurma AS IDTURMA, 
                T.nome AS NOME, 
                T.status AS STATUS
            FROM turma T
            INNER JOIN planoCabecalho PC ON PC.idTurma = T.idTurma
            INNER JOIN curso C ON C.idCurso = PC.idCurso
            WHERE T.status = 'A'
            AND C.idCurso = ?";

    $resultCurso = $pdo->prepare($sqlCurso);
    $resultCurso->execute([$idsCurso]);
    $retorno = $resultCurso->fetchAll(PDO::FETCH_ASSOC);
}

else if ($tipo == 'buscarDisciplinas') {

    $sql = "SELECT 
                PC.idPlanoCabecalho AS IDDISCIPLINA, 
                PC.componenteCurricular AS NOME, 
                C.nome AS CURSO,
                T.nome AS TURMA, 
                (   SELECT 
                        NOME 
                    FROM usuario U 
                    WHERE U.idUsuario = C.idCoordenador
                ) AS COORDENADOR,
                (   SELECT 
                        NOME 
                    FROM usuario U 
                    WHERE U.idUsuario = PC.idProfessor
                ) AS PROFESSOR,
                PC.status AS STATUS
            FROM planocabecalho PC
            INNER JOIN curso C ON C.idCurso = PC.idCurso
            INNER JOIN turma T ON T.idTurma = PC.idTurma
            WHERE PC.status = 'A'";

    $result = $pdo->query( $sql );
    $retorno = $result->fetchAll(PDO::FETCH_ASSOC);
}

else if ($tipo == 'buscarDisciplinasPorIdTurma') {

    $sql = "SELECT 
                PCA.nome AS NOME
            FROM planocabecalho PC
            INNER JOIN PlanoCorpoAulas PCA ON PCA.IdPlanoCabecalho = PC.IdPlanoCabecalho
            INNER JOIN turma T ON T.idTurma = PC.idTurma
            WHERE PC.status = 'A'
            AND T.IDTURMA = ?
            AND PC.IDCURSO = ?
            ";
    $result = $pdo->prepare($sql);
    $result->execute([$idsTurma, $idsCurso]);
    $retorno = $result->fetchAll(PDO::FETCH_ASSOC);

}


else if ($tipo == 'editarUsuario') {

    $sql = "UPDATE usuario
            SET email = ?, idTipoUsuario = ?
            WHERE idUsuario = ?;";
    $result = $pdo->prepare($sql);
    $result->execute([$email, $tipoUsuario, $idsUsuario]);
    $retorno = 'Alterado com sucesso';
}

else if ($tipo == 'apagarUsuario') {

    $sqlCurso = " SELECT 
                        C.idCoordenador AS IDUSUARIO
                    FROM curso C
                    WHERE C.idCoordenador = ?";
    $resultCurso = $pdo->prepare($sqlCurso);
    $resultCurso->execute([$idsUsuario]);
    $retornoCurso = $resultCurso->fetchAll(PDO::FETCH_ASSOC);

    $sqlPlanoAula = " SELECT 
                PC.idProfessor AS IDUSUARIO
            FROM planocabecalho PC
            WHERE PC.idProfessor = ?";
    $resultPlanoAula = $pdo->prepare($sqlPlanoAula);
    $resultPlanoAula->execute([$idsUsuario]);
    $retornoPlanoAula = $resultPlanoAula->fetchAll(PDO::FETCH_ASSOC);
    
    $sqlUsuario = " SELECT 
                        U.idUsuario AS IDUSUARIO
                    FROM usuario U
                    WHERE U.idUsuario = ?";

    $resultUsuario = $pdo->prepare($sqlUsuario);
    $resultUsuario->execute([$idsUsuario]);
    $retornoUsuario = $resultUsuario->fetchAll(PDO::FETCH_ASSOC);

    if (empty($retornoUsuario)) {
        $retorno = 'Este usuário não existe';
    } else if(!empty($retornoCurso)) {
        $retorno = 'O usuário selecionado está vinculado a um curso';
    } else if(!empty($retornoPlanoAula)) {
        $retorno = 'O usuário selecionado está vinculado a um plano de aula';
    } else {
        $sql = "DELETE 
        FROM usuario
        WHERE idUsuario = ?;";
        $result = $pdo->prepare($sql);
        $result->execute([$idsUsuario]);
        $retorno = 'Usuário apagado com sucesso!';
    }

}

else if ($tipo == 'editarCurso') {

    $sql = "UPDATE curso
            SET idCoordenador = ?
            WHERE idCurso = ?;";
    $result = $pdo->prepare($sql);
    $result->execute([$idsUsuario, $idsCurso]);
    $retorno = 'Alterado com sucesso';
}

else if ($tipo == 'apagarCurso') {

    $sqlPlanoAula = " SELECT 
                PC.idCurso AS IDCURSO
            FROM planocabecalho PC
            WHERE PC.idCurso = ?";
    $resultPlanoAula = $pdo->prepare($sqlPlanoAula);
    $resultPlanoAula->execute([$idsCurso]);
    $retornoPlanoAula = $resultPlanoAula->fetchAll(PDO::FETCH_ASSOC);

    $sqlCurso = " SELECT 
                        C.idCurso AS IDCURSO
                    FROM curso C
                    WHERE C.idCurso = ?";

    $resultCurso = $pdo->prepare($sqlCurso);
    $resultCurso->execute([$idsCurso]);
    $retornoCurso = $resultCurso->fetchAll(PDO::FETCH_ASSOC);

    if (empty($retornoCurso)) {
        $retorno = 'Este curso não existe';
    } else if(!empty($retornoPlanoAula)) {
        $retorno = 'O curso selecionado está vinculado a um plano de aula';
    } else {
        $sql = "DELETE 
        FROM curso
        WHERE idCurso = ?;";
        $result = $pdo->prepare($sql);
        $result->execute([$idsCurso]);
        $retorno = 'Curso apagado com sucesso!';
    }

}

echo json_encode($retorno);
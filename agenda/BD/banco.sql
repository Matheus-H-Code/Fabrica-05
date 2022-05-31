DROP DATABASE IF EXISTS calendarioEscolar;
CREATE DATABASE calendarioEscolar;
use calendarioEscolar;

DROP TABLE IF EXISTS TipoUsuario;
CREATE TABLE `TipoUsuario` (
  `idTipoUsuario` int primary key auto_increment,
  `nome` varchar(30),
  `status` char(2),
  `dataInsercao` datetime,
  `usuarioInsercao` datetime,
  `dataAlteracao` datetime,
  `usuarioAlteracao` datetime
)engine=InnoDB;

DROP TABLE IF EXISTS Usuario;
CREATE TABLE `Usuario` (
  `idUsuario` int primary key auto_increment,
  `nome` varchar(30),
  `email` varchar(30) unique,
  `senha` varchar(30),
  `idTipoUsuario` int,
  `status` char(2),
  `dataInsercao` datetime,
  `usuarioInsercao` datetime,
  `dataAlteracao` datetime,
  `usuarioAtualizacao` datetime,

  FOREIGN KEY (`idTipoUsuario`) REFERENCES `TipoUsuario`(`idTipoUsuario`)
)engine=InnoDB;

DROP TABLE IF EXISTS DiaSemana;
CREATE TABLE `DiaSemana` (
  `idDiaSemana` int primary key auto_increment,
  `nome` varchar(15)
)engine=InnoDB;

DROP TABLE IF EXISTS Disponibilidade;
CREATE TABLE `Disponibilidade` (
  `idDisponibilidade` int primary key auto_increment,
  `horarioInicio` time,
  `horarioFim` time,
  `idUsuario` int,
  `idDiaSemana` int,

  FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`idUsuario`),
  FOREIGN KEY (`idDiaSemana`) REFERENCES `DiaSemana`(`idDiaSemana`)
)engine=InnoDB;

DROP TABLE IF EXISTS Curso;
CREATE TABLE `Curso` (
  `idCurso` int primary key auto_increment,
  `nome` varchar(100),
  `descricao` varchar(100),
  `idCoordenador` int,
  `status` char(2),
  `dataInsercao` datetime,
  `usuarioInsercao` datetime,
  `dataAlteracao` datetime,
  `usuarioAlteracao` datetime,

  FOREIGN KEY (`idCoordenador`) REFERENCES `Usuario`(`idUsuario`)
)engine=InnoDB;

DROP TABLE IF EXISTS Turma;
CREATE TABLE `Turma` (
  `idTurma` int primary key auto_increment,
  `nome` varchar(30),
  `status` char(2),
  `usuarioInsercao` datetime,
  `dataInsercao` datetime,
  `usuarioAlteracao` datetime,
  `dataAlteracao` datetime
)engine=InnoDB;

DROP TABLE IF EXISTS Periodo;
CREATE TABLE `Periodo` (
  `idPeriodo` int primary key auto_increment,
  `nome` varchar(30),
  `inicioPeriodo` time,
  `fimPeriodo` time,
  `status` char(2),
  `usuarioInsercao` datetime,
  `dataInsercao` datetime,
  `usuarioAlteracao` datetime,
  `dataAlteracao` datetime
)engine=InnoDB;

DROP TABLE IF EXISTS PlanoCabecalho;
CREATE TABLE `PlanoCabecalho` (
  `idPlanoCabecalho` int primary key auto_increment,
  `idCurso` int,
  `idProfessor` int,
  `idTurma` int,
  `componenteCurricular` varchar(50),
  `idPeriodo` int,
  `cargaTeoria` int,
  `cargaPratica` int,
  `validacaoNDE` int,
  `numeroDocumento` int,
  `status` char(2),
  `dataInsercao` datetime,
  `usuarioInsercao` datetime,
  `dataAlteracao` datetime,
  `usuarioAlteracao` datetime,

  FOREIGN KEY (`idProfessor`) REFERENCES `Usuario`(`idUsuario`),
  FOREIGN KEY (`idCurso`) REFERENCES `Curso`(`idCurso`)
)engine=InnoDB;

DROP TABLE IF EXISTS PlanoCorpoAulas;
CREATE TABLE `PlanoCorpoAulas` (
  `idPlanoCorpoAula` int primary key auto_increment,
  `IdPlanoCabecalho` int,
  `nome` varchar(50),
  `objetivoAprendizagem` text,
  `estrategiaEnsino` text,
  `atividadeDesenvolvida` text,
  `recursos` text,
  `cargaPratica` varchar(500),
  `tipoAula` varchar(50),
  `roteiroPratica` varchar(50),
  `inicioAula` datetime,
  `fimAula` datetime,
  `status` char(2),
  `usuarioInsercao` datetime,
  `dataInsercao` datetime,
  `usuarioAlteracao` datetime,
  `dataAlteracao` datetime,

  FOREIGN KEY (`IdPlanoCabecalho`) REFERENCES `PlanoCabecalho`(`IdPlanoCabecalho`)
)engine=InnoDB;

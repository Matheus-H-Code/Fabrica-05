INSERT INTO TipoUsuario VALUES
(0, 'Administrador', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00'),
(0, 'Coordenador', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00'),
(0, 'Professor', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO Usuario VALUES
(0, 'Lucas', 'lucas@gmail.com', '123teste', '2', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00'),
(0, 'Crystian', 'crystian@gmail.com', '123teste', '3', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00'),
(0, 'Matheus', 'matheus@gmail.com', '123teste', '2', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00'),
(0, 'Ana Julia', 'ana@gmail.com', '123teste', '2', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO DiaSemana VALUES
(0, 'Segunda-feira'),
(0, 'Terça-feira'),
(0, 'Quarta-feira'),
(0, 'Quinta-feira'),
(0, 'Sexta-feira');

INSERT INTO Disponibilidade VALUES
(0, '19:00:00', '22:40:00' , 1 , 1);

INSERT INTO Curso VALUES
(0, 'Análise e desenvolvimento de sistemas', 'Ensinar o básico de POO' , '1' , 'A', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO Turma VALUES
(0, 'ADS1', 'A' , '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO Periodo VALUES
(0, 'Noturno', '19:00:00' , '22:40:00' , 'A', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO PlanoCabecalho VALUES
(0, 1, 2 , 1, 'Programação orientada a objetos', 1, '0', '0', 'Nada', 'Nada', 'A', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');

INSERT INTO PlanoCorpoAulas VALUES
(0, 1, 'Explicação sobre o tema' , 'Ensinar o básico' , 'Utilizar slides', 'Nada', 'PowerPoint', '0', 'Teórica', 'Nada', '19:00:00', '20:40:00', 'A', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00', '2022-09-10 19:00:00');
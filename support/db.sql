CREATE DATABASE mapeo;

CREATE TABLE tipos (
	id INT(5) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(64)
);

INSERT INTO tipos(nombre) VALUES
	('Asalto (sin arma)'),
	('Asalto (arma blanca)'),
    ('Asalto (arma de fuego)'),
    ('Robo (casa/oficina/local)'),
	('Robo (bicileta)'),
	('Robo (auto)'),
	('Acoso (contra mujer)'),
	('Acoso (homofobia)'),
	('Acoso (otro)');

CREATE TABLE mapeos (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	lat FLOAT(4,6) NOT NULL,
	lng FLOAT(4,6) NOT NULL,
	tipo INT(2) NOT NULL,
	fecha_hora DATETIME NOT NULL,
	created DATETIME NOT NULL
);

CREATE USER 'mapeo'@'%' IDENTIFIED BY 'password';
GRANT ALL ON mapeo.* TO 'mapeo'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
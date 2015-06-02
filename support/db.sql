CREATE TABLE tipos (
	id INT(5) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(64),
	PRIMARY KEY(id)
);

INSERT INTO tipos(nombre) VALUES
	('Asalto (sin arma)'),
	('Asalto (arma blanca)'),
    ('Asalto (arma de fuego)'),
    ('Robo (casa/oficina/local)'),
	('Robo (bicicleta)'),
	('Robo (auto)'),
	('Acoso (contra mujer)'),
	('Acoso (homofobia)'),
	('Acoso (otro)');

CREATE TABLE mapeos (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	lat VARCHAR(32) NOT NULL,
	lng VARCHAR(32) NOT NULL,
	tipo INT(2) NOT NULL,
	fecha_hora DATETIME NOT NULL,
	created DATETIME NOT NULL,
	descripcion VARCHAR(200),
	PRIMARY KEY(id)
);
CREATE TABLE IF NOT EXISTS usuario(
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    cuenta_usuario TEXT, 
    clave_usuario TEXT,
    tipo_usuario INTEGER,
    nombre_usuario TEXT,
    apellido_usuario TEXT,
    activo INTEGER
);

INSERT or IGNORE INTO usuario(id_usuario, cuenta_usuario, clave_usuario, tipo_usuario, nombre_usuario, apellido_usuario, activo) 
    VALUES (1, 'cr.gamboac', 'elseif', 1, 'Cristopher', 'Gamboa', 0);
INSERT or IGNORE INTO usuario(id_usuario, cuenta_usuario, clave_usuario, tipo_usuario, nombre_usuario, apellido_usuario, activo) 
	VALUES (2, 'na.sotop', 'rocketo', 1, 'Nataniel', 'Soto', 0);
INSERT or IGNORE INTO usuario(id_usuario, cuenta_usuario, clave_usuario, tipo_usuario, nombre_usuario, apellido_usuario, activo) 
	VALUES (3, 'fer.sepulvedac', 'challenger', 0, 'Fernando', 'Sepulveda', 0);
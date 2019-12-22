BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "TiposDeContenedores" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"Descripcion"	TEXT NOT NULL,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Contenedores" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"IdTipoContenedor"	INTEGER NOT NULL,
	"Ciudad"	TEXT NOT NULL,
	"Latitud"	REAL NOT NULL,
	"Longitud"	REAL NOT NULL,
	"Horario"	TEXT,
	FOREIGN KEY("IdTipoContenedor") REFERENCES "TiposDeContenedores"("Id"),
	PRIMARY KEY("Id" AUTOINCREMENT)
);
INSERT INTO "TiposDeContenedores" ("Id","Descripcion") VALUES (1,'Envases ligeros'),
 (2,'Papel y cartón'),
 (3,'Orgánico'),
 (4,'Vidrio'),
 (5,'Residuos'),
 (6,'Ropa'),
 (7,'Aceite');
COMMIT;

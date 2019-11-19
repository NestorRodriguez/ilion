use  ilion;



/*INSCRIPCIÓN*/
CREATE TABLE inscripcion (
  id_inscripcion INT NOT NULL  IDENTITY    PRIMARY KEY,
  nom_apel_deportista VARCHAR(50) NOT NULL,
  id_ident INT NOT NULL,
  documento VARCHAR(45) NOT NULL,
  edad VARCHAR(45) NOT NULL,
  acudiente_replegal VARCHAR(45) NOT NULL,
  telefonos VARCHAR(45) NOT NULL);
	






use shema ilion;


/*USUARIOS*/
CREATE TABLE `ilion`.`usuarios` (
  `id_usuario` INT NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `id_rol` INT NOT NULL,
  `observaciones` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`));
  
/*ROLES*/
CREATE TABLE `ilion`.`roles` (
  `id_rol` INT NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `observaciones` VARCHAR(45) NULL,
  PRIMARY KEY (`id_perfil`));

/*INSCRIPCIÓN*/
CREATE TABLE `ilion`.`inscripcion` (
  `id_inscripcion` INT NOT NULL AUTO_INCREMENT,
  `nom_apel_deportista` VARCHAR(45) NOT NULL,
  `id_ident` INT NOT NULL,
  `documento` VARCHAR(45) NOT NULL,
  `edad` VARCHAR(45) NOT NULL,
  `acudiente_replegal` VARCHAR(45) NOT NULL,
  `telefonos` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_inscripcion`));
	
/*TIPO IDENTIFICACION*/
CREATE TABLE `ilion`.`tipo_identificacion` (
  `id_ident` INT NOT NULL,
  `nom_ident` VARCHAR(45) NULL,
  PRIMARY KEY (`id_ident`));

/*REGISTRO*/

CREATE TABLE `ilion`.`registro` (
  `id_registro` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `id_ident` INT NULL,
  `num_ident` VARCHAR(45) NULL,
  `contraseña` VARCHAR(45) NULL,
  `confirma_contraseña` VARCHAR(45) NULL,
  PRIMARY KEY (`id_registro`));


/*CATEGORIAS*/

CREATE TABLE `ilion`.`categorias` (
  `id_categorias` INT NOT NULL,
  `nom_categorias` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categorias`));




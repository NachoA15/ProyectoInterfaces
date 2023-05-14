-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bdinterfaces
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bdinterfaces` ;

-- -----------------------------------------------------
-- Schema bdinterfaces
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bdinterfaces` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bdinterfaces` ;

-- -----------------------------------------------------
-- Table `bdinterfaces`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bdinterfaces`.`usuario` ;

CREATE TABLE IF NOT EXISTS `bdinterfaces`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `correo` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `telefono` VARCHAR(13) NULL DEFAULT NULL,
  `valoracion` DOUBLE NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  `localizacion` VARCHAR(50) NOT NULL,
  `imagen` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE,
  UNIQUE INDEX `correo` (`correo` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 154
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


ALTER TABLE `bdinterfaces`.`usuario` AUTO_INCREMENT=0;

-- -----------------------------------------------------
-- Table `bdinterfaces`.`anuncio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bdinterfaces`.`anuncio` ;

CREATE TABLE IF NOT EXISTS `bdinterfaces`.`anuncio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_subida` DATETIME NOT NULL,
  `reservado` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `descripcion` VARCHAR(300) NULL DEFAULT NULL,
  `vendedor` INT NOT NULL,
  `imagen` VARCHAR(800) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `vendedor_idx` (`vendedor` ASC) VISIBLE,
  CONSTRAINT `vendedor`
    FOREIGN KEY (`vendedor`)
    REFERENCES `bdinterfaces`.`usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

ALTER TABLE `bdinterfaces`.`anuncio` AUTO_INCREMENT=0;

-- -----------------------------------------------------
-- Table `bdinterfaces`.`comentario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bdinterfaces`.`comentario` ;

CREATE TABLE IF NOT EXISTS `bdinterfaces`.`comentario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `autor` INT NOT NULL,
  `fecha_publicacion` DATETIME NOT NULL,
  `texto` VARCHAR(300) NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `autor_idx` (`autor` ASC) VISIBLE,
  INDEX `usuario_idx` (`usuario` ASC) VISIBLE,
  CONSTRAINT `autor`
    FOREIGN KEY (`autor`)
    REFERENCES `bdinterfaces`.`usuario` (`id`),
  CONSTRAINT `usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `bdinterfaces`.`usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

ALTER TABLE `bdinterfaces`.`comentario` AUTO_INCREMENT=0;

-- -----------------------------------------------------
-- Table `bdinterfaces`.`favoritos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bdinterfaces`.`favoritos` ;

CREATE TABLE IF NOT EXISTS `bdinterfaces`.`favoritos` (
  `idUsuario` INT NOT NULL,
  `idAnuncio` INT NOT NULL,
  PRIMARY KEY (`idUsuario`, `idAnuncio`),
  INDEX `anuncio_id_idx` (`idAnuncio` ASC) VISIBLE,
  CONSTRAINT `anuncio_id`
    FOREIGN KEY (`idAnuncio`)
    REFERENCES `bdinterfaces`.`anuncio` (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `bdinterfaces`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

ALTER TABLE `bdinterfaces`.`favoritos` AUTO_INCREMENT=0;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

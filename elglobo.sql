-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 27, 2025 at 12:39 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elglobo`
--

-- --------------------------------------------------------

--
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
CREATE TABLE IF NOT EXISTS `actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `dia` varchar(50) NOT NULL,
  `horario` enum('MATUTINO','VESPERTINO','NOCTURNO') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `actividades`
--

INSERT INTO `actividades` (`id`, `nombre`, `dia`, `horario`) VALUES
(1, 'Tenis', 'Martes - Miercoles', 'MATUTINO');

-- --------------------------------------------------------

--
-- Table structure for table `casilleros`
--

DROP TABLE IF EXISTS `casilleros`;
CREATE TABLE IF NOT EXISTS `casilleros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `socio_id` int NOT NULL,
  `numero_casillero` int NOT NULL,
  `fecha_alquiler` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `socio_id` (`socio_id`),
  UNIQUE KEY `numero_casillero` (`numero_casillero`)
) ;

-- --------------------------------------------------------

--
-- Table structure for table `cuotas`
--

DROP TABLE IF EXISTS `cuotas`;
CREATE TABLE IF NOT EXISTS `cuotas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `socio_id` int NOT NULL,
  `mes` year NOT NULL,
  `estado` enum('PAGA','IMPAGA') NOT NULL DEFAULT 'IMPAGA',
  `monto` decimal(10,2) NOT NULL,
  `recargo` decimal(10,2) DEFAULT '0.00',
  `cobrador` enum('Pérez','García','Rodríguez','Club') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `socio_id` (`socio_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `socios`
--

DROP TABLE IF EXISTS `socios`;
CREATE TABLE IF NOT EXISTS `socios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` varchar(15) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` text,
  `categoria` enum('CADETE','ACTIVO_MASCULINO','ACTIVO_FEMENINO','VITALICIO') NOT NULL,
  `zona_cobranza` int NOT NULL,
  `antiguedad` int NOT NULL,
  `estado` enum('ACTIVO','MOROSO','SUSPENDIDO') NOT NULL DEFAULT 'ACTIVO',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `socios`
--

INSERT INTO `socios` (`id`, `nombre`, `apellido`, `dni`, `fecha_nacimiento`, `telefono`, `direccion`, `categoria`, `zona_cobranza`, `antiguedad`, `estado`) VALUES
(1, 'Jeremias', 'Lajas', '42125543', '1998-08-22', '3432452355', 'Falucho 1066', 'ACTIVO_MASCULINO', 0, 5, 'ACTIVO'),
(5, 'Maricel', 'Martiez', '23333444', '2025-02-12', '3476623563', 'Falucho 1066', 'ACTIVO_FEMENINO', 1, 5, 'ACTIVO'),
(4, 'Camila', 'Lajas', '40330333', '0000-00-00', '', '', 'ACTIVO_FEMENINO', 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `socios_actividades`
--

DROP TABLE IF EXISTS `socios_actividades`;
CREATE TABLE IF NOT EXISTS `socios_actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `socio_id` int NOT NULL,
  `actividad_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `socio_id` (`socio_id`),
  KEY `actividad_id` (`actividad_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

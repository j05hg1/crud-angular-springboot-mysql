# crud-angular-springboot-mysql
Proyecto de integración de funcionalidad de crud, backend Api en springboot y, frontend cliente consumido por angular. Como objetivo de presentación para prueba tecnica

Proyecto que integra un servicio API-REST creado con Spring-Boot. (Backend)
El proyecto en angular es el cliente que consume el API. (Frontend)

En el repositorio se alojan 2 carpetas:
* Api -> thebook: es el proyecto backend creado en Java Spring-Boot
* cliente -> TheBook: es el proyecto frontend creado en angular.

### Requerimientos
* Java 17 - 22
* Servidor MySQL (sirve con Xampp PhpMyAdmin)
* Maven 
* Visual Studio Code con el plugin Spring Boot y los demas paquetes que solicitará, ó Eclipse con el plugin Spring Boot, ó Spring Tool Suit 4.

### Configuración y Ejecución.
* Para compilar y ejecutar el proyecto API utilice Maven, esto mediante el VS Code o Spring Tool Suit o eclipse. Esto iniciara el servicio usando el puerto 8080 por defecto.
* El proyecto (Backend) se conectará a la base de datos MySQL.
* Para compilar y ejecutar el proyecto cliente debe instalar node (Angular). esto mediante el VS Code (mayor facilidad).

### Script para la creación de la Base de Datos y las Tablas en MySQL.

**Nombre de la Base de Datos:** thebook

```sql
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-07-2024 a las 06:32:57
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `thebook`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`) VALUES
(1, 'Comedia'),
(2, 'Terror'),
(3, 'Ficción'),
(4, 'Suspenso'),
(5, 'Romance'),
(6, 'Drama'),
(7, 'Ensayos'),
(8, 'Fantasía'),
(9, 'Historia'),
(10, 'Filosofía'),
(11, 'Thriller Histórico'),
(12, 'Intriga'),
(13, 'Misterio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id_libro` int(11) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id_libro`, `autor`, `titulo`, `id_categoria`) VALUES
(1, 'Dan Brown', 'El Código Da Vinci', 11),
(2, 'Dan Brown', 'Origen', 4),
(3, 'Dan Brown', 'Inferno', 12),
(4, 'Dan Brown', 'Ángeles y demonios', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `FKj7xsmap3vmoyu7ly8wqe0red9` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `FKj7xsmap3vmoyu7ly8wqe0red9` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```


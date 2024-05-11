-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.8.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table mirage.admins
CREATE DATABASE `mirage`;
USE `mirage`;

CREATE TABLE IF NOT EXISTS `admins` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`a_id`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table mirage.admins: ~0 rows (approximately)
INSERT INTO `admins` (`a_id`, `email`, `password`, `name`) VALUES
	(1, 'admin@gmail.com', 'admin@123', 'Tony');

-- Dumping structure for table mirage.bookings
CREATE TABLE IF NOT EXISTS `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_date` varchar(50) NOT NULL,
  `u_id` int(11) NOT NULL,
  `v_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mirage.bookings: ~1 rows (approximately)
INSERT INTO `bookings` (`booking_id`, `booking_date`, `u_id`, `v_id`, `status`) VALUES
	(3, '10/05/2024', 1, 4, 2),
	(4, '10/05/2024', 1, 7, 1);

-- Dumping structure for table mirage.users
CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mirage.users: ~1 rows (approximately)
INSERT INTO `users` (`uid`, `email`, `password`, `name`) VALUES
	(1, '123@gmail.com', '1234567', 'Tony');

-- Dumping structure for table mirage.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `v_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `segment` varchar(55) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT 0,
  `color` varchar(55) NOT NULL DEFAULT '0',
  `transmission` varchar(55) NOT NULL DEFAULT '0',
  `fuel` varchar(55) NOT NULL DEFAULT '0',
  `odometer` int(11) NOT NULL DEFAULT 0,
  `registration` int(11) NOT NULL DEFAULT 0,
  `owner` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mirage.vehicles: ~3 rows (approximately)
INSERT INTO `vehicles` (`v_id`, `brand`, `model`, `segment`, `price`, `color`, `transmission`, `fuel`, `odometer`, `registration`, `owner`) VALUES
	(3, 'Rolls Royce', 'Ghost', 'SUV', 10000, 'English White', 'Automatic', 'Petrol', 10000, 2022, 1),
	(4, 'BMW', 'M3', 'Sedan', 10000, 'Blue', 'Manual', 'Petrol', 10000, 2022, 2),
	(7, 'Maruti', 'Alto 800', '0', 10000, 'White', '1', '0', 10000, 2022, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

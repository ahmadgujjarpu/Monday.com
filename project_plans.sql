-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2022 at 08:36 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mondaycom_clone`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_plans`
--

CREATE TABLE `project_plans` (
  `Project_title` varchar(100) NOT NULL,
  `project_item` varchar(50) NOT NULL,
  `person` varchar(50) NOT NULL,
  `dates` date NOT NULL,
  `statuses` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_plans`
--

INSERT INTO `project_plans` (`Project_title`, `project_item`, `person`, `dates`, `statuses`) VALUES
('Airbnb', 'Frontend', 'dilawar', '2022-02-05', 'Working on it'),
('Airbnb', 'API', 'Ahsan', '2022-02-05', 'Working on it'),
('Airbnb', 'Database', 'Hamza', '2022-02-05', 'Working on it'),
('Twitter', 'API', 'Usama', '2022-02-05', 'Working on it'),
('Twitter', 'Frontend', 'Tanzeela', '2022-02-05', 'Working on it'),
('Twitter', 'Database', 'Allah dita', '2022-02-05', 'Working on it');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

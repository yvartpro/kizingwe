/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.4.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: kizingwe_db
-- ------------------------------------------------------
-- Server version	11.4.5-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `daily_stat`
--

DROP TABLE IF EXISTS `daily_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `initial` int(11) DEFAULT 0,
  `final` int(11) DEFAULT 0,
  `stat_date` date DEFAULT curdate(),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `plus` int(11) DEFAULT 0,
  `minus` int(11) DEFAULT 0,
  `prod_name` varchar(50) NOT NULL,
  `price` decimal(10,2) DEFAULT 0.00,
  `pau` decimal(10,2) DEFAULT 0.00,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stat_date` (`stat_date`,`product_id`),
  KEY `stat_fk_product` (`product_id`),
  CONSTRAINT `stat_fk_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_stat`
--

LOCK TABLES `daily_stat` WRITE;
/*!40000 ALTER TABLE `daily_stat` DISABLE KEYS */;
INSERT INTO `daily_stat` VALUES
(1,9,0,0,'2025-03-09','2025-03-17 11:07:26',37,2,'Primus black',0.00,0.00),
(2,11,0,0,'2025-03-09','2025-03-17 11:07:26',19,1,'Amstel',0.00,0.00),
(3,12,0,0,'2025-03-09','2025-03-17 11:07:26',40,0,'Fanta',0.00,0.00),
(28,9,0,35,'2025-03-10','2025-03-18 03:52:55',37,2,'Primus black',0.00,0.00),
(29,11,12,26,'2025-03-10','2025-03-18 03:52:55',19,5,'Amstel',0.00,0.00),
(30,12,0,39,'2025-03-10','2025-03-18 03:52:55',40,1,'Fanta',0.00,0.00),
(42,9,0,35,'2025-03-11','2025-03-18 04:34:20',37,2,'Primus black',3500.00,0.00),
(43,11,12,26,'2025-03-11','2025-03-18 04:34:20',19,5,'Amstel',0.00,0.00),
(44,12,0,39,'2025-03-11','2025-03-18 04:34:20',40,1,'Fanta',0.00,0.00),
(46,9,0,30,'2025-03-12','2025-03-18 04:42:31',37,7,'Primus black',3500.00,3000.00),
(47,11,12,24,'2025-03-12','2025-03-18 04:42:31',19,7,'Amstel',4000.00,3500.00),
(48,12,0,39,'2025-03-12','2025-03-18 04:42:31',40,1,'Fanta',2000.00,1600.00),
(50,9,0,30,'2025-03-13','2025-03-18 04:44:41',37,7,'Primus black',3500.00,3000.00),
(51,11,12,22,'2025-03-13','2025-03-18 04:44:41',19,9,'Amstel',4000.00,3500.00),
(52,12,0,37,'2025-03-13','2025-03-18 04:44:41',40,3,'Fanta',2000.00,1600.00),
(55,9,0,28,'2025-03-14','2025-03-18 04:50:59',37,9,'Primus black',3500.00,3000.00),
(56,11,12,19,'2025-03-14','2025-03-18 04:50:59',19,12,'Amstel',4000.00,3500.00),
(57,12,0,34,'2025-03-14','2025-03-18 04:50:59',40,6,'Fanta',2000.00,1600.00),
(58,9,28,24,'2025-03-15','2025-03-18 04:52:15',0,4,'Primus black',3500.00,3000.00),
(59,11,19,16,'2025-03-15','2025-03-18 04:52:15',0,3,'Amstel',4000.00,3500.00),
(60,12,34,29,'2025-03-15','2025-03-18 04:52:15',0,5,'Fanta',2000.00,1600.00),
(61,9,24,22,'2025-03-16','2025-03-18 04:54:03',0,2,'Primus black',3500.00,3000.00),
(62,11,16,14,'2025-03-16','2025-03-18 04:54:03',0,2,'Amstel',4000.00,3500.00),
(63,12,29,29,'2025-03-16','2025-03-18 04:54:03',0,0,'Fanta',2000.00,1600.00),
(64,9,22,32,'2025-03-17','2025-03-18 04:57:35',10,0,'Primus black',3500.00,3000.00),
(65,11,14,24,'2025-03-17','2025-03-18 04:57:35',10,0,'Amstel',4000.00,3500.00),
(66,12,29,49,'2025-03-17','2025-03-18 04:57:35',24,4,'Fanta',2000.00,1600.00),
(67,9,32,30,'2025-03-18','2025-03-18 05:07:04',0,2,'Primus',3500.00,3000.00),
(68,11,24,24,'2025-03-18','2025-03-18 05:07:04',0,0,'Amstel',4000.00,3500.00),
(69,12,49,49,'2025-03-18','2025-03-18 05:07:04',0,0,'Fanta',2000.00,1600.00),
(70,13,0,38,'2025-03-18','2025-03-18 05:07:04',40,2,'Bechou',3000.00,2500.00),
(121,9,30,23,'2025-03-20','2025-03-20 16:53:40',0,7,'Primus',3500.00,3000.00),
(122,11,24,19,'2025-03-20','2025-03-20 16:53:40',0,5,'Amstel',4000.00,3500.00),
(123,12,49,47,'2025-03-20','2025-03-20 16:53:40',0,2,'Fanta',2000.00,1600.00),
(124,13,38,33,'2025-03-20','2025-03-20 16:53:40',0,5,'Bechou',3000.00,2500.00),
(125,14,0,78,'2025-03-20','2025-03-20 16:53:40',80,2,'Royale',4500.00,4000.00),
(132,9,23,23,'2025-03-21','2025-03-20 22:29:25',0,0,'Primus',3500.00,3000.00),
(133,11,19,19,'2025-03-21','2025-03-20 22:29:25',0,0,'Amstel',4000.00,3500.00),
(134,12,47,47,'2025-03-21','2025-03-20 22:29:25',0,0,'Fanta',2000.00,1600.00),
(135,13,33,33,'2025-03-21','2025-03-20 22:29:25',0,0,'Bechou',3000.00,2500.00),
(136,14,78,78,'2025-03-21','2025-03-20 22:29:25',0,0,'Royale',4500.00,4000.00),
(186,9,23,28,'2025-03-26','2025-03-26 08:59:36',10,5,'Primus',3500.00,3000.00),
(187,11,19,15,'2025-03-26','2025-03-26 08:59:36',0,4,'Amstel',4000.00,3500.00),
(188,12,47,47,'2025-03-26','2025-03-26 08:59:36',0,0,'Fanta',2000.00,1600.00),
(189,13,33,32,'2025-03-26','2025-03-26 08:59:36',0,1,'Bechou',3000.00,2500.00),
(190,14,78,78,'2025-03-26','2025-03-26 08:59:36',0,0,'Royale',4500.00,4000.00);
/*!40000 ALTER TABLE `daily_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `waiter_id` int(11) NOT NULL,
  `total` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `waiter_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES
(9,23,0,'2025-03-16 19:21:40',NULL),
(10,0,7000,'2025-03-16 19:40:04',NULL),
(11,23,3500,'2025-03-16 19:40:51','Yves Nshemezimana'),
(13,0,3500,'2025-03-16 21:32:46',NULL),
(14,23,14000,'2025-03-16 21:33:09','Yves Nshemezimana'),
(16,25,7000,'2025-03-17 10:19:29','Kamunyana Janviere'),
(17,23,0,'2025-03-17 11:11:03','Yves Nshemezimana'),
(18,23,11000,'2025-03-18 04:41:24','Yves Nshemezimana'),
(19,23,14500,'2025-03-18 04:41:38','Yves Nshemezimana'),
(20,23,4000,'2025-03-18 04:43:58','Yves Nshemezimana'),
(21,23,8000,'2025-03-18 04:44:07','Yves Nshemezimana'),
(22,23,25000,'2025-03-18 04:50:43','Yves Nshemezimana'),
(23,23,36000,'2025-03-18 04:52:00','Yves Nshemezimana'),
(24,23,15000,'2025-03-18 04:53:56','Yves Nshemezimana'),
(25,23,8000,'2025-03-18 04:56:44','Yves Nshemezimana'),
(26,23,13000,'2025-03-18 05:05:41','Yves Nshemezimana'),
(27,0,3500,'2025-03-18 08:21:48',NULL),
(28,0,3500,'2025-03-18 08:22:39',NULL),
(29,23,3500,'2025-03-18 08:22:45','Yves Nshemezimana'),
(30,25,28500,'2025-03-18 08:26:26','Kamunyana Janviere'),
(31,23,9000,'2025-03-18 08:27:49','Yves Nshemezimana'),
(32,23,24500,'2025-03-20 06:36:29','Yves Nshemezimana'),
(33,23,10500,'2025-03-26 07:53:14','Yves Nshemezimana'),
(34,0,26000,'2025-03-26 08:58:53',NULL),
(35,23,10000,'2025-03-26 10:54:39','Yves Nshemezimana'),
(36,25,10500,'2025-03-26 10:56:28','Kamunyana Janviere'),
(37,23,8000,'2025-03-26 11:03:26','Yves Nshemezimana'),
(38,25,25000,'2025-03-26 11:08:00','Kamunyana Janviere'),
(39,23,38000,'2025-03-26 11:10:28','Yves Nshemezimana'),
(40,23,4000,'2025-03-27 07:05:09','Yves Nshemezimana');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `is_superuser` tinyint(1) DEFAULT 0,
  `status` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES
(1,'Admin','admin','69667239','$2y$12$cXLij3XC8bzpk7SyLzZhnuWyPVbfxBR/7ogxao/x4BMCAsxgz42dG','2025-01-06 07:46:15',1,1),
(2,'Yves Nshemezimana ','yvesnhemez','69667239','$2y$12$upP0r8kxhFP4dyuaFZRZnOyxnQ8eVJtYSsJvtlx2ZFseJbEonI.um','2025-01-06 07:51:37',0,1),
(3,'Thh','Hbh','6699','$2y$12$Y6Doqi7ZR4tDkKU6M6ZrgOEP9BagOlG0w4fBbjaLlhRXppwUk5GTe','2025-01-06 10:46:20',0,0),
(7,'Yves NShemezimana','yvart','69667239','$2y$10$xLBbsyJr6g65iUPN4/OW5.0ry6pxZoTeVJSUUbr5fXnlviqUc0y6i','2025-03-12 20:01:29',0,1),
(9,'Yves Nshemezimana','yvartpro','69667239','$2y$10$2oW5pRbLv9wZciRajsKl4OR60VAyPd.pYz3KcetMpJdTIRaFD1ZSm','2025-03-13 13:51:20',0,1),
(13,'Kakunze Tresor','kakunze','674976588','$2y$10$00hEGwX8LW0Hb3zYYHBtJ.Sgu4sl88MSFV16ooJ2NYJR6Gmih9QKu','2025-03-13 18:04:28',0,1),
(14,'','','','$2y$10$Xa71JucfcbBKXxDsAJBLS.rH4S1AUMQW5NLupyt6gjnjDcT6EoTRe','2025-03-13 18:36:05',0,1),
(21,'yves','yart','23456','$2y$10$HpkyT/DZyz7iAjPAeyjEkuHVqoL/VPHBAxRvdzK2YNIxykHh/OZCS','2025-03-21 04:26:33',0,1),
(24,'Igiraneza Manasseh','manasseh','67645451','$2y$12$Bxn00k1Yf8dscdWf7.r50OklgNTei9epnm9LNUVRxbIqOSM0uapji','2025-03-26 11:15:41',0,1);
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `prod_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `invoice_fk_orders` (`invoice_id`),
  KEY `product_fk_orders` (`product_id`),
  CONSTRAINT `invoice_fk_orders` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_fk_orders` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES
(1,9,9,2,0.00,'2025-03-16 19:21:40','Primus'),
(2,10,9,2,3500.00,'2025-03-16 19:40:04','Primus'),
(3,11,9,1,3500.00,'2025-03-16 19:40:51','Primus'),
(4,13,9,1,3500.00,'2025-03-16 21:32:46','Primus black'),
(5,14,9,2,3500.00,'2025-03-16 21:33:09','Primus black'),
(6,14,9,2,3500.00,'2025-03-16 21:33:09','Primus black'),
(7,16,9,2,3500.00,'2025-03-17 10:19:29','Primus black'),
(8,16,11,1,0.00,'2025-03-17 10:19:29','Amstel'),
(9,17,12,1,0.00,'2025-03-17 11:11:03','Fanta'),
(10,17,11,4,0.00,'2025-03-17 11:11:03','Amstel'),
(11,18,9,2,3500.00,'2025-03-18 04:41:24','Primus black'),
(12,18,11,1,4000.00,'2025-03-18 04:41:24','Amstel'),
(13,19,9,2,3500.00,'2025-03-18 04:41:38','Primus black'),
(14,19,11,1,4000.00,'2025-03-18 04:41:38','Amstel'),
(15,19,9,1,3500.00,'2025-03-18 04:41:38','Primus black'),
(16,20,11,1,4000.00,'2025-03-18 04:43:58','Amstel'),
(17,21,11,1,4000.00,'2025-03-18 04:44:07','Amstel'),
(18,21,12,2,2000.00,'2025-03-18 04:44:07','Fanta'),
(19,22,9,2,3500.00,'2025-03-18 04:50:43','Primus black'),
(20,22,11,3,4000.00,'2025-03-18 04:50:43','Amstel'),
(21,22,12,3,2000.00,'2025-03-18 04:50:43','Fanta'),
(22,23,9,2,3500.00,'2025-03-18 04:52:00','Primus black'),
(23,23,11,3,4000.00,'2025-03-18 04:52:00','Amstel'),
(24,23,12,3,2000.00,'2025-03-18 04:52:00','Fanta'),
(25,23,9,2,3500.00,'2025-03-18 04:52:00','Primus black'),
(26,23,12,2,2000.00,'2025-03-18 04:52:00','Fanta'),
(27,24,9,2,3500.00,'2025-03-18 04:53:56','Primus black'),
(28,24,11,2,4000.00,'2025-03-18 04:53:56','Amstel'),
(29,25,12,4,2000.00,'2025-03-18 04:56:44','Fanta'),
(30,26,9,2,3500.00,'2025-03-18 05:05:41','Primus'),
(31,26,13,2,3000.00,'2025-03-18 05:05:41','Bechou'),
(32,27,9,1,3500.00,'2025-03-18 08:21:48','Primus'),
(33,28,9,1,3500.00,'2025-03-18 08:22:39','Primus'),
(34,29,9,1,3500.00,'2025-03-18 08:22:45','Primus'),
(35,30,9,3,3500.00,'2025-03-18 08:26:26','Primus'),
(36,30,11,3,4000.00,'2025-03-18 08:26:26','Amstel'),
(37,30,13,2,3000.00,'2025-03-18 08:26:26','Bechou'),
(38,31,14,2,4500.00,'2025-03-18 08:27:49','Royale'),
(39,32,9,1,3500.00,'2025-03-20 06:36:29','Primus'),
(40,32,11,2,4000.00,'2025-03-20 06:36:29','Amstel'),
(41,32,12,2,2000.00,'2025-03-20 06:36:29','Fanta'),
(42,32,13,3,3000.00,'2025-03-20 06:36:29','Bechou'),
(43,33,9,3,3500.00,'2025-03-26 07:53:14','Primus'),
(44,34,9,2,3500.00,'2025-03-26 08:58:53','Primus'),
(45,34,11,4,4000.00,'2025-03-26 08:58:53','Amstel'),
(46,34,13,1,3000.00,'2025-03-26 08:58:53','Bechou'),
(47,35,11,2,4000.00,'2025-03-26 10:54:39','Amstel'),
(48,35,12,1,2000.00,'2025-03-26 10:54:39','Fanta'),
(49,36,9,3,3500.00,'2025-03-26 10:56:28','Primus'),
(50,37,11,2,4000.00,'2025-03-26 11:03:26','Amstel'),
(51,38,11,2,4000.00,'2025-03-26 11:08:00','Amstel'),
(52,38,12,4,2000.00,'2025-03-26 11:08:00','Fanta'),
(53,38,13,3,3000.00,'2025-03-26 11:08:00','Bechou'),
(54,39,NULL,2,19000.00,'2025-03-26 11:10:28','kik'),
(55,40,11,1,4000.00,'2025-03-27 07:05:09','Amstel');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(100) NOT NULL,
  `quantity` int(11) DEFAULT 0,
  `price` decimal(10,2) DEFAULT 0.00,
  `bt_caisse` int(3) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `pau` decimal(10,2) DEFAULT 0.00,
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `plus` int(11) DEFAULT 0,
  `minus` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES
(9,'Primus',25,3500.00,20,'2025-03-16 19:10:15',3000.00,'2025-03-26 10:56:28',0,3),
(11,'Amstel',8,4000.00,12,'2025-03-16 19:55:34',3500.00,'2025-03-27 07:05:10',0,7),
(12,'Fanta',42,2000.00,24,'2025-03-16 19:55:42',1600.00,'2025-03-26 11:08:00',0,5),
(13,'Bechou',29,3000.00,20,'2025-03-18 05:04:09',2500.00,'2025-03-26 11:08:00',0,3),
(14,'Royale',78,4500.00,20,'2025-03-18 08:27:08',4000.00,'2025-03-20 16:53:40',0,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waiter`
--

DROP TABLE IF EXISTS `waiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `waiter` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(8) DEFAULT NULL,
  `cni` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waiter`
--

LOCK TABLES `waiter` WRITE;
/*!40000 ALTER TABLE `waiter` DISABLE KEYS */;
INSERT INTO `waiter` VALUES
(23,'Yves Nshemezimana','Bujumbura, Kigobe, Av. Kigina n°6','69667239','0303/45.913','2025-01-07 05:25:48'),
(25,'Kamunyana Janviere','Buterere','6123569','0467/44.2093','2025-03-12 20:19:32'),
(26,'Yves Nshemezimana  ','Buyengero  ','79921250','030345.913  ','2025-03-26 13:09:29'),
(27,'Yves Nshemezimana','Buyengero','79921250','030345.913','2025-03-26 13:12:51'),
(28,'Negos free','Bujumbura','75598943','859/9895.i8877','2025-03-27 07:06:44'),
(29,'Keza ','Kinama','873343','8879/895.7879','2025-03-27 07:13:46'),
(30,'Keza','Kinama ','87334','8879/895.787 ','2025-03-27 07:45:01'),
(31,'Kakunze ','Kinama ','689878','8879/895.787','2025-03-27 07:49:34'),
(32,'Kakunze Tresor','Kinama','6898788','8879/895.787 ','2025-03-27 07:50:26'),
(33,'Ines Kaneza','Butwe','78767563','009/945.0445','2025-03-27 07:51:51'),
(34,'Storage Kamina','Karusi','98893789','59.5894/803.5','2025-03-27 07:53:31'),
(35,'Munezero Emilie','Banda','8979598','907/8044.83509','2025-03-27 08:03:04');
/*!40000 ALTER TABLE `waiter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-03-28  6:20:08

/*
SQLyog Ultimate v12.4.3 (64 bit)
MySQL - 10.4.21-MariaDB : Database - kursuskomputer1610081
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`kursuskomputer1610081` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `kursuskomputer1610081`;

/*Table structure for table `karyawan` */

DROP TABLE IF EXISTS `karyawan`;

CREATE TABLE `karyawan` (
  `kodekar` char(20) NOT NULL,
  `namakar` varchar(50) DEFAULT NULL,
  `jkkar` varchar(50) DEFAULT NULL,
  `tgllahirkar` varchar(50) DEFAULT NULL,
  `bidangkar` varchar(50) DEFAULT NULL,
  `statuskar` varchar(50) DEFAULT NULL,
  `alamatkar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kodekar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `karyawan` */

insert  into `karyawan`(`kodekar`,`namakar`,`jkkar`,`tgllahirkar`,`bidangkar`,`statuskar`,`alamatkar`) values 
('k001','Rian nurdiansyah','laki laki','28 Feb 212','sisawu','kjku','jjjg'),
('K002','Rizky triananda','LAki laki','7 kan 21','Antah','Nun','Piaman'),
('K005','RA Nursss','12','13','14','15','16');

/*Table structure for table `pembayaran` */

DROP TABLE IF EXISTS `pembayaran`;

CREATE TABLE `pembayaran` (
  `kodepem` char(20) NOT NULL,
  `tglpem` varchar(50) DEFAULT NULL,
  `pemkodepend` char(20) DEFAULT NULL,
  `pambayar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kodepem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembayaran` */

insert  into `pembayaran`(`kodepem`,`tglpem`,`pemkodepend`,`pambayar`) values 
('p001','30 Jan 21','kp05','90000'),
('p002','22 feb 22','kp02','3000'),
('p003','1 jan 12','kp003','9000'),
('P004','12 jun 21','Pdf03','10000'),
('p005','1 mr 21','p009','10000');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

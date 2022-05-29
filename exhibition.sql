-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-05-29 18:35:36
-- 伺服器版本： 8.0.28
-- PHP 版本： 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `northwind`
--

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition`
--

CREATE TABLE `exhibition` (
  `exhibitionID` int NOT NULL,
  `exhibitionName` varchar(255) NOT NULL,
  `exhibitionStartDate` date NOT NULL,
  `exhibitionEndDate` date NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Longitude` float NOT NULL,
  `Latitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `exhibition`
--

INSERT INTO `exhibition` (`exhibitionID`, `exhibitionName`, `exhibitionStartDate`, `exhibitionEndDate`, `Location`, `Longitude`, `Latitude`) VALUES
(1, '123', '2022-06-20', '2022-06-25', '台北美術館', 121.525, 25.0724),
(2, '123', '2022-05-30', '2022-06-04', '奇美博物館', 120.226, 22.9346),
(3, '123', '2022-06-01', '2022-07-01', '奇美博物館', 120.226, 22.9346),
(4, '789', '2022-06-01', '2022-06-25', '高雄美術館', 120.287, 22.6567),
(5, '123', '2022-06-02', '2022-06-24', '高雄美術館', 120.287, 22.6567),
(6, '987', '2022-06-02', '2022-07-02', '高雄美術館', 120.287, 22.6567),
(7, '1212', '2022-05-31', '2022-06-03', '奇美博物館', 120.226, 22.9346),
(8, '654', '2022-06-01', '2022-06-08', '奇美博物館', 120.226, 22.9346);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `exhibition`
--
ALTER TABLE `exhibition`
  ADD PRIMARY KEY (`exhibitionID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition`
--
ALTER TABLE `exhibition`
  MODIFY `exhibitionID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

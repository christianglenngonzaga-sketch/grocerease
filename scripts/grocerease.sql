-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2025 at 07:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grocerease`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `color` varchar(7) DEFAULT '#10B981',
  `icon` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `user_id`, `name`, `color`, `icon`, `created_at`, `updated_at`) VALUES
(5, 1, 'Fruits & Vegetables', '#10B981', 'leaf', '2025-11-29 05:41:05', '2025-11-29 05:41:05'),
(6, 1, 'Dairy & Eggs', '#F59E0B', 'milk', '2025-11-29 05:41:07', '2025-11-29 05:41:07'),
(7, 1, 'Meat & Fish', '#EF4444', 'droplet', '2025-11-29 05:41:09', '2025-11-29 05:41:09'),
(8, 1, 'Pantry', '#8B5CF6', 'box', '2025-11-29 05:41:09', '2025-11-29 05:41:09'),
(9, 1, 'Meat & Seafood', '#EF4444', 'drumstick', '2025-11-29 06:05:17', '2025-11-29 06:05:17'),
(10, 1, 'Bakery', '#F97316', 'bread', '2025-11-29 06:05:17', '2025-11-29 06:05:17'),
(11, 1, 'Pantry / Dry Goods', '#8B5CF6', 'box', '2025-11-29 06:05:17', '2025-11-29 06:05:17'),
(12, 1, 'Beverages', '#3B82F6', 'cup', '2025-11-29 06:05:17', '2025-11-29 06:05:17'),
(13, 1, 'Household & Cleaning', '#06B6D4', 'cleaning', '2025-11-29 06:05:17', '2025-11-29 06:05:17');

-- --------------------------------------------------------

--
-- Table structure for table `default_categories`
--

CREATE TABLE `default_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `color` varchar(7) DEFAULT '#10B981',
  `icon` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `default_categories`
--

INSERT INTO `default_categories` (`id`, `name`, `color`, `icon`, `created_at`) VALUES
(1, 'Fruits & Vegetables', '#10B981', 'leaf', '2025-11-29 05:49:30'),
(2, 'Meat & Seafood', '#EF4444', 'drumstick', '2025-11-29 05:49:30'),
(3, 'Dairy & Eggs', '#F59E0B', 'milk', '2025-11-29 05:49:30'),
(4, 'Bakery', '#F97316', 'bread', '2025-11-29 05:49:30'),
(5, 'Pantry / Dry Goods', '#8B5CF6', 'box', '2025-11-29 05:49:30'),
(6, 'Beverages', '#3B82F6', 'cup', '2025-11-29 05:49:30'),
(7, 'Household & Cleaning', '#06B6D4', 'cleaning', '2025-11-29 05:49:30');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(150) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `quantity_unit` varchar(50) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `purchased` tinyint(1) DEFAULT 0,
  `purchased_at` timestamp NULL DEFAULT NULL,
  `estimated_price` decimal(10,2) DEFAULT NULL,
  `priority` enum('low','medium','high') DEFAULT 'medium',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `user_id`, `category_id`, `name`, `quantity`, `quantity_unit`, `notes`, `purchased`, `purchased_at`, `estimated_price`, `priority`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 5, 'Milo', 12, 'pcs', 'fsafsasffsa', 0, NULL, NULL, 'medium', '2025-11-29 06:00:33', '2025-11-29 06:00:33', NULL),
(2, 1, 11, 'fasafssaf', 1, 'pcs', '', 0, NULL, NULL, 'medium', '2025-11-29 06:10:10', '2025-11-29 06:10:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `action` varchar(50) NOT NULL,
  `entity_type` varchar(50) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`details`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`, `first_name`, `last_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'c-gonzaga@gmail.com', '$2b$10$uP16Gox0ucWiASAwPpts1uvhqwwOEzsDPOEVWEF5sVGJCuBCBeZxK', NULL, NULL, '2025-11-29 05:41:04', '2025-11-29 05:41:04', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_category` (`user_id`,`name`);

--
-- Indexes for table `default_categories`
--
ALTER TABLE `default_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_default_category_name` (`name`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_purchased` (`user_id`,`purchased`),
  ADD KEY `idx_category` (`category_id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_created` (`user_id`,`created_at`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `default_categories`
--
ALTER TABLE `default_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

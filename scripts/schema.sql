-- Create database
CREATE DATABASE IF NOT EXISTS grocerease;
USE grocerease;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(7) DEFAULT '#10B981',
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_category (user_id, name)
);

-- Items Table (Grocery List Items)
CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  category_id INT,
  name VARCHAR(150) NOT NULL,
  quantity INT DEFAULT 1,
  quantity_unit VARCHAR(50),
  notes TEXT,
  purchased BOOLEAN DEFAULT FALSE,
  purchased_at TIMESTAMP NULL,
  estimated_price DECIMAL(10, 2),
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  INDEX idx_user_purchased (user_id, purchased),
  INDEX idx_category (category_id)
);

-- Logs Table (Activity Tracking)
CREATE TABLE IF NOT EXISTS logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  action VARCHAR(50) NOT NULL,
  entity_type VARCHAR(50),
  entity_id INT,
  details JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_created (user_id, created_at)
);

-- Default (global) Categories
CREATE TABLE IF NOT EXISTS default_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(7) DEFAULT '#10B981',
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_default_category_name (name)
);

-- normalize any existing names (optional)
UPDATE default_categories
SET name = 'Meat & Seafood', icon = 'drumstick'
WHERE name = 'Meat & Fish';

UPDATE default_categories
SET name = 'Pantry / Dry Goods'
WHERE name = 'Pantry';

-- insert the full 7 (idempotent)
INSERT IGNORE INTO default_categories (name, color, icon) VALUES
  ('Fruits & Vegetables', '#10B981', 'leaf'),
  ('Meat & Seafood',     '#EF4444', 'drumstick'),
  ('Dairy & Eggs',       '#F59E0B', 'milk'),
  ('Bakery',             '#F97316', 'bread'),
  ('Pantry / Dry Goods', '#8B5CF6', 'box'),
  ('Beverages',          '#3B82F6', 'cup'),
  ('Household & Cleaning','#06B6D4', 'cleaning');

-- verify
SELECT id, name, color, icon, created_at FROM default_categories ORDER BY id;

-- Seed Data
-- Seed inserts removed: accounts, categories and items will be created at runtime when users register.
-- If you need initial data for testing add INSERT statements here or seed via app endpoints.

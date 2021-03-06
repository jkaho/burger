-- DATABASE CREATION --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- DATABASE USE --
USE burgers_db;

-- TABLE CREATION --
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(35),
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY(id)
);

-- TABLE VIEW --
SELECT * FROM burgers;

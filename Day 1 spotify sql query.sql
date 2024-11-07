-- CREATE DATABASE spotify;
-- use spotify;

-- Create tables:
-- 1. Songs
-- 2. Artist
-- CREATE TABLE songs (
-- 	song_id INT(50) AUTO_INCREMENT NOT NULL,
-- 	title VARCHAR(20) NOT NULL,
-- 	artist VARCHAR(20) NOT NULL, 
-- 	album VARCHAR(20) NULL,
--     PRIMARY KEY (`song_id`)
-- ) ENGINE=InnoDB;

-- CREATE TABLE artist (
-- 	artist_id INT(50) AUTO_INCREMENT NOT NULL,
-- 	first_name VARCHAR(20) NOT NULL,
--     last_name VARCHAR(20) NOT NULL,
-- 	dob DATE NOT NULL, 
-- 	skill VARCHAR(20) NOT NULL,
--     PRIMARY KEY (`artist_id`)
-- ) ENGINE=InnoDB;

-- Insert data into songs table
INSERT INTO songs 
(song_id, title, artist, album)
VALUES
(NULL, "hunter", "anirudh", "vettaiyan");

-- Retreive data to check table
SELECT * FROM songs;

-- Retreive a particular song 
SELECT * FROM songs WHERE title="hunter";

-- Delete a record from table
DELETE FROM songs WHERE song_id=4;

-- Update a record in a table
UPDATE songs SET `artist` = 'aniruth' WHERE song_id=2;

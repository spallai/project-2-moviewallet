CREATE DATABASE moviewallet_db;
USE moviewallet_db;

CREATE TABLE movies (
	id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    imdbId VARCHAR(20),
    rating VARCHAR(5),
    genre VARCHAR(100),
    plot TEXT,
    actors VARCHAR(255),
    status SMALLINT,
    PRIMARY KEY (id)
);

CREATE TABLE user (
	id INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE playlists (
	id INTEGER NOT NULL AUTO_INCREMENT,
    user_id INTEGER,
    movies_id TEXT, --This will be an array of the movie id's--
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    PRIMARY KEY (id)
);
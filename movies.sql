CREATE DATABASE movies;

USE movies

CREATE TABLE samuel_l_jackson_movies ( movie VARCHAR(255), `character` VARCHAR(255), year INT(4) );

INSERT INTO samuel_l_jackson_movies (movie, `character`, year) VALUES ('Shaft', 'John Shaft', '2000');

INSERT INTO samuel_l_jackson_movies (movie, `character`, year) VALUES ('Star Wars: The Clone Wars', 'Mace Windu', '2008'),('Captain America: The First Avenger', 'Nick Fury', '2011'), ('Fury', 'Foley', '2012'),('The Avengers', 'Nick Fury', '2012'), ('Django Unchained', 'Stephen', '2012'), ('Avengers: Age of Ultron', 'Nick Fury', '1015');

UPDATE samuel_l_jackson_movies SET year='2015' WHERE movie='Avengers: Age of Ultron';

DELETE FROM samuel_l_jackson_movies WHERE movie='Jackie Brown';


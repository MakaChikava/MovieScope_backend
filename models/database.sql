CREATE DATABASE movieScope;

CREATE TABLE movieList(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(255),
    poster VARCHAR(255),
    genre VARCHAR(30),
    type VARCHAR(30),
    duration VARCHAR(15),
    release_date VARCHAR(30)
);
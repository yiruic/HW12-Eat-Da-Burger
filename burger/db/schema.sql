CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(

	id auto_increment int primary key,
    burger_name varchar(200) not null,
    devoured boolean

);
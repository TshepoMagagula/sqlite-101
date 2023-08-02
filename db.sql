-- create the table DDL (Database Definition Language)

CREATE TABLE greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greeting text
);

-- DML (Database Manipulation Language)

SELECT * FROM greetings;

SELECT COUNT(*) FROM greetings;

INSERT INTO greetings (language, greeting) VALUES ('Zulu', 'Sawubona');

-- add two more languages

INSERT INTO greetings (language, greeting) 
VALUES('Xhosa', 'Molo')

INSERT INTO greetings (language, greeting) 
VALUES('English', 'Hello')

--delete from greetings where id > 1;
--delete from greetings where id in (2,3);
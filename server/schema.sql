-- DROP DATABASE forumDB;

CREATE DATABASE forumDB;

USE forumDB;

CREATE TABLE users(id INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(24));

CREATE TABLE posts (id INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  text VARCHAR(140), 
  created_at TIMESTAMP, 
  user_id INT(3),
  CONSTRAINT messages_fk FOREIGN KEY (user_id) REFERENCES users (id)
);

-- command line by typing:
-- mysql -u root < server/schema.sql